import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { Chatbot } from "@/components/sections/Chatbot";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adisolar.in"),
  title: "Solar Panel Installation in India | Free Site Visit | AdiSolar",
  description:
    "AdiSolar provides end-to-end solar installation services across India. Free site visit, certified technicians, and subsidy assistance included. Get your free quote today.",
  keywords:
    "solar panel installation India, rooftop solar, solar company India, PM Surya Ghar subsidy, solar installation cost India",
  alternates: {
    canonical: "https://adisolar.in",
  },
  openGraph: {
    siteName: "AdiSolar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@adisolar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        {/* pt accounts for fixed navbar height */}
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </body>
    </html>
  );
}
