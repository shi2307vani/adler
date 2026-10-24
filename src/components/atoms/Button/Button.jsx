import React from 'react';
import Icon from '../Icon/Icon';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
  ...props
}) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-label-sm font-label-sm',
    md: 'px-6 py-2.5 text-label-md font-label-md',
    lg: 'px-8 py-3.5 text-label-lg font-label-lg'
  };

  const variantStyles = {
    primary:
      'bg-primary-container text-on-primary hover:opacity-95 shadow-[0_4px_16px_rgba(43,13,71,0.25)] hover:shadow-[0_6px_22px_rgba(43,13,71,0.35)]',
    gold:
      'bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed-dim shadow-[0_4px_16px_rgba(119,90,25,0.2)] hover:shadow-lg',
    secondary:
      'bg-surface-container-lowest text-primary-container hover:bg-surface-container shadow-sm hover:shadow-md',
    outline:
      'bg-transparent border border-secondary text-primary-container hover:bg-secondary/10',
    glass:
      'bg-surface-container-lowest/10 backdrop-blur-md text-on-primary hover:bg-surface-container-lowest/20',
    ghost:
      'bg-transparent text-primary-container hover:text-secondary'
  };

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider transition-all transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={rel}
        {...props}
      >
        {icon && iconPosition === 'left' && <Icon name={icon} size="18px" />}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <Icon name={icon} size="18px" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} size="18px" />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size="18px" />}
    </button>
  );
}
