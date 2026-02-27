'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: 'residential',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Residential Solar',
    tagline: 'Power your home, protect your wallet',
    description:
      'Custom rooftop solar systems designed for Indian homes. From 1kW to 10kW, fully grid-tied or hybrid systems with battery backup. Includes net metering registration.',
    features: ['On-grid & Hybrid Systems', '25-year Panel Warranty', 'Net Metering Support', 'EMI Options Available'],
    color: '#f59e0b',
  },
  {
    id: 'commercial',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="22" height="15" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        <line x1="7" y1="12" x2="7" y2="12"/>
        <line x1="12" y1="12" x2="12" y2="12"/>
        <line x1="17" y1="12" x2="17" y2="12"/>
      </svg>
    ),
    title: 'Commercial Solar',
    tagline: 'Slash operational costs at scale',
    description:
      'Solar power plants for offices, retail spaces, hotels, hospitals, and educational institutions. Reduce your electricity overheads by up to 80% with customised commercial solutions.',
    features: ['10kW to 1MW Range', 'DISCOM Coordination', 'Monitoring Dashboard', 'Accelerated ROI'],
    color: '#0ea5e9',
  },
  {
    id: 'industrial',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Industrial Solar',
    tagline: 'Large-scale energy for large-scale operations',
    description:
      'Turnkey EPC solutions for manufacturing units, warehouses, and agricultural facilities. Ground-mounted and rooftop options with advanced monitoring and O&M contracts.',
    features: ['1MW to 50MW+ Capacity', 'Ground & Rooftop Mount', 'O&M Contracts', 'CAPEX & OPEX Models'],
    color: '#8b5cf6',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-charcoal">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label justify-center">
            <span className="w-5 h-px bg-solar-yellow" />
            Our Services
            <span className="w-5 h-px bg-solar-yellow" />
          </span>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            Solar Solutions for{' '}
            <span className="gradient-solar">Every Scale</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            Whether you&apos;re a homeowner looking to cut bills or an industrial unit seeking energy independence, Adi Solar delivers the right solution — designed, installed, and supported by India&apos;s best solar engineers.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className="service-card relative overflow-hidden group"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Top colour bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                style={{ background: service.color }}
              />

              {/* Icon */}
              <div
                className="service-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mt-2"
                style={{ background: `${service.color}18`, color: service.color }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{service.title}</h3>
              <p className="text-sm font-semibold mb-4" style={{ color: service.color }}>{service.tagline}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2.5">
                {service.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 font-medium">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                      style={{ background: `${service.color}20`, color: service.color }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-charcoal-muted">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ color: service.color }}
                >
                  Get a Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
