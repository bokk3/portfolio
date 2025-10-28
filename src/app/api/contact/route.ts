import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  locale: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send to a CRM system
    // 4. Send notifications to your team

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example: Send email using a service (uncomment and configure)
    /*
    await sendEmail({
      to: 'contact@webdev.com',
      subject: `New Contact Form: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Budget:</strong> ${validatedData.budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${validatedData.timeline || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Language:</strong> ${validatedData.locale}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    });
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We\'ll get back to you soon!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}