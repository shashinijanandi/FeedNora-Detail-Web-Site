import React from 'react'
import { SectionTag, SectionTitle } from '../components/UI'

const supervisors = [
  { initials: 'SV', badge: 'Supervisor',    name: 'Prof. / Dr. Supervisor Name', inst: 'Sri Lanka Institute of Information Technology (SLIIT)\nDepartment of Information Technology' },
  { initials: 'CS', badge: 'Co-Supervisor', name: 'Co-Supervisor Name',          inst: 'Sri Lanka Institute of Information Technology (SLIIT)\nDepartment of Information Technology' },
]

const members = [
  { initials: 'SJ', badge: 'Team Leader', name: 'Shashini Janandi',   inst: 'Sri Lanka Institute of Information Technology (SLIIT)\nDepartment of Information Technology' },
  { initials: 'M2', badge: 'Team Member', name: 'Member 2 Full Name', inst: 'Sri Lanka Institute of Information Technology (SLIIT)\nDepartment of Information Technology' },
]

function PersonCard({ initials, badge, name, inst }) {
  return (
    <div className="bg-white rounded-2xl border p-6 text-center transition-all hover:shadow-xl hover:-translate-y-1"
      style={{ borderColor: '#e2e8f0' }}>
      <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white"
        style={{ background: 'linear-gradient(135deg,#16a34a,#4ade80)', border: '4px solid #dcfce7' }}>
        {initials}
      </div>
      <div className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
        style={{ background: '#dcfce7', color: '#14532d' }}>{badge}</div>
      <div className="font-bold text-sm mb-1" style={{ color: '#14532d' }}>{name}</div>
      <div className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
        {inst.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTag>Meet Our Team</SectionTag>
        <SectionTitle>About Us</SectionTitle>

        <p className="text-xs font-bold uppercase tracking-widest mt-8 mb-4" style={{ color: '#94a3b8' }}>Supervisors</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {supervisors.map(s => <PersonCard key={s.name} {...s} />)}
        </div>

        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#94a3b8' }}>Research Team</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map(m => <PersonCard key={m.name} {...m} />)}
        </div>
      </div>
    </section>
  )
}
