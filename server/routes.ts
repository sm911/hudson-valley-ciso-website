import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema, insertStarterKitSchema } from "@shared/schema";
import { sendContactEmail, sendStarterKitEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
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
        console.error("Failed to send email notification, but contact was saved");
      }
      
      res.json({ success: true, id: contact.id, emailSent });
    } catch (error) {
      console.error("Contact form error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscriber = await storage.subscribeToNewsletter(validatedData);
      res.json({ success: true, id: subscriber.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid email address", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to subscribe to newsletter" });
      }
    }
  });

  // Starter Kit download endpoint
  app.post("/api/starter-kit", async (req, res) => {
    try {
      const validatedData = insertStarterKitSchema.parse(req.body);
      
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

      console.log(`Starter kit sent successfully to: ${validatedData.email}`);
      
      res.json({ 
        success: true, 
        id: download.id,
        emailSent: true 
      });
    } catch (error) {
      console.error('Starter kit request error:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: 'Failed to process starter kit request' });
      }
    }
  });



  const httpServer = createServer(app);
  return httpServer;
}
