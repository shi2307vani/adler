import React from 'react';
import Icon from '../../atoms/Icon/Icon';

export default function PharmacokineticGraph() {
  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-12 shadow-[0_20px_50px_rgba(28,25,36,0.06)] border border-slate-100">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary-container font-extrabold">
            Pharmacokinetic Energy Profile Over Time
          </h3>
          <p className="font-body-sm text-body-sm text-slate-500 mt-1">
            Clinical tracking of cognitive alertness and subjective jitter scores (Hours 0 to 6)
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-primary-container via-[#FF6B35] to-amber-400 shadow-xs" />
            <span className="font-label-sm text-label-sm uppercase text-primary-container font-extrabold">
              ADLER Botanical Synergy
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-xs" />
            <span className="font-label-sm text-label-sm uppercase text-slate-500 font-medium">
              Standard 250ml Energy Drink
            </span>
          </div>
        </div>
      </div>

      {/* Inline SVG Visualization with Peach-Gold-Purple Gradient */}
      <div className="w-full h-64 relative mb-6">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 900 240">
          <defs>
            <linearGradient id="adlerStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2b0d47" />
              <stop offset="35%" stopColor="#FF6B35" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
            <linearGradient id="adlerFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#2b0d47" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <line className="text-slate-200" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="900" y1="40" y2="40" />
          <line className="text-slate-200" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="900" y1="100" y2="100" />
          <line className="text-slate-200" stroke="currentColor" strokeDasharray="4 4" x1="0" x2="900" y1="160" y2="160" />
          <line className="text-slate-300" stroke="currentColor" x1="0" x2="900" y1="220" y2="220" />

          {/* Red line: Generic Energy Drink Spike and Collapse */}
          <path d="M 0 220 C 60 120, 100 20, 160 20 C 230 20, 270 180, 400 225 C 550 235, 750 235, 900 235" fill="none" stroke="#f43f5e" strokeLinecap="round" strokeWidth="3" />
          <circle cx="160" cy="20" fill="#f43f5e" r="5" />

          {/* Vibrant Peach & Gold line: ADLER Smooth Plateau */}
          <path d="M 0 220 C 80 180, 140 85, 240 75 C 380 65, 580 75, 720 110 C 820 135, 870 170, 900 185" fill="none" stroke="url(#adlerStrokeGrad)" strokeLinecap="round" strokeWidth="4.5" />
          <path d="M 0 220 C 80 180, 140 85, 240 75 C 380 65, 580 75, 720 110 C 820 135, 870 170, 900 185 L 900 220 L 0 220 Z" fill="url(#adlerFillGrad)" />

          {/* ADLER plateau markers */}
          <circle cx="240" cy="75" fill="#FF6B35" r="6" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="580" cy="75" fill="#D4AF37" r="6" stroke="#ffffff" strokeWidth="2.5" />
        </svg>
      </div>

      {/* Timeline X-Axis markers */}
      <div className="grid grid-cols-4 md:grid-cols-7 text-center font-label-sm text-label-sm text-slate-500 pt-3 border-t border-slate-100 font-semibold">
        <div>Hour 0<span className="block text-xs font-normal opacity-70">Consumption</span></div>
        <div>Hour 1<span className="block text-xs font-normal opacity-70">Rapid Uptake</span></div>
        <div>Hour 2<span className="block text-xs font-normal text-[#FF6B35] font-bold">Alpha-Wave Focus</span></div>
        <div>Hour 3<span className="block text-xs font-normal text-amber-600 font-bold">Flow State Plateau</span></div>
        <div>Hour 4<span className="block text-xs font-normal opacity-70">Sustained Stamina</span></div>
        <div>Hour 5<span className="block text-xs font-normal opacity-70">Gentle Taper</span></div>
        <div>Hour 6<span className="block text-xs font-normal opacity-70">Baseline Rest</span></div>
      </div>

      {/* Key Takeaway callout */}
      <div className="mt-8 p-4 rounded-2xl bg-[#FFF8F5] flex flex-col md:flex-row items-center justify-between gap-4 border border-orange-200/60">
        <div className="flex items-center gap-3">
          <Icon name="insights" size="24px" className="text-[#FF6B35]" />
          <span className="font-body-sm text-body-sm text-slate-700 font-bold">
            Result: Zero tremoring, zero post-sugar fatigue, 3.8x longer sustained task retention.
          </span>
        </div>
        <span className="font-label-sm text-label-sm uppercase px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white font-extrabold tracking-wider shadow-xs">
          Independent Lab Validated
        </span>
      </div>
    </div>
  );
}
