'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import TeamLanyardRail, { LanyardMember } from '@/components/ui/team-lanyard-rail';
import { SITE_CONFIG } from '@/content/site';
import { X, Phone, Mail, Shield, Sparkles } from 'lucide-react';

interface CoordinatorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Full 8-commander council with badges, bio, tags, direct links, and Kurukshetra tone ribbons
export const CHAKRAVYUH_COMMANDERS: LanyardMember[] = [
  {
    id: 'prof-mohanty',
    name: 'Prof. D. Mohanty',
    role: 'Faculty Convener',
    team: 'GITA · Dept. of CSE',
    tone: 2, // Gold
    drop: 10,
    image: '/team/coordinator_faculty.jpg',
    bio: 'Oversees academic alignment, university accreditations, and national jury integrity for Chakravyuh 2.0.',
    tags: ['Convener', 'Faculty', 'CSE'],
    links: [
      { label: 'Call', href: 'tel:+919437012840' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'ananya-pattnaik',
    name: 'Ananya Pattnaik',
    role: 'Lead Student Coordinator',
    team: 'Chakravyuh · Core Council',
    tone: 1, // Saffron
    drop: 22,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Directs overall hackathon orchestration, team registrations, and cross-department battle-readiness.',
    tags: ['Lead', 'Core Council', 'Operations'],
    links: [
      { label: 'Call', href: 'tel:+918249155312' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'subham-tripathy',
    name: 'Subham Tripathy',
    role: 'Operations & Alliances',
    team: 'Hospitality & Logistics',
    tone: 4, // Peacock Green
    drop: 4,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Spearheads 36-hour war-room arrangements, hostel accommodations, catering, and campus security.',
    tags: ['Logistics', 'Hospitality', 'Campus'],
    links: [
      { label: 'Call', href: 'tel:+917978431029' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'rohan-behera',
    name: 'Rohan Behera',
    role: 'Technical & Design Lead',
    team: 'Platform & Judging Systems',
    tone: 3, // Krishna Blue
    drop: 18,
    image: '/team/coordinator_tech.jpg',
    bio: 'Architected the evaluation portals, live leaderboards, and the Chakravyuh digital design system.',
    tags: ['Tech Lead', 'Systems', 'UI/UX'],
    links: [
      { label: 'Call', href: 'tel:+919040267118' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'dr-sk-dash',
    name: 'Dr. S. K. Dash',
    role: 'Academic Patron',
    team: 'BPUT · Research Council',
    tone: 2, // Gold
    drop: 14,
    image: '/team/coordinator_faculty.jpg',
    bio: 'Mentors participating squads on patentability, state innovation grants, and industry spin-offs.',
    tags: ['Patron', 'Research', 'BPUT'],
    links: [
      { label: 'Council', href: SITE_CONFIG.COMMUNITIES.LINKEDIN_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'priyadarshini-rath',
    name: 'Priyadarshini Rath',
    role: 'Mentorship & Jury Lead',
    team: 'Jury Evaluation Cell',
    tone: 5, // Burnt Orange
    drop: 24,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Coordinates industry architects, senior venture reviewers, and the multi-tier rubric evaluation.',
    tags: ['Jury', 'Mentorship', 'Tracks'],
    links: [
      { label: 'Call', href: 'tel:+918249155312' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'ayush-panda',
    name: 'Ayush Panda',
    role: 'Community & Outreach',
    team: 'Public Relations & Alliances',
    tone: 1, // Saffron
    drop: 8,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Fosters developer relations with 150+ engineering institutes across India and student clubs.',
    tags: ['Outreach', 'DevRel', 'Sponsors'],
    links: [
      { label: 'Call', href: 'tel:+917978431029' },
      { label: 'Discord', href: SITE_CONFIG.COMMUNITIES.DISCORD_JOIN_LINK },
    ],
  },
  {
    id: 'sneha-mohapatra',
    name: 'Sneha Mohapatra',
    role: 'Experience & Media Lead',
    team: 'Ceremonial & Creative',
    tone: 3, // Krishna Blue
    drop: 16,
    image: '/team/coordinator_tech.jpg',
    bio: 'Directs the inaugural conch ceremony, arena broadcasting, media coverage, and warrior swag boxes.',
    tags: ['Media', 'Broadcast', 'Experience'],
    links: [
      { label: 'Media Kit', href: SITE_CONFIG.DOCUMENTS.RULEBOOK_PDF_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
];

export const CoordinatorsModal: React.FC<CoordinatorsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="coordinators-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-dark-chocolate/85 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Modal Dialog Window */}
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-cream-parchment text-navy-ink rounded-2xl border-4 border-gold-rich shadow-[0_20px_60px_rgba(26,12,5,0.7)] p-4 sm:p-6 md:p-8 flex flex-col gap-6"
      >
        {/* Top Floating Consecrated Ribbon Header */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-gold-rich/40 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-gold-highlight bg-dark-chocolate text-gold-highlight flex items-center justify-center shadow-md shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-label text-xs uppercase tracking-widest text-bronze-brown font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-gold-rich" />
                  GITA Autonomous College &amp; BPUT, Odisha
                </span>
              </div>
              <h2
                id="coordinators-title"
                className="font-display text-2xl sm:text-3xl md:text-4xl text-dark-chocolate uppercase font-bold tracking-wide"
              >
                The Commanders
              </h2>
              <p className="font-body text-sm sm:text-base text-bronze-brown mt-0.5">
                Faculty Conveners &amp; Student Organizing Committee of Chakravyuh 2.0
              </p>
            </div>
          </div>

          {/* Close Action */}
          <button
            onClick={onClose}
            aria-label="Close Coordinators Section"
            className="p-2 sm:p-2.5 rounded-full border-2 border-gold-rich/60 bg-surface-lowest text-dark-chocolate hover:bg-gold-highlight hover:text-dark-chocolate hover:border-dark-chocolate transition-all duration-state-change shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-highlight"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Instructions banner */}
        <div className="bg-surface-low border border-gold-rich/30 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-bronze-brown flex items-center justify-between gap-2">
          <span>
            💡 <strong>Commander Pass Rail:</strong> Hover and drag badges along the suspension rail. Click any lanyard badge or press Enter to flip and view phone, email, and credentials.
          </span>
          <span className="font-mono text-xs text-bronze-brown/80 hidden md:inline">
            Press Esc to exit
          </span>
        </div>

        {/* Interactive Lanyard Rail Section */}
        <div className="relative py-2 sm:py-4 bg-surface-lowest/70 rounded-xl border border-gold-rich/30 shadow-inner overflow-hidden">
          <TeamLanyardRail
            items={CHAKRAVYUH_COMMANDERS}
            eyebrow="36-Hour National Arena"
            heading="War Room Council"
            caption="Click any pass to inspect credentials, bio, and direct helpline contact."
            autoplay={true}
            interval={3500}
            labels={{
              flip: 'Click or press Enter to flip warrior credential',
              back: 'Click again or press Esc to return front',
              show: 'Inspect commander',
            }}
          />
        </div>

        {/* Quick Contact & Helplines Footer */}
        <div className="pt-4 border-t border-gold-rich/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-bronze-brown font-label">
            <span className="font-bold text-dark-chocolate uppercase">Direct War Room Helplines:</span>
            <a
              href="tel:+919437012840"
              className="inline-flex items-center gap-1.5 hover:text-gold-rich transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-gold-rich" />
              <span>+91 94370 12840 (Faculty)</span>
            </a>
            <a
              href="tel:+918249155312"
              className="inline-flex items-center gap-1.5 hover:text-gold-rich transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-gold-rich" />
              <span>+91 82491 55312 (Student Lead)</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.CONTACT.EMAIL}`}
              className="inline-flex items-center gap-1.5 hover:text-gold-rich transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-rich" />
              <span>{SITE_CONFIG.CONTACT.EMAIL}</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-dark-chocolate text-gold-highlight border border-gold-rich font-label text-xs uppercase tracking-wider font-bold hover:bg-bronze-brown transition-colors shadow-sm"
          >
            Return to Arena
          </button>
        </div>
      </div>
    </div>
  );
};
