'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG, ProblemStatement } from '@/content/site';
import {
  Download,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Sparkles,
  CheckCircle2,
  BrainCircuit,
  ShieldCheck,
  Landmark,
  HeartPulse,
  Globe,
  ChevronRight,
  Layers,
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
        return <BrainCircuit className="w-5 h-5 text-gold-highlight" />;
      case 'ps-02':
        return <ShieldCheck className="w-5 h-5 text-gold-highlight" />;
      case 'ps-03':
        return <Landmark className="w-5 h-5 text-gold-highlight" />;
      case 'ps-04':
        return <HeartPulse className="w-5 h-5 text-gold-highlight" />;
      case 'ps-05':
      default:
        return <Globe className="w-5 h-5 text-gold-highlight" />;
    }
  };

  // Sticky scroll listener with requestAnimationFrame for 60/120fps smoothness
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
            // How far down the top of container has scrolled past viewport top
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
            setScrollProgress(progress);

            // Determine which PS is active
            const nextIndex = Math.min(
              totalPS - 1,
              Math.max(0, Math.floor(progress * totalPS))
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

  // Click to jump to specific PS
  const handleSelectPS = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const totalScrollDistance = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollDistance > 0) {
        const targetScroll = containerTop + (index / totalPS) * totalScrollDistance + 20;
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
        // Give enough scroll height so scrolling through smoothly transitions each PS
        height: `${totalPS * 85}vh`,
      }}
    >
      {/* Background Kurukshetra Soft Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-gold-highlight/20 via-saffron/10 to-transparent blur-3xl" />
      </div>

      {/* Sticky Screen Viewport Frame */}
      <div className="sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden py-3 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-4 md:gap-5 h-full max-h-[92vh] justify-between">
          {/* Section Header with Live Scroll Progress Indicator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gold-rich/40 pb-2.5 shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label text-label-xs uppercase text-bronze-brown font-bold tracking-widest">
                  Problem Statements · The Battlefields
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold-rich" />
                <span className="hidden sm:inline-block font-label text-label-xs text-saffron uppercase font-bold">
                  Fixed Scroll Active
                </span>
              </div>
              <h2 className="font-display text-headline-sm md:text-headline-md text-bronze-brown leading-tight">
                Tracks &amp; Problem Statements
              </h2>
            </div>

            {/* Segmented Stepper / Scroll Tracker */}
            <div className="flex items-center gap-3 bg-dark-chocolate/90 text-cream-parchment px-4 py-1.5 rounded-full border border-gold-rich/50 shadow-sm self-stretch sm:self-auto justify-between sm:justify-start">
              <span className="font-label text-label-xs uppercase text-gold-highlight font-bold tracking-wider">
                PS {String(activeIndex + 1).padStart(2, '0')} of {String(totalPS).padStart(2, '0')}
              </span>

              {/* Progress bars */}
              <div className="flex items-center gap-1.5">
                {problemStatements.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectPS(i)}
                    aria-label={`Jump to Problem Statement ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-6 bg-gold-highlight shadow-[0_0_8px_rgba(242,184,75,0.8)]'
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

          {/* Master-Detail Interactive Showcase (Fixed Screen) */}
          <div className="flex-1 min-h-0 bg-dark-chocolate text-cream-parchment border-2 border-gold-highlight rounded-xl p-4 md:p-6 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch overflow-hidden">
            {/* Left 5 Cols: PS Headings List (User scrolls or clicks to switch) */}
            <div
              className="lg:col-span-5 flex flex-col gap-2.5 overflow-y-auto pr-1 select-none custom-scrollbar max-h-[38vh] lg:max-h-full"
              role="tablist"
              aria-label="Select a problem statement"
            >
              <div className="hidden lg:flex items-center justify-between pb-1 px-1 border-b border-gold-rich/20">
                <span className="font-label text-label-xs uppercase text-gold-highlight/90 font-bold tracking-wider">
                  Challenge Headings
                </span>
                <span className="font-label text-label-xs uppercase text-cream-parchment/60 font-medium">
                  Scroll to Cycle
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
                    className={`w-full text-left rounded-xl p-3 md:p-3.5 flex items-start gap-3 transition-all duration-300 relative group overflow-hidden ${
                      isSelected
                        ? 'border-2 border-gold-highlight bg-gradient-to-r from-bronze-brown via-dark-chocolate to-bronze-brown/90 shadow-[0_4px_20px_rgba(242,184,75,0.3)] translate-x-1'
                        : 'border border-gold-rich/30 bg-dark-chocolate/80 hover:bg-bronze-brown/40 hover:border-gold-rich/60 opacity-80 hover:opacity-100'
                    }`}
                  >
                    {/* Active Left Glow Bar */}
                    {isSelected && (
                      <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-gold-highlight via-saffron to-gold-highlight" />
                    )}

                    {/* PS Code Pill & Thumbnail */}
                    <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-lg overflow-hidden border border-gold-highlight shrink-0 bg-dark-chocolate shadow-xs mt-0.5">
                      <Image
                        src={ps.image}
                        alt={ps.code}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-gold-highlight">
                          {ps.code.replace('PS ', '')}
                        </span>
                      </div>
                    </div>

                    {/* PS Headings and Domain */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`px-1.5 py-0.2 rounded font-mono text-[10px] uppercase font-bold tracking-wider ${
                            isSelected
                              ? 'bg-gold-highlight text-dark-chocolate'
                              : 'bg-cream-parchment/15 text-gold-highlight'
                          }`}
                        >
                          {ps.code}
                        </span>
                        <span className="font-label text-[11px] uppercase text-cream-parchment/80 truncate">
                          {ps.domain}
                        </span>
                      </div>

                      {/* The Heading of the PS (As Requested) */}
                      <h4
                        className={`font-headline text-xs md:text-sm leading-snug line-clamp-2 font-bold transition-colors ${
                          isSelected ? 'text-cream-parchment' : 'text-cream-parchment/90 group-hover:text-gold-highlight'
                        }`}
                      >
                        {ps.heading}
                      </h4>
                    </div>

                    {/* Indicator Icon */}
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

            {/* Right 7 Cols: Active PS Spotlight & Detailed Brief Stage */}
            <div className="lg:col-span-7 bg-light-surface-container-lowest text-navy-ink border-2 border-gold-rich rounded-xl overflow-hidden flex flex-col justify-between shadow-xl min-h-0">
              <div key={currentPS.id} className="flex-1 flex flex-col justify-between overflow-y-auto">
                {/* Visual Banner */}
                <div className="relative h-32 sm:h-40 md:h-44 w-full overflow-hidden border-b-2 border-gold-rich bg-dark-chocolate shrink-0">
                  <Image
                    src={currentPS.image}
                    alt={currentPS.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/90 via-dark-chocolate/40 to-transparent pointer-events-none" />

                  {/* Top Overlay Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="px-3 py-1 bg-dark-chocolate/90 text-gold-highlight font-label text-label-xs uppercase rounded-full font-bold border border-gold-rich/50 backdrop-blur-xs shadow-xs">
                      {currentPS.code} · {currentPS.astraCode} · {currentPS.domain}
                    </span>

                    <div className="w-8 h-8 rounded-full border border-gold-highlight bg-dark-chocolate/90 flex items-center justify-center shadow-xs">
                      {getTrackIcon(currentPS.id)}
                    </div>
                  </div>

                  {/* Subtitle in Banner */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-10">
                    <p className="font-label text-label-xs uppercase text-gold-highlight font-bold tracking-wider drop-shadow-xs">
                      {currentPS.subtitle}
                    </p>
                  </div>
                </div>

                {/* Brief Body Content */}
                <div className="p-4 md:p-5 flex-1 flex flex-col justify-between gap-3 md:gap-4 overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    {/* The Full PS Heading */}
                    <h3 className="font-display text-title-lg md:text-headline-sm text-dark-chocolate font-bold leading-tight">
                      {currentPS.heading}
                    </h3>

                    {/* Brief of the PS (How it was showing) */}
                    <p className="font-body text-xs md:text-body-sm text-navy-ink/90 leading-relaxed">
                      {currentPS.brief}
                    </p>
                  </div>

                  {/* Challenge Prompts Box */}
                  <div className="bg-light-surface-container-low border border-gold-rich/60 rounded-lg p-3">
                    <span className="font-label text-label-xs uppercase text-bronze-brown block mb-1 font-bold tracking-wider">
                      Key Technical Objectives &amp; Scope
                    </span>
                    <ul className="font-body text-xs md:text-label-sm text-navy-ink flex flex-col gap-1 font-medium">
                      {currentPS.challengePrompts.map((prompt, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-saffron font-bold leading-none mt-0.5">•</span>
                          <span>{prompt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Bar: Download PS Button (Redirects to Drive Link) + Lock/Register */}
                  <div className="pt-2.5 border-t border-gold-rich/40 flex flex-wrap items-center justify-between gap-3">
                    {/* In place of the old tags: Prominent "Download PS" Button redirecting to Drive */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        href={currentPS.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-highlight to-gold-rich text-dark-chocolate hover:from-gold-rich hover:to-gold-highlight font-headline text-label-sm uppercase font-bold tracking-wider rounded-lg border-2 border-gold-rich shadow-sm hover:shadow-md hover:scale-102 transition-all duration-200 group/btn"
                        title="Download complete Problem Statement document from Google Drive"
                      >
                        <Download className="w-4 h-4 text-dark-chocolate group-hover/btn:translate-y-0.5 transition-transform" />
                        <span>Download PS</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-dark-chocolate/80" />
                      </a>

                      {/* Category Tags */}
                      <div className="hidden sm:flex flex-wrap gap-1">
                        {currentPS.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-light-surface-container border border-gold-rich/50 rounded-sm font-label text-[11px] text-bronze-brown font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button: Register / Lock In PS */}
                    <a
                      href="#register"
                      onClick={onRegisterClick}
                      className="inline-flex items-center gap-1.5 px-4 md:px-5 py-2 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-label-sm uppercase tracking-wider font-bold hover:bg-bronze-brown hover:text-cream-parchment transition-all shadow-sm"
                    >
                      <span>Lock This PS</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-highlight" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
