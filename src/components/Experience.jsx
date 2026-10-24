import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences, educations } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-900">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span>[05] Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Experience & Education
            </h2>
            <p className="text-sm text-zinc-400 font-mono mt-1">
              Java automation testing, AI QA systems, RemoteState software engineering, and TMU BCA foundation.
            </p>
          </div>

          <div className="inline-flex items-center p-1 rounded-xl bg-zinc-950 border border-zinc-800 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Briefcase size={14} />
              <span>Work</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <GraduationCap size={14} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' ? (
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 sm:p-8 rounded-2xl stealth-card relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 p-2 flex items-center justify-center border border-zinc-800 shrink-0 overflow-hidden">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain rounded-lg"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-zinc-400 font-mono text-xs">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-500 font-mono">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.date}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                        <span className="text-zinc-500 font-mono">❯</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-2">
                    {exp.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900/80 text-zinc-400 border border-zinc-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div id="education" className="space-y-6">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 sm:p-8 rounded-2xl stealth-card relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/95 p-1.5 flex items-center justify-center border border-zinc-700/60 shrink-0 overflow-hidden shadow-lg shadow-black/40">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-zinc-400 font-mono text-xs">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-500 font-mono">
                      <span>{edu.date}</span>
                      <span className="text-emerald-400 font-bold">CGPA: {edu.grade}</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900/80 text-zinc-400 border border-zinc-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
