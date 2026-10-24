import React from 'react';
import Icon from '../Icon/Icon';

export default function Badge({
  children,
  variant = 'default',
  icon = null,
  dot = false,
  dotColor = 'bg-secondary',
  className = ''
}) {
  const variantStyles = {
    default: 'bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm',
    primary: 'bg-primary-container text-on-primary font-label-sm text-label-sm',
    'primary-fixed': 'bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold',
    secondary: 'bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-semibold',
    'secondary-fixed': 'bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold',
    tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold',
    botanical: 'bg-tertiary-fixed/30 text-on-tertiary-container font-label-sm text-label-sm font-medium',
    glass: 'bg-surface-container-lowest/10 backdrop-blur-md text-surface-container-lowest font-label-sm text-label-sm',
    outline: 'border border-secondary/40 text-secondary font-label-sm text-label-sm font-medium'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm transition-all ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {dot && <span className={`w-2 h-2 rounded-full ${dotColor} shrink-0 animate-pulse`} />}
      {icon && <Icon name={icon} size="15px" className="shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
