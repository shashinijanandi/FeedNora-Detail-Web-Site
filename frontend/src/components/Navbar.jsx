import React, { useState, useEffect } from 'react'

const links = [
  { label: 'Home',          href: '#home' },
  { label: 'Research',      href: '#research' },
  { label: 'Solution',      href: '#solution' },
  { label: 'Milestones',    href: '#milestones' },
  { label: 'Documents',     href: '#documents' },
  { label: 'About',         href: '#about' },
  { label: 'Contact',       href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.97)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        borderBottom: '1px solid #dcfce7'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" onClick={() => handleClick('#home')}
          className="text-2xl font-black tracking-tight"
          style={{ color: '#14532d' }}>
          FEED<span style={{ color: '#16a34a' }}>NORA</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1 list-none">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => handleClick(l.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: active === l.href.slice(1) ? '#dcfce7' : 'transparent',
                  color: active === l.href.slice(1) ? '#14532d' : '#334155',
                }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden text-xl" style={{ color: '#14532d' }}
          onClick={() => setOpen(!open)}>
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: '#dcfce7', background: 'white' }}>
          {links.map(l => (
            <button key={l.href}
              onClick={() => handleClick(l.href)}
              className="block w-full text-left px-6 py-3 text-sm font-medium transition-colors"
              style={{ color: active === l.href.slice(1) ? '#16a34a' : '#334155' }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
