import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendContactFormEmail } from "./email-service";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactMessageSchema.parse(req.body);
      
      // Save the contact message to storage
      const savedMessage = await storage.createContactMessage({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      });
      
      // Try to send email notification
      try {
        await sendContactFormEmail(savedMessage);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We continue even if email fails - the contact is still saved
      }
      
      return res.status(201).json({ 
        success: true, 
        message: "Contact message received successfully",
        data: savedMessage
      });
      
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: error.errors.map(e => e.message).join(', ')
        });
      }
      
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "An unexpected error occurred"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
