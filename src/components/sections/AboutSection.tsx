'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import { GoldFrame } from '@/components/common/GoldFrame';
import {
  Calendar,
  MapPin,
  Clock,
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

        {/* Standout Battlefield Briefing (Dates, Venue, Mode & Key Details from Stitch) */}
        <div className="relative bg-light-surface-container-low border-2 border-gold-rich rounded-lg p-6 md:p-8 shadow-md overflow-hidden group/briefing">
          {/* Subtle Corner Accents (Kurukshetra Bronze / Gold Brackets) */}
          <div className="pointer-events-none absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-bronze-brown transition-colors duration-300 group-hover/briefing:border-gold-highlight" />
          <div className="pointer-events-none absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-bronze-brown transition-colors duration-300 group-hover/briefing:border-gold-highlight" />
          <div className="pointer-events-none absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-bronze-brown transition-colors duration-300 group-hover/briefing:border-gold-highlight" />
          <div className="pointer-events-none absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-bronze-brown transition-colors duration-300 group-hover/briefing:border-gold-highlight" />

          {/* Briefing Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-gold-rich/60">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-label-sm uppercase tracking-widest font-bold shadow-sm">
                Battlefield Briefing
              </span>
              <span className="font-body text-body-md text-bronze-brown font-bold hidden md:inline">
                Essential Mission Parameters
              </span>
            </div>
            <span className="font-label text-label-sm uppercase text-bronze-brown tracking-wider font-semibold">
              36-Hour National Hackathon · Bhubaneswar
            </span>
          </div>

          {/* Top Tier: 3 Heroic Pillars (Dates, Venue, Mode) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {/* Pillar 1: Dates */}
            <article className="group relative overflow-hidden bg-dark-chocolate text-cream-parchment border-2 border-gold-highlight rounded-md flex flex-col justify-between shadow-md hover:-translate-y-1.5 hover:shadow-[0_18px_36px_-6px_rgba(26,12,5,0.7),0_0_0_2px_#F2B84B,0_0_30px_rgba(242,184,75,0.45)] transition-all duration-300 cursor-default select-none">
              {/* Corner accents */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-gold-highlight/60 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-gold-highlight/60 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-gold-highlight/60 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-gold-highlight/60 group-hover:border-gold-highlight transition-colors duration-300" />

              {/* Sunlight Glint Shimmer Sweep on Hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-20"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(242, 184, 75, 0.3) 50%, transparent 80%)',
                }}
              />

              <div className="relative h-44 w-full overflow-hidden border-b-2 border-gold-highlight bg-dark-chocolate">
                <Image
                  src="/assets/briefing_dates.jpg"
                  alt="Royal brass sundial and palm-leaf scroll at golden hour"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4 z-10">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-label text-label-sm uppercase text-gold-highlight tracking-widest font-bold">
                      When · Dates
                    </span>
                    <Calendar className="w-5 h-5 text-gold-highlight transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_0_8px_rgba(242,184,75,0.8)]" />
                  </div>
                  <h3 className="font-display text-headline-md text-gold-highlight tabular-nums leading-tight group-hover:drop-shadow-[0_0_12px_rgba(242,184,75,0.5)] transition-all">
                    23–24 Jan 2027
                  </h3>
                  <p className="font-body text-body-md text-cream-parchment mt-1">
                    Saturday 09:00 AM to Sunday 09:00 PM
                  </p>
                </div>
                <div className="pt-3 border-t border-gold-rich/40 flex items-center justify-between">
                  <span className="font-label text-label-sm uppercase text-cream-parchment/90">
                    Weekend Sprint
                  </span>
                  <span className="px-2.5 py-0.5 bg-bronze-brown border border-gold-rich rounded-sm font-label text-label-sm text-gold-highlight font-bold shadow-xs">
                    36 Hours
                  </span>
                </div>
              </div>
            </article>

            {/* Pillar 2: Venue */}
            <article className="group relative overflow-hidden bg-light-surface-container-lowest border-2 border-gold-rich rounded-md flex flex-col justify-between shadow-sm hover:-translate-y-1.5 hover:bg-light-surface-container-low hover:border-gold-highlight hover:shadow-[0_16px_32px_-6px_rgba(107,58,30,0.22),0_0_0_1.5px_#D9961F,0_0_24px_rgba(242,184,75,0.32)] transition-all duration-300 cursor-default select-none">
              {/* Corner accents */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors duration-300" />

              {/* Sunlight Glint Shimmer Sweep on Hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-20"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(242, 184, 75, 0.3) 50%, transparent 80%)',
                }}
              />

              <div className="relative h-44 w-full overflow-hidden border-b-2 border-gold-rich bg-light-surface-container">
                <Image
                  src="/assets/briefing_venue.jpg"
                  alt="GITA Autonomous College campus blended with Kalinga sandstone arches at golden hour"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4 z-10">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest font-bold">
                      Where · Venue
                    </span>
                    <MapPin className="w-5 h-5 text-bronze-brown transition-all duration-300 group-hover:text-gold-rich group-hover:scale-115 group-hover:drop-shadow-[0_0_8px_rgba(217,150,31,0.6)]" />
                  </div>
                  <h3 className="font-display text-headline-md text-dark-chocolate leading-tight">
                    GITA Autonomous College
                  </h3>
                  <p className="font-body text-body-md text-navy-ink mt-1">
                    Badaraghunathpur, Bhubaneswar, Odisha
                  </p>
                </div>
                <div className="pt-3 border-t border-gold-rich/40 flex items-center justify-between">
                  <span className="font-label text-label-sm uppercase text-bronze-brown font-medium">
                    In Assoc. with BPUT
                  </span>
                  <span className="px-2.5 py-0.5 bg-light-surface-container border border-gold-rich/70 rounded-sm font-label text-label-sm text-dark-chocolate font-bold">
                    Main Campus
                  </span>
                </div>
              </div>
            </article>

            {/* Pillar 3: Mode */}
            <article className="group relative overflow-hidden bg-light-surface-container-lowest border-2 border-gold-rich rounded-md flex flex-col justify-between shadow-sm hover:-translate-y-1.5 hover:bg-light-surface-container-low hover:border-gold-highlight hover:shadow-[0_16px_32px_-6px_rgba(107,58,30,0.22),0_0_0_1.5px_#D9961F,0_0_24px_rgba(242,184,75,0.32)] transition-all duration-300 cursor-default select-none">
              {/* Corner accents */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors duration-300" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors duration-300" />

              {/* Sunlight Glint Shimmer Sweep on Hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-20"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(242, 184, 75, 0.3) 50%, transparent 80%)',
                }}
              />

              <div className="relative h-44 w-full overflow-hidden border-b-2 border-gold-rich bg-light-surface-container">
                <Image
                  src="/assets/briefing_mode.jpg"
                  alt="Student engineers collaborating inside a sunlit sandstone pavilion"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4 z-10">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest font-bold">
                      How · Mode
                    </span>
                    <Clock className="w-5 h-5 text-bronze-brown transition-all duration-300 group-hover:text-gold-rich group-hover:scale-115 group-hover:drop-shadow-[0_0_8px_rgba(217,150,31,0.6)]" />
                  </div>
                  <h3 className="font-display text-headline-md text-dark-chocolate leading-tight">
                    Offline · In-Person
                  </h3>
                  <p className="font-body text-body-md text-navy-ink mt-1">
                    Non-stop on-campus build with live jury demos
                  </p>
                </div>
                <div className="pt-3 border-t border-gold-rich/40 flex items-center justify-between">
                  <span className="font-label text-label-sm uppercase text-bronze-brown font-medium">
                    Meals &amp; Mentors
                  </span>
                  <span className="px-2.5 py-0.5 bg-light-surface-container border border-gold-rich/70 rounded-sm font-label text-label-sm text-dark-chocolate font-bold">
                    Full Access
                  </span>
                </div>
              </div>
            </article>
          </div>

          {/* Bottom Tier: 3 Supporting Command Cards (Team Size, Prize Pool, Eligibility) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Squad Size */}
            <article className="group relative overflow-hidden bg-light-surface-container-lowest border border-gold-rich rounded-md p-4 flex items-center gap-4 shadow-sm hover:-translate-y-1 hover:border-gold-highlight hover:shadow-[0_12px_24px_-4px_rgba(107,58,30,0.2),0_0_16px_rgba(242,184,75,0.25)] transition-all duration-300 cursor-default select-none">
              {/* Sunlight Glint Shimmer Sweep */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-20"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(242, 184, 75, 0.3) 50%, transparent 80%)',
                }}
              />
              <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden border-2 border-gold-rich shadow-sm bg-light-surface-container">
                <Image
                  src="/assets/briefing_squad.jpg"
                  alt="Four heroic squad silhouettes with golden chakra crest"
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="z-10">
                <span className="font-label text-label-sm uppercase text-bronze-brown block font-bold">
                  Squad Size
                </span>
                <span className="font-title text-title-lg text-dark-chocolate block group-hover:text-bronze-brown transition-colors font-bold">
                  2–4 Members
                </span>
                <span className="font-body text-label-sm text-navy-ink font-medium">
                  Inter-college teams allowed
                </span>
              </div>
            </article>

            {/* Prize Pool */}
            <article className="group relative overflow-hidden bg-dark-chocolate border-2 border-gold-highlight rounded-md p-4 flex items-center gap-4 shadow-sm hover:-translate-y-1 hover:shadow-[0_14px_28px_-4px_rgba(26,12,5,0.7),0_0_0_1.5px_#F2B84B,0_0_20px_rgba(242,184,75,0.35)] transition-all duration-300 cursor-default select-none">
              {/* Sunlight Glint Shimmer Sweep */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-20"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(242, 184, 75, 0.3) 50%, transparent 80%)',
                }}
              />
              <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden border-2 border-gold-highlight shadow-sm bg-bronze-brown">
                <Image
                  src="/assets/briefing_prize.jpg"
                  alt="Ornate golden trophy chalice radiating warm amber light"
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="z-10">
                <span className="font-label text-label-sm uppercase text-cream-parchment block font-bold">
                  Prize Pool
                </span>
                <span className="font-title text-title-lg text-gold-highlight tabular-nums block font-bold group-hover:drop-shadow-[0_0_8px_rgba(242,184,75,0.6)] transition-all">
                  {SITE_CONFIG.METRICS.PRIZE_POOL_TOTAL}
                </span>
                <span className="font-body text-label-sm text-cream-parchment/90">
                  Cash prizes, swag &amp; goodies
                </span>
              </div>
            </article>

            {/* Eligibility */}
            <article className="group relative overflow-hidden bg-light-surface-container-lowest border border-gold-rich rounded-md p-4 flex items-center gap-4 shadow-sm hover:-translate-y-1 hover:border-gold-highlight hover:shadow-[0_12px_24px_-4px_rgba(107,58,30,0.2),0_0_16px_rgba(242,184,75,0.25)] transition-all duration-300 cursor-default select-none">
              {/* Sunlight Glint Shimmer Sweep */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-20"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 20%, rgba(242, 184, 75, 0.3) 50%, transparent 80%)',
                }}
              />
              <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden border-2 border-gold-rich shadow-sm bg-light-surface-container">
                <Image
                  src="/assets/briefing_eligibility.jpg"
                  alt="Golden graduation scroll beside a glowing brass diya lamp"
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="z-10">
                <span className="font-label text-label-sm uppercase text-bronze-brown block font-bold">
                  Eligibility
                </span>
                <span className="font-title text-title-lg text-dark-chocolate block group-hover:text-bronze-brown transition-colors font-bold">
                  UG / PG India
                </span>
                <span className="font-body text-label-sm text-navy-ink font-medium">
                  Open to all engineering branches
                </span>
              </div>
            </article>
          </div>
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
