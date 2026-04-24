import React, { useState } from 'react'
import { SectionTag, SectionTitle } from '../components/UI'
import axios from 'axios'

const infoCards = [
  { icon: 'fa-university', title: 'Institution', text: 'Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka' },
  { icon: 'fa-brands fa-github', title: 'GitHub', text: 'github.com/shashinijanandi/FEEDNORA' },
  { icon: 'fa-globe', title: 'Website', text: 'cdap.sliit.lk — FEEDNORA' },
  { icon: 'fa-envelope', title: 'Email', text: 'feednora@gmail.com' },
]

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
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
      setErrMsg('Something went wrong. Please try again.')
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">

          {/* Form card */}
          <div className="bg-white rounded-2xl border p-8" style={{ borderColor: '#e2e8f0' }}>
            <h3 className="text-lg font-bold mb-6" style={{ color: '#14532d' }}>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-xs font-semibold mb-1" style={{ color: '#334155' }}>Name</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="Your full name" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#16a34a')}
                  onBlur={e => (e.target.style.borderColor = '#e2e8f0')} />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold mb-1" style={{ color: '#334155' }}>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#16a34a')}
                  onBlur={e => (e.target.style.borderColor = '#e2e8f0')} />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold mb-1" style={{ color: '#334155' }}>Message or Query</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Write your message here..." rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = '#16a34a')}
                  onBlur={e => (e.target.style.borderColor = '#e2e8f0')} />
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
                style={{ background: '#16a34a', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                {status === 'loading' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Info side */}
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl" style={{ background: '#dcfce7' }}>
              <h4 className="font-bold mb-2" style={{ color: '#14532d' }}>Contact Details</h4>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                For further queries please reach us at<br />
                <a href="mailto:feednora@gmail.com" className="font-bold" style={{ color: '#16a34a' }}>
                  feednora@gmail.com
                </a>
              </p>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: '#64748b' }}>
                Hope this project helped you in some manner. Thank you!<br />
                <strong style={{ color: '#14532d' }}>— Team FEEDNORA</strong>
              </p>
            </div>

            {infoCards.map(c => (
              <div key={c.title} className="bg-white rounded-xl border flex items-start gap-4 p-5"
                style={{ borderColor: '#e2e8f0' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
                  style={{ background: '#dcfce7', color: '#14532d' }}>
                  <i className={`fas ${c.icon}`}></i>
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5" style={{ color: '#14532d' }}>{c.title}</div>
                  <div className="text-xs" style={{ color: '#64748b' }}>{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
