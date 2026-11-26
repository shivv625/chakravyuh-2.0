'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import TeamLanyardRail, { LanyardMember } from '@/components/ui/team-lanyard-rail';
import { SITE_CONFIG } from '@/content/site';
import { X, Phone, Mail, Shield } from 'lucide-react';

interface CoordinatorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 32-commander War Council across all divisions with authentic designation, photo, Instagram & GitHub handles
export const CHAKRAVYUH_COMMANDERS: LanyardMember[] = [
  {
    id: 'prof-mohanty',
    name: 'Prof. D. Mohanty',
    role: 'Faculty Convener',
    team: 'GITA · Dept. of CSE',
    tone: 2,
    image: '/team/coordinator_faculty.jpg',
    instagram: 'd_mohanty_cse',
    github: 'dmohanty-gita',
  },
  {
    id: 'ananya-pattnaik',
    name: 'Ananya Pattnaik',
    role: 'Lead Student Coordinator',
    team: 'Chakravyuh · Core Council',
    tone: 1,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'ananya.pattnaik',
    github: 'ananyapattnaik',
  },
  {
    id: 'subham-tripathy',
    name: 'Subham Tripathy',
    role: 'Operations & Alliances',
    team: 'Hospitality & Logistics',
    tone: 4,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'subham.tripathy_',
    github: 'subhamtripathy',
  },
  {
    id: 'rohan-behera',
    name: 'Rohan Behera',
    role: 'Technical & Platform Lead',
    team: 'Platform & Systems',
    tone: 3,
    image: '/team/coordinator_tech.jpg',
    instagram: 'rohan_behera_dev',
    github: 'rohanbehera',
  },
  {
    id: 'dr-sk-dash',
    name: 'Dr. S. K. Dash',
    role: 'Academic Patron',
    team: 'BPUT · Research Council',
    tone: 2,
    image: '/team/coordinator_faculty.jpg',
    instagram: 'dr_skdash',
    github: 'skdash-research',
  },
  {
    id: 'dr-mk-jena',
    name: 'Dr. M. K. Jena',
    role: 'Advisory Dean',
    team: 'Academic Affairs · GITA',
    tone: 2,
    image: '/team/coordinator_faculty.jpg',
    instagram: 'dr_mkjena',
    github: 'mkjena-gita',
  },
  {
    id: 'prof-ranjan-senapati',
    name: 'Prof. Ranjan Senapati',
    role: 'Faculty Co-Convener',
    team: 'Dept. of ECE · GITA',
    tone: 2,
    image: '/team/coordinator_faculty.jpg',
    instagram: 'ranjan_senapati',
    github: 'rsenapati-gita',
  },
  {
    id: 'prof-subhasmita-rout',
    name: 'Prof. Subhasmita Rout',
    role: 'Faculty Advisor',
    team: 'Innovation & Incubation Cell',
    tone: 2,
    image: '/team/coordinator_faculty.jpg',
    instagram: 'subhasmita_rout',
    github: 'srout-cse',
  },
  {
    id: 'priyadarshini-rath',
    name: 'Priyadarshini Rath',
    role: 'Jury Evaluation Cell Lead',
    team: 'Jury Coordination Council',
    tone: 1,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'priyadarshini_rath',
    github: 'priyadarshinirath',
  },
  {
    id: 'ayush-panda',
    name: 'Ayush Panda',
    role: 'Strategic Alliances & DevRel',
    team: 'Sponsorship & Outreach',
    tone: 3,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'ayush_panda_dev',
    github: 'ayushpanda',
  },
  {
    id: 'sneha-mohapatra',
    name: 'Sneha Mohapatra',
    role: 'Experience & Media Director',
    team: 'Media & Production House',
    tone: 1,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'sneha.mohapatra_',
    github: 'snehamohapatra',
  },
  {
    id: 'shreya-dash',
    name: 'Shreya Dash',
    role: 'Student Council Vice-President',
    team: 'Student Affairs Council',
    tone: 4,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'shreya_dash_',
    github: 'shreyadash',
  },
  {
    id: 'soumyajit-mahapatra',
    name: 'Soumyajit Mahapatra',
    role: 'Full-Stack Platform Architect',
    team: 'Systems & Infrastructure',
    tone: 3,
    image: '/team/coordinator_tech.jpg',
    instagram: 'soumyajit_m',
    github: 'soumyajitmahapatra',
  },
  {
    id: 'biswajit-sahoo',
    name: 'Biswajit Sahoo',
    role: 'Judging Engine Lead',
    team: 'Evaluation Engine Ops',
    tone: 3,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'biswajit_sahoo_',
    github: 'biswajitsahoo',
  },
  {
    id: 'priyanka-pradhan',
    name: 'Priyanka Pradhan',
    role: 'UI/UX Design Director',
    team: 'Creative & UI Guild',
    tone: 1,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'priyanka.pradhan_ui',
    github: 'priyankapradhan',
  },
  {
    id: 'aditya-narayan-mishra',
    name: 'Aditya Narayan Mishra',
    role: 'DevOps & Security Marshal',
    team: 'Cyber Warfare Support',
    tone: 3,
    image: '/team/coordinator_tech.jpg',
    instagram: 'aditya_mishra_ops',
    github: 'adityamishra',
  },
  {
    id: 'debidutta-nayak',
    name: 'Debidutta Nayak',
    role: 'Network & LAN Commander',
    team: 'Campus Infrastructure',
    tone: 4,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'debidutta_nayak',
    github: 'debiduttanayak',
  },
  {
    id: 'arpan-mohanty',
    name: 'Arpan Mohanty',
    role: 'War Room Logistics Commander',
    team: 'Hospitality & Venue',
    tone: 5,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'arpan_mohanty_',
    github: 'arpanmohanty',
  },
  {
    id: 'tapaswini-sahu',
    name: 'Tapaswini Sahu',
    role: 'Hospitality & Accommodation',
    team: 'Delegation Care Unit',
    tone: 4,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'tapaswini_sahu',
    github: 'tapaswinisahu',
  },
  {
    id: 'rajesh-kumar-barik',
    name: 'Rajesh Kumar Barik',
    role: 'Food & Refreshment Marshal',
    team: 'Hospitality Wing',
    tone: 5,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'rajesh_barik_',
    github: 'rajeshbarik',
  },
  {
    id: 'chinmayee-mishra',
    name: 'Chinmayee Mishra',
    role: 'Safety & First-Aid Lead',
    team: 'Health & Campus Safety',
    tone: 4,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'chinmayee_mishra',
    github: 'chinmayeemishra',
  },
  {
    id: 'smruti-ranjan-rout',
    name: 'Smruti Ranjan Rout',
    role: 'Transit & Logistics Captain',
    team: 'Transport Dispatch',
    tone: 5,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'smruti_rout_',
    github: 'smrutirout',
  },
  {
    id: 'abhishek-das',
    name: 'Abhishek Das',
    role: 'Mentor Desk Captain',
    team: 'Astra Technical Support',
    tone: 3,
    image: '/team/coordinator_tech.jpg',
    instagram: 'abhishek_das_dev',
    github: 'abhishekdas',
  },
  {
    id: 'pratyush-kumar-hota',
    name: 'Pratyush Kumar Hota',
    role: 'Hack Track Marshal',
    team: 'AI/ML & Vision Track',
    tone: 3,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'pratyush_hota',
    github: 'pratyushhota',
  },
  {
    id: 'sonali-pattnaik',
    name: 'Sonali Pattnaik',
    role: 'Hack Track Marshal',
    team: 'Web3 & Fintech Track',
    tone: 1,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'sonali_pattnaik_',
    github: 'sonalipattnaik',
  },
  {
    id: 'rakesh-kumar-swain',
    name: 'Rakesh Kumar Swain',
    role: 'Hack Track Marshal',
    team: 'Cyber Warfare Track',
    tone: 4,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'rakesh_swain_',
    github: 'rakeshswain',
  },
  {
    id: 'pritam-panda',
    name: 'Pritam Panda',
    role: 'Campus Ambassador Lead',
    team: 'National Outreach Guild',
    tone: 1,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'pritam_panda_',
    github: 'pritampanda',
  },
  {
    id: 'swati-sucharita',
    name: 'Swati Sucharita',
    role: 'Sponsorship & Partner Lead',
    team: 'Corporate Relations',
    tone: 2,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'swati_sucharita_',
    github: 'swatisucharita',
  },
  {
    id: 'bibek-ranjan-jena',
    name: 'Bibek Ranjan Jena',
    role: 'Broadcast & Visual Marshal',
    team: 'Media & Stage Tech',
    tone: 5,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'bibek_jena_media',
    github: 'bibekjena',
  },
  {
    id: 'ipsita-priyadarshini',
    name: 'Ipsita Priyadarshini',
    role: 'Registration Desk Commander',
    team: 'Check-in & Badge Ops',
    tone: 1,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'ipsita_priyadarshini',
    github: 'ipsitapriyadarshini',
  },
  {
    id: 'alok-kumar-parida',
    name: 'Alok Kumar Parida',
    role: 'Press & Public Relations Lead',
    team: 'Media & Communications',
    tone: 4,
    image: '/team/coordinator_lead_2.jpg',
    instagram: 'alok_parida_pr',
    github: 'alokparida',
  },
  {
    id: 'pragyan-paramita-sahoo',
    name: 'Pragyan Paramita Sahoo',
    role: 'Swag & Certification Lead',
    team: 'Kits & Merch Logistics',
    tone: 2,
    image: '/team/coordinator_lead_1.jpg',
    instagram: 'pragyan_sahoo_',
    github: 'pragyansahoo',
  },
];

export const CoordinatorsModal: React.FC<CoordinatorsModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

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
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="coordinators-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-dark-chocolate/90 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Maximum Coverage Screen Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[96vw] h-[92vh] sm:h-[95vh] max-h-[96vh] bg-cream-parchment text-navy-ink rounded-2xl sm:rounded-3xl border-4 border-gold-rich shadow-[0_25px_80px_rgba(20,10,4,0.85)] p-3 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden"
      >
        {/* 1. Header: ONLY writes "WAR COUNCIL" */}
        <div className="shrink-0 flex items-center justify-between border-b-2 border-gold-rich/40 pb-3 px-1 sm:px-3">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gold-highlight bg-dark-chocolate text-gold-highlight flex items-center justify-center shadow-md shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h2
              id="coordinators-title"
              className="font-headline text-2xl sm:text-3xl md:text-4xl text-dark-chocolate uppercase font-black tracking-wider"
            >
              War Council
            </h2>
          </div>

          {/* Close Action */}
          <button
            onClick={onClose}
            aria-label="Close Coordinators Section"
            className="p-2 sm:p-2.5 rounded-full border-2 border-gold-rich/60 bg-white text-dark-chocolate hover:bg-gold-highlight hover:text-dark-chocolate hover:border-dark-chocolate transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-highlight cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Middle Area: Lanyard Rail with 4 Large Cards per Frame */}
        <div className="flex-1 min-h-0 w-full overflow-hidden flex flex-col justify-center py-2 sm:py-3">
          <TeamLanyardRail items={CHAKRAVYUH_COMMANDERS} />
        </div>

        {/* 3. Bottom Helplines & Return Action */}
        <div className="shrink-0 pt-2.5 sm:pt-3 border-t border-gold-rich/40 flex flex-col md:flex-row items-center justify-between gap-2.5 text-xs sm:text-sm px-1 sm:px-3">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-bronze-brown font-label">
            <span className="font-bold text-dark-chocolate uppercase tracking-wider text-[11px] sm:text-xs">
              Direct Helplines:
            </span>
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
            className="px-6 py-2 rounded-full bg-dark-chocolate text-gold-highlight border border-gold-rich font-label text-xs uppercase tracking-wider font-bold hover:bg-bronze-brown transition-colors shadow-sm cursor-pointer"
          >
            Return to Arena
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorsModal;
