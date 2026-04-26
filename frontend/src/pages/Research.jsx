import React from 'react'
import { SectionTag, SectionTitle, Card } from '../components/UI'

const cards = [
  {
    icon: '🔍', 
    title: 'Research Gap',
    text: 'Current feedback systems have major limitations: they use fixed categories that cannot adapt to new topics, they work with only one language at a time and struggle with mixed languages (like Sinhala-English), and there is no single platform that combines language detection, sentiment analysis, and topic discovery together. Also, raw feedback text creates poor results in analysis, and small businesses cannot afford smart automated response tools for multiple languages.'
  },
  {
    icon: '❓', 
    title: 'Research Problem',
    text: "Sri Lankan online platforms get customer feedback in English, Sinhala, Tamil, and mixed languages. Traditional tools cannot handle this effectively. The challenge: How can we build a system that automatically finds and organizes new topics from this multilingual feedback—without needing predefined categories or manual labeling—while also analyzing sentiment and generating personalized responses efficiently?"
  },
  {
    icon: '🎯', 
    title: 'Main Objective',
    text: "Build FEEDNORA — a smart multilingual feedback system that automatically discovers topics, analyzes sentiment, and generates personalized responses in multiple languages without needing predefined categories or labeled training data."
  },
  {
    icon: '📋', 
    title: 'Specific Objectives',
    list: [
      'Build a smart topic discovery system using UMAP and HDBSCAN clustering on multilingual text',
      'Support English, Sinhala, Tamil, and code-mixed text using advanced language models',
      'Develop a learning system that can classify new feedback in real-time without retraining',
      'Design a response generator that creates personalized replies based on sentiment and category',
    ]
  },
]

const techs = [
  'Python 3.10', 'FastAPI', 'React 18', 'PostgreSQL 15',
  'Sentence Transformers', 'UMAP-learn', 'HDBSCAN',
  'spaCy', 'scikit-learn', 'langdetect',
  'pandas', 'numpy', 'Docker', 'Tailwind CSS',
  'Google Colab (T4 GPU)', 'OpenAI API (GPT-4o-mini)'
]

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTag>Our Research</SectionTag>
        <SectionTitle>Project Scope</SectionTitle>

        {/* Literature Survey */}
        <h3 className="text-2xl font-bold mt-10 mb-4" style={{ color: '#14532d' }}>
          Literature Survey
        </h3>
        <p className="leading-relaxed mb-4" style={{ color: '#64748b', fontSize: '0.93rem', maxWidth: 860 }}>
          Topic modeling has evolved significantly over 20 years. Early methods like LDA and NMF required you to specify how many topics you wanted and couldn't handle multiple languages or changing data. Modern transformer models like BERT revolutionized the field by understanding 100+ languages. Sentence-BERT improved this further by creating efficient sentence representations; its multilingual version allows English, Sinhala, and Tamil feedback to be analyzed together. BERTopic showed that combining sentence transformers with UMAP (dimensionality reduction) and HDBSCAN (clustering) produces better topic quality than older methods. For generating responses, template-based systems have proven practical and effective (70-85% accuracy), while deep learning approaches like GPT-2 are too expensive for small businesses and lack sufficient Sinhala and Tamil training data.
        </p>
        <div className="p-5 rounded-xl mb-10" style={{ background: '#f0fdf4', borderLeft: '4px solid #16a34a' }}>
          <p className="text-xs leading-loose" style={{ color: '#64748b' }}>
            [1] D. Blei, A. Ng, M. Jordan, "Latent Dirichlet Allocation," JMLR, vol. 3, pp. 993–1022, 2003. &nbsp;
            [2] J. Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers," NAACL, 2019. &nbsp;
            [3] N. Reimers &amp; I. Gurevych, "Sentence-BERT," EMNLP, 2019. &nbsp;
            [4] M. Grootendorst, "BERTopic," arXiv, 2022. &nbsp;
            [5] E. Reiter &amp; R. Dale, "Building Natural Language Generation Systems," Cambridge University Press, 2000.
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
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" 
            style={{ background: '#dcfce7' }}>⚙️</div>
          <h3 className="text-lg font-bold mb-3" style={{ color: '#14532d' }}>
            Methodology &amp; Technologies Used
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>
            The system uses a microservices architecture. A fine-tuned multilingual BERT model is served via FastAPI.
            BERTopic handles dynamic topic modeling. PostgreSQL stores feedback data.
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