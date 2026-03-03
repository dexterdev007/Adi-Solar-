import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const siteVisitSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  property_type: z.string().optional().or(z.literal('')),
  location: z.string().optional().or(z.literal('')),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  roofType: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = siteVisitSchema.parse(body);
    const leadId = uuidv4();
    
    // 1. Create Lead first
    await pool.query(
      `INSERT INTO "Lead" (id, name, phone, email, property_type, location, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [leadId, data.name, data.phone, data.email || null, data.property_type || null, data.location || null, 'hero_cta_visit']
    );
    
    // 2. Create Site Visit entry linking to the Lead
    const visitId = uuidv4();
    await pool.query(
      `INSERT INTO "SiteVisit" (id, lead_id, preferred_date, preferred_time, roof_type)
       VALUES ($1, $2, $3, $4, $5)`,
      [visitId, leadId, data.preferredDate || null, data.preferredTime || null, data.roofType || null]
    );
    
    return NextResponse.json({ success: true, message: 'Site visit scheduled successfully.' }, { status: 201 });
  } catch (error) {
    console.error('Site Visit Error:', error);
    return NextResponse.json({ success: false, error: 'Invalid request data' }, { status: 400 });
  }
}
