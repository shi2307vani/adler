import React from 'react';
import Icon from '../../atoms/Icon/Icon';

export default function ValueCard({ item }) {
  return (
    <div
      className={`${item.span || 'lg:col-span-4'} bg-surface-container-low rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-secondary/10`}
    >
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-headline-md text-headline-md text-secondary/70 font-mono">
            {item.number}
          </span>
          <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-xs">
            <Icon name={item.icon} size="22px" />
          </div>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary-container uppercase tracking-tight font-bold">
          {item.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center gap-2 text-secondary font-label-sm text-label-sm font-semibold border-t border-surface-container-high/60">
        <span>{item.subtitle}</span>
      </div>
    </div>
  );
}
