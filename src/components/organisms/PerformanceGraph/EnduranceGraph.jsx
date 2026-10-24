import React from 'react';

export default function EnduranceGraph() {
  return (
    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm border border-secondary/15">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span className="font-label-md text-label-md text-primary-container font-bold uppercase tracking-wider">
          Cognitive Endurance Index
        </span>
        <div className="flex items-center gap-4 font-label-sm text-label-sm">
          <span className="flex items-center gap-1.5 font-semibold text-primary-container">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container" /> ADLER Elixirs
          </span>
          <span className="flex items-center gap-1.5 text-on-surface-variant">
            <span className="w-2.5 h-2.5 rounded-full bg-error" /> Traditional Caffeinated Cans
          </span>
        </div>
      </div>

      {/* SVG Graph visualization */}
      <div className="w-full h-48 py-2">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 200">
          {/* Grid Lines */}
          <line className="text-surface-variant" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="40" y2="40" />
          <line className="text-surface-variant" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="100" y2="100" />
          <line className="text-surface-variant" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="160" y2="160" />
          {/* Baseline */}
          <line className="text-outline-variant" stroke="currentColor" strokeWidth="1" x1="0" x2="600" y1="190" y2="190" />
          {/* Traditional Sugar/Energy curve (Spike & violent crash) */}
          <path d="M 10 185 Q 80 15, 140 25 T 240 185 T 600 185" fill="none" stroke="#ba1a1a" strokeLinecap="round" strokeWidth="2.5" />
          {/* ADLER Sustained Energy curve (Smooth elevation & plateau) */}
          <path d="M 10 185 Q 90 70, 200 65 T 380 75 T 600 130" fill="none" stroke="#2b0d47" strokeLinecap="round" strokeWidth="4" />
          {/* Subtle Gradient Area under ADLER Curve */}
          <path d="M 10 185 Q 90 70, 200 65 T 380 75 T 600 130 L 600 190 L 10 190 Z" fill="rgba(43, 13, 71, 0.08)" />
          {/* Marker points */}
          <circle cx="200" cy="65" fill="#fed488" r="5" stroke="#2b0d47" strokeWidth="2" />
          <circle cx="140" cy="25" fill="#ba1a1a" r="4" />
        </svg>
      </div>

      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-1 font-medium">
        <span>0h (Intake)</span>
        <span>1h (Peak Absorption)</span>
        <span>3h (Flow State)</span>
        <span>5h (Gentle Equilibrium)</span>
      </div>
    </div>
  );
}
