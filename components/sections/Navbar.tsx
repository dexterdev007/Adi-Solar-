"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All About Solar", href: "/all-about-solar" },
  { label: "Solar Calculator", href: "/solar-calculator" },
  { label: "Blog", href: "/blog" },
  { label: "Get Solar", href: "/get-solar" },
];

const PHONE = "+91 8882088600";
const PHONE_HREF = "tel:+918882088600";
const CTA_HREF = "/get-solar";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 lg:h-20 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="AdiSolar home"
          >
            <Image 
              src="/assets/logo.png" 
              alt="AdiSolar Logo" 
              width={160} 
              height={40} 
              className="h-9 lg:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-secondary hover:text-primary font-medium text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="text-primary font-semibold text-sm flex items-center gap-1.5 hover:text-primary-light transition-colors"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE}
            </a>
            <Button variant="primary" size="sm" href={CTA_HREF}>
              Get Free Site Visit
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary-pale transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-30 bg-white pt-16 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-primary hover:text-primary text-2xl font-semibold font-heading py-3 border-b border-border transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-8 pb-10 flex flex-col gap-4">
            <a
              href={PHONE_HREF}
              className="text-primary font-semibold text-lg flex items-center gap-2"
              aria-label={`Call us at ${PHONE}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {PHONE}
            </a>
            <Button
              variant="primary"
              size="lg"
              href={CTA_HREF}
              className="w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Free Site Visit
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
