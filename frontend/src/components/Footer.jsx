import React from 'react'

const links = ['Home','Research','Solution','Milestones','Documents','About','Contact']

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#14532d', color: 'rgba(255,255,255,0.7)' }}>
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <div className="text-2xl font-black mb-2" style={{ color: 'white' }}>
          FEED<span style={{ color: '#4ade80' }}>NORA</span>
        </div>
        <p className="text-sm mb-6 leading-relaxed">
          AI Based Multilingual User Feedback Classification System<br />
          Email: feednora@gmail.com &nbsp;|&nbsp; Proudly presented by Team FEEDNORA
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-sm transition-colors hover:text-green-300"
              style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}>
              {l}
            </button>
          ))}
        </div>
        <div className="text-xs pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
          © 2026 FEEDNORA App. All rights reserved. | SLIIT Final Year Project 2025/2026
        </div>
      </div>
    </footer>
  )
}
