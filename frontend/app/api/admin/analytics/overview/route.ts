import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { verifyAuth } from '@/lib/auth';

export async function GET(request: Request) {
  const { error } = verifyAuth(request, true);
  if (error) return error;

  try {
    const totalLeadsResult = await pool.query('SELECT COUNT(*) as count FROM "Lead"');
    const newLeadsResult = await pool.query(`SELECT COUNT(*) as count FROM "Lead" WHERE status = 'NEW'`);
    const convertedLeadsResult = await pool.query(`SELECT COUNT(*) as count FROM "Lead" WHERE status = 'CONVERTED'`);
    
    const pageViewsResult = await pool.query(`
      SELECT page, COUNT(*) as views 
      FROM "Analytics" 
      GROUP BY page 
      ORDER BY views DESC LIMIT 5
    `);

    return NextResponse.json({ 
      success: true, 
      overview: {
        totalLeads: parseInt((totalLeadsResult.rows as any)[0].count, 10),
        newLeads: parseInt((newLeadsResult.rows as any)[0].count, 10),
        convertedLeads: parseInt((convertedLeadsResult.rows as any)[0].count, 10)
      },
      topPages: pageViewsResult.rows
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Database error fetching analytics' }, { status: 500 });
  }
}
