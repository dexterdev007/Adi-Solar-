'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export default function ContactSection() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) {
      setError('Please fill in your name and phone number.')
      return
    }
    setSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-solar-yellow/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-sky-solar/5 blur-3xl" />
      </div>

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <span className="w-5 h-px bg-solar-yellow" />
              Get in Touch
            </span>
            <h2 className="section-title text-gray-900 dark:text-white mb-5">
              Start Your{' '}
              <span className="gradient-solar">Solar Journey</span>{' '}
              Today
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
              Book your <strong className="text-gray-700 dark:text-gray-200">100% free site visit</strong> today. Our solar expert will assess your property, answer all your questions, and give you a detailed no-obligation quote within 48 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: 'Call Us',
                  value: '+91 98765 43210',
                  href: 'tel:+919876543210',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: 'Email Us',
                  value: 'info@adisolar.in',
                  href: 'mailto:info@adisolar.in',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  ),
                  label: 'Office',
                  value: 'Ahmedabad, Gujarat, India',
                  href: '#',
                },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-solar-yellow/10 text-solar-yellow flex items-center justify-center group-hover:bg-solar-yellow group-hover:text-white transition-all duration-200 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-solar-yellow transition-colors duration-200">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Why choose us */}
            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-charcoal-muted">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Why Adi Solar?</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  '✓ Free Site Assessment',
                  '✓ No Hidden Charges',
                  '✓ 25-Year Warranty',
                  '✓ Subsidy Assistance',
                ].map(point => (
                  <div key={point} className="text-sm text-gray-600 dark:text-gray-400 font-medium">{point}</div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="card p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Received! 🎉</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Our solar expert will call you within 24 hours to schedule your free site visit.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', service: '', message: '' }); }}
                    className="mt-6 btn-secondary"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Get Your Free Quote</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Fill in your details and we&apos;ll get back within 24 hrs.</p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Rahul Sharma"
                          className="form-input"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                          Phone Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="form-input"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="rahul@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Type of Installation
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="form-input"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select installation type</option>
                        <option value="residential">Residential (Home)</option>
                        <option value="commercial">Commercial (Office/Shop)</option>
                        <option value="industrial">Industrial (Factory/Warehouse)</option>
                        <option value="agricultural">Agricultural</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Tell us about your property, monthly electricity bill, or any specific requirements..."
                        className="form-input resize-none"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-xs font-medium">{error}</p>
                    )}

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={submitting}
                      className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
                            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                          </svg>
                          Book Free Site Visit
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                      🔒 Your information is completely safe and will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
