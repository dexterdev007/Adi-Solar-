import { Router } from 'express';
import { pool } from '../db';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  property_type: z.string().optional().or(z.literal('')),
  location: z.string().optional().or(z.literal('')),
  message: z.string().optional().or(z.literal('')),
  source: z.string().default('contact_form').optional()
});

const siteVisitSchema = contactSchema.extend({
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  roofType: z.string().optional()
});

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

router.post('/login', async (req, res) => {
  const schema = z.object({ 
    email: z.string().email(), 
    password: z.string(),
    role: z.enum(['USER', 'ADMIN'])
  });

  try {
    const { email, password, role } = schema.parse(req.body);
    
    const table = role === 'ADMIN' ? 'Admin' : 'User';
    const result = await pool.query(`SELECT * FROM "${table}" WHERE email = $1`, [email]);
    const user = result.rows[0] as any;
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ 
      success: true, 
      token, 
      user: { id: user.id, name: user.name, email: user.email, role: user.role } 
    });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid request data' });
  }
});

router.post('/contact', async (req, res) => {
  try {
    const data = contactSchema.parse(req.body);
    const id = uuidv4();
    
    await pool.query(
      `INSERT INTO "Lead" (id, name, phone, email, property_type, location, message, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [id, data.name, data.phone, data.email || null, data.property_type || null, data.location || null, data.message || null, data.source]
    );
    
    res.status(201).json({ success: true, message: 'Contact request received successfully.', id });
  } catch (error) {
    console.error('Contact Error:', error);
    res.status(400).json({ success: false, error: 'Invalid request data' });
  }
});

router.post('/site-visit', async (req, res) => {
  try {
    const data = siteVisitSchema.parse(req.body);
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
    
    res.status(201).json({ success: true, message: 'Site visit scheduled successfully.' });
  } catch (error) {
    console.error('Site Visit Error:', error);
    res.status(400).json({ success: false, error: 'Invalid request data' });
  }
});

router.post('/track', async (req, res) => {
  try {
    const id = uuidv4();
    const { page, action, deviceType, ipAddress } = req.body;
    await pool.query(
      `INSERT INTO "Analytics" (id, page, action, device_type, ip_address)
       VALUES ($1, $2, $3, $4, $5)`,
      [id, page, action, deviceType || null, ipAddress || null]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    // Tracking errors shouldn't break UI flows
    console.error('Track Error:', error);
    res.status(200).json({ success: false });
  }
});

export const publicRoutes = router;
