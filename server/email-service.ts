import nodemailer from 'nodemailer';
import type { ContactMessage } from '@shared/schema';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  }
}

// Create email configuration
const getEmailConfig = (): EmailConfig => {
  // Check for required environment variables
  const host = process.env.EMAIL_HOST || '';
  const port = parseInt(process.env.EMAIL_PORT || '587');
  const user = process.env.EMAIL_USER || '';
  const pass = process.env.EMAIL_PASSWORD || '';

  if (!host || !user || !pass) {
    console.warn('Email configuration is incomplete. Emails will not be sent.');
  }

  return {
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  };
};

// Create transporter
const createTransporter = () => {
  const config = getEmailConfig();
  return nodemailer.createTransport(config);
};

// Function to send contact form email
export const sendContactFormEmail = async (contactData: ContactMessage): Promise<boolean> => {
  try {
    // Skip sending if email config is not set
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.log('Email configuration not found, skipping email send');
      return false;
    }

    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'afarenziya@gmail.com', // Recipient email
      replyTo: contactData.email, // Set reply-to as the contact's email
      subject: `[Contact Form] ${contactData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${contactData.name} (${contactData.email})</p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
          ${contactData.message.replace(/\n/g, '<br>')}
        </div>
        <p style="color: #666; margin-top: 20px; font-size: 12px;">
          This email was sent from your portfolio website contact form at ${new Date().toLocaleString()}
        </p>
      `,
      text: `
        New Contact Form Submission
        
        From: ${contactData.name} (${contactData.email})
        Subject: ${contactData.subject}
        
        Message:
        ${contactData.message}
        
        This email was sent from your portfolio website contact form at ${new Date().toLocaleString()}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};