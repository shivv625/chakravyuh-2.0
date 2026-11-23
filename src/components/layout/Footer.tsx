'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/content/site';
import { ArrowUp, ArrowUpRight, Shield, Award, MapPin } from 'lucide-react';

interface FooterProps {
  onCoordinatorsClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCoordinatorsClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-chocolate text-cream-parchment border-t-4 border-gold-rich py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-10">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-gold-rich/40">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-gold-highlight bg-bronze-brown flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gold-highlight"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <p className="font-display text-headline-md text-gold-highlight">
                {SITE_CONFIG.EVENT_NAME}
              </p>
            </div>
            <p className="font-body text-body-md text-cream-parchment max-w-md">
              {SITE_CONFIG.TAGLINE}. 36-hour National Hackathon uniting student builders, visionary mentors, and institutional pioneers.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 font-label text-label-sm uppercase tracking-wider">
            <a href="#about" className="hover:text-gold-highlight transition-colors">
              About
            </a>
            <a href="#timeline" className="hover:text-gold-highlight transition-colors">
              The Seven Gates
            </a>
            <a href="#guidelines" className="hover:text-gold-highlight transition-colors">
              Guidelines
            </a>
            <a href="#glimpse" className="hover:text-gold-highlight transition-colors">
              Chakravyuh 1.0
            </a>
            <a href="#sponsors" className="hover:text-gold-highlight transition-colors">
              Sponsors
            </a>
            <a
              href="#coordinators"
              onClick={(e) => {
                if (onCoordinatorsClick) {
                  e.preventDefault();
                  onCoordinatorsClick();
                }
              }}
              className="hover:text-gold-highlight transition-colors cursor-pointer"
            >
              Commanders
            </a>
            <a href="#register" className="text-gold-highlight font-bold hover:underline">
              Register Now
            </a>
          </div>
        </div>

        {/* Mid Institutional Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-b border-gold-rich/20 text-cream-parchment font-body text-body-md">
          <div className="flex flex-col gap-2">
            <span className="font-label text-label-sm uppercase text-gold-highlight">
              Host Institution
            </span>
            <p className="font-semibold text-cream-parchment">
              GITA Autonomous College
            </p>
            <p className="text-cream-parchment/80 text-label-sm">
              Approved by AICTE, Accredited by NAAC with &apos;A+&apos; Grade &amp; NBA. Affiliated to BPUT, Odisha.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-label text-label-sm uppercase text-gold-highlight">
              War Room Campus
            </span>
            <p className="text-cream-parchment/80 text-label-sm flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-gold-highlight shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.VENUE.ADDRESS}</span>
            </p>
            <p className="text-cream-parchment/80 text-label-sm mt-1">
              Email: {SITE_CONFIG.CONTACT.EMAIL}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-label text-label-sm uppercase text-gold-highlight">
              Quick Resources
            </span>
            <div className="flex flex-col gap-1.5 text-label-sm">
              <a
                href={SITE_CONFIG.DOCUMENTS.RULEBOOK_PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-highlight transition-colors inline-flex items-center gap-1"
              >
                <span>Download Rulebook (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.DOCUMENTS.SPONSORSHIP_BROCHURE_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-highlight transition-colors inline-flex items-center gap-1"
              >
                <span>Sponsorship Deck (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-body-md text-cream-parchment">
          <p className="text-center sm:text-left text-label-sm text-cream-parchment/80">
            Organised by Coding &amp; Innovation Club, Dept. of CSE, GITA Autonomous College, Bhubaneswar · In assoc. with BPUT, Odisha
          </p>
          <div className="flex items-center gap-4">
            <p className="tabular-nums text-label-sm text-cream-parchment/80">
              © 2026 Chakravyuh 2.0 · All Rights Reserved
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full border border-gold-rich bg-bronze-brown text-gold-highlight flex items-center justify-center hover:bg-gold-highlight hover:text-dark-chocolate transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
