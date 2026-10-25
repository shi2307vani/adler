import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';

export default function NavItem({ item, mobile = false }) {
  const { currentPage, navigateTo } = useNavigation();
  const isActive = currentPage === item.id;

  const handleClick = (e) => {
    e.preventDefault();
    navigateTo(item.id);
  };

  if (mobile) {
    return (
      <a
        href={`#${item.id}`}
        onClick={handleClick}
        className={`w-full text-left py-3 px-4 rounded-lg font-label-lg text-label-lg transition-colors flex items-center justify-between cursor-pointer ${
          isActive
            ? 'bg-primary-container text-secondary-fixed font-bold'
            : 'text-on-surface-variant hover:bg-surface-container hover:text-primary-container'
        }`}
      >
        <span>{item.label}</span>
        {isActive && <span className="w-2 h-2 rounded-full bg-secondary-fixed" />}
      </a>
    );
  }

  return (
    <a
      href={`#${item.id}`}
      onClick={handleClick}
      className={`relative py-2 font-label-lg text-label-lg transition-colors tracking-wide cursor-pointer ${
        isActive
          ? 'text-primary-container font-extrabold'
          : 'text-slate-600 hover:text-[#FF6B35]'
      }`}
    >
      <span>{item.label}</span>
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-[#FF6B35] rounded-full" />
      )}
    </a>
  );
}
