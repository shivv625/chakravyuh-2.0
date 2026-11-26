"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, RotateCw } from "lucide-react";

export interface LanyardLink {
  label: string;
  href: string;
}

export interface LanyardMember {
  id: string;
  name: string;
  role: string;
  team?: string;
  image: string;
  tone?: 1 | 2 | 3 | 4 | 5;
  drop?: number;
  instagram?: string;
  github?: string;
  bio?: string;
  tags?: string[];
  links?: LanyardLink[];
}

export interface TeamLanyardRailLabels {
  flip: string;
  back: string;
  show: string;
}

export interface TeamLanyardRailProps extends React.ComponentProps<"section"> {
  items: LanyardMember[];
  eyebrow?: string;
  heading?: string;
  caption?: string;
  action?: React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  active?: number | null;
  onActiveChange?: (index: number | null) => void;
  flipped?: number | null;
  onFlippedChange?: (index: number | null) => void;
  labels?: TeamLanyardRailLabels;
}

// Ribbon tone colors
const STRAP_COLORS = {
  1: { bg: "bg-saffron", border: "border-burnt-orange", text: "text-saffron", light: "bg-saffron/10" },
  2: { bg: "bg-gold-rich", border: "border-gold-highlight", text: "text-gold-rich", light: "bg-gold-highlight/15" },
  3: { bg: "bg-krishna-blue", border: "border-sky-deep", text: "text-krishna-blue", light: "bg-krishna-blue/10" },
  4: { bg: "bg-peacock-green", border: "border-emerald-600", text: "text-peacock-green", light: "bg-peacock-green/10" },
  5: { bg: "bg-dark-chocolate", border: "border-bronze-brown", text: "text-dark-chocolate", light: "bg-dark-chocolate/10" },
};

export function TeamLanyardRail({
  items,
  heading = "War Council",
  caption,
  className,
}: TeamLanyardRailProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = React.useState<Record<string, boolean>>({});
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Drag-to-scroll state
  const isDraggingRef = React.useRef(false);
  const startXRef = React.useRef(0);
  const scrollLeftRef = React.useRef(0);
  const hasMovedRef = React.useRef(false);

  const checkScroll = React.useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);

    // Calculate approximate active page/index based on card width
    const cardWidth = el.clientWidth / (window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1);
    const index = Math.round(el.scrollLeft / cardWidth);
    setCurrentIndex(Math.min(items.length - 1, Math.max(0, index)));
  }, [items.length]);

  React.useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollByPages = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    // Scroll by the full container width so exactly 4 cards advance on desktop
    const scrollAmount = el.clientWidth * 0.95;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const toggleFlip = (id: string) => {
    if (hasMovedRef.current) return; // Prevent flip on drag end
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Mouse Drag to Scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true;
    }
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className={`relative w-full h-full flex flex-col justify-between select-none ${className || ""}`}>
      {/* 1. Lanyard Suspension Metallic Rail */}
      <div className="relative w-full z-20 shrink-0">
        <div
          className="w-full h-3 sm:h-3.5 rounded-full border border-gold-rich/80 shadow-md"
          style={{
            background:
              "linear-gradient(180deg, #5C2E0B 0%, #D9961F 35%, #F2B84B 50%, #B8521A 75%, #3A1D0E 100%)",
          }}
        />
        {/* Rail shadow line */}
        <div className="w-full h-1 bg-black/15 blur-[2px] mt-0.5" />
      </div>

      {/* 2. Floating Navigation Chevrons */}
      <button
        type="button"
        onClick={() => scrollByPages("left")}
        disabled={!canScrollLeft}
        aria-label="Previous 4 Commanders"
        className={`absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full bg-dark-chocolate text-gold-highlight border-2 border-gold-rich shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-200 ${
          canScrollLeft
            ? "opacity-100 scale-100 hover:bg-gold-highlight hover:text-dark-chocolate cursor-pointer"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={() => scrollByPages("right")}
        disabled={!canScrollRight}
        aria-label="Next 4 Commanders"
        className={`absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full bg-dark-chocolate text-gold-highlight border-2 border-gold-rich shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-200 ${
          canScrollRight
            ? "opacity-100 scale-100 hover:bg-gold-highlight hover:text-dark-chocolate cursor-pointer"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* 3. The Horizontal 4-Cards-Per-Frame Scroll Container */}
      <div
        ref={scrollContainerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="w-full h-full flex items-center gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth scrollbar-none py-4 px-2 sm:px-6 cursor-grab active:cursor-grabbing"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {items.map((member, index) => {
          const tone = member.tone || ((index % 5) + 1 as 1 | 2 | 3 | 4 | 5);
          const colors = STRAP_COLORS[tone] || STRAP_COLORS[2];
          const isFlipped = Boolean(flippedCards[member.id]);

          // Clean handles
          const instaHandle = member.instagram || member.id.replace(/-/g, ".");
          const githubHandle = member.github || member.id.replace(/-/g, "");

          return (
            <div
              key={member.id}
              className="shrink-0 flex flex-col items-center h-full justify-between w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              style={{
                scrollSnapAlign: "start",
              }}
            >
              {/* Realistic Lanyard Ribbon Strap Hanging From Rail */}
              <div className="shrink-0 flex flex-col items-center">
                {/* Ribbon Strap */}
                <div
                  className={`w-4 sm:w-5 h-7 sm:h-9 ${colors.bg} shadow-md border-x border-black/20 relative overflow-hidden`}
                >
                  {/* Subtle weave pattern */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 4px)",
                    }}
                  />
                </div>

                {/* Retractable Metallic Badge Reel / Clip */}
                <div className="relative -mt-1 z-10 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full border border-gold-rich bg-dark-chocolate shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold-highlight" />
                  </div>
                  {/* Chrome Badge Clip */}
                  <div
                    className="w-7 h-3 rounded-sm -mt-0.5 border border-black/40 shadow-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, #A0AEC0 0%, #E2E8F0 50%, #718096 100%)",
                    }}
                  />
                </div>
              </div>

              {/* 3D Flipping ID Card Container */}
              <div
                onClick={() => toggleFlip(member.id)}
                className="w-full flex-1 max-h-[460px] min-h-[380px] sm:min-h-[400px] cursor-pointer mt-1 group"
                style={{
                  perspective: "1200px",
                }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500 ease-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* ──────────────── FRONT OF ID CARD ──────────────── */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl border-2 border-gold-rich/60 shadow-xl overflow-hidden flex flex-col justify-between bg-white text-navy-ink p-4 sm:p-5"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* Top Watermark & Slot */}
                    <div className="flex flex-col items-center w-full">
                      {/* Slot Hole Punch */}
                      <div className="w-9 h-2 rounded-full bg-cream-parchment border border-gold-rich/40 shadow-inner mb-2" />

                      {/* Header Band */}
                      <div className="flex items-center justify-between w-full border-b border-gold-rich/30 pb-2">
                        <span className="font-headline text-[10px] sm:text-xs uppercase tracking-widest font-extrabold text-gold-rich">
                          CHAKRAVYUH 2.0
                        </span>
                        <span className="font-label text-[10px] uppercase font-bold text-dark-chocolate/70 bg-cream-parchment px-2 py-0.5 rounded border border-gold-rich/30">
                          COUNCIL PASS
                        </span>
                      </div>
                    </div>

                    {/* Middle: Prominent Photo & Name */}
                    <div className="flex flex-col items-center justify-center my-auto py-2">
                      {/* Large Portrait Photo */}
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-gold-rich shadow-md bg-cream-parchment">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 112px, 128px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="font-headline text-lg sm:text-xl font-black text-dark-chocolate tracking-tight text-center mt-3.5 line-clamp-1">
                        {member.name}
                      </h3>

                      {/* Designation */}
                      <div className="mt-2 inline-flex items-center">
                        <span className="font-label text-xs sm:text-xs font-extrabold uppercase tracking-wider text-saffron bg-saffron/10 border border-saffron/30 px-3.5 py-1 rounded-full text-center">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Bottom: Clean Subtle Flip Hint */}
                    <div className="w-full pt-2 border-t border-gold-rich/20 flex items-center justify-center gap-1.5 text-bronze-brown/80 group-hover:text-gold-rich transition-colors">
                      <RotateCw className="w-3.5 h-3.5 text-gold-rich" />
                      <span className="font-label text-[11px] uppercase tracking-wider font-semibold">
                        Click to view socials
                      </span>
                    </div>
                  </div>

                  {/* ──────────────── BACK OF ID CARD ──────────────── */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl border-2 border-gold-rich/60 shadow-xl overflow-hidden flex flex-col justify-between bg-white text-navy-ink p-4 sm:p-5"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Top Header */}
                    <div className="flex flex-col items-center w-full">
                      {/* Slot Hole Punch */}
                      <div className="w-9 h-2 rounded-full bg-cream-parchment border border-gold-rich/40 shadow-inner mb-2" />

                      <div className="flex items-center justify-between w-full border-b border-gold-rich/30 pb-2">
                        <span className="font-headline text-[10px] sm:text-xs uppercase tracking-widest font-extrabold text-gold-rich">
                          OFFICIAL CHANNELS
                        </span>
                        <span className="font-mono text-[10px] uppercase font-bold text-bronze-brown bg-cream-parchment px-2 py-0.5 rounded border border-gold-rich/30">
                          VERIFIED
                        </span>
                      </div>
                    </div>

                    {/* Commander Name & Role Recap */}
                    <div className="text-center my-1">
                      <h4 className="font-headline text-base sm:text-lg font-black text-dark-chocolate line-clamp-1">
                        {member.name}
                      </h4>
                      <p className="font-label text-[11px] text-bronze-brown font-semibold uppercase tracking-wider mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    {/* Only Instagram and GitHub (App icon, Name, Userid) */}
                    <div className="flex flex-col gap-3 my-auto w-full">
                      {/* 1. Instagram Link Box */}
                      <a
                        href={`https://instagram.com/${instaHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-cream-parchment to-white border border-gold-rich/40 hover:border-gold-highlight hover:shadow-md transition-all group/insta"
                      >
                        <div className="flex items-center gap-3">
                          {/* Instagram Official Gradient Icon */}
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-sm shrink-0">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <span className="font-label text-[11px] uppercase tracking-wider text-bronze-brown font-bold block">
                              Instagram
                            </span>
                            <span className="font-mono text-xs font-bold text-dark-chocolate group-hover/insta:text-saffron transition-colors block line-clamp-1">
                              @{instaHandle}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-bronze-brown/60 group-hover/insta:text-saffron transition-colors" />
                      </a>

                      {/* 2. GitHub Link Box */}
                      <a
                        href={`https://github.com/${githubHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-cream-parchment to-white border border-gold-rich/40 hover:border-gold-highlight hover:shadow-md transition-all group/git"
                      >
                        <div className="flex items-center gap-3">
                          {/* GitHub Official Icon */}
                          <div className="w-9 h-9 rounded-lg bg-[#24292e] flex items-center justify-center text-white shadow-sm shrink-0">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <span className="font-label text-[11px] uppercase tracking-wider text-bronze-brown font-bold block">
                              GitHub
                            </span>
                            <span className="font-mono text-xs font-bold text-dark-chocolate group-hover/git:text-gold-rich transition-colors block line-clamp-1">
                              @{githubHandle}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-bronze-brown/60 group-hover/git:text-gold-rich transition-colors" />
                      </a>
                    </div>

                    {/* Bottom: Return Front Hint */}
                    <div className="w-full pt-2 border-t border-gold-rich/20 flex items-center justify-center gap-1.5 text-bronze-brown/80 group-hover:text-gold-rich transition-colors">
                      <RotateCw className="w-3.5 h-3.5 text-gold-rich" />
                      <span className="font-label text-[11px] uppercase tracking-wider font-semibold">
                        Click to flip front
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Bottom Frame Navigation Indicator */}
      <div className="shrink-0 flex items-center justify-between pt-2 px-2 text-xs text-bronze-brown">
        <span className="font-label uppercase font-bold tracking-wider text-dark-chocolate">
          War Council · {items.length} Commanders
        </span>

        {/* Page / Position Progress Indicator */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: Math.ceil(items.length / 4) }).map((_, p) => {
            const isActive = Math.floor(currentIndex / 4) === p;
            return (
              <button
                key={p}
                type="button"
                aria-label={`Go to frame ${p + 1}`}
                onClick={() => {
                  const el = scrollContainerRef.current;
                  if (!el) return;
                  const targetScroll = p * el.clientWidth;
                  el.scrollTo({ left: targetScroll, behavior: "smooth" });
                }}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-6 h-2 bg-gold-rich border border-dark-chocolate"
                    : "w-2 h-2 bg-gold-rich/30 hover:bg-gold-rich/60"
                }`}
              />
            );
          })}
        </div>

        <span className="font-label uppercase font-semibold text-[11px] hidden sm:inline">
          Showing 4 per frame · Scroll or swipe
        </span>
      </div>
    </div>
  );
}

export default TeamLanyardRail;
