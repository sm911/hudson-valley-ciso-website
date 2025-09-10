import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import express, { Express, Request, Response, NextFunction } from 'express';
import { cspMiddleware, cspReportHandler } from './csp-config';
import { advancedSecurityHeaders, requestSanitizer, securityMonitoring } from './advanced-security';
import { 
  enhancedRateLimiters, 
  rateLimitTracking, 
  isBlocked,
  createAdvancedRateLimiter
} from './advanced-rate-limit';

// Rate limiting configurations for different endpoints
export const rateLimiters = {
  // General API rate limit with advanced features
  general: createAdvancedRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    message: 'Too many requests from this IP, please try again later.',
  }),

  // Strict rate limit for contact form
  contact: createAdvancedRateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 submissions per window
    message: 'Too many contact form submissions. Please try again in 15 minutes.',
    skipSuccessfulRequests: false,
  }),

  // Newsletter subscription rate limit
  newsletter: createAdvancedRateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 subscriptions per hour
    message: 'Too many subscription attempts. Please try again later.',
  }),

  // Starter kit download rate limit
  starterKit: createAdvancedRateLimiter({
    windowMs: 24 * 60 * 60 * 1000, // 24 hours
    max: 2, // 2 downloads per day
    message: 'Daily download limit reached. Please try again tomorrow.',
  }),
  
  // Use enhanced rate limiters from advanced module
  ...enhancedRateLimiters,
};

// CORS configuration
export const corsOptions: cors.CorsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // In development, allow all localhost origins
    if (process.env.NODE_ENV === 'development') {
      // Allow any localhost origin or no origin
      if (!origin || origin.includes('localhost') || origin.includes('127.0.0.1')) {
        return callback(null, true);
      }
    }
    
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5000',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5000',
      'https://hudsonvalleyciso.com',
      'https://www.hudsonvalleyciso.com',
      'https://hvciso.com',
      'https://www.hvciso.com'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
  exposedHeaders: ['X-CSRF-Token'],
};

// IP blocking middleware
export function ipBlockingMiddleware() {
  return (req: Request, res: Response, next: NextFunction) => {
    if (isBlocked(req)) {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Your IP has been blocked. Please contact support if you believe this is an error.',
      });
    }
    next();
  };
}

// Apply security middleware to Express app
export function applySecurityMiddleware(app: Express) {
  // Enable trust proxy for accurate rate limiting behind reverse proxies
  app.set('trust proxy', 1);

  // IP blocking - Apply first to reject blocked IPs immediately
  app.use(ipBlockingMiddleware());
  
  // Rate limit tracking for monitoring
  app.use(rateLimitTracking());

  // Advanced security headers
  app.use(advancedSecurityHeaders());
  
  // Request sanitization
  app.use(requestSanitizer());
  
  // Security monitoring
  app.use(securityMonitoring());
  
  // Progressive delay for all requests (slows down repeat offenders)
  app.use(rateLimiters.progressiveDelay);

  // CORS - Apply before other middleware
  app.use(cors(corsOptions));

  // Use custom CSP middleware with nonce support
  const isDevelopment = process.env.NODE_ENV === 'development';
  app.use(cspMiddleware({
    reportOnly: process.env.CSP_REPORT_ONLY === 'true' || isDevelopment,
    nonce: true,
    reportUri: process.env.CSP_REPORT_URI || '/api/csp-report',
  }));
  
  // CSP violation reporting endpoint
  app.post('/api/csp-report', express.json({ type: 'application/csp-report' }), cspReportHandler());
  
  // Helmet for additional security headers (excluding CSP since we handle it separately)
  app.use(
    helmet({
      contentSecurityPolicy: false, // We handle CSP separately
      dnsPrefetchControl: { allow: false },
      frameguard: { action: 'deny' },
      hidePoweredBy: true,
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
      ieNoOpen: true,
      noSniff: true,
      originAgentCluster: true,
      permittedCrossDomainPolicies: false,
      referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
      xssFilter: true,
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'production',
    })
  );

  // Sanitize user input to prevent NoSQL injection attacks
  app.use(mongoSanitize({
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
      console.warn(`Sanitized potentially malicious input in ${key}`);
    },
  }));

  // Apply general rate limiting to all API routes
  app.use('/api/', rateLimiters.general);
  
  // Apply stricter rate limiting to sensitive endpoints
  app.use('/api/admin/', rateLimiters.auth);
  app.use('/api/search', rateLimiters.search);
  app.use('/api/upload', rateLimiters.upload);
}

// Security utility functions
export const sanitizeInput = (input: string): string => {
  // Remove any HTML tags
  return input.replace(/<[^>]*>/g, '')
    // Remove script tags specifically
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove on* event handlers
    .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/on\w+\s*=\s*'[^']*'/gi, '')
    .replace(/on\w+\s*=\s*[^\s>]*/gi, '')
    // Trim whitespace
    .trim();
};

// Function to mask sensitive data in logs
export const maskSensitiveData = (data: any): any => {
  if (typeof data !== 'object' || data === null) {
    return data;
  }

  const masked = { ...data };
  const sensitiveFields = ['email', 'phone', 'password', 'token', 'apiKey', 'secret'];

  for (const field of sensitiveFields) {
    if (masked[field]) {
      if (field === 'email') {
        // Partially mask email
        const [local, domain] = masked[field].split('@');
        masked[field] = `${local.substring(0, 2)}***@${domain}`;
      } else if (field === 'phone') {
        // Mask phone number
        masked[field] = masked[field].replace(/\d(?=\d{4})/g, '*');
      } else {
        // Fully mask other sensitive fields
        masked[field] = '***REDACTED***';
      }
    }
  }

  return masked;
};