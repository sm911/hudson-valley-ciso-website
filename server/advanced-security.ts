import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { buildPermissionsPolicy } from './csp-config';

// Security token generation
export function generateSecurityTokens() {
  return {
    csrfToken: crypto.randomBytes(32).toString('hex'),
    requestId: crypto.randomUUID(),
    timestamp: Date.now(),
  };
}

// Advanced security headers middleware
export function advancedSecurityHeaders() {
  return (req: Request, res: Response, next: NextFunction) => {
    // Generate unique request ID for tracking
    const requestId = crypto.randomUUID();
    req.headers['x-request-id'] = requestId;
    res.setHeader('X-Request-ID', requestId);

    // OWASP recommended security headers
    res.setHeader('X-Frame-Options', 'DENY'); // Stricter than SAMEORIGIN
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Download-Options', 'noopen');
    res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
    
    // Referrer Policy - strict for security
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // DNS Prefetch Control
    res.setHeader('X-DNS-Prefetch-Control', 'off');
    
    // Permissions Policy (formerly Feature Policy)
    res.setHeader('Permissions-Policy', buildPermissionsPolicy());
    
    // Cross-Origin headers
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
    
    // Cache control for security
    if (req.path.startsWith('/api/')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.setHeader('Surrogate-Control', 'no-store');
    }
    
    // Remove powered-by header
    res.removeHeader('X-Powered-By');
    
    // Add security timestamp
    res.setHeader('X-Security-Timestamp', new Date().toISOString());
    
    next();
  };
}

// Request sanitization middleware
export function requestSanitizer() {
  return (req: Request, res: Response, next: NextFunction) => {
    // Sanitize headers
    const dangerousHeaders = [
      'x-forwarded-host',
      'x-forwarded-proto',
      'x-forwarded-for',
    ];
    
    dangerousHeaders.forEach(header => {
      if (req.headers[header] && !isTrustedProxy(req.ip)) {
        delete req.headers[header];
      }
    });
    
    // Validate Content-Type for POST/PUT requests
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      const contentType = req.headers['content-type'];
      const allowedTypes = [
        'application/json',
        'application/x-www-form-urlencoded',
        'multipart/form-data',
      ];
      
      if (contentType && !allowedTypes.some(type => contentType.includes(type))) {
        return res.status(415).json({ 
          error: 'Unsupported Media Type',
          message: 'Invalid Content-Type header' 
        });
      }
    }
    
    // Limit request size for specific endpoints
    if (req.path.startsWith('/api/contact') || req.path.startsWith('/api/newsletter')) {
      const contentLength = parseInt(req.headers['content-length'] || '0', 10);
      const maxSize = 10 * 1024; // 10KB max for forms
      
      if (contentLength > maxSize) {
        return res.status(413).json({ 
          error: 'Payload Too Large',
          message: 'Request body exceeds maximum allowed size' 
        });
      }
    }
    
    next();
  };
}

// IP-based security checks
function isTrustedProxy(ip?: string): boolean {
  if (!ip) return false;
  
  const trustedProxies = process.env.TRUSTED_PROXIES?.split(',') || [
    '127.0.0.1',
    '::1',
    '10.0.0.0/8',
    '172.16.0.0/12',
    '192.168.0.0/16',
  ];
  
  return trustedProxies.some(proxy => {
    if (proxy.includes('/')) {
      // CIDR notation check
      return isIpInCidr(ip, proxy);
    }
    return ip === proxy;
  });
}

// Check if IP is in CIDR range
function isIpInCidr(ip: string, cidr: string): boolean {
  // Simple implementation for IPv4
  const [range, bits = '32'] = cidr.split('/');
  const mask = ~(2 ** (32 - parseInt(bits, 10)) - 1);
  
  const ipNum = ipToNumber(ip);
  const rangeNum = ipToNumber(range);
  
  return (ipNum & mask) === (rangeNum & mask);
}

// Convert IP to number for comparison
function ipToNumber(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
}

// Security monitoring middleware
export function securityMonitoring() {
  const suspiciousPatterns = [
    /(\.\.[\/\\])+/gi, // Path traversal
    /<script[^>]*>.*?<\/script>/gi, // Script injection
    /javascript:/gi, // JavaScript protocol
    /on\w+\s*=/gi, // Event handlers
    /union.*select/gi, // SQL injection
    /exec\s*\(/gi, // Command execution
    /eval\s*\(/gi, // Eval execution
    /%0[0-9a-f]/gi, // Null byte injection
    /\${.*}/g, // Template injection
    /{{.*}}/g, // Template injection
  ];
  
  return (req: Request, res: Response, next: NextFunction) => {
    const requestData = {
      path: req.path,
      query: JSON.stringify(req.query),
      body: JSON.stringify(req.body),
      headers: JSON.stringify(req.headers),
    };
    
    // Check for suspicious patterns
    const dataString = Object.values(requestData).join(' ');
    let threatDetected = false;
    let detectedPattern = '';
    
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(dataString)) {
        threatDetected = true;
        detectedPattern = pattern.source;
        break;
      }
    }
    
    if (threatDetected) {
      // Log security event
      console.warn('[SECURITY ALERT]', {
        type: 'Suspicious Pattern Detected',
        pattern: detectedPattern,
        ip: req.ip,
        path: req.path,
        method: req.method,
        userAgent: req.headers['user-agent'],
        timestamp: new Date().toISOString(),
      });
      
      // Optionally block the request
      if (process.env.STRICT_SECURITY === 'true') {
        return res.status(400).json({ 
          error: 'Bad Request',
          message: 'Request contains invalid characters' 
        });
      }
    }
    
    // Track security metrics
    res.on('finish', () => {
      if (res.statusCode >= 400) {
        console.info('[SECURITY METRIC]', {
          type: 'Failed Request',
          status: res.statusCode,
          ip: req.ip,
          path: req.path,
          method: req.method,
          duration: Date.now() - req.socket.bytesRead,
        });
      }
    });
    
    next();
  };
}

// API key validation middleware (for future use)
export function apiKeyValidation(requiredScopes: string[] = []) {
  return (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'] as string;
    
    if (!apiKey) {
      return res.status(401).json({ 
        error: 'Unauthorized',
        message: 'API key required' 
      });
    }
    
    // Validate API key format
    if (!/^[a-zA-Z0-9]{32,64}$/.test(apiKey)) {
      return res.status(401).json({ 
        error: 'Unauthorized',
        message: 'Invalid API key format' 
      });
    }
    
    // Here you would typically validate against a database
    // For now, we'll use environment variable
    const validApiKeys = process.env.API_KEYS?.split(',') || [];
    
    if (!validApiKeys.includes(apiKey)) {
      return res.status(401).json({ 
        error: 'Unauthorized',
        message: 'Invalid API key' 
      });
    }
    
    // Check scopes if required
    if (requiredScopes.length > 0) {
      // Implementation would check API key scopes
      // For now, we'll assume all keys have all scopes
    }
    
    next();
  };
}

// Security event logger
export class SecurityEventLogger {
  private events: any[] = [];
  private maxEvents = 1000;
  
  logEvent(event: {
    type: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    details: any;
    ip?: string;
    userId?: string;
  }) {
    const logEntry = {
      ...event,
      timestamp: new Date().toISOString(),
      id: crypto.randomUUID(),
    };
    
    this.events.push(logEntry);
    
    // Keep only recent events in memory
    if (this.events.length > this.maxEvents) {
      this.events.shift();
    }
    
    // Log critical events immediately
    if (event.severity === 'critical' || event.severity === 'high') {
      console.error('[SECURITY EVENT]', logEntry);
    } else {
      console.warn('[SECURITY EVENT]', logEntry);
    }
    
    // Here you could send to external logging service
    // await sendToSecurityMonitoring(logEntry);
  }
  
  getRecentEvents(count: number = 100) {
    return this.events.slice(-count);
  }
  
  clearEvents() {
    this.events = [];
  }
}

export const securityLogger = new SecurityEventLogger();