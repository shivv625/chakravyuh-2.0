'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG, ProblemStatement } from '@/content/site';
import {
  Download,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ShieldCheck,
  Landmark,
  HeartPulse,
  Globe,
  ChevronRight,
} from 'lucide-react';

interface ProblemStatementsSectionProps {
  onRegisterClick?: () => void;
}

export const ProblemStatementsSection: React.FC<ProblemStatementsSectionProps> = ({
  onRegisterClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Manual scroll lock to prevent intermediate flicker/glitch during programmatic scroll
  const isManualScroll = useRef(false);
  const manualScrollTimer = useRef<NodeJS.Timeout | null>(null);

  const problemStatements: ProblemStatement[] = SITE_CONFIG.PROBLEM_STATEMENTS;
  const totalPS = problemStatements.length;

  // Icon mapping for tracks
  const getTrackIcon = (id: string) => {
    switch (id) {
      case 'ps-01':
        return <BrainCircuit className="w-4 h-4 text-gold-highlight" />;
      case 'ps-02':
        return <ShieldCheck className="w-4 h-4 text-gold-highlight" />;
      case 'ps-03':
        return <Landmark className="w-4 h-4 text-gold-highlight" />;
      case 'ps-04':
        return <HeartPulse className="w-4 h-4 text-gold-highlight" />;
      case 'ps-05':
      default:
        return <Globe className="w-4 h-4 text-gold-highlight" />;
    }
  };

  // Sticky scroll listener with manual scroll debounce lock
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const totalScrollDistance = containerRef.current.offsetHeight - window.innerHeight;

          if (totalScrollDistance > 0) {
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
            setScrollProgress(progress);

            // ONLY calculate and update active index during natural scrolling, NOT during manual click jumps
            if (!isManualScroll.current) {
              const step = 1 / (totalPS - 1);
              const nextIndex = Math.min(
                totalPS - 1,
                Math.max(0, Math.round(progress / step))
              );
              setActiveIndex(nextIndex);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (manualScrollTimer.current) {
        clearTimeout(manualScrollTimer.current);
      }
    };
  }, [totalPS]);

  // Click to jump cleanly without glitching intermediate problem statements
  const handleSelectPS = (index: number) => {
    isManualScroll.current = true;
    setActiveIndex(index);

    if (manualScrollTimer.current) {
      clearTimeout(manualScrollTimer.current);
    }

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const totalScrollDistance = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollDistance > 0) {
        const step = 1 / (totalPS - 1);
        const targetScroll = containerTop + (index * step) * totalScrollDistance;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }

    // Release manual scroll lock once smooth scroll settles
    manualScrollTimer.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 700);
  };

  const currentPS = problemStatements[activeIndex] || problemStatements[0];

  return (
    <section
      id="tracks"
      ref={containerRef}
      className="relative bg-cream-parchment border-t-2 border-gold-rich"
      style={{
        // 45vh per PS gives effortless, quick, and responsive transitions (reduced from 100vh)
        height: `${totalPS * 45}vh`,
      }}
    >
      {/* Background Kurukshetra Soft Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-gold-highlight/20 via-saffron/10 to-transparent blur-3xl" />
      </div>

      {/* Sticky Screen Viewport Frame - Always fits fully in viewport without clipping bottom */}
      <div className="sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] max-h-[880px] flex flex-col justify-center overflow-hidden py-2 md:py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-2.5 md:gap-3.5 h-full justify-between">
          {/* Section Header with Live Scroll Tracker */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gold-rich/40 pb-2 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label text-label-xs uppercase text-bronze-brown font-bold tracking-widest">
                  Problem Statements · Domains of Warfare
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold-rich" />
                <span className="hidden sm:inline-block font-label text-label-xs text-saffron uppercase font-bold">
                  Scroll To Switch
                </span>
              </div>
              <h2 className="font-display text-headline-sm md:text-headline-md text-bronze-brown leading-tight">
                Tracks &amp; Problem Statements
              </h2>
            </div>

            {/* Stepper with Live Progress Indicator */}
            <div className="flex items-center gap-3 bg-dark-chocolate/90 text-cream-parchment px-4 py-1.5 rounded-full border border-gold-rich/50 shadow-sm self-stretch sm:self-auto justify-between sm:justify-start">
              <span className="font-label text-label-xs uppercase text-gold-highlight font-bold tracking-wider">
                PS {String(activeIndex + 1).padStart(2, '0')} of {String(totalPS).padStart(2, '0')}
              </span>

              {/* Progress Stepper Bars */}
              <div className="flex items-center gap-1.5">
                {problemStatements.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectPS(i)}
                    aria-label={`Jump to Problem Statement ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-7 bg-gold-highlight shadow-[0_0_10px_rgba(242,184,75,0.9)]'
                        : i < activeIndex
                        ? 'w-2.5 bg-gold-rich/70'
                        : 'w-2.5 bg-cream-parchment/30'
                    }`}
                  />
                ))}
              </div>

              <span className="text-label-xs text-cream-parchment/70 hidden md:inline font-mono">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>
          </div>

          {/* Master-Detail 5+7 Fixed Showcase */}
          <div className="flex-1 min-h-0 bg-dark-chocolate text-cream-parchment border-2 border-gold-highlight rounded-xl p-3.5 md:p-5 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-3.5 md:gap-5 items-stretch overflow-hidden">
            {/* Left 5 Cols: 5 Interactive PS Selector Cards */}
            <div
              className="lg:col-span-5 flex flex-col justify-between gap-2 md:gap-2.5 h-full select-none"
              role="tablist"
              aria-label="Select a problem statement"
            >
              <div className="hidden lg:flex items-center justify-between pb-1 px-1 border-b border-gold-rich/20 shrink-0">
                <span className="font-label text-label-xs uppercase text-gold-highlight/90 font-bold tracking-wider">
                  Challenge Headings
                </span>
                <span className="font-label text-label-xs uppercase text-cream-parchment/60 font-medium">
                  Scroll or Click to Switch
                </span>
              </div>

              {problemStatements.map((ps, idx) => {
                const isSelected = activeIndex === idx;

                return (
                  <button
                    key={ps.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectPS(idx)}
                    className={`w-full text-left rounded-lg p-2.5 md:p-3 flex items-center gap-3 transition-all duration-300 relative group overflow-hidden ${
                      isSelected
                        ? 'border-2 border-gold-highlight bg-bronze-brown/85 shadow-[0_4px_20px_rgba(242,184,75,0.3)] scale-[1.01]'
                        : 'border border-gold-rich/40 bg-dark-chocolate/80 hover:bg-bronze-brown/40 hover:border-gold-rich/70 opacity-80 hover:opacity-100'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isSelected && (
                      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-gold-highlight via-saffron to-gold-highlight" />
                    )}

                    {/* Thumbnail Artwork (52px x 52px) */}
                    <div className="relative w-12 h-12 md:w-13 md:h-13 rounded-md overflow-hidden border border-gold-highlight shrink-0 bg-dark-chocolate shadow-xs">
                      <Image
                        src={ps.image}
                        alt={ps.code}
                        fill
                        sizes="52px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-gold-highlight">
                          {ps.code.replace('PS ', '')}
                        </span>
                      </div>
                    </div>

                    {/* Content: PS Code, 1-Line Heading, and Domain/Tags */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-label text-[11px] uppercase text-gold-highlight font-bold tracking-wider shrink-0">
                          {ps.code} · {ps.astraCode}
                        </span>
                      </div>

                      {/* 1-Line Heading */}
                      <h4
                        className={`font-display text-sm md:text-base font-bold truncate leading-tight transition-colors ${
                          isSelected ? 'text-cream-parchment' : 'text-cream-parchment/90 group-hover:text-gold-highlight'
                        }`}
                      >
                        {ps.heading}
                      </h4>

                      {/* Domain Subtitle */}
                      <span className="font-body text-[11px] md:text-xs text-cream-parchment/75 block truncate mt-0.5">
                        {ps.domain}
                      </span>
                    </div>

                    {/* Right Arrow / Chevron */}
                    <div className="shrink-0 self-center">
                      {isSelected ? (
                        <ArrowRight className="w-4 h-4 text-gold-highlight transition-transform duration-200 translate-x-0.5" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gold-rich/60 group-hover:text-gold-highlight" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right 7 Cols: Active PS Spotlight Styled as an Ancient Manuscript Bhojpatra Scroll */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl border-2 border-[#8B4513] bg-[#D89B48]">
              {/* Pure Textured Aged Manuscript Parchment Paper Background */}
              <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-95"
                style={{ backgroundImage: "url('/assets/parchment_paper_texture.jpg')" }}
              />

              {/* Authentic Aged Vignette & Deckled Edge Scrim */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,246,227,0.15)_0%,rgba(139,69,19,0.35)_75%,rgba(60,25,5,0.7)_100%)] pointer-events-none" />

              {/* Ornate Ancient Manuscript Corner Flourishes */}
              <span className="absolute top-4 left-3 w-4 h-4 border-t-2 border-l-2 border-[#8B4513] pointer-events-none z-20" />
              <span className="absolute top-4 right-3 w-4 h-4 border-t-2 border-r-2 border-[#8B4513] pointer-events-none z-20" />
              <span className="absolute bottom-4 left-3 w-4 h-4 border-b-2 border-l-2 border-[#8B4513] pointer-events-none z-20" />
              <span className="absolute bottom-4 right-3 w-4 h-4 border-b-2 border-r-2 border-[#8B4513] pointer-events-none z-20" />

              {/* Top Ancient Manuscript Cylindrical Roller Rod */}
              <div className="relative px-3 pt-2.5 pb-1 flex items-center justify-between z-20 shrink-0">
                <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-l bg-gradient-to-r from-[#8B4513] via-[#D9961F] to-[#F2B84B] border border-black/60 shadow-sm shrink-0" />
                <div className="flex-1 h-3 sm:h-3.5 mx-0.5 rounded-full bg-gradient-to-b from-[#F2B84B] via-[#FFF3D1] to-[#8B4513] border border-[#5C2E0B] shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_2px_4px_rgba(0,0,0,0.5)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-gold-shimmer" />
                </div>
                <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-r bg-gradient-to-l from-[#8B4513] via-[#D9961F] to-[#F2B84B] border border-black/60 shadow-sm shrink-0" />
              </div>

              {/* Inner Dynamic Manuscript Content */}
              <div
                key={currentPS.id}
                className="flex-1 flex flex-col justify-between h-full relative z-10 transition-all duration-300 ease-out min-h-0"
              >
                {/* 1. Horizontal Concept Art Banner */}
                <div className="relative h-20 sm:h-22 md:h-26 w-full overflow-hidden border-y border-[#8B4513]/60 bg-dark-chocolate shrink-0 shadow-md">
                  <Image
                    src={currentPS.image}
                    alt={currentPS.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Gradient for Overlaid Meta Badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1408]/90 via-[#2B1408]/35 to-transparent pointer-events-none" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-2 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="px-3 py-0.5 bg-[#2B1408]/90 text-gold-highlight font-label text-[10px] sm:text-[11px] uppercase rounded-full font-bold border border-gold-rich/70 backdrop-blur-xs shadow-xs">
                      {currentPS.code} · {currentPS.astraCode} · {currentPS.domain}
                    </span>

                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gold-highlight bg-[#2B1408]/90 flex items-center justify-center shadow-xs">
                      {getTrackIcon(currentPS.id)}
                    </div>
                  </div>

                  {/* Subtitle in Banner */}
                  <div className="absolute bottom-1.5 left-3 right-3 z-10">
                    <p className="font-label text-[11px] sm:text-label-xs uppercase text-gold-highlight font-bold tracking-wider drop-shadow-xs">
                      {currentPS.subtitle}
                    </p>
                  </div>
                </div>

                {/* 2. Text Content & Challenge Scope on Ancient Manuscript Parchment */}
                <div className="p-3 sm:p-3.5 md:p-4 flex-1 flex flex-col justify-between gap-2 min-h-0">
                  <div className="flex flex-col gap-1">
                    {/* 1-Line PS Heading in Dark Walnut Ink */}
                    <h3 className="font-display text-base sm:text-lg md:text-xl text-[#2B1307] font-extrabold leading-tight truncate drop-shadow-[0_1px_1px_rgba(255,246,227,0.7)]">
                      {currentPS.heading}
                    </h3>

                    {/* Brief Description */}
                    <p className="font-body text-xs sm:text-[13px] md:text-sm text-[#3E1D0A] font-semibold leading-relaxed line-clamp-2">
                      {currentPS.brief}
                    </p>
                  </div>

                  {/* Key Technical Objectives Box: Inscribed ancient tablet style */}
                  <div className="bg-[#2B1307]/10 border-2 border-[#8B4513]/40 rounded-lg p-2 sm:p-2.5 md:p-3 shrink-0 shadow-inner backdrop-blur-2xs">
                    <span className="font-label text-[10px] sm:text-label-xs uppercase text-[#6B3A1E] block mb-1 font-bold tracking-wider">
                      Key Technical Objectives &amp; Scope
                    </span>
                    <ul className="font-body text-[11px] sm:text-xs md:text-label-sm text-[#261105] flex flex-col gap-1 font-semibold">
                      {currentPS.challengePrompts.map((prompt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#B8521A] font-black leading-none mt-0.5">•</span>
                          <span className="line-clamp-1">{prompt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Bottom Action Bar: High-Impact Ancient Buttons */}
                  <div className="shrink-0 pt-2 border-t border-[#8B4513]/40 flex items-center justify-between gap-3">
                    {/* Left: Radiant Gold "Download PS Dossier" CTA */}
                    <a
                      href={currentPS.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[#D9961F] via-[#F2B84B] to-[#D9961F] text-[#2B1408] hover:brightness-105 font-headline text-xs sm:text-sm uppercase font-black tracking-wider rounded-lg border-2 border-[#6B3A1E] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/btn shrink-0"
                      title="Download complete Problem Statement document from Google Drive"
                    >
                      <div className="w-5 h-5 rounded-md bg-[#2B1408]/15 flex items-center justify-center">
                        <Download className="w-3.5 h-3.5 text-[#2B1408] group-hover/btn:translate-y-0.5 transition-transform" />
                      </div>
                      <span>Download PS Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#2B1408]/80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Right: Royal "Lock This PS" Button */}
                    <a
                      href="#register"
                      onClick={onRegisterClick}
                      className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#2B1307] text-[#F2B84B] border-2 border-[#D9961F] rounded-lg font-headline text-xs sm:text-sm uppercase tracking-wider font-extrabold hover:bg-[#3E1D0A] hover:border-[#F2B84B] hover:text-cream-parchment hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0 group/lock"
                    >
                      <span>Lock This PS</span>
                      <ArrowRight className="w-4 h-4 text-gold-highlight group-hover/lock:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Ancient Manuscript Cylindrical Roller Rod */}
              <div className="relative px-3 pb-2.5 pt-1 flex items-center justify-between z-20 shrink-0">
                <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-l bg-gradient-to-r from-[#8B4513] via-[#D9961F] to-[#F2B84B] border border-black/60 shadow-sm shrink-0" />
                <div className="flex-1 h-3 sm:h-3.5 mx-0.5 rounded-full bg-gradient-to-b from-[#F2B84B] via-[#FFF3D1] to-[#8B4513] border border-[#5C2E0B] shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_2px_5px_rgba(0,0,0,0.6)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                </div>
                <div className="w-2.5 h-4 sm:w-3 sm:h-5 rounded-r bg-gradient-to-l from-[#8B4513] via-[#D9961F] to-[#F2B84B] border border-black/60 shadow-sm shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementsSection;
