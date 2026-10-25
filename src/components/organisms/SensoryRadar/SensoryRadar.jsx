import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import Icon from '../../atoms/Icon/Icon';

export default function SensoryRadar() {
  const { navigateTo } = useNavigation();

  return (
    <div className="relative rounded-3xl overflow-hidden bg-white p-8 shadow-[0_20px_50px_rgba(28,25,36,0.06)] text-slate-800 border border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-amber-600 font-extrabold">
          Sensory Radar Matrix
        </span>
        <span className="font-label-sm text-label-sm px-3.5 py-1 rounded-full bg-orange-50 text-[#FF6B35] border border-orange-200/60 font-bold">
          BATCH NO. 882
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 justify-center py-4">
        {/* Radial SVG chart with Peach-Gold Rings */}
        <div className="relative w-52 h-52 shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            <circle
              className="text-slate-100"
              cx="80"
              cy="80"
              fill="transparent"
              r="65"
              stroke="currentColor"
              strokeWidth="10"
            />
            <circle
              className="text-[#FF6B35]"
              cx="80"
              cy="80"
              fill="transparent"
              r="65"
              stroke="currentColor"
              strokeDasharray="408"
              strokeDashoffset="85"
              strokeLinecap="round"
              strokeWidth="10"
            />
            <circle
              className="text-slate-100"
              cx="80"
              cy="80"
              fill="transparent"
              r="48"
              stroke="currentColor"
              strokeWidth="8"
            />
            <circle
              className="text-amber-400"
              cx="80"
              cy="80"
              fill="transparent"
              r="48"
              stroke="currentColor"
              strokeDasharray="301"
              strokeDashoffset="40"
              strokeLinecap="round"
              strokeWidth="8"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-headline-lg text-headline-lg text-primary-container font-extrabold">
              98.4
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-500 font-bold">
              Palate Score
            </span>
          </div>
        </div>

        {/* Metrics Bars */}
        <div className="flex flex-col gap-4 w-full">
          <div>
            <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1.5 font-bold">
              <span className="text-slate-600">Aroma Diffusion</span>
              <span className="text-[#FF6B35]">96%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] w-[96%] rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1.5 font-bold">
              <span className="text-slate-600">Cleanliness (Zero Film)</span>
              <span className="text-emerald-600">100%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-full rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1.5 font-bold">
              <span className="text-slate-600">Champagne Effervescence</span>
              <span className="text-amber-500">92%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 w-[92%] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between font-body-sm text-body-sm text-slate-500">
        <span>Dual Varietals: Mix Berries &amp; Sparkling Peach</span>
        <button
          type="button"
          onClick={() => navigateTo('our-products')}
          className="inline-flex items-center gap-1 text-[#FF6B35] hover:text-[#EA5319] transition-colors font-label-sm text-label-sm uppercase font-bold cursor-pointer"
        >
          Explore Products <Icon name="arrow_forward" size="16px" />
        </button>
      </div>
    </div>
  );
}
