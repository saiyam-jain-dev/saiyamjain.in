import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import OpenSourceSection from './components/OpenSourceSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import AICopilot from './components/AICopilot';
import SexyInteractivePointer from './components/SexyInteractivePointer';
import MusicPlayer from './components/MusicPlayer';
import ScrollToTop from './components/ScrollToTop';
import KonamiEasterEgg from './components/KonamiEasterEgg';
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);

  // Global Cmd+K or Ctrl+K shortcut to toggle AI Copilot
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsAIOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* 3D Animated Cyber Core & Particle Background (Global) */}
      <ThreeBackground />

      {/* Sexy Interactive Cursor Sparks & Click Ripples */}
      <SexyInteractivePointer />

      {/* Modern 2026 Stealth Navbar */}
      <Navbar onOpenAI={() => setIsAIOpen(true)} />

      {/* Developer Konami Code Easter Egg */}
      <KonamiEasterEgg />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenAI={() => setIsAIOpen(true)} />
        <Projects />
        <OpenSourceSection />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />

      {/* Cyber Music Player */}
      <MusicPlayer />

      {/* 2026 AI Assistant Copilot Modal */}
      <AICopilot isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />

      {/* Floating 2026 AI Trigger Widget (Desktop & Tablet only, hidden on mobile) */}
      <div className="hidden sm:block fixed sm:bottom-6 sm:right-6 z-40">
        <button
          onClick={() => setIsAIOpen(true)}
          className="flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-2 sm:px-4 sm:py-3 rounded-full bg-zinc-950/95 text-white border border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all text-xs font-mono font-bold cursor-pointer backdrop-blur-xl group"
          title="Open 2026 AI Copilot"
        >
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-cyan-500"></span>
          </span>
          <Bot size={15} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Saiyam AI</span>
          <span className="bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] border border-cyan-400/30">
            2026
          </span>
        </button>
      </div>

    </div>
  );
}
