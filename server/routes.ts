import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema, insertStarterKitSchema } from "@shared/schema";
import { sendContactEmail, sendStarterKitEmail } from "./email";
import { z } from "zod";
import { rateLimiters, sanitizeInput } from "./security";
import logger, { logEmail, logError, logSecurity } from "./logger";
import { registerSecurityMonitoring } from "./security-monitoring";
import { registerRateLimitRoutes } from "./rate-limit-routes";

export async function registerRoutes(app: Express): Promise<Server> {
  // Register security monitoring endpoints
  registerSecurityMonitoring(app);
  
  // Register rate limit management endpoints
  registerRateLimitRoutes(app);
  // Contact form submission with rate limiting
  app.post("/api/contact", rateLimiters.contact, async (req, res) => {
    try {
      // Sanitize input before validation
      const sanitizedBody = {
        ...req.body,
        name: sanitizeInput(req.body.name || ''),
        message: sanitizeInput(req.body.message || ''),
        company: req.body.company ? sanitizeInput(req.body.company) : undefined,
      };
      
      const validatedData = insertContactSchema.parse(sanitizedBody);
      
      // Store the contact in our database
      const contact = await storage.createContact(validatedData);
      
      // Send enhanced consultation email to support@hvciso.com
      const emailSent = await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || undefined,
        phone: validatedData.phone || undefined,
        serviceType: validatedData.serviceType,
        complianceFrameworks: validatedData.complianceFrameworks || undefined,
        isActiveIncident: validatedData.isActiveIncident || false,
        timeline: validatedData.timeline || undefined,
        message: validatedData.message
      });
      
      if (!emailSent) {
        logEmail('contact-notification', validatedData.email, false, {
          reason: 'Failed to send email notification, but contact was saved'
        });
      } else {
        logEmail('contact-notification', validatedData.email, true);
      }
      
      res.json({ success: true, id: contact.id, emailSent });
    } catch (error) {
      logError(error as Error, 'Contact form submission');
      if (error instanceof z.ZodError) {
        logSecurity('Invalid contact form data attempted', { errors: error.errors });
        res.status(400).json({ error: "Invalid form data" });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Newsletter subscription with rate limiting
  app.post("/api/newsletter", rateLimiters.newsletter, async (req, res) => {
    try {
      const sanitizedEmail = req.body.email ? sanitizeInput(req.body.email) : '';
      const validatedData = insertNewsletterSchema.parse({ email: sanitizedEmail });
      const subscriber = await storage.subscribeToNewsletter(validatedData);
      res.json({ success: true, id: subscriber.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        logSecurity('Invalid newsletter subscription attempted', { errors: error.errors });
        res.status(400).json({ error: "Invalid email address" });
      } else {
        logError(error as Error, 'Newsletter subscription');
        res.status(500).json({ error: "Failed to subscribe to newsletter" });
      }
    }
  });

  // Starter Kit download endpoint with rate limiting
  app.post("/api/starter-kit", rateLimiters.starterKit, async (req, res) => {
    try {
      // Sanitize input
      const sanitizedBody = {
        email: sanitizeInput(req.body.email || ''),
        name: req.body.name ? sanitizeInput(req.body.name) : undefined,
        company: req.body.company ? sanitizeInput(req.body.company) : undefined,
      };
      
      const validatedData = insertStarterKitSchema.parse(sanitizedBody);
      
      // Store the download request in our database
      const download = await storage.createStarterKitDownload(validatedData);
      
      // Send email with starter kit to user
      const emailSent = await sendStarterKitEmail({
        email: validatedData.email,
        name: validatedData.name || undefined,
        company: validatedData.company || undefined
      });

      if (!emailSent) {
        return res.status(500).json({ success: false, error: 'Failed to send starter kit email' });
      }

      logEmail('starter-kit', validatedData.email, true);
      
      res.json({ 
        success: true, 
        id: download.id,
        emailSent: true 
      });
    } catch (error) {
      logError(error as Error, 'Starter kit request');
      if (error instanceof z.ZodError) {
        logSecurity('Invalid starter kit request', { errors: error.errors });
        res.status(400).json({ error: "Invalid form data" });
      } else {
        res.status(500).json({ error: 'Failed to process starter kit request' });
      }
    }
  });



  const httpServer = createServer(app);
  return httpServer;
}
