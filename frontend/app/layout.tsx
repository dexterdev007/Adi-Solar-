import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import ThemeToggle from '@/components/ThemeToggle'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <ThemeToggle />
          <main>{children}</main>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
