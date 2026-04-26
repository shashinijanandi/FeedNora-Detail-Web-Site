import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const stats = [
  { num: 94,  suffix: '%', label: 'Accuracy' },
  { num: 12,  suffix: '+', label: 'Languages Supported' },
  { num: 8,   suffix: '',  label: 'Milestones' },
  { num: 4,   suffix: '',  label: 'Core Components' },
]

function StatBox({ num, suffix, label }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-black" style={{ color: '#16a34a', lineHeight: 1 }}>
        {inView ? <CountUp end={num} duration={2} suffix={suffix} /> : '0'}
      </div>
      <div className="text-xs mt-1" style={{ color: '#64748b' }}>{label}</div>
    </div>
  )
}

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)' }}>

      {/* Decorative blobs */}
      <div className="absolute pointer-events-none" style={{
        width: 600, height: 600, borderRadius: '50%',
        top: -200, right: -200,
        background: 'radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)'
      }} />
      <div className="absolute pointer-events-none" style={{
        width: 400, height: 400, borderRadius: '50%',
        bottom: -150, left: -150,
        background: 'radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%)'
      }} />

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10 w-full">

        {/* Badge */}
        {/* <div className="inline-block text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6"
          style={{ background: '#dcfce7', color: '#14532d', border: '1px solid rgba(22,163,74,0.2)' }}>
          SLIIT Final Year Research Project 2025/2026
        </div> */}

        <p className="text-base mb-2" style={{ color: '#64748b' }}>Hi, Welcome to</p>

        <h1 className="font-black mb-4 tracking-tight" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', color: '#14532d', lineHeight: 1.1 }}>
          FEED<span style={{ color: '#16a34a' }}>NORA</span>
        </h1>

        <p className="text-sm mb-4 italic" style={{ color: '#64748b' }}>
          Sentiment Analysis &nbsp;|&nbsp; Topic Modeling &nbsp;|&nbsp; Multilingual NLP &nbsp;|&nbsp; Real-time Analytics
        </p>

        <p className="max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontSize: '0.97rem', color: '#64748b' }}>
          An AI-Based Multilingual User Feedback Classification System that automatically categorizes,
          analyzes, and extracts meaningful insights from user feedback across multiple languages
          using state-of-the-art NLP and machine learning.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-14">
          <button onClick={() => scrollTo('research')}
            className="px-8 py-3 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-1"
            style={{ background: '#16a34a', boxShadow: '0 4px 15px rgba(22,163,74,0.3)' }}>
            Explore Research
          </button>
          <button onClick={() => scrollTo('documents')}
            className="px-8 py-3 rounded-xl font-bold text-sm transition-all hover:bg-green-50"
            style={{ border: '2px solid #16a34a', color: '#14532d', background: 'transparent' }}>
            View Documents
          </button>
        </div>

        {/* Stats */}
        <div className="inline-flex flex-wrap justify-center gap-10 px-10 py-6 rounded-2xl"
          style={{ background: 'white', boxShadow: '0 4px 30px rgba(0,0,0,0.06)', border: '1px solid #dcfce7' }}>
          {stats.map(s => <StatBox key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
