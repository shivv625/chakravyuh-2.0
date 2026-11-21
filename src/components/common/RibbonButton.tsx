'use client';

import React from 'react';
import Link from 'next/link';

interface RibbonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'saffron';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const RibbonButton: React.FC<RibbonButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  type = 'button',
  disabled = false,
}) => {
  const sizeStyles = {
    sm: 'px-5 py-1.5 text-label-sm',
    md: 'px-7 py-2.5 text-label-sm tracking-widest',
    lg: 'px-9 py-3.5 text-label-lg tracking-widest',
  };

  const variantStyles = {
    primary:
      'bg-dark-chocolate text-gold-highlight border border-gold-rich hover:bg-bronze-brown hover:text-cream-parchment shadow-md',
    secondary:
      'bg-cream-parchment/95 text-dark-chocolate border-2 border-bronze-brown hover:bg-light-surface-container',
    outline:
      'bg-transparent text-bronze-brown border border-bronze-brown hover:bg-bronze-brown hover:text-cream-parchment',
    saffron:
      'bg-saffron text-cream-parchment border border-gold-highlight hover:bg-burnt-orange shadow-md',
  };

  const baseClasses = `relative inline-flex items-center justify-center gap-2 ribbon-pill font-label uppercase transition-all duration-state-change focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-rich active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none animate-gold-shimmer ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
