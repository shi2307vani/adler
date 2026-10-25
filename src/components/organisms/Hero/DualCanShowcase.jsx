import React from 'react';
import { PRODUCTS } from '../../../constants/products';
import { useNavigation } from '../../../context/NavigationContext';
import Icon from '../../atoms/Icon/Icon';

export default function DualCanShowcase() {
  const { navigateTo } = useNavigation();
  const [berry, peach] = PRODUCTS;

  return (
    <div className="relative w-full max-w-6xl mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch z-10">
      {/* Can 1: Mix Berry Sparks */}
      <div
        onClick={() => navigateTo('our-products', 'mix-berry-sparks')}
        className="group relative rounded-3xl bg-white/95 backdrop-blur-xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(43,13,71,0.08)] hover:shadow-[0_30px_70px_rgba(43,13,71,0.18)] flex flex-col justify-between items-center transform transition-all duration-500 hover:-translate-y-2 border border-purple-100 hover:border-purple-300/80 cursor-pointer overflow-hidden"
      >
        {/* Subtle royal purple & gold ambient backdrop aura */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none group-hover:bg-purple-500/15 transition-all" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />

        {/* Top Badges */}
        <div className="w-full flex items-center justify-between relative z-20">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container text-white font-label-sm text-label-sm shadow-md border border-amber-300/30">
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
            <span className="font-bold tracking-wider uppercase">Flagship Elixir</span>
          </div>

          <span className="px-3 py-1 rounded-full bg-purple-50 text-primary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
            250ml Slim Can
          </span>
        </div>

        {/* Large 3D Can Showcase Area */}
        <div className="w-full h-[400px] sm:h-[460px] lg:h-[500px] relative flex items-center justify-center my-4">
          {/* Luminous Pod / Pedestal Halo */}
          <div className="absolute bottom-6 w-48 sm:w-56 h-12 bg-purple-900/10 rounded-full blur-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

          {/* Floating Feature Tags */}
          <div className="hidden sm:flex flex-col gap-2 absolute left-0 top-1/3 z-20">
            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-primary-container text-xs font-bold shadow-md border border-purple-100 transform -translate-x-1 group-hover:translate-x-0 transition-transform">
              80mg Clean Caffeine
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-amber-600 text-xs font-bold shadow-md border border-amber-100 transform -translate-x-1 group-hover:translate-x-0 transition-transform delay-75">
              160mg Suntheanine®
            </span>
          </div>

          <img
            alt={berry.name}
            src={berry.image}
            className="h-full w-auto max-h-[480px] object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_25px_35px_rgba(43,13,71,0.35)]"
          />

          <div className="hidden sm:flex flex-col gap-2 absolute right-0 top-1/2 z-20">
            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold shadow-md border border-emerald-100 transform translate-x-1 group-hover:translate-x-0 transition-transform">
              0g Added Sugar
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-primary-container text-xs font-bold shadow-md border border-purple-100 transform translate-x-1 group-hover:translate-x-0 transition-transform delay-75">
              Wild Mountain Berries
            </span>
          </div>
        </div>

        {/* Can Details & Action Footer */}
        <div className="w-full text-center relative z-20 pt-2 border-t border-slate-100">
          <span className="font-label-sm text-label-sm text-amber-600 uppercase tracking-widest font-bold">
            Antioxidant Focus • Deep Cognitive Flow
          </span>
          <h3 className="font-headline-md text-headline-md text-primary-container mt-1 font-extrabold">
            {berry.name}
          </h3>
          <p className="font-body-sm text-body-sm text-slate-500 mt-1 max-w-sm mx-auto">
            Wild mountain blackberries &amp; crisp blackcurrant notes with zero artificial aftertaste.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-container text-white font-label-sm text-label-sm uppercase font-bold tracking-wider group-hover:bg-[#38105c] transition-colors shadow-sm">
            <span>Discover Elixir</span>
            <Icon name="arrow_forward" size="16px" className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Can 2: Peach Sparks (Vibrant Peach-Orange Showcase) */}
      <div
        onClick={() => navigateTo('our-products', 'peach-sparks')}
        className="group relative rounded-3xl bg-white/95 backdrop-blur-xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(255,107,53,0.1)] hover:shadow-[0_30px_70px_rgba(255,107,53,0.22)] flex flex-col justify-between items-center transform transition-all duration-500 hover:-translate-y-2 border border-orange-100 hover:border-orange-300/80 cursor-pointer overflow-hidden"
      >
        {/* Vibrant Peach-Orange Ambient Light */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FF6B35]/15 blur-3xl pointer-events-none group-hover:bg-[#FF6B35]/22 transition-all" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />

        {/* Top Badges */}
        <div className="w-full flex items-center justify-between relative z-20">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white font-label-sm text-label-sm shadow-md shadow-orange-500/25 border border-white/20">
            <Icon name="sparkles" size="14px" />
            <span className="font-bold tracking-wider uppercase">Radiant Peach</span>
          </div>

          <span className="px-3 py-1 rounded-full bg-orange-50 text-[#FF6B35] font-label-sm text-label-sm font-bold uppercase tracking-wider">
            250ml Slim Can
          </span>
        </div>

        {/* Large 3D Can Showcase Area */}
        <div className="w-full h-[400px] sm:h-[460px] lg:h-[500px] relative flex items-center justify-center my-4">
          {/* Luminous Pod / Pedestal Halo */}
          <div className="absolute bottom-6 w-48 sm:w-56 h-12 bg-[#FF6B35]/15 rounded-full blur-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.15),transparent_70%)] pointer-events-none" />

          {/* Floating Feature Tags */}
          <div className="hidden sm:flex flex-col gap-2 absolute left-0 top-1/3 z-20">
            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#FF6B35] text-xs font-bold shadow-md border border-orange-100 transform -translate-x-1 group-hover:translate-x-0 transition-transform">
              Himalayan Electrolytes
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-amber-600 text-xs font-bold shadow-md border border-amber-100 transform -translate-x-1 group-hover:translate-x-0 transition-transform delay-75">
              60mg Plant Caffeine
            </span>
          </div>

          <img
            alt={peach.name}
            src={peach.image}
            className="h-full w-auto max-h-[480px] object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_25px_35px_rgba(255,107,53,0.35)]"
          />

          <div className="hidden sm:flex flex-col gap-2 absolute right-0 top-1/2 z-20">
            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold shadow-md border border-emerald-100 transform translate-x-1 group-hover:translate-x-0 transition-transform">
              100% Stevia Reb-M
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#FF6B35] text-xs font-bold shadow-md border border-orange-100 transform translate-x-1 group-hover:translate-x-0 transition-transform delay-75">
              White Peach Blossoms
            </span>
          </div>
        </div>

        {/* Can Details & Action Footer */}
        <div className="w-full text-center relative z-20 pt-2 border-t border-slate-100">
          <span className="font-label-sm text-label-sm text-[#FF6B35] uppercase tracking-widest font-bold">
            Electrolyte Renewal • Zen Equilibrium
          </span>
          <h3 className="font-headline-md text-headline-md text-primary-container mt-1 font-extrabold">
            {peach.name}
          </h3>
          <p className="font-body-sm text-body-sm text-slate-500 mt-1 max-w-sm mx-auto">
            Sun-kissed white peaches &amp; Himalayan pink rock minerals with micro-fine effervescence.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white font-label-sm text-label-sm uppercase font-bold tracking-wider hover:from-[#EA5319] hover:to-[#FF8E53] transition-colors shadow-sm shadow-orange-500/20">
            <span>Discover Elixir</span>
            <Icon name="arrow_forward" size="16px" className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
