import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import DualCanShowcase from './DualCanShowcase';

export default function HomeHero() {
  const { navigateTo } = useNavigation();

  return (
    <section className="relative w-full overflow-hidden bg-primary-container text-on-primary -mt-20 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Ambient Radiance Background Effects */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-secondary-container/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-on-tertiary-container/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col items-center text-center">
        {/* Crest & Motto Chip */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md shadow-md mb-6 hover:bg-surface-container-lowest/15 transition-all border border-secondary/20">
          <span className="w-5 h-5 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center font-bold text-xs shadow-inner">
            <Icon name="bolt" size="13px" />
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed font-bold">
            Focus Like An Eagle
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse" />
        </div>

        {/* Main Headline Typography */}
        <h1 className="font-headline-xl text-headline-xl sm:text-5xl lg:text-6xl text-surface-container-lowest tracking-tight max-w-4xl mx-auto font-extrabold">
          ADLER BEVERAGES
        </h1>
        <p className="font-headline-lg text-headline-lg sm:text-3xl text-secondary-container mt-2 font-semibold tracking-wide">
          Where Health Meets Refreshment
        </p>

        {/* Subtitle */}
        <p className="font-body-lg text-body-lg text-outline-variant max-w-2xl mt-5 font-normal leading-relaxed">
          India’s premier caffeinated functional elixir, engineered with botanical extracts, clean
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
            variant="glass"
            size="lg"
            icon="handshake"
            iconPosition="left"
            onClick={() => navigateTo('partner-with-us')}
          >
            Become a Partner
          </Button>
        </div>

        {/* Quick Feature Pill Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-3xl w-full">
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm border border-white/5">
            <Icon name="nutrition" size="18px" className="text-secondary-fixed" />
            <span className="font-label-sm text-label-sm text-surface-container-lowest tracking-wide">
              250ml Slim Can
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm border border-white/5">
            <Icon name="check_circle" size="18px" className="text-on-tertiary-container" />
            <span className="font-label-sm text-label-sm text-surface-container-lowest tracking-wide">
              Zero Sugar
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm border border-white/5">
            <Icon name="psychology" size="18px" className="text-secondary-fixed" />
            <span className="font-label-sm text-label-sm text-surface-container-lowest tracking-wide">
              L-Theanine Infused
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-container-lowest/5 backdrop-blur-sm border border-white/5">
            <Icon name="eco" size="18px" className="text-on-tertiary-container" />
            <span className="font-label-sm text-label-sm text-surface-container-lowest tracking-wide">
              100% Veg Certified
            </span>
          </div>
        </div>

        {/* Dual 3D Can Visual Showcase */}
        <DualCanShowcase />
      </div>
    </section>
  );
}
