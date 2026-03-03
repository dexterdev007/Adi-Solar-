import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

const schema = z.object({ 
  email: z.string().email(), 
  password: z.string(),
  role: z.enum(['USER', 'ADMIN'])
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, role } = schema.parse(body);
    
    const table = role === 'ADMIN' ? 'Admin' : 'User';
    const result = await pool.query(`SELECT * FROM "${table}" WHERE email = $1`, [email]);
    const user = result.rows[0] as any;
    
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return NextResponse.json({ 
      success: true, 
      token, 
      user: { id: user.id, name: user.name, email: user.email, role: user.role } 
    });
  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ success: false, error: 'Invalid request data' }, { status: 400 });
  }
}
