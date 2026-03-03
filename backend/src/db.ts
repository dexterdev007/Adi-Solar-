import { PGlite } from '@electric-sql/pglite';
import path from 'path';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const dbPath = path.resolve(__dirname, '../pglite_db');
export const pool = new PGlite(dbPath);

export async function initDb() {
  await pool.waitReady;

  await pool.query(`
    CREATE TABLE IF NOT EXISTS "Admin" (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'ADMIN',
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS "Lead" (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      property_type TEXT,
      location TEXT,
      message TEXT,
      source TEXT,
      status TEXT DEFAULT 'NEW',
      notes TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS "SiteVisit" (
      id TEXT PRIMARY KEY,
      lead_id TEXT NOT NULL REFERENCES "Lead"(id) ON DELETE CASCADE,
      preferred_date TEXT,
      preferred_time TEXT,
      roof_type TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS "Analytics" (
      id TEXT PRIMARY KEY,
      page TEXT NOT NULL,
      action TEXT NOT NULL,
      device_type TEXT,
      ip_address TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS "User" (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'USER',
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  console.log('Database tables initialized.');

  // Seed default admin if none exists
  const adminResult = await pool.query('SELECT COUNT(*) as count FROM "Admin"');
  if (parseInt((adminResult.rows as any)[0].count, 10) === 0) {
    const hashedPassword = bcrypt.hashSync('admin123', 10);
    await pool.query(
      `INSERT INTO "Admin" (id, name, email, password, role) VALUES ($1, $2, $3, $4, $5)`,
      ['admin-1', 'Super Admin', 'admin@adisolar.com', hashedPassword, 'SUPER_ADMIN']
    );
    console.log('Default super admin created: admin@adisolar.com / admin123');
  }

  // Seed default user if none exists
  const userResult = await pool.query('SELECT COUNT(*) as count FROM "User"');
  if (parseInt((userResult.rows as any)[0].count, 10) === 0) {
    const hashedPassword = bcrypt.hashSync('user123', 10);
    await pool.query(
      `INSERT INTO "User" (id, name, email, password, role) VALUES ($1, $2, $3, $4, $5)`,
      ['user-1', 'Demo User', 'user@adisolar.com', hashedPassword, 'USER']
    );
    console.log('Default demo user created: user@adisolar.com / user123');
  }
}
