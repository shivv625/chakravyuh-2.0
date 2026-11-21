'use client';

import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import { QRFrame } from '@/components/common/QRFrame';
import { RibbonButton } from '@/components/common/RibbonButton';
import { Eye, Users, Handshake, Sparkles, FileText } from 'lucide-react';

export const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="relative py-16 md:py-24 overflow-hidden border-t-2 border-gold-rich">
      {/* Background Kurukshetra Horizon Artwork */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/krishna_horizon_allies.jpg"
          alt="Sunset over Kurukshetra with Lord Krishna on the right"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-cream-parchment/85 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-2">
          <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest font-bold">
            Backed By Industry &amp; Academia
          </span>
          <h2 className="font-display text-display-md-mobile md:text-display-md text-bronze-brown uppercase">
            Our Allies
          </h2>
        </div>

        {/* Tiered Sponsor Grid */}
        <div className="flex flex-col gap-8">
          {/* Title Sponsor */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold tracking-wider">
              Title Sponsor
            </span>
            <div className="w-full max-w-md bg-light-surface-container-lowest border-2 border-gold-rich rounded p-8 text-center shadow-md hover:-translate-y-1 transition-transform duration-card-lift">
              <p className="font-headline text-headline-md text-bronze-brown font-bold">
                {SITE_CONFIG.SPONSORS.TITLE.name}
              </p>
              <p className="font-body text-body-md text-navy-ink mt-1">
                {SITE_CONFIG.SPONSORS.TITLE.slotStatus} · {SITE_CONFIG.SPONSORS.TITLE.tagline}
              </p>
            </div>
          </div>

          {/* Gold & Community Allies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SITE_CONFIG.SPONSORS.GOLD.map((ally) => (
              <div
                key={ally.name}
                className="bg-light-surface-container-lowest border border-gold-rich rounded p-6 text-center hover:-translate-y-1 transition-transform duration-card-lift shadow-sm"
              >
                <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                  Gold Ally
                </span>
                <p className="font-title text-title-lg text-bronze-brown mt-2 font-bold">
                  {ally.name}
                </p>
                {ally.tagline && (
                  <p className="font-body text-label-sm text-navy-ink mt-0.5">
                    {ally.tagline}
                  </p>
                )}
              </div>
            ))}

            {SITE_CONFIG.SPONSORS.COMMUNITY.slice(0, 1).map((ally) => (
              <div
                key={ally.name}
                className="bg-light-surface-container-lowest border border-gold-rich rounded p-6 text-center hover:-translate-y-1 transition-transform duration-card-lift shadow-sm"
              >
                <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                  Community Partner
                </span>
                <p className="font-title text-title-lg text-bronze-brown mt-2 font-bold">
                  {ally.name}
                </p>
                {ally.tagline && (
                  <p className="font-body text-label-sm text-navy-ink mt-0.5">
                    {ally.tagline}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Poster 3 Style "BECOME A SPONSOR" Panel */}
        <div className="bg-light-surface-container-lowest/95 border-2 border-gold-rich rounded p-8 md:p-10 shadow-lg flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <div className="inline-block self-start bg-dark-chocolate text-cream-parchment px-5 py-2">
                <span className="font-headline text-headline-md uppercase tracking-wider font-bold text-gold-highlight">
                  Call For Sponsors
                </span>
              </div>
              <p className="font-body text-body-lg text-navy-ink font-bold leading-relaxed">
                Partner with us in shaping innovation, empowering young minds and building a brighter tomorrow at GITA Autonomous College.
              </p>
            </div>

            {/* Gold-framed QR */}
            <QRFrame label="Scan To Partner" size="md" />
          </div>

          {/* 4 Poster-3 Icon Benefits with Thin Vertical Dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-bronze-brown/40 border-y border-bronze-brown/30 py-5">
            <div className="flex flex-col items-center text-center gap-2 px-4 py-2">
              <div className="w-12 h-12 rounded-full border border-bronze-brown flex items-center justify-center text-bronze-brown bg-cream-parchment shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <span className="font-label text-label-sm uppercase text-navy-ink font-bold">
                Brand Visibility
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-2 px-4 py-2">
              <div className="w-12 h-12 rounded-full border border-bronze-brown flex items-center justify-center text-bronze-brown bg-cream-parchment shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <span className="font-label text-label-sm uppercase text-navy-ink font-bold">
                Engage Young Talent
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-2 px-4 py-2">
              <div className="w-12 h-12 rounded-full border border-bronze-brown flex items-center justify-center text-bronze-brown bg-cream-parchment shadow-sm">
                <Handshake className="w-6 h-6" />
              </div>
              <span className="font-label text-label-sm uppercase text-navy-ink font-bold">
                Lasting Partnerships
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-2 px-4 py-2">
              <div className="w-12 h-12 rounded-full border border-bronze-brown flex items-center justify-center text-bronze-brown bg-cream-parchment shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-label text-label-sm uppercase text-navy-ink font-bold">
                Be Part of Impact
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <RibbonButton
              href={SITE_CONFIG.DOCUMENTS.SPONSORSHIP_BROCHURE_URL}
              variant="primary"
              size="md"
              icon={<FileText className="w-4 h-4" />}
            >
              Download Sponsorship Brochure
            </RibbonButton>
          </div>
        </div>
      </div>
    </section>
  );
};
