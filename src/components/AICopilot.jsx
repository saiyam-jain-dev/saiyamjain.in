import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  X, 
  Send, 
  CornerDownLeft, 
  Cpu, 
  Zap, 
  ExternalLink,
  CheckCircle,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, projects, experiences, skillCategories } from '../data/portfolioData';

const aiKnowledgeBase = {
  versatility: `Can Saiyam build anything? YES.
He is a polyglot software engineer with:
1. 2+ Years of Java automation testing, modern AI testing tools, and enterprise architectures.
2. End-to-end Full Stack web & mobile engineering (React 19, React Native, Next.js, Node.js).
3. Practical Generative AI & LLM tooling (building local-first AI video editors, OpenAI/Claude integrations, computer vision with OpenCV).
4. Scalable data layers (MongoDB, PostgreSQL, MySQL, Redis, Firebase).
5. 44+ active repositories on GitHub with verified daily continuous commits.`,

  java: `Java & Automation Testing (2+ Years):
Saiyam specializes in Java automation testing frameworks (Selenium, TestNG), modern AI-augmented QA tools, object-oriented software design, concurrency patterns, and RESTful microservices. His BCA background (7.5 CGPA) provided rigorous foundation in data structures, algorithms, and high-reliability systems testing.`,

  genai: `GenAI & AI Tools Experience:
• ReelAI (2026): A local-first AI-driven YouTube clip generator and editor that ingests video streams, calculates highlight trim points, and formats short-form vertical reels with copyright checks.
• Modern AI Testing: Integrating LLMs and automated prompt pipelines for automated test case generation and edge-case discovery.
• CamShow (2026): Computer vision & OpenCV stream processing in Python.
• AI Agent integrations: Context-aware LLM agents, prompt engineering, and client-side inference pipelines.`,

  skills: `Comprehensive Engineering Arsenal:
• Java & Testing: Java (Core & EE, 2+ Yrs), Automation Testing, Selenium, TestNG, AI Testing Tools, Spring Boot, REST APIs
• GenAI: LLM Pipelines, Local-First AI Video Tools, OpenCV, Prompt Architecture
• Frontend & Mobile: React 19, React Native, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Three.js
• Cloud & DBs: PostgreSQL, MongoDB, MySQL, Docker, Firebase, Git CI/CD`,

  projects: `Key Flagship Deployments:
1. ReelAI (2026) — AI-powered YouTube clip editor & vertical format timeline trimmer.
2. PDF Document Workstation (2026) — In-browser document visualizer with live GitHub Pages demo.
3. Movieyama — Entertainment streaming & media discovery hub powered by TMDB API.
4. Pathfinder Visualiser — Dynamic graph algorithms visualizer (Dijkstra's, Kruskal's, Prim's).
5. Projectify — Full-stack agile collaboration platform with JWT auth and email alerts.`,

  experience: `Industry & Professional Experience:
• Java Automation Testing & AI Systems Engineer (July 2024 - Present)
  Architecting automated Java test frameworks (Selenium, TestNG), modern AI-driven QA testing tools, and continuous integration pipelines for high-reliability systems.
• RemoteState — Software Engineer (Jan 2024 - June 2024)
  Built cross-platform apps using React Native and native Java bridging. Integrated RESTful endpoints and real-time Firebase sync. Reduced client re-renders by 30%.`,

  hire: `Why Hire Saiyam Jain?
✓ Versatility: Solves problems across the entire lifecycle — from Java automation testing suites and microservices to React Native mobile apps and GenAI tools.
✓ Proven Velocity: 44+ repositories and verified active GitHub commit matrix.
✓ High Academic & Algorithmic Foundation: BCA 7.5 CGPA with mastery of DSA and graph algorithms.
✓ Immediately adaptable to any engineering team and tech stack.`
};

export default function AICopilot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I am Saiyam's AI Agent (v2.6). I can answer anything about his 2+ years of Java experience, GenAI & full-stack development, projects, or why he can build anything your team needs.",
      timestamp: 'Online'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (queryText) => {
    const query = (queryText || input).trim();
    if (!query) return;

    const userMsg = { sender: 'user', text: query, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let reply = "";

      if (lower.includes('java') || lower.includes('2 year') || lower.includes('spring') || lower.includes('backend')) {
        reply = aiKnowledgeBase.java;
      } else if (lower.includes('genai') || lower.includes('ai') || lower.includes('llm') || lower.includes('reelai')) {
        reply = aiKnowledgeBase.genai;
      } else if (lower.includes('build anything') || lower.includes('versatile') || lower.includes('options') || lower.includes('hire')) {
        reply = aiKnowledgeBase.versatility;
      } else if (lower.includes('project') || lower.includes('work') || lower.includes('built')) {
        reply = aiKnowledgeBase.projects;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech')) {
        reply = aiKnowledgeBase.skills;
      } else if (lower.includes('experience') || lower.includes('job') || lower.includes('remotestate')) {
        reply = aiKnowledgeBase.experience;
      } else if (lower.includes('resume') || lower.includes('cv')) {
        reply = `You can access Saiyam's official resume here: ${personalInfo.resumeUrl}`;
        try { confetti({ particleCount: 50, spread: 60 }); } catch(e) {}
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) {
        reply = `Reach Saiyam directly at ${personalInfo.email} or on LinkedIn at ${personalInfo.linkedin}. He is actively interviewing!`;
        try { confetti({ particleCount: 70, spread: 70 }); } catch(e) {}
      } else {
        reply = aiKnowledgeBase.versatility;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const quickPrompts = [
    "☕ 2+ Years Java Depth",
    "🤖 GenAI & LLM Tools",
    "💪 Can he build anything?",
    "🚀 Top Projects",
    "💼 Work Experience",
    "📄 Access Resume"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-zinc-950/95 border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.25)] flex flex-col h-[88vh] sm:h-[580px] max-h-[640px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* AI Header */}
        <div className="p-4 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <Bot size={22} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-sm">Saiyam AI Copilot</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  RECRUITER READY
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono">Polyglot Engineer Knowledge Engine</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Prompts Strip */}
        <div className="px-4 py-2.5 bg-zinc-900/60 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-zinc-500 shrink-0">Prompts:</span>
          {quickPrompts.map((p) => (
            <button
              key={p}
              onClick={() => handleSend(p)}
              className="px-2.5 py-1 rounded-lg bg-zinc-800/80 hover:bg-cyan-500/20 text-zinc-300 hover:text-cyan-300 border border-zinc-700 hover:border-cyan-500/40 transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Chat Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-zinc-900/90 border border-white/10 text-zinc-200'
                }`}
              >
                {m.text}
              </div>
              <span className="text-[10px] font-mono text-zinc-500 mt-1 px-1">
                {m.timestamp}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-zinc-900/80 border border-white/10 w-20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.15s' }} />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Chat Input Field */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-850 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask AI: e.g. Java depth, GenAI tools, hire readiness..."
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none focus:border-cyan-500 transition-colors font-sans"
          />
          <button
            onClick={() => handleSend()}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-90 text-white font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <span>Ask</span>
            <Send size={13} />
          </button>
        </div>

      </div>
    </div>
  );
}
