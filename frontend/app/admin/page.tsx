'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/components/admin/AuthContext';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const { token, logout } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/admin/analytics/overview', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const json = await res.json();
        if (json.success) setData(json.overview);
      } catch (err) {
        console.error('Failed to fetch analytics', err);
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchOverview();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-solar-yellow flex items-center justify-center">
            <span className="text-white font-bold tracking-tighter">A</span>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Adi Solar Admin
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="/admin/leads" className="text-sm font-semibold text-gray-600 hover:text-solar-yellow transition-colors">Leads</a>
          <button onClick={logout} className="text-sm font-semibold text-red-500 hover:text-red-700 transition-colors">Logout</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        <div className="mb-8 pl-1">
          <h2 className="text-sm font-bold tracking-widest text-solar-yellow uppercase">Overview</h2>
          <h3 className="text-3xl font-black text-gray-900 mt-1">Dashboard</h3>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl h-32 border border-gray-100"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <p className="text-sm font-bold text-gray-500 mb-1">Total Leads</p>
              <h4 className="text-4xl font-black text-gray-900">{data?.totalLeads || 0}</h4>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10 text-solar-yellow">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5a5.5 5.5 0 1 1 5.5-5.5H12v3l-4-4 4-4v3h1.5A3.5 3.5 0 1 0 10 9H8a5.5 5.5 0 0 1 5.5-5.5V2L17.5 6 13.5 10V8.5A3.5 3.5 0 1 0 10 12h2v5.5z" /></svg>
              </div>
              <p className="text-sm font-bold text-gray-500 mb-1">New Leads</p>
              <h4 className="text-4xl font-black text-solar-yellow">{data?.newLeads || 0}</h4>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10 text-green-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </div>
              <p className="text-sm font-bold text-gray-500 mb-1">Converted</p>
              <h4 className="text-4xl font-black text-green-500">{data?.convertedLeads || 0}</h4>
            </motion.div>
          </div>
        )}

        <div className="mt-10 flex gap-4">
           <a href="/admin/leads" className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg flex items-center gap-2">
             Go to Lead Manager ➔
           </a>
        </div>
      </main>
    </div>
  );
}
