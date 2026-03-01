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
            className="flex items-center group"
            aria-label="Adi Solar Home"
          >
            <div className="bg-white/95 backdrop-blur-sm p-1.5 py-1 pr-3 rounded-xl shadow-md transition-all group-hover:shadow-lg group-hover:scale-105 border border-white/50">
              <img 
                src="/logo.png" 
                alt="Adi Solar" 
                className="h-10 md:h-11 w-auto object-contain mix-blend-multiply" 
              />
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
