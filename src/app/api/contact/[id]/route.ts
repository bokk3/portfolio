import { NextRequest, NextResponse } from 'next/server';
import { getContactById, updateContactStatus, deleteContact } from '@/lib/database';

// GET single contact by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Simple authentication check
    const authHeader = request.headers.get('authorization');
    const validToken = process.env.ADMIN_API_TOKEN || 'admin-secret-token';
    
    if (!authHeader || authHeader !== `Bearer ${validToken}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const contact = getContactById(id);
    
    if (!contact) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: contact
    });
    
  } catch (error) {
    console.error('Error fetching contact:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch contact' },
      { status: 500 }
    );
  }
}

// PATCH to update contact status
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Simple authentication check
    const authHeader = request.headers.get('authorization');
    const validToken = process.env.ADMIN_API_TOKEN || 'admin-secret-token';
    
    if (!authHeader || authHeader !== `Bearer ${validToken}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { status } = body;
    
    if (!['new', 'read', 'replied', 'archived'].includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }
    
    const updated = updateContactStatus(id, status);
    
    if (!updated) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact status updated'
    });
    
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update contact' },
      { status: 500 }
    );
  }
}

// DELETE contact
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Simple authentication check
    const authHeader = request.headers.get('authorization');
    const validToken = process.env.ADMIN_API_TOKEN || 'admin-secret-token';
    
    if (!authHeader || authHeader !== `Bearer ${validToken}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const deleted = deleteContact(id);
    
    if (!deleted) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact deleted'
    });
    
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete contact' },
      { status: 500 }
    );
  }
}