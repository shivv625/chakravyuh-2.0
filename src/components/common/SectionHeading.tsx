import React from 'react';
import { OrnamentDivider } from './OrnamentDivider';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const alignClass =
    align === 'center'
      ? 'text-center items-center'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-2.5 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2">
          {align !== 'left' && <span className="h-px w-6 bg-gold-rich" />}
          <span
            className={`font-label text-label-sm uppercase tracking-widest ${
              isDark ? 'text-gold-highlight' : 'text-bronze-brown'
            }`}
          >
            {eyebrow}
          </span>
          <span className="h-px w-6 bg-gold-rich" />
        </div>
      )}

      <h2
        className={`font-display text-display-md-mobile md:text-display-md uppercase text-balance ${
          isDark ? 'text-gold-highlight' : 'text-bronze-brown'
        }`}
      >
        {title}
      </h2>

      <OrnamentDivider
        className={align === 'center' ? 'mx-auto' : align === 'left' ? 'ml-0' : 'mr-0'}
      />

      {subtitle && (
        <p
          className={`font-body text-body-md text-pretty max-w-xl ${
            isDark ? 'text-cream-parchment' : 'text-navy-ink'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
