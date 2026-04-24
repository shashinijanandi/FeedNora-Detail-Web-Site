import React from 'react'

export function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-3"
      style={{ background: '#dcfce7', color: '#14532d' }}>
      {children}
    </span>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: '#14532d' }}>
      {children}
    </h2>
  )
}

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
      style={{ borderColor: '#e2e8f0' }}>
      {children}
    </div>
  )
}

export function Chip({ children, type = 'done' }) {
  const styles = {
    done: { background: '#dcfce7', color: '#166534' },
    soon: { background: '#fef9c3', color: '#854d0e' },
    pend: { background: '#dbeafe', color: '#1e40af' },
  }
  return (
    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mt-2"
      style={styles[type]}>
      {children}
    </span>
  )
}
