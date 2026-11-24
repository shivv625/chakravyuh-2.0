'use client';

import React, { useEffect, useRef } from 'react';

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  initialSize: number;
  life: number;
  maxLife: number;
  buoyancy: number;
  wobbleSpeed: number;
  wobblePhase: number;
  wobbleAmp: number;
  type: 'spark' | 'ember' | 'smoke';
  active: boolean;
}

interface TrailPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
}

export const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chakraRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const flamePlumeRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Guard against touch devices / reduced motion for 100% mobile battery & native speed
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer) return;

    // State tracking without React re-renders (zero reconciliation lag)
    let mouseX = -100;
    let mouseY = -100;
    let prevMouseX = -100;
    let prevMouseY = -100;
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
    const flamePlume = flamePlumeRef.current;
    const canvas = canvasRef.current;

    if (!container || !chakra || !dot || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // High-DPI Canvas Setup
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // 1. Motion History Buffer for Continuous Fiery Wake (Comet ribbon)
    const MAX_TRAIL = 14;
    const trail: TrailPoint[] = [];

    // 2. Pre-allocated Particle Pool of 65 Embers (Zero GC allocations during motion)
    const MAX_EMBERS = 65;
    const embers: Ember[] = Array.from({ length: MAX_EMBERS }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      size: 0,
      initialSize: 0,
      life: 0,
      maxLife: 0,
      buoyancy: 0.05,
      wobbleSpeed: 0.1,
      wobblePhase: 0,
      wobbleAmp: 1,
      type: 'ember',
      active: false,
    }));
    let emberIndex = 0;

    const spawnEmber = (
      x: number,
      y: number,
      moveVx: number,
      moveVy: number,
      forcedType?: 'spark' | 'ember' | 'smoke'
    ) => {
      const e = embers[emberIndex];
      emberIndex = (emberIndex + 1) % MAX_EMBERS;

      const typeChoice =
        forcedType || (Math.random() < 0.4 ? 'spark' : Math.random() < 0.8 ? 'ember' : 'smoke');
      e.type = typeChoice;

      // Position jitter around chakra's flaming edge
      const angle = Math.random() * Math.PI * 2;
      const radius = typeChoice === 'smoke' ? 4 + Math.random() * 8 : 6 + Math.random() * 12;
      e.x = x + Math.cos(angle) * radius;
      e.y = y + Math.sin(angle) * radius;

      // Realistic combustion aerodynamics: counter-drag + thermal updraft
      const speed = Math.hypot(moveVx, moveVy);
      const dragFactor = typeChoice === 'spark' ? 0.22 : 0.12;
      e.vx = -moveVx * dragFactor + (Math.random() - 0.5) * (typeChoice === 'spark' ? 3.5 : 1.4);
      e.vy =
        -moveVy * dragFactor -
        (typeChoice === 'smoke' ? 0.6 + Math.random() * 0.8 : 0.4 + Math.random() * 1.2);

      if (typeChoice === 'spark') {
        e.initialSize = 1.0 + Math.random() * 1.6;
        e.maxLife = 14 + Math.floor(Math.random() * 14);
        e.buoyancy = 0.02;
        e.wobbleSpeed = 0.2 + Math.random() * 0.3;
        e.wobbleAmp = 0.5 + Math.random() * 1.2;
      } else if (typeChoice === 'ember') {
        e.initialSize = 2.2 + Math.random() * 2.8;
        e.maxLife = 26 + Math.floor(Math.random() * 22);
        e.buoyancy = 0.06 + Math.random() * 0.05;
        e.wobbleSpeed = 0.08 + Math.random() * 0.15;
        e.wobbleAmp = 1.0 + Math.random() * 1.8;
      } else {
        // Smoke wisp
        e.initialSize = 5.0 + Math.random() * 6.0;
        e.maxLife = 32 + Math.floor(Math.random() * 20);
        e.buoyancy = 0.08 + Math.random() * 0.06;
        e.wobbleSpeed = 0.05 + Math.random() * 0.08;
        e.wobbleAmp = 1.5 + Math.random() * 2.0;
      }

      e.size = e.initialSize;
      e.life = e.maxLife;
      e.wobblePhase = Math.random() * Math.PI * 2;
      e.active = true;
    };

    // 3. Realistic Blackbody Thermal Radiation Cooling Color Calculator
    // White-Hot -> Luminous Gold -> Vivid Amber -> Burning Saffron -> Charred Crimson -> Smoke
    const getEmberColor = (progress: number, type: 'spark' | 'ember' | 'smoke') => {
      // progress goes from 1.0 (just born) to 0.0 (extinguished)
      if (type === 'smoke') {
        const alpha = Math.max(0, progress * 0.22);
        return `rgba(58, 29, 14, ${alpha.toFixed(3)})`;
      }

      if (progress > 0.82) {
        // Incandescent White-Hot Yellow
        const t = (progress - 0.82) / 0.18;
        const r = 255;
        const g = Math.round(235 + 20 * t);
        const b = Math.round(140 + 105 * t);
        return `rgba(${r}, ${g}, ${b}, ${(0.95 * progress).toFixed(3)})`;
      } else if (progress > 0.52) {
        // Pure Solar Gold to Deep Amber
        const t = (progress - 0.52) / 0.3;
        const r = 251;
        const g = Math.round(160 + 35 * t);
        const b = Math.round(18 + 22 * t);
        return `rgba(${r}, ${g}, ${b}, ${(0.9 * progress).toFixed(3)})`;
      } else if (progress > 0.22) {
        // Burning Saffron to Fiery Crimson
        const t = (progress - 0.22) / 0.3;
        const r = Math.round(210 + 25 * t);
        const g = Math.round(55 + 65 * t);
        const b = Math.round(15 + 10 * t);
        return `rgba(${r}, ${g}, ${b}, ${(0.82 * progress).toFixed(3)})`;
      } else {
        // Cooling Charred Ash & Smoldering Ember Core
        const t = progress / 0.22;
        const r = Math.round(135 * t);
        const g = Math.round(28 * t);
        const b = Math.round(10 * t);
        return `rgba(${r}, ${g}, ${b}, ${(0.6 * t).toFixed(3)})`;
      }
    };

    // 4. Mouse movement listener (passive for highest performance)
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        chakraX = mouseX;
        chakraY = mouseY;
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        container.style.opacity = '1';
      }

      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      const dist = Math.hypot(dx, dy);

      // Add to fiery wake ribbon buffer
      if (dist > 1.5) {
        trail.unshift({ x: mouseX, y: mouseY, vx: dx, vy: dy, age: 0 });
        if (trail.length > MAX_TRAIL) trail.pop();

        // Spawn realistic burning embers along the interpolated flight trajectory
        const spawnCount = Math.min(4, Math.max(1, Math.floor(dist / 11)));
        for (let i = 0; i < spawnCount; i++) {
          const t = i / spawnCount;
          spawnEmber(prevMouseX + dx * t, prevMouseY + dy * t, dx, dy);
        }

        prevMouseX = mouseX;
        prevMouseY = mouseY;
      }
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (container) container.style.opacity = '1';
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (container) container.style.opacity = '0';
      trail.length = 0;
    };

    // 5. Interactive element hover detection via event delegation
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
      targetScale = isHovered ? (isPressed ? 1.25 : 1.5) : isPressed ? 0.85 : 1;
    };

    const onMouseDown = () => {
      isPressed = true;
      targetScale = isHovered ? 1.2 : 0.82;

      // Realistic Pyrotechnic Blast: shower of radiant micro sparks and rising heat
      for (let i = 0; i < 14; i++) {
        const burstAngle = Math.random() * Math.PI * 2;
        const burstSpeed = 2.5 + Math.random() * 6.5;
        spawnEmber(
          mouseX,
          mouseY,
          Math.cos(burstAngle) * burstSpeed,
          Math.sin(burstAngle) * burstSpeed,
          i % 2 === 0 ? 'spark' : 'ember'
        );
      }
    };

    const onMouseUp = () => {
      isPressed = false;
      targetScale = isHovered ? 1.5 : 1;
    };

    // 6. 60-120fps Hardware-Accelerated Physics Loop
    const lerp = 0.22;
    let lastTime = performance.now();
    let hadActiveGraphics = false;
    let idleCounter = 0;

    const loop = (now: number) => {
      const delta = Math.min((now - lastTime) / 16.67, 2);
      lastTime = now;

      // Update Cursor, Chakra & Directional Flame Plume
      if (isVisible) {
        const dx = mouseX - chakraX;
        const dy = mouseY - chakraY;
        chakraX += dx * lerp * delta;
        chakraY += dy * lerp * delta;

        const velocity = Math.hypot(dx, dy);

        // Dynamic spin acceleration with velocity
        const spinSpeed = prefersReducedMotion
          ? 0
          : isHovered
          ? 2.4 + velocity * 0.12
          : 1.0 + velocity * 0.08;

        rotation = (rotation + spinSpeed * delta) % 360;
        scale += (targetScale - scale) * 0.24 * delta;

        // Apply hardware-accelerated transform to Chakra
        chakra.style.transform = `translate3d(${chakraX}px, ${chakraY}px, 0) translate(-50%, -50%) rotate(${rotation.toFixed(
          2
        )}deg) scale(${scale.toFixed(3)})`;

        // Center pinpoint dot tracks mouse 1:1 with zero latency
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          isHovered ? '0.6' : '1'
        })`;

        // Dynamic Aerodynamic Flame Plume (trails behind movement)
        if (flamePlume) {
          if (velocity > 1.2) {
            const plumeAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 180;
            const stretch = Math.min(2.4, 1 + velocity * 0.06);
            flamePlume.style.opacity = `${Math.min(0.9, 0.4 + velocity * 0.04)}`;
            flamePlume.style.transform = `translate3d(${chakraX}px, ${chakraY}px, 0) translate(-50%, -50%) rotate(${plumeAngle}deg) scale(${stretch}, ${Math.max(
              0.7,
              1 - velocity * 0.02
            )})`;
          } else {
            // Idle smoldering breathing aura
            flamePlume.style.opacity = '0.35';
            flamePlume.style.transform = `translate3d(${chakraX}px, ${chakraY}px, 0) translate(-50%, -50%) scale(1)`;
          }
        }

        // Idle gentle smoke wisps when resting (smoldering fire)
        idleCounter += delta;
        if (velocity < 0.5 && idleCounter > 18) {
          idleCounter = 0;
          spawnEmber(chakraX, chakraY, 0, -0.4, 'smoke');
        }
      }

      // Age motion trail
      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].age += delta;
        if (trail[i].age > MAX_TRAIL) {
          trail.splice(i, 1);
        }
      }

      // Check active particles
      let activeEmbers = 0;
      for (let i = 0; i < MAX_EMBERS; i++) {
        if (embers[i].active) {
          activeEmbers++;
          break;
        }
      }

      const hasContentToDraw = activeEmbers > 0 || trail.length > 1;

      if (hasContentToDraw || hadActiveGraphics) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        hadActiveGraphics = hasContentToDraw;

        // Use Additive Blending for realistic luminous fire combustion
        ctx.globalCompositeOperation = 'lighter';

        // A. Draw Continuous Fiery Motion Wake Ribbon
        if (trail.length > 1) {
          for (let i = 0; i < trail.length - 1; i++) {
            const p1 = trail[i];
            const p2 = trail[i + 1];
            const progress = 1 - i / trail.length;

            const width = Math.max(1, 10 * progress * (isHovered ? 1.4 : 1));
            const alpha = progress * 0.45;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha.toFixed(3)})`;
            ctx.stroke();

            // Inner hot core of the wake
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = width * 0.4;
            ctx.strokeStyle = `rgba(254, 240, 138, ${(alpha * 1.5).toFixed(3)})`;
            ctx.stroke();
          }
        }

        // B. Update & Draw Thermal Embers with Brownian Motion & Cooling
        for (let i = 0; i < MAX_EMBERS; i++) {
          const e = embers[i];
          if (!e.active) continue;

          e.life -= delta;
          if (e.life <= 0) {
            e.active = false;
            continue;
          }

          // Convection & turbulent drift
          const progress = e.life / e.maxLife;
          const wobble = Math.sin(now * 0.006 * e.wobbleSpeed + e.wobblePhase) * e.wobbleAmp;

          e.vy -= e.buoyancy * delta; // thermal lift
          e.vx *= 0.95;
          e.vy *= 0.96;
          e.x += (e.vx + wobble) * delta;
          e.y += e.vy * delta;

          const currentSize =
            e.type === 'smoke'
              ? e.initialSize * (1 + 0.8 * (1 - progress)) // smoke expands
              : e.initialSize * (0.2 + 0.8 * progress); // embers shrink

          const color = getEmberColor(progress, e.type);

          // Draw ember particle core
          ctx.beginPath();
          ctx.arc(e.x, e.y, Math.max(0.6, currentSize), 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();

          // Soft radiant light halo for hot embers
          if (e.type !== 'smoke' && progress > 0.4 && e.initialSize > 1.8) {
            ctx.beginPath();
            ctx.arc(e.x, e.y, currentSize * 2.4, 0, Math.PI * 2);
            ctx.fillStyle = getEmberColor(progress * 0.35, e.type);
            ctx.fill();
          }
        }

        // Reset composite operation
        ctx.globalCompositeOperation = 'source-over';
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
      window.removeEventListener('resize', resizeCanvas);
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
    <>
      {/* 1. Full-screen Ultra-Lightweight Ember & Fire Wake Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[99997] select-none"
      />

      {/* 2. Cursor Elements Container */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none transition-opacity duration-300 opacity-0"
      >
        {/* Aerodynamic Burning Flame Plume (stretches along movement slipstream) */}
        <div
          ref={flamePlumeRef}
          className="pointer-events-none absolute left-0 top-0 w-16 h-8 -ml-8 -mt-4 rounded-full blur-[7px] will-change-transform opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 75% 50%, rgba(254,240,138,0.7) 0%, rgba(245,158,11,0.5) 35%, rgba(234,88,12,0.3) 65%, transparent 100%)',
          }}
        />

        {/* Inertial Trailing Burning Sudarshana Chakra */}
        <div
          ref={chakraRef}
          className="pointer-events-none absolute left-0 top-0 w-8 h-8 sm:w-9 sm:h-9 will-change-transform"
        >
          {/* Pulsating Burning Heat Aura */}
          <div
            className="pointer-events-none absolute -inset-2.5 rounded-full blur-[6px] animate-pulse"
            style={{
              background:
                'radial-gradient(circle, rgba(254,240,138,0.6) 0%, rgba(245,158,11,0.45) 35%, rgba(234,88,12,0.25) 65%, transparent 100%)',
              animationDuration: '1.8s',
            }}
          />

          {/* Deep Optical Fire Glow Filter */}
          <div
            className="w-full h-full"
            style={{
              filter:
                'drop-shadow(0 0 6px rgba(254, 240, 138, 0.9)) drop-shadow(0 0 12px rgba(245, 158, 11, 0.75)) drop-shadow(0 0 22px rgba(234, 88, 12, 0.4))',
            }}
          >
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <radialGradient id="solarGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="20%" stopColor="#FEF08A" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.7" />
                  <stop offset="80%" stopColor="#EA580C" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="25%" stopColor="#FEF08A" />
                  <stop offset="55%" stopColor="#FBBF24" />
                  <stop offset="85%" stopColor="#EA580C" />
                  <stop offset="100%" stopColor="#7C2D12" />
                </linearGradient>

                <linearGradient id="rimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#FDE047" />
                  <stop offset="80%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#C2410C" />
                </linearGradient>
              </defs>

              {/* Radiant White-Hot Solar Background Disc */}
              <circle cx="24" cy="24" r="23" fill="url(#solarGlow)" opacity="0.6" />

              {/* 12 Aerodynamic Serrated Flame Blades (Sudarshana Teeth) */}
              {Array.from({ length: 12 }, (_, i) => {
                const angle = i * 30;
                return (
                  <path
                    key={`blade-${i}`}
                    d="M24 1.8 C26 4.6 27.8 7.2 25.8 9.4 C24.6 10 23.4 10 22.2 9.4 C20.2 7.2 22 4.6 24 1.8 Z"
                    fill="url(#bladeGrad)"
                    stroke="#FFFBEB"
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
                strokeWidth="1.3"
                strokeDasharray="2.5 1.5"
                opacity="0.95"
              />

              {/* Inner Decorative Heat Groove */}
              <circle
                cx="24"
                cy="24"
                r="12.5"
                stroke="#F59E0B"
                strokeWidth="0.9"
                opacity="0.85"
              />

              {/* 12 Radiant Sunburst Energy Spokes */}
              {Array.from({ length: 12 }, (_, i) => (
                <line
                  key={`spoke-${i}`}
                  x1="24"
                  y1="9.5"
                  x2="24"
                  y2="18.5"
                  stroke="#FFFBEB"
                  strokeWidth="0.95"
                  strokeLinecap="round"
                  transform={`rotate(${i * 30} 24 24)`}
                  opacity="0.95"
                />
              ))}

              {/* Dark Chocolate Hub Base for Dramatic Contrast */}
              <circle
                cx="24"
                cy="24"
                r="5.5"
                fill="#240F04"
                stroke="url(#rimGrad)"
                strokeWidth="1.1"
              />

              {/* White-Hot Core Gemstone & Solar Bindu */}
              <circle cx="24" cy="24" r="3.2" fill="#F59E0B" />
              <circle cx="24" cy="24" r="1.8" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        {/* Instant Pinpoint Center Dot (follows mouse 1:1 with zero latency for clicking precision) */}
        <div
          ref={dotRef}
          className="pointer-events-none absolute left-0 top-0 w-2 h-2 rounded-full bg-amber-100 shadow-[0_0_10px_#FDE047,0_0_4px_#FFF] border border-amber-400 will-change-transform transition-[scale] duration-150"
        />
      </div>
    </>
  );
};

export default CustomCursor;
