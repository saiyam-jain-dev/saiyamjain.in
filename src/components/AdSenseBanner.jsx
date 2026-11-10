import React, { useEffect, useRef } from 'react';

/**
 * AdSenseBanner component for Google AdSense ad units.
 * Account: ca-pub-8256174987926393
 */
export default function AdSenseBanner({
  slot,
  format = 'auto',
  responsive = 'true',
  layoutKey,
  style = { display: 'block' },
  className = '',
  label = 'ADVERTISEMENT'
}) {
  const adRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    // Only attempt to push once per mount and if the ins tag has no children
    if (!pushedRef.current && adRef.current) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch (err) {
        console.debug('AdSense request queued/handled:', err?.message || err);
      }
    }
  }, []);

  return (
    <div className={`my-4 flex flex-col items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-zinc-950/60 p-2 backdrop-blur-md transition-all ${className}`}>
      {label && (
        <span className="mb-1.5 text-[9px] font-mono tracking-widest text-zinc-500 uppercase select-none">
          - {label} -
        </span>
      )}
      <div className="w-full flex justify-center min-h-[90px] relative">
        <ins
          ref={adRef}
          className="adsbygoogle w-full"
          style={style}
          data-ad-client="ca-pub-8256174987926393"
          data-ad-slot={slot || '1234567890'}
          data-ad-format={format}
          data-full-width-responsive={responsive}
          {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
        />
        {/* Sleek dev fallback badge if ad hasn't loaded yet */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-40">
          <span className="text-[11px] font-mono text-cyan-400/60 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Google AdSense Zone &bull; ca-pub-8256174987926393
          </span>
        </div>
      </div>
    </div>
  );
}
