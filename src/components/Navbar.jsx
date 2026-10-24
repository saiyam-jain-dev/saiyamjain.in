import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Bot } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenAI }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Repositories', href: '#repositories' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Stack', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'repositories', 'opensource', 'projects', 'skills', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-black/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-xs tracking-tighter shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-200">
            SJ
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Center Nav */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-zinc-950/80 px-3.5 py-1.5 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* AI Copilot Button */}
          <button
            onClick={onOpenAI}
            aria-label="Open AI Copilot Dialog"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
            title="Ask Portfolio AI"
          >
            <Bot size={14} className="text-cyan-400" />
            <span>AI Copilot</span>
          </button>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub Profile"
            className="p-2 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View LinkedIn Profile"
            className="p-2 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-black font-extrabold text-xs transition-colors cursor-pointer shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAI}
            className="p-2 text-cyan-400 hover:bg-white/10 rounded-lg"
            title="AI Copilot"
          >
            <Bot size={20} />
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-400 hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-2xl px-5 pt-3 pb-6 mt-3 space-y-3 border-b border-white/10">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-xs font-mono font-medium text-zinc-300 hover:text-white hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-850 flex items-center justify-between">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAI(); }}
              className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold"
            >
              <Bot size={15} />
              <span>Ask AI Copilot</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs bg-white text-black px-4 py-1.5 rounded-full font-bold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
