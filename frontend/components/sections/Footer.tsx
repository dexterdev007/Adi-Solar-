'use client'

import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'Residential Solar', href: '#services' },
    { label: 'Commercial Solar', href: '#services' },
    { label: 'Industrial Solar', href: '#services' },
    { label: 'Solar Pumps', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  Support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'Subsidy Guide', href: '#' },
    { label: 'EMI Options', href: '#' },
    { label: 'Warranty Policy', href: '#' },
  ],
}

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollTo = (href: string) => {
    if (href === '#') return
    const el = document.querySelector(href)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-charcoal dark:bg-charcoal text-white pt-16 pb-8">
      <div className="container-xl">
        {/* Main footer grid */}
        <div className="footer-grid mb-12">
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-solar-yellow flex items-center justify-center shadow-lg">
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
              <span className="text-xl font-extrabold">
                Adi <span className="text-solar-yellow">Solar</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s trusted solar energy partner. We design, supply, install, and commission high-performance solar systems for homes, businesses, and industries.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['MNRE Certified', 'ISO 9001:2015', 'BIS Approved'].map(cert => (
                <span key={cert} className="px-3 py-1 rounded-full text-xs font-semibold bg-charcoal-muted text-gray-300 border border-charcoal-muted">
                  {cert}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-charcoal-muted text-gray-400 hover:bg-solar-yellow hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">{category}</h3>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-gray-400 hover:text-solar-yellow transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-charcoal-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Adi Solar. All rights reserved. Designed with ☀️ in India.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
