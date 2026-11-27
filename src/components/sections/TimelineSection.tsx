'use client';

import React from 'react';
import Image from 'next/image';

interface PhaseItem {
  id: string;
  roman: string;
  title: string;
  datetime: string;
  image: string;
  alt: string;
  borderClass: string;
}

export const TimelineSection: React.FC = () => {
  const phases: PhaseItem[] = [
    {
      id: 'phase-1',
      roman: 'I',
      title: 'Registration Open',
      datetime: '1st Dec 2026 · 7 PM',
      image: '/assets/phase_01_conch.jpg',
      alt: 'Ancient warrior blowing a golden Shankha conch',
      borderClass: 'border-gold-highlight',
    },
    {
      id: 'phase-2',
      roman: 'II',
      title: 'Registration Closes',
      datetime: '5th Jan 2026 · 11:59 PM',
      image: '/assets/phase_02_scroll.jpg',
      alt: 'Royal Bhojpatra war scroll sealed with wax',
      borderClass: 'border-gold-rich',
    },
    {
      id: 'phase-3',
      roman: 'III',
      title: 'Shortlisting Team Announcement',
      datetime: '16th Jan 2026',
      image: '/assets/phase_03_archers.jpg',
      alt: 'Golden Gandiva bow and arrows',
      borderClass: 'border-gold-rich',
    },
    {
      id: 'phase-4',
      roman: 'IV',
      title: 'Final Hackathon',
      datetime: 'Feb 2nd – 3rd 2026',
      image: '/assets/phase_04_battle.jpg',
      alt: 'Ancient Indian sandstone war pavilion',
      borderClass: 'border-gold-rich',
    },
    {
      id: 'phase-5',
      roman: 'V',
      title: 'Result Announcement',
      datetime: 'Feb 3rd 2026 · Evening',
      image: '/assets/phase_05_victory.jpg',
      alt: 'Radiant golden victory crown and Sudarshana Chakra',
      borderClass: 'border-saffron',
    },
  ];

  return (
    <section
      id="timeline"
      className="relative py-20 md:py-28 bg-light-surface-container-low text-navy-ink border-t-4 border-saffron overflow-hidden"
    >
      {/* Ancient Kurukshetra Battlefield Panoramic Parchment Map from Stitch */}
      <div className="absolute inset-0 pointer-events-none opacity-85">
        <Image
          src="/assets/battlefield_warpath_bg.jpg"
          alt="Ancient Indian Kurukshetra battlefield map with war chariots, elephants, and royal banners"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Soft Central Parchment Glow Scrim for High-Contrast Typography */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-parchment/30 via-cream-parchment/65 to-cream-parchment/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-5 py-1 bg-dark-chocolate border border-gold-rich ribbon-pill font-label text-label-sm uppercase text-gold-highlight tracking-widest font-bold shadow">
            Kurukshetra Battle Progression
          </span>
          <div className="relative inline-block px-10 py-3.5 bg-cream-parchment/90 border-y-2 border-gold-rich rounded-sm shadow-sm">
            <h2 className="font-display text-display-md-mobile md:text-display-md text-dark-chocolate uppercase tracking-wide font-bold">
              Roadmap Timeline
            </h2>
          </div>
        </div>

        {/* DESKTOP 5-PHASE COMPACT WARPATH (md and up) */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto">
          {/* Top Row: Phase I (x=200), Phase III (x=600), Phase V (x=1000) */}
          <div className="grid grid-cols-12 gap-5 items-stretch relative z-20">
            {/* Phase 01: Registration Open */}
            <article className="col-span-4 bg-dark-chocolate/95 text-cream-parchment border-2 border-gold-highlight rounded-xl p-2.5 flex items-center gap-3.5 shadow-xl hover:-translate-y-0.5 transition-transform duration-card-lift select-none">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gold-highlight/80 shrink-0">
                <Image
                  src={phases[0].image}
                  alt={phases[0].alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-0.5">
                <h3 className="font-display text-body-lg font-bold text-gold-highlight leading-snug">
                  {phases[0].title}
                </h3>
                <span className="font-label text-label-sm uppercase text-cream-parchment tabular-nums font-semibold">
                  {phases[0].datetime}
                </span>
              </div>
            </article>

            {/* Phase 03: Shortlist Announcement */}
            <article className="col-span-4 bg-dark-chocolate/95 text-cream-parchment border-2 border-gold-rich rounded-xl p-2.5 flex items-center gap-3.5 shadow-xl hover:-translate-y-0.5 transition-transform duration-card-lift select-none">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gold-rich/80 shrink-0">
                <Image
                  src={phases[2].image}
                  alt={phases[2].alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-0.5">
                <h3 className="font-display text-body-lg font-bold text-gold-highlight leading-snug">
                  {phases[2].title}
                </h3>
                <span className="font-label text-label-sm uppercase text-cream-parchment tabular-nums font-semibold">
                  {phases[2].datetime}
                </span>
              </div>
            </article>

            {/* Phase 05: Result Announcement */}
            <article className="col-span-4 bg-dark-chocolate/95 text-cream-parchment border-2 border-saffron rounded-xl p-2.5 flex items-center gap-3.5 shadow-xl hover:-translate-y-0.5 transition-transform duration-card-lift select-none">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-saffron/80 shrink-0">
                <Image
                  src={phases[4].image}
                  alt={phases[4].alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-0.5">
                <h3 className="font-display text-body-lg font-bold text-gold-highlight leading-snug">
                  {phases[4].title}
                </h3>
                <span className="font-label text-label-sm uppercase text-cream-parchment tabular-nums font-semibold">
                  {phases[4].datetime}
                </span>
              </div>
            </article>
          </div>

          {/* Ornate Kurukshetra Warpath Directly Connected to Card Edges */}
          <div className="relative w-full z-10">
            <svg
              className="w-full h-auto block overflow-visible"
              viewBox="0 0 1200 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Vertical Connectors Touching Card Edges (y=0 top, y=130 bottom) */}
              <line x1="200" y1="0" x2="200" y2="28" stroke="#E5A93C" strokeWidth="3.5" />
              <circle cx="200" cy="4" r="5" fill="#E5A93C" />

              <line x1="400" y1="102" x2="400" y2="130" stroke="#E5A93C" strokeWidth="3.5" />
              <circle cx="400" cy="126" r="5" fill="#E5A93C" />

              <line x1="600" y1="0" x2="600" y2="28" stroke="#E5A93C" strokeWidth="3.5" />
              <circle cx="600" cy="4" r="5" fill="#E5A93C" />

              <line x1="800" y1="102" x2="800" y2="130" stroke="#E5A93C" strokeWidth="3.5" />
              <circle cx="800" cy="126" r="5" fill="#E5A93C" />

              <line x1="1000" y1="0" x2="1000" y2="28" stroke="#DE6A1D" strokeWidth="3.5" />
              <circle cx="1000" cy="4" r="5" fill="#DE6A1D" />

              {/* Outer Gold Rim of the Royal Chariot Path */}
              <path
                d="M 200 28 C 290 28, 310 102, 400 102 C 490 102, 510 28, 600 28 C 690 28, 710 102, 800 102 C 890 102, 910 28, 1000 28"
                stroke="#E5A93C"
                strokeWidth="24"
                strokeLinecap="round"
              />
              {/* Carved Dark-Bronze Stone Path Core */}
              <path
                d="M 200 28 C 290 28, 310 102, 400 102 C 490 102, 510 28, 600 28 C 690 28, 710 102, 800 102 C 890 102, 910 28, 1000 28"
                stroke="#2C1A0B"
                strokeWidth="16"
                strokeLinecap="round"
              />
              {/* Glowing Saffron Arrow-Flight Centerline */}
              <path
                d="M 200 28 C 290 28, 310 102, 400 102 C 490 102, 510 28, 600 28 C 690 28, 710 102, 800 102 C 890 102, 910 28, 1000 28"
                stroke="#DE6A1D"
                strokeWidth="3"
                strokeDasharray="9 7"
                strokeLinecap="round"
              />

              {/* 5 Roman Numeral Sudarshana Chakra Junctions */}
              <g transform="translate(200, 28)">
                <circle cx="0" cy="0" r="20" fill="#DE6A1D" stroke="#FAF3E0" strokeWidth="3" />
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fill="#2C1A0B"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  fontSize="15"
                >
                  I
                </text>
              </g>
              <g transform="translate(400, 102)">
                <circle cx="0" cy="0" r="19" fill="#2C1A0B" stroke="#E5A93C" strokeWidth="3" />
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fill="#E5A93C"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  fontSize="14"
                >
                  II
                </text>
              </g>
              <g transform="translate(600, 28)">
                <circle cx="0" cy="0" r="19" fill="#2C1A0B" stroke="#E5A93C" strokeWidth="3" />
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fill="#E5A93C"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  fontSize="14"
                >
                  III
                </text>
              </g>
              <g transform="translate(800, 102)">
                <circle cx="0" cy="0" r="19" fill="#2C1A0B" stroke="#E5A93C" strokeWidth="3" />
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fill="#E5A93C"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  fontSize="14"
                >
                  IV
                </text>
              </g>
              <g transform="translate(1000, 28)">
                <circle cx="0" cy="0" r="21" fill="#E5A93C" stroke="#2C1A0B" strokeWidth="3" />
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fill="#2C1A0B"
                  fontFamily="Cinzel, serif"
                  fontWeight="700"
                  fontSize="15"
                >
                  V
                </text>
              </g>
            </svg>
          </div>

          {/* Bottom Row: Phase II (x=400), Phase IV (x=800) */}
          <div className="grid grid-cols-12 gap-5 items-stretch relative z-20">
            <div className="col-span-2" />

            {/* Phase 02: Registration Closes */}
            <article className="col-span-4 bg-dark-chocolate/95 text-cream-parchment border-2 border-gold-rich rounded-xl p-2.5 flex items-center gap-3.5 shadow-xl hover:-translate-y-0.5 transition-transform duration-card-lift select-none">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gold-rich/80 shrink-0">
                <Image
                  src={phases[1].image}
                  alt={phases[1].alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-0.5">
                <h3 className="font-display text-body-lg font-bold text-gold-highlight leading-snug">
                  {phases[1].title}
                </h3>
                <span className="font-label text-label-sm uppercase text-cream-parchment tabular-nums font-semibold">
                  {phases[1].datetime}
                </span>
              </div>
            </article>

            {/* Phase 04: Final Hackathon */}
            <article className="col-span-4 bg-dark-chocolate/95 text-cream-parchment border-2 border-gold-rich rounded-xl p-2.5 flex items-center gap-3.5 shadow-xl hover:-translate-y-0.5 transition-transform duration-card-lift select-none">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gold-rich/80 shrink-0">
                <Image
                  src={phases[3].image}
                  alt={phases[3].alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-0.5">
                <h3 className="font-display text-body-lg font-bold text-gold-highlight leading-snug">
                  {phases[3].title}
                </h3>
                <span className="font-label text-label-sm uppercase text-cream-parchment tabular-nums font-semibold">
                  {phases[3].datetime}
                </span>
              </div>
            </article>

            <div className="col-span-2" />
          </div>
        </div>

        {/* MOBILE VERTICAL COMPACT WARPATH (below md) */}
        <div className="md:hidden relative flex flex-col gap-4 pl-6 border-l-4 border-saffron">
          {phases.map((phase, idx) => (
            <article
              key={phase.id}
              className={`relative bg-dark-chocolate/95 text-cream-parchment border-2 ${phase.borderClass} rounded-xl p-2.5 flex items-center gap-3 shadow-lg select-none`}
            >
              <span
                className={`absolute -left-[34px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                  idx % 2 === 0 ? 'bg-saffron' : 'bg-gold-rich'
                } border-2 border-dark-chocolate`}
              />
              <span
                className={`absolute -left-[18px] top-1/2 -translate-y-1/2 w-4 h-0.5 ${
                  idx % 2 === 0 ? 'bg-gold-highlight' : 'bg-gold-rich'
                }`}
              />
              <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-gold-highlight/80 shrink-0">
                <Image
                  src={phase.image}
                  alt={phase.alt}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.2 bg-bronze-brown border border-gold-rich/70 rounded text-[10px] font-label font-bold text-gold-highlight uppercase">
                    Phase {phase.roman}
                  </span>
                  <h3 className="font-display text-body-md font-bold text-gold-highlight leading-snug truncate">
                    {phase.title}
                  </h3>
                </div>
                <span className="font-label text-label-sm uppercase text-cream-parchment/90 tabular-nums">
                  {phase.datetime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
