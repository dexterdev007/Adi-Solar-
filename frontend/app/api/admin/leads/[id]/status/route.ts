import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';
import { z } from 'zod';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { error } = verifyAuth(request, true);
  if (error) return error;

  try {
    const { id } = params;
    const body = await request.json();
    const { status } = z.object({ status: z.string() }).parse(body);
    
    await pool.query('UPDATE "Lead" SET status = $1 WHERE id = $2', [status, id]);
    return NextResponse.json({ success: true, message: 'Status updated' });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid update request' }, { status: 400 });
  }
}
