'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
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
      squadRule: 'Rosters Locked · No Changes Allowed',
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
      venue: 'Discord War Room & Portal',
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

  // Helper renderer for each desktop ancient manuscript roll card
  const renderManuscriptCard = (idx: number) => {
    const p = phases[idx];
    const isSelected = activePhaseIndex === idx;

    return (
      <article
        key={p.id}
        onClick={() => setActivePhaseIndex(idx)}
        onMouseEnter={() => setActivePhaseIndex(idx)}
        className={`col-span-4 rounded-2xl p-3 sm:p-3.5 shadow-xl cursor-pointer select-none group relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isSelected
            ? 'bg-gradient-to-b from-[#2E1508] via-[#1B0A03] to-[#291206] border-2 border-gold-highlight shadow-[0_25px_60px_rgba(10,4,1,0.95),0_0_35px_rgba(242,184,75,0.35),inset_0_0_25px_rgba(242,184,75,0.12)] z-30 scale-[1.02]'
            : 'bg-gradient-to-b from-[#1C0D05] via-[#140803] to-[#1A0B04] border-2 border-gold-rich/50 hover:border-gold-highlight/80 z-20'
        }`}
      >
        {/* Dynamic Manuscript Parchment Illumination & Vedic Rune Watermark */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isSelected ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Golden Parchment Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(242,184,75,0.22)_0%,rgba(217,150,31,0.07)_55%,transparent_85%)]" />

          {/* Deckled Edge Parchment Texture Lines */}
          <div className="absolute left-1 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold-highlight/40 to-transparent" />
          <div className="absolute right-1 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold-highlight/40 to-transparent" />

          {/* Golden Ambient Corner Flare */}
          <div className="absolute -top-14 -right-14 w-36 h-36 bg-gold-highlight/15 rounded-full blur-2xl" />
          <div className="absolute -bottom-14 -left-14 w-36 h-36 bg-saffron/15 rounded-full blur-2xl" />
        </div>

        {/* Top Ancient Manuscript Cylindrical Roller Rod (3D Gilded Scroll Handle) */}
        <div className="relative -mx-3 -mt-3 sm:-mx-3.5 sm:-mt-3.5 mb-2.5 flex items-center justify-between z-10">
          {/* Left Carved Finial Knob */}
          <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-l bg-gradient-to-r from-[#8B4513] via-[#D9961F] to-[#F2B84B] border border-black/60 shadow-sm shrink-0" />

          {/* Cylindrical Rod Body with Metallic Sandstone Highlight */}
          <div className="flex-1 h-3 sm:h-3.5 mx-0.5 rounded-full bg-gradient-to-b from-[#F2B84B] via-[#FFF3D1] to-[#8B4513] border border-[#5C2E0B] shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_2px_4px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-gold-shimmer" />
          </div>

          {/* Right Carved Finial Knob */}
          <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-r bg-gradient-to-l from-[#8B4513] via-[#D9961F] to-[#F2B84B] border border-black/60 shadow-sm shrink-0" />
        </div>

        {/* Ornate Vedic Corner Brackets (Smoothly reveal on selected) */}
        <div
          className={`pointer-events-none transition-opacity duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isSelected ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="absolute top-4 left-2.5 w-3 h-3 border-t-2 border-l-2 border-gold-highlight/90 pointer-events-none" />
          <span className="absolute top-4 right-2.5 w-3 h-3 border-t-2 border-r-2 border-gold-highlight/90 pointer-events-none" />
          <span className="absolute bottom-5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-gold-highlight/90 pointer-events-none" />
          <span className="absolute bottom-5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-gold-highlight/90 pointer-events-none" />
        </div>

        {/* Card Header Section (Visible in both rolled and unrolled state) */}
        <div className="relative z-10 flex items-center gap-3">
          {/* Visible Thematic Thumbnail Image */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 border-gold-highlight/80 shrink-0 shadow-md bg-black/40">
            <Image
              src={p.image}
              alt={p.alt}
              fill
              sizes="64px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-dark-chocolate/90 border border-gold-highlight/90 font-display text-[10px] font-bold text-gold-highlight shadow-xs leading-none">
              {p.roman}
            </span>
          </div>

          {/* Summary Text Column */}
          <div className="min-w-0 flex-1 flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="font-label text-[10px] uppercase tracking-wider text-gold-highlight font-bold truncate">
                Phase {p.roman} · {p.tagline}
              </span>
              {isSelected && (
                <span className="shrink-0 w-2 h-2 rounded-full bg-gold-highlight animate-ping" />
              )}
            </div>

            <h3
              className={`font-display text-base font-bold leading-snug transition-colors duration-500 ${
                isSelected ? 'text-cream-parchment' : 'text-cream-parchment/90 group-hover:text-gold-highlight'
              }`}
            >
              {p.title}
            </h3>

            <div className="flex items-center gap-1.5 font-label text-xs uppercase text-cream-parchment/75 tabular-nums font-semibold">
              <Clock className="w-3 h-3 text-gold-highlight/80 shrink-0" />
              <span>{p.datetime}</span>
            </div>
          </div>
        </div>

        {/* Collapsed State: Royal Parchment Clasp Bar (Hidden when unrolled) */}
        <div
          className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isSelected ? 'max-h-0 opacity-0 overflow-hidden m-0 p-0' : 'max-h-8 opacity-100 mt-2.5 pt-1.5 border-t border-gold-rich/25'
          }`}
        >
          <div className="flex items-center justify-between text-[10px] font-label font-bold text-gold-highlight/80 uppercase tracking-wider group-hover:text-gold-highlight transition-colors">
            <span className="flex items-center gap-1">
              <span className="text-gold-highlight">📜</span> Battle Roll
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-black/40 border border-gold-rich/30 text-gold-highlight/90">
              Hover to Roll Down ▾
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* UNROLLING ANCIENT MANUSCRIPT (Rolls down smoothly on hover)    */}
        {/* ============================================================== */}
        <div
          className={`relative z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${
            isSelected
              ? 'max-h-[500px] opacity-100 translate-y-0 scale-y-100 mt-3 pt-2.5 border-t border-gold-rich/35'
              : 'max-h-0 opacity-0 -translate-y-3 scale-y-95 pointer-events-none'
          }`}
          style={{ transformOrigin: 'top center' }}
        >
          {/* Decorative Manuscript Divider */}
          <div className="flex items-center gap-2 mb-2.5 opacity-80">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-highlight to-transparent" />
            <span className="text-gold-highlight text-[10px] tracking-widest font-serif font-bold">
              ◈ ROYAL BATTLE DIRECTIVE ◈
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-highlight to-transparent" />
          </div>

          {/* Tactical Mission Briefing Order */}
          <div className="border-l-2 border-gold-highlight pl-2.5 py-1 bg-black/30 rounded-r-lg mb-2.5 shadow-inner">
            <p className="font-body text-xs text-cream-parchment/95 leading-relaxed">
              {p.brief}
            </p>
          </div>

          {/* Venue & Squad Rule Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-2.5">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/35 border border-gold-rich/35 text-[11px] text-cream-parchment/90">
              <MapPin className="w-3 h-3 text-gold-highlight shrink-0" />
              <span className="truncate">{p.venue}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/35 border border-gold-rich/35 text-[11px] text-cream-parchment/90">
              <Users className="w-3 h-3 text-gold-highlight shrink-0" />
              <span className="truncate">{p.squadRule}</span>
            </div>
          </div>

          {/* Mandatory Action Directives Protocol */}
          <div className="space-y-1 bg-black/25 p-2 rounded-lg border border-gold-rich/25">
            <span className="font-label text-[10px] uppercase tracking-wider text-gold-highlight font-bold block mb-1">
              Gate Action Protocol:
            </span>
            {p.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[11px] text-cream-parchment/90 leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-highlight shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Ancient Manuscript Cylindrical Roller Rod (Rolls Down with the scroll) */}
        <div className="relative -mx-3 -mb-3 sm:-mx-3.5 sm:-mb-3.5 mt-2.5 flex items-center justify-between z-10 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
          {/* Left Carved Finial Knob */}
          <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-l bg-gradient-to-r from-[#8B4513] via-[#D9961F] to-[#F2B84B] border border-black/60 shadow-sm shrink-0" />

          {/* Cylindrical Rod Body */}
          <div className="flex-1 h-3 sm:h-3.5 mx-0.5 rounded-full bg-gradient-to-b from-[#F2B84B] via-[#FFF3D1] to-[#8B4513] border border-[#5C2E0B] shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_2px_5px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          </div>

          {/* Right Carved Finial Knob */}
          <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-r bg-gradient-to-l from-[#8B4513] via-[#D9961F] to-[#F2B84B] border border-black/60 shadow-sm shrink-0" />
        </div>
      </article>
    );
  };

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
            Hover over any ancient battle roll to unroll its sacred directives and dispatch the celestial Rath along the Kurukshetra war trail.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP INTERACTIVE BATTLEFIELD WARPATH (md and up)           */}
        {/* ============================================================== */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto">
          {/* Top Row: Phase I (x=200), Phase III (x=600), Phase V (x=1000) */}
          <div className="grid grid-cols-12 gap-5 items-start relative z-20">
            {[0, 2, 4].map((idx) => renderManuscriptCard(idx))}
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
              className="absolute pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-50"
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
          <div className="grid grid-cols-12 gap-5 items-start relative z-20">
            <div className="col-span-2" />
            {[1, 3].map((idx) => renderManuscriptCard(idx))}
            <div className="col-span-2" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VERTICAL ANCIENT MANUSCRIPT PROGRESSION (below md)     */}
        {/* ============================================================== */}
        <div className="md:hidden relative flex flex-col gap-4 pl-6 border-l-4 border-gold-rich">
          {phases.map((phase, idx) => {
            const isSelected = activePhaseIndex === idx;

            return (
              <article
                key={phase.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={`relative rounded-2xl p-3 flex flex-col gap-2 shadow-lg cursor-pointer select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#2E1508] via-[#1B0A03] to-[#291206] border-2 border-gold-highlight shadow-[0_4px_20px_rgba(242,184,75,0.35)]'
                    : 'bg-gradient-to-b from-[#1C0D05] to-[#140803] border border-gold-rich/50'
                }`}
              >
                {/* Mobile Top Scroll Dowel */}
                <div className="relative -mx-3 -mt-3 mb-1 flex items-center justify-between">
                  <div className="w-2 h-3 rounded-l bg-gold-rich border border-black/50 shrink-0" />
                  <div className="flex-1 h-2 mx-0.5 rounded-full bg-gradient-to-b from-gold-highlight to-bronze-brown border border-gold-rich/70" />
                  <div className="w-2 h-3 rounded-r bg-gold-rich border border-black/50 shrink-0" />
                </div>

                {/* Connector Node */}
                <span
                  className={`absolute -left-[33px] top-6 w-4 h-4 rounded-full border-2 border-dark-chocolate transition-colors duration-500 ${
                    isSelected ? 'bg-gold-highlight animate-pulse' : 'bg-gold-rich'
                  }`}
                />

                <div className="flex items-center gap-3 relative z-10">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border-2 border-gold-highlight/80 shrink-0 shadow-sm">
                    <Image
                      src={phase.image}
                      alt={phase.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-0.5 right-0.5 px-1 rounded bg-dark-chocolate/90 border border-gold-highlight text-[9px] font-display font-bold text-gold-highlight leading-none">
                      {phase.roman}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="font-label text-[10px] uppercase text-gold-highlight font-bold">
                      Phase {phase.roman} · {phase.tagline}
                    </span>
                    <h3 className="font-display text-sm font-bold text-cream-parchment leading-tight">
                      {phase.title}
                    </h3>
                    <span className="font-label text-xs uppercase text-cream-parchment/75 tabular-nums">
                      {phase.datetime}
                    </span>
                  </div>
                </div>

                {/* Expanded Manuscript Scroll on Mobile Selection */}
                <div
                  className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${
                    isSelected ? 'max-h-[500px] opacity-100 mt-1 pt-2 border-t border-gold-rich/30' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="border-l-2 border-gold-highlight pl-2 bg-black/25 py-1 rounded-r text-xs text-cream-parchment/90 leading-relaxed mb-2">
                    {phase.brief}
                  </p>

                  <div className="flex flex-col gap-1 text-[11px] text-cream-parchment/85 mb-2">
                    <div className="flex items-center gap-1.5 text-gold-highlight font-semibold">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{phase.venue}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gold-highlight font-semibold">
                      <Users className="w-3.5 h-3.5 shrink-0" />
                      <span>{phase.squadRule}</span>
                    </div>
                  </div>

                  <div className="space-y-1 bg-black/25 p-2 rounded border border-gold-rich/20">
                    <span className="font-label text-[10px] uppercase text-gold-highlight font-bold block mb-0.5">
                      Action Protocol:
                    </span>
                    {phase.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-cream-parchment/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-highlight shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Bottom Scroll Dowel */}
                <div className="relative -mx-3 -mb-3 mt-1 flex items-center justify-between">
                  <div className="w-2 h-3 rounded-l bg-gold-rich border border-black/50 shrink-0" />
                  <div className="flex-1 h-2 mx-0.5 rounded-full bg-gradient-to-b from-gold-highlight to-bronze-brown border border-gold-rich/70" />
                  <div className="w-2 h-3 rounded-r bg-gold-rich border border-black/50 shrink-0" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
