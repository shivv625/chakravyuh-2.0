'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import {
  Calendar,
  Hourglass,
  CheckCircle,
  Rocket,
  Users,
  Gavel,
  Trophy,
} from 'lucide-react';

interface GateItem {
  id: string;
  gateNum: string;
  phase: 'pre' | 'sprint' | 'finale';
  side: 'left' | 'right';
  badge: string;
  badgeClass: string;
  borderClass: string;
  accentClass: string;
  datetime: string;
  title: string;
  desc: string;
  action: string;
  phaseLabel: string;
  nodeColor: string;
  icon: React.ReactNode;
}

export const TimelineSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pre' | 'sprint' | 'finale'>('all');

  const gates: GateItem[] = [
    {
      id: 'gate-1',
      gateNum: 'I',
      phase: 'pre',
      side: 'left',
      badge: 'Live Now',
      badgeClass: 'bg-gold-highlight text-dark-chocolate font-bold',
      borderClass: 'border-gold-highlight',
      accentClass: 'text-gold-highlight',
      datetime: '15 DEC 2026 · 10:00 AM',
      title: 'Registration Opens',
      desc: 'Squad registration and track selection goes live for UG/PG builders across India.',
      action: 'Action: Squad + Track Lock',
      phaseLabel: 'Phase 01 · Entry',
      nodeColor: 'bg-gold-highlight',
      icon: <Calendar className="w-5 h-5 text-gold-highlight" />,
    },
    {
      id: 'gate-2',
      gateNum: 'II',
      phase: 'pre',
      side: 'right',
      badge: 'Deadline',
      badgeClass: 'bg-dark-chocolate border border-saffron text-cream-parchment',
      borderClass: 'border-saffron',
      accentClass: 'text-saffron',
      datetime: '10 JAN 2027 · 11:59 PM',
      title: 'Registration Closes',
      desc: 'Final cutoff to lock your 2–4 member team and upload your solution pitch deck.',
      action: 'Deliverable: Idea PPT',
      phaseLabel: 'Phase 02 · Submission',
      nodeColor: 'bg-saffron',
      icon: <Hourglass className="w-5 h-5 text-saffron" />,
    },
    {
      id: 'gate-3',
      gateNum: 'III',
      phase: 'pre',
      side: 'left',
      badge: 'Selection',
      badgeClass: 'bg-dark-chocolate border border-krishna-blue text-sky-light',
      borderClass: 'border-krishna-blue',
      accentClass: 'text-sky-light',
      datetime: '15 JAN 2027 · 06:00 PM',
      title: 'Shortlist Announcement',
      desc: 'Top 125 squads earn their Gate Pass to compete live at GITA Campus, Bhubaneswar.',
      action: 'Milestone: Top 125 Teams',
      phaseLabel: 'Phase 03 · Gate Pass',
      nodeColor: 'bg-krishna-blue',
      icon: <CheckCircle className="w-5 h-5 text-sky-light" />,
    },
    {
      id: 'gate-4',
      gateNum: 'IV',
      phase: 'sprint',
      side: 'right',
      badge: 'Day 1',
      badgeClass: 'bg-dark-chocolate border border-gold-rich text-gold-highlight',
      borderClass: 'border-gold-rich',
      accentClass: 'text-gold-highlight',
      datetime: '23 JAN 2027 · 09:00 AM',
      title: 'Hackathon Kickoff',
      desc: 'On-campus check-in, inaugural ceremony, GitHub repo initialization, and 24-hour build.',
      action: 'Arena: GITA Auditorium',
      phaseLabel: 'Phase 04 · 24h Begins',
      nodeColor: 'bg-gold-rich',
      icon: <Rocket className="w-5 h-5 text-gold-highlight" />,
    },
    {
      id: 'gate-5',
      gateNum: 'V',
      phase: 'sprint',
      side: 'left',
      badge: 'Checkpoint',
      badgeClass: 'bg-dark-chocolate border border-peacock-green text-cream-parchment',
      borderClass: 'border-peacock-green',
      accentClass: 'text-peacock-green',
      datetime: '23 JAN 2027 · 08:00 PM',
      title: 'Mid Evaluation',
      desc: 'Night-one architecture review, technical debugging, and 1-on-1 industry mentoring.',
      action: 'Review: Prototype + Architecture',
      phaseLabel: 'Phase 05 · Mentor Ring',
      nodeColor: 'bg-peacock-green',
      icon: <Users className="w-5 h-5 text-cream-parchment" />,
    },
    {
      id: 'gate-6',
      gateNum: 'VI',
      phase: 'sprint',
      side: 'right',
      badge: 'Day 2',
      badgeClass: 'bg-dark-chocolate border border-saffron text-cream-parchment',
      borderClass: 'border-saffron',
      accentClass: 'text-saffron',
      datetime: '24 JAN 2027 · 02:00 PM',
      title: 'Final Pitch & Judging',
      desc: 'Code freeze followed by live working product demos before the national jury panel.',
      action: 'Format: 5m Demo + 3m Q&A',
      phaseLabel: 'Phase 06 · Live Jury',
      nodeColor: 'bg-saffron',
      icon: <Gavel className="w-5 h-5 text-saffron" />,
    },
  ];

  const ringNodes = [
    { num: 'I', label: 'Open', id: '#gate-1', color: 'bg-gold-highlight text-dark-chocolate' },
    { num: 'II', label: 'Close', id: '#gate-2', color: 'bg-dark-chocolate text-cream-parchment border-2 border-saffron hover:bg-saffron hover:text-dark-chocolate' },
    { num: 'III', label: 'Shortlist', id: '#gate-3', color: 'bg-dark-chocolate text-sky-light border-2 border-krishna-blue hover:bg-krishna-blue hover:text-cream-parchment' },
    { num: 'IV', label: 'Kickoff', id: '#gate-4', color: 'bg-dark-chocolate text-gold-highlight border-2 border-gold-rich hover:bg-gold-rich hover:text-dark-chocolate' },
    { num: 'V', label: 'Mentor', id: '#gate-5', color: 'bg-dark-chocolate text-cream-parchment border-2 border-peacock-green hover:bg-peacock-green hover:text-cream-parchment' },
    { num: 'VI', label: 'Pitch', id: '#gate-6', color: 'bg-dark-chocolate text-cream-parchment border-2 border-saffron hover:bg-saffron hover:text-dark-chocolate' },
    { num: 'VII', label: 'Finale', id: '#gate-7', color: 'bg-bronze-brown text-gold-highlight border-2 border-gold-highlight hover:bg-gold-highlight hover:text-dark-chocolate' },
  ];

  const filteredGates = gates.filter((g) => {
    if (activeFilter === 'all') return true;
    return g.phase === activeFilter;
  });

  const showSanctum = activeFilter === 'all' || activeFilter === 'finale';

  return (
    <section
      id="timeline"
      className="relative py-20 md:py-28 bg-dark-chocolate text-cream-parchment border-t-4 border-saffron overflow-hidden"
    >
      {/* Kurukshetra Spiral Battlefield Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <Image
          src="/assets/roadmap_chakravyuh_bg.jpg"
          alt="Chakravyuh spiral formation on Kurukshetra at twilight golden hour"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-chocolate/95 via-dark-chocolate/80 to-dark-chocolate/95 pointer-events-none" />

      {/* Concentric Chakravyuh Sacred Geometry Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15"
        aria-hidden="true"
      >
        <svg
          className="w-[820px] h-[820px] text-gold-rich animate-chakra"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="200" cy="200" r="192" strokeWidth="0.9" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="160" strokeWidth="1" />
          <circle cx="200" cy="200" r="128" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="96" strokeWidth="1" />
          <circle cx="200" cy="200" r="64" strokeWidth="1.2" />
          <path d="M200 8v384M8 200h384M64 64l272 272M336 64L64 336" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-5 py-1 bg-bronze-brown/90 border border-gold-rich ribbon-pill font-label text-label-sm uppercase text-gold-highlight tracking-widest font-bold shadow-sm">
            7-Ring Battle Progression
          </span>
          <h2 className="font-display text-display-md-mobile md:text-display-md text-gold-highlight uppercase epic-text-shadow">
            The Seven Gates
          </h2>
          <p className="font-body text-body-md text-cream-parchment max-w-2xl text-pretty font-normal">
            Every team must pierce seven progressive rings—from nationwide squad registration to the 24-hour war room and the Grand Finale sanctum at GITA Autonomous College.
          </p>
        </div>

        {/* 7-Ring Compass Strip + Phase Filter */}
        <div className="bg-dark-chocolate/90 border border-gold-rich/60 rounded-lg p-5 md:p-6 shadow-lg flex flex-col gap-5 backdrop-blur-sm">
          {/* 7 Roman Numeral Ring Nodes */}
          <div className="relative flex items-center justify-between gap-2 overflow-x-auto pb-1">
            <div className="hidden sm:block absolute left-6 right-6 top-5 h-0.5 bg-gold-rich/40" aria-hidden="true" />
            {ringNodes.map((node) => (
              <a
                key={node.num}
                href={node.id}
                className="relative z-10 flex flex-col items-center gap-1.5 min-w-[68px] group transition-transform hover:scale-105"
              >
                <span
                  className={`w-10 h-10 rounded-full font-display text-body-md font-bold flex items-center justify-center shadow-md transition-colors ${node.color}`}
                >
                  {node.num}
                </span>
                <span className="font-label text-label-sm uppercase tracking-wider text-cream-parchment/90 group-hover:text-gold-highlight font-semibold">
                  {node.label}
                </span>
              </a>
            ))}
          </div>

          {/* Interactive Phase Filter Tabs */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-gold-rich/30"
            role="tablist"
            aria-label="Filter timeline gates by phase"
          >
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full font-label text-label-sm uppercase tracking-wider transition-colors select-none ${
                activeFilter === 'all'
                  ? 'bg-gold-highlight text-dark-chocolate font-bold shadow-md'
                  : 'bg-bronze-brown/60 text-cream-parchment border border-gold-rich/50 hover:bg-bronze-brown'
              }`}
            >
              All 7 Gates
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('pre')}
              className={`px-4 py-1.5 rounded-full font-label text-label-sm uppercase tracking-wider transition-colors select-none ${
                activeFilter === 'pre'
                  ? 'bg-gold-highlight text-dark-chocolate font-bold shadow-md'
                  : 'bg-bronze-brown/60 text-cream-parchment border border-gold-rich/50 hover:bg-bronze-brown'
              }`}
            >
              Pre-Battle (I–III)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('sprint')}
              className={`px-4 py-1.5 rounded-full font-label text-label-sm uppercase tracking-wider transition-colors select-none ${
                activeFilter === 'sprint'
                  ? 'bg-gold-highlight text-dark-chocolate font-bold shadow-md'
                  : 'bg-bronze-brown/60 text-cream-parchment border border-gold-rich/50 hover:bg-bronze-brown'
              }`}
            >
              24h War Room (IV–VI)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('finale')}
              className={`px-4 py-1.5 rounded-full font-label text-label-sm uppercase tracking-wider transition-colors select-none ${
                activeFilter === 'finale'
                  ? 'bg-gold-highlight text-dark-chocolate font-bold shadow-md'
                  : 'bg-bronze-brown/60 text-cream-parchment border border-gold-rich/50 hover:bg-bronze-brown'
              }`}
            >
              Sanctum (VII)
            </button>
          </div>
        </div>

        {/* Central Golden Battle-Spine + Alternating Architectural Plaques */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical Golden Spine (Desktop Center / Mobile Hidden) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-36 w-1 bg-gradient-to-b from-gold-highlight via-saffron to-gold-highlight opacity-75"
            aria-hidden="true"
          />

          {filteredGates.map((gate) => {
            const isLeft = gate.side === 'left';
            return (
              <div
                key={gate.id}
                id={gate.id}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
              >
                {/* Left Side Content (if isLeft) */}
                {isLeft ? (
                  <div className="md:pr-10">
                    <article
                      className={`bg-dark-chocolate/95 border-2 ${gate.borderClass} rounded-lg overflow-hidden flex flex-col sm:flex-row hover:-translate-y-1 transition-transform duration-card-lift shadow-lg`}
                    >
                      <div className="sm:w-32 bg-bronze-brown/60 border-b sm:border-b-0 sm:border-r border-gold-rich/40 p-4 flex sm:flex-col items-center justify-between sm:justify-center gap-2 text-center shrink-0">
                        <span className={`font-display text-display-md-mobile ${gate.accentClass} leading-none font-bold`}>
                          {gate.gateNum}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full font-label text-label-sm uppercase ${gate.badgeClass}`}>
                          {gate.badge}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col gap-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-label text-label-sm uppercase ${gate.accentClass} tabular-nums font-bold`}>
                            {gate.datetime}
                          </span>
                          {gate.icon}
                        </div>
                        <h3 className="font-headline text-title-lg text-cream-parchment font-bold">
                          {gate.title}
                        </h3>
                        <p className="font-body text-body-md text-cream-parchment/90">
                          {gate.desc}
                        </p>
                        <div className="pt-2 border-t border-gold-rich/30 flex items-center justify-between">
                          <span className={`font-label text-label-sm uppercase ${gate.accentClass} font-semibold`}>
                            {gate.action}
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                ) : (
                  <div className="hidden md:flex items-center justify-end pr-4" aria-hidden="true">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-sm bg-dark-chocolate/90 border border-gold-rich/50 font-label text-label-sm uppercase text-cream-parchment">
                        {gate.phaseLabel}
                      </span>
                      <span className={`w-4 h-4 -mr-[26px] rounded-full ${gate.nodeColor} border-2 border-dark-chocolate shadow`} />
                    </div>
                  </div>
                )}

                {/* Right Side Content (if not isLeft) */}
                {!isLeft ? (
                  <div className="md:pl-10">
                    <article
                      className={`bg-dark-chocolate/95 border-2 ${gate.borderClass} rounded-lg overflow-hidden flex flex-col sm:flex-row hover:-translate-y-1 transition-transform duration-card-lift shadow-lg`}
                    >
                      <div className="sm:w-32 bg-bronze-brown/50 border-b sm:border-b-0 sm:border-r border-gold-rich/40 p-4 flex sm:flex-col items-center justify-between sm:justify-center gap-2 text-center shrink-0">
                        <span className={`font-display text-display-md-mobile ${gate.accentClass} leading-none font-bold`}>
                          {gate.gateNum}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full font-label text-label-sm uppercase ${gate.badgeClass}`}>
                          {gate.badge}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col gap-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-label text-label-sm uppercase ${gate.accentClass} tabular-nums font-bold`}>
                            {gate.datetime}
                          </span>
                          {gate.icon}
                        </div>
                        <h3 className="font-headline text-title-lg text-cream-parchment font-bold">
                          {gate.title}
                        </h3>
                        <p className="font-body text-body-md text-cream-parchment/90">
                          {gate.desc}
                        </p>
                        <div className="pt-2 border-t border-gold-rich/30 flex items-center justify-between">
                          <span className={`font-label text-label-sm uppercase ${gate.accentClass} font-semibold`}>
                            {gate.action}
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                ) : (
                  <div className="hidden md:flex items-center justify-start pl-4" aria-hidden="true">
                    <div className="flex items-center gap-3">
                      <span className={`w-4 h-4 -ml-[26px] rounded-full ${gate.nodeColor} border-2 border-dark-chocolate shadow`} />
                      <span className="px-3 py-1 rounded-sm bg-dark-chocolate/90 border border-gold-rich/50 font-label text-label-sm uppercase text-cream-parchment">
                        {gate.phaseLabel}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* GATE VII — THE INNERMOST SANCTUM (Centered Full-Width Climax) */}
          {showSanctum && (
            <div id="gate-7" className="relative pt-4">
              <article className="max-w-2xl mx-auto bg-gradient-to-b from-bronze-brown/90 to-dark-chocolate border-2 border-gold-highlight rounded-lg p-6 md:p-8 text-center flex flex-col items-center gap-4 stage-plaque-active shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-dark-chocolate border-2 border-gold-highlight flex items-center justify-center text-gold-highlight shadow-md">
                  <Trophy className="w-8 h-8 text-gold-highlight" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-4 py-1 bg-gold-highlight text-dark-chocolate font-label text-label-sm uppercase rounded-full tracking-widest font-bold">
                    Gate VII · Innermost Sanctum
                  </span>
                </div>
                <h3 className="font-display text-headline-lg text-gold-highlight uppercase tracking-wide">
                  Grand Finale &amp; Prize Distribution
                </h3>
                <span className="px-5 py-1.5 rounded-full bg-dark-chocolate border border-gold-highlight font-label text-label-sm text-gold-highlight tabular-nums font-bold">
                  24 JAN 2027 · 05:30 PM
                </span>
                <p className="font-body text-body-lg text-cream-parchment max-w-lg text-balance font-normal">
                  Champions break the Chakravyuh—crowned on stage with the {SITE_CONFIG.METRICS.PRIZE_POOL_TOTAL} prize pool, track awards, and BPUT felicitation.
                </p>
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
