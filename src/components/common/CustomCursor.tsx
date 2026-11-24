'use client';

import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chakraRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const rippleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Guard against non-desktop / touch devices for 100% mobile performance
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer) return;

    // State tracking without React re-renders (zero reconciliation overhead)
    let mouseX = -100;
    let mouseY = -100;
    let chakraX = -100;
    let chakraY = -100;
    let rotation = 0;
    let scale = 1;
    let targetScale = 1;
    let isVisible = false;
    let isHovered = false;
    let isPressed = false;
    let animationFrameId: number;

    const container = containerRef.current;
    const chakra = chakraRef.current;
    const dot = dotRef.current;
    const ripple = rippleRef.current;

    if (!container || !chakra || !dot) return;

    // 2. Mouse movement listener (passive for highest throughput)
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        chakraX = mouseX;
        chakraY = mouseY;
        container.style.opacity = '1';
      }
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (container) container.style.opacity = '1';
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (container) container.style.opacity = '0';
    };

    // 3. Interactive element hover detection via event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer') ||
          target.getAttribute('role') === 'button'
      );

      isHovered = isInteractive;
      targetScale = isHovered ? (isPressed ? 1.2 : 1.45) : isPressed ? 0.85 : 1;
    };

    const onMouseDown = () => {
      isPressed = true;
      targetScale = isHovered ? 1.15 : 0.8;

      // Trigger click ripple effect
      if (ripple) {
        ripple.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(0.4)`;
        ripple.style.opacity = '0.9';
        ripple.style.transition = 'none';

        // Animate outward shockwave
        requestAnimationFrame(() => {
          ripple.style.transition = 'transform 450ms cubic-bezier(0.1, 0.8, 0.3, 1), opacity 450ms ease-out';
          ripple.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(2.2)`;
          ripple.style.opacity = '0';
        });
      }
    };

    const onMouseUp = () => {
      isPressed = false;
      targetScale = isHovered ? 1.45 : 1;
    };

    // 4. Hardware-accelerated rAF animation loop
    const lerp = 0.18; // smooth inertia
    let lastTime = performance.now();

    const loop = (now: number) => {
      const delta = Math.min((now - lastTime) / 16.67, 2); // cap frame delta
      lastTime = now;

      if (isVisible) {
        // Linear interpolation for smooth trailing
        const dx = mouseX - chakraX;
        const dy = mouseY - chakraY;
        chakraX += dx * lerp * delta;
        chakraY += dy * lerp * delta;

        // Speed-dependent dynamic rotation + continuous hypnotic spin
        const velocity = Math.sqrt(dx * dx + dy * dy);
        const spinSpeed = prefersReducedMotion
          ? 0
          : isHovered
          ? 1.8 + velocity * 0.08
          : 0.75 + velocity * 0.05;

        rotation = (rotation + spinSpeed * delta) % 360;

        // Scale interpolation
        scale += (targetScale - scale) * 0.2 * delta;

        // Direct GPU style update
        chakra.style.transform = `translate3d(${chakraX}px, ${chakraY}px, 0) translate(-50%, -50%) rotate(${rotation.toFixed(
          2
        )}deg) scale(${scale.toFixed(3)})`;

        // Center pinpoint follows cursor 1:1 with zero latency
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          isHovered ? '0.7' : '1'
        })`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    // Attach listeners
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Pause on hidden tabs to conserve power
    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none transition-opacity duration-300 opacity-0"
    >
      {/* 1. Click Ripple Shockwave Ring */}
      <div
        ref={rippleRef}
        className="pointer-events-none absolute left-0 top-0 -ml-5 -mt-5 w-10 h-10 rounded-full border-2 border-amber-400 bg-amber-400/20 opacity-0 blur-[1px] will-change-transform"
      />

      {/* 2. Inertial Trailing Amber Chakra Disc */}
      <div
        ref={chakraRef}
        className="pointer-events-none absolute left-0 top-0 w-8 h-8 sm:w-9 sm:h-9 will-change-transform"
        style={{
          filter: 'drop-shadow(0 0 7px rgba(245, 158, 11, 0.75)) drop-shadow(0 0 15px rgba(217, 119, 6, 0.35))',
        }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <radialGradient id="chakraGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#D97706" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="40%" stopColor="#FBBF24" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>

          {/* Radiant Solar Background Aura */}
          <circle cx="24" cy="24" r="23" fill="url(#chakraGlow)" opacity="0.4" />

          {/* 12 Aerodynamic Serrated Flame Blades (Sudarshana Teeth) */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = i * 30;
            return (
              <path
                key={`blade-${i}`}
                d="M24 2.5 C25.8 5.2 27.2 7.5 25.5 9.2 C24.5 9.8 23.5 9.8 22.5 9.2 C20.8 7.5 22.2 5.2 24 2.5 Z"
                fill="url(#bladeGrad)"
                stroke="#FEF08A"
                strokeWidth="0.4"
                transform={`rotate(${angle} 24 24)`}
              />
            );
          })}

          {/* Outer Etched Wheel Rim */}
          <circle
            cx="24"
            cy="24"
            r="15"
            stroke="url(#rimGrad)"
            strokeWidth="1.2"
            strokeDasharray="2 1.5"
            opacity="0.95"
          />

          {/* Inner Decorative Concentric Groove */}
          <circle
            cx="24"
            cy="24"
            r="12.5"
            stroke="#F59E0B"
            strokeWidth="0.8"
            opacity="0.75"
          />

          {/* 12 Radiant Sunburst Spokes */}
          {Array.from({ length: 12 }, (_, i) => (
            <line
              key={`spoke-${i}`}
              x1="24"
              y1="9.5"
              x2="24"
              y2="18.5"
              stroke="#FDE68A"
              strokeWidth="0.9"
              strokeLinecap="round"
              transform={`rotate(${i * 30} 24 24)`}
              opacity="0.85"
            />
          ))}

          {/* Dark Chocolate Hub Base for Depth */}
          <circle
            cx="24"
            cy="24"
            r="5.5"
            fill="#2A1408"
            stroke="url(#rimGrad)"
            strokeWidth="1"
          />

          {/* Amber Core Gemstone & Solar Bindu */}
          <circle cx="24" cy="24" r="3.2" fill="#F59E0B" />
          <circle cx="24" cy="24" r="1.6" fill="#FFFBEB" />
        </svg>
      </div>

      {/* 3. Instant Pinpoint Center Dot (follows mouse with 0ms latency for clicking precision) */}
      <div
        ref={dotRef}
        className="pointer-events-none absolute left-0 top-0 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#F59E0B] border border-amber-500/80 will-change-transform transition-[scale] duration-150"
      />
    </div>
  );
};

export default CustomCursor;
