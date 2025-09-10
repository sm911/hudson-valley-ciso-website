import { MailService } from '@sendgrid/mail';
import logger, { logEmail, logError } from './logger';

// Only require SendGrid API key in production
const isDevelopment = process.env.NODE_ENV === 'development';
const hasApiKey = !!process.env.SENDGRID_API_KEY;

if (!isDevelopment && !hasApiKey) {
  throw new Error("SENDGRID_API_KEY environment variable must be set in production");
}

const mailService = new MailService();
if (hasApiKey) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('⚠️  SendGrid API key not configured - emails will be simulated in development mode');
}

interface ContactEmailParams {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceType: string;
  complianceFrameworks?: string[];
  isActiveIncident?: boolean;
  timeline?: string;
  message: string;
}

interface StarterKitEmailParams {
  email: string;
  name?: string;
  company?: string;
}

export async function sendStarterKitEmail(params: StarterKitEmailParams): Promise<boolean> {
  // In development without API key, just log the email
  if (!hasApiKey) {
    console.log('📧 [DEV MODE] Would send starter kit email to:', params.email);
    logEmail({
      type: 'starter-kit',
      to: params.email,
      from: 'support@hvciso.com',
      subject: 'Security Starter Kit Request',
      params
    });
    return true;
  }

  try {
    const emails = [
      // Email to user with starter kit
      {
        to: params.email,
        from: 'support@hvciso.com',
        subject: 'Security Starter Kit Request Received - Hudson Valley CISO',
        text: `
Hi ${params.name || 'there'},

Thank you for requesting our Security Starter Kit! You can download it immediately using the link below, and I've noted your interest in case you'd like to discuss your security needs.

Download your complete Security Starter Kit:

📦 Complete Kit: https://drive.google.com/file/d/1Hw0G7rlrHYCRnzd9hpVMmLWE8m8SoHVt/view?usp=sharing

Or download individual files:
• Security Assessment Checklist: https://docs.google.com/spreadsheets/d/1tYEgHdqEuzoIwWiu7bpC3bW2hIlugmi5/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true
• Incident Response Plan Template: https://docs.google.com/document/d/1c-eE5CPlNrQ3nVCtnVL10HTu0MPOREbX/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true
• Employee Security Awareness Guide: https://docs.google.com/document/d/1v1cCUmWlvO5GSDWnHkSamVjKy6u266IQ/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true
• Vendor Risk Assessment Framework: https://docs.google.com/spreadsheets/d/1VdF1KdnGdVs8tZca33vu8hhQnBH3r6dW/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true
• Basic Compliance Roadmap: https://docs.google.com/document/d/1yTjI9hKTTlEoNOvWnzhHubcpTfffRWMq/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true

Your starter kit includes:
• Security Assessment Checklist
• Incident Response Plan Template
• Employee Security Awareness Guide
• Vendor Risk Assessment Framework
• Basic Compliance Roadmap

These practical resources will help you take the first steps toward building a robust security program for your organization.

If you have questions about implementing these tools or need guidance on your security journey, I'm here to help. Feel free to reply to this email or schedule a consultation at https://calendly.com/cyberintelpros.

Best regards,
Hudson Valley CISO

---
This email was sent because you requested our Security Starter Kit at hudsonvalleyciso.com
        `.trim(),
        html: `
<h2>Security Starter Kit Request Received</h2>
<p>Hi ${params.name || 'there'},</p>
<p>Thank you for requesting our Security Starter Kit! You can download it immediately using the link below, and I've noted your interest in case you'd like to discuss your security needs.</p>

<div style="background: #f8fafc; padding: 20px; margin: 20px 0; border-radius: 8px;">
<h4 style="margin: 0 0 15px 0; color: #1e293b;">📥 Download Your Complete Security Starter Kit</h4>
<p style="margin: 15px 0;"><strong><a href="https://drive.google.com/file/d/1Hw0G7rlrHYCRnzd9hpVMmLWE8m8SoHVt/view?usp=sharing" style="color: #2563eb; text-decoration: none; font-size: 16px;">📦 Download Complete Kit (ZIP)</a></strong></p>
<h5 style="margin: 15px 0 10px 0; color: #475569;">Or download individual files:</h5>
<ul style="list-style: none; padding: 0; margin: 0;">
  <li style="margin: 5px 0;"><a href="https://docs.google.com/spreadsheets/d/1tYEgHdqEuzoIwWiu7bpC3bW2hIlugmi5/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true" style="color: #2563eb; text-decoration: none;">📋 Security Assessment Checklist (.xlsx)</a></li>
  <li style="margin: 5px 0;"><a href="https://docs.google.com/document/d/1c-eE5CPlNrQ3nVCtnVL10HTu0MPOREbX/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true" style="color: #2563eb; text-decoration: none;">🚨 Incident Response Plan (.docx)</a></li>
  <li style="margin: 5px 0;"><a href="https://docs.google.com/document/d/1v1cCUmWlvO5GSDWnHkSamVjKy6u266IQ/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true" style="color: #2563eb; text-decoration: none;">👥 Employee Security Awareness (.docx)</a></li>
  <li style="margin: 5px 0;"><a href="https://docs.google.com/spreadsheets/d/1VdF1KdnGdVs8tZca33vu8hhQnBH3r6dW/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true" style="color: #2563eb; text-decoration: none;">🏢 Vendor Risk Assessment (.xlsx)</a></li>
  <li style="margin: 5px 0;"><a href="https://docs.google.com/document/d/1yTjI9hKTTlEoNOvWnzhHubcpTfffRWMq/edit?usp=sharing&ouid=109868573987857087982&rtpof=true&sd=true" style="color: #2563eb; text-decoration: none;">✅ Basic Compliance Roadmap (.docx)</a></li>
</ul>
</div>

<h3>Your starter kit includes:</h3>
<ul>
  <li>Security Assessment Checklist</li>
  <li>Incident Response Plan Template</li>
  <li>Employee Security Awareness Guide</li>
  <li>Vendor Risk Assessment Framework</li>
  <li>Basic Compliance Roadmap</li>
</ul>

<p>These practical resources will help you take the first steps toward building a robust security program for your organization.</p>

<p>If you have questions about implementing these tools or need guidance on your security journey, I'm here to help. Feel free to reply to this email or <a href="https://calendly.com/cyberintelpros">schedule a consultation</a>.</p>

<p>Best regards,<br>Hudson Valley CISO</p>

<hr>
<p><small>This email was sent because you requested our Security Starter Kit at hudsonvalleyciso.com</small></p>
        `.trim()
      },
      // Notification to you about the download
      {
        to: 'support@hvciso.com',
        from: 'support@hvciso.com',
        replyTo: params.email,
        subject: `[HV-CISO][Starter Kit] ${params.company || params.name || params.email}`,
        text: `
STARTER KIT DOWNLOAD - Hudson Valley CISO

CONTACT INFORMATION:
Email: ${params.email}
Name: ${params.name || 'Not provided'}
Company: ${params.company || 'Not provided'}
Downloaded: ${new Date().toLocaleString()}

This person has downloaded the security starter kit and may be a potential lead for consultation services.
        `.trim(),
        html: `
<h2>STARTER KIT DOWNLOAD - Hudson Valley CISO</h2>

<h3>CONTACT INFORMATION:</h3>
<ul>
  <li><strong>Email:</strong> ${params.email}</li>
  <li><strong>Name:</strong> ${params.name || 'Not provided'}</li>
  <li><strong>Company:</strong> ${params.company || 'Not provided'}</li>
  <li><strong>Downloaded:</strong> ${new Date().toLocaleString()}</li>
</ul>

<p>This person has downloaded the security starter kit and may be a potential lead for consultation services.</p>
        `.trim()
      }
    ];

    await mailService.send(emails);
    logger.info('Starter kit emails sent successfully', { 
      recipient: params.email.substring(0, 2) + '***@' + params.email.split('@')[1] 
    });
    return true;
  } catch (error) {
    logError(error as Error, 'Starter kit email sending');
    return false;
  }
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  // In development without API key, just log the email
  if (!hasApiKey) {
    console.log('📧 [DEV MODE] Would send contact email from:', params.email);
    logEmail({
      type: 'contact',
      to: 'support@hvciso.com',
      from: params.email,
      subject: `Contact form submission from ${params.name}`,
      params
    });
    return true;
  }

  try {
    // Determine priority and routing tags
    const isUrgent = params.timeline === "urgent" || params.isActiveIncident;
    const priorityFlag = isUrgent ? "[URGENT] " : "";
    
    // Generate service tag for routing
    const serviceMap: Record<string, string> = {
      "vciso": "vCISO",
      "assessment": "Assessment", 
      "compliance": "Compliance",
      "incident": "IR",
      "cloud-iam": "Cloud-IAM",
      "data-protection": "DLP",
      "guidance": "Guidance"
    };
    
    const serviceTag = serviceMap[params.serviceType] || params.serviceType;
    const urgencyTag = isUrgent ? "[Urgent]" : params.timeline ? `[${params.timeline}]` : "";
    const companyName = params.company || params.name.split(' ')[0];
    
    // Enhanced email content with structured information
    const emailContent = `
CONSULTATION REQUEST - Hudson Valley CISO

CONTACT INFORMATION:
Name: ${params.name}
Email: ${params.email}
Company: ${params.company || 'Not provided'}
Phone: ${params.phone || 'Not provided'}

SERVICE REQUEST:
Type: ${params.serviceType}
${params.complianceFrameworks?.length ? `Compliance Frameworks: ${params.complianceFrameworks.join(', ')}` : ''}
${params.isActiveIncident ? 'ACTIVE INCIDENT: YES - Immediate response required' : ''}
Timeline: ${params.timeline || 'Not specified'}

REQUIREMENTS:
${params.message}

---
${isUrgent ? '⚠️ HIGH PRIORITY: This request requires urgent attention' : ''}
Submitted from: hudsonvalleyciso.com
Direct reply will reach: ${params.email}
    `.trim();

    // Try multiple sender approaches for better deliverability
    const senderOptions = [
      // Option 1: Use the destination email as sender (most likely to work)
      {
        to: 'support@hvciso.com',
        from: 'support@hvciso.com',
        replyTo: params.email,
        subject: `${priorityFlag}[HV-CISO][${serviceTag}]${urgencyTag} ${companyName}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>')
      }
    ];

    for (const emailOptions of senderOptions) {
      try {
        await mailService.send(emailOptions);
        logger.info('Contact email sent successfully', { from: emailOptions.from });
        return true;
      } catch (error: any) {
        logger.warn(`Failed to send email with sender ${emailOptions.from}`, { error: error.message });
        continue;
      }
    }
    
    // If all options fail, throw the last error
    throw new Error('All email sender options failed');
  } catch (error) {
    logError(error as Error, 'SendGrid email service');
    return false;
  }
}