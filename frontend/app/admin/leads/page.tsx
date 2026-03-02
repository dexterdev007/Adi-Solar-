'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/components/admin/AuthContext';

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  property_type: string;
  location: string;
  source: string;
  status: string;
  notes: string;
  created_at: string;
  preferred_date?: string;
  preferred_time?: string;
  roof_type?: string;
}

const STATUS_OPTIONS = ['NEW', 'CONTACTED', 'SITE_VISIT_SCHEDULED', 'CONVERTED', 'REJECTED'];
const STATUS_COLORS: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-800',
  CONTACTED: 'bg-yellow-100 text-yellow-800',
  SITE_VISIT_SCHEDULED: 'bg-purple-100 text-purple-800',
  CONVERTED: 'bg-green-100 text-green-800',
  REJECTED: 'bg-red-100 text-red-800'
};

export default function LeadsManager() {
  const { token, logout } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/admin/leads', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const json = await res.json();
      if (json.success) setLeads(json.leads);
    } catch (err) {
      console.error('Failed to fetch leads', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchLeads();
  }, [token]);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await fetch(`http://localhost:5001/api/admin/leads/${id}/status`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status: newStatus })
      });
      fetchLeads(); // Refresh
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const updateNotes = async (id: string, notes: string) => {
    try {
      await fetch(`http://localhost:5001/api/admin/leads/${id}/notes`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ notes })
      });
      fetchLeads(); // Refresh
    } catch (err) {
      console.error('Failed to update notes', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <a href="/admin" className="w-8 h-8 rounded-lg bg-solar-yellow flex items-center justify-center hover:opacity-90">
            <span className="text-white font-bold tracking-tighter">A</span>
          </a>
          <h1 className="text-xl font-bold text-gray-900">Lead Manager</h1>
        </div>
        <button onClick={logout} className="text-sm font-semibold text-red-500 hover:text-red-700">Logout</button>
      </header>

      <main className="flex-1 p-6 max-w-[1600px] w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                  <th className="p-4">Date</th>
                  <th className="p-4">Contact Detail</th>
                  <th className="p-4">Property & Source</th>
                  <th className="p-4">Site Visit Info</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Internal Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr><td colSpan={6} className="p-8 text-center text-gray-400">Loading leads...</td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan={6} className="p-8 text-center text-gray-500">No leads found.</td></tr>
                ) : (
                  leads.map(lead => (
                    <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-sm text-gray-500 align-top">
                        {new Date(lead.created_at).toLocaleDateString()}<br/>
                        <span className="text-xs">{new Date(lead.created_at).toLocaleTimeString()}</span>
                      </td>
                      <td className="p-4 align-top">
                        <div className="font-bold text-gray-900">{lead.name}</div>
                        <div className="text-sm text-gray-600 font-medium mt-1">{lead.phone}</div>
                        {lead.email && <div className="text-sm text-gray-400">{lead.email}</div>}
                      </td>
                      <td className="p-4 align-top">
                        <div className="text-sm font-semibold text-gray-700">{lead.property_type || 'Unknown'}</div>
                        <div className="text-xs text-gray-500 capitalize mt-1 border border-gray-200 inline-block px-2 py-0.5 rounded bg-gray-50">
                          {lead.source.replace('_', ' ')}
                        </div>
                        {lead.location && <div className="text-xs text-gray-400 mt-1">📍 {lead.location}</div>}
                      </td>
                      <td className="p-4 align-top">
                        {lead.preferred_date ? (
                           <div className="text-sm">
                             <span className="font-semibold">{lead.preferred_date}</span> {lead.preferred_time}<br/>
                             <span className="text-xs text-gray-500">Roof: {lead.roof_type}</span>
                           </div>
                        ) : <span className="text-xs text-gray-400 italic">No visit requested</span>}
                      </td>
                      <td className="p-4 align-top">
                        <select 
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-full border-none cursor-pointer outline-none appearance-none ${STATUS_COLORS[lead.status] || 'bg-gray-100 text-gray-800'}`}
                        >
                          {STATUS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt.replace(/_/g, ' ')}</option>)}
                        </select>
                      </td>
                      <td className="p-4 align-top w-64">
                        <textarea 
                          className="w-full text-sm form-input p-2 resize-none h-20"
                          placeholder="Add notes..."
                          defaultValue={lead.notes || ''}
                          onBlur={(e) => updateNotes(lead.id, e.target.value)}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
