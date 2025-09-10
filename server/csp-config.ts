import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';

// CSP Directive Configuration
export interface CSPConfig {
  reportOnly?: boolean;
  reportUri?: string;
  nonce?: boolean;
  upgradeInsecureRequests?: boolean;
}

// Generate a nonce for each request
export function generateNonce(): string {
  return crypto.randomBytes(16).toString('base64');
}

// Comprehensive CSP directives for production
export function getCSPDirectives(nonce?: string, isDevelopment: boolean = false) {
  const baseDirectives = {
    defaultSrc: ["'self'"],
    
    scriptSrc: [
      "'self'",
      ...(nonce ? [`'nonce-${nonce}'`] : []),
      ...(isDevelopment ? [
        "'unsafe-inline'", 
        "'unsafe-eval'",
        "http://localhost:*",
        "ws://localhost:*",
        "http://127.0.0.1:*",
        "ws://127.0.0.1:*"
      ] : ["'strict-dynamic'"]), // Only use strict-dynamic in production
      "https://calendly.com",
      "https://assets.calendly.com",
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
      "https://cdn.jsdelivr.net", // For any CDN scripts
      "https://replit.com", // For Replit banner
    ],
    
    styleSrc: [
      "'self'",
      ...(isDevelopment ? ["'unsafe-inline'"] : [`'nonce-${nonce}'`]),
      "https://fonts.googleapis.com",
      "https://calendly.com",
      "https://assets.calendly.com",
    ],
    
    imgSrc: [
      "'self'",
      "data:",
      "blob:",
      "https:",
      "https://images.unsplash.com", // Specific for hero background
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
    ],
    
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com",
      "data:",
    ],
    
    connectSrc: [
      "'self'",
      "https://calendly.com",
      "https://api.calendly.com",
      "https://www.google-analytics.com",
      "https://analytics.google.com",
      "https://www.googletagmanager.com",
      ...(isDevelopment ? [
        "ws://localhost:*",
        "wss://localhost:*",
        "http://localhost:*",
        "ws://127.0.0.1:*",
        "wss://127.0.0.1:*",
        "http://127.0.0.1:*"
      ] : []),
    ],
    
    mediaSrc: ["'self'", "blob:"],
    
    objectSrc: ["'none'"],
    
    childSrc: [
      "'self'",
      "https://calendly.com", // For Calendly embed
      "blob:",
    ],
    
    frameSrc: [
      "'self'",
      "https://calendly.com",
      "https://calendly.com/",
    ],
    
    frameAncestors: ["'self'"],
    
    formAction: ["'self'", "https://calendly.com"],
    
    baseUri: ["'self'"],
    
    manifestSrc: ["'self'"],
    
    workerSrc: ["'self'", "blob:"],
    
    // Reporting
    reportUri: process.env.CSP_REPORT_URI || '/api/csp-report',
  };

  // Add upgrade-insecure-requests in production
  if (!isDevelopment && !baseDirectives.connectSrc.includes('ws://localhost:*')) {
    return {
      ...baseDirectives,
      upgradeInsecureRequests: [],
    };
  }

  return baseDirectives;
}

// CSP Middleware with nonce support
export function cspMiddleware(config: CSPConfig = {}) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Generate nonce if enabled
    const nonce = config.nonce ? generateNonce() : undefined;
    
    // Store nonce in res.locals for use in templates
    if (nonce) {
      res.locals.nonce = nonce;
    }

    const isDevelopment = process.env.NODE_ENV === 'development';
    const directives = getCSPDirectives(nonce, isDevelopment);
    
    // Build CSP header string
    const cspString = Object.entries(directives)
      .map(([key, values]) => {
        const directive = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (Array.isArray(values)) {
          return values.length > 0 ? `${directive} ${values.join(' ')}` : '';
        }
        return `${directive}`;
      })
      .filter(Boolean)
      .join('; ');

    // Set CSP header (report-only mode for testing)
    const headerName = config.reportOnly 
      ? 'Content-Security-Policy-Report-Only' 
      : 'Content-Security-Policy';
    
    res.setHeader(headerName, cspString);
    
    next();
  };
}

// Import tracking function
import { trackCSPViolation } from './security-monitoring';

// CSP Report Handler
export function cspReportHandler() {
  return async (req: Request, res: Response) => {
    try {
      const report = req.body;
      
      // Log CSP violations
      if (report && report['csp-report']) {
        const violation = report['csp-report'];
        
        // Track violation in metrics
        trackCSPViolation();
        
        console.warn('CSP Violation:', {
          documentUri: violation['document-uri'],
          violatedDirective: violation['violated-directive'],
          blockedUri: violation['blocked-uri'],
          lineNumber: violation['line-number'],
          columnNumber: violation['column-number'],
          sourceFile: violation['source-file'],
          timestamp: new Date().toISOString(),
        });
        
        // You can also send this to a logging service
        // await logToService(violation);
      }
      
      res.status(204).end();
    } catch (error) {
      console.error('Error processing CSP report:', error);
      res.status(500).json({ error: 'Failed to process CSP report' });
    }
  };
}

// Feature Policy / Permissions Policy configuration
export function getPermissionsPolicy() {
  return {
    accelerometer: ["'none'"],
    ambientLightSensor: ["'none'"],
    autoplay: ["'self'"],
    battery: ["'none'"],
    camera: ["'none'"],
    displayCapture: ["'none'"],
    documentDomain: ["'none'"],
    encryptedMedia: ["'self'"],
    executionWhileNotRendered: ["'self'"],
    executionWhileOutOfViewport: ["'self'"],
    fullscreen: ["'self'"],
    geolocation: ["'none'"],
    gyroscope: ["'none'"],
    layoutAnimations: ["'self'"],
    legacyImageFormats: ["'self'"],
    magnetometer: ["'none'"],
    microphone: ["'none'"],
    midi: ["'none'"],
    navigationOverride: ["'self'"],
    oversizedImages: ["'self'"],
    payment: ["'none'"],
    pictureInPicture: ["'self'"],
    publickeyCredentialsGet: ["'none'"],
    speakerSelection: ["'none'"],
    syncXhr: ["'none'"],
    unoptimizedImages: ["'self'"],
    unsizedMedia: ["'self'"],
    usb: ["'none'"],
    screenWakeLock: ["'none'"],
    webShare: ["'none'"],
    xrSpatialTracking: ["'none'"],
  };
}

// Build Permissions-Policy header string
export function buildPermissionsPolicy(): string {
  const policies = getPermissionsPolicy();
  return Object.entries(policies)
    .map(([key, values]) => {
      const policy = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${policy}=(${values.join(' ')})`;
    })
    .join(', ');
}