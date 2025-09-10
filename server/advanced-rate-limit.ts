import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';
import slowDown from 'express-slow-down';
import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

// Redis client for distributed rate limiting
let redisClient: Redis | null = null;

// Initialize Redis if available
if (process.env.REDIS_URL) {
  redisClient = new Redis(process.env.REDIS_URL);
  redisClient.on('error', (err) => {
    console.error('Redis connection error:', err);
    redisClient = null; // Fallback to memory store
  });
  redisClient.on('connect', () => {
    console.log('Connected to Redis for rate limiting');
  });
}

// IP allowlist and blocklist
const ipAllowlist = new Set(process.env.RATE_LIMIT_ALLOWLIST?.split(',') || []);
const ipBlocklist = new Set(process.env.RATE_LIMIT_BLOCKLIST?.split(',') || []);

// Temporary dynamic blocklist (for runtime blocking)
const dynamicBlocklist = new Map<string, { reason: string; until: Date }>();

// Custom key generator for more granular rate limiting
export function generateRateLimitKey(req: Request): string {
  // Use combination of IP, user ID (if authenticated), and endpoint
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  
  // Handle IPv6 addresses properly for rate limiting (use /64 prefix)
  const normalizedIp = ip.includes(':') 
    ? ip.split(':').slice(0, 4).join(':') 
    : ip;
  
  const userId = (req as any).user?.id || 'anonymous';
  const endpoint = req.path;
  
  return `${normalizedIp}:${userId}:${endpoint}`;
}

// Skip function for allowlisted IPs or authenticated users
export function skipRateLimit(req: Request): boolean {
  const ip = req.ip || req.socket.remoteAddress || '';
  
  // Skip if IP is allowlisted
  if (ipAllowlist.has(ip)) {
    return true;
  }
  
  // Skip for authenticated admin users
  if ((req as any).user?.role === 'admin') {
    return true;
  }
  
  // Skip for requests with valid API key
  const apiKey = req.headers['x-api-key'];
  if (apiKey && process.env.RATE_LIMIT_BYPASS_KEYS?.includes(apiKey as string)) {
    return true;
  }
  
  return false;
}

// Check if IP is blocked
export function isBlocked(req: Request): boolean {
  const ip = req.ip || req.socket.remoteAddress || '';
  
  // Check permanent blocklist
  if (ipBlocklist.has(ip)) {
    return true;
  }
  
  // Check dynamic blocklist
  const blockEntry = dynamicBlocklist.get(ip);
  if (blockEntry) {
    if (blockEntry.until > new Date()) {
      return true;
    } else {
      // Remove expired block
      dynamicBlocklist.delete(ip);
    }
  }
  
  return false;
}

// Block an IP dynamically
export function blockIP(ip: string, duration: number = 3600000, reason: string = 'Suspicious activity') {
  const until = new Date(Date.now() + duration);
  dynamicBlocklist.set(ip, { reason, until });
  console.warn(`IP blocked: ${ip} until ${until.toISOString()} - Reason: ${reason}`);
}

// Advanced rate limiter factory with Redis support
export function createAdvancedRateLimiter(options: {
  windowMs?: number;
  max?: number;
  message?: string;
  keyGenerator?: (req: Request) => string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}): RateLimitRequestHandler {
  const config: any = {
    windowMs: options.windowMs || 15 * 60 * 1000,
    max: options.max || 100,
    message: options.message || 'Too many requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: options.keyGenerator || generateRateLimitKey,
    skip: skipRateLimit,
    validate: { default: true, keyGeneratorIpFallback: false },
    skipSuccessfulRequests: options.skipSuccessfulRequests || false,
    skipFailedRequests: options.skipFailedRequests || false,
    
    // Custom handler for rate limit exceeded
    handler: (req: Request, res: Response) => {
      const ip = req.ip || req.socket.remoteAddress || 'unknown';
      
      // Log rate limit hit
      console.warn('Rate limit exceeded:', {
        ip,
        path: req.path,
        method: req.method,
        timestamp: new Date().toISOString(),
      });
      
      // Consider blocking IP if hitting rate limits repeatedly
      const key = `ratelimit:abuse:${ip}`;
      const abuseCount = (global as any)[key] || 0;
      (global as any)[key] = abuseCount + 1;
      
      if (abuseCount > 10) {
        blockIP(ip, 3600000, 'Repeated rate limit violations');
      }
      
      res.status(429).json({
        error: 'Too Many Requests',
        message: options.message,
        retryAfter: Math.ceil(options.windowMs! / 1000),
      });
    },
  };
  
  // Use Redis store if available
  if (redisClient) {
    config.store = new (RedisStore as any)({
      client: redisClient,
      prefix: 'rl:',
    });
  }
  
  return rateLimit(config);
}

// Sliding window rate limiter for more accurate limiting
export function createSlidingWindowLimiter(options: {
  windowMs: number;
  max: number;
  message?: string;
}): any {
  // Store request timestamps for each key
  const requestLog = new Map<string, number[]>();
  
  return (req: Request, res: Response, next: NextFunction) => {
    if (skipRateLimit(req)) {
      return next();
    }
    
    if (isBlocked(req)) {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Your IP has been blocked due to suspicious activity.',
      });
    }
    
    const key = generateRateLimitKey(req);
    const now = Date.now();
    const windowStart = now - options.windowMs;
    
    // Get or create request log for this key
    let timestamps = requestLog.get(key) || [];
    
    // Remove old timestamps outside the window
    timestamps = timestamps.filter(t => t > windowStart);
    
    // Check if limit exceeded
    if (timestamps.length >= options.max) {
      // Add rate limit headers
      res.setHeader('X-RateLimit-Limit', options.max.toString());
      res.setHeader('X-RateLimit-Remaining', '0');
      res.setHeader('X-RateLimit-Reset', new Date(timestamps[0] + options.windowMs).toISOString());
      
      return res.status(429).json({
        error: 'Too Many Requests',
        message: options.message || 'Rate limit exceeded',
        retryAfter: Math.ceil((timestamps[0] + options.windowMs - now) / 1000),
      });
    }
    
    // Add current timestamp
    timestamps.push(now);
    requestLog.set(key, timestamps);
    
    // Add rate limit headers
    res.setHeader('X-RateLimit-Limit', options.max.toString());
    res.setHeader('X-RateLimit-Remaining', (options.max - timestamps.length).toString());
    res.setHeader('X-RateLimit-Reset', new Date(now + options.windowMs).toISOString());
    
    // Clean up old entries periodically
    if (Math.random() < 0.01) { // 1% chance
      const entries = Array.from(requestLog.entries());
      for (const [k, v] of entries) {
        if (v.length === 0 || v[v.length - 1] < windowStart) {
          requestLog.delete(k);
        }
      }
    }
    
    next();
  };
}

// Progressive delay middleware (slows down responses for repeat offenders)
export function createProgressiveDelay(options: {
  windowMs?: number;
  delayAfter?: number;
  delayMs?: number;
  maxDelayMs?: number;
}): any {
  const config = {
    windowMs: options.windowMs || 15 * 60 * 1000,
    delayAfter: options.delayAfter || 10,
    delayMs: () => options.delayMs || 500,
    maxDelayMs: options.maxDelayMs || 20000,
    skipSuccessfulRequests: true,
    skipFailedRequests: false,
    keyGenerator: generateRateLimitKey,
    skip: skipRateLimit,
    validate: { default: true, delayMs: false, keyGeneratorIpFallback: false },
  };
  
  // Use Redis store if available
  if (redisClient) {
    (config as any).store = new (RedisStore as any)({
      client: redisClient,
      prefix: 'sd:',
    });
  }
  
  return slowDown(config);
}

// Enhanced rate limiters for different scenarios
export const enhancedRateLimiters = {
  // Strict limiter for authentication endpoints
  auth: createAdvancedRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts
    message: 'Too many authentication attempts. Please try again later.',
    skipSuccessfulRequests: true,
  }),
  
  // API endpoint limiter with sliding window
  api: createSlidingWindowLimiter({
    windowMs: 60 * 1000, // 1 minute
    max: 60, // 60 requests per minute
    message: 'API rate limit exceeded. Please slow down your requests.',
  }),
  
  // File upload limiter
  upload: createAdvancedRateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // 10 uploads per hour
    message: 'Upload limit reached. Please try again later.',
  }),
  
  // Search endpoint limiter
  search: createAdvancedRateLimiter({
    windowMs: 60 * 1000, // 1 minute
    max: 30, // 30 searches per minute
    message: 'Too many search requests. Please wait before searching again.',
  }),
  
  // Progressive delay for general requests
  progressiveDelay: createProgressiveDelay({
    windowMs: 15 * 60 * 1000,
    delayAfter: 50,
    delayMs: 500,
    maxDelayMs: 10000,
  }),
};

// Rate limit monitoring
export class RateLimitMonitor {
  private metrics = {
    totalRequests: 0,
    blockedRequests: 0,
    allowedRequests: 0,
    byEndpoint: new Map<string, number>(),
    byIP: new Map<string, number>(),
  };
  
  trackRequest(req: Request, blocked: boolean) {
    this.metrics.totalRequests++;
    
    if (blocked) {
      this.metrics.blockedRequests++;
    } else {
      this.metrics.allowedRequests++;
    }
    
    // Track by endpoint
    const endpoint = req.path;
    this.metrics.byEndpoint.set(
      endpoint,
      (this.metrics.byEndpoint.get(endpoint) || 0) + 1
    );
    
    // Track by IP
    const ip = req.ip || 'unknown';
    this.metrics.byIP.set(
      ip,
      (this.metrics.byIP.get(ip) || 0) + 1
    );
  }
  
  getMetrics() {
    return {
      ...this.metrics,
      blockRate: this.metrics.totalRequests > 0
        ? (this.metrics.blockedRequests / this.metrics.totalRequests) * 100
        : 0,
      topEndpoints: Array.from(this.metrics.byEndpoint.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10),
      topIPs: Array.from(this.metrics.byIP.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10),
    };
  }
  
  reset() {
    this.metrics = {
      totalRequests: 0,
      blockedRequests: 0,
      allowedRequests: 0,
      byEndpoint: new Map(),
      byIP: new Map(),
    };
  }
}

export const rateLimitMonitor = new RateLimitMonitor();

// Middleware to track all requests for monitoring
export function rateLimitTracking() {
  return (req: Request, res: Response, next: NextFunction) => {
    const originalSend = res.send;
    
    res.send = function(data) {
      const blocked = res.statusCode === 429;
      rateLimitMonitor.trackRequest(req, blocked);
      return originalSend.call(this, data);
    };
    
    next();
  };
}

// IP management functions
export function addToAllowlist(ip: string) {
  ipAllowlist.add(ip);
  console.log(`IP added to allowlist: ${ip}`);
}

export function removeFromAllowlist(ip: string) {
  ipAllowlist.delete(ip);
  console.log(`IP removed from allowlist: ${ip}`);
}

export function addToBlocklist(ip: string) {
  ipBlocklist.add(ip);
  console.log(`IP added to blocklist: ${ip}`);
}

export function removeFromBlocklist(ip: string) {
  ipBlocklist.delete(ip);
  dynamicBlocklist.delete(ip);
  console.log(`IP removed from blocklist: ${ip}`);
}

export function getBlockedIPs() {
  return {
    permanent: Array.from(ipBlocklist),
    temporary: Array.from(dynamicBlocklist.entries()).map(([ip, data]) => ({
      ip,
      ...data,
    })),
  };
}