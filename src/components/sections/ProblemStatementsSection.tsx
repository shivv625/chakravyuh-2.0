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

  const problemStatements: ProblemStatement[] = SITE_CONFIG.PROBLEM_STATEMENTS;
  const totalPS = problemStatements.length;

  // Icon mapping for tracks
  const getTrackIcon = (id: string) => {
    switch (id) {
      case 'ps-01':
        return <BrainCircuit className="w-5 h-5 text-gold-rich" />;
      case 'ps-02':
        return <ShieldCheck className="w-5 h-5 text-gold-rich" />;
      case 'ps-03':
        return <Landmark className="w-5 h-5 text-gold-rich" />;
      case 'ps-04':
        return <HeartPulse className="w-5 h-5 text-gold-rich" />;
      case 'ps-05':
      default:
        return <Globe className="w-5 h-5 text-gold-rich" />;
    }
  };

  // Buttery-smooth sticky scroll listener with stable centered plateaus
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

            // Centered stable plateaus for each item:
            const step = 1 / (totalPS - 1);
            const nextIndex = Math.min(
              totalPS - 1,
              Math.max(0, Math.round(progress / step))
            );

            setActiveIndex(nextIndex);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalPS]);

  // Click to jump smoothly to specific PS
  const handleSelectPS = (index: number) => {
    setActiveIndex(index);
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
  };

  const currentPS = problemStatements[activeIndex] || problemStatements[0];

  return (
    <section
      id="tracks"
      ref={containerRef}
      className="relative bg-cream-parchment border-t-2 border-gold-rich"
      style={{
        // 100vh per PS gives generous, buttery smooth scroll runway
        height: `${totalPS * 100}vh`,
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

          {/* Master-Detail 5+7 Fixed Showcase (Direct Stitch Design) */}
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

            {/* Right 7 Cols: Active PS Spotlight - Authentic Stitch Parchment Layout */}
            {/* Sized so Download PS, Category Tags, and Lock This PS are 100% visible immediately */}
            <div className="lg:col-span-7 bg-light-surface-container-lowest text-navy-ink border-2 border-gold-rich rounded-xl p-4 md:p-5 flex flex-col justify-between shadow-xl relative overflow-hidden">
              {/* Atmospheric Watermark Artwork in Background */}
              <div className="absolute -top-12 -right-12 w-64 h-64 opacity-12 pointer-events-none rounded-full overflow-hidden mix-blend-multiply blur-[0.5px]">
                <Image
                  src={currentPS.image}
                  alt={currentPS.alt}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>

              {/* 1. Header & Title Section */}
              <div className="relative z-10 flex flex-col gap-1.5 shrink-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-0.5 bg-dark-chocolate text-gold-highlight font-label text-label-xs uppercase rounded-sm border border-gold-rich/60 font-bold tracking-wider shadow-2xs">
                    {currentPS.code} · {currentPS.astraCode} · {currentPS.subtitle}
                  </span>
                  <div className="flex items-center gap-1.5 text-bronze-brown">
                    {getTrackIcon(currentPS.id)}
                    <span className="font-label text-label-xs uppercase font-bold hidden sm:inline">
                      {currentPS.domain}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-headline-sm md:text-headline-md text-dark-chocolate font-bold leading-tight mt-1">
                  {currentPS.heading}
                </h3>

                <p className="font-body text-xs md:text-sm text-navy-ink/90 leading-relaxed line-clamp-3">
                  {currentPS.brief}
                </p>
              </div>

              {/* 2. Key Technical Objectives Box (Sized to fit cleanly) */}
              <div className="relative z-10 bg-light-surface-container-low border border-gold-rich/60 rounded-lg p-2.5 md:p-3.5 my-auto shrink-0 shadow-2xs">
                <span className="font-label text-label-xs uppercase text-bronze-brown block mb-1.5 font-bold tracking-wider">
                  Key Technical Objectives &amp; Scope
                </span>
                <ul className="font-body text-xs md:text-label-sm text-navy-ink flex flex-col gap-1.5 font-medium">
                  {currentPS.challengePrompts.map((prompt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-saffron font-bold leading-none mt-0.5">•</span>
                      <span className="line-clamp-2">{prompt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Bottom Action Bar: Always 100% visible immediately without any internal scrolling */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-gold-rich/40 shrink-0">
                {/* Left: Download PS Button (Google Drive) + Tags (Stitch exact design) */}
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href={currentPS.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 md:px-4 py-2 bg-gradient-to-r from-gold-highlight to-gold-rich text-dark-chocolate hover:from-gold-rich hover:to-gold-highlight font-headline text-label-sm uppercase font-bold tracking-wider rounded-lg border border-gold-rich shadow-sm hover:shadow-md hover:scale-102 transition-all duration-200 group/btn shrink-0"
                    title="Download complete Problem Statement document from Google Drive"
                  >
                    <Download className="w-4 h-4 text-dark-chocolate group-hover/btn:translate-y-0.5 transition-transform" />
                    <span>Download PS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-dark-chocolate/80" />
                  </a>

                  {/* Category Tags (Exact design from Stitch reference) */}
                  <div className="flex flex-wrap gap-1.5">
                    {currentPS.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-light-surface-container border border-gold-rich/60 rounded-sm font-label text-label-sm text-bronze-brown font-semibold shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Lock This PS Button */}
                <a
                  href="#register"
                  onClick={onRegisterClick}
                  className="inline-flex items-center gap-1.5 px-4 md:px-5 py-2 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-label-sm uppercase tracking-wider font-bold hover:bg-bronze-brown hover:text-cream-parchment transition-all shadow-sm shrink-0"
                >
                  <span>Lock This PS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-highlight" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
