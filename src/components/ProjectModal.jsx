import React from 'react';
import { X, ExternalLink, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-black border-b border-zinc-850 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-900 text-zinc-300 border border-zinc-800">
              {project.category}
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              {project.date}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-500 hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
            <p className="text-xs font-mono text-zinc-400">{project.subtitle}</p>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Architecture & Engineering:
              </h4>
              <div className="space-y-1.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-zinc-600 font-mono">❯</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2">
              Stack:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 text-zinc-400 border border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="p-3.5 sm:p-4 bg-black border-t border-zinc-850 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-mono border border-zinc-800 transition-colors"
          >
            <GithubIcon size={14} />
            <span>Source Code</span>
          </a>

          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-bold transition-all shadow-md"
            >
              <span>Launch Site</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
