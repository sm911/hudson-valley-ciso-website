import twilio from 'twilio';

interface ContactSMSParams {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactSMS(params: ContactSMSParams): Promise<boolean> {
  // Check if SMS is configured
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER) {
    console.log('SMS not configured - missing Twilio credentials');
    return false;
  }

  try {
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const smsContent = `New contact from Hudson Valley CISO:
${params.name} (${params.email})
Company: ${params.company || 'Not provided'}
Message: ${params.message.substring(0, 100)}${params.message.length > 100 ? '...' : ''}`;

    // Support multiple notification phone numbers (comma-separated)
    const phoneNumbers = (process.env.NOTIFICATION_PHONE_NUMBER || '+18454188823').split(',');
    
    let successCount = 0;
    for (const phoneNumber of phoneNumbers) {
      try {
        const result = await client.messages.create({
          body: smsContent,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: phoneNumber.trim()
        });
        console.log(`Contact SMS sent successfully to ${phoneNumber.trim()}`);
        console.log(`SMS SID: ${result.sid}, Status: ${result.status}`);
        successCount++;
      } catch (error) {
        console.error(`Failed to send SMS to ${phoneNumber.trim()}:`, error);
      }
    }

    return successCount > 0;
  } catch (error) {
    console.error('Twilio SMS error:', error);
    return false;
  }
}