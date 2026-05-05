import React, { useState } from 'react'
import { SectionTag, SectionTitle } from '../components/UI'

// ✅ API endpoint for contact messages
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setErrMsg('Please fill in all fields.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrMsg('')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setErrMsg(data?.errors?.[0]?.msg || data?.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setStatus('error')
      setErrMsg('Network error. Please check your connection and try again.')
    }
  }

  const inputStyle = {
    border: '1.5px solid #e2e8f0',
    fontFamily: 'Poppins, sans-serif',
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTag>Contact Us</SectionTag>
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="grid grid-cols-1 gap-10 mt-8">
          <div className="bg-white rounded-2xl border p-8" style={{ borderColor: '#e2e8f0' }}>
            <h3 className="text-lg font-bold mb-6" style={{ color: '#14532d' }}>Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-xs font-semibold mb-1" style={{ color: '#334155' }}>Name</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Your full name" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#16a34a')}
                  onBlur={e  => (e.target.style.borderColor = '#e2e8f0')} />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold mb-1" style={{ color: '#334155' }}>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#16a34a')}
                  onBlur={e  => (e.target.style.borderColor = '#e2e8f0')} />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold mb-1" style={{ color: '#334155' }}>Message or Query</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Write your message here..." rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = '#16a34a')}
                  onBlur={e  => (e.target.style.borderColor = '#e2e8f0')} />
              </div>

              {status === 'error' && (
                <p className="text-xs font-semibold mb-3" style={{ color: '#dc2626' }}>⚠ {errMsg}</p>
              )}
              {status === 'success' && (
                <p className="text-xs font-semibold mb-3" style={{ color: '#16a34a' }}>
                  ✓ Message sent! We will get back to you soon.
                </p>
              )}

              <button type="submit" disabled={status === 'loading'}
                className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all"
                style={{
                  background: '#16a34a',
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}>
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}