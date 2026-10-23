import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy } from 'lucide-react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export default function KonamiEasterEgg() {
  const [unlocked, setUnlocked] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = KONAMI_CODE[index].length === 1 ? KONAMI_CODE[index].toLowerCase() : KONAMI_CODE[index];

      if (key === expected) {
        const nextIndex = index + 1;
        if (nextIndex === KONAMI_CODE.length) {
          // Unlocked!
          setUnlocked(true);
          setIndex(0);
          try {
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.6 },
              colors: ['#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6']
            });
          } catch (err) {}
          setTimeout(() => setUnlocked(false), 5000);
        } else {
          setIndex(nextIndex);
        }
      } else {
        setIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index]);

  if (!unlocked) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-zinc-950/95 border border-cyan-400 text-white shadow-[0_0_50px_rgba(6,182,212,0.6)] backdrop-blur-2xl animate-in zoom-in-95 duration-200">
      <Trophy size={18} className="text-amber-400 animate-bounce" />
      <span className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-emerald-400">
        KONAMI CODE UNLOCKED: DEVELOPER GOD MODE ACTIVE!
      </span>
      <Sparkles size={16} className="text-cyan-400 animate-pulse" />
    </div>
  );
}
