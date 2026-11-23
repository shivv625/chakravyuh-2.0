'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, ArrowRight, Sparkles } from 'lucide-react';

interface IntroVideoTransitionProps {
  onComplete?: () => void;
}

export const IntroVideoTransition: React.FC<IntroVideoTransitionProps> = ({ onComplete }) => {
  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const exitTriggeredRef = useRef(false);

  const triggerExit = () => {
    if (exitTriggeredRef.current) return;
    exitTriggeredRef.current = true;
    setExiting(true);

    if (onComplete) {
      onComplete();
    }

    setTimeout(() => {
      setMounted(false);
      sessionStorage.setItem('chakravyuh_intro_shown', 'true');
    }, 750);
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setMounted(false);
      return;
    }

    // Safety timeout: If video stalls or takes too long, reveal the page automatically after 9 seconds
    const safetyTimer = setTimeout(() => {
      if (!exitTriggeredRef.current) {
        triggerExit();
      }
    }, 9000);

    // Auto-attempt playback with sound catch
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocks autoplay with sound, ensure muted and retry
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {
              // If still blocked, fallback gracefully
            });
          }
        });
      }
    }

    return () => clearTimeout(safetyTimer);
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  if (!mounted) return null;

  return (
    <div
      aria-label="Welcome intro video"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-dark-chocolate transition-all duration-700 ease-out select-none ${
        exiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'
      }`}
    >
      {/* Ambient Kurukshetra Golden Glow Backlight */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40 transition-opacity duration-700"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-radial from-gold-highlight/30 via-saffron/15 to-transparent blur-3xl animate-pulse" />
      </div>

      {/* Rotating Sacred Chakra Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
        aria-hidden="true"
      >
        <svg
          className="w-[700px] h-[700px] text-gold-rich animate-chakra"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="200" cy="200" r="190" strokeWidth="0.8" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="150" strokeWidth="1" />
          <circle cx="200" cy="200" r="110" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="70" strokeWidth="1.2" />
          <path d="M200 10v380M10 200h380M66 66l268 268M334 66L66 334" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Centerpiece Video Theater Frame */}
      <div className="relative z-10 w-full max-w-4xl mx-4 sm:mx-6 flex flex-col items-center gap-4">
        {/* Top Floating Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-chocolate/90 border border-gold-rich/80 shadow-md backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-gold-highlight animate-spin" style={{ animationDuration: '4s' }} />
          <span className="font-label text-[11px] sm:text-xs uppercase tracking-widest text-gold-highlight font-bold">
            CHAKRAVYUH 2.0 · INITIATING ARENA
          </span>
        </div>

        {/* Video Card with Ornate Gold Frame */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border-2 border-gold-highlight shadow-[0_0_60px_rgba(242,184,75,0.25),0_20px_40px_rgba(0,0,0,0.8)]">
          {/* 4 Corner Antique Gold Accents */}
          <div className="pointer-events-none absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-gold-highlight z-20" />
          <div className="pointer-events-none absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-gold-highlight z-20" />
          <div className="pointer-events-none absolute bottom-3 left-2 w-5 h-5 border-b-2 border-l-2 border-gold-highlight z-20" />
          <div className="pointer-events-none absolute bottom-3 right-2 w-5 h-5 border-b-2 border-r-2 border-gold-highlight z-20" />

          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            src="/assets/chakravyuh_intro.mp4"
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={triggerExit}
            onError={triggerExit}
            className="w-full h-full object-cover"
          />

          {/* Golden Glint Sheen Effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark-chocolate/40 via-transparent to-transparent"
          />

          {/* Sound Toggle (Top-Right inside video) */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-dark-chocolate/80 hover:bg-bronze-brown border border-gold-rich/70 text-gold-highlight backdrop-blur-md transition-all shadow-md group cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-gold-highlight group-hover:scale-110 transition-transform" />
            ) : (
              <Volume2 className="w-4 h-4 text-gold-highlight group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Golden Progress Bar along bottom edge */}
          <div className="absolute bottom-0 inset-x-0 h-1.5 bg-dark-chocolate/80 z-20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-saffron via-gold-highlight to-gold-rich transition-all duration-150 ease-linear shadow-[0_0_8px_#F2B84B]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="w-full flex items-center justify-between px-2 pt-1 text-xs">
          <span className="font-label text-cream-parchment/80 uppercase tracking-wider text-[11px] sm:text-xs hidden sm:inline">
            GITA Autonomous College &amp; BPUT Odisha
          </span>

          {/* Enter Arena / Skip CTA */}
          <button
            type="button"
            onClick={triggerExit}
            className="group ml-auto inline-flex items-center gap-2 px-5 py-2 bg-dark-chocolate/95 hover:bg-gold-highlight hover:text-dark-chocolate text-gold-highlight border border-gold-rich ribbon-pill font-label text-xs uppercase tracking-widest font-bold shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
          >
            <span>Enter Arena</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
