import Database from 'better-sqlite3';
import path from 'path';
import bcrypt from 'bcrypt';

const dbPath = path.resolve(__dirname, '../../data.db');
export const db = new Database(dbPath, { verbose: console.log });

export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS Admin (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'ADMIN',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS Lead (
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
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS SiteVisit (
      id TEXT PRIMARY KEY,
      lead_id TEXT NOT NULL,
      preferred_date TEXT,
      preferred_time TEXT,
      roof_type TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (lead_id) REFERENCES Lead(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS Analytics (
      id TEXT PRIMARY KEY,
      page TEXT NOT NULL,
      action TEXT NOT NULL,
      device_type TEXT,
      ip_address TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('Database tables initialized.');

  // Seed default admin if none exists
  const adminCount = db.prepare('SELECT COUNT(*) as count FROM Admin').get() as { count: number };
  if (adminCount.count === 0) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync('admin123', saltRounds);
    
    db.prepare(`
      INSERT INTO Admin (id, name, email, password, role)
      VALUES (?, ?, ?, ?, ?)
    `).run('admin-1', 'Super Admin', 'admin@adisolar.com', hashedPassword, 'SUPER_ADMIN');
    
    console.log('Default super admin created: admin@adisolar.com / admin123');
  }
}
