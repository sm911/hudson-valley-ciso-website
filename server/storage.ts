import { type Contact, type InsertContact, type NewsletterSubscriber, type InsertNewsletterSubscriber, type StarterKitDownload, type InsertStarterKit } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  subscribeToNewsletter(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  createStarterKitDownload(download: InsertStarterKit): Promise<StarterKitDownload>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private subscribers: Map<string, NewsletterSubscriber>;
  private starterKitDownloads: Map<string, StarterKitDownload>;

  constructor() {
    this.contacts = new Map();
    this.subscribers = new Map();
    this.starterKitDownloads = new Map();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact,
      id,
      company: insertContact.company || null,
      phone: insertContact.phone || null,
      complianceFrameworks: insertContact.complianceFrameworks || null,
      isActiveIncident: insertContact.isActiveIncident || null,
      timeline: insertContact.timeline || null,
      attachments: insertContact.attachments || null,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async subscribeToNewsletter(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const id = randomUUID();
    const subscriber: NewsletterSubscriber = { 
      ...insertSubscriber, 
      id,
      createdAt: new Date()
    };
    
    // Check if email already exists
    const existing = Array.from(this.subscribers.values()).find(
      (sub) => sub.email === subscriber.email
    );
    
    if (existing) {
      return existing;
    }
    
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async createStarterKitDownload(insertDownload: InsertStarterKit): Promise<StarterKitDownload> {
    const id = randomUUID();
    const download: StarterKitDownload = { 
      ...insertDownload,
      id,
      name: insertDownload.name || null,
      company: insertDownload.company || null,
      downloadedAt: new Date()
    };
    
    this.starterKitDownloads.set(id, download);
    return download;
  }
}

export const storage = new MemStorage();
