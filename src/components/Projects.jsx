import React, { useState } from 'react';
import { ExternalLink, Sparkles, Search, Layers, Eye, Star, ArrowUpRight, FolderGit2, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import GitHubActivityChart from './GitHubActivityChart';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai & full stack', label: 'GenAI & Systems' },
    { id: 'full stack', label: 'Full Stack & Web' },
    { id: 'frontend', label: 'Interactive UI' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-zinc-900">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            <span>[03] Production Systems & AI Applications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Featured Engineering
          </h2>
          <p className="text-sm text-zinc-400 font-mono mt-1">
            From enterprise Java architectures to local-first GenAI video editors and responsive React systems.
          </p>
        </div>

        {/* ======================================================== */}
        {/* LIVE 30-DAY GITHUB ACTIVITY GREEN CHART */}
        {/* ======================================================== */}
        <GitHubActivityChart />

        {/* Filter Tabs & Search Bar (Below GitHub Chart) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center p-1 rounded-xl bg-zinc-950 border border-zinc-800 w-full sm:w-auto overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
            <input
              type="text"
              placeholder="Search stack, AI, Java..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 outline-none focus:border-cyan-500 font-mono transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-zinc-500 hover:text-white"
                title="Clear search"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4 px-1">
          <span>Displaying {filteredProjects.length} of {projects.length} flagship systems</span>
          {searchQuery && (
            <span className="text-cyan-400">Filtering by "{searchQuery}"</span>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="stealth-card rounded-2xl flex flex-col justify-between overflow-hidden group cursor-pointer border border-white/10 hover:border-cyan-500/40 transition-all shadow-xl hover:-translate-y-1"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Banner */}
              <div className="relative aspect-video overflow-hidden bg-zinc-950 border-b border-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-black/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md font-bold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-900/90 text-amber-300 border border-amber-500/30 font-bold">
                      ★ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-xs text-cyan-400 font-mono mb-3 font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSearchQuery(tag);
                        }}
                        title={`Filter by ${tag}`}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900/90 hover:bg-cyan-950/60 text-zinc-300 hover:text-cyan-300 border border-zinc-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div 
                  className="pt-4 border-t border-zinc-900 flex items-center justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </a>

                  {project.webapp ? (
                    <a
                      href={project.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-bold transition-all shadow-md hover:scale-105"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
                    >
                      Inspect Specs ↗
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
