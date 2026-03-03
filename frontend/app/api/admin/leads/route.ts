import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

export async function GET(request: Request) {
  const { error } = verifyAuth(request, true);
  if (error) return error;

  try {
    const result = await pool.query(`
      SELECT l.*, s.preferred_date, s.preferred_time, s.roof_type 
      FROM "Lead" l 
      LEFT JOIN "SiteVisit" s ON l.id = s.lead_id
      ORDER BY l.created_at DESC
    `);
    return NextResponse.json({ success: true, leads: result.rows });
  } catch (err) {
    console.error('Fetch Leads Error:', err);
    return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
  }
}
