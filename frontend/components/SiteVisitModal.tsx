'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteVisitModal({ isOpen, onClose }: SiteVisitModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    roofType: 'residential'
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and phone number.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5001/api/site-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to submit request');
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2500);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white dark:bg-charcoal rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold dark:text-white">Schedule Free Site Visit</h3>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-700 dark:hover:text-white">
                  ⨉
                </button>
              </div>

              {success ? (
                <div className="py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h4 className="font-bold text-lg dark:text-white">Visit Scheduled!</h4>
                  <p className="text-sm text-gray-500 mt-2">Our team will call you shortly to confirm the details.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 dark:text-gray-300">Name *</label>
                    <input type="text" required className="form-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 dark:text-gray-300">Phone *</label>
                    <input type="tel" required className="form-input" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 dark:text-gray-300">Preferred Date</label>
                      <input type="date" className="form-input" value={formData.preferredDate} onChange={e => setFormData({...formData, preferredDate: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 dark:text-gray-300">Preferred Time</label>
                      <input type="time" className="form-input" value={formData.preferredTime} onChange={e => setFormData({...formData, preferredTime: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1 dark:text-gray-300">Roof Type</label>
                    <select className="form-input" value={formData.roofType} onChange={e => setFormData({...formData, roofType: e.target.value})}>
                      <option value="residential">Residential Home</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial Shed</option>
                    </select>
                  </div>
                  
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                  
                  <button type="submit" disabled={submitting} className="btn-primary w-full mt-2">
                    {submitting ? 'Submitting...' : 'Confirm Request'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
