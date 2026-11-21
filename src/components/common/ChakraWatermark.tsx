import React from 'react';

interface ChakraWatermarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: string;
}

export const ChakraWatermark: React.FC<ChakraWatermarkProps> = ({
  className = '',
  size = 'lg',
  opacity = 'opacity-25',
}) => {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96 md:w-[680px] md:h-[680px]',
    xl: 'w-[760px] h-[760px]',
  };

  return (
    <div
      className={`pointer-events-none flex items-center justify-center overflow-hidden ${opacity} ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`${sizeClasses[size]} text-gold-rich animate-chakra`}
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="200" cy="200" r="190" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="160" strokeWidth="1.2" />
        <circle cx="200" cy="200" r="130" strokeWidth="0.8" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="100" strokeWidth="1.2" />
        <circle cx="200" cy="200" r="70" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="40" strokeWidth="1.4" />
        <path
          d="M200 10v380M10 200h380M65 65l270 270M335 65L65 335"
          strokeWidth="0.6"
        />
        {/* Ornate spokes */}
        <circle cx="200" cy="200" r="12" fill="currentColor" />
      </svg>
    </div>
  );
};
