import winston from 'winston';
import path from 'path';
import { maskSensitiveData } from './security';

// Define log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define colors for each level
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

// Tell winston to use our custom colors
winston.addColors(colors);

// Define log format
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json(),
  winston.format.printf((info) => {
    // Mask sensitive data before logging
    const maskedInfo = maskSensitiveData(info);
    return `${info.timestamp} [${info.level}]: ${maskedInfo.message} ${
      maskedInfo.meta ? JSON.stringify(maskedInfo.meta) : ''
    }`;
  })
);

// Define which transports to use
const transports: winston.transport[] = [];

// Console transport for development
if (process.env.NODE_ENV !== 'production') {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    })
  );
}

// File transports for all environments
transports.push(
  // Error log file
  new winston.transports.File({
    filename: path.join(process.cwd(), 'logs', 'error.log'),
    level: 'error',
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  }),
  // Combined log file
  new winston.transports.File({
    filename: path.join(process.cwd(), 'logs', 'combined.log'),
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  })
);

// Create the logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'info' : 'debug'),
  levels,
  format,
  transports,
  exitOnError: false,
});

// Create a stream object for Morgan HTTP logging
export const stream = {
  write: (message: string) => {
    logger.http(message.trim());
  },
};

// Helper functions for specific log types
export const logSecurity = (message: string, meta?: any) => {
  logger.warn(`[SECURITY] ${message}`, { ...meta, type: 'security' });
};

export const logApiCall = (
  method: string,
  path: string,
  statusCode: number,
  duration: number,
  meta?: any
) => {
  const level = statusCode >= 500 ? 'error' : statusCode >= 400 ? 'warn' : 'info';
  logger.log(level, `${method} ${path} ${statusCode} ${duration}ms`, {
    ...meta,
    type: 'api',
    method,
    path,
    statusCode,
    duration,
  });
};

export const logEmail = (action: string, recipient: string, success: boolean, meta?: any) => {
  const level = success ? 'info' : 'error';
  // Mask the email in logs
  const maskedRecipient = recipient.replace(/^(.{2}).*@/, '$1***@');
  logger.log(level, `Email ${action}: ${maskedRecipient}`, {
    ...meta,
    type: 'email',
    action,
    recipient: maskedRecipient,
    success,
  });
};

export const logError = (error: Error, context?: string, meta?: any) => {
  logger.error(`${context || 'Error'}: ${error.message}`, {
    ...meta,
    type: 'error',
    stack: error.stack,
    context,
  });
};

// Create logs directory if it doesn't exist
import fs from 'fs';
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

export default logger;