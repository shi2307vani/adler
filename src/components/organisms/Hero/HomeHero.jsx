import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import DualCanShowcase from './DualCanShowcase';

export default function HomeHero() {
  const { navigateTo } = useNavigation();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f9f8fc] via-white to-[#fcfdff] text-on-surface -mt-20 pt-28 pb-20 lg:pt-36 lg:pb-28 border-b border-slate-100">
      {/* Ambient Radiance Background Effects */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[480px] rounded-full bg-amber-200/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-[#FF6B35]/15 blur-[110px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[300px] rounded-full bg-amber-400/10 blur-[100px] pointer-events-none" />

      {/* Subtle effervescent background pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col items-center text-center">
        {/* Crest & Motto Chip */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white shadow-sm hover:shadow-md mb-6 hover:border-amber-300 transition-all border border-amber-200/60 z-20">
          <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-[#FF6B35] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            <Icon name="bolt" size="13px" />
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary-container font-extrabold">
            Focus Like An Eagle
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-ping" />
        </div>

        {/* Main Headline Typography */}
        <h1 className="font-headline-xl text-headline-xl sm:text-5xl lg:text-7xl text-primary-container tracking-tight max-w-4xl mx-auto font-extrabold leading-[1.05]">
          ADLER BEVERAGES
        </h1>

        {/* Subtitle with vibrant gold-to-peach gradient */}
        <p className="font-headline-lg text-headline-lg sm:text-3xl lg:text-4xl mt-3 font-extrabold tracking-tight bg-gradient-to-r from-amber-600 via-[#FF6B35] to-amber-500 bg-clip-text text-transparent">
          Where Health Meets Refreshment
        </p>

        {/* Subtitle description */}
        <p className="font-body-lg text-body-lg text-slate-600 max-w-2xl mt-5 font-normal leading-relaxed">
          India’s premier caffeinated functional elixir, engineered with cold-extracted botanicals, clean
          L-Theanine, and zero synthetic crash. Crafted for high-performance minds.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-space-md mt-8 z-20">
          <Button
            variant="gold"
            size="lg"
            icon="arrow_forward"
            onClick={() => navigateTo('our-products')}
          >
            Explore Our Products
          </Button>

          <Button
            variant="peach"
            size="lg"
            icon="handshake"
            iconPosition="left"
            onClick={() => navigateTo('partner-with-us')}
          >
            Become a Partner
          </Button>
        </div>

        {/* Quick Feature Pill Badges: Crisp Fresh Cards with Peach & Gold Accents */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-3xl w-full z-20">
          <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white shadow-xs hover:shadow-sm border border-slate-200/80 transition-all hover:border-amber-300">
            <Icon name="nutrition" size="18px" className="text-amber-600" />
            <span className="font-label-sm text-label-sm text-slate-800 font-bold tracking-wide">
              250ml Slim Can
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white shadow-xs hover:shadow-sm border border-slate-200/80 transition-all hover:border-orange-300">
            <Icon name="check_circle" size="18px" className="text-[#FF6B35]" />
            <span className="font-label-sm text-label-sm text-slate-800 font-bold tracking-wide">
              Zero Sugar
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white shadow-xs hover:shadow-sm border border-slate-200/80 transition-all hover:border-purple-300">
            <Icon name="psychology" size="18px" className="text-primary-container" />
            <span className="font-label-sm text-label-sm text-slate-800 font-bold tracking-wide">
              L-Theanine Infused
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white shadow-xs hover:shadow-sm border border-slate-200/80 transition-all hover:border-emerald-300">
            <Icon name="eco" size="18px" className="text-emerald-600" />
            <span className="font-label-sm text-label-sm text-slate-800 font-bold tracking-wide">
              100% Veg Certified
            </span>
          </div>
        </div>

        {/* Dual 3D Can Visual Showcase (Supercharged & Large) */}
        <DualCanShowcase />
      </div>
    </section>
  );
}
