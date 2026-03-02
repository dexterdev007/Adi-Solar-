'use client';

import { useState } from 'react';
import { useAuth } from '@/components/admin/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const [role, setRole] = useState<'USER' | 'ADMIN'>('USER');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        login(data.token, data.user);
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Connection refused. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-charcoal p-4 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-3xl shadow-2xl overflow-hidden p-8"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-tr from-solar-yellow to-yellow-400 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">Adi Solar Portal</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Please sign in to continue</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex p-1 bg-gray-100 dark:bg-gray-800/60 rounded-xl mb-6 relative">
          <button 
            type="button"
            onClick={() => setRole('USER')}
            className={`flex-1 py-2 text-sm font-bold z-10 transition-colors ${role === 'USER' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
          >
            User Login
          </button>
          <button 
            type="button"
            onClick={() => setRole('ADMIN')}
            className={`flex-1 py-2 text-sm font-bold z-10 transition-colors ${role === 'ADMIN' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}
          >
            Admin Login
          </button>
          
          {/* Animated Tab Background */}
          <motion.div 
            layout
            initial={false}
            animate={{ 
              x: role === 'USER' ? '0%' : '100%',
              width: '50%'
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute top-1 bottom-1 left-1 bg-white dark:bg-gray-700 rounded-lg shadow-sm z-0"
          />
        </div>

        <form onSubmit={handleLogin} className="space-y-5 relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={role}
              initial={{ opacity: 0, x: role === 'USER' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: role === 'USER' ? 20 : -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow outline-none transition-all dark:text-white"
                    placeholder={role === 'USER' ? "user@example.com" : "admin@adisolar.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Password</label>
                  <input 
                    type="password" 
                    minLength={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-solar-yellow focus:border-solar-yellow outline-none transition-all dark:text-white"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-solar-yellow focus:ring-solar-yellow" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm font-medium text-center border border-red-100 dark:border-red-900/50"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-solar-yellow text-white font-bold py-3.5 rounded-xl shadow-lg shadow-solar-yellow/20 hover:bg-[#f59e0b] hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <span>Sign In to {role === 'USER' ? 'Dashboard' : 'Portal'}</span>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
