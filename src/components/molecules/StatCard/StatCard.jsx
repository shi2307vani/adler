import React from 'react';

export default function StatCard({ value, label, subtext, color = 'text-primary' }) {
  return (
    <div className="p-4 sm:p-5 rounded-xl bg-surface-container-low shadow-sm flex flex-col items-start border border-secondary/10 hover:shadow-md transition-shadow">
      <span className={`font-headline-lg text-headline-lg font-extrabold ${color}`}>
        {value}
      </span>
      <span className="font-label-md text-label-md text-on-surface uppercase mt-1 tracking-wider font-semibold">
        {label}
      </span>
      {subtext && (
        <span className="font-body-sm text-xs text-on-surface-variant mt-0.5">
          {subtext}
        </span>
      )}
    </div>
  );
}
