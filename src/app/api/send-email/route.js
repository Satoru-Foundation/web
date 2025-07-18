import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message, to } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter with your SMTP settings including TLS
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465 (SSL), false for other ports
      requireTLS: process.env.SMTP_TLS === 'true', // true for TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Do not fail on invalid certs (optional, for development)
        rejectUnauthorized: false
      }
    });

    // Email content for the organization
    const organizationEmail = {
      from: process.env.SMTP_FROM || email, // From address
      to: to || 'info@satorufoundation.org', // To address
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5e6f47;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Satoru Foundation contact form.
          </p>
        </div>
      `,
    };

    // Auto-reply email for the user
    const autoReplyEmail = {
      from: process.env.SMTP_FROM || 'info@satorufoundation.org',
      to: email,
      subject: 'Thank you for contacting Satoru Foundation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5e6f47;">Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting Satoru Foundation. We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5e6f47; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>If you have any urgent inquiries, please don't hesitate to reach us at info@satorufoundation.org</p>
          
          <p>Best regards,<br>
          <strong>Satoru Foundation Team</strong></p>
          
          <div style="border-top: 2px solid #ecc750; padding-top: 20px; margin-top: 30px; color: #666; font-size: 12px;">
            <p><strong>Satoru Foundation</strong><br>
            Email: info@satorufoundation.org</p>
          </div>
        </div>
      `,
    };

    // Send both emails - one to organization and one to the user
    const emailResults = await Promise.all([
      transporter.sendMail(organizationEmail),
      transporter.sendMail(autoReplyEmail)
    ]);

    console.log('Organization email sent:', emailResults[0].messageId);
    console.log('Auto-reply email sent to user:', emailResults[1].messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully to both organization and user',
      sentTo: {
        organization: to || 'info@satorufoundation.org',
        user: email
      }
    });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}