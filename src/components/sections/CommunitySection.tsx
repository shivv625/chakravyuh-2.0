'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import {
  ScanLine,
  ArrowUpRight,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

interface ChannelConfig {
  id: 'instagram' | 'linkedin' | 'whatsapp';
  platform: string;
  badge: string;
  name: string;
  description: string;
  qrImage: string;
  alt: string;
  url: string;
  actionLabel: string;
  accentColor: string;
  tagline: string;
  pulseColor: string;
  gradientHover: string;
  brandIcon: React.ReactNode;
}

export const CommunitySection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = async (id: string, url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2200);
    } catch {
      // Fallback
    }
  };

  const CHANNELS: ChannelConfig[] = [
    {
      id: 'instagram',
      platform: 'Instagram',
      badge: 'Official Instagram',
      name: 'chakravyuh_hackathon',
      description:
        'Behind-the-scenes war room reels, speaker & jury reveals, daily countdown chronicles, and live stories from the battlefield.',
      qrImage: '/assets/qr_instagram.png',
      alt: 'QR Code for Chakravyuh Hackathon Instagram Page',
      url: SITE_CONFIG.COMMUNITIES.INSTAGRAM_URL,
      actionLabel: 'Follow on Instagram',
      accentColor: '#DD2A7B',
      tagline: 'Visual War Chronicles',
      pulseColor: 'bg-saffron',
      gradientHover: 'from-[#F58529]/10 via-[#DD2A7B]/10 to-[#8134AF]/10',
      brandIcon: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" aria-hidden="true">
          <defs>
            <linearGradient id="ig-grad-icon" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F58529" />
              <stop offset="45%" stopColor="#DD2A7B" />
              <stop offset="75%" stopColor="#8134AF" />
              <stop offset="100%" stopColor="#515BD4" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#ig-grad-icon)" />
          <rect
            x="7.5"
            y="7.5"
            width="17"
            height="17"
            rx="4.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
          />
          <circle cx="16" cy="16" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="2.2" />
          <circle cx="21.5" cy="10.5" r="1.3" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      badge: 'Official LinkedIn',
      name: 'ai club gita',
      description:
        'Industry partner announcements, university conclave notices, distinguished jury introductions, and victor spotlights.',
      qrImage: '/assets/qr_linkedin.png',
      alt: 'QR Code for AI Club GITA LinkedIn Page',
      url: SITE_CONFIG.COMMUNITIES.LINKEDIN_URL,
      actionLabel: 'Connect on LinkedIn',
      accentColor: '#0A66C2',
      tagline: 'Professional Conclave',
      pulseColor: 'bg-krishna-blue',
      gradientHover: 'from-[#0A66C2]/10 via-[#0077B5]/10 to-[#BFD6EC]/15',
      brandIcon: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" aria-hidden="true">
          <rect x="2" y="2" width="28" height="28" rx="6" fill="#0A66C2" />
          <path
            fill="#FFFFFF"
            d="M9.5 13h3.5v11H9.5V13zm1.75-5.2a2 2 0 110 4 2 2 0 010-4zM15.5 13h3.3v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.5v5.7h-3.5v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2h-3.5V13z"
          />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      platform: 'WhatsApp Community',
      badge: 'WhatsApp Community',
      name: 'chakravyuh hackathon',
      description:
        'National squad matchmaking, instant shortlist alerts, problem statement release drops, and 24/7 direct coordinator desk.',
      qrImage: '/assets/qr_whatsapp.png',
      alt: 'QR Code for Chakravyuh Hackathon WhatsApp Community',
      url: SITE_CONFIG.COMMUNITIES.WHATSAPP_JOIN_LINK,
      actionLabel: 'Join WhatsApp Community',
      accentColor: '#25D366',
      tagline: 'Instant War Room',
      pulseColor: 'bg-emerald-500',
      gradientHover: 'from-[#25D366]/10 via-[#128C7E]/10 to-[#FCF0D6]/20',
      brandIcon: (
        <svg className="w-6 h-6" viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="#25D366"
            d="M16 2C8.3 2 2 8.3 2 16c0 2.6.7 5.1 2 7.3L2 30l6.9-1.8c2.1 1.2 4.6 1.8 7.1 1.8 7.7 0 14-6.3 14-14S23.7 2 16 2z"
          />
          <path
            fill="#FFFFFF"
            d="M22.8 19.6c-.3-.2-2.1-1-2.4-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.5-.6-2.8-1.8-1-1-1.7-2.2-1.9-2.6-.2-.3 0-.6.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6s-.8-1.9-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.7-.3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="community"
      className="relative py-20 md:py-28 bg-light-surface-container-low border-t-4 border-gold-rich overflow-hidden"
    >
      {/* Decorative Kurukshetra Heritage Ambient Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-gold-highlight/20 via-saffron/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-highlight" />
            <span className="font-label text-label-sm uppercase tracking-widest font-bold">
              Alliance &amp; Communiqué · Official Channels
            </span>
          </div>

          <h2 className="font-display text-display-md-mobile md:text-display-md text-bronze-brown uppercase epic-text-shadow">
            Join The Community
          </h2>

          <p className="font-body text-body-md md:text-body-lg text-navy-ink/90 max-w-2xl text-pretty">
            Scan the tactical battle passes with your mobile camera or connect directly to unlock announcements, squad matchmaking, and real-time Kurukshetra updates.
          </p>
        </div>

        {/* 3 Interactive Scanner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {CHANNELS.map((channel) => {
            const isCopied = copiedId === channel.id;

            return (
              <article
                key={channel.id}
                className="relative bg-light-surface-container-lowest/95 border-2 border-gold-rich/40 hover:border-gold-highlight rounded-2xl p-6 md:p-7 flex flex-col justify-between items-center text-center gap-6 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
              >
                {/* Ambient platform gradient sheen on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${channel.gradientHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Corner Ancient Architectural L-brackets */}
                <span className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors pointer-events-none" />
                <span className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors pointer-events-none" />
                <span className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors pointer-events-none" />
                <span className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-gold-rich/40 group-hover:border-gold-highlight transition-colors pointer-events-none" />

                {/* Card Top: Platform Identity Header */}
                <div className="relative z-10 w-full flex flex-col items-center gap-3">
                  <div className="flex items-center justify-between w-full">
                    {/* Platform Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cream-parchment border border-gold-rich/40 rounded-full font-label text-label-xs uppercase tracking-wider text-bronze-brown font-bold shadow-2xs">
                      <span className={`w-2 h-2 rounded-full ${channel.pulseColor} animate-pulse`} />
                      {channel.badge}
                    </span>

                    {/* Tagline */}
                    <span className="font-label text-label-xs uppercase tracking-wider text-bronze-brown/80 font-medium">
                      {channel.tagline}
                    </span>
                  </div>

                  {/* Icon & Name */}
                  <div className="flex flex-col items-center gap-2 mt-1">
                    <div className="w-14 h-14 rounded-2xl bg-cream-parchment border-2 border-gold-rich/60 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-gold-highlight transition-all duration-300">
                      {channel.brandIcon}
                    </div>

                    <h3 className="font-display text-title-lg md:text-headline-sm text-dark-chocolate font-bold tracking-tight">
                      {channel.name}
                    </h3>
                  </div>

                  {/* Subtext */}
                  <p className="font-body text-body-sm text-navy-ink/85 line-clamp-3 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                {/* Card Middle: Precision Tactical Scanner Viewfinder */}
                <div className="relative z-10 flex flex-col items-center gap-2.5 my-1">
                  <div className="relative p-3 bg-white rounded-xl shadow-inner border-2 border-gold-rich/30 group-hover:border-gold-highlight group-hover:shadow-md transition-all duration-300">
                    {/* Viewfinder HUD Corner Brackets */}
                    <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-gold-rich pointer-events-none" />
                    <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-gold-rich pointer-events-none" />
                    <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-gold-rich pointer-events-none" />
                    <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-gold-rich pointer-events-none" />

                    {/* Animated Scanning Laser Beam on hover */}
                    <div className="absolute inset-x-2 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold-highlight to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-bounce pointer-events-none z-20 shadow-sm" />

                    {/* High-Resolution QR Code */}
                    <Image
                      src={channel.qrImage}
                      alt={channel.alt}
                      width={170}
                      height={170}
                      className="w-36 h-36 md:w-40 md:h-40 object-contain rounded-sm"
                      priority
                    />
                  </div>

                  {/* Scan Prompt Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-chocolate text-gold-highlight border border-gold-rich/60 rounded-full font-label text-label-xs uppercase tracking-wider font-bold shadow-xs">
                    <ScanLine className="w-3.5 h-3.5 text-gold-highlight animate-pulse shrink-0" />
                    <span>Point Camera To Scan</span>
                  </div>
                </div>

                {/* Card Bottom: Direct Action & Quick Copy */}
                <div className="relative z-10 w-full flex flex-col gap-2.5 pt-2 border-t border-gold-rich/20">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-bronze-brown via-dark-chocolate to-bronze-brown text-gold-highlight hover:text-white border border-gold-rich rounded-lg font-headline text-title-sm uppercase font-bold tracking-wider shadow-sm hover:shadow-md hover:border-gold-highlight transition-all duration-200 group/btn"
                  >
                    <span>{channel.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold-highlight group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopyLink(channel.id, channel.url)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-cream-parchment/80 hover:bg-cream-parchment text-bronze-brown border border-gold-rich/30 hover:border-gold-rich/60 rounded-md font-label text-label-xs uppercase tracking-wider font-semibold transition-colors duration-200"
                    title="Copy direct invite link"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-peacock-green" />
                        <span className="text-peacock-green font-bold">Direct Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-bronze-brown" />
                        <span>Copy Direct Link</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Official Alliance Trust Banner */}
        <div className="relative bg-cream-parchment border-2 border-gold-rich/50 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-dark-chocolate text-gold-highlight border border-gold-rich flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold-highlight" />
            </div>
            <div>
              <p className="font-headline text-body-md text-dark-chocolate font-bold">
                Official Chakravyuh 2.0 Alliance Network
              </p>
              <p className="font-body text-body-sm text-navy-ink/80">
                All announcements, gate guidelines, and mentorship allocations are broadcast solely through these verified channels.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bronze-brown text-gold-highlight rounded-full font-label text-label-xs uppercase tracking-widest font-bold shrink-0">
            <Users className="w-3.5 h-3.5" />
            <span>Verified Corridors</span>
          </div>
        </div>
      </div>
    </section>
  );
};
