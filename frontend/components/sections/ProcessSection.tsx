'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Free Site Visit',
    description:
      'Our expert solar consultant visits your property at no cost. We assess rooftop space, shadowing, structural strength, and electricity consumption to design the ideal system.',
    duration: 'Day 1',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M14.14 14.14a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    title: 'Custom Design',
    description:
      'Our engineers create a detailed solar system design with 3D layout, energy simulation, ROI projections, and panel placement optimisation for maximum yield.',
    duration: 'Days 2–5',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/>
        <line x1="13" y1="19" x2="19" y2="13"/>
        <line x1="16" y1="16" x2="20" y2="20"/>
        <line x1="19" y1="21" x2="21" y2="19"/>
      </svg>
    ),
    title: 'Installation',
    description:
      'Our certified installation crew completes the full mechanical and electrical setup with zero structural damage to your roof. Typically completed in 1–3 days.',
    duration: 'Days 6–10',
  },
  {
    number: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Activation',
    description:
      'We handle all DISCOM paperwork, net metering connection, and commissioning. You receive a live monitoring dashboard and start generating free solar energy.',
    duration: 'Days 11–14',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-gray-50 dark:bg-charcoal-light">
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
            How It Works
            <span className="w-5 h-px bg-solar-yellow" />
          </span>
          <h2 className="section-title text-gray-900 dark:text-white mb-4">
            Go Solar in{' '}
            <span className="gradient-solar">4 Simple Steps</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
            From your first enquiry to activation, we manage everything. Most installations are complete within 14 working days.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(90deg, #f59e0b, #0ea5e9, #8b5cf6, #10b981)' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              {/* Step number + icon */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Circle */}
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-charcoal shadow-lg border-2 border-solar-yellow/30 flex items-center justify-center text-solar-yellow mb-5 group hover:border-solar-yellow hover:shadow-solar-yellow/20 hover:shadow-xl transition-all duration-300">
                  {step.icon}
                </div>

                {/* Number badge */}
                <div className="absolute -top-2 -right-2 lg:right-auto lg:left-full w-6 h-6 rounded-full bg-solar-yellow text-white text-xs font-black flex items-center justify-center">
                  {parseInt(step.number)}
                </div>

                <div className="text-xs font-bold text-solar-yellow tracking-widest uppercase mb-2">
                  {step.duration}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm">
            Ready to start your solar journey?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Schedule Free Site Visit
          </button>
        </motion.div>
      </div>
    </section>
  )
}
