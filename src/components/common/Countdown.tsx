'use client';

import React, { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: string;
  className?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  className = '',
}) => {
  const [time, setTime] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const calculate = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        isPast: false,
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div
        className={`grid grid-cols-4 gap-3 sm:gap-4 max-w-lg w-full ${className}`}
        aria-label="Hackathon Countdown"
      >
        {['Days', 'Hrs', 'Min', 'Sec'].map((label) => (
          <div
            key={label}
            className="bg-dark-chocolate border border-gold-rich rounded p-3 flex flex-col items-center shadow"
          >
            <span className="font-headline text-headline-md md:text-headline-lg text-gold-highlight tabular-nums">
              --
            </span>
            <span className="font-label text-label-sm uppercase text-cream-parchment">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: 'Days', value: String(time.days).padStart(2, '0') },
    { label: 'Hrs', value: String(time.hours).padStart(2, '0') },
    { label: 'Min', value: String(time.minutes).padStart(2, '0') },
    { label: 'Sec', value: String(time.seconds).padStart(2, '0') },
  ];

  return (
    <div
      className={`grid grid-cols-4 gap-3 sm:gap-4 max-w-lg w-full ${className}`}
      aria-label="Hackathon Countdown"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className="bg-dark-chocolate border border-gold-rich rounded p-3 flex flex-col items-center shadow hover:border-gold-highlight transition-colors"
        >
          <span className="font-headline text-headline-md md:text-headline-lg text-gold-highlight tabular-nums">
            {unit.value}
          </span>
          <span className="font-label text-label-sm uppercase text-cream-parchment">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};
