'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AppUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: AppUser | null;
  token: string | null;
  login: (token: string, user: AppUser) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedToken = localStorage.getItem('auth_token');
    const storedUser = localStorage.getItem('auth_user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const isLoginRoute = pathname === '/login';
      const isAdminRoute = pathname.startsWith('/admin');
      const isDashboardRoute = pathname.startsWith('/dashboard');

      if (!token) {
        if (isAdminRoute || isDashboardRoute) {
          router.push('/login');
        }
      } else {
        // Logged in
        if (isLoginRoute) {
          router.push(user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN' ? '/admin' : '/dashboard');
        } else if (isAdminRoute && user?.role !== 'ADMIN' && user?.role !== 'SUPER_ADMIN') {
          router.push('/dashboard');
        } else if (isDashboardRoute && user?.role === 'ADMIN') {
          // Optional: redirect admin away from user dashboard, or let them view it.
          // router.push('/admin'); 
        }
      }
    }
  }, [pathname, token, isLoading, user, router]);

  const login = (newToken: string, newUser: AppUser) => {
    localStorage.setItem('auth_token', newToken);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
    router.push(newUser.role === 'ADMIN' || newUser.role === 'SUPER_ADMIN' ? '/admin' : '/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setToken(null);
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
