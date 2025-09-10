import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  serviceType: text("service_type").notNull(),
  complianceFrameworks: text("compliance_frameworks").array(),
  isActiveIncident: boolean("is_active_incident"),
  timeline: text("timeline"),
  message: text("message").notNull(),
  attachments: text("attachments").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Starter kit downloads
export const starterKitDownloads = pgTable("starter_kit_downloads", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
  name: text("name"),
  company: text("company"),
  downloadedAt: timestamp("downloaded_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  company: true,
  phone: true,
  serviceType: true,
  complianceFrameworks: true,
  isActiveIncident: true,
  timeline: true,
  message: true,
  attachments: true,
}).extend({
  name: z.string().min(2, "Please enter your full name").trim(),
  email: z.string().email("Please enter a valid work email").toLowerCase(),
  serviceType: z.string().min(1, "Please choose the closest fit so I can route this quickly"),
  message: z.string().min(10, "A brief description helps me prepare the right next step"),
  complianceFrameworks: z.array(z.string()).optional(),
  isActiveIncident: z.boolean().optional(),
  timeline: z.string().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  attachments: z.array(z.string()).optional(),
});

export const insertNewsletterSchema = createInsertSchema(newsletterSubscribers).pick({
  email: true,
});

export const insertStarterKitSchema = createInsertSchema(starterKitDownloads).pick({
  email: true,
  name: true,
  company: true,
}).extend({
  email: z.string().email("Please enter a valid email address").toLowerCase(),
  name: z.string().optional(),
  company: z.string().optional(),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type InsertStarterKit = z.infer<typeof insertStarterKitSchema>;
export type StarterKitDownload = typeof starterKitDownloads.$inferSelect;
