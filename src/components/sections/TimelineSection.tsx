'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
  Compass,
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
  x: number; // Desktop SVG coordinate (0 - 1200)
  y: number; // Desktop SVG coordinate (0 - 240)
  image: string;
  alt: string;
  venue: string;
  squadRule: string;
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
      y: 70,
      image: '/assets/phase_01_conch.jpg',
      alt: 'Ancient warrior blowing a golden Shankha conch',
      venue: 'Devfolio War Portal (Online)',
      squadRule: '3–5 Members · Inter-College Allowed',
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
      y: 170,
      image: '/assets/phase_02_scroll.jpg',
      alt: 'Royal Bhojpatra war scroll sealed with wax',
      venue: 'Portal Closes at 11:59 PM IST',
      squadRule: 'Rosters Locked · No Subsequent Changes',
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
      y: 70,
      image: '/assets/phase_03_archers.jpg',
      alt: 'Golden Gandiva bow and arrows',
      venue: 'Online Discord War Room & Portal',
      squadRule: 'Top 100+ Finalist Squads Selected',
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
      y: 170,
      image: '/assets/phase_04_battle.jpg',
      alt: 'Ancient Indian sandstone war pavilion',
      venue: 'GITA Autonomous College, Bhubaneswar',
      squadRule: 'Physical Presence at Campus Mandatory',
    },
    {
      id: 'phase-5',
      roman: 'V',
      title: 'Result Announcement',
      datetime: 'Feb 3rd 2026 · Evening',
      tagline: 'Victory & Grand Consecration',
      brief:
        'The Sudarshana Chakra of judgment descends! Champions are crowned on the grand dais, hoisting the iconic Chakravyuh trophy alongside the ₹1,00,000 cash prize pool, sponsor bounties, and incubation grants.',
      objectives: [
        '₹1,00,000 Cash Prize pool distributed live',
        'Prestigious Chakravyuh 2.0 trophies & medallions',
        'Incubation pathways & interview opportunities',
      ],
      status: 'grand',
      x: 1000,
      y: 70,
      image: '/assets/phase_05_victory.jpg',
      alt: 'Radiant golden victory crown and Sudarshana Chakra',
      venue: 'Grand Central Dais, GITA Campus',
      squadRule: 'All Finalists & Champions Felicitated',
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
            Hover over any battlefield gate to guide the celestial Rath along the warpath and unlock strategic stage directives.
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
                      ? 'bg-gradient-to-r from-bronze-brown via-dark-chocolate to-bronze-brown border-2 border-gold-highlight scale-[1.03] shadow-[0_8px_30px_rgba(242,184,75,0.4)]'
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
          <div className="relative w-full z-30 my-3 md:my-5">
            <svg
              className="w-full h-auto block overflow-visible"
              viewBox="0 0 1200 240"
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

                {/* Chariot Track Gradient */}
                <linearGradient id="chariot-track-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C69214" />
                  <stop offset="50%" stopColor="#F2B84B" />
                  <stop offset="100%" stopColor="#D87D24" />
                </linearGradient>
              </defs>

              {/* Vertical Connectors from Top Cards to Wave Crests (y: 0 -> 70) */}
              <line x1="200" y1="0" x2="200" y2="70" stroke="#F2B84B" strokeWidth="2.5" strokeDasharray="4 4" />
              <line x1="600" y1="0" x2="600" y2="70" stroke="#F2B84B" strokeWidth="2.5" strokeDasharray="4 4" />
              <line x1="1000" y1="0" x2="1000" y2="70" stroke="#F2B84B" strokeWidth="2.5" strokeDasharray="4 4" />

              {/* Vertical Connectors from Wave Troughs to Bottom Cards (y: 170 -> 240) */}
              <line x1="400" y1="170" x2="400" y2="240" stroke="#F2B84B" strokeWidth="2.5" strokeDasharray="4 4" />
              <line x1="800" y1="170" x2="800" y2="240" stroke="#F2B84B" strokeWidth="2.5" strokeDasharray="4 4" />

              {/* 1. Deep Carved Stone War Trail in Kurukshetra Sand */}
              <path
                d="M 200 70 C 290 70, 310 170, 400 170 C 490 170, 510 70, 600 70 C 690 70, 710 170, 800 170 C 890 170, 910 70, 1000 70"
                stroke="#1B0C04"
                strokeWidth="32"
                strokeLinecap="round"
              />

              {/* 2. Outer Ornate Golden Sandstone Embankment */}
              <path
                d="M 200 70 C 290 70, 310 170, 400 170 C 490 170, 510 70, 600 70 C 690 70, 710 170, 800 170 C 890 170, 910 70, 1000 70"
                stroke="url(#chariot-track-gold)"
                strokeWidth="20"
                strokeLinecap="round"
              />

              {/* 3. Battlefield Chariot Wheel Ruts (Dual Track Grooves left by the Rath) */}
              <path
                d="M 200 70 C 290 70, 310 170, 400 170 C 490 170, 510 70, 600 70 C 690 70, 710 170, 800 170 C 890 170, 910 70, 1000 70"
                stroke="#3D1C06"
                strokeWidth="11"
                strokeLinecap="round"
              />

              {/* 4. Glowing Radiant Saffron Energy Runepath */}
              <path
                d="M 200 70 C 290 70, 310 170, 400 170 C 490 170, 510 70, 600 70 C 690 70, 710 170, 800 170 C 890 170, 910 70, 1000 70"
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
                    onMouseEnter={() => setActivePhaseIndex(idx)}
                    className="cursor-pointer group/node"
                  >
                    {/* Generous Invisible Hover Hitbox for Instant Response */}
                    <circle cx="0" cy="0" r="38" fill="transparent" />

                    {/* Animated Pulsing Ring on Active Milestone */}
                    {isSelected && (
                      <circle
                        cx="0"
                        cy="0"
                        r="28"
                        fill="none"
                        stroke="#F2B84B"
                        strokeWidth="2.5"
                        className="animate-ping opacity-60"
                      />
                    )}

                    {/* Ornate Chakra Outer Rim */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 24 : 20}
                      fill={isSelected ? '#F2B84B' : '#200E06'}
                      stroke={isSelected ? '#200E06' : '#C69214'}
                      strokeWidth="3.5"
                      className="transition-all duration-300 shadow-lg"
                    />

                    {/* 8-Spoke Chakra Inner Hub */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 17 : 14}
                      fill={isSelected ? '#200E06' : '#3E1C0A'}
                      stroke="#F2B84B"
                      strokeWidth="1.5"
                    />

                    {/* Roman Numeral Center Marker */}
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

            {/* MYTHOLOGICAL "RATH" (CHARIOT) - Smoothly Rides to the Active Phase on hover/click */}
            <div
              className="absolute pointer-events-none transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] z-50"
              style={{
                left: `${(currentPhase.x / 1200) * 100}%`,
                top: `${(currentPhase.y / 240) * 100}%`,
                transform: 'translate(-50%, -58%)',
              }}
            >
              {/* Divine Celestial Chariot Token with 3D Depth & Glowing Aura */}
              <div className="relative flex flex-col items-center">
                {/* Floating Celestial Name Banner */}
                <div className="mb-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-dark-chocolate via-[#261208] to-dark-chocolate border border-gold-highlight text-gold-highlight font-label text-[10px] uppercase font-bold tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.6)] whitespace-nowrap animate-bounce">
                  ⚡ Kapidhwaja Rath · Phase {currentPhase.roman}
                </div>

                {/* Chariot Artwork & Radiant Sun Aura */}
                <div className="relative w-28 h-22 sm:w-32 sm:h-24 filter drop-shadow-[0_10px_20px_rgba(242,184,75,0.75)]">
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
                <div className="w-24 h-3 bg-gradient-to-r from-transparent via-gold-highlight/90 to-transparent blur-[3px] rounded-full mt-[-6px]" />
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
                      ? 'bg-gradient-to-r from-bronze-brown via-dark-chocolate to-bronze-brown border-2 border-gold-highlight scale-[1.03] shadow-[0_8px_30px_rgba(242,184,75,0.4)]'
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
        {/* ELEVATED BATTLEFIELD STAGE DECREE DOSSIER (Description Card)  */}
        {/* Appears smoothly on hover or click of any roadmap stage        */}
        {/* ============================================================== */}
        <div className="relative max-w-5xl mx-auto w-full z-20">
          <div className="bg-gradient-to-br from-[#231006] via-[#1A0B04] to-[#281308] text-cream-parchment border-2 border-gold-highlight/90 rounded-2xl p-5 md:p-7 shadow-[0_20px_50px_rgba(20,9,3,0.9),0_0_25px_rgba(242,184,75,0.2)] relative overflow-hidden transition-all duration-300">
            {/* Ancient Gilded Corner Brackets */}
            <span className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-gold-highlight pointer-events-none" />
            <span className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-gold-highlight pointer-events-none" />
            <span className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-gold-highlight pointer-events-none" />
            <span className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-gold-highlight pointer-events-none" />

            {/* Radiant Ambient Battlefield Energy Rings */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold-highlight/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />

            {/* Inner Content with Smooth Fade Transition between phases */}
            <div key={currentPhase.id} className="animate-fade-in relative z-10 flex flex-col gap-6">
              {/* Header Bar */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-gold-rich/40 pb-5">
                {/* Left: Stage Identity & Tagline */}
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-gold-highlight to-gold-rich text-dark-chocolate font-display text-2xl font-black shadow-lg flex items-center justify-center border-2 border-cream-parchment/60 shrink-0">
                    {currentPhase.roman}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-0.5 rounded-full bg-saffron/25 border border-saffron/70 text-gold-highlight font-label text-[11px] uppercase tracking-widest font-bold">
                        ⚡ Phase {currentPhase.roman} · {currentPhase.tagline}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-cream-parchment font-extrabold tracking-wide mt-1">
                      {currentPhase.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Chrono & Stepper Controls */}
                <div className="flex flex-wrap items-center gap-3 self-stretch lg:self-auto justify-between lg:justify-end">
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-dark-chocolate/90 border border-gold-highlight/50 text-gold-highlight font-mono text-xs md:text-sm font-bold shadow-inner">
                    <Clock className="w-4 h-4 text-gold-highlight shrink-0" />
                    <span>{currentPhase.datetime}</span>
                  </div>

                  {/* Stage Stepper & Interactive Dots */}
                  <div className="flex items-center gap-2 bg-black/40 border border-gold-rich/40 rounded-xl px-2.5 py-1.5">
                    <button
                      type="button"
                      onClick={() =>
                        setActivePhaseIndex((prev) => (prev > 0 ? prev - 1 : phases.length - 1))
                      }
                      className="p-1 rounded-lg text-gold-highlight hover:bg-gold-highlight/20 transition-colors"
                      aria-label="Previous Phase"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    {/* 5 Milestone Indicator Dots */}
                    <div className="flex items-center gap-1.5 px-1">
                      {phases.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => setActivePhaseIndex(dotIdx)}
                          onMouseEnter={() => setActivePhaseIndex(dotIdx)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            activePhaseIndex === dotIdx
                              ? 'bg-gold-highlight scale-125 shadow-[0_0_8px_#F2B84B]'
                              : 'bg-gold-rich/40 hover:bg-gold-highlight/70'
                          }`}
                          aria-label={`Go to Phase ${phases[dotIdx].roman}`}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActivePhaseIndex((prev) => (prev < phases.length - 1 ? prev + 1 : 0))
                      }
                      className="p-1 rounded-lg text-gold-highlight hover:bg-gold-highlight/20 transition-colors"
                      aria-label="Next Phase"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Two-Column Structured Stage Briefing */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Column: Stage Visual Frame & Tactical Venue Chips */}
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border-2 border-gold-rich/70 shadow-xl group bg-black/40">
                    <Image
                      src={currentPhase.image}
                      alt={currentPhase.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-label font-bold text-gold-highlight bg-dark-chocolate/90 border border-gold-rich/50 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      <span className="flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-gold-highlight" />
                        Gate {currentPhase.roman} Directive
                      </span>
                      <span className="uppercase text-cream-parchment/80">Stage {activePhaseIndex + 1}/5</span>
                    </div>
                  </div>

                  {/* Tactical Meta Chips */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-black/35 border border-gold-rich/30 text-xs text-cream-parchment/90">
                      <MapPin className="w-4 h-4 text-gold-highlight shrink-0" />
                      <span className="truncate">{currentPhase.venue}</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-black/35 border border-gold-rich/30 text-xs text-cream-parchment/90">
                      <Users className="w-4 h-4 text-gold-highlight shrink-0" />
                      <span className="truncate">{currentPhase.squadRule}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Mission Briefing Decree & Action Protocols */}
                <div className="lg:col-span-8 flex flex-col gap-4 justify-between">
                  {/* Mission Order Quote Box */}
                  <div className="border-l-4 border-gold-highlight bg-dark-chocolate/40 p-4 rounded-r-xl border border-gold-rich/20 backdrop-blur-sm shadow-inner">
                    <span className="font-label text-[11px] uppercase tracking-widest text-gold-highlight font-bold block mb-1.5">
                      Tactical Mission Briefing
                    </span>
                    <p className="font-body text-sm md:text-base text-cream-parchment/95 leading-relaxed">
                      {currentPhase.brief}
                    </p>
                  </div>

                  {/* Action Directives & Gate Protocols */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-gold-highlight font-bold">
                      <ShieldAlert className="w-4 h-4 text-gold-highlight" />
                      <span>Mandatory Directives &amp; Action Protocol</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {currentPhase.objectives.map((obj, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-b from-[#2A1509] to-[#1E0D05] border border-gold-rich/40 rounded-xl p-3 flex flex-col gap-1.5 hover:border-gold-highlight hover:shadow-[0_4px_16px_rgba(242,184,75,0.2)] transition-all"
                        >
                          <div className="flex items-center gap-1.5 text-peacock-green font-label text-[11px] font-bold uppercase">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-highlight shrink-0" />
                            <span className="text-gold-highlight/90">Protocol {i + 1}</span>
                          </div>
                          <span className="text-xs text-cream-parchment/90 leading-snug font-body">
                            {obj}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="pt-2 border-t border-gold-rich/30 flex flex-col gap-2 text-xs text-cream-parchment/85 leading-relaxed">
                    <p>{phase.brief}</p>
                    <div className="flex items-center gap-2 text-gold-highlight font-semibold">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{phase.venue}</span>
                    </div>
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
