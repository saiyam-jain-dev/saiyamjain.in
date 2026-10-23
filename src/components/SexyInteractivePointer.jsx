import React, { useEffect, useRef, useState } from 'react';

export default function SexyInteractivePointer() {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Only enable on desktop / fine pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setIsVisible(true);

      // Instant 0ms latency hardware-accelerated positioning
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering over interactive elements
      const target = e.target;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, [onClick]');
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => {
      setIsClicked(true);
    };

    const onMouseUp = () => {
      setIsClicked(false);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-150 select-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'transform' }}
    >
      <div
        className={`relative transition-transform duration-150 ease-out ${
          isClicked 
            ? 'scale-85' 
            : isHovered 
            ? 'scale-110 -rotate-6' 
            : 'scale-100'
        }`}
        style={{ transformOrigin: '3px 3px' }}
      >
        {/* Stylized Crisp White Cursor with Boundaries */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] -ml-1 -mt-1"
        >
          {/* Subtle Outer Glow */}
          <path
            d="M4.5 3L11.8 21.2L14.8 13.8L22.2 10.8L4.5 3Z"
            fill="none"
            stroke={isHovered ? '#10b981' : '#06b6d4'}
            strokeWidth="3.2"
            strokeOpacity="0.4"
            strokeLinejoin="round"
          />

          {/* Crisp Black Boundary Outline */}
          <path
            d="M4.5 3L11.8 21.2L14.8 13.8L22.2 10.8L4.5 3Z"
            fill="#FFFFFF"
            stroke="#09090b"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Precision Neon Accent Pip in the Inner Notch */}
          <circle
            cx="14.2"
            cy="13.2"
            r="1.5"
            fill={isHovered ? '#10b981' : '#06b6d4'}
          />
        </svg>
      </div>
    </div>
  );
}
