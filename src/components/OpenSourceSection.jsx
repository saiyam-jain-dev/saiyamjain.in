import React from 'react';
import { GitPullRequest, ExternalLink, ShieldCheck, CheckCircle2, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-20 relative overflow-hidden border-t border-zinc-900 bg-zinc-950/40">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-zinc-900 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>[02] Production Open Source Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Open Source Contributions
            </h2>
            <p className="text-sm text-zinc-400 font-mono mt-1">
              Verified core contributions to leading high-scale developer tooling and AI reverse engineering engines.
            </p>
          </div>

          <a
            href="https://github.com/morluto/rea/pull/6973"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 self-start md:self-auto group"
          >
            <GitPullRequest size={14} className="text-purple-400" />
            <span>PR #6973 Merged</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Featured Contribution Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  <CheckCircle2 size={13} className="text-purple-400" />
                  Merged into Main
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Erlang BEAM Engine
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Model Context Protocol (MCP)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-800/70 text-zinc-400 border border-zinc-700/50">
                  Vitest Regression Suite
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    morluto / rea
                  </h3>
                  <a
                    href="https://github.com/morluto/rea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    title="View Repository"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-sm text-cyan-400/90 font-mono mt-0.5">
                  Reverse Engineer Anything — Local-first agentic reverse-engineering tool with shared CLI/MCP workflows
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Contributed to <strong>REA</strong> by expanding test coverage and documentation for BEAM analysis view queries (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-cyan-300">inspect_erlang_beam --view</code>). 
                Added acceptance test cases verifying positive and negative name filtering across <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">lambdas</code> and nonexistent <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">chunks</code> tags, and codified collection-specific string resolution rules in official engine documentation.
              </p>

              {/* Verified Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Validated against strict conventional commit & PR readiness gates</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Zero regressions across 31,000+ test suite portable shard runner</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Passed Greptile AI & maintainer code review</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Squash-merged directly to upstream production branch</span>
                </div>
              </div>
            </div>

            {/* Right Side Stats / Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-60 pt-2 lg:pt-0">
              <a
                href="https://github.com/morluto/rea/pull/6973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-purple-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={16} className="text-purple-400" />
                  <span className="font-bold">Inspect PR #6973</span>
                </div>
                <ArrowUpRight size={14} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/morluto/rea/commit/ddde7276c445fb42ea31952493dacc2a38b7efa0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-cyan-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-cyan-400" />
                  <span className="font-bold">Merge Commit</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover/btn:text-cyan-300 font-mono">ddde727</span>
              </a>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 space-y-1">
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider font-bold">Tech Stack</div>
                <div className="text-zinc-300 font-semibold">TypeScript • Vitest • BEAM • MCP</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
