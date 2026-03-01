'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-charcoal/95 backdrop-blur-xl shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Adi Solar Home"
          >
            {/* Sun icon */}
            <div className="w-9 h-9 rounded-xl bg-solar-yellow flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            </div>
            <div>
              <span className={`text-xl font-extrabold tracking-tight ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                Adi <span className="text-solar-yellow">Solar</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link ${scrolled ? '' : 'text-white/90 hover:text-white'}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary text-xs px-5 py-2.5"
            >
              Get Free Site Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 mb-1 transition-all duration-200 ${scrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 mb-1 transition-all duration-200 ${scrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 transition-all duration-200 ${scrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-charcoal border-t border-gray-100 dark:border-charcoal-muted`}
      >
        <div className="container-xl py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-3 px-4 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-solar-yellow/10 hover:text-solar-yellow font-medium text-sm transition-colors duration-150"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-2 pt-2 border-t border-gray-100 dark:border-charcoal-muted">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary w-full mt-2"
            >
              Get Free Site Visit
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
