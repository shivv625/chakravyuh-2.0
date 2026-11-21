import React from 'react';

interface QRFrameProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export const QRFrame: React.FC<QRFrameProps> = ({
  label,
  size = 'md',
  className = '',
  children,
}) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36',
  };

  return (
    <div className={`flex flex-col items-center gap-2.5 shrink-0 ${className}`}>
      <div className="p-2.5 bg-cream-parchment border-2 border-gold-rich rounded shadow-sm">
        {children ? (
          children
        ) : (
          <svg
            className={`${sizeClasses[size]} text-dark-chocolate`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label={label || 'QR Code'}
          >
            <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm10-2h2v2h-2v-2zm4 0h2v4h-2v-4zm-4 4h2v4h-2v-4zm4 2h2v2h-2v-2zm-6-2h2v2h-2v-2z" />
          </svg>
        )}
      </div>
      {label && (
        <span className="px-4 py-1 bg-dark-chocolate text-cream-parchment ribbon-pill font-label text-label-sm uppercase tracking-wider">
          {label}
        </span>
      )}
    </div>
  );
};
