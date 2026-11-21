'use client';

import React, { useEffect, useState } from 'react';

export const SunburstTransition: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if reduced motion is requested
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Run only once per session
    const hasSeenIntro = sessionStorage.getItem('chakravyuh_intro_shown');
    if (!hasSeenIntro) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('chakravyuh_intro_shown', 'true');
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => {
        setVisible(false);
        sessionStorage.setItem('chakravyuh_intro_shown', 'true');
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto bg-dark-chocolate transition-opacity duration-500 cursor-pointer animate-fade-out"
      role="status"
      aria-label="Welcome intro - click anywhere to skip"
    >
      <div className="relative flex flex-col items-center justify-center p-8 text-center">
        {/* Expanding Sunburst Rings */}
        <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full border-4 border-gold-highlight/60 animate-ping opacity-40 pointer-events-none" />
        <div className="absolute w-[180px] h-[180px] md:w-[320px] md:h-[320px] rounded-full border-2 border-saffron/70 animate-pulse pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full border-2 border-gold-rich bg-dark-chocolate flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-gold-highlight animate-spin"
              style={{ animationDuration: '6s' }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4" />
              <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
            </svg>
          </div>
          <span className="font-display text-headline-md md:text-headline-lg text-gold-highlight tracking-widest uppercase">
            CHAKRAVYUH 2.0
          </span>
          <span className="font-label text-label-sm uppercase tracking-widest text-cream-parchment">
            GITA Autonomous College · BPUT Odisha
          </span>
        </div>
      </div>
    </div>
  );
};
