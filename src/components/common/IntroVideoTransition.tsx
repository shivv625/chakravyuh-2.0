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
    }, 700);
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setMounted(false);
      return;
    }

    // Safety timeout: Trimmed video is 6.1s. Transition automatically after 7.5s if not already ended.
    const safetyTimer = setTimeout(() => {
      if (!exitTriggeredRef.current) {
        triggerExit();
      }
    }, 7500);

    // Guaranteed autoplay on all mobile & desktop browsers
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback to strict muted autoplay if required by browser policy
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {
              // If still blocked, allow user click anywhere to trigger
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
      aria-label="Welcome intro video - click anywhere to enter"
      onClick={triggerExit}
      className={`fixed inset-0 z-[100] w-screen h-screen overflow-hidden bg-black transition-all duration-700 ease-out select-none cursor-pointer ${
        exiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'
      }`}
    >
      {/* 1. True Edge-to-Edge Fullscreen Video */}
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
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. Ambient Kurukshetra Cinematic Vignette Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"
      />

      {/* 3. Golden Sunburst Flash on Exit Transition */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-radial from-gold-highlight/50 via-saffron/25 to-transparent transition-opacity duration-700 ${
          exiting ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 4. Top Floating Bar (Branding + Audio Controls) */}
      <div className="absolute top-5 inset-x-0 z-20 flex items-center justify-between px-5 sm:px-8 pointer-events-none">
        {/* Left/Center Crest Badge */}
        <div className="pointer-events-auto flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-chocolate/90 border border-gold-rich/80 shadow-lg backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-gold-highlight animate-spin" style={{ animationDuration: '4s' }} />
          <span className="font-label text-xs uppercase tracking-widest text-gold-highlight font-bold">
            CHAKRAVYUH 2.0 · ARENA KICKOFF
          </span>
        </div>

        {/* Right Audio Toggle Button */}
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-chocolate/90 hover:bg-bronze-brown border border-gold-rich/80 text-gold-highlight backdrop-blur-md transition-all shadow-lg group cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-gold-highlight group-hover:scale-110 transition-transform" />
              <span className="font-label text-xs uppercase text-cream-parchment font-semibold hidden sm:inline">
                Unmute
              </span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-gold-highlight group-hover:scale-110 transition-transform" />
              <span className="font-label text-xs uppercase text-gold-highlight font-semibold hidden sm:inline">
                Sound On
              </span>
            </>
          )}
        </button>
      </div>

      {/* 5. Bottom Navigation Bar */}
      <div className="absolute bottom-5 inset-x-0 z-20 flex items-center justify-between px-5 sm:px-8 pointer-events-none">
        <span className="font-label text-cream-parchment/80 uppercase tracking-widest text-xs font-semibold drop-shadow-md hidden sm:inline">
          GITA Autonomous College · BPUT Odisha
        </span>

        {/* Enter Arena CTA */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            triggerExit();
          }}
          className="pointer-events-auto ml-auto inline-flex items-center gap-2.5 px-6 py-2.5 bg-dark-chocolate/95 hover:bg-gold-highlight hover:text-dark-chocolate text-gold-highlight border-2 border-gold-rich ribbon-pill font-label text-xs sm:text-sm uppercase tracking-widest font-bold shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
        >
          <span>Enter Arena</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 6. Glowing Gold Edge Progress Bar */}
      <div className="absolute bottom-0 inset-x-0 h-1.5 bg-black/80 z-30 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-saffron via-gold-highlight to-gold-rich transition-all duration-150 ease-linear shadow-[0_0_10px_#F2B84B]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
