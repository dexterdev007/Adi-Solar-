import { Pool } from 'pg';

// Create a new pool instance.
// Ensure your Vercel project or local .env.local file has DATABASE_URL set.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Initializes tables if they don't exist.
 * This is useful for first-time setup or development.
 */
export async function initDb() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS "Admin" (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'ADMIN',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await client.query(`
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

    await client.query(`
      CREATE TABLE IF NOT EXISTS "SiteVisit" (
        id TEXT PRIMARY KEY,
        lead_id TEXT NOT NULL REFERENCES "Lead"(id) ON DELETE CASCADE,
        preferred_date TEXT,
        preferred_time TEXT,
        roof_type TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS "Analytics" (
        id TEXT PRIMARY KEY,
        page TEXT NOT NULL,
        action TEXT NOT NULL,
        device_type TEXT,
        ip_address TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS "User" (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'USER',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

  } finally {
    client.release();
  }
}
