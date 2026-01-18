'use client'

import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)

    // TODO: Integrate with backend/email service
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-viewers-gray-300 max-w-3xl mx-auto mb-4">
            Ready to transform your visual presence? Let's start a conversation about your project.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-viewers-blue-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h2>
              <p className="text-viewers-gray-300 mb-8">
                We're here to help. Reach out through any of these channels or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-viewers-blue-600 to-viewers-blue-800 flex items-center justify-center glow-effect flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-viewers-gray-200 font-semibold mb-1">Email</h3>
                  <a href="mailto:info@viewers.com" className="text-viewers-blue-400 hover:text-viewers-blue-300 transition-colors">
                    info@viewers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-viewers-blue-600 to-viewers-blue-800 flex items-center justify-center glow-effect flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-viewers-gray-200 font-semibold mb-1">Location</h3>
                  <p className="text-viewers-gray-400">Global Reach</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-viewers-blue-600 to-viewers-blue-800 flex items-center justify-center glow-effect flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-viewers-gray-200 font-semibold mb-1">Response Time</h3>
                  <p className="text-viewers-gray-400">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-viewers-gray-800/30 backdrop-blur-sm border border-viewers-gray-700/50 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-viewers-gray-200 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-viewers-gray-900/50 border border-viewers-gray-700 rounded-lg text-viewers-gray-100 placeholder-viewers-gray-500 focus:outline-none focus:border-viewers-blue-500 focus:ring-1 focus:ring-viewers-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-viewers-gray-200 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-viewers-gray-900/50 border border-viewers-gray-700 rounded-lg text-viewers-gray-100 placeholder-viewers-gray-500 focus:outline-none focus:border-viewers-blue-500 focus:ring-1 focus:ring-viewers-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-viewers-gray-200 font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-viewers-gray-900/50 border border-viewers-gray-700 rounded-lg text-viewers-gray-100 placeholder-viewers-gray-500 focus:outline-none focus:border-viewers-blue-500 focus:ring-1 focus:ring-viewers-blue-500 transition-all"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-viewers-gray-200 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-viewers-gray-900/50 border border-viewers-gray-700 rounded-lg text-viewers-gray-100 placeholder-viewers-gray-500 focus:outline-none focus:border-viewers-blue-500 focus:ring-1 focus:ring-viewers-blue-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-viewers-blue-500/20 border border-viewers-blue-500/50 rounded-lg text-viewers-blue-300">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-8 py-4 bg-viewers-blue-600 hover:bg-viewers-blue-700 disabled:bg-viewers-gray-700 disabled:cursor-not-allowed text-white rounded-lg transition-all glow-effect-lg font-medium"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
