import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-20 right-4 sm:bottom-20 sm:right-6 z-30 p-2.5 rounded-full bg-zinc-950/90 hover:bg-zinc-900 text-zinc-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 shadow-xl backdrop-blur-xl transition-all duration-300 cursor-pointer ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      title="Back to Top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
