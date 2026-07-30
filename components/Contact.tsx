'use client'

import { useState } from 'react'
import { submitContact } from '@/app/actions/contact'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const result = await submitContact(formData)
      if (result.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(result.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-zinc-900 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-400">Thanks! Des will be in touch with you shortly.</p>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white">Book a Free Quote</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
            <div className="space-y-4 text-gray-400">
              <p>📞 <a href="tel:0857553436" className="hover:text-yellow-500 transition-colors">085 755 3436</a></p>
              <p>✉️ <a href="mailto:dob2019@outlook.com" className="hover:text-yellow-500 transition-colors">dob2019@outlook.com</a></p>
              <p>📍 Wicklow to Dublin</p>
              <p>📸 <a href="https://www.instagram.com/w2d_flooring_carpets_" target="_blank" className="hover:text-yellow-500 transition-colors">@w2d_flooring_carpets_</a></p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-bold text-white mb-4">Opening Hours</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 9am - 4pm</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your name *"
              required
              className="bg-black border border-yellow-700/30 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email *"
              required
              className="bg-black border border-yellow-700/30 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Your phone"
              className="bg-black border border-yellow-700/30 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project *"
              rows={4}
              required
              className="bg-black border border-yellow-700/30 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500"
            />
            {status === 'error' && (
              <p className="text-red-400 text-sm">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-yellow-600 hover:bg-yellow-500 disabled:opacity-50 text-black font-bold py-4 rounded transition-colors"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        {/* Google Maps */}
<div className="mt-8">
  <h3 className="text-xl font-bold text-white mb-4">Service Area</h3>
  <div className="rounded-lg overflow-hidden border border-yellow-700/30">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d152350!2d-6.2!3d53.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sie!4v1234567890"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  <p className="text-gray-500 text-xs mt-2 tracking-wide">Serving Wicklow, Dublin and surrounding areas</p>
</div>
      </div>
    </section>
  )
}