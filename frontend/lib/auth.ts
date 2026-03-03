import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

export function verifyAuth(request: Request, requireAdmin: boolean = false) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 }) };
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    if (requireAdmin && decoded.role !== 'SUPER_ADMIN' && decoded.role !== 'ADMIN') {
      return { error: NextResponse.json({ success: false, error: 'Forbidden' }, { status: 403 }) };
    }
    
    return { user: decoded };
  } catch (error) {
    return { error: NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 }) };
  }
}
