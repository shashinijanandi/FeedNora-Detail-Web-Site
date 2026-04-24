import React from 'react'
import { SectionTag, SectionTitle, Card } from '../components/UI'

const features = [
  { icon: '🌐', title: 'Multilingual Classification', desc: 'Fine-tuned mBERT classifies feedback in English, Sinhala, Tamil and 9+ languages with 94% accuracy.' },
  { icon: '🧩', title: 'Dynamic Topic Modeling',     desc: 'BERTopic extracts and tracks evolving themes from feedback corpora in real time without manual labeling.' },
  { icon: '📊', title: 'Real-time Analytics',        desc: 'Interactive dashboard visualizes sentiment trends, topic clusters, and feedback volume over time.' },
  { icon: '🔒', title: 'Secure API',                 desc: 'JWT-authenticated FastAPI backend with role-based access control for businesses and admins.' },
]

const techLogos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',      name: 'Python' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',              name: 'React' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', name: 'Scikit-learn' },
  { src: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',                      name: 'FastAPI' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',     name: 'PostgreSQL' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg', name: 'Docker' },
]

export default function Solution() {
  return (
    <section id="solution" className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTag>Our Solution</SectionTag>
        <SectionTitle>FEEDNORA Platform</SectionTitle>

        <p className="leading-relaxed mb-8 max-w-3xl" style={{ color: '#64748b', fontSize: '0.95rem' }}>
          FEEDNORA provides a comprehensive web-based platform for intelligent multilingual feedback classification.
          The system processes user feedback in multiple languages and classifies it into Positive, Negative, Neutral,
          and Suggestion categories. A fine-tuned multilingual BERT model achieves 94% accuracy. Dynamic topic modeling
          powered by BERTopic extracts recurring themes. A real-time analytics dashboard enables businesses to monitor
          feedback trends, sentiment shifts, and topic clusters.
        </p>

        {/* System Diagram */}
        <div className="text-center p-8 bg-white rounded-2xl border mb-8" style={{ borderColor: '#e2e8f0' }}>
          <p className="text-xs mb-4 italic" style={{ color: '#94a3b8' }}>Figure 1: High-Level System Overview</p>
          <div className="rounded-xl p-6 font-semibold text-sm leading-loose"
            style={{ background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)', color: '#14532d' }}>
            📝 User Feedback &nbsp;→&nbsp; 🌐 Language Detection &nbsp;→&nbsp; 🧠 mBERT Classifier<br />
            → &nbsp;🧩 Topic Modeling &nbsp;→&nbsp; 📊 Analytics Dashboard
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-xl p-5 border flex gap-4 transition-all hover:shadow-lg"
              style={{ borderColor: '#e2e8f0' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: '#dcfce7' }}>{f.icon}</div>
              <div>
                <h4 className="font-bold text-sm mb-1" style={{ color: '#14532d' }}>{f.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech logos */}
        <h3 className="text-lg font-bold mb-5" style={{ color: '#14532d' }}>Used Technologies</h3>
        <div className="flex flex-wrap gap-8 items-center justify-center p-8 bg-white rounded-2xl border"
          style={{ borderColor: '#e2e8f0' }}>
          {techLogos.map(t => (
            <div key={t.name} className="text-center">
              <img src={t.src} alt={t.name} className="mx-auto mb-2 object-contain" style={{ height: 44 }} />
              <span className="text-xs font-semibold" style={{ color: '#64748b' }}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
