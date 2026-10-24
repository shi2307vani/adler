import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';

export default function Logo({ variant = 'header', className = '' }) {
  const { navigateTo } = useNavigation();

  if (variant === 'footer') {
    return (
      <div
        onClick={() => navigateTo('home')}
        className={`flex flex-col items-start gap-2 cursor-pointer select-none group ${className}`}
      >
        <img
          src="/images/logo.png?v=2"
          alt="ADLER BEVERAGES - FOCUS LIKE AN EAGLE"
          className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => navigateTo('home')}
      className={`flex items-center gap-3 cursor-pointer select-none group text-left ${className}`}
    >
      <img
        src="/images/logo.png?v=2"
        alt="ADLER BEVERAGES"
        className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
