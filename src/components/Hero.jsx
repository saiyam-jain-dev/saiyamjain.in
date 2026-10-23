import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Bot, 
  Layers, 
  Cpu, 
  Zap, 
  CheckCircle2,
  Code2,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Hero3DStage from './Hero3DStage';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenAI }) {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Polyglot Software Engineer (Java, JS, Python)",
    "2+ Years Java Enterprise & Systems Depth",
    "GenAI & LLM Application Architect",
    "Full-Stack & React Native Specialist",
    "Ready to Build, Ship & Scale Anything"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleResumeClick = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#06b6d4', '#10b981', '#8b5cf6', '#ffffff']
      });
    } catch (e) {}
  };

  return (
    <section id="hero" className="relative min-h-[96vh] pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Laser Horizon Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[480px] bg-gradient-to-b from-indigo-600/20 via-cyan-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Engineering Capabilities & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top 2026 AI HUD Status Capsule */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-mono tracking-normal sm:tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-xl">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="truncate">STATUS: OPEN TO FULL-STACK / BACKEND / JAVA / AI</span>
              </div>

              <button
                onClick={onOpenAI}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 hover:from-cyan-500/30 hover:to-emerald-500/30 border border-cyan-500/40 text-white text-[10px] sm:text-xs font-mono tracking-wide shadow-md transition-all hover:scale-105 cursor-pointer backdrop-blur-xl group"
              >
                <Bot size={13} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Ask AI Copilot</span>
                <span className="text-[9px] sm:text-[10px] bg-cyan-500/30 px-1.5 py-0.2 rounded border border-cyan-400/40 text-cyan-200">
                  ⚡ v2.6
                </span>
              </button>
            </div>

            {/* Giant Futuristic Headline */}
            <p className="text-[11px] sm:text-sm font-mono uppercase tracking-[0.14em] sm:tracking-[0.25em] text-cyan-400 font-bold mb-2">
              Polyglot Engineer • Full-Stack • 2+ Yrs Java • GenAI
            </p>

            <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] mb-4">
              Saiyam{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.45)]">
                Jain
              </span>
            </h1>

            {/* Dynamic Animated Capability Line */}
            <div className="min-h-[2.5rem] h-auto flex items-center mb-5">
              <span className="text-base sm:text-2xl font-mono text-zinc-200 font-bold tracking-tight">
                <span className="text-emerald-400 mr-2 font-mono">❯</span>
                {roles[roleIndex]}
              </span>
            </div>

            <p className="text-sm sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-normal mb-8">
              Software engineer specializing in Java automation testing, modern AI-driven QA architectures, and high-performance full-stack systems (React, Node.js, Next.js). Experienced in building resilient test suites, production GenAI workflows, and scalable cross-platform software.
            </p>

            {/* Versatility Badges */}
            <div className="flex flex-wrap gap-2 mb-8 text-[11px] sm:text-xs font-mono">
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-zinc-900/90 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                <ShieldCheck size={13} className="shrink-0" />
                Java & Automation Testing (2+ Yrs)
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-zinc-900/90 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
                <Cpu size={13} className="shrink-0" />
                Modern AI Testing & GenAI
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-zinc-900/90 border border-purple-500/30 text-purple-300 flex items-center gap-1.5">
                <Layers size={13} className="shrink-0" />
                Full-Stack MERN
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-lg bg-zinc-900/90 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                <Zap size={13} className="shrink-0" />
                React Native
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-black font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 cursor-pointer text-center"
              >
                <span>Projects</span>
                <ArrowRight size={15} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-zinc-950/90 hover:bg-zinc-900 text-white border border-cyan-500/30 hover:border-cyan-400 font-semibold text-xs sm:text-sm transition-all duration-200 backdrop-blur-xl shadow-lg hover:scale-105 cursor-pointer text-center"
              >
                <FileText size={15} className="text-cyan-400" />
                <span>Resume</span>
                <Sparkles size={13} className="text-amber-400" />
              </a>

              <button
                onClick={onOpenAI}
                className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-xs sm:text-sm transition-all duration-200 backdrop-blur-xl cursor-pointer"
              >
                <Bot size={15} className="text-cyan-400" />
                <span>Ask AI Agent</span>
              </button>
            </div>

            {/* Telemetry Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all shadow-md group hover:-translate-y-0.5"
                >
                  <div className="text-2xl sm:text-3xl font-black font-mono text-white mb-0.5 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{stat.value}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60" />
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive 3D Stage */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3DStage />
          </div>

        </div>
      </div>
    </section>
  );
}
