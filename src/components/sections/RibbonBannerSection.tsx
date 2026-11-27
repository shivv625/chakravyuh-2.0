'use client';

import React from 'react';
import { InfiniteRibbon } from '@/components/ui/infinite-ribbon';
import { Sparkles, Flame, Shield, Swords, Zap, Star } from 'lucide-react';

export const RibbonBannerSection: React.FC = () => {
  return (
    <section
      aria-label="Chakravyuh 2.0 announcement ribbons"
      className="relative w-full overflow-hidden py-6 sm:py-10 select-none bg-cream-parchment border-y border-gold-rich/20"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-gold-highlight/15 via-transparent to-transparent opacity-70"
      />

      <div className="relative flex flex-col items-center justify-center space-y-3 sm:space-y-4">
        {/* Ribbon 1: Golden Saffron forward scroll */}
        <div className="-mx-12 w-[calc(100%+6rem)] sm:-mx-24 sm:w-[calc(100%+12rem)] relative z-10">
          <InfiniteRibbon
            duration={50}
            repeat={6}
            rotation={-1.8}
            className="bg-gradient-to-r from-gold-rich via-gold-highlight to-gold-rich py-2 sm:py-2.5 text-dark-chocolate shadow-md border-y border-dark-chocolate/15"
          >
            <span className="inline-flex items-center gap-3 sm:gap-4 font-headline uppercase font-black text-xs sm:text-sm tracking-wider">
              <span className="text-sm sm:text-base tracking-widest font-black drop-shadow-sm">
                CHAKRAVYUH 2.0
              </span>
              <Sparkles className="w-3.5 h-3.5 text-saffron fill-saffron/40" />
              <span className="font-label font-extrabold tracking-widest text-xs sm:text-xs bg-dark-chocolate text-gold-highlight px-2.5 py-0.5 rounded-full shadow-inner">
                REGISTRATIONS OPENING SOON
              </span>
              <Shield className="w-3.5 h-3.5 text-dark-chocolate/80" />
              <span className="tracking-wider text-xs sm:text-xs font-bold text-dark-chocolate/90">
                24-HOUR NATIONAL ARENA
              </span>
              <Star className="w-3 h-3 text-saffron fill-saffron" />
              <span className="tracking-wider text-xs sm:text-xs font-semibold text-dark-chocolate/80">
                ₹1,00,000+ PRIZE POOL
              </span>
              <span className="text-saffron font-bold mx-1">✦</span>
            </span>
          </InfiniteRibbon>
        </div>

        {/* Ribbon 2: Dark Chocolate reverse scroll with gold accents */}
        <div className="-mx-12 w-[calc(100%+6rem)] sm:-mx-24 sm:w-[calc(100%+12rem)] relative z-20">
          <InfiniteRibbon
            duration={58}
            repeat={6}
            reverse={true}
            rotation={1.5}
            className="bg-gradient-to-r from-dark-chocolate via-bronze-brown to-dark-chocolate py-2 sm:py-2.5 text-cream-parchment shadow-xl border-y border-gold-rich/50"
          >
            <span className="inline-flex items-center gap-3 sm:gap-4 font-headline uppercase font-bold text-xs sm:text-sm tracking-wider">
              <span className="font-label font-extrabold tracking-widest text-xs sm:text-xs bg-gold-rich text-dark-chocolate px-2.5 py-0.5 rounded-full shadow">
                REGISTRATIONS OPENING SOON
              </span>
              <Flame className="w-3.5 h-3.5 text-gold-highlight" />
              <span className="text-sm sm:text-base tracking-widest font-black text-gold-highlight drop-shadow">
                CHAKRAVYUH 2.0
              </span>
              <Swords className="w-3.5 h-3.5 text-gold-rich" />
              <span className="tracking-wider text-xs sm:text-xs font-semibold text-cream-parchment/90">
                GITA AUTONOMOUS COLLEGE · BPUT
              </span>
              <Zap className="w-3.5 h-3.5 text-gold-highlight" />
              <span className="tracking-wider text-xs sm:text-xs font-semibold text-gold-highlight">
                7 GATES OF INNOVATION
              </span>
              <span className="text-gold-highlight font-bold mx-1">✦</span>
            </span>
          </InfiniteRibbon>
        </div>
      </div>
    </section>
  );
};
