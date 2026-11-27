'use client';

import React from 'react';
import { InfiniteRibbon } from '@/components/ui/infinite-ribbon';
import { Sparkles, Flame, Shield, Swords, Zap, Star } from 'lucide-react';

export const RibbonBannerSection: React.FC = () => {
  return (
    <section
      aria-label="Chakravyuh 2.0 announcement ribbons"
      className="relative w-full overflow-hidden py-10 sm:py-14 md:py-16 select-none bg-cream-parchment border-y border-gold-rich/30"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-gold-highlight/20 via-transparent to-transparent opacity-80"
      />

      {/* Overlapping crossed ribbons centered right in the middle */}
      <div className="relative w-full h-36 sm:h-44 md:h-52 flex items-center justify-center overflow-hidden">
        {/* Ribbon 1: Saffron-Amber forward scroll, tilted -2.4deg */}
        <div className="absolute inset-x-[-15%] sm:inset-x-[-25%] top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <InfiniteRibbon
            duration={28}
            repeat={6}
            rotation={-2.4}
            className="bg-gradient-to-r from-[#8C350A] via-[#C95C17] via-[#E8761E] via-[#C95C17] to-[#8C350A] py-3.5 sm:py-4.5 md:py-5 text-white shadow-2xl border-y-2 border-gold-highlight/70"
          >
            <span className="inline-flex items-center gap-4 sm:gap-6 font-headline uppercase text-white">
              <span className="text-base sm:text-xl md:text-2xl tracking-[0.16em] font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-white">
                CHAKRAVYUH 2.0
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight fill-gold-highlight/40 drop-shadow" />
              <span className="font-headline font-extrabold tracking-widest text-xs sm:text-sm md:text-base bg-dark-chocolate/90 text-white border border-gold-highlight/60 px-3.5 py-1 rounded-full shadow-inner">
                REGISTRATIONS OPENING SOON
              </span>
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight drop-shadow" />
              <span className="tracking-wider text-sm sm:text-lg md:text-xl font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                24-HOUR NATIONAL ARENA
              </span>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight fill-gold-highlight drop-shadow" />
              <span className="tracking-wider text-sm sm:text-lg md:text-xl font-black text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                ₹1,50,000+ PRIZE POOL
              </span>
              <span className="text-gold-highlight font-black text-lg mx-2">✦</span>
            </span>
          </InfiniteRibbon>
        </div>

        {/* Ribbon 2: Imperial Dark Chocolate reverse scroll, tilted +2.4deg (crossing right in the center) */}
        <div className="absolute inset-x-[-15%] sm:inset-x-[-25%] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <InfiniteRibbon
            duration={32}
            repeat={6}
            reverse={true}
            rotation={2.4}
            className="bg-gradient-to-r from-[#1A0A03] via-[#2E1408] via-[#4A220E] via-[#2E1408] to-[#1A0A03] py-3.5 sm:py-4.5 md:py-5 text-white shadow-[0_20px_50px_rgba(26,10,3,0.6)] border-y-2 border-gold-rich/80"
          >
            <span className="inline-flex items-center gap-4 sm:gap-6 font-headline uppercase text-white">
              <span className="font-headline font-black tracking-widest text-xs sm:text-sm md:text-base bg-gold-rich text-dark-chocolate px-3.5 py-1 rounded-full shadow-md">
                BREAK THE ARENA
              </span>
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-saffron fill-saffron/30 drop-shadow" />
              <span className="text-base sm:text-xl md:text-2xl tracking-[0.16em] font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                BREAK THE CHAKRAVYUH
              </span>
              <Swords className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight drop-shadow" />
              <span className="tracking-wider text-sm sm:text-lg md:text-xl font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                GITA AUTONOMOUS COLLEGE · BBSR
              </span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight fill-gold-highlight/40 drop-shadow" />
              <span className="tracking-wider text-sm sm:text-lg md:text-xl font-extrabold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                7 GATES OF INNOVATION
              </span>
              <span className="text-gold-highlight font-black text-lg mx-2">✦</span>
            </span>
          </InfiniteRibbon>
        </div>
      </div>
    </section>
  );
};
