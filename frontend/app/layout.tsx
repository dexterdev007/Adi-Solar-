import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import ThemeToggle from '@/components/ThemeToggle'
import { AuthProvider } from '@/components/admin/AuthContext'

export const metadata: Metadata = {
  title: 'Adi Solar — Harness the Power of the Sun',
  description:
    'Adi Solar provides expert solar panel installation for residential, commercial, and industrial customers. Get your free site visit today and start saving with clean solar energy.',
  keywords: 'solar energy, solar panels, solar installation, residential solar, commercial solar, industrial solar, Adi Solar',
  openGraph: {
    title: 'Adi Solar — Harness the Power of the Sun',
    description: 'Expert solar panel installation for homes, businesses & industry. Free site visit.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico?v=2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body>
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
            <ThemeToggle />
            <main>{children}</main>
            <WhatsAppButton />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
