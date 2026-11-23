import React, { useState } from 'react';
import { Search, Sparkles, Code2, Server, Smartphone, Wrench } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, category: cat.id, categoryTitle: cat.title }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'mobile', label: 'Mobile & QA' },
    { id: 'devops', label: 'DevOps & Tools' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 pb-6 border-b border-zinc-900">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>[04] Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Skills & Stack
          </h2>
          <p className="text-sm text-zinc-400 font-mono mt-1 max-w-3xl">
            Java 21, Spring Boot 3, PostgreSQL, pgvector, Apache Kafka, Spring AI, Docker, and Kubernetes.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-zinc-800 overflow-x-auto scrollbar-none w-full lg:w-auto">
            {categories.map((cat) => {
              const count = cat.id === 'all' 
                ? allSkills.length 
                : allSkills.filter(s => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id ? 'bg-black/30 text-cyan-200' : 'bg-zinc-900 text-zinc-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
            <input
              type="text"
              placeholder="Search stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 outline-none focus:border-cyan-500 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-4 rounded-xl stealth-card flex flex-col items-center justify-center text-center group cursor-pointer hover:border-zinc-700 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900/90 flex items-center justify-center p-2.5 mb-3 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <h3 className="font-semibold text-xs text-white group-hover:text-zinc-200 transition-colors">
                {skill.name}
              </h3>

              <span className="text-[10px] font-mono mt-1 text-zinc-500">
                {skill.level}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
