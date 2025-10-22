import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email recipient
const EMAIL_RECIPIENT = process.env.EMAIL_TO || "grayson@graybaysolutions.io";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.enum(["web", "mobile", "ai", "crm", "booking", "custom", "seo", "other"]),
  description: z.string().min(10),
});

// Create reusable transporter using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = formSchema.parse(body);
    
    console.log('Lead form data validated successfully:', validatedData);

    // Check if Gmail credentials are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials not configured in environment variables');
      return NextResponse.json(
        {
          error: 'Email service not configured',
          details: 'Please configure GMAIL_USER and GMAIL_APP_PASSWORD environment variables'
        },
        { status: 500 }
      );
    }

    // Create email transporter
    const transporter = createTransporter();

    // Prepare email content
    const mailOptions = {
      from: `"Gray Bay Solutions" <${process.env.GMAIL_USER}>`,
      to: EMAIL_RECIPIENT,
      replyTo: validatedData.email,
      subject: `New Contact: ${validatedData.name}${validatedData.company ? ' - ' + validatedData.company : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
                line-height: 1.6;
                color: #1f2937;
                margin: 0;
                padding: 0;
              }
              .container { 
                max-width: 600px;
                margin: 40px auto;
                padding: 0;
              }
              .content {
                background: #ffffff;
                padding: 40px;
              }
              h2 {
                margin: 0 0 24px 0;
                font-size: 20px;
                font-weight: 600;
                color: #111827;
              }
              .field {
                margin-bottom: 24px;
                padding-bottom: 24px;
                border-bottom: 1px solid #e5e7eb;
              }
              .field:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
              }
              .label {
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #6b7280;
                margin-bottom: 8px;
              }
              .value {
                font-size: 15px;
                color: #111827;
              }
              .value a {
                color: #ea580c;
                text-decoration: none;
              }
              .footer {
                padding: 20px 40px;
                font-size: 13px;
                color: #6b7280;
                background: #f9fafb;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="content">
                <h2>New Contact Form Submission</h2>
                
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${validatedData.name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                </div>
                
                ${validatedData.company ? `
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${validatedData.company}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Project Type</div>
                  <div class="value">${validatedData.projectType}</div>
                </div>
                
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value">${validatedData.description.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              
              <div class="footer">
                ${new Date().toLocaleString('en-US', { 
                  timeZone: 'America/New_York',
                  month: 'short',
                  day: 'numeric', 
                  year: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
NEW CONTACT FORM SUBMISSION

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.company ? `Company: ${validatedData.company}\n` : ''}Project Type: ${validatedData.projectType}

Message:
${validatedData.description}

---
${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
      `,
    };

    // Send email
    console.log('Attempting to send email to:', EMAIL_RECIPIENT);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      emailSent: true,
      message: 'Your inquiry has been sent successfully!'
    });

  } catch (error) {
    console.error('Lead submission error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to submit lead',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
