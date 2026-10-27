import React from 'react';
import { GitPullRequest, ExternalLink, ShieldCheck, CheckCircle2, Terminal, Code2, ArrowUpRight, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-20 relative overflow-hidden border-t border-zinc-900 bg-zinc-950/40">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="pb-6 border-b border-zinc-900 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>[01] Production Open Source Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Open Source Contributions
            </h2>
            <p className="text-sm text-zinc-400 font-mono mt-1">
              Verified core contributions to Meta's React Native framework, Selenium browser automation, and agentic reverse engineering engines.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            <a
              href="https://github.com/SeleniumHQ/selenium/pull/18239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-emerald-400" />
              <span>Selenium PR #18239 Merged</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/SeleniumHQ/selenium/pull/18238"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-emerald-400" />
              <span>Selenium PR #18238 Merged</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/morluto/rea/pull/6973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-purple-400" />
              <span>REA PR #6973 Merged</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

                {/* Featured Contribution 1: facebook / react-native (Meta Open Source) */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  <CheckCircle2 size={13} className="text-cyan-400" />
                  Merged into Trunk by Meta
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <GitPullRequest size={13} className="text-emerald-400" />
                  Active PRs (#59460, #59459, #59457)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Meta Open Source
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Core Runtime
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Virtualized Lists
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    facebook / react-native
                  </h3>
                  <a
                    href="https://github.com/react/react-native"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    title="View Repository"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-sm text-cyan-400/90 font-mono mt-0.5">
                  Meta's Cross-Platform Framework — The core native runtime powering millions of apps globally
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Official contributor to Meta's flagship <strong>React Native</strong> repository, maintaining core documentation, runtime invariants, and virtualized list reliability:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                  <li>
                    <strong className="text-white">PR #59458 (Merged):</strong> Corrected broken and stale package URLs across core React Native package descriptors and documentation (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-cyan-300">4420343</code>). Imported via Meta internal Differential D127597755, validated through Meta's automated build infrastructure, and merged directly into production trunk by Meta engineering.
                  </li>
                  <li>
                    <strong className="text-white">PR #59460 (Active):</strong> Engineered missing unit test coverage for <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">CellRenderMask.numCells()</code> and equality validation in <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">virtualized-lists</code>.
                  </li>
                  <li>
                    <strong className="text-white">PR #59459 &amp; #59457 (Active):</strong> Resolved typos in user-facing invariant error messages and rectified JSDoc typing inconsistencies in list windowing algorithms.
                  </li>
                </ul>
              </div>

              {/* Verified Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>Verified Meta Contributor License Agreement (CLA) on file</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>Imported &amp; merged via Meta Differential D127597755</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>Direct commit 4420343 in upstream react/react-native trunk</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>Active pipeline improving virtualized list test suites</span>
                </div>
              </div>
            </div>

            {/* Right Side Stats / Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-64 pt-2 lg:pt-0">
              <a
                href="https://github.com/react/react-native/pull/59458"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-cyan-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={15} className="text-cyan-400" />
                  <span className="font-bold">Inspect PR #59458</span>
                </div>
                <ArrowUpRight size={13} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/react/react-native/commit/4420343defbef0b90b85710500c6930d7bc21b0a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400" />
                  <span className="font-semibold text-zinc-300">Merge Commit</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover/btn:text-cyan-300 font-mono">4420343</span>
              </a>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 space-y-1">
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider font-bold">Tech Stack</div>
                <div className="text-zinc-300 font-semibold">React Native • Meta OSS • JavaScript • Flow • CI</div>
              </div>
            </div>

          </div>

        </div>

        {/* Featured Contribution 2: SeleniumHQ / selenium */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-emerald-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  2 PRs Merged into Trunk
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  <GitPullRequest size={13} className="text-cyan-400" />
                  Active PRs (#18240 & #18237)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Python WebDriver Core
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  RFC 6265 Cookie Engine
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  W3C WebDriver BiDi
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    SeleniumHQ / selenium
                  </h3>
                  <a
                    href="https://github.com/SeleniumHQ/selenium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    title="View Repository"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-sm text-emerald-400/90 font-mono mt-0.5">
                  Official Selenium Browser Automation Framework — Industry-standard web browser automation engine
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Core contributor to the official <strong>Selenium</strong> Python WebDriver codebase with multiple contributions merged directly into trunk by core maintainer Corey Goldberg:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                  <li>
                    <strong className="text-white">PR #18239 (Merged):</strong> Hardened <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">ErrorHandler.check_response()</code> against fatal <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">TypeError</code> (&quot;argument of type &apos;NoneType&apos; is not iterable&quot;) and unhandled <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">KeyError</code> exceptions when remote drivers return <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">None</code> or omit error dictionaries.
                  </li>
                  <li>
                    <strong className="text-white">PR #18238 (Merged):</strong> Aligned <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">APIRequestContext._cookie_matches()</code> with RFC 6265 HTTP State Management, implementing case-insensitive domain matching, optional leading dot handling across subdomains (&sect;5.1.3), and trailing slash path resolution (&sect;5.1.4).
                  </li>
                  <li>
                    <strong className="text-white">PR #18240 (Active):</strong> Strengthened W3C WebDriver BiDi protocol conformance by enforcing null list element rejection in inbound and outbound serialization.
                  </li>
                </ul>
              </div>

              {/* Verified Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>2 PRs merged directly into upstream trunk by maintainer Corey Goldberg</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Aligned APIRequestContext cookie matching with RFC 6265 spec</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Hardened error handling against malformed null payloads across drivers</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>100% CI pass rate with strict Ruff & MyPy compliance</span>
                </div>
              </div>
            </div>

            {/* Right Side Stats / Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-64 pt-2 lg:pt-0">
              <a
                href="https://github.com/SeleniumHQ/selenium/pull/18239"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-emerald-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={15} className="text-emerald-400" />
                  <span className="font-bold">Inspect PR #18239</span>
                </div>
                <ArrowUpRight size={13} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/SeleniumHQ/selenium/commit/652351eaef7a06da2e9fc9e32a688b75373a25cb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400" />
                  <span className="font-semibold text-zinc-300">Commit #18239</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover/btn:text-cyan-300 font-mono">652351e</span>
              </a>

              <a
                href="https://github.com/SeleniumHQ/selenium/pull/18238"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-emerald-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={15} className="text-emerald-400" />
                  <span className="font-bold">Inspect PR #18238</span>
                </div>
                <ArrowUpRight size={13} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/SeleniumHQ/selenium/commit/e21558f2c7547ce42ed5db2c9ab15fbca8de2b84"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400" />
                  <span className="font-semibold text-zinc-300">Commit #18238</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover/btn:text-cyan-300 font-mono">e21558f</span>
              </a>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 space-y-1">
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider font-bold">Tech Stack</div>
                <div className="text-zinc-300 font-semibold">Python • WebDriver • RFC 6265 • BiDi • PyTest</div>
              </div>
            </div>

          </div>

        </div>

        {/* Featured Contribution 3: morluto / rea */}
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
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-64 pt-2 lg:pt-0">
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
