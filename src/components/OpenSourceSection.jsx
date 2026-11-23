import React from 'react';
import { GitPullRequest, ExternalLink, ShieldCheck, CheckCircle2, Terminal, Code2, ArrowUpRight, Globe, Layers, Cpu } from 'lucide-react';
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
              Verified upstream code accepted and reviewed across Meta's React Native, NestJS, Selenium, ESLint, Babel, CPython, OpenTelemetry, and REA.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <a
              href="https://github.com/eslint/eslint/pull/21509"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-violet-400" />
              <span>ESLint #21509 (Reviewed)</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/react/react-native/pull/59459"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-cyan-400" />
              <span>React Native (2 Merged)</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/nestjs/nest/pull/18372"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-rose-400" />
              <span>NestJS #18372 Merged</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/SeleniumHQ/selenium/pull/18239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-emerald-400" />
              <span>Selenium (8 Merged)</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/scaleapi/agentenv-framework/pull/520"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-sky-400" />
              <span>Scale AI (3 Merged)</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/babel/babel/pull/18437"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-amber-400" />
              <span>Babel #18437 Merged</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/python/cpython/pull/160642"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-blue-400" />
              <span>CPython #160642</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/open-telemetry/opentelemetry-python/pull/5850"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-indigo-400" />
              <span>OpenTelemetry #5850 Approved</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/morluto/rea/pull/6973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 group"
            >
              <GitPullRequest size={13} className="text-purple-400" />
              <span>REA (3 Merged)</span>
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Contribution 1: facebook / react-native (Meta Open Source) */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  <CheckCircle2 size={13} className="text-cyan-400" />
                  2 PRs Merged into Trunk by Meta
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <GitPullRequest size={13} className="text-emerald-400" />
                  Active PRs (#59460 &amp; #59457)
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
                  Meta's Cross-Platform Framework : The core native runtime powering millions of apps globally
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Official contributor to Meta's flagship <strong>React Native</strong> framework, fixing runtime invariant assertions and strengthening test suites in virtualized list algorithms:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                  <li>
                    <strong className="text-white">PR #59459 (Merged):</strong> Corrected typos in user-facing runtime invariant assertion messages in <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-cyan-300">virtualized-lists</code> (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-cyan-300">866034f</code>). Imported via Meta internal Differential D127799190 and merged into trunk by Meta engineer Nicola Corti.
                  </li>
                  <li>
                    <strong className="text-white">PR #59458 (Merged):</strong> Synchronized broken package repository URLs across core React Native package descriptors (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-cyan-300">4420343</code>), merged into production trunk via Meta Differential D127597755.
                  </li>
                  <li>
                    <strong className="text-white">PR #59460 (Active):</strong> Engineered unit test coverage for <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">CellRenderMask.numCells()</code> and equality validation in <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">virtualized-lists</code>.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>Verified Meta Contributor License Agreement (CLA) on file</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>Imported &amp; merged via Meta Differential review system</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-64 pt-2 lg:pt-0">
              <a
                href="https://github.com/react/react-native/pull/59459"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-cyan-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={15} className="text-cyan-400" />
                  <span className="font-bold">Inspect PR #59459</span>
                </div>
                <ArrowUpRight size={13} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/react/react-native/commit/866034f97c1c80107fe5fd7a9dce33eb338fe238"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400" />
                  <span className="font-semibold text-zinc-300">Commit 866034f</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover/btn:text-cyan-300 font-mono">Trunk</span>
              </a>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 space-y-1">
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider font-bold">Tech Stack</div>
                <div className="text-zinc-300 font-semibold">React Native • Meta OSS • JavaScript • Flow • Jest</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution: nestjs / nest */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-rose-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                  <CheckCircle2 size={13} className="text-rose-400" />
                  Merged into Master
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-300 border border-red-500/20">
                  Enterprise Node.js Framework
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  @nestjs/platform-express
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  View Engine Resolution
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-rose-300 transition-colors">
                    nestjs / nest
                  </h3>
                  <a
                    href="https://github.com/nestjs/nest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    title="View Repository"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-sm text-rose-400/90 font-mono mt-0.5">
                  A progressive Node.js framework for building efficient, reliable, and scalable server-side applications (67k+ stars)
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Official contributor to <strong>NestJS</strong>, the leading enterprise TypeScript/Node.js framework:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                  <li>
                    <strong className="text-white">PR #18372 (Merged):</strong> Stripped trailing slashes when resolving view names in <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-rose-300">@nestjs/platform-express</code> (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-rose-300">955099d</code>). Ensured view lookups like <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">@Render('users/')</code> correctly resolve to <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-rose-300">users/index.ejs</code> instead of throwing malformed extension errors.
                  </li>
                  <li>
                    Added automated test cases covering trailing slash view resolution in NestJS express view adapter suites.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-rose-400 mt-0.5 shrink-0" />
                  <span>Merged into nestjs/nest master branch with passing CI suites</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-rose-400 mt-0.5 shrink-0" />
                  <span>Resolves trailing slash path parity with native Express render engines</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-64 pt-2 lg:pt-0">
              <a
                href="https://github.com/nestjs/nest/pull/18372"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-rose-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={15} className="text-rose-400" />
                  <span className="font-bold">Inspect PR #18372</span>
                </div>
                <ArrowUpRight size={13} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/nestjs/nest/commit/955099d8ccf9dc743c01df730c0ed4b629875242"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-900/90 border border-zinc-800 hover:border-rose-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-rose-400" />
                  <span className="font-semibold text-zinc-300">Commit 955099d</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover/btn:text-rose-300 font-mono">Master</span>
              </a>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 space-y-1">
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider font-bold">Tech Stack</div>
                <div className="text-zinc-300 font-semibold">TypeScript • NestJS • Node.js • Express • Jest</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution 2: SeleniumHQ / selenium */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-emerald-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  8 PRs Merged into Trunk
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
                  Official Selenium Browser Automation Framework : The industry-standard web automation engine
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Core contributor to the official <strong>Selenium</strong> Python WebDriver codebase with multiple pull requests merged directly into trunk by maintainer Corey Goldberg:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                  <li>
                    <strong className="text-white">PR #18286 (Merged):</strong> Narrowed broad <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">pytest.raises(Exception)</code> in BiDi tests for deterministic test failure detection (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">d12e84c</code>).
                  </li>
                  <li>
                    <strong className="text-white">PR #18272 (Merged):</strong> Validated declared numeric bounds during JavaScript BiDi serialization and deserialization, holding numbers to declared ranges (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">ac7a079</code>).
                  </li>
                  <li>
                    <strong className="text-white">PR #18240 (Merged):</strong> Enforced strict null list element rejection in both inbound and outbound BiDi protocol serialization (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">8a6aefc</code>).
                  </li>
                  <li>
                    <strong className="text-white">PR #18239 (Merged):</strong> Hardened <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">ErrorHandler.check_response()</code> against fatal <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">TypeError</code> crashes when remote browser drivers return <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">None</code> or omit error dictionaries (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">652351e</code>).
                  </li>
                  <li>
                    <strong className="text-white">PR #18238 (Merged):</strong> Aligned cookie domain and path matching with the RFC 6265 specification, handling case-insensitive comparison and leading dot subdomain rules (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-300">e21558f</code>).
                  </li>
                  <li>
                    <strong className="text-white">PR #18244 &amp; #18243 &amp; #18237 (Merged):</strong> Added explicit stacklevels for caller-accurate warnings, implemented <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-zinc-300">__hash__</code> contracts for pinned script identifiers, and corrected proxy descriptor initialization.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>8 PRs merged directly into upstream trunk by maintainer Corey Goldberg</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Aligned APIRequestContext cookie matching with RFC 6265 spec</span>
                </div>
              </div>
            </div>

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

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 space-y-1">
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider font-bold">Tech Stack</div>
                <div className="text-zinc-300 font-semibold">Python • Selenium WebDriver • RFC 6265 • BiDi • PyTest</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution 3: babel / babel */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-amber-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <CheckCircle2 size={13} className="text-amber-400" />
                  Merged into Main
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                  Compiler Tooling
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  AST Code Generator
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  TypeScript Internals
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    babel / babel
                  </h3>
                  <a
                    href="https://github.com/babel/babel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    title="View Repository"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-sm text-amber-400/90 font-mono mt-0.5">
                  The Compiler for Next Generation JavaScript : Transforming syntax across millions of builds daily
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Contributed to Babel's core code generator (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-amber-300">@babel/generator</code>), diagnosing and fixing an AST generation flaw where TypeScript type modifiers were erroneously stripped during code synthesis:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                  <li>
                    <strong className="text-white">PR #18437 (Merged):</strong> Preserved type modifiers in <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-amber-300">TSImportEqualsDeclaration</code> inside Babel's code generator, ensuring TypeScript syntax output fidelity.
                  </li>
                  <li>
                    Passed Babel's exhaustive compiler test suites and integrated directly into the production release pipeline.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-amber-400 mt-0.5 shrink-0" />
                  <span>Merged into babel/babel main branch with 100% CI compliance</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-amber-400 mt-0.5 shrink-0" />
                  <span>Preserves TS import-equals AST type annotations during code gen</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-64 pt-2 lg:pt-0">
              <a
                href="https://github.com/babel/babel/pull/18437"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-amber-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={15} className="text-amber-400" />
                  <span className="font-bold">Inspect PR #18437</span>
                </div>
                <ArrowUpRight size={13} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
              </a>

              <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 space-y-1">
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider font-bold">Tech Stack</div>
                <div className="text-zinc-300 font-semibold">TypeScript • Babel AST • Generator • Compilers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution 4: python / cpython & open-telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CPython */}
          <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-blue-500/40 p-6 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  <CheckCircle2 size={12} className="text-blue-400" />
                  CI Passing (100%)
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-800 text-zinc-300">
                  CPython Standard Library
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                    python / cpython
                  </h3>
                  <a
                    href="https://github.com/python/cpython"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
                <p className="text-xs text-blue-400/90 font-mono mt-0.5">
                  The Python programming language reference runtime
                </p>
              </div>

              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                <li>
                  <strong className="text-white">PR #160642:</strong> Fixed <code className="bg-zinc-900 px-1 py-0.5 rounded text-blue-300">StreamReader.read()</code> silently dropping incomplete characters at multibyte buffer boundary truncation (gh-160309).
                </li>
                <li>
                  <strong className="text-white">PR #160641:</strong> Resolved <code className="bg-zinc-900 px-1 py-0.5 rounded text-blue-300">csv.Dialect.__replace__()</code> losing slot-backed attributes (gh-160106).
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-900 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500">C • Python Internals • AsyncIO</span>
              <a
                href="https://github.com/python/cpython/pull/160642"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300"
              >
                <span>Inspect PR #160642</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* OpenTelemetry */}
          <div className="rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-indigo-500/40 p-6 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  <CheckCircle2 size={12} className="text-indigo-400" />
                  Approved by Maintainer
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-800 text-zinc-300">
                  CNCF Observability
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                    open-telemetry-python
                  </h3>
                  <a
                    href="https://github.com/open-telemetry/opentelemetry-python"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
                <p className="text-xs text-indigo-400/90 font-mono mt-0.5">
                  Cloud Native Computing Foundation (CNCF) Distributed Tracing Standard
                </p>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-white">PR #5850:</strong> Fixed concurrency once-guard on <code className="bg-zinc-900 px-1 py-0.5 rounded text-indigo-300">BatchProcessor._at_fork_reinit</code>, ensuring telemetry export workers reset correctly across multiprocessing fork lifecycles. Approved by maintainer <code className="text-indigo-300">herin049</code>.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-900 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500">Python • Multiprocessing • Tracing</span>
              <a
                href="https://github.com/open-telemetry/opentelemetry-python/pull/5850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300"
              >
                <span>Inspect PR #5850</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

        </div>

        {/* Contribution 5: eslint / eslint */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-violet-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                  <GitPullRequest size={13} className="text-violet-400" />
                  Reviewed by Core Maintainer
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Standard JavaScript Linter (25k+ Stars)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Rules &amp; AST Engine
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-800/70 text-zinc-400 border border-zinc-700/50">
                  Mocha Suite • 530 Tests Passing
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-violet-300 transition-colors">
                    eslint / eslint
                  </h3>
                  <a
                    href="https://github.com/eslint/eslint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    title="View Repository"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-sm text-violet-400/90 font-mono mt-0.5">
                  The Pluggable JavaScript &amp; TypeScript Linter : Core engine for static code analysis across modern web ecosystems
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Contributed to <strong>ESLint</strong>'s core rules engine in <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-violet-300">no-extra-boolean-cast</code> rule to guarantee JavaScript grammar validity and ASI safety across all autofix operations:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                  <li>
                    <strong className="text-white">PR #21509:</strong> Fixed AST autofixer syntax breakage where stripping redundant <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-violet-300">Boolean(...)</code> or double negations left object literals, function expressions, class expressions, and <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-violet-300">let[</code> bindings unparenthesized at the start of expression statements.
                  </li>
                  <li>
                    <strong className="text-white">ASI Safety Architecture:</strong> Integrated <code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-violet-300">astUtils.needsPrecedingSemicolon()</code> to prepend protective semicolons when parenthesizing statement-leading replacements, preventing unintended function call continuation bugs across unsemicoloned preceding lines.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-violet-400 mt-0.5 shrink-0" />
                  <span>Maintained 100% test pass rate across 530 rule unit tests</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-violet-400 mt-0.5 shrink-0" />
                  <span>Verified against official ESLint Contributor Guidelines &amp; Style Standard</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-64 pt-2 lg:pt-0">
              <a
                href="https://github.com/eslint/eslint/pull/21509"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-violet-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={16} className="text-violet-400" />
                  <span className="font-bold">Inspect PR #21509</span>
                </div>
                <ArrowUpRight size={14} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/saiyam-jain-dev/eslint/commit/91e50872441bbf9793394d854303862a4086db02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/80 hover:bg-zinc-900/90 border border-zinc-800 hover:border-violet-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-violet-400" />
                  <span className="font-semibold text-zinc-300">Commit 91e5087</span>
                </div>
                <span className="text-[11px] text-zinc-500 group-hover/btn:text-violet-300 font-mono">Branch</span>
              </a>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 space-y-1">
                <div className="text-[10px] uppercase text-zinc-500 tracking-wider font-bold">Tech Stack</div>
                <div className="text-zinc-300 font-semibold">JavaScript • ESLint AST • Espree • Mocha • Node.js</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribution 6: morluto / rea */}
        <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-purple-500/40 p-6 sm:p-8 transition-all duration-300 shadow-2xl group">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  <CheckCircle2 size={13} className="text-purple-400" />
                  2 PRs Merged into Main
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
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
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
                <p className="text-sm text-purple-400/90 font-mono mt-0.5">
                  Reverse Engineer Anything : Local-first agentic reverse-engineering tool with shared CLI/MCP workflows
                </p>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                <p>
                  Contributed to <strong>REA</strong> by expanding test coverage and fixing UI path validation across Erlang and browser views:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-300 pl-1">
                  <li>
                    <strong className="text-white">PR #6973 (Merged):</strong> Extended acceptance test coverage for BEAM analysis view queries (<code className="text-xs bg-zinc-900 px-1.5 py-0.5 rounded text-cyan-300">inspect_erlang_beam --view</code>) verifying name filtering on lambdas and chunk exclusion handling.
                  </li>
                  <li>
                    <strong className="text-white">PR #7097 (Merged):</strong> Fixed browser export path validation, reporting non-absolute paths at the input field rather than triggering unhandled UI exceptions.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-purple-400 mt-0.5 shrink-0" />
                  <span>2 pull requests squash-merged to upstream production branch</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-mono text-zinc-400">
                  <ShieldCheck size={14} className="text-purple-400 mt-0.5 shrink-0" />
                  <span>Zero regressions across 31,000+ test suite portable shard runner</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-64 pt-2 lg:pt-0">
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
                href="https://github.com/morluto/rea/pull/7097"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 hover:border-purple-500/50 text-white transition-all text-xs font-mono group/btn cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <GitPullRequest size={16} className="text-purple-400" />
                  <span className="font-bold">Inspect PR #7097</span>
                </div>
                <ArrowUpRight size={14} className="text-zinc-500 group-hover/btn:text-white transition-colors" />
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
