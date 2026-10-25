import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import Button from '../../atoms/Button/Button';

export default function ProductShowcaseCard({ product, theme = 'purple' }) {
  const { navigateTo } = useNavigation();
  const isPurple = theme === 'purple';

  return (
    <div
      onClick={() => navigateTo('our-products', product.id)}
      className="group rounded-3xl bg-white overflow-hidden shadow-[0_15px_45px_rgba(28,25,36,0.06)] hover:shadow-[0_25px_65px_rgba(28,25,36,0.14)] transition-all duration-500 flex flex-col justify-between border border-slate-100 hover:border-slate-300/80 cursor-pointer"
    >
      <div className="p-8 sm:p-10 flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <span
            className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm font-bold tracking-wider uppercase shadow-xs ${
              isPurple
                ? 'bg-primary-container text-white border border-amber-300/30'
                : 'bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white shadow-md shadow-orange-500/25'
            }`}
          >
            {isPurple ? 'Antioxidant Focus' : 'Electrolyte Renewal'}
          </span>
          <span className="font-label-md text-label-md font-bold text-amber-600 tracking-wider">
            250 ML SLIM CAN
          </span>
        </div>

        {/* Name & Summary */}
        <div className="mt-6">
          <h3 className="font-headline-lg text-headline-lg text-primary-container font-extrabold group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="font-body-md text-body-md text-slate-600 mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {product.badges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-lg font-label-sm text-label-sm font-semibold ${
                !isPurple
                  ? 'bg-orange-50 text-[#FF6B35] border border-orange-100'
                  : idx === product.badges.length - 1
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                  : 'bg-purple-50 text-primary-container border border-purple-100'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Larger Product Image & CTA Bar */}
      <div
        className={`relative pt-6 pb-8 px-8 flex flex-col items-center overflow-hidden ${
          isPurple
            ? 'bg-gradient-to-t from-purple-900/10 via-amber-400/5 to-transparent'
            : 'bg-gradient-to-t from-[#FF6B35]/15 via-amber-400/5 to-transparent'
        }`}
      >
        {/* Soft Aura Ring */}
        <div
          className={`absolute bottom-16 w-56 h-20 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125 ${
            isPurple ? 'bg-purple-600/15' : 'bg-[#FF6B35]/25'
          }`}
        />

        {/* Large can visual */}
        <div className="h-80 sm:h-96 lg:h-[420px] w-full flex items-center justify-center relative z-10">
          <img
            alt={product.name}
            src={product.image}
            className={`h-full w-auto max-h-[420px] object-contain transition-transform duration-700 group-hover:scale-105 ${
              isPurple
                ? 'filter drop-shadow-[0_20px_35px_rgba(43,13,71,0.32)]'
                : 'filter drop-shadow-[0_20px_35px_rgba(255,107,53,0.32)]'
            }`}
          />
        </div>

        {/* Bottom Serving Bar */}
        <div className="w-full flex items-center justify-between mt-8 pt-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 relative z-10">
          <div>
            <span className="font-label-sm text-label-sm text-slate-500 uppercase tracking-wider block font-semibold">
              Serving profile
            </span>
            <p
              className={`font-headline-sm text-headline-sm font-extrabold ${
                isPurple ? 'text-primary-container' : 'text-[#FF6B35]'
              }`}
            >
              {product.servingProfile}
            </p>
          </div>

          <Button
            variant={isPurple ? 'gold' : 'peach'}
            size="sm"
            icon="north_east"
            onClick={(e) => {
              e.stopPropagation();
              navigateTo('our-products', product.id);
            }}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
