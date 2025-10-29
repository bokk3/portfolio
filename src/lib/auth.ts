import { NextRequest, NextResponse } from 'next/server';

export function checkAdminAuth(request: NextRequest): NextResponse | null {
  const authHeader = request.headers.get('authorization');
  const validToken = process.env.ADMIN_API_TOKEN;
  
  if (!validToken) {
    console.error('ADMIN_API_TOKEN not set in environment variables');
    return NextResponse.json(
      { success: false, message: 'Server configuration error' },
      { status: 500 }
    );
  }
  
  if (!authHeader || authHeader !== `Bearer ${validToken}`) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  return null; // Auth successful
}