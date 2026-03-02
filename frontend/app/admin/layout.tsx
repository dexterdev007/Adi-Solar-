'use client';

import { useAuth } from '@/components/admin/AuthContext';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-solar-yellow"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-charcoal text-gray-900 dark:text-gray-100 font-sans">
      {children}
    </div>
  );
}
