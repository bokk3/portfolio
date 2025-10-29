import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { saveContact, getContactsFiltered } from '@/lib/database';
import { checkAdminAuth } from '@/lib/auth';

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

    // Save to database
    const savedContact = saveContact({
      ...validatedData,
      ipAddress: request.ip || request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    });

    console.log('Contact form saved:', savedContact.id);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example: Send email using a service (uncomment and configure)
    /*
    await sendEmail({
      to: 'truyensboris@proton.me',
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
          errors: error.issues 
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

// GET endpoint to retrieve contact entries
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extract query parameters
    const status = searchParams.get('status') as any;
    const locale = searchParams.get('locale');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 50;
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0;
    
    // Authentication check
    const authError = checkAdminAuth(request);
    if (authError) return authError;
    
    const { contacts, total } = getContactsFiltered({
      status,
      locale,
      limit,
      offset
    });
    
    return NextResponse.json({
      success: true,
      data: {
        contacts,
        total,
        limit,
        offset,
        hasMore: offset + limit < total
      }
    });
    
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}