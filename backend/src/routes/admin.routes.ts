import { Router } from 'express';
import { db } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { requireAdmin, AdminRequest } from '../middlewares/auth.middleware';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Admin Login
router.post('/login', (req, res) => {
  const schema = z.object({ email: z.string().email(), password: z.string() });
  try {
    const { email, password } = schema.parse(req.body);
    const admin = db.prepare('SELECT * FROM Admin WHERE email = ?').get(email) as any;
    
    if (!admin || !bcrypt.compareSync(password, admin.password)) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin.id, role: admin.role, email: admin.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ success: true, token, admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role } });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid request data' });
  }
});

// GET all leads (Protected)
router.get('/leads', requireAdmin, (req: AdminRequest, res) => {
  try {
    const leads = db.prepare(`
      SELECT l.*, s.preferred_date, s.preferred_time, s.roof_type 
      FROM Lead l 
      LEFT JOIN SiteVisit s ON l.id = s.lead_id
      ORDER BY l.created_at DESC
    `).all();
    res.json({ success: true, leads });
  } catch (error) {
    console.error('Fetch Leads Error:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// UPDATE lead status (Protected)
router.patch('/leads/:id/status', requireAdmin, (req: AdminRequest, res) => {
  try {
    const { id } = req.params;
    const { status } = z.object({ status: z.string() }).parse(req.body);
    
    db.prepare('UPDATE Lead SET status = ? WHERE id = ?').run(status, id);
    res.json({ success: true, message: 'Status updated' });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid update request' });
  }
});

// UPDATE lead notes (Protected)
router.patch('/leads/:id/notes', requireAdmin, (req: AdminRequest, res) => {
  try {
    const { id } = req.params;
    const { notes } = z.object({ notes: z.string() }).parse(req.body);
    
    db.prepare('UPDATE Lead SET notes = ? WHERE id = ?').run(notes, id);
    res.json({ success: true, message: 'Notes updated' });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid update request' });
  }
});

// GET basic analytics (Protected)
router.get('/analytics/overview', requireAdmin, (req: AdminRequest, res) => {
  try {
    const totalLeads = (db.prepare('SELECT COUNT(*) as count FROM Lead').get() as any).count;
    const newLeads = (db.prepare("SELECT COUNT(*) as count FROM Lead WHERE status = 'NEW'").get() as any).count;
    const convertedLeads = (db.prepare("SELECT COUNT(*) as count FROM Lead WHERE status = 'CONVERTED'").get() as any).count;
    
    const pageViews = db.prepare(`
      SELECT page, COUNT(*) as views 
      FROM Analytics 
      GROUP BY page 
      ORDER BY views DESC LIMIT 5
    `).all();

    res.json({ 
      success: true, 
      overview: { totalLeads, newLeads, convertedLeads },
      topPages: pageViews
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Database error fetching analytics' });
  }
});

export const adminRoutes = router;
