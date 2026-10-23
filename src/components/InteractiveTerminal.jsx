import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, projects, skillCategories, experiences } from '../data/portfolioData';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '⚡ Saiyam Jain Interactive CLI [Version 2.0.0]\nType "help" for a list of available commands, or click any command shortcut below.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    const lower = raw.toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${raw}` }];

    switch (lower) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `Available Commands:
  • help        - Display this helpful guide
  • skills      - List engineering skill categories & proficiencies
  • projects    - View flagship projects with live demo links
  • experience  - View professional work history (RemoteState)
  • education   - View academic background (TMU BCA)
  • resume      - Open official resume in Google Drive
  • contact     - Show social coordinates & email
  • sudo hire   - Instant hire confirmation sequence 🚀
  • clear       - Clear terminal output`
        });
        break;

      case 'skills':
        const skillsSummary = skillCategories
          .map(cat => `[${cat.title}]: ${cat.skills.map(s => s.name).join(', ')}`)
          .join('\n\n');
        newHistory.push({ type: 'response', text: skillsSummary });
        break;

      case 'projects':
        const projSummary = projects
          .map((p, i) => `${i + 1}. ${p.title} (${p.category.toUpperCase()})\n   Demo: ${p.webapp}\n   Repo: ${p.github}\n   Tech: ${p.tags.join(', ')}`)
          .join('\n\n');
        newHistory.push({ type: 'response', text: projSummary });
        break;

      case 'experience':
        const exp = experiences[0];
        newHistory.push({
          type: 'response',
          text: `Role: ${exp.role} at ${exp.company}\nDuration: ${exp.date}\nStack: ${exp.skills.join(', ')}\nFocus: ${exp.description}`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'response',
          text: `Degree: Bachelor of Computer Applications (BCA)\nInstitution: Teerthanker Mahaveer University (2021 - 2024)\nGrade: 7.5 CGPA\nKey Subjects: Data Structures, Algorithms, DBMS, OOP, OS, Networks`
        });
        break;

      case 'resume':
        window.open(personalInfo.resumeUrl, '_blank');
        try {
          confetti({ particleCount: 50, spread: 60 });
        } catch (e) {}
        newHistory.push({
          type: 'response',
          text: `Opening Saiyam Jain's resume in a new tab...`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `Email:    ${personalInfo.email}\nGitHub:   ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}\nTwitter:  ${personalInfo.twitter}`
        });
        break;

      case 'sudo hire':
      case 'hire':
        try {
          confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        } catch (e) {}
        newHistory.push({
          type: 'response',
          text: `🎉 EXCELLENT DECISION!\nSaiyam Jain has been notified of your interest. Let's build something exceptional together!\nDirect Email: ${personalInfo.email}\nRedirecting to Contact section...`
        });
        setTimeout(() => {
          onClose();
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'whoami':
        newHistory.push({
          type: 'response',
          text: `You are a visionary visitor exploring the portfolio of Saiyam Jain!`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${raw}". Type "help" to see available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const quickCommands = ['help', 'skills', 'projects', 'resume', 'sudo hire', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer hover:opacity-100 opacity-80" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block opacity-80" />
            </div>
            <div className="flex items-center gap-2 ml-3 text-xs font-mono text-zinc-400">
              <Terminal size={14} className="text-emerald-400" />
              <span>guest@saiyamjain-portfolio:~</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Quick Command Pills */}
        <div className="px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/80 flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-zinc-500">Shortcuts:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-indigo-600/40 hover:text-indigo-200 text-zinc-400 border border-zinc-700/60 transition-colors cursor-pointer whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-3 flex-1 min-h-[250px]">
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'system' && (
                <div className="text-zinc-400 whitespace-pre-wrap">{item.text}</div>
              )}
              {item.type === 'user' && (
                <div className="text-emerald-400 font-semibold">{item.text}</div>
              )}
              {item.type === 'response' && (
                <div className="text-zinc-200 whitespace-pre-wrap pl-2 border-l-2 border-indigo-500/40 bg-indigo-500/5 py-1 rounded">
                  {item.text}
                </div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 whitespace-pre-wrap">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Field */}
        <div className="p-3 bg-zinc-900/90 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-sm font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (try 'skills' or 'sudo hire')..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-white placeholder-zinc-500"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-indigo-600 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            <CornerDownLeft size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
