import React from 'react'
import { SectionTag, SectionTitle } from '../components/UI'

const docs = [
  { icon: '📄', title: 'Project Proposal',          desc: 'Initial proposal with problem statement, objectives and methodology.',    link: '#', available: true },
  { icon: '📋', title: 'Checklist 1',               desc: 'Submission checklist for project proposal deliverables.',                 link: '#', available: true },
  { icon: '📊', title: 'Progress Presentation 1',   desc: 'Slides and documents from the first progress presentation.',              link: '#', available: true },
  { icon: '🔬', title: 'Progress Presentation 2',   desc: 'Slides and documents from the second progress presentation.',             link: '#', available: false },
  { icon: '📰', title: 'Research Paper',             desc: 'Published academic paper on multilingual feedback classification.',        link: '#', available: false },
  { icon: '📘', title: 'Final Report & Presentation',desc: 'Complete final report with all chapters and presentation slides.',        link: '#', available: false },
]

export default function Documents() {
  return (
    <section id="documents" className="py-20 section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTag>Our Documents</SectionTag>
        <SectionTitle>Project Documents</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {docs.map(d => (
            <div key={d.title}
              className="bg-white rounded-2xl border p-6 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ borderColor: '#e2e8f0' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                style={{ background: '#dcfce7' }}>{d.icon}</div>
              <h4 className="font-bold text-sm mb-2" style={{ color: '#14532d' }}>{d.title}</h4>
              <p className="text-xs leading-relaxed mb-5 flex-1" style={{ color: '#64748b' }}>{d.desc}</p>
              {d.available ? (
                <a href={d.link}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold text-white transition-all hover:opacity-90"
                  style={{ background: '#16a34a' }}>
                  <i className="fas fa-eye"></i> View Document
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-bold"
                  style={{ border: '1.5px solid #16a34a', color: '#14532d', background: 'transparent' }}>
                  <i className="fas fa-clock"></i> Upcoming
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
