'use client';

import { useAuth } from '@/components/admin/AuthContext';
import { motion } from 'framer-motion';

export default function UserDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-charcoal pt-24 px-6 md:px-12 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-solar-yellow to-yellow-500 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black">Welcome back, {user?.name || 'User'}!</h1>
            <p className="opacity-90 mt-1">Manage your solar installation progress here.</p>
          </div>
          <button 
            onClick={logout}
            className="bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-md font-bold px-6 py-2 rounded-xl border border-white/20"
          >
            Logout
          </button>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl flex flex-col gap-2">
            <span className="text-solar-yellow bg-solar-yellow/10 w-10 h-10 flex items-center justify-center rounded-xl font-bold">1</span>
            <h3 className="font-bold text-gray-900 dark:text-white">Site Visit</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Scheduled for Thursday at 2:00 PM. Our engineer will assess your roof.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl flex flex-col gap-2 opacity-50">
            <span className="text-gray-400 bg-gray-200 dark:bg-gray-800 w-10 h-10 flex items-center justify-center rounded-xl font-bold">2</span>
            <h3 className="font-bold text-gray-900 dark:text-white">Design Proposal</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Pending site visit completion. We will draft your custom 5kW blueprint.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl flex flex-col gap-2 opacity-50">
            <span className="text-gray-400 bg-gray-200 dark:bg-gray-800 w-10 h-10 flex items-center justify-center rounded-xl font-bold">3</span>
            <h3 className="font-bold text-gray-900 dark:text-white">Installation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Awaiting your approval of the final design proposal.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
