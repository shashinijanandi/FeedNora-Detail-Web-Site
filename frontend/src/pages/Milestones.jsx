import React from 'react'
import { SectionTag, SectionTitle, Chip } from '../components/UI'

const milestones = [
  { date: 'March 2026',    title: 'Project Proposal',           desc: 'Initial proposal covering research problem, objectives, methodology, and literature review submitted to the panel.', progress: 100, marks: 6,  chip: 'done', chipLabel: '✓ Completed' },
  { date: 'April 2026',   title: 'Progress Presentation – 1',  desc: 'First presentation demonstrating system design, architecture, and early prototype with preliminary model results.',    progress: 100, marks: 15, chip: 'done', chipLabel: '✓ Completed' },
  { date: 'July 2026',    title: 'Progress Presentation – 2',  desc: 'Showcasing completed core features, multilingual model evaluation, topic modeling results and full integration.',        progress: 100, marks: 18, chip: 'done', chipLabel: '✓ Completed' },
  { date: 'August 2026',  title: 'Research Paper',             desc: 'Academic paper describing contributions to multilingual NLP and feedback classification knowledge.',                     progress: 20,  marks: 10, chip: 'pend', chipLabel: '🔵 Upcoming' },
  { date: 'October 2026', title: 'Final Report',               desc: 'Complete final report with all chapters including design, implementation, evaluation and conclusions.',                   progress: 60,  marks: 19, chip: 'pend', chipLabel: '🔵 Upcoming' },
  { date: 'Nov 2026',     title: 'Final Presentation & Viva',  desc: 'Complete system demonstration before the panel. Individual viva assessing each member\'s contribution.',                progress: 0,   marks: 20, chip: 'pend', chipLabel: '🔵 Upcoming' },
  { date: 'Nov 2026',     title: 'Website Assessment',         desc: 'The project website promotes the research and provides all details related to FEEDNORA for public access.',             progress: 100,  marks: 2,  chip: 'done', chipLabel: '✓ Completed' },
  { date: 'Dec 2026',     title: 'Logbook',                    desc: 'Project status validated through the logbook including status documents 1 and 2 throughout the project.',               progress: 40,   marks: 4,  chip: 'pend', chipLabel: '⏳ In Progress' },
]

const topStats = [
  { num: '200+', label: 'Days Worked' },
  { num: '10',   label: 'Documents' },
  { num: '4',    label: 'Presentations' },
  { num: '8',    label: 'Milestones' },
]

function TimelineItem({ m, idx }) {
  const isLeft = idx % 2 === 0
  return (
    <div className={`flex gap-8 mb-10 relative items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:flex-row${isLeft ? '' : '-reverse'}`}
      style={{ flexDirection: undefined }}>

      {/* Card side */}
      <div className="flex-1 bg-white rounded-2xl border p-6 transition-all hover:shadow-xl hover:-translate-y-1 max-w-[calc(50%-2rem)] hidden md:block"
        style={{ borderColor: '#e2e8f0' }}>
        <div className="text-xs font-semibold mb-1" style={{ color: '#16a34a' }}>{m.date}</div>
        <h3 className="text-base font-bold mb-2" style={{ color: '#14532d' }}>{m.title}</h3>
        <p className="text-xs leading-relaxed mb-3" style={{ color: '#64748b' }}>{m.desc}</p>
        <div>
          <div className="flex justify-between text-xs mb-1" style={{ color: '#94a3b8' }}>
            <span>Completion</span><span>{m.progress}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#e2e8f0' }}>
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${m.progress}%`, background: '#16a34a' }} />
          </div>
        </div>
        <Chip type={m.chip}>{m.chipLabel}</Chip>
        <div className="text-xs font-bold mt-2" style={{ color: '#16a34a' }}>Marks Allocated: {m.marks}</div>
      </div>

      {/* Dot */}
      <div className="absolute left-1/2 top-5 w-4 h-4 rounded-full border-2 border-white -translate-x-1/2 z-10 hidden md:block"
        style={{ background: '#16a34a', boxShadow: '0 0 0 4px #dcfce7' }} />

      {/* Spacer */}
      <div className="flex-1 hidden md:block max-w-[calc(50%-2rem)]" />

      {/* Mobile card (full width) */}
      <div className="md:hidden flex-1 bg-white rounded-2xl border p-5" style={{ borderColor: '#e2e8f0' }}>
        <div className="text-xs font-semibold mb-1" style={{ color: '#16a34a' }}>{m.date}</div>
        <h3 className="text-base font-bold mb-2" style={{ color: '#14532d' }}>{m.title}</h3>
        <p className="text-xs leading-relaxed mb-3" style={{ color: '#64748b' }}>{m.desc}</p>
        <div>
          <div className="flex justify-between text-xs mb-1" style={{ color: '#94a3b8' }}>
            <span>Completion</span><span>{m.progress}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#e2e8f0' }}>
            <div className="h-full rounded-full" style={{ width: `${m.progress}%`, background: '#16a34a' }} />
          </div>
        </div>
        <Chip type={m.chip}>{m.chipLabel}</Chip>
        <div className="text-xs font-bold mt-2" style={{ color: '#16a34a' }}>Marks Allocated: {m.marks}</div>
      </div>
    </div>
  )
}

export default function Milestones() {
  return (
    <section id="milestones" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTag>Our Milestones</SectionTag>
        <SectionTitle>Project Timeline</SectionTitle>

        {/* Top stats */}
        <div className="flex flex-wrap gap-8 my-8">
          {topStats.map(s => (
            <div key={s.label}>
              <div className="text-3xl font-black" style={{ color: '#16a34a' }}>{s.num}</div>
              <div className="text-xs" style={{ color: '#64748b' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {milestones.map((m, i) => <TimelineItem key={m.title} m={m} idx={i} />)}
        </div>
      </div>
    </section>
  )
}
