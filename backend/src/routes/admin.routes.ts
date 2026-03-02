import { Router } from 'express';
import { pool } from '../db';
import { z } from 'zod';
import { requireAdmin, AdminRequest } from '../middlewares/auth.middleware';

const router = Router();

// GET all leads (Protected)
router.get('/leads', requireAdmin, async (req: AdminRequest, res) => {
  try {
    const result = await pool.query(`
      SELECT l.*, s.preferred_date, s.preferred_time, s.roof_type 
      FROM "Lead" l 
      LEFT JOIN "SiteVisit" s ON l.id = s.lead_id
      ORDER BY l.created_at DESC
    `);
    res.json({ success: true, leads: result.rows });
  } catch (error) {
    console.error('Fetch Leads Error:', error);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});

// UPDATE lead status (Protected)
router.patch('/leads/:id/status', requireAdmin, async (req: AdminRequest, res) => {
  try {
    const { id } = req.params;
    const { status } = z.object({ status: z.string() }).parse(req.body);
    
    await pool.query('UPDATE "Lead" SET status = $1 WHERE id = $2', [status, id]);
    res.json({ success: true, message: 'Status updated' });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid update request' });
  }
});

// UPDATE lead notes (Protected)
router.patch('/leads/:id/notes', requireAdmin, async (req: AdminRequest, res) => {
  try {
    const { id } = req.params;
    const { notes } = z.object({ notes: z.string() }).parse(req.body);
    
    await pool.query('UPDATE "Lead" SET notes = $1 WHERE id = $2', [notes, id]);
    res.json({ success: true, message: 'Notes updated' });
  } catch (error) {
    res.status(400).json({ success: false, error: 'Invalid update request' });
  }
});

// GET basic analytics (Protected)
router.get('/analytics/overview', requireAdmin, async (req: AdminRequest, res) => {
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

    res.json({ 
      success: true, 
      overview: {
        totalLeads: parseInt(totalLeadsResult.rows[0].count, 10),
        newLeads: parseInt(newLeadsResult.rows[0].count, 10),
        convertedLeads: parseInt(convertedLeadsResult.rows[0].count, 10)
      },
      topPages: pageViewsResult.rows
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Database error fetching analytics' });
  }
});

export const adminRoutes = router;
