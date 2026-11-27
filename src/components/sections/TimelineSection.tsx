'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Flag,
} from 'lucide-react';

interface PhaseItem {
  id: string;
  roman: string;
  title: string;
  datetime: string;
  tagline: string;
  brief: string;
  objectives: string[];
  status: 'active' | 'upcoming' | 'grand';
  x: number; // SVG coordinate
  y: number; // SVG coordinate
  image: string;
  alt: string;
}

export const TimelineSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const phases: PhaseItem[] = [
    {
      id: 'phase-1',
      roman: 'I',
      title: 'Registration Open',
      datetime: '1st Dec 2026 · 7:00 PM',
      tagline: 'Conch Blow of Warfare',
      brief:
        'The conch sounds across Bharat! Registrations officially open on Devfolio. Form your squad of 3 to 5 warriors, register your credentials, and prepare your initial strategy for the 5 Astra problem statements.',
      objectives: [
        'Squad formation: 3 to 5 members per team',
        'Cross-department & inter-college squads welcome',
        'Free entry — 100% sponsored registration',
      ],
      status: 'active',
      x: 200,
      y: 28,
      image: '/assets/phase_01_conch.jpg',
      alt: 'Ancient warrior blowing a golden Shankha conch',
    },
    {
      id: 'phase-2',
      roman: 'II',
      title: 'Registration Closes',
      datetime: '5th Jan 2026 · 11:59 PM',
      tagline: 'Sealing the Gates',
      brief:
        'The royal Bhojpatra battle scroll is sealed! Final deadline to submit your complete squad roster, mentor references, and problem statement domain preference. Late entries will not breach the gates of Chakravyuh.',
      objectives: [
        'Final squad roster lock on portal',
        'Initial approach synopsis & domain lock',
        'Verification of student IDs and GitHub handles',
      ],
      status: 'upcoming',
      x: 400,
      y: 102,
      image: '/assets/phase_02_scroll.jpg',
      alt: 'Royal Bhojpatra war scroll sealed with wax',
    },
    {
      id: 'phase-3',
      roman: 'III',
      title: 'Shortlisting Team Announcement',
      datetime: '16th Jan 2026',
      tagline: 'Chosen Warriors of the Arena',
      brief:
        'The Grand Jury of industry veterans and academic conveners publishes the elite shortlisted squads. Finalists receive official travel advisories, campus briefing documents, and direct access to mentorship channels.',
      objectives: [
        'Top 100+ nationwide squads shortlisted',
        'Physical attendance confirmation at GITA Autonomous College',
        'Access to problem statement mentors & Discord war room',
      ],
      status: 'upcoming',
      x: 600,
      y: 28,
      image: '/assets/phase_03_archers.jpg',
      alt: 'Golden Gandiva bow and arrows',
    },
    {
      id: 'phase-4',
      roman: 'IV',
      title: 'Final Hackathon',
      datetime: 'Feb 2nd – 3rd 2026',
      tagline: 'The 24-Hour Kurukshetra Siege',
      brief:
        'The ultimate physical showdown at GITA Autonomous College, Bhubaneswar! 24 hours of non-stop coding, hardware prototyping, mid-siege jury checkpoints, and final live stage pitches before the grand panel.',
      objectives: [
        '24-Hour continuous offline hackathon sprint',
        'Complimentary meals, refreshments, and rest zones',
        'Multi-stage jury evaluations & architecture audits',
      ],
      status: 'grand',
      x: 800,
      y: 102,
      image: '/assets/phase_04_battle.jpg',
      alt: 'Ancient Indian sandstone war pavilion',
    },
    {
      id: 'phase-5',
      roman: 'V',
      title: 'Result Announcement',
      datetime: 'Feb 3rd 2026 · Evening',
      tagline: 'Victory & Grand Consecration',
      brief:
        'The Sudarshana Chakra of judgment descends! Champions are crowned on the grand dais, hoisting the iconic Chakravyuh veena trophy alongside the ₹1,00,000 cash prize pool, sponsor bounties, and incubation grants.',
      objectives: [
        '₹1,00,000 Cash Prize pool distributed live',
        'Prestigious Chakravyuh 2.0 trophies & medallions',
        'Incubation pathways & interview opportunities',
      ],
      status: 'grand',
      x: 1000,
      y: 28,
      image: '/assets/phase_05_victory.jpg',
      alt: 'Radiant golden victory crown and Sudarshana Chakra',
    },
  ];

  const currentPhase = phases[activePhaseIndex];

  return (
    <section
      id="timeline"
      className="relative py-18 md:py-26 bg-light-surface-container-low text-navy-ink border-t-4 border-gold-rich overflow-hidden"
    >
      {/* Ancient Kurukshetra Battlefield Panoramic Map */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <Image
          src="/assets/battlefield_warpath_bg.jpg"
          alt="Ancient Indian Kurukshetra battlefield map with war chariots and royal banners"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Atmospheric Kurukshetra Golden Dust Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-parchment/40 via-cream-parchment/70 to-cream-parchment/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-8 md:gap-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-dark-chocolate border border-gold-rich ribbon-pill font-label text-label-xs uppercase text-gold-highlight tracking-widest font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-highlight animate-pulse" />
            <span>Kurukshetra Battle Progression</span>
          </div>

          <h2 className="font-display text-display-md-mobile md:text-display-md text-dark-chocolate uppercase tracking-tight font-bold">
            Roadmap Timeline
          </h2>

          <p className="font-body text-body-sm md:text-body-md text-navy-ink/80 max-w-xl text-pretty">
            Hover or tap any battle gate to command the celestial Rath along the sacred war trail.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP INTERACTIVE BATTLEFIELD WARPATH (md and up)           */}
        {/* ============================================================== */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto">
          {/* Top Row: Phase I (x=200), Phase III (x=600), Phase V (x=1000) */}
          <div className="grid grid-cols-12 gap-5 items-stretch relative z-20">
            {[0, 2, 4].map((idx) => {
              const p = phases[idx];
              const isSelected = activePhaseIndex === idx;

              return (
                <article
                  key={p.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  onMouseEnter={() => setActivePhaseIndex(idx)}
                  className={`col-span-4 rounded-xl p-3 flex items-center gap-3.5 shadow-xl cursor-pointer transition-all duration-300 select-none group relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-bronze-brown via-dark-chocolate to-bronze-brown border-2 border-gold-highlight scale-[1.03] shadow-[0_8px_30px_rgba(242,184,75,0.4)] z-30'
                      : 'bg-dark-chocolate/95 border-2 border-gold-rich/60 hover:border-gold-highlight/90 hover:scale-[1.01]'
                  }`}
                >
                  {/* Active Golden Glow Strip */}
                  {isSelected && (
                    <span className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-gold-highlight via-saffron to-gold-highlight" />
                  )}

                  {/* Thumbnail Image with Roman Badge */}
                  <div className="relative w-15 h-15 rounded-lg overflow-hidden border border-gold-highlight/80 shrink-0 bg-black/40">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="60px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                      <span className="font-display text-sm font-bold text-gold-highlight">
                        {p.roman}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex flex-col gap-0.5">
                    <span className="font-label text-[10px] uppercase tracking-wider text-gold-highlight font-bold">
                      Phase {p.roman} · {p.tagline}
                    </span>
                    <h3
                      className={`font-display text-base font-bold leading-snug truncate transition-colors ${
                        isSelected ? 'text-cream-parchment' : 'text-cream-parchment/90 group-hover:text-gold-highlight'
                      }`}
                    >
                      {p.title}
                    </h3>
                    <span className="font-label text-xs uppercase text-cream-parchment/75 tabular-nums font-semibold">
                      {p.datetime}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* SVG BATTLEFIELD WARPATH & MYTHOLOGICAL RATH ANIMATION */}
          <div className="relative w-full z-10 my-1">
            <svg
              className="w-full h-auto block overflow-visible"
              viewBox="0 0 1200 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* Golden Battlefield Sand Glow */}
                <filter id="warpath-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Chariot Rut Pattern */}
                <linearGradient id="chariot-track-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C69214" />
                  <stop offset="50%" stopColor="#F2B84B" />
                  <stop offset="100%" stopColor="#D87D24" />
                </linearGradient>
              </defs>

              {/* Vertical Connectors to Cards */}
              <line x1="200" y1="0" x2="200" y2="28" stroke="#F2B84B" strokeWidth="3" strokeDasharray="3 3" />
              <line x1="400" y1="102" x2="400" y2="130" stroke="#F2B84B" strokeWidth="3" strokeDasharray="3 3" />
              <line x1="600" y1="0" x2="600" y2="28" stroke="#F2B84B" strokeWidth="3" strokeDasharray="3 3" />
              <line x1="800" y1="102" x2="800" y2="130" stroke="#F2B84B" strokeWidth="3" strokeDasharray="3 3" />
              <line x1="1000" y1="0" x2="1000" y2="28" stroke="#F2B84B" strokeWidth="3" strokeDasharray="3 3" />

              {/* 1. Deep Carved Stone War Trail in Sand */}
              <path
                d="M 200 28 C 290 28, 310 102, 400 102 C 490 102, 510 28, 600 28 C 690 28, 710 102, 800 102 C 890 102, 910 28, 1000 28"
                stroke="#1B0C04"
                strokeWidth="28"
                strokeLinecap="round"
              />

              {/* 2. Outer Ornate Golden Sandstone Embankment */}
              <path
                d="M 200 28 C 290 28, 310 102, 400 102 C 490 102, 510 28, 600 28 C 690 28, 710 102, 800 102 C 890 102, 910 28, 1000 28"
                stroke="url(#chariot-track-gold)"
                strokeWidth="18"
                strokeLinecap="round"
              />

              {/* 3. Battlefield Chariot Wheel Ruts (Dual Track Grooves left by the Rath) */}
              <path
                d="M 200 28 C 290 28, 310 102, 400 102 C 490 102, 510 28, 600 28 C 690 28, 710 102, 800 102 C 890 102, 910 28, 1000 28"
                stroke="#3D1C06"
                strokeWidth="10"
                strokeLinecap="round"
              />

              {/* 4. Glowing Radiant Saffron Energy Runepath */}
              <path
                d="M 200 28 C 290 28, 310 102, 400 102 C 490 102, 510 28, 600 28 C 690 28, 710 102, 800 102 C 890 102, 910 28, 1000 28"
                stroke="#F2B84B"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                strokeLinecap="round"
              />

              {/* 5 Milestone Sudarshana Chakra Checkpoints */}
              {phases.map((p, idx) => {
                const isSelected = activePhaseIndex === idx;

                return (
                  <g
                    key={p.id}
                    transform={`translate(${p.x}, ${p.y})`}
                    onClick={() => setActivePhaseIndex(idx)}
                    className="cursor-pointer group/node"
                  >
                    {/* Animated Pulsing Ring on Active Milestone */}
                    {isSelected && (
                      <circle
                        cx="0"
                        cy="0"
                        r="26"
                        fill="none"
                        stroke="#F2B84B"
                        strokeWidth="2"
                        className="animate-ping opacity-60"
                      />
                    )}

                    {/* Ornate Chakra Rim */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 22 : 19}
                      fill={isSelected ? '#F2B84B' : '#200E06'}
                      stroke={isSelected ? '#200E06' : '#C69214'}
                      strokeWidth="3.5"
                      className="transition-all duration-300 shadow-md"
                    />

                    {/* 8-Spoke Chakra Hub */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 16 : 14}
                      fill={isSelected ? '#200E06' : '#3E1C0A'}
                      stroke="#F2B84B"
                      strokeWidth="1.5"
                    />

                    {/* Roman Numeral */}
                    <text
                      x="0"
                      y="5"
                      textAnchor="middle"
                      fill="#F2B84B"
                      fontFamily="Cinzel, serif"
                      fontWeight="800"
                      fontSize={isSelected ? '14' : '12'}
                    >
                      {p.roman}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* MYTHOLOGICAL "RATH" (CHARIOT) - Smoothly Rides to the Active Phase */}
            <div
              className="absolute pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.3,0.64,1)] z-40"
              style={{
                left: `${(currentPhase.x / 1200) * 100}%`,
                top: `${(currentPhase.y / 130) * 100}%`,
                transform: 'translate(-50%, -75%)',
              }}
            >
              {/* Divine Celestial Chariot Token with 3D Depth & Glowing Aura */}
              <div className="relative flex flex-col items-center">
                {/* Floating Celestial Name Banner */}
                <div className="mb-1 px-2.5 py-0.5 rounded-full bg-dark-chocolate/90 border border-gold-highlight text-gold-highlight font-label text-[10px] uppercase font-bold tracking-wider shadow-lg whitespace-nowrap animate-bounce">
                  ⚡ Kapidhwaja Rath · Phase {currentPhase.roman}
                </div>

                {/* Chariot Artwork & Radiant Sun Aura */}
                <div className="relative w-28 h-22 sm:w-32 sm:h-24 filter drop-shadow-[0_8px_16px_rgba(242,184,75,0.7)] group hover:scale-105 transition-transform">
                  <Image
                    src="/assets/mythological_rath.png"
                    alt="Mythological Kurukshetra Chariot (Rath)"
                    fill
                    sizes="128px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Golden Sand Dust & Energy Wake beneath the Rath */}
                <div className="w-24 h-3 bg-gradient-to-r from-transparent via-gold-highlight/80 to-transparent blur-[3px] rounded-full mt-[-6px]" />
              </div>
            </div>
          </div>

          {/* Bottom Row: Phase II (x=400), Phase IV (x=800) */}
          <div className="grid grid-cols-12 gap-5 items-stretch relative z-20">
            <div className="col-span-2" />

            {[1, 3].map((idx) => {
              const p = phases[idx];
              const isSelected = activePhaseIndex === idx;

              return (
                <article
                  key={p.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  onMouseEnter={() => setActivePhaseIndex(idx)}
                  className={`col-span-4 rounded-xl p-3 flex items-center gap-3.5 shadow-xl cursor-pointer transition-all duration-300 select-none group relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-bronze-brown via-dark-chocolate to-bronze-brown border-2 border-gold-highlight scale-[1.03] shadow-[0_8px_30px_rgba(242,184,75,0.4)] z-30'
                      : 'bg-dark-chocolate/95 border-2 border-gold-rich/60 hover:border-gold-highlight/90 hover:scale-[1.01]'
                  }`}
                >
                  {/* Active Golden Glow Strip */}
                  {isSelected && (
                    <span className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-gold-highlight via-saffron to-gold-highlight" />
                  )}

                  {/* Thumbnail Image with Roman Badge */}
                  <div className="relative w-15 h-15 rounded-lg overflow-hidden border border-gold-highlight/80 shrink-0 bg-black/40">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="60px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                      <span className="font-display text-sm font-bold text-gold-highlight">
                        {p.roman}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex flex-col gap-0.5">
                    <span className="font-label text-[10px] uppercase tracking-wider text-gold-highlight font-bold">
                      Phase {p.roman} · {p.tagline}
                    </span>
                    <h3
                      className={`font-display text-base font-bold leading-snug truncate transition-colors ${
                        isSelected ? 'text-cream-parchment' : 'text-cream-parchment/90 group-hover:text-gold-highlight'
                      }`}
                    >
                      {p.title}
                    </h3>
                    <span className="font-label text-xs uppercase text-cream-parchment/75 tabular-nums font-semibold">
                      {p.datetime}
                    </span>
                  </div>
                </article>
              );
            })}

            <div className="col-span-2" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* DYNAMIC BATTLEFIELD STAGE BRIEFING SPOTLIGHT (Desktop & Mobile) */}
        {/* Appears smoothly on hover or click of any roadmap stage        */}
        {/* ============================================================== */}
        <div className="relative max-w-4xl mx-auto w-full z-20">
          <div className="bg-gradient-to-r from-dark-chocolate via-[#261208] to-dark-chocolate text-cream-parchment border-2 border-gold-highlight rounded-2xl p-5 md:p-6 shadow-2xl relative overflow-hidden transition-all duration-300">
            {/* Corner Vedic Brackets */}
            <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-gold-highlight/70 pointer-events-none" />
            <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-gold-highlight/70 pointer-events-none" />
            <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-gold-highlight/70 pointer-events-none" />
            <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-gold-highlight/70 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gold-rich/40 pb-4 mb-4">
              {/* Left Stage Identity */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gold-highlight/15 border border-gold-highlight flex items-center justify-center text-gold-highlight font-display text-xl font-bold shrink-0">
                  {currentPhase.roman}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-gold-highlight/20 border border-gold-highlight/60 rounded text-[11px] font-label font-bold text-gold-highlight uppercase tracking-wider">
                      Phase {currentPhase.roman} · {currentPhase.tagline}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-cream-parchment font-bold mt-1">
                    {currentPhase.title}
                  </h3>
                </div>
              </div>

              {/* Right Date & Navigation */}
              <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 border border-gold-rich/40 font-mono text-xs md:text-sm text-gold-highlight font-bold">
                  <Clock className="w-4 h-4 text-gold-highlight" />
                  <span>{currentPhase.datetime}</span>
                </div>

                {/* Stepper Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setActivePhaseIndex((prev) => (prev > 0 ? prev - 1 : phases.length - 1))
                    }
                    className="p-1.5 rounded-lg bg-dark-chocolate border border-gold-rich/50 text-gold-highlight hover:bg-bronze-brown transition-colors"
                    aria-label="Previous Phase"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActivePhaseIndex((prev) => (prev < phases.length - 1 ? prev + 1 : 0))
                    }
                    className="p-1.5 rounded-lg bg-dark-chocolate border border-gold-rich/50 text-gold-highlight hover:bg-bronze-brown transition-colors"
                    aria-label="Next Phase"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Description Briefing */}
            <p className="font-body text-sm md:text-base text-cream-parchment/90 leading-relaxed mb-4">
              {currentPhase.brief}
            </p>

            {/* Key Objectives Checklist */}
            <div className="bg-black/35 rounded-xl p-3.5 border border-gold-rich/30">
              <span className="font-label text-xs uppercase tracking-wider text-gold-highlight font-bold block mb-2">
                Gate Directives &amp; Action Protocol:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {currentPhase.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-[13px] text-cream-parchment/85">
                    <CheckCircle2 className="w-4 h-4 text-gold-highlight shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VERTICAL INTERACTIVE PROGRESSION (below md)            */}
        {/* ============================================================== */}
        <div className="md:hidden relative flex flex-col gap-4 pl-6 border-l-4 border-gold-rich">
          {phases.map((phase, idx) => {
            const isSelected = activePhaseIndex === idx;

            return (
              <article
                key={phase.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={`relative rounded-xl p-3 flex flex-col gap-2 shadow-lg cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-dark-chocolate border-2 border-gold-highlight shadow-[0_4px_20px_rgba(242,184,75,0.35)]'
                    : 'bg-dark-chocolate/90 border border-gold-rich/50'
                }`}
              >
                {/* Connector Node */}
                <span
                  className={`absolute -left-[33px] top-4 w-4 h-4 rounded-full border-2 border-dark-chocolate ${
                    isSelected ? 'bg-gold-highlight animate-pulse' : 'bg-gold-rich'
                  }`}
                />

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gold-highlight/80 shrink-0">
                    <Image
                      src={phase.image}
                      alt={phase.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="font-label text-[10px] uppercase text-gold-highlight font-bold">
                      Phase {phase.roman}
                    </span>
                    <h3 className="font-display text-sm font-bold text-cream-parchment leading-tight">
                      {phase.title}
                    </h3>
                    <span className="font-label text-xs uppercase text-cream-parchment/75 tabular-nums">
                      {phase.datetime}
                    </span>
                  </div>
                </div>

                {/* Expanded description on Mobile selection */}
                {isSelected && (
                  <div className="pt-2 border-t border-gold-rich/30 text-xs text-cream-parchment/85 leading-relaxed">
                    <p>{phase.brief}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
