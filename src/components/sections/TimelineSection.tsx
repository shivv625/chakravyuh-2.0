'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG, GateStage } from '@/content/site';
import {
  Calendar,
  Hourglass,
  CheckCircle,
  Rocket,
  Users,
  Gavel,
  Trophy,
} from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedGate, setSelectedGate] = useState<number>(0);
  const now = new Date().getTime();

  const getGateIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-gold-highlight" />;
      case 'Hourglass':
        return <Hourglass className="w-5 h-5 text-saffron" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-sky-light" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-gold-highlight" />;
      case 'Users':
        return <Users className="w-5 h-5 text-cream-parchment" />;
      case 'Gavel':
        return <Gavel className="w-5 h-5 text-saffron" />;
      case 'Trophy':
      default:
        return <Trophy className="w-5 h-5 text-gold-highlight" />;
    }
  };

  return (
    <section
      id="timeline"
      className="relative py-16 md:py-24 bg-dark-chocolate text-cream-parchment border-t-4 border-saffron overflow-hidden"
    >
      {/* Background Kurukshetra Artwork */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <Image
          src="/assets/roadmap_chakravyuh_bg.jpg"
          alt="Chakravyuh spiral formation backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-chocolate/90 via-dark-chocolate/80 to-dark-chocolate/95 pointer-events-none" />

      {/* Faint Concentric Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15"
        aria-hidden="true"
      >
        <svg
          className="w-[760px] h-[760px] text-gold-rich animate-chakra"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="200" cy="200" r="190" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="155" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="85" strokeWidth="1" />
          <circle cx="200" cy="200" r="50" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <span className="px-4 py-1 bg-bronze-brown/80 border border-gold-rich ribbon-pill font-label text-label-sm uppercase text-gold-highlight tracking-widest font-bold">
            Stage-by-Stage Progression
          </span>
          <h2 className="font-display text-display-md-mobile md:text-display-md text-gold-highlight uppercase">
            The Seven Gates
          </h2>
          <p className="font-body text-body-md text-cream-parchment max-w-xl text-pretty">
            Navigate each concentric ring of the Chakravyuh—from squad registration to the Grand Finale at GITA Autonomous College.
          </p>
        </div>

        {/* Circular Gate Interactive Selector (Desktop) */}
        <div className="hidden lg:flex items-center justify-center gap-2 p-3 bg-bronze-brown/40 border border-gold-rich/50 rounded-full max-w-2xl mx-auto backdrop-blur-sm">
          {SITE_CONFIG.TIMELINE_GATES.map((gate, index) => {
            const isSelected = selectedGate === index;
            const isPast = new Date(gate.timestamp).getTime() < now;
            return (
              <button
                key={gate.id}
                onClick={() => setSelectedGate(index)}
                className={`px-3 py-1.5 rounded-full font-label text-label-sm uppercase transition-all duration-state-change ${
                  isSelected
                    ? 'bg-gold-highlight text-dark-chocolate font-bold shadow-md scale-105'
                    : isPast
                    ? 'bg-dark-chocolate/80 text-cream-parchment/60 hover:text-gold-highlight'
                    : 'bg-dark-chocolate text-cream-parchment hover:text-gold-highlight'
                }`}
              >
                {gate.gateNumber}
              </button>
            );
          })}
        </div>

        {/* Seven Gates Zig-Zag Ornate Plaques */}
        <div className="flex flex-col gap-6 md:gap-0">
          {SITE_CONFIG.TIMELINE_GATES.map((gate, idx) => {
            const isLeft = idx % 2 === 0;
            const isLast = idx === SITE_CONFIG.TIMELINE_GATES.length - 1;
            const isPast = new Date(gate.timestamp).getTime() < now;
            const isLive = gate.status === 'live';

            return (
              <React.Fragment key={gate.id}>
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <article
                    className={`relative w-full max-w-md bg-dark-chocolate/95 border-2 rounded-lg px-7 pt-9 pb-6 text-center flex flex-col items-center gap-2.5 transition-all duration-card-lift hover:-translate-y-1 ${
                      isLive
                        ? 'border-gold-highlight stage-plaque-active ring-1 ring-gold-highlight/50'
                        : isPast
                        ? 'border-gold-rich/40 opacity-80'
                        : 'border-gold-rich stage-plaque'
                    }`}
                  >
                    {/* Top Circular Gate Crest Icon */}
                    <div
                      className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 bg-dark-chocolate flex items-center justify-center shadow-md ${
                        isLive ? 'border-gold-highlight' : 'border-gold-rich'
                      }`}
                    >
                      {getGateIcon(gate.icon)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-label text-label-sm uppercase text-gold-highlight font-bold">
                        {gate.gateNumber}
                      </span>
                      {isLive && (
                        <span className="px-2.5 py-0.5 rounded-full bg-gold-highlight text-dark-chocolate font-label text-label-sm uppercase font-bold animate-pulse">
                          Live Now
                        </span>
                      )}
                      {isPast && !isLive && (
                        <span className="px-2 py-0.5 rounded-full bg-bronze-brown/60 text-cream-parchment/60 font-label text-label-sm uppercase">
                          Cleared
                        </span>
                      )}
                    </div>

                    <h3 className="font-headline text-title-lg text-cream-parchment font-bold">
                      {gate.title}
                    </h3>

                    <span className="px-4 py-1 rounded-full bg-bronze-brown/70 border border-gold-rich/80 font-label text-label-sm text-gold-highlight tabular-nums">
                      {gate.datetime}
                    </span>

                    <p className="font-body text-body-md text-cream-parchment text-balance mt-1">
                      {gate.description}
                    </p>
                  </article>
                </div>

                {/* S-curve Connector Line between stages on Desktop */}
                {!isLast && (
                  <div
                    className="hidden md:flex justify-center -my-2 pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg
                      className={`w-72 h-16 ${
                        idx % 2 === 0 ? 'text-gold-highlight' : 'text-saffron'
                      }`}
                      viewBox="0 0 280 70"
                      fill="none"
                    >
                      {idx % 2 === 0 ? (
                        <>
                          <path
                            d="M24 4 C 24 45, 256 25, 256 66"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                          />
                          <circle cx="24" cy="4" r="4.5" fill="currentColor" />
                          <circle cx="256" cy="66" r="4.5" fill="currentColor" />
                        </>
                      ) : (
                        <>
                          <path
                            d="M256 4 C 256 45, 24 25, 24 66"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                          />
                          <circle cx="256" cy="4" r="4.5" fill="currentColor" />
                          <circle cx="24" cy="66" r="4.5" fill="currentColor" />
                        </>
                      )}
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
