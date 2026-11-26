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

// Full 32-commander council across all divisions: Faculty Conveners, Core Council, Technical, Logistics, Mentorship, Tracks & Media
export const CHAKRAVYUH_COMMANDERS: LanyardMember[] = [
  // 1. Faculty Conveners & Leadership
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
    bio: 'Spearheads 24-hour war-room arrangements, hostel accommodations, catering, and campus security.',
    tags: ['Logistics', 'Hospitality', 'Campus'],
    links: [
      { label: 'Call', href: 'tel:+917978431029' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'rohan-behera',
    name: 'Rohan Behera',
    role: 'Technical & Platform Lead',
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
    drop: 12,
    image: '/team/coordinator_faculty.jpg',
    bio: 'Mentors participating squads on patentability, state innovation grants, and university incubation pathways.',
    tags: ['Patron', 'Research', 'BPUT'],
    links: [
      { label: 'Council', href: SITE_CONFIG.COMMUNITIES.LINKEDIN_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'dr-mk-jena',
    name: 'Dr. M. K. Jena',
    role: 'Advisory Dean',
    team: 'Academic Affairs · GITA',
    tone: 2, // Gold
    drop: 24,
    image: '/team/coordinator_faculty.jpg',
    bio: 'Steers inter-college protocols, institutional clearances, and AICTE compliance for all participating delegations.',
    tags: ['Dean', 'Advisory', 'Administration'],
    links: [
      { label: 'Call', href: 'tel:+919437012840' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'prof-ranjan-senapati',
    name: 'Prof. Ranjan Senapati',
    role: 'Faculty Co-Convener',
    team: 'Dept. of ECE & Robotics',
    tone: 5, // Burnt Orange
    drop: 8,
    image: '/team/coordinator_faculty.jpg',
    bio: 'Manages hardware labs, IoT kits, power redundancy, and maker equipment for on-site prototyping.',
    tags: ['Co-Convener', 'Hardware', 'Robotics'],
    links: [
      { label: 'Call', href: 'tel:+919437012840' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'prof-subhasmita-rout',
    name: 'Prof. Subhasmita Rout',
    role: 'Faculty Advisor',
    team: 'Women in Tech Cell',
    tone: 3, // Krishna Blue
    drop: 16,
    image: '/team/coordinator_faculty.jpg',
    bio: 'Leads diversity initiatives, female hacker squads mentorship, and special equity prize categories.',
    tags: ['Advisor', 'Diversity', 'Mentorship'],
    links: [
      { label: 'Call', href: 'tel:+919437012840' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },

  // 2. Mentorship, Jury & Evaluation
  {
    id: 'priyadarshini-rath',
    name: 'Priyadarshini Rath',
    role: 'Jury Evaluation Cell Lead',
    team: 'Jury & Evaluation Council',
    tone: 5, // Burnt Orange
    drop: 20,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Coordinates 25+ senior industry architects, venture scouts, and the multi-tier rubric evaluation system.',
    tags: ['Jury', 'Mentorship', 'Evaluation'],
    links: [
      { label: 'Call', href: 'tel:+918249155312' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'ayush-panda',
    name: 'Ayush Panda',
    role: 'Strategic Alliances & DevRel',
    team: 'Core Council · Alliances',
    tone: 1, // Saffron
    drop: 6,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Fosters developer relations with 150+ engineering institutes across India and student tech societies.',
    tags: ['Outreach', 'DevRel', 'Sponsors'],
    links: [
      { label: 'Call', href: 'tel:+917978431029' },
      { label: 'Discord', href: SITE_CONFIG.COMMUNITIES.DISCORD_JOIN_LINK },
    ],
  },
  {
    id: 'sneha-mohapatra',
    name: 'Sneha Mohapatra',
    role: 'Experience & Media Director',
    team: 'Ceremonial & Creative Desk',
    tone: 3, // Krishna Blue
    drop: 18,
    image: '/team/coordinator_tech.jpg',
    bio: 'Directs the inaugural conch ceremony, arena broadcasting, press coverage, and warrior swag hampers.',
    tags: ['Media', 'Broadcast', 'Experience'],
    links: [
      { label: 'Media Kit', href: SITE_CONFIG.DOCUMENTS.RULEBOOK_PDF_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'shreya-dash',
    name: 'Shreya Dash',
    role: 'Student Council Vice-President',
    team: 'GITA Student Council',
    tone: 4, // Peacock Green
    drop: 10,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Manages inter-club volunteer teams, campus guides, emergency helplines, and delegate reception.',
    tags: ['Council', 'Administration', 'Support'],
    links: [
      { label: 'Call', href: 'tel:+918249155312' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },

  // 3. Technical, Platform & Judging Systems
  {
    id: 'soumyajit-mahapatra',
    name: 'Soumyajit Mahapatra',
    role: 'Full-Stack Platform Architect',
    team: 'Dev Systems & Submissions',
    tone: 1, // Saffron
    drop: 22,
    image: '/team/coordinator_tech.jpg',
    bio: 'Designed the real-time project submission pipeline, GitHub sync checkers, and automated anti-plagiarism guards.',
    tags: ['Full-Stack', 'Next.js', 'Pipeline'],
    links: [
      { label: 'GitHub', href: SITE_CONFIG.COMMUNITIES.GITHUB_ORG_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'biswajit-sahoo',
    name: 'Biswajit Sahoo',
    role: 'Judging Engine Lead',
    team: 'Scoring & Live Leaderboard',
    tone: 2, // Gold
    drop: 6,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Built the real-time normalized jury scoring system with zero-knowledge ballot verification.',
    tags: ['Scoring', 'Leaderboard', 'Algorithms'],
    links: [
      { label: 'Portal', href: SITE_CONFIG.COMMUNITIES.LINKEDIN_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'priyanka-pradhan',
    name: 'Priyanka Pradhan',
    role: 'UI/UX Design Director',
    team: 'Brand & Visual Systems',
    tone: 3, // Krishna Blue
    drop: 14,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Crafted the Kurukshetra golden-hour aesthetic, badge tokens, motion curves, and print war posters.',
    tags: ['Design', 'Tokens', 'Motion'],
    links: [
      { label: 'Call', href: 'tel:+918249155312' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'aditya-mishra',
    name: 'Aditya Narayan Mishra',
    role: 'DevOps & Security Marshal',
    team: 'Infrastructure & Cloud Rails',
    tone: 5, // Burnt Orange
    drop: 20,
    image: '/team/coordinator_tech.jpg',
    bio: 'Guarantees 99.99% uptime on server clusters, zero DDoS latency, and secure isolated sandbox runners.',
    tags: ['DevOps', 'Security', 'Cloud'],
    links: [
      { label: 'GitHub', href: SITE_CONFIG.COMMUNITIES.GITHUB_ORG_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'debidutta-nayak',
    name: 'Debidutta Nayak',
    role: 'Network & LAN Commander',
    team: 'War Room Connectivity',
    tone: 4, // Peacock Green
    drop: 8,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Deployed dual redundant 1 Gbps leased fibre links, campus WiFi 6 mesh, and localized GitHub caching proxies.',
    tags: ['Networking', 'WiFi 6', 'Hardware'],
    links: [
      { label: 'Call', href: 'tel:+917978431029' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },

  // 4. Operations, Logistics & Hospitality
  {
    id: 'arpan-mohanty',
    name: 'Arpan Mohanty',
    role: 'War Room Logistics Commander',
    team: 'Campus Facilities & Layout',
    tone: 1, // Saffron
    drop: 16,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Configured the 24-hour war-room seating grid, 500+ surge-protected workstations, and projection displays.',
    tags: ['Facilities', 'War Room', 'Logistics'],
    links: [
      { label: 'Call', href: 'tel:+917978431029' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'tapaswini-sahu',
    name: 'Tapaswini Sahu',
    role: 'Hospitality & Accommodation',
    team: 'Hostel & Rest Areas',
    tone: 2, // Gold
    drop: 24,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Arranged round-the-clock hostel rooms, warm bedding, hygiene essentials, and designated quiet recovery zones.',
    tags: ['Hospitality', 'Hostel', 'Comfort'],
    links: [
      { label: 'Call', href: 'tel:+918249155312' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'rajesh-barik',
    name: 'Rajesh Kumar Barik',
    role: 'Food & Refreshment Marshal',
    team: '24/7 Catering & Energy Supply',
    tone: 5, // Burnt Orange
    drop: 4,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Curated 6 gourmet meals, midnight energy snacks, piping hot tea/coffee stations, and dietary options.',
    tags: ['Catering', 'Midnight Meals', 'Supply'],
    links: [
      { label: 'Call', href: 'tel:+917978431029' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'chinmayee-mishra',
    name: 'Chinmayee Mishra',
    role: 'Safety & First-Aid Lead',
    team: 'Campus Medical & Safety',
    tone: 4, // Peacock Green
    drop: 18,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Stationed 24/7 campus paramedic personnel, oxygen reserves, ambulances, and emergency medical kits.',
    tags: ['Medical', 'Safety', 'First-Aid'],
    links: [
      { label: 'Emergency', href: 'tel:+917978431029' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'smruti-rout',
    name: 'Smruti Ranjan Rout',
    role: 'Transit & Logistics Captain',
    team: 'Transport & Station Pickup',
    tone: 3, // Krishna Blue
    drop: 12,
    image: '/team/coordinator_tech.jpg',
    bio: 'Orchestrated bus pickups from Bhubaneswar Railway Station (BBS) and Biju Patnaik International Airport (BBI).',
    tags: ['Transit', 'Shuttle', 'Airport/BBS'],
    links: [
      { label: 'Transit Desk', href: 'tel:+917978431029' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },

  // 5. Track Marshals & Mentors
  {
    id: 'abhishek-das',
    name: 'Abhishek Das',
    role: 'Mentor Desk Captain',
    team: 'Industry Mentorship Cell',
    tone: 1, // Saffron
    drop: 20,
    image: '/team/coordinator_tech.jpg',
    bio: 'Schedules 1-on-1 sprint clinics with Google Developer Experts, AWS community builders, and principal architects.',
    tags: ['Mentors', 'Sprint Clinics', 'Guidance'],
    links: [
      { label: 'Discord', href: SITE_CONFIG.COMMUNITIES.DISCORD_JOIN_LINK },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'pratyush-hota',
    name: 'Pratyush Kumar Hota',
    role: 'Hack Track Marshal',
    team: 'Astra 02 · Web3 & Digital Trust',
    tone: 2, // Gold
    drop: 6,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Assists teams with EVM testnets, smart contract security audits, and decentralized identity integrations.',
    tags: ['Astra 02', 'Web3', 'Blockchain'],
    links: [
      { label: 'GitHub', href: SITE_CONFIG.COMMUNITIES.GITHUB_ORG_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'sonali-pattnaik',
    name: 'Sonali Pattnaik',
    role: 'Hack Track Marshal',
    team: 'Astra 01 · AI & Machine Learning',
    tone: 3, // Krishna Blue
    drop: 22,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Provides GPU cloud credits, model fine-tuning support, and agentic framework guidance for AI squads.',
    tags: ['Astra 01', 'GenAI', 'LLMs'],
    links: [
      { label: 'Call', href: 'tel:+918249155312' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'rakesh-swain',
    name: 'Rakesh Kumar Swain',
    role: 'Hack Track Marshal',
    team: 'Astra 03 · FinTech & Payments',
    tone: 5, // Burnt Orange
    drop: 10,
    image: '/team/coordinator_tech.jpg',
    bio: 'Guides transaction architecture, open banking APIs, sandbox financial datasets, and regulatory compliance.',
    tags: ['Astra 03', 'FinTech', 'Payments'],
    links: [
      { label: 'Call', href: 'tel:+919040267118' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },

  // 6. Outreach, PR, Media & Desk
  {
    id: 'pritam-panda',
    name: 'Pritam Panda',
    role: 'Campus Ambassador Lead',
    team: 'National Outreach · 150+ Hubs',
    tone: 4, // Peacock Green
    drop: 14,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Coordinates 200+ campus ambassadors across IITs, NITs, and state universities across eastern India.',
    tags: ['Ambassadors', 'Outreach', 'Colleges'],
    links: [
      { label: 'WhatsApp', href: SITE_CONFIG.COMMUNITIES.WHATSAPP_JOIN_LINK },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'swati-sucharita',
    name: 'Swati Sucharita',
    role: 'Sponsorship & Partner Lead',
    team: 'Industry Alliances Desk',
    tone: 1, // Saffron
    drop: 24,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Liaises with institutional sponsors, cloud partners, prize pool patrons, and recruitment booths.',
    tags: ['Sponsors', 'Partners', 'Alliances'],
    links: [
      { label: 'Brochure', href: SITE_CONFIG.DOCUMENTS.SPONSORSHIP_BROCHURE_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'bibek-jena',
    name: 'Bibek Ranjan Jena',
    role: 'Broadcast & Visual Marshal',
    team: 'Livestream & Media Crew',
    tone: 3, // Krishna Blue
    drop: 8,
    image: '/team/coordinator_tech.jpg',
    bio: 'Directs the 4K multi-camera YouTube and Twitch live broadcasts, countdown ceremonies, and stage spotlights.',
    tags: ['Broadcast', '4K Stream', 'Audio/Visual'],
    links: [
      { label: 'Instagram', href: SITE_CONFIG.COMMUNITIES.INSTAGRAM_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'ipsita-priyadarshini',
    name: 'Ipsita Priyadarshini',
    role: 'Registration Desk Commander',
    team: 'Warrior Check-In Desk',
    tone: 2, // Gold
    drop: 16,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Supervises contactless RFID badge issuance, college ID verification, and check-in welcome packages.',
    tags: ['Check-In', 'Badges', 'Welcome Desk'],
    links: [
      { label: 'Call', href: 'tel:+918249155312' },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'alok-parida',
    name: 'Alok Kumar Parida',
    role: 'Press & Public Relations Lead',
    team: 'Journalism & Media Desk',
    tone: 5, // Burnt Orange
    drop: 12,
    image: '/team/coordinator_lead_2.jpg',
    bio: 'Handles newspaper correspondents, tech journalism releases, television coverage, and official press bulletins.',
    tags: ['Press', 'Journalism', 'PR'],
    links: [
      { label: 'LinkedIn', href: SITE_CONFIG.COMMUNITIES.LINKEDIN_URL },
      { label: 'Email', href: `mailto:${SITE_CONFIG.CONTACT.EMAIL}` },
    ],
  },
  {
    id: 'pragyan-sahoo',
    name: 'Pragyan Paramita Sahoo',
    role: 'Swag & Certification Lead',
    team: 'War Merchandise & Honors',
    tone: 4, // Peacock Green
    drop: 22,
    image: '/team/coordinator_lead_1.jpg',
    bio: 'Oversees custom Kurukshetra warrior hoodies, die-cut metallic stickers, lapel pins, and certified credentials.',
    tags: ['Swag', 'Certificates', 'Merch'],
    links: [
      { label: 'Rulebook', href: SITE_CONFIG.DOCUMENTS.RULEBOOK_PDF_URL },
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
        className="relative w-full max-w-7xl max-h-[96vh] overflow-y-auto bg-cream-parchment text-navy-ink rounded-2xl border-4 border-gold-rich shadow-[0_20px_60px_rgba(26,12,5,0.7)] p-4 sm:p-5 md:p-6 flex flex-col gap-3.5"
      >
        {/* Top Floating Consecrated Ribbon Header */}
        <div className="shrink-0 flex items-start justify-between gap-4 border-b-2 border-gold-rich/40 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full border-2 border-gold-highlight bg-dark-chocolate text-gold-highlight flex items-center justify-center shadow-md shrink-0">
              <Shield className="w-5 h-5" />
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
                className="font-display text-2xl sm:text-3xl text-dark-chocolate uppercase font-bold tracking-wide"
              >
                The Commanders
              </h2>
              <p className="font-body text-xs sm:text-sm text-bronze-brown">
                Faculty Conveners &amp; Student Organizing Committee of Chakravyuh 2.0
              </p>
            </div>
          </div>

          {/* Close Action */}
          <button
            onClick={onClose}
            aria-label="Close Coordinators Section"
            className="p-2 rounded-full border-2 border-gold-rich/60 bg-surface-lowest text-dark-chocolate hover:bg-gold-highlight hover:text-dark-chocolate hover:border-dark-chocolate transition-all duration-state-change shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-highlight"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions banner with Council Badge Count */}
        <div className="shrink-0 bg-surface-low border border-gold-rich/30 rounded-lg px-4 py-2 text-xs sm:text-sm text-bronze-brown flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-base shrink-0">💡</span>
            <span>
              <strong>Commander Pass Rail (32 Council Members):</strong> Scroll or drag horizontally to the right along the suspension rail to inspect all 32 commanders. Use the side arrows or swipe. Click any lanyard badge or press Enter to flip and view phone, email, credentials, and QR pass.
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-dark-chocolate text-gold-highlight font-label text-xs font-bold uppercase tracking-wider border border-gold-rich">
              32 Commanders
            </span>
            <span className="font-mono text-xs text-bronze-brown/80 hidden md:inline">
              Esc to exit
            </span>
          </div>
        </div>

        {/* Interactive Lanyard Rail Section (Never shrunk or vertically clipped) */}
        <div className="shrink-0 relative py-2 bg-surface-lowest/80 rounded-xl border-2 border-gold-rich/40 shadow-inner">
          <TeamLanyardRail
            items={CHAKRAVYUH_COMMANDERS}
            eyebrow="24-Hour National Arena · Organizing Committee"
            heading="War Room Council"
            caption="Click any warrior badge to flip and view phone, email, credentials, and track role."
            autoplay={false}
            interval={3500}
            labels={{
              flip: 'Click or press Enter to flip warrior credential',
              back: 'Click again or press Esc to return front',
              show: 'Inspect commander',
            }}
          />
        </div>

        {/* Quick Contact & Helplines Footer */}
        <div className="shrink-0 pt-3 border-t border-gold-rich/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
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
