'use client';

import React from 'react';
import { TiltedGridHero, TiltedGridImage } from '@/components/ui/tilted-grid-hero';
import { Sparkles, Trophy, Users, Clock, Award, History, ArrowRight } from 'lucide-react';

const CHAKRAVYUH_1_IMAGES: TiltedGridImage[] = [
  {
    src: '/assets/glimpse/glimpse_1.jpg',
    alt: 'Mentors, faculty evaluators, and engineering squads reviewing hardware prototype circuits at Chakravyuh 1.0',
  },
  {
    src: '/assets/glimpse/glimpse_2.jpg',
    alt: 'Packed hackathon hall with student squads coding overnight under Chakravyuh 1.0 organizing leadership',
  },
  {
    src: '/assets/glimpse/glimpse_3.jpg',
    alt: 'Grand organizing committee, conveners, student leads, and dignitaries outside GITA Autonomous College',
  },
  {
    src: '/assets/glimpse/glimpse_4.jpg',
    alt: 'Inspirational keynote address by patron and academic leaders at the Chakravyuh 1.0 inauguration podium',
  },
  {
    src: '/assets/glimpse/glimpse_5.jpg',
    alt: 'Champion participants posing with the iconic Chakravyuh 1.0 veena trophy and All India National Hackathon banner',
  },
  {
    src: '/assets/glimpse/glimpse_6.jpg',
    alt: 'High-intensity squad collaboration across laptops during the 24-hour sprint at Chakravyuh 1.0',
  },
  {
    src: '/assets/glimpse/glimpse_7.jpg',
    alt: 'Distinguished university guests and college leadership arriving for the Chakravyuh 1.0 opening ceremony',
  },
  {
    src: '/assets/glimpse/glimpse_8.jpg',
    alt: 'Dignitaries on dais during inaugural ceremonial lamp lighting for the national hackathon',
  },
];

export const GlimpseSection: React.FC = () => {
  return (
    <section
      id="glimpse"
      aria-label="Chakravyuh 1.0 Glimpse"
      className="relative py-16 md:py-24 bg-cream-parchment overflow-hidden border-t border-gold-rich/20"
    >
      {/* Subtle radial ambient background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-radial from-gold-highlight/10 via-transparent to-transparent opacity-80"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-chocolate/90 border border-gold-rich/70 text-gold-highlight mb-4 shadow-sm">
            <History className="w-4 h-4 text-gold-highlight" />
            <span className="font-label text-xs uppercase tracking-widest font-bold">
              Legacy of the Arena · 2024
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark-chocolate tracking-tight uppercase">
            Chakravyuh 1.0 Glimpse
          </h2>

          <p className="mt-3.5 font-body text-base sm:text-lg text-bronze-brown leading-relaxed max-w-2xl mx-auto font-normal">
            Where the legend was born. 24 hours of non-stop coding, hardware warfare, mentorship breakthroughs, and unforgettable brotherhood at GITA Autonomous College.
          </p>
        </div>

        {/* 3D Cylindrical Curved Stream (TiltedGridHero) */}
        <div className="relative rounded-2xl sm:rounded-3xl border-2 border-gold-rich/50 shadow-2xl overflow-hidden bg-gradient-to-b from-[#200e06] via-[#140803] to-[#0a0401]">
          {/* Top/Corner Decorative Kurukshetra Gold Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-gold-highlight/20 rounded-full blur-3xl z-0"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-saffron/20 rounded-full blur-3xl z-0"
          />

          <TiltedGridHero
            images={CHAKRAVYUH_1_IMAGES}
            speed={4.2}
            tileHeight={32}
            aspectRatio={16 / 9}
            gap={8}
            curve={75}
            fade={14}
            className="h-[540px] sm:h-[600px] md:h-[660px] w-full"
          >
            {/* Overlay Elements rendered above the cylinder */}
            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10 pointer-events-none text-center">
              {/* Top Banner Tag */}
              <div className="flex justify-center">
                <div className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-chocolate/85 border border-gold-rich/60 backdrop-blur-md shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-gold-highlight animate-pulse" />
                  <span className="font-label text-xs uppercase tracking-widest text-gold-highlight font-bold">
                    Curved Archival Reel · Chakravyuh 1.0
                  </span>
                </div>
              </div>

              {/* Bottom Quick Legacy Highlights */}
              <div className="pointer-events-auto max-w-4xl mx-auto w-full">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-dark-chocolate/90 border border-gold-rich/50 backdrop-blur-md shadow-xl">
                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight mb-1" />
                    <span className="font-headline text-lg sm:text-2xl font-black text-gold-highlight">
                      24 HRS
                    </span>
                    <span className="font-label text-[10px] sm:text-xs text-cream-parchment/80 uppercase tracking-wider font-semibold">
                      Non-Stop Sprint
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight mb-1" />
                    <span className="font-headline text-lg sm:text-2xl font-black text-gold-highlight">
                      500+
                    </span>
                    <span className="font-label text-[10px] sm:text-xs text-cream-parchment/80 uppercase tracking-wider font-semibold">
                      Warriors & Coders
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight mb-1" />
                    <span className="font-headline text-lg sm:text-2xl font-black text-gold-highlight">
                      100+
                    </span>
                    <span className="font-label text-[10px] sm:text-xs text-cream-parchment/80 uppercase tracking-wider font-semibold">
                      Squad Submissions
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-gold-highlight mb-1" />
                    <span className="font-headline text-lg sm:text-2xl font-black text-gold-highlight">
                      ₹1,00,000+
                    </span>
                    <span className="font-label text-[10px] sm:text-xs text-cream-parchment/80 uppercase tracking-wider font-semibold">
                      Prizes Distributed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TiltedGridHero>
        </div>
      </div>
    </section>
  );
};

export default GlimpseSection;
