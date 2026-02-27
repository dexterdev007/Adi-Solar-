'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '5,000+', label: 'Installations Completed', icon: '⚡' },
  { value: '50 MW+', label: 'Total Capacity Installed', icon: '☀️' },
  { value: '15+', label: 'Years of Experience', icon: '🏆' },
  { value: '98%', label: 'Customer Satisfaction', icon: '❤️' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-charcoal-light"
    >
      <div className="container-xl">
        {/* Top: label + heading + text + cta */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="section-label">
              <span className="w-5 h-px bg-solar-yellow" />
              About Adi Solar
            </span>
            <h2 className="section-title text-gray-900 dark:text-white mb-6">
              Powering India&apos;s Green{' '}
              <span className="gradient-solar">Energy Revolution</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base mb-5">
              Founded in 2009, Adi Solar has been at the forefront of India&apos;s solar transformation. We design, supply, install, and commission high-performance solar power systems for residential, commercial, and industrial applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base mb-8">
              Our team of certified solar engineers and technicians ensures every installation meets the highest standards of quality, safety, and performance — backed by a comprehensive 25-year panel warranty.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="w-5 h-5 rounded-full bg-solar-yellow/20 flex items-center justify-center text-solar-yellow text-xs">✓</span>
                MNRE Certified Installer
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="w-5 h-5 rounded-full bg-solar-yellow/20 flex items-center justify-center text-solar-yellow text-xs">✓</span>
                ISO 9001:2015 Certified
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="w-5 h-5 rounded-full bg-solar-yellow/20 flex items-center justify-center text-solar-yellow text-xs">✓</span>
                Net Metering Support
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-solar-yellow/20 to-sky-solar/20 p-1">
              <div className="rounded-2xl bg-gradient-to-br from-sky-solar-dark to-charcoal p-10 h-80 flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-solar-yellow/20" />
                <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border-2 border-sky-solar/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-solar-yellow/5" />

                {/* Center icon */}
                <div className="float-animation relative z-10 text-center">
                  <div className="w-24 h-24 rounded-3xl bg-solar-yellow/20 backdrop-blur border border-solar-yellow/30 flex items-center justify-center mx-auto mb-4">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                  <p className="text-white font-bold text-lg">Clean. Reliable.</p>
                  <p className="text-solar-yellow font-semibold">Affordable Solar</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-dark rounded-2xl p-4 shadow-2xl">
              <div className="text-2xl font-black text-solar-yellow">90%</div>
              <div className="text-xs text-gray-300 mt-0.5">Electricity Bill Savings</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-solar-yellow mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
