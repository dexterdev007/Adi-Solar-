import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  property_type: z.string().optional().or(z.literal('')),
  location: z.string().optional().or(z.literal('')),
  message: z.string().optional().or(z.literal('')),
  source: z.string().default('contact_form').optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);
    const id = uuidv4();
    
    await pool.query(
      `INSERT INTO "Lead" (id, name, phone, email, property_type, location, message, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [id, data.name, data.phone, data.email || null, data.property_type || null, data.location || null, data.message || null, data.source]
    );
    
    return NextResponse.json({ success: true, message: 'Contact request received successfully.', id }, { status: 201 });
  } catch (error) {
    console.error('Contact Error:', error);
    return NextResponse.json({ success: false, error: 'Invalid request data' }, { status: 400 });
  }
}
