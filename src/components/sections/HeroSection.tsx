'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/content/site';
import { Countdown } from '@/components/common/Countdown';
import { RibbonButton } from '@/components/common/RibbonButton';
import { ChakraWatermark } from '@/components/common/ChakraWatermark';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isSectionVisible, setIsSectionVisible] = useState(true);

  // Parallax on mouse move for desktop
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10px to +10px
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // IntersectionObserver to pause particle canvas when off-screen
  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Gold dust particle canvas (capped at 40, paused when off-screen or prefers-reduced-motion)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle setup
    const particleCount = 40;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2, // Drifts gently upwards
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    const render = () => {
      if (!isSectionVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.01;

        // Wrap around
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 184, 75, ${Math.max(0.1, Math.min(0.8, p.opacity))})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(217, 150, 31, 0.8)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isSectionVisible]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden sunburst-bg select-none"
    >
      {/* 1. Backdrop Artwork Layer with Subtle Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `scale(1.05) translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`,
        }}
      >
        <Image
          src="/assets/hero_kurukshetra_chariot.jpg"
          alt="Krishna and Arjuna on the chariot at Kurukshetra during golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Light Atmospheric Scrim */}
      <div className="absolute inset-0 hero-light-scrim pointer-events-none" />

      {/* 3. Floating Gold Dust Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 4. Centerpiece Logo, Headline, Prize Crest & Countdown */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-6 py-6 text-center flex flex-col items-center gap-4">
        {/* Eyebrow Ribbon */}
        <div className="inline-flex items-center gap-3 px-5 py-1.5 bg-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill">
          <span className="font-label text-label-sm uppercase tracking-widest font-bold">
            {SITE_CONFIG.SUBTITLE}
          </span>
        </div>

        {/* Big Brand & Headline */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-display text-headline-md md:text-headline-lg text-dark-chocolate tracking-widest uppercase">
            CHAKRAVYUH <span className="text-krishna-blue">2.0</span>
          </p>
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-gold-highlight epic-text-shadow uppercase text-balance leading-none">
            {SITE_CONFIG.TAGLINE}
          </h1>
          {/* Institutional Sub-title */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mt-1 max-w-2xl px-2">
            <span className="w-6 sm:w-10 h-px bg-gradient-to-r from-transparent to-gold-rich/70" />
            <p className="font-headline text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.22em] text-dark-chocolate drop-shadow-xs text-balance text-center">
              Gandhi Institute For Technological Advancement, BBSR
            </p>
            <span className="w-6 sm:w-10 h-px bg-gradient-to-l from-transparent to-gold-rich/70" />
          </div>
        </div>

        {/* Prize Pool Crest with Rotating Chakra Halo (Aligned Right in the Middle of Prize Pool) */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto my-1 flex items-center justify-center">
          {/* Rotating Chakra centered right in the middle of the Prize Pool Image */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-none -z-10 flex items-center justify-center transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(calc(-50% + ${-mouseOffset.x * 0.25}px), calc(-50% + ${-mouseOffset.y * 0.25}px), 0)`,
            }}
          >
            <ChakraWatermark size="lg" opacity="opacity-45" />
          </div>

          <Image
            src="/assets/prize_pool_crest.png"
            alt={`Prize Pool ${SITE_CONFIG.METRICS.PRIZE_POOL_DISPLAY}`}
            width={400}
            height={100}
            className="w-full max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-md relative z-10"
            priority
          />
        </div>

        {/* Live Brown Plate Countdown */}
        <Countdown targetDate={SITE_CONFIG.EVENT_START} />

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <RibbonButton
            href="#register"
            onClick={onRegisterClick}
            variant="primary"
            size="lg"
            className="shadow-lg"
          >
            Register Now
          </RibbonButton>
          <RibbonButton
            href="#timeline"
            variant="secondary"
            size="lg"
          >
            View Timeline
          </RibbonButton>
        </div>
      </div>

      {/* 6. Bottom Arrow Scroll Indicator */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 md:px-6 flex items-center justify-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-dark-chocolate hover:text-saffron transition-colors group"
        >
          <span className="font-label text-label-sm uppercase tracking-widest font-bold">
            Enter Gate I
          </span>
          <ChevronDown className="w-5 h-5 text-dark-chocolate group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
