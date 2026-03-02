import { Router } from 'express';
import { db } from '../db';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

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

router.post('/contact', (req, res) => {
  try {
    const data = contactSchema.parse(req.body);
    const id = uuidv4();
    
    db.prepare(`
      INSERT INTO Lead (id, name, phone, email, property_type, location, message, source)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, data.name, data.phone, data.email || null, data.property_type || null, data.location || null, data.message || null, data.source);
    
    res.status(201).json({ success: true, message: 'Contact request received successfully.', id });
  } catch (error) {
    console.error('Contact Error:', error);
    res.status(400).json({ success: false, error: 'Invalid request data' });
  }
});

router.post('/site-visit', (req, res) => {
  try {
    const data = siteVisitSchema.parse(req.body);
    const leadId = uuidv4();
    
    // 1. Create Lead first
    db.prepare(`
      INSERT INTO Lead (id, name, phone, email, property_type, location, source)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(leadId, data.name, data.phone, data.email || null, data.property_type || null, data.location || null, 'hero_cta_visit');
    
    // 2. Create Site Visit entry linking to the Lead
    const visitId = uuidv4();
    db.prepare(`
      INSERT INTO SiteVisit (id, lead_id, preferred_date, preferred_time, roof_type)
      VALUES (?, ?, ?, ?, ?)
    `).run(visitId, leadId, data.preferredDate || null, data.preferredTime || null, data.roofType || null);
    
    res.status(201).json({ success: true, message: 'Site visit scheduled successfully.' });
  } catch (error) {
    console.error('Site Visit Error:', error);
    res.status(400).json({ success: false, error: 'Invalid request data' });
  }
});

router.post('/track', (req, res) => {
  try {
    const id = uuidv4();
    const { page, action, deviceType, ipAddress } = req.body;
    db.prepare(`
      INSERT INTO Analytics (id, page, action, device_type, ip_address)
      VALUES (?, ?, ?, ?, ?)
    `).run(id, page, action, deviceType || null, ipAddress || null);
    res.status(200).json({ success: true });
  } catch (error) {
    // Tracking errors shouldn't break UI flows
    console.error('Track Error:', error);
    res.status(200).json({ success: false });
  }
});

export const publicRoutes = router;
