'use client';

import React, { useEffect, useRef } from 'react';

interface FireSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  streakScale: number;
  life: number;
  maxLife: number;
  gravity: number;
  drag: number;
  flickerRate: number;
  flickerPhase: number;
  colorType: 0 | 1 | 2; // 0: White-hot gold, 1: Vivid amber, 2: Fiery saffron
  active: boolean;
}

export const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chakraRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Guard against touch devices / reduced motion for 100% mobile battery & native speed
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer) return;

    // State tracking without React re-renders (zero reconciliation overhead)
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
    const canvas = canvasRef.current;

    if (!container || !chakra || !dot || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Setup High-DPI Canvas
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

    // 2. Pre-allocated Spark Particle Pool of 85 Sparks (ZERO garbage collection pauses during motion)
    const MAX_SPARKS = 85;
    const sparks: FireSpark[] = Array.from({ length: MAX_SPARKS }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      width: 1.5,
      streakScale: 2.2,
      life: 0,
      maxLife: 20,
      gravity: 0.12,
      drag: 0.94,
      flickerRate: 15,
      flickerPhase: 0,
      colorType: 0,
      active: false,
    }));
    let sparkIndex = 0;

    const spawnSpark = (
      x: number,
      y: number,
      vx: number,
      vy: number,
      options?: {
        width?: number;
        streakScale?: number;
        maxLife?: number;
        gravity?: number;
        colorType?: 0 | 1 | 2;
      }
    ) => {
      const s = sparks[sparkIndex];
      sparkIndex = (sparkIndex + 1) % MAX_SPARKS;

      s.x = x;
      s.y = y;
      s.vx = vx;
      s.vy = vy;
      s.width = options?.width ?? (1.0 + Math.random() * 1.5);
      s.streakScale = options?.streakScale ?? (1.8 + Math.random() * 1.6);
      s.maxLife = options?.maxLife ?? (14 + Math.floor(Math.random() * 18));
      s.life = s.maxLife;
      s.gravity = options?.gravity ?? (0.08 + Math.random() * 0.12);
      s.drag = 0.93 + Math.random() * 0.03;
      s.flickerRate = 12 + Math.random() * 18;
      s.flickerPhase = Math.random() * Math.PI * 2;
      s.colorType = options?.colorType ?? (Math.random() < 0.45 ? 0 : Math.random() < 0.8 ? 1 : 2);
      s.active = true;
    };

    // 3. Mouse Movement Listener
    let centrifugalTimer = 0;

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

      if (dist > 2.5) {
        const moveAngle = Math.atan2(dy, dx);
        const count = Math.min(5, Math.max(1, Math.floor(dist / 9)));

        // Spray sparks backward along the motion slipstream with realistic angular spread
        for (let i = 0; i < count; i++) {
          const t = i / count;
          const spawnX = prevMouseX + dx * t;
          const spawnY = prevMouseY + dy * t;

          // Spray angle: backward with cone dispersion
          const sprayAngle = moveAngle + Math.PI + (Math.random() - 0.5) * 1.35;
          const sparkSpeed = 2.0 + Math.random() * 5.5 + dist * 0.15;

          // Jitter spawn origin around the chakra's spinning serrated rim
          const rimAngle = Math.random() * Math.PI * 2;
          const rimR = 8 + Math.random() * 10;

          spawnSpark(
            spawnX + Math.cos(rimR) * 6,
            spawnY + Math.sin(rimR) * 6,
            Math.cos(sprayAngle) * sparkSpeed + (Math.random() - 0.5) * 1.5,
            Math.sin(sprayAngle) * sparkSpeed - (0.5 + Math.random() * 1.2), // slight upward thermal lift
            {
              width: 1.0 + Math.random() * 1.6,
              streakScale: 2.2 + Math.random() * 1.4,
              maxLife: 16 + Math.floor(Math.random() * 16),
            }
          );
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
    };

    // 4. Interactive Hover & Click Detection
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

      // Concussive Spark Blast: 24 explosive high-speed needle sparks spraying outward
      for (let i = 0; i < 24; i++) {
        const angle = Math.random() * Math.PI * 2;
        const blastSpeed = 4.0 + Math.random() * 8.5;
        spawnSpark(
          mouseX,
          mouseY,
          Math.cos(angle) * blastSpeed,
          Math.sin(angle) * blastSpeed - 1.2,
          {
            width: 1.4 + Math.random() * 1.6,
            streakScale: 2.8 + Math.random() * 1.8,
            maxLife: 20 + Math.floor(Math.random() * 20),
            colorType: i % 3 as 0 | 1 | 2,
          }
        );
      }
    };

    const onMouseUp = () => {
      isPressed = false;
      targetScale = isHovered ? 1.45 : 1;
    };

    // 5. 60-120fps Hardware-Accelerated Animation Loop
    const lerp = 0.22;
    let lastTime = performance.now();
    let hadActiveSparks = false;

    const loop = (now: number) => {
      const delta = Math.min((now - lastTime) / 16.67, 2);
      lastTime = now;

      // Update Cursor & Chakra Transform
      if (isVisible) {
        const dx = mouseX - chakraX;
        const dy = mouseY - chakraY;
        chakraX += dx * lerp * delta;
        chakraY += dy * lerp * delta;

        const velocity = Math.hypot(dx, dy);

        // Spin acceleration with velocity
        const spinSpeed = prefersReducedMotion
          ? 0
          : isHovered
          ? 2.6 + velocity * 0.14
          : 1.2 + velocity * 0.08;

        rotation = (rotation + spinSpeed * delta) % 360;
        scale += (targetScale - scale) * 0.25 * delta;

        // Direct GPU style update
        chakra.style.transform = `translate3d(${chakraX}px, ${chakraY}px, 0) translate(-50%, -50%) rotate(${rotation.toFixed(
          2
        )}deg) scale(${scale.toFixed(3)})`;

        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          isHovered ? '0.6' : '1'
        })`;

        // Continuous Centrifugal Flung Sparks from the spinning wheel perimeter
        centrifugalTimer += delta;
        const threshold = isHovered ? 2.5 : velocity > 1 ? 2.0 : 4.5;
        if (centrifugalTimer >= threshold) {
          centrifugalTimer = 0;

          // Tangent to current rotation
          const theta = (rotation * Math.PI) / 180 + Math.random() * 0.6;
          const rimRadius = 14 * scale;
          const originX = chakraX + Math.cos(theta) * rimRadius;
          const originY = chakraY + Math.sin(theta) * rimRadius;

          // Tangent velocity vector + slight outward fling
          const tangentAngle = theta + Math.PI / 2;
          const flingSpeed = (1.5 + Math.random() * 3.5) * (spinSpeed * 0.6);

          spawnSpark(
            originX,
            originY,
            Math.cos(tangentAngle) * flingSpeed + (Math.random() - 0.5) * 1.5,
            Math.sin(tangentAngle) * flingSpeed - (0.4 + Math.random() * 0.8),
            {
              width: 1.0 + Math.random() * 1.4,
              streakScale: 2.0 + Math.random() * 1.5,
              maxLife: 15 + Math.floor(Math.random() * 14),
            }
          );
        }
      }

      // Check Active Sparks
      let activeCount = 0;
      for (let i = 0; i < MAX_SPARKS; i++) {
        if (sparks[i].active) {
          activeCount++;
          break;
        }
      }

      if (activeCount > 0 || hadActiveSparks) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        hadActiveSparks = activeCount > 0;

        // Optical additive blending for brilliant white-hot spark intersections
        ctx.globalCompositeOperation = 'lighter';

        for (let i = 0; i < MAX_SPARKS; i++) {
          const s = sparks[i];
          if (!s.active) continue;

          s.life -= delta;
          if (s.life <= 0) {
            s.active = false;
            continue;
          }

          // Physics: drag, gravity arc, thermal lift
          s.vx *= Math.pow(s.drag, delta);
          s.vy *= Math.pow(s.drag, delta);
          s.vy += s.gravity * delta;
          s.x += s.vx * delta;
          s.y += s.vy * delta;

          const progress = s.life / s.maxLife; // 1.0 -> 0.0

          // Electric crackle twinkle
          const flicker = 0.75 + 0.25 * Math.sin(now * 0.03 * s.flickerRate + s.flickerPhase);
          const alpha = progress * flicker;

          // High-Velocity Directional Streak Vectors
          // Tail stretches backward along instantaneous velocity vector
          const streakFactor = Math.min(4.5, s.streakScale);
          const tailX = s.x - s.vx * streakFactor;
          const tailY = s.y - s.vy * streakFactor;

          // Spark Streak Gradient (from tail to white-hot head)
          const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
          if (s.colorType === 0) {
            // White-Hot Golden Sparks
            grad.addColorStop(0, `rgba(234, 88, 12, 0)`);
            grad.addColorStop(0.3, `rgba(245, 158, 11, ${(0.6 * alpha).toFixed(3)})`);
            grad.addColorStop(0.7, `rgba(254, 240, 138, ${(0.9 * alpha).toFixed(3)})`);
            grad.addColorStop(1, `rgba(255, 255, 255, ${alpha.toFixed(3)})`);
          } else if (s.colorType === 1) {
            // Vivid Amber Fire Sparks
            grad.addColorStop(0, `rgba(220, 38, 38, 0)`);
            grad.addColorStop(0.35, `rgba(234, 88, 12, ${(0.65 * alpha).toFixed(3)})`);
            grad.addColorStop(0.75, `rgba(245, 158, 11, ${(0.95 * alpha).toFixed(3)})`);
            grad.addColorStop(1, `rgba(254, 240, 138, ${alpha.toFixed(3)})`);
          } else {
            // Molten Saffron Sparks
            grad.addColorStop(0, `rgba(185, 28, 28, 0)`);
            grad.addColorStop(0.4, `rgba(220, 38, 38, ${(0.7 * alpha).toFixed(3)})`);
            grad.addColorStop(0.8, `rgba(245, 158, 11, ${(0.9 * alpha).toFixed(3)})`);
            grad.addColorStop(1, `rgba(254, 215, 170, ${alpha.toFixed(3)})`);
          }

          // 1. Draw Directional Needle Spark Line
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(s.x, s.y);
          ctx.lineWidth = s.width * (0.4 + 0.6 * progress);
          ctx.lineCap = 'round';
          ctx.strokeStyle = grad;
          ctx.stroke();

          // 2. Radiant Glint Dot at the Spark Head
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.width * 0.75 * progress, 0, Math.PI * 2);
          ctx.fillStyle = s.colorType === 0 ? `rgba(255, 255, 255, ${alpha.toFixed(3)})` : `rgba(254, 240, 138, ${alpha.toFixed(3)})`;
          ctx.fill();

          // 3. Subtle Optical Halo for energetic sparks
          if (progress > 0.45 && s.width > 1.3) {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.width * 2.5 * progress, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(245, 158, 11, ${(0.22 * alpha).toFixed(3)})`;
            ctx.fill();
          }
        }

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
      {/* 1. Full-screen Ultra-Lightweight Fire Sparks Canvas */}
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
        {/* Inertial Trailing Burning Sudarshana Chakra with Sparks */}
        <div
          ref={chakraRef}
          className="pointer-events-none absolute left-0 top-0 w-8 h-8 sm:w-9 sm:h-9 will-change-transform"
        >
          {/* Pulsating Solar Fire Aura */}
          <div
            className="pointer-events-none absolute -inset-2 rounded-full blur-[5px] animate-pulse"
            style={{
              background:
                'radial-gradient(circle, rgba(254,240,138,0.55) 0%, rgba(245,158,11,0.4) 40%, rgba(220,38,38,0.2) 70%, transparent 100%)',
              animationDuration: '1.6s',
            }}
          />

          {/* Golden Flame Spark Drop Shadow */}
          <div
            className="w-full h-full"
            style={{
              filter:
                'drop-shadow(0 0 6px rgba(254, 240, 138, 0.95)) drop-shadow(0 0 12px rgba(245, 158, 11, 0.8)) drop-shadow(0 0 20px rgba(234, 88, 12, 0.4))',
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
                  <stop offset="25%" stopColor="#FEF08A" stopOpacity="0.9" />
                  <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.75" />
                  <stop offset="85%" stopColor="#EA580C" stopOpacity="0.35" />
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

              {/* Radiant Solar Background Disc */}
              <circle cx="24" cy="24" r="23" fill="url(#solarGlow)" opacity="0.65" />

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
