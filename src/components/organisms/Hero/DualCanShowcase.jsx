import React from 'react';
import { PRODUCTS } from '../../../constants/products';
import { useNavigation } from '../../../context/NavigationContext';
import Icon from '../../atoms/Icon/Icon';

export default function DualCanShowcase() {
  const { navigateTo } = useNavigation();
  const [berry, peach] = PRODUCTS;

  return (
    <div className="relative w-full max-w-5xl mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
      {/* Can 1: Mix Berry Sparks */}
      <div
        onClick={() => navigateTo('our-products', 'mix-berry-sparks')}
        className="group relative rounded-2xl bg-gradient-to-b from-primary/80 to-primary-container p-6 shadow-2xl flex flex-col items-center transform transition-all duration-500 hover:-translate-y-2 border border-secondary/20 cursor-pointer"
      >
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/90 text-on-primary-container font-label-sm text-label-sm shadow-md border border-secondary/20">
          <span className="w-2 h-2 rounded-full bg-secondary-container" />
          <span>Flagship Elixir</span>
        </div>

        <div className="w-full h-80 sm:h-96 relative flex items-center justify-center overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(254,212,136,0.15),transparent_65%)] pointer-events-none" />
          <img
            alt={berry.name}
            src={berry.image}
            className="h-full w-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
          />
        </div>

        <div className="w-full text-center mt-4 relative z-10">
          <span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-widest font-bold">
            250ml • 0 Calorie Focus
          </span>
          <h3 className="font-headline-md text-headline-md text-on-primary mt-1 font-bold">
            {berry.name}
          </h3>
          <p className="font-body-sm text-body-sm text-outline-variant mt-1">
            Wild mountain berries • Blackcurrant notes • 80mg Clean Caffeine
          </p>
        </div>
      </div>

      {/* Can 2: Peach Sparks */}
      <div
        onClick={() => navigateTo('our-products', 'peach-sparks')}
        className="group relative rounded-2xl bg-gradient-to-b from-[#3a1d10]/80 to-primary-container p-6 shadow-2xl flex flex-col items-center transform transition-all duration-500 hover:-translate-y-2 border border-secondary/20 cursor-pointer"
      >
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm shadow-md font-semibold">
          <Icon name="sparkles" size="14px" />
          <span>Radiant Peach</span>
        </div>

        <div className="w-full h-80 sm:h-96 relative flex items-center justify-center overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(254,212,136,0.2),transparent_65%)] pointer-events-none" />
          <img
            alt={peach.name}
            src={peach.image}
            className="h-full w-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
          />
        </div>

        <div className="w-full text-center mt-4">
          <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest font-bold">
            250ml • Hydration Infusion
          </span>
          <h3 className="font-headline-md text-headline-md text-on-primary mt-1 font-bold">
            {peach.name}
          </h3>
          <p className="font-body-sm text-body-sm text-outline-variant mt-1">
            White peach blossoms • Himalayan electrolytes • Zen focus profile
          </p>
        </div>
      </div>
    </div>
  );
}
