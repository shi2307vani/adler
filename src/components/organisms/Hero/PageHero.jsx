import React from 'react';
import Badge from '../../atoms/Badge/Badge';

export default function PageHero({
  badge,
  breadcrumb,
  title,
  subtitle,
  children,
  className = '',
  statsStrip = null
}) {
  return (
    <section
      className={`relative w-full bg-surface-container-low overflow-hidden py-space-xl lg:py-24 px-margin-mobile lg:px-margin ${className}`}
    >
      {/* Subtle Ambient Glow Orbs */}
      <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-primary-fixed/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb & Badge */}
        {(badge || breadcrumb) && (
          <div className="flex flex-wrap items-center gap-space-sm mb-6">
            {badge && (
              <Badge variant="default" dot dotColor="bg-secondary">
                {badge}
              </Badge>
            )}
            {breadcrumb && (
              <>
                <span className="text-outline-variant font-label-sm">/</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase font-semibold">
                  {breadcrumb}
                </span>
              </>
            )}
          </div>
        )}

        {/* Title and Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <h1 className="font-headline-xl text-headline-xl sm:text-5xl text-primary font-bold tracking-tight uppercase leading-[1.1]">
              {title}
            </h1>
            {subtitle && (
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-2">
                {subtitle}
              </p>
            )}
          </div>
          {children && (
            <div className="lg:col-span-4 flex flex-col justify-end w-full">
              {children}
            </div>
          )}
        </div>

        {/* Optional Stats Strip */}
        {statsStrip && <div className="mt-10">{statsStrip}</div>}
      </div>
    </section>
  );
}
