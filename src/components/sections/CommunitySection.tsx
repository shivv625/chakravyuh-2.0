'use client';

import React from 'react';
import { SITE_CONFIG } from '@/content/site';
import { QRFrame } from '@/components/common/QRFrame';
import { RibbonButton } from '@/components/common/RibbonButton';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-light-surface-container-low border-t-2 border-gold-rich">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-10">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="font-label text-label-sm uppercase text-bronze-brown tracking-widest font-bold">
            Connect &amp; Stay Updated
          </span>
          <h2 className="font-display text-display-md-mobile md:text-display-md text-bronze-brown uppercase">
            Join The Community
          </h2>
          <p className="font-body text-body-md text-navy-ink max-w-xl text-pretty">
            Follow our official channels and scan to join the WhatsApp community for teammate matching, problem release alerts, and live announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* WhatsApp Community */}
          <article className="bg-light-surface-container-lowest border-2 border-gold-rich rounded p-6 flex flex-col items-center text-center justify-between gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-card-lift">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-gold-rich bg-cream-parchment flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
                  <path
                    fill="#25D366"
                    d="M16 3C8.8 3 3 8.8 3 16c0 2.4.7 4.8 1.9 6.8L3.6 29l6.4-1.3c1.9 1 4 1.6 6 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M22.2 19.3c-.3-.2-2-.9-2.3-1-.3-.1-.5-.2-.7.2-.2.3-.9 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.8-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"
                  />
                </svg>
              </div>
              <div>
                <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                  WhatsApp Community
                </span>
                <h3 className="font-headline text-title-lg text-dark-chocolate mt-1 font-bold">
                  Chakravyuh 2.0 Official
                </h3>
              </div>
              <p className="font-body text-body-md text-navy-ink">
                Find teammates across India, get instant shortlist alerts, and interact directly with student coordinators.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <QRFrame label="Scan For WhatsApp" size="md" />
              <RibbonButton
                href={SITE_CONFIG.COMMUNITIES.WHATSAPP_JOIN_LINK}
                variant="primary"
                size="sm"
              >
                Join WhatsApp Group
              </RibbonButton>
            </div>
          </article>

          {/* Instagram */}
          <article className="bg-light-surface-container-lowest border-2 border-gold-rich rounded p-6 flex flex-col items-center text-center justify-between gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-card-lift">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-gold-rich bg-cream-parchment flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
                  <defs>
                    <linearGradient id="ig-brand-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F58529" />
                      <stop offset="45%" stopColor="#DD2A7B" />
                      <stop offset="75%" stopColor="#8134AF" />
                      <stop offset="100%" stopColor="#515BD4" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="3" width="26" height="26" rx="7" fill="url(#ig-brand-grad)" />
                  <rect
                    x="8.5"
                    y="8.5"
                    width="15"
                    height="15"
                    rx="4.2"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <circle cx="16" cy="16" r="3.7" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="20.8" cy="11.2" r="1.1" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                  Instagram
                </span>
                <h3 className="font-headline text-title-lg text-dark-chocolate mt-1 font-bold">
                  {SITE_CONFIG.COMMUNITIES.INSTAGRAM_HANDLE}
                </h3>
              </div>
              <p className="font-body text-body-md text-navy-ink">
                Daily countdowns, speaker &amp; jury reveals, campus reels, and live event stories from the battlefield.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <QRFrame label="Scan For Instagram" size="md" />
              <RibbonButton
                href={SITE_CONFIG.COMMUNITIES.INSTAGRAM_URL}
                variant="primary"
                size="sm"
              >
                Follow on Instagram
              </RibbonButton>
            </div>
          </article>

          {/* LinkedIn */}
          <article className="bg-light-surface-container-lowest border-2 border-gold-rich rounded p-6 flex flex-col items-center text-center justify-between gap-5 shadow-sm hover:-translate-y-1 transition-transform duration-card-lift">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-gold-rich bg-cream-parchment flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8" viewBox="0 0 32 32" aria-hidden="true">
                  <rect x="3" y="3" width="26" height="26" rx="5" fill="#0A66C2" />
                  <path
                    fill="#FFFFFF"
                    d="M10.5 13.5h3v10h-3v-10zm1.5-4.8a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM15.8 13.5h2.9v1.4h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.5h-3v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3v-10z"
                  />
                </svg>
              </div>
              <div>
                <span className="font-label text-label-sm uppercase text-bronze-brown font-semibold">
                  LinkedIn
                </span>
                <h3 className="font-headline text-title-lg text-dark-chocolate mt-1 font-bold">
                  Chakravyuh 2.0 · GITA
                </h3>
              </div>
              <p className="font-body text-body-md text-navy-ink">
                Official partner spotlights, BPUT academic announcements, and post-hackathon winner showcases.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <QRFrame label="Scan For LinkedIn" size="md" />
              <RibbonButton
                href={SITE_CONFIG.COMMUNITIES.LINKEDIN_URL}
                variant="primary"
                size="sm"
              >
                Connect on LinkedIn
              </RibbonButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
