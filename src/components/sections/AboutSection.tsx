'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import { GoldFrame } from '@/components/common/GoldFrame';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Trophy,
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
              Seven Rings. Twenty-Four Hours. One Breakthrough.
            </h2>

            <p className="font-editorial text-body-lg text-navy-ink max-w-prose text-pretty">
              In the Mahabharata, the Chakravyuh was a legendary seven-ring spiral labyrinth designed to test tactical mastery, courage, and composure under unrelenting pressure. Chakravyuh 2.0 resurrects that ancient lore on the modern battlefield of software and hardware engineering at GITA Autonomous College, Bhubaneswar—challenging India&apos;s sharpest minds to breach seven progressive gates from raw concept to live deployment.
            </p>

            <p className="font-body text-body-md text-navy-ink max-w-prose text-pretty">
              Conducted in proud association with Biju Patnaik University of Technology (BPUT), Odisha, this national battleground brings together 500+ student innovators for 24 non-stop hours of mentorship, rapid prototyping, and high-stakes jury defense.
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
                  {statsCounted ? '₹1L' : '0'}
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

        {/* Standout Battlefield Briefing — Asymmetric Kurukshetra Command Bento from Stitch */}
        <div className="relative bg-light-surface-container-low border-2 border-gold-rich rounded-xl p-5 md:p-8 shadow-lg overflow-hidden group/briefing">
          {/* Subtle Corner Accents */}
          <div className="pointer-events-none absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-bronze-brown transition-colors duration-300 group-hover/briefing:border-gold-highlight" />
          <div className="pointer-events-none absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-bronze-brown transition-colors duration-300 group-hover/briefing:border-gold-highlight" />
          <div className="pointer-events-none absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-bronze-brown transition-colors duration-300 group-hover/briefing:border-gold-highlight" />
          <div className="pointer-events-none absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-bronze-brown transition-colors duration-300 group-hover/briefing:border-gold-highlight" />

          {/* Briefing Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-gold-rich/60">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-label-sm uppercase tracking-widest font-bold shadow-sm">
                Battlefield Briefing
              </span>
              <span className="font-body text-body-md text-bronze-brown font-bold hidden md:inline">
                Essential Mission Parameters
              </span>
            </div>
            <span className="font-label text-label-sm uppercase text-bronze-brown tracking-wider font-semibold">
              24-Hour National Hackathon · Bhubaneswar
            </span>
          </div>

          {/* Bento Grid: Row 1 (5-Col Prize Spotlight + 7-Col Stacked Dates & Venue) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
            {/* Hero Spotlight Card: Prize Pool (5 cols) */}
            <article className="lg:col-span-5 relative min-h-[300px] lg:min-h-[330px] rounded-xl overflow-hidden border-2 border-gold-highlight shadow-xl flex flex-col justify-between p-6 bg-dark-chocolate group cursor-default select-none">
              <Image
                src="/assets/briefing_prize.jpg"
                alt="Ornate golden trophy chalice radiating warm amber light"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-card-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate via-dark-chocolate/70 to-dark-chocolate/25 pointer-events-none" />

              {/* Top Pill */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="px-3 py-1 bg-saffron text-dark-chocolate font-label text-label-sm uppercase font-bold rounded-full shadow">
                  Grand Treasury
                </span>
                <span className="w-9 h-9 rounded-full bg-dark-chocolate/80 border border-gold-highlight flex items-center justify-center text-gold-highlight shadow">
                  <Trophy className="w-5 h-5 text-gold-highlight" />
                </span>
              </div>

              {/* Bottom Prize Focal Point */}
              <div className="relative z-10 flex flex-col gap-1.5 pt-16">
                <span className="font-label text-label-sm uppercase text-gold-highlight tracking-widest font-bold">
                  Total Prize Pool
                </span>
                <h3 className="font-display text-display-md-mobile md:text-display-md text-gold-highlight tabular-nums leading-none font-bold">
                  {SITE_CONFIG.METRICS.PRIZE_POOL_TOTAL}
                </h3>
                <p className="font-body text-body-md text-cream-parchment/95 mt-1">
                  Cash rewards, winner trophies, exclusive swag &amp; BPUT honors.
                </p>
              </div>
            </article>

            {/* Right Stack: Dates (Image Left, Dark) + Venue (Image Right, Parchment) (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Dates Card (Horizontal Split: Image Left) */}
              <article className="flex-1 bg-dark-chocolate text-cream-parchment border-2 border-gold-rich rounded-xl overflow-hidden shadow-md hover:-translate-y-0.5 transition-transform duration-card-lift flex flex-col sm:flex-row cursor-default select-none">
                <div className="relative sm:w-44 md:w-48 h-40 sm:h-auto shrink-0 overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 border-gold-rich">
                  <Image
                    src="/assets/briefing_dates.jpg"
                    alt="Royal brass sundial and palm-leaf scroll at golden hour"
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-1 min-w-0 flex flex-col justify-between gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-label text-label-sm uppercase text-gold-highlight tracking-widest font-bold">
                      When · Dates
                    </span>
                    <span className="px-2.5 py-0.5 bg-bronze-brown border border-gold-rich rounded-sm font-label text-label-sm text-gold-highlight font-bold">
                      24 Hours
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-headline-md text-gold-highlight tabular-nums leading-tight font-bold">
                      2nd–3rd Feb
                    </h3>
                    <p className="font-body text-body-md text-cream-parchment/95 mt-1">
                      24-Hour Non-Stop Hackathon
                    </p>
                  </div>
                </div>
              </article>

              {/* Venue Card (Full-Bleed Panoramic Campus Banner) */}
              <article className="flex-1 relative rounded-xl overflow-hidden border-2 border-gold-highlight shadow-md hover:-translate-y-0.5 transition-transform duration-card-lift bg-dark-chocolate p-5 flex flex-col justify-between gap-3 group cursor-default select-none">
                <Image
                  src="/assets/briefing_venue.jpg"
                  alt="GITA Autonomous College campus blended with Kalinga sandstone arches at golden hour"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-card-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-chocolate/95 via-dark-chocolate/80 to-dark-chocolate/45 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="font-label text-label-sm uppercase text-gold-highlight tracking-widest font-bold">
                    Where · Venue
                  </span>
                  <span className="px-2.5 py-0.5 bg-saffron text-dark-chocolate font-bold rounded-sm font-label text-label-sm">
                    Main Campus
                  </span>
                </div>
                <div className="relative z-10 min-w-0">
                  <h3 className="font-display text-headline-md text-cream-parchment leading-tight font-bold">
                    GITA Autonomous College
                  </h3>
                  <p className="font-body text-body-md text-cream-parchment/95 mt-1">
                    Badaraghunathpur, Bhubaneswar · In Assoc. with BPUT
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Bento Grid: Row 2 (5-Col Full-Bleed Mode + 3-Col Squad Medallion + 4-Col Eligibility Plaque) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Mode Card (Full-Bleed Image Banner, 5 cols) */}
            <article className="md:col-span-5 relative min-h-[155px] rounded-xl overflow-hidden border-2 border-gold-rich shadow-md p-5 flex flex-col justify-between bg-dark-chocolate group cursor-default select-none">
              <Image
                src="/assets/briefing_mode.jpg"
                alt="Student engineers collaborating inside a sunlit sandstone pavilion"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-card-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-chocolate/95 via-dark-chocolate/80 to-dark-chocolate/55 pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="font-label text-label-sm uppercase text-gold-highlight tracking-widest font-bold">
                  How · Mode
                </span>
                <span className="px-2.5 py-0.5 bg-saffron text-dark-chocolate font-label text-label-sm uppercase font-bold rounded-sm">
                  Full Access
                </span>
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="font-display text-title-lg text-cream-parchment leading-tight font-bold">
                  Offline · In-Person
                </h3>
                <p className="font-body text-label-sm text-cream-parchment/90 mt-1">
                  Non-stop on-campus build, meals &amp; live jury demos
                </p>
              </div>
            </article>

            {/* Squad Size Card (Bronze-Gold Royal Plaque + Arched Medallion, 3 cols) */}
            <article className="md:col-span-3 bg-gradient-to-br from-bronze-brown to-dark-chocolate text-cream-parchment border-2 border-gold-highlight rounded-xl p-4 flex items-center gap-3.5 shadow-md hover:-translate-y-0.5 transition-transform duration-card-lift cursor-default select-none">
              <div className="relative w-16 h-20 shrink-0 rounded-t-full rounded-b-md overflow-hidden border-2 border-gold-highlight shadow-sm">
                <Image
                  src="/assets/briefing_squad.jpg"
                  alt="Four heroic squad silhouettes with golden chakra crest"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="font-label text-label-sm uppercase text-gold-highlight block font-bold">
                  Squad Size
                </span>
                <span className="font-display text-title-lg text-cream-parchment block leading-tight font-bold">
                  3–5 Members
                </span>
                <span className="font-body text-label-sm text-cream-parchment/90 block mt-0.5 font-medium">
                  No compulsory girls participant
                </span>
              </div>
            </article>

            {/* Eligibility Card (Dark Plaque + Framed Scroll, 4 cols) */}
            <article className="md:col-span-4 bg-dark-chocolate text-cream-parchment border-2 border-gold-rich rounded-xl p-4 flex items-center gap-4 shadow-md hover:-translate-y-0.5 transition-transform duration-card-lift cursor-default select-none">
              <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 border-gold-highlight shadow-sm">
                <Image
                  src="/assets/briefing_eligibility.jpg"
                  alt="Golden graduation scroll beside a glowing brass diya lamp"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="font-label text-label-sm uppercase text-gold-highlight block font-bold">
                  Eligibility
                </span>
                <span className="font-display text-title-lg text-cream-parchment block leading-tight font-bold">
                  All Students
                </span>
                <span className="font-body text-label-sm text-cream-parchment/90 block mt-0.5 font-medium">
                  Open for all college students
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
