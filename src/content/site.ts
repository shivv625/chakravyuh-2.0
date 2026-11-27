/**
 * CHAKRAVYUH 2.0 — SINGLE SOURCE OF TRUTH (SITE CONTENT)
 * 
 * Rules:
 * 1. Put EVERY event fact, date, prize, link, phone, email, and sponsor here.
 * 2. Unverified values are clearly tagged with TODO_ prefixes so organizers
 *    can fill them easily without touching UI components.
 */

export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  phone: string;
  photo: string;
  quote: string;
}

export interface GateStage {
  id: number;
  gateNumber: string;
  badge: string;
  title: string;
  datetime: string;
  timestamp: string; // ISO format
  description: string;
  icon: string;
  accentColor: string;
  status: 'live' | 'upcoming' | 'completed';
}

export interface TrackDomain {
  id: string;
  code: string;
  title: string;
  tagline: string;
  iconName: string;
  tags: string[];
}

export interface RuleItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Sponsor {
  name: string;
  tier: 'title' | 'gold' | 'silver' | 'partner';
  tagline?: string;
  logoUrl?: string;
  websiteUrl?: string;
}

export const SITE_CONFIG = {
  // Event Essentials
  EVENT_NAME: "CHAKRAVYUH 2.0",
  EVENT_EDITION: "2.0",
  TAGLINE: "Break The Chakravyuh",
  SUBTITLE: "National Level 24-Hour Hackathon",
  ORGANIZER: "GITA Autonomous College, Bhubaneswar",
  ACADEMIC_PARTNER: "In association with BPUT, Odisha",
  COLLEGE_FULL_NAME: "Gandhi Institute for Technological Advancement (GITA Autonomous College)",
  
  // Single Toggle: External Registration vs Built-in Multi-Step Form
  // Set to true to redirect to REGISTRATION_URL, false to show built-in multi-step modal
  USE_EXTERNAL_REGISTRATION: false,
  REGISTRATION_URL: "TODO_REGISTRATION_PORTAL_LINK_DEV_OR_UNSTOP", // e.g. "https://unstop.com/hackathons/chakravyuh-2"

  // Dates & Deadlines (Live Countdown Target)
  // Format: YYYY-MM-DDTHH:mm:ss+05:30
  REGISTRATION_START: "2026-12-15T10:00:00+05:30",
  REGISTRATION_DEADLINE: "2027-01-10T23:59:59+05:30",
  SHORTLIST_ANNOUNCEMENT: "2027-01-15T18:00:00+05:30",
  EVENT_START: "2027-01-23T09:00:00+05:30",
  EVENT_END: "2027-01-24T18:00:00+05:30",

  // Venue & Location
  VENUE: {
    NAME: "GITA Autonomous College Campus",
    HALL: "TODO_MAIN_AUDITORIUM_OR_CS_BLOCK_NAME",
    ADDRESS: "Badaraghunathpur, Madanpur, Bhubaneswar, Odisha 752054",
    GOOGLE_MAPS_EMBED_URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.184948834044!2d85.73373207593675!3d20.219958014766206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a861d8a25c61%3A0xc3d29dd5496d8011!2sGITA%20Autonomous%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    GOOGLE_MAPS_LINK: "https://maps.app.goo.gl/gita-bhubaneswar",
  },

  // Key Event Metrics
  METRICS: {
    PRIZE_POOL_TOTAL: "₹1,50,000",
    PRIZE_POOL_DISPLAY: "₹1,50,000/-",
    FIRST_PRIZE: "TODO_FIRST_PRIZE_AMOUNT_E_G_75000",
    SECOND_PRIZE: "TODO_SECOND_PRIZE_AMOUNT_E_G_45000",
    THIRD_PRIZE: "TODO_THIRD_PRIZE_AMOUNT_E_G_25000",
    DURATION_HOURS: "24 Hours",
    EXPECTED_PARTICIPANTS: "500+",
    SHORTLISTED_TEAMS: "125 Teams",
    COLLEGES_REPRESENTED: "40+",
    TEAM_SIZE_MIN: 2,
    TEAM_SIZE_MAX: 4,
    REGISTRATION_FEE_SUBMISSION: "Free",
    HOSPITALITY_FEE_PER_MEMBER: "₹400", // Accommodation & Food for 24 hours for shortlisted finals
  },

  // Official Documents
  DOCUMENTS: {
    RULEBOOK_PDF_URL: "/rulebook.pdf", // Placeholder in public/rulebook.pdf
    SPONSORSHIP_BROCHURE_URL: "/sponsorship-brochure.pdf",
  },

  // Socials & Communities
  COMMUNITIES: {
    WHATSAPP_JOIN_LINK: "TODO_WHATSAPP_COMMUNITY_INVITE_URL",
    DISCORD_JOIN_LINK: "TODO_DISCORD_SERVER_INVITE_URL",
    INSTAGRAM_HANDLE: "@chakravyuh.gita",
    INSTAGRAM_URL: "https://instagram.com/chakravyuh.gita", // TODO_VERIFY_INSTAGRAM_LINK
    LINKEDIN_URL: "https://linkedin.com/school/gita-autonomous-college", // TODO_VERIFY_LINKEDIN_LINK
    GITHUB_ORG_URL: "https://github.com/gita-chakravyuh", // TODO_VERIFY_GITHUB_ORG
  },

  // Contact Info
  CONTACT: {
    PRIMARY_PHONE: "+91 94370 12840",
    SECONDARY_PHONE: "+91 82491 55312",
    EMAIL: "chakravyuh@gita.edu.in",
    WAR_ROOM_HELP_DESK: "+91 79784 31029",
  },

  // Seven Gates of Kurukshetra
  TIMELINE_GATES: [
    {
      id: 1,
      gateNumber: "Gate I",
      badge: "Live Now",
      title: "Registration Opens",
      datetime: "15 DEC 2026 · 10:00 AM",
      timestamp: "2026-12-15T10:00:00+05:30",
      description: "Portal opens for squads of 3–5 warriors across India to submit team roster and track preference.",
      icon: "Calendar",
      accentColor: "#F2B84B", // Gold Highlight
      status: "live",
    },
    {
      id: 2,
      gateNumber: "Gate II",
      badge: "Deadline",
      title: "Registration Closes",
      datetime: "10 JAN 2027 · 11:59 PM",
      timestamp: "2027-01-10T23:59:59+05:30",
      description: "Final deadline to lock squad details and submit initial problem statement ideation deck.",
      icon: "Hourglass",
      accentColor: "#E8761E", // Saffron
      status: "upcoming",
    },
    {
      id: 3,
      gateNumber: "Gate III",
      badge: "Selection",
      title: "Shortlist Announcement",
      datetime: "15 JAN 2027 · 06:00 PM",
      timestamp: "2027-01-15T18:00:00+05:30",
      description: "Top 125 teams chosen by the jury receive official Gate Passes to GITA Campus, Bhubaneswar.",
      icon: "CheckCircle",
      accentColor: "#4F74BE", // Krishna Blue
      status: "upcoming",
    },
    {
      id: 4,
      gateNumber: "Gate IV",
      badge: "Day 1 Kickoff",
      title: "Hackathon Kickoff",
      datetime: "23 JAN 2027 · 09:00 AM",
      timestamp: "2027-01-23T09:00:00+05:30",
      description: "Campus check-in, warrior badge issuance, inaugural conch, and 24-hour sprint commences.",
      icon: "Rocket",
      accentColor: "#F2B84B", // Gold Highlight
      status: "upcoming",
    },
    {
      id: 5,
      gateNumber: "Gate V",
      badge: "Checkpoint",
      title: "Mid Evaluation & Mentoring",
      datetime: "23 JAN 2027 · 08:00 PM",
      timestamp: "2027-01-23T20:00:00+05:30",
      description: "Architecture critique, progress checks, and deep mentorship with leading industry architects.",
      icon: "Users",
      accentColor: "#3E8E5A", // Peacock Green
      status: "upcoming",
    },
    {
      id: 6,
      gateNumber: "Gate VI",
      badge: "Day 2",
      title: "Final Pitch & Demonstration",
      datetime: "24 JAN 2027 · 02:00 PM",
      timestamp: "2027-01-24T14:00:00+05:30",
      description: "Live working product demos before the national jury and venture scouts.",
      icon: "Gavel",
      accentColor: "#E8761E", // Saffron
      status: "upcoming",
    },
    {
      id: 7,
      gateNumber: "Gate VII",
      badge: "Grand Finale",
      title: "Prize Distribution & Conclave",
      datetime: "24 JAN 2027 · 05:30 PM",
      timestamp: "2027-01-24T17:30:00+05:30",
      description: "Champions crowned, trophies consecrated, and ₹1,50,000 prize pool handed to victors.",
      icon: "Trophy",
      accentColor: "#F2B84B", // Gold Highlight
      status: "upcoming",
    },
  ] as GateStage[],

  // Hackathon Tracks (Astra Themes)
  TRACKS: [
    {
      id: "ai-ml",
      code: "Astra 01",
      title: "AI & Machine Learning",
      tagline: "Applied GenAI, Computer Vision, and Autonomous AI Agents.",
      iconName: "BrainCircuit",
      tags: ["GenAI", "Vision", "Agents"],
    },
    {
      id: "web3-trust",
      code: "Astra 02",
      title: "Web3 & Digital Trust",
      tagline: "Decentralized identity, DeFi rails, and verifiable credentials.",
      iconName: "ShieldCheck",
      tags: ["DeFi", "Identity", "Zero-Knowledge"],
    },
    {
      id: "fintech",
      code: "Astra 03",
      title: "FinTech & Payments",
      tagline: "UPI-scale transaction engines, fraud defense, and financial inclusion.",
      iconName: "Landmark",
      tags: ["Payments", "Security", "Credit Rails"],
    },
    {
      id: "healthtech",
      code: "Astra 04",
      title: "HealthTech & Diagnostics",
      tagline: "Rural telemedicine, AI triage, and low-cost diagnostic systems.",
      iconName: "HeartPulse",
      tags: ["Triage", "MedTech", "ABDM"],
    },
    {
      id: "open-innovation",
      code: "Astra 05",
      title: "Open Innovation & Smart Odisha",
      tagline: "AgriTech, IoT systems, clean energy, and smart governance.",
      iconName: "Globe",
      tags: ["AgriTech", "IoT", "Sustainability"],
    },
  ] as TrackDomain[],

  // Rules of the Battlefield (Niyam)
  RULES: [
    {
      id: "rule-1",
      number: "NIYAM 01",
      category: "Squads",
      title: "Team Size & Eligibility",
      description: "Teams must consist of 3 to 5 students. No compulsory girls participant. Open for all college students across India. Inter-college teams and multidisciplinary branches are warmly encouraged.",
    },
    {
      id: "rule-2",
      number: "NIYAM 02",
      category: "Integrity",
      title: "Original Code & GitHub Push",
      description: "All project code must be authored during the 24-hour sprint. Repositories must be initialized on kickoff morning and committed continuously to public or jury-accessible GitHub repos.",
    },
    {
      id: "rule-3",
      number: "NIYAM 03",
      category: "Arsenal",
      title: "Tech Stack & Hardware Kit",
      description: "Any open-source library, cloud service, or hardware toolkit is permitted. Teams should bring laptops, chargers, extension boards, and official college photo IDs.",
    },
    {
      id: "rule-4",
      number: "NIYAM 04",
      category: "Conduct",
      title: "Sportsmanship & Fair Play",
      description: "Strict zero-tolerance policy against plagiarism, pre-built proprietary software, harassment, or unethical conduct. Jury decisions on gate clearance are definitive and binding.",
    },
  ] as RuleItem[],

  // Judging Weights
  JUDGING_CRITERIA: [
    { title: "Innovation & Originality", weight: 30, color: "bg-saffron" },
    { title: "Technical Depth & Execution", weight: 30, color: "bg-bronze-brown" },
    { title: "Real-World Impact & Feasibility", weight: 25, color: "bg-krishna-blue" },
    { title: "Presentation & Live Demo", weight: 15, color: "bg-gold-rich" },
  ],

  // Frequently Asked Questions
  FAQS: [
    {
      id: "faq-1",
      question: "Is there an entry fee to apply for Chakravyuh 2.0?",
      answer: "No, initial online registration and idea submission are 100% free. Only the top 125 teams selected for the on-campus round pay a nominal ₹400 per person fee, which fully covers accommodation, meals, drinks, high-speed WiFi, and 24-hour campus facilities.",
    },
    {
      id: "faq-2",
      question: "Can teams use pre-trained AI models or cloud APIs?",
      answer: "Yes, utilizing open-weight AI models (e.g. LLaMA, Whisper) and standard cloud APIs (e.g. OpenAI, Google Cloud, Firebase) is permitted, provided all application logic, interface, data pipeline, and system integration are created during the hackathon.",
    },
    {
      id: "faq-3",
      question: "Are inter-college or cross-year teams allowed?",
      answer: "Yes! Squad members can belong to different colleges, different graduation years, or different engineering/non-engineering branches across India.",
    },
    {
      id: "faq-4",
      question: "What accommodation and facilities are provided?",
      answer: "Shortlisted finalists will receive hostel accommodation on the GITA Autonomous College campus, round-the-clock power and WiFi, snacks and meals, designated rest areas, and first-aid medical support.",
    },
    {
      id: "faq-5",
      question: "Will participation certificates and goodies be provided?",
      answer: "Every participant attending the physical hackathon receives an official BPUT-recognized certificate of participation, Chakravyuh 2.0 t-shirt, stickers, and partner swags.",
    },
  ] as FAQItem[],

  // Sponsors & Partners
  SPONSORS: {
    TITLE: {
      name: "Premier Title Partner",
      slotStatus: "Slot Open",
      tagline: "Empowering National Innovation & Student Builders",
      cta: "Become Title Sponsor",
    },
    GOLD: [
      { name: "Odisha Cloud Collective", tier: "gold", tagline: "Cloud Infrastructure Partner" },
      { name: "Kalinga DevWorks", tier: "gold", tagline: "Developer Tools Partner" },
    ],
    COMMUNITY: [
      { name: "BPUT Innovation Cell", tier: "partner", tagline: "University Ecosystem Partner" },
      { name: "TODO_COMMUNITY_PARTNER_2", tier: "partner", tagline: "Tech Community Partner" },
    ],
  },

  // Organizing Team & Commanders
  TEAM: [
    {
      name: "Prof. D. Mohanty",
      role: "Faculty Convener",
      department: "Dept. of Computer Science & Engineering",
      phone: "+91 94370 12840",
      photo: "/team/coordinator_faculty.jpg",
      quote: "Guiding student builders from classroom theory to national-scale impact.",
    },
    {
      name: "Ananya Pattnaik",
      role: "Lead Student Coordinator",
      department: "Organizing Committee",
      phone: "+91 82491 55312",
      photo: "/team/coordinator_lead_1.jpg",
      quote: "Every gate is an invitation to pierce complacency and ship something unforgettable.",
    },
    {
      name: "Subham Tripathy",
      role: "Operations & Alliances",
      department: "Hospitality & Logistics",
      phone: "+91 79784 31029",
      photo: "/team/coordinator_lead_2.jpg",
      quote: "24 hours of seamless campus hospitality, mentorship, and uninterrupted building.",
    },
    {
      name: "Rohan Behera",
      role: "Technical & Design Lead",
      department: "Platform & Judging Systems",
      phone: "+91 90402 67118",
      photo: "/team/coordinator_tech.jpg",
      quote: "Built by developers who care about visual elegance and engineering craft in equal measure.",
    },
  ] as TeamMember[],
};
