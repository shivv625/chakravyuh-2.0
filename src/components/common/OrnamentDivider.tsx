import React from 'react';

interface OrnamentDividerProps {
  color?: string;
  className?: string;
  variant?: 'classic' | 'gate' | 'mini';
}

export const OrnamentDivider: React.FC<OrnamentDividerProps> = ({
  color = '#D9961F',
  className = '',
  variant = 'classic',
}) => {
  if (variant === 'mini') {
    return (
      <div className={`flex items-center justify-center gap-2 my-2 ${className}`}>
        <span className="h-px w-8 bg-gold-rich/70" />
        <span className="w-1.5 h-1.5 rotate-45 bg-gold-highlight border border-bronze-brown" />
        <span className="h-px w-8 bg-gold-rich/70" />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto my-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-rich to-gold-highlight" />
      <div className="flex items-center gap-1.5 text-gold-rich">
        <svg
          className="w-5 h-5 text-gold-rich"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
        </svg>
      </div>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-rich to-gold-highlight" />
    </div>
  );
};
