import React from 'react';

interface GoldFrameProps {
  children: React.ReactNode;
  variant?: 'rect' | 'arched' | 'plaque';
  active?: boolean;
  className?: string;
}

export const GoldFrame: React.FC<GoldFrameProps> = ({
  children,
  variant = 'rect',
  active = false,
  className = '',
}) => {
  if (variant === 'arched') {
    return (
      <div
        className={`relative rounded-t-full border-4 border-gold-rich p-2 bg-light-surface-container-low shadow-lg ${className}`}
      >
        <div className="rounded-t-full overflow-hidden border border-bronze-brown">
          {children}
        </div>
      </div>
    );
  }

  if (variant === 'plaque') {
    return (
      <div
        className={`relative bg-dark-chocolate/95 border-2 rounded-lg p-6 text-center flex flex-col items-center gap-2.5 transition-transform duration-card-lift hover:-translate-y-1 ${
          active
            ? 'border-gold-highlight stage-plaque-active'
            : 'border-gold-rich stage-plaque'
        } ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative bg-light-surface-container-lowest border-2 border-gold-rich rounded-md p-6 shadow-sm transition-transform duration-card-lift hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
};
