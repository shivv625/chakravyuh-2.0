'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import { GoldFrame } from '@/components/common/GoldFrame';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Trophy,
  GraduationCap,
  BrainCircuit,
  ShieldCheck,
  Landmark,
  HeartPulse,
  Globe,
  Sparkles,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [statsCounted, setStatsCounted] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsCounted(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const infoPlaques = [
    {
      icon: <Calendar className="w-6 h-6 text-gold-highlight" />,
      label: 'Dates',
      value: '23–24 Jan 2027',
      subtext: 'Sat–Sun Sprint',
      isHighlight: false,
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-highlight" />,
      label: 'Venue',
      value: 'GITA, BBSR',
      subtext: 'Odisha Campus',
      isHighlight: false,
    },
    {
      icon: <Users className="w-6 h-6 text-gold-highlight" />,
      label: 'Team Size',
      value: '2–4 Members',
      subtext: 'Inter-College OK',
      isHighlight: false,
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-highlight" />,
      label: 'Mode',
      value: 'Offline · 36h',
      subtext: 'Non-Stop Build',
      isHighlight: false,
    },
    {
      icon: <Trophy className="w-6 h-6 text-gold-highlight" />,
      label: 'Prize Pool',
      value: SITE_CONFIG.METRICS.PRIZE_POOL_TOTAL,
      subtext: 'Cash & Swag',
      isHighlight: true,
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-gold-highlight" />,
      label: 'Eligibility',
      value: 'UG / PG India',
      subtext: 'All Branches',
      isHighlight: false,
    },
  ];

  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-bronze-brown" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-bronze-brown" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-bronze-brown" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-bronze-brown" />;
      case 'Globe':
      default:
        return <Globe className="w-6 h-6 text-bronze-brown" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-cream-parchment border-t-2 border-gold-rich">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-14">
        {/* Story + Arched Arjuna Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-rich" />
              <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest font-bold">
                The Legend &amp; The Challenge
              </span>
            </div>

            <h2 className="font-display text-display-md-mobile md:text-display-md text-bronze-brown text-balance leading-tight">
              Seven Rings. Thirty-Six Hours. One Breakthrough.
            </h2>

            <p className="font-editorial text-body-lg text-navy-ink max-w-prose text-pretty">
              In the Mahabharata, the Chakravyuh was a legendary seven-ring spiral labyrinth designed to test tactical mastery, courage, and composure under unrelenting pressure. Chakravyuh 2.0 resurrects that ancient lore on the modern battlefield of software and hardware engineering at GITA Autonomous College, Bhubaneswar—challenging India&apos;s sharpest minds to breach seven progressive gates from raw concept to live deployment.
            </p>

            <p className="font-body text-body-md text-navy-ink max-w-prose text-pretty">
              Conducted in proud association with Biju Patnaik University of Technology (BPUT), Odisha, this national battleground brings together 500+ student innovators for 36 non-stop hours of mentorship, rapid prototyping, and high-stakes jury defense.
            </p>

            {/* Stats Strip */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-5 border-t border-gold-rich/60"
            >
              <div>
                <p className="font-headline text-headline-md md:text-headline-lg text-bronze-brown tabular-nums font-bold">
                  {statsCounted ? '500+' : '0'}
                </p>
                <p className="font-label text-label-sm uppercase text-bronze-brown font-semibold tracking-wider">
                  Participants
                </p>
              </div>
              <div>
                <p className="font-headline text-headline-md md:text-headline-lg text-bronze-brown tabular-nums font-bold">
                  {statsCounted ? '125' : '0'}
                </p>
                <p className="font-label text-label-sm uppercase text-bronze-brown font-semibold tracking-wider">
                  Teams
                </p>
              </div>
              <div>
                <p className="font-headline text-headline-md md:text-headline-lg text-bronze-brown tabular-nums font-bold">
                  {statsCounted ? '₹1.5L' : '0'}
                </p>
                <p className="font-label text-label-sm uppercase text-bronze-brown font-semibold tracking-wider">
                  Prizes
                </p>
              </div>
              <div>
                <p className="font-headline text-headline-md md:text-headline-lg text-bronze-brown tabular-nums font-bold">
                  {statsCounted ? '40+' : '0'}
                </p>
                <p className="font-label text-label-sm uppercase text-bronze-brown font-semibold tracking-wider">
                  Colleges
                </p>
              </div>
            </div>
          </div>

          {/* Arched Arjuna Bow Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-t-full border-4 border-gold-rich p-2 bg-light-surface-container-low shadow-xl">
              <div className="rounded-t-full overflow-hidden border border-bronze-brown relative h-96">
                <Image
                  src="/assets/arjuna_bow_arched.jpg"
                  alt="Arjuna drawing his golden bow toward the sunlit sky"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="py-3 text-center bg-dark-chocolate text-gold-highlight">
                <span className="font-label text-label-sm uppercase tracking-widest font-bold">
                  Aim True · Build Fearlessly
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Ornate Info Plaques */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {infoPlaques.map((plaque) => (
            <article
              key={plaque.label}
              className={`border-2 rounded-md p-5 flex flex-col items-center text-center justify-between gap-3 shadow-sm hover:-translate-y-1 transition-transform duration-card-lift ${
                plaque.isHighlight
                  ? 'bg-dark-chocolate border-gold-highlight text-cream-parchment shadow-md'
                  : 'bg-light-surface-container-lowest border-gold-rich text-navy-ink'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-sm ${
                  plaque.isHighlight
                    ? 'bg-bronze-brown border-gold-highlight'
                    : 'bg-dark-chocolate border-gold-rich'
                }`}
              >
                {plaque.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className={`font-label text-label-sm uppercase tracking-wider ${
                    plaque.isHighlight ? 'text-cream-parchment' : 'text-bronze-brown'
                  }`}
                >
                  {plaque.label}
                </span>
                <span
                  className={`font-title text-body-md font-bold tabular-nums ${
                    plaque.isHighlight ? 'text-gold-highlight' : 'text-dark-chocolate'
                  }`}
                >
                  {plaque.value}
                </span>
                <span
                  className={`font-body text-label-sm ${
                    plaque.isHighlight ? 'text-cream-parchment/80' : 'text-navy-ink/80'
                  }`}
                >
                  {plaque.subtext}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Tracks / Domains Section */}
        <div id="tracks" className="flex flex-col gap-6 pt-4">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gold-rich/50 pb-3">
            <div>
              <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest font-bold">
                Choose Your Astra
              </span>
              <h3 className="font-headline text-headline-md text-bronze-brown">
                Tracks &amp; Domains
              </h3>
            </div>
            <span className="px-4 py-1 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-label-sm uppercase font-bold">
              5 Battlefields
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {SITE_CONFIG.TRACKS.map((track) => (
              <a
                key={track.id}
                href="#register"
                className="group bg-light-surface-container-lowest border-2 border-gold-rich rounded-md p-5 flex flex-col justify-between gap-4 shadow-sm hover:bg-light-surface-container-low hover:-translate-y-1 transition-all duration-card-lift"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-dark-chocolate text-gold-highlight font-label text-label-sm uppercase rounded-sm font-bold">
                      {track.code}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-bronze-brown bg-cream-parchment flex items-center justify-center">
                      {getTrackIcon(track.iconName)}
                    </div>
                  </div>
                  <h4 className="font-title text-title-lg text-dark-chocolate group-hover:text-bronze-brown transition-colors">
                    {track.title}
                  </h4>
                  <p className="font-body text-body-md text-navy-ink">
                    {track.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gold-rich/40">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-light-surface-container border border-gold-rich/60 rounded-sm font-label text-label-sm text-bronze-brown"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
