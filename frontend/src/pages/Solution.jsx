import React from 'react'
import { SectionTag, SectionTitle, Card } from '../components/UI'

const features = [
]

const techLogos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',      name: 'Python 3.10' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',              name: 'React 18' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', name: 'Scikit-learn' },
  { src: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',                      name: 'FastAPI' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',     name: 'PostgreSQL 15' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg', name: 'Docker' },
]

export default function Solution() {
  return (
    <section id="solution" className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTag>Our Solution</SectionTag>
        <SectionTitle>FEEDNORA Platform</SectionTitle>

        <p className="leading-relaxed mb-8 max-w-3xl" style={{ color: '#64748b', fontSize: '0.95rem' }}>
          FEEDNORA is a comprehensive AI-driven multilingual feedback classification and automated response platform designed specifically for Sri Lankan e-commerce and digital service operators. The platform solves a critical problem: organizations receive vast volumes of user feedback in English, Sinhala, Tamil, and code-mixed combinations, but lack practical tools to analyze or respond to them at scale. FEEDNORA addresses this through two integrated AI subsystems. The first is a  dynamic topic modeling  that leverages multilingual sentence transformers, UMAP dimensionality reduction, and HDBSCAN density-based clustering to automatically discover and classify evolving topics from multilingual feedback — including code-mixed and transliterated text — without predefined categories or manual annotation. A novel two-stage keyphrase summarization mechanism extracts clean semantic keyphrases before embedding to dramatically improve clustering quality. A centroid-based incremental learning mechanism enables real-time classification of new feedback and detection of genuinely emerging topics without full model retraining. The second subsystem is a personalized feedback response generation module that classifies incoming feedback by sentiment and category, selects from 60 structured response templates, and injects personalization variables to produce contextually appropriate, sentiment-aware automated responses. All components are integrated within a React 18 frontend, FastAPI backend, and PostgreSQL database, containerized with Docker for production deployment.
        </p>

        {/* System Diagram */}
        <div className="text-center p-8 bg-white rounded-2xl border mb-8" style={{ borderColor: '#e2e8f0' }}>
          <p className="text-xs mb-4 italic" style={{ color: '#94a3b8' }}>Figure 1: High-Level System Overview</p>
         {/* <div className="rounded-xl p-6 font-semibold text-sm leading-loose"
            style={{ background: 'linear-gradient(135deg,#f0fdf4,#dcfce7)', color: '#14532d' }}>
            📝 User Feedback &nbsp;→&nbsp; 🔤 Text Cleaning &amp; Keyphrase Extraction &nbsp;→&nbsp; 🌐 Language Detection<br />
            → &nbsp;🧠 Multilingual Embedding (MiniLM-L12-v2) &nbsp;→&nbsp; 📉 UMAP Dimensionality Reduction<br />
            → &nbsp;🔵 HDBSCAN Clustering &nbsp;→&nbsp; 🏷️ Topic Naming &amp; Centroid Storage<br />
            → &nbsp;💬 Sentiment Classification &nbsp;→&nbsp; ✉️ Personalized Response Generation &nbsp;→&nbsp; 📊 Analytics Dashboard
          </div> */}
          <img
            src="/figure1-analytics.png"
            alt="AI-Powered Multilingual User Feedback Analytics diagram"
            className="mx-auto mt-6 rounded-2xl shadow-lg max-w-full h-auto"
            style={{ border: '1px solid #e2e8f0' }}
          />
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
