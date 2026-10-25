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
      'bg-primary-container text-white hover:bg-[#38105c] shadow-[0_4px_16px_rgba(43,13,71,0.25)] hover:shadow-[0_6px_22px_rgba(43,13,71,0.35)]',
    gold:
      'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-[#291700] hover:from-amber-300 hover:to-amber-500 shadow-[0_4px_18px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.5)]',
    peach:
      'bg-gradient-to-r from-[#FF6B35] via-[#FF7A45] to-[#FFA07A] text-white hover:from-[#EA5319] hover:to-[#FF8E53] shadow-[0_4px_18px_rgba(255,107,53,0.35)] hover:shadow-[0_6px_24px_rgba(255,107,53,0.5)]',
    secondary:
      'bg-white text-primary-container hover:bg-slate-50 border border-slate-200/80 shadow-xs hover:shadow-md',
    outline:
      'bg-transparent border-2 border-secondary text-primary-container hover:bg-secondary/10',
    'peach-outline':
      'bg-transparent border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10',
    glass:
      'bg-white/15 backdrop-blur-md text-white border border-white/20 hover:bg-white/25 shadow-sm',
    ghost:
      'bg-transparent text-primary-container hover:text-peach'
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
