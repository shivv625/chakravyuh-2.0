'use client';

import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ChannelConfig {
  id: 'instagram' | 'linkedin' | 'whatsapp';
  platform: string;
  name: string;
  qrImage: string;
  alt: string;
  url: string;
  actionLabel: string;
  gradientHover: string;
  brandIcon: React.ReactNode;
}

export const CommunitySection: React.FC = () => {
  const CHANNELS: ChannelConfig[] = [
    {
      id: 'instagram',
      platform: 'Instagram',
      name: 'chakravyuh_hackathon',
      qrImage: '/assets/qr_instagram.png',
      alt: 'QR Code for Chakravyuh Hackathon Instagram Page',
      url: SITE_CONFIG.COMMUNITIES.INSTAGRAM_URL,
      actionLabel: 'Open Instagram',
      gradientHover: 'from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15',
      brandIcon: (
        <svg className="w-7 h-7" viewBox="0 0 32 32" aria-hidden="true">
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
      name: 'ai club gita',
      qrImage: '/assets/qr_linkedin.png',
      alt: 'QR Code for AI Club GITA LinkedIn Page',
      url: SITE_CONFIG.COMMUNITIES.LINKEDIN_URL,
      actionLabel: 'Open LinkedIn',
      gradientHover: 'from-[#0A66C2]/15 via-[#0077B5]/15 to-[#004182]/15',
      brandIcon: (
        <svg className="w-7 h-7" viewBox="0 0 32 32" aria-hidden="true">
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
      name: 'Chakravyuh Hackathon',
      qrImage: '/assets/qr_whatsapp.png',
      alt: 'QR Code for Chakravyuh Hackathon WhatsApp Community',
      url: SITE_CONFIG.COMMUNITIES.WHATSAPP_JOIN_LINK,
      actionLabel: 'Join WhatsApp',
      gradientHover: 'from-[#25D366]/15 via-[#128C7E]/15 to-[#075E54]/15',
      brandIcon: (
        <svg className="w-7 h-7" viewBox="0 0 32 32" aria-hidden="true">
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
      className="relative py-16 md:py-24 bg-cream-parchment border-t-2 border-gold-rich overflow-hidden"
    >
      {/* Decorative Kurukshetra Heritage Ambient Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-gold-highlight/20 via-saffron/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-10 md:gap-14">
        {/* Section Header: Changed to "Stay Connected" */}
        <div className="text-center flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-dark-chocolate text-gold-highlight border border-gold-rich/70 ribbon-pill shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-highlight animate-pulse" />
            <span className="font-label text-label-xs uppercase tracking-widest font-bold">
              Official Channels
            </span>
          </div>

          <h2 className="font-display text-display-md-mobile md:text-display-md text-bronze-brown uppercase tracking-tight">
            Stay Connected
          </h2>

          <p className="font-body text-body-sm md:text-body-md text-navy-ink/80 max-w-xl text-pretty">
            Scan the QR code or tap the direct button to join our official communication corridors.
          </p>
        </div>

        {/* 3 Standout, Seamless Kurukshetra-Themed Cards */}
        {/* Contains ONLY: Logo + User ID, QR Code, and Redirect Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto w-full">
          {CHANNELS.map((channel) => (
            <article
              key={channel.id}
              className="relative bg-gradient-to-b from-[#241208] via-dark-chocolate to-[#140602] border-2 border-gold-rich/50 hover:border-gold-highlight rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between gap-6 shadow-xl hover:shadow-[0_12px_36px_rgba(242,184,75,0.25)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
            >
              {/* Ambient Platform Backlight Glow on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${channel.gradientHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Ornate Golden Vedic Corner Brackets */}
              <span className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-gold-rich/60 group-hover:border-gold-highlight transition-colors pointer-events-none" />
              <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-gold-rich/60 group-hover:border-gold-highlight transition-colors pointer-events-none" />
              <span className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-gold-rich/60 group-hover:border-gold-highlight transition-colors pointer-events-none" />
              <span className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-gold-rich/60 group-hover:border-gold-highlight transition-colors pointer-events-none" />

              {/* 1. Platform Logo & User ID */}
              <div className="relative z-10 w-full flex flex-col items-center gap-3 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-dark-chocolate/90 border-2 border-gold-rich/60 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-gold-highlight group-hover:shadow-[0_0_15px_rgba(242,184,75,0.35)] transition-all duration-300">
                  {channel.brandIcon}
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-cream-parchment tracking-wide group-hover:text-gold-highlight transition-colors text-center">
                  {channel.name}
                </h3>
              </div>

              {/* 2. Pristine Scannable QR Code */}
              <div className="relative z-10 p-3 bg-white rounded-xl border-2 border-gold-rich/50 group-hover:border-gold-highlight group-hover:shadow-[0_0_24px_rgba(242,184,75,0.35)] transition-all duration-300 shadow-md">
                <Image
                  src={channel.qrImage}
                  alt={channel.alt}
                  width={180}
                  height={180}
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-xs"
                  priority
                />
              </div>

              {/* 3. Sleek Standout Redirect Button */}
              <div className="relative z-10 w-full pt-1">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-gold-highlight via-gold-rich to-gold-highlight text-dark-chocolate font-headline text-xs sm:text-sm uppercase font-extrabold tracking-wider shadow-md hover:shadow-lg hover:brightness-105 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group/btn"
                >
                  <span>{channel.actionLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-dark-chocolate group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
