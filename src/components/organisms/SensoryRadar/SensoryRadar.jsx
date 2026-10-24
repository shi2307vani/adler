import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import Icon from '../../atoms/Icon/Icon';

export default function SensoryRadar() {
  const { navigateTo } = useNavigation();

  return (
    <div className="relative rounded-2xl overflow-hidden bg-primary-container p-8 shadow-xl text-on-primary border border-secondary/20">
      <div className="flex items-center justify-between mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
          Sensory Radar Matrix
        </span>
        <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container-highest/20 text-secondary-fixed font-semibold">
          BATCH NO. 882
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 justify-center py-4">
        {/* Radial SVG chart */}
        <div className="relative w-52 h-52 shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            <circle
              className="text-primary opacity-30"
              cx="80"
              cy="80"
              fill="transparent"
              r="65"
              stroke="currentColor"
              strokeWidth="10"
            />
            <circle
              className="text-secondary-fixed"
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
              className="text-primary opacity-30"
              cx="80"
              cy="80"
              fill="transparent"
              r="48"
              stroke="currentColor"
              strokeWidth="8"
            />
            <circle
              className="text-tertiary-fixed"
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
            <span className="font-headline-md text-headline-md text-secondary-fixed font-extrabold">
              98.4
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim font-bold">
              Palate Score
            </span>
          </div>
        </div>

        {/* Metrics Bars */}
        <div className="flex flex-col gap-4 w-full">
          <div>
            <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1 font-semibold">
              <span className="text-surface-container-highest">Aroma Diffusion</span>
              <span className="text-secondary-fixed">96%</span>
            </div>
            <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
              <div className="h-full bg-secondary-fixed w-[96%] rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1 font-semibold">
              <span className="text-surface-container-highest">Cleanliness (Zero Film)</span>
              <span className="text-tertiary-fixed">100%</span>
            </div>
            <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
              <div className="h-full bg-tertiary-fixed w-full rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between font-label-sm text-label-sm uppercase mb-1 font-semibold">
              <span className="text-surface-container-highest">Champagne Effervescence</span>
              <span className="text-secondary-fixed">92%</span>
            </div>
            <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
              <div className="h-full bg-secondary-fixed w-[92%] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-primary/40 flex items-center justify-between font-body-sm text-body-sm text-primary-fixed-dim">
        <span>Dual Varietals: Mix Berries &amp; Sparkling Peach</span>
        <button
          type="button"
          onClick={() => navigateTo('our-products')}
          className="inline-flex items-center gap-1 text-secondary-fixed hover:text-white transition-colors font-label-sm text-label-sm uppercase font-bold cursor-pointer"
        >
          Explore Products <Icon name="arrow_forward" size="16px" />
        </button>
      </div>
    </div>
  );
}
