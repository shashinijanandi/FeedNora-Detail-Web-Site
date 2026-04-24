import React from 'react'
import { SectionTag, SectionTitle, Card } from '../components/UI'

const cards = [
  {
    icon: '🔍', title: 'Research Gap',
    text: 'Most existing feedback classification systems target single languages — primarily English. There is a critical lack of integrated systems capable of simultaneously handling multilingual inputs, especially for low-resource South Asian languages like Sinhala and Tamil.'
  },
  {
    icon: '❓', title: 'Research Problem',
    text: 'How can we design an AI-based system that accurately classifies multilingual user feedback into meaningful categories — positive, negative, neutral, and suggestion — while effectively handling code-switching and low-resource languages in real-world deployment?'
  },
  {
    icon: '🎯', title: 'Main Objective',
    text: 'To develop a web-based multilingual feedback classification platform that leverages transformer-based NLP to automatically classify user feedback, extract topics dynamically, and provide real-time analytics — supporting English, Sinhala, and Tamil with high accuracy.'
  },
  {
    icon: '📋', title: 'Specific Objectives',
    list: [
      'Develop a fine-tuned mBERT model for multilingual feedback classification',
      'Implement BERTopic-based dynamic topic modeling',
      'Build a real-time analytics dashboard with visual insights',
      'Evaluate across multiple languages achieving ≥90% accuracy',
      'Integrate multilingual support for Sinhala, Tamil and English',
    ]
  },
]

const techs = ['Python','FastAPI','React.js','PostgreSQL','mBERT','BERTopic','Sentence Transformers','Hugging Face','Docker','Tailwind CSS','NLTK','Scikit-learn']

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTag>Our Research</SectionTag>
        <SectionTitle>Project Scope</SectionTitle>

        {/* Literature Survey */}
        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#14532d' }}>Literature Survey</h3>
        <p className="leading-relaxed mb-4" style={{ color: '#64748b', fontSize: '0.93rem', maxWidth: 860 }}>
          Recent research in Natural Language Processing has produced numerous approaches for sentiment analysis and text classification.
          Most existing systems are designed for single-language datasets, primarily English. Multilingual BERT (mBERT) [1] demonstrated
          the feasibility of cross-lingual transfer learning. BERTopic [2] enabled neural topic modeling with dynamic theme extraction.
          Despite these advances, most production-ready feedback systems lack the ability to simultaneously classify sentiment, extract
          topics, and handle code-switching across South Asian languages including Sinhala and Tamil. FEEDNORA bridges these gaps by
          providing a comprehensive multilingual classification and topic modeling platform.
        </p>
        <div className="p-5 rounded-xl mb-10" style={{ background: '#f0fdf4', borderLeft: '4px solid #16a34a' }}>
          <p className="text-xs leading-loose" style={{ color: '#64748b' }}>
            [1] J. Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers," NAACL, 2019.<br />
            [2] M. Grootendorst, "BERTopic: Neural topic modeling with a class-based TF-IDF procedure," arXiv, 2022.<br />
            [3] D. Blei, A. Ng, M. Jordan, "Latent Dirichlet Allocation," JMLR, vol. 3, pp. 993–1022, 2003.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(c => (
            <Card key={c.title}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: '#dcfce7' }}>{c.icon}</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#14532d' }}>{c.title}</h3>
              {c.text && <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{c.text}</p>}
              {c.list && (
                <ul className="space-y-2 mt-1">
                  {c.list.map(item => (
                    <li key={item} className="flex gap-2 text-sm" style={{ color: '#64748b' }}>
                      <span className="font-bold flex-shrink-0" style={{ color: '#16a34a' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>

        {/* Methodology + Tech */}
        <Card className="mt-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: '#dcfce7' }}>⚙️</div>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#14532d' }}>Methodology &amp; Technologies Used</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>
            The system uses a microservices architecture. A fine-tuned multilingual BERT model is served via FastAPI.
            BERTopic handles dynamic topic modeling. PostgreSQL stores feedback data.
            A React.js dashboard provides real-time analytics and visualization.
          </p>
          <div className="flex flex-wrap gap-2">
            {techs.map(t => (
              <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: '#dcfce7', color: '#14532d' }}>{t}</span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
