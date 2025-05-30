import { NextResponse } from "next/server";
// import { supabase } from "@/lib/supabase";
import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with API key
// const resend = new Resend(process.env.RESEND_API_KEY);

// Email recipients
const EMAIL_RECIPIENTS = ["grayson@tpgstudios.art"];

// Rate limiting configuration
// const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
// const MAX_REQUESTS = 5

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  projectType: z.enum(["web", "mobile", "ai", "cloud", "other"]),
  description: z.string().min(10),
});

export async function POST(request: Request) {
  // try {
  //   const body = await request.json()
  //   // Validate the request body
  //   const validatedData = formSchema.parse(body)
  //   // Log for debugging
  //   console.log('Lead form data validated successfully:', validatedData);
  //   // Store in Supabase
  //   const { error } = await supabase
  //     .from('leads')
  //     .insert([
  //       {
  //         name: validatedData.name,
  //         email: validatedData.email,
  //         company: validatedData.company,
  //         project_type: validatedData.projectType,
  //         description: validatedData.description,
  //         status: 'new',
  //       },
  //     ])
  //   if (error) {
  //     console.error('Supabase insertion error:', error);
  //     throw error;
  //   }
  //   console.log('Lead stored in Supabase successfully');
  //   // Check if Resend API key is configured
  //   if (!process.env.RESEND_API_KEY) {
  //     console.error('RESEND_API_KEY is not configured in environment variables');
  //     return NextResponse.json({
  //       success: true,
  //       emailSent: false,
  //       message: 'Lead saved but email notification failed: API key not configured'
  //     });
  //   }
  //   // Send email notification
  //   try {
  //     console.log('Attempting to send email to:', EMAIL_RECIPIENTS);
  //     const emailResult = await resend.emails.send({
  //       from: 'Gray Bay Solutions <leads@resend.dev>',
  //       to: EMAIL_RECIPIENTS,
  //       subject: `New Lead: ${validatedData.name} from ${validatedData.company}`,
  //       html: `
  //         <h1>New Lead Submission</h1>
  //         <p><strong>Name:</strong> ${validatedData.name}</p>
  //         <p><strong>Email:</strong> ${validatedData.email}</p>
  //         <p><strong>Company:</strong> ${validatedData.company}</p>
  //         <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
  //         <p><strong>Description:</strong></p>
  //         <p>${validatedData.description}</p>
  //         <hr>
  //         <p>Login to your Supabase dashboard to manage this lead.</p>
  //       `,
  //     });
  //     console.log('Email sending result:', emailResult);
  //     return NextResponse.json({
  //       success: true,
  //       emailSent: true
  //     });
  //   } catch (emailError) {
  //     // Log email sending error but don't fail the request
  //     console.error('Failed to send email notification:', emailError);
  //     return NextResponse.json({
  //       success: true,
  //       emailSent: false,
  //       emailError: emailError instanceof Error ? emailError.message : 'Unknown email error'
  //     });
  //   }
  // } catch (error) {
  //   console.error('Lead submission error:', error);
  //   return NextResponse.json(
  //     {
  //       error: 'Failed to submit lead',
  //       details: error instanceof Error ? error.message : 'Unknown error'
  //     },
  //     { status: 500 }
  //   );
  // }
}
