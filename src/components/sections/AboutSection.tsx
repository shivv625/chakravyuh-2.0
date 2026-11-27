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
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [statsCounted, setStatsCounted] = useState(false);
  const [activeAstra, setActiveAstra] = useState<'aiml' | 'web3' | 'fintech' | 'healthtech' | 'open'>('aiml');
  const statsRef = useRef<HTMLDivElement | null>(null);

  const astraTracks = [
    {
      id: 'aiml' as const,
      code: 'Astra 01',
      title: 'AI & ML',
      fullTitle: 'AI & Machine Learning',
      subtitle: 'Brahmastra of Intelligence',
      shortTags: 'GenAI · Vision · Agents',
      description:
        'Build applied generative AI, computer vision, and autonomous multi-agent workflows engineered for latency, accuracy, and real-world deployment.',
      prompts: [
        'Vernacular Odia & Hindi voice-first citizen service agents',
        'Real-time edge vision for campus & industrial safety',
        'Automated code & documentation copilots for SMEs',
      ],
      tags: ['GenAI', 'Vision', 'Agents'],
      image: '/assets/track_aiml.jpg',
      alt: 'Luminous golden chakra neural constellation above an astrolabe',
      icon: <BrainCircuit className="w-5 h-5 text-bronze-brown" />,
    },
    {
      id: 'web3' as const,
      code: 'Astra 02',
      title: 'Web3 & Trust',
      fullTitle: 'Web3 & Digital Trust',
      subtitle: 'Sudarshana of Trust',
      shortTags: 'DeFi · Identity · ZK',
      description:
        'Architect decentralized identity, zero-knowledge verification, and transparent public-good rails that eliminate single points of failure.',
      prompts: [
        'Tamper-proof academic & hackathon credential verification',
        'Privacy-preserving ZK-proofs for student KYC',
        'Transparent supply-chain provenance for local artisans',
      ],
      tags: ['DeFi', 'Identity', 'ZK'],
      image: '/assets/track_web3.jpg',
      alt: 'Golden interlocking shield and celestial seal over sandstone pillars',
      icon: <ShieldCheck className="w-5 h-5 text-bronze-brown" />,
    },
    {
      id: 'fintech' as const,
      code: 'Astra 03',
      title: 'FinTech',
      fullTitle: 'FinTech & Inclusion',
      subtitle: 'Kubera Treasury',
      shortTags: 'Payments · Fraud · Credit',
      description:
        "Create UPI-scale payment experiences, real-time fraud defense, and micro-credit scoring tools tailored for Bharat's next billion users.",
      prompts: [
        'Real-time UPI phishing & mule-account detection',
        'Alternative credit scoring for rural micro-merchants',
        'Automated student expense & scholarship budgeting',
      ],
      tags: ['Payments', 'Security', 'Credit'],
      image: '/assets/track_fintech.jpg',
      alt: 'Royal treasury scale balanced with golden coins and sacred geometry',
      icon: <Landmark className="w-5 h-5 text-bronze-brown" />,
    },
    {
      id: 'healthtech' as const,
      code: 'Astra 04',
      title: 'HealthTech',
      fullTitle: 'HealthTech & MedTech',
      subtitle: 'Sanjeevani',
      shortTags: 'Triage · MedTech · Diagnostics',
      description:
        'Design accessible rural diagnostics, smart emergency triage, and low-cost assistive medical tools that bridge clinics and communities.',
      prompts: [
        'Offline-capable primary health worker triage assistant',
        'Low-cost wearable vitals alert for elderly care',
        'Multilingual prescription & dosage companion',
      ],
      tags: ['Triage', 'MedTech', 'Diagnostics'],
      image: '/assets/track_healthtech.jpg',
      alt: 'Glowing Sanjeevani herb beside a radiant brass healing vessel',
      icon: <HeartPulse className="w-5 h-5 text-bronze-brown" />,
    },
    {
      id: 'open' as const,
      code: 'Astra 05',
      title: 'Open Track',
      fullTitle: 'Open Innovation & Smart Odisha',
      subtitle: 'Vishwakarma Open',
      shortTags: 'AgriTech · Smart Odisha · IoT',
      description:
        'Tackle AgriTech, disaster resilience, IoT hardware, clean energy, or campus sustainability—bring your boldest original idea to life.',
      prompts: [
        'Coastal cyclone early-warning & mesh relay network',
        'Smart soil & crop-disease advisory for Odisha farmers',
        'Campus solar micro-grid & waste-to-energy tracker',
      ],
      tags: ['AgriTech', 'IoT', 'Climate'],
      image: '/assets/track_open.jpg',
      alt: 'Lush green fields of Odisha meeting a glowing solar chakra horizon',
      icon: <Globe className="w-5 h-5 text-bronze-brown" />,
    },
  ];

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
              24-Hour National Hackathon · Bhubaneswar
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
                    Saturday 09:00 AM to Sunday 09:00 AM
                  </p>
                </div>
                <div className="pt-3 border-t border-gold-rich/40 flex items-center justify-between">
                  <span className="font-label text-label-sm uppercase text-cream-parchment/90">
                    Weekend Sprint
                  </span>
                  <span className="px-2.5 py-0.5 bg-bronze-brown border border-gold-rich rounded-sm font-label text-label-sm text-gold-highlight font-bold shadow-xs">
                    24 Hours
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
                  3–5 Members
                </span>
                <span className="font-body text-label-sm text-navy-ink font-medium">
                  No compulsory girls participant
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
                  All Students
                </span>
                <span className="font-body text-label-sm text-navy-ink font-medium">
                  Open for all college students
                </span>
              </div>
            </article>
          </div>
        </div>

        {/* Tracks / Domains — Interactive Astra Armory Showcase from Stitch */}
        <div id="tracks" className="flex flex-col gap-6 pt-4">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gold-rich/50 pb-3">
            <div>
              <span className="font-label text-label-sm uppercase text-bronze-brown font-bold tracking-wider">
                Choose Your Astra
              </span>
              <h3 className="font-headline text-headline-md text-bronze-brown">
                Tracks &amp; Domains
              </h3>
            </div>
            <span className="px-4 py-1 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-label-sm uppercase font-bold tracking-wider shadow-sm">
              5 Battlefields · Interactive Armory
            </span>
          </div>

          {/* 5+7 Master-Detail Astra Armory */}
          <div className="bg-dark-chocolate text-cream-parchment border-2 border-gold-highlight rounded-xl p-5 md:p-7 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 5 Cols: 5 Interactive Astra Selector Rows */}
            <div
              className="lg:col-span-5 flex flex-col gap-3 justify-between"
              role="tablist"
              aria-label="Select a hackathon track"
            >
              {astraTracks.map((astra) => {
                const isSelected = activeAstra === astra.id;
                return (
                  <button
                    key={astra.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveAstra(astra.id)}
                    className={`w-full text-left rounded-lg p-3.5 flex items-center gap-3.5 transition-all duration-200 select-none ${
                      isSelected
                        ? 'border-2 border-gold-highlight bg-bronze-brown/80 shadow-[0_4px_16px_rgba(242,184,75,0.25)] translate-x-1'
                        : 'border border-gold-rich/40 bg-dark-chocolate/80 hover:bg-bronze-brown/40 hover:border-gold-rich/70'
                    }`}
                  >
                    <div className="relative w-14 h-14 rounded-md overflow-hidden border border-gold-highlight shrink-0 bg-dark-chocolate shadow-xs">
                      <Image
                        src={astra.image}
                        alt={astra.title}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-label text-label-sm uppercase text-gold-highlight block font-bold">
                        {astra.code}
                      </span>
                      <span className="font-display text-title-lg text-cream-parchment block truncate font-bold">
                        {astra.title}
                      </span>
                      <span className="font-body text-label-sm text-cream-parchment/90 block truncate font-medium">
                        {astra.shortTags}
                      </span>
                    </div>
                    {isSelected ? (
                      <ArrowRight className="w-5 h-5 text-gold-highlight shrink-0 transition-transform duration-200 translate-x-0.5" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gold-rich shrink-0 opacity-70" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right 7 Cols: Active Astra Spotlight Stage */}
            <div className="lg:col-span-7 bg-light-surface-container-lowest text-navy-ink border-2 border-gold-rich rounded-lg overflow-hidden flex flex-col justify-between shadow-lg">
              {(() => {
                const current = astraTracks.find((a) => a.id === activeAstra) || astraTracks[0];
                return (
                  <div key={current.id} className="flex-1 flex flex-col justify-between">
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden border-b-2 border-gold-rich bg-dark-chocolate">
                      <Image
                        src={current.image}
                        alt={current.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-3 py-0.5 bg-dark-chocolate text-gold-highlight font-label text-label-sm uppercase rounded-sm font-bold shadow-xs">
                            {current.code} · {current.subtitle}
                          </span>
                          <div className="w-8 h-8 rounded-full border border-bronze-brown/40 bg-cream-parchment flex items-center justify-center">
                            {current.icon}
                          </div>
                        </div>
                        <h4 className="font-display text-headline-md text-dark-chocolate">
                          {current.fullTitle}
                        </h4>
                        <p className="font-body text-body-md text-navy-ink mt-1.5">
                          {current.description}
                        </p>
                      </div>

                      <div className="bg-light-surface-container-low border border-gold-rich/60 rounded-md p-3.5">
                        <span className="font-label text-label-sm uppercase text-bronze-brown block mb-1.5 font-bold">
                          Sample Challenge Prompts
                        </span>
                        <ul className="font-body text-label-sm text-navy-ink flex flex-col gap-1 font-medium">
                          {current.prompts.map((p, i) => (
                            <li key={i}>• {p}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gold-rich/40">
                        <div className="flex flex-wrap gap-1.5">
                          {current.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 bg-light-surface-container border border-gold-rich/60 rounded-sm font-label text-label-sm text-bronze-brown font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href="#register"
                          className="px-5 py-2 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-label-sm uppercase tracking-wider font-bold hover:bg-bronze-brown hover:text-cream-parchment transition-all shadow-sm"
                        >
                          Lock This Track →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
