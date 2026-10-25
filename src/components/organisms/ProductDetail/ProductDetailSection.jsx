import React, { useState } from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import PackSelector from '../../molecules/PackSelector/PackSelector';

export default function ProductDetailSection({ product, layout = 'normal' }) {
  const { navigateTo } = useNavigation();
  const [selectedPack, setSelectedPack] = useState(product.packs[0]);
  const [addedMessage, setAddedMessage] = useState(false);
  const isInverted = layout === 'inverted';
  const isPeach = product.id === 'peach-sparks';

  const handleBuy = () => {
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  const VisualColumn = (
    <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
      <div
        className={`relative w-full max-w-lg min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] rounded-3xl overflow-hidden shadow-xl group border flex items-center justify-center p-6 sm:p-10 ${
          isPeach
            ? 'bg-gradient-to-b from-orange-50/70 via-white to-orange-50/30 border-orange-100'
            : 'bg-gradient-to-b from-purple-50/70 via-white to-purple-50/30 border-purple-100'
        }`}
      >
        {/* Soft Ambient Radiance Halo */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isPeach
              ? 'bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.16),transparent_65%)]'
              : 'bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_65%)]'
          }`}
        />

        {/* 3D Elevated Can Image (Prominent Scale) */}
        <img
          alt={product.name}
          src={product.detailImage}
          className={`h-[400px] sm:h-[480px] lg:h-[540px] w-auto max-h-[540px] object-contain transition-transform duration-700 group-hover:scale-105 z-10 ${
            isPeach ? 'drop-shadow-peach' : 'drop-shadow-purple'
          }`}
        />

        {/* Veg Mark Float */}
        <div
          className={`absolute top-5 ${
            isInverted ? 'right-5' : 'left-5'
          } bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-md border border-slate-100 z-20`}
        >
          <span className="w-3.5 h-3.5 rounded-sm bg-white p-0.5 flex items-center justify-center border border-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-600 block" />
          </span>
          <span className="font-label-sm text-label-sm text-slate-800 uppercase font-extrabold tracking-wider">
            100% Certified Veg
          </span>
        </div>

        {/* Dynamic Micro Spec Badge */}
        <div
          className={`absolute bottom-5 ${
            isInverted ? 'left-5' : 'right-5'
          } backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border z-20 ${
            isPeach
              ? 'bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white border-white/20'
              : 'bg-primary-container text-white border-amber-300/30'
          }`}
        >
          <p className="font-label-sm text-label-sm uppercase tracking-wider opacity-90 font-bold">
            {product.category === 'hydration' ? 'Electrolyte Restorative' : 'Neural Formula'}
          </p>
          <p className="font-headline-sm text-headline-sm leading-tight text-white font-extrabold">
            {product.specs[0].value === '80 mg' ? '80mg Clean Caffeine' : '60mg Clean Caffeine'}
          </p>
        </div>
      </div>
    </div>
  );

  const SpecColumn = (
    <div className="lg:col-span-7 flex flex-col space-y-6">
      {/* Badges & Titles */}
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span
            className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm uppercase tracking-widest font-extrabold ${
              isPeach
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white shadow-sm shadow-orange-500/20'
                : 'bg-primary-container text-white shadow-sm border border-amber-300/30'
            }`}
          >
            {product.heroBadge}
          </span>
          <span
            className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm uppercase font-extrabold ${
              isPeach
                ? 'bg-orange-100 text-[#FF6B35]'
                : 'bg-amber-100 text-amber-900'
            }`}
          >
            {product.subBadge}
          </span>
        </div>

        <h2 className="font-headline-lg text-headline-lg text-primary-container font-extrabold tracking-tight sm:text-4xl">
          {product.name}
        </h2>
        <p className="font-body-md text-body-md text-amber-600 font-bold">
          {product.subtitle}
        </p>
      </div>

      <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
        {product.fullDescription}
      </p>

      {/* Approved Biochemical Specs (Mosaic Grid) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
        {product.specs.map((spec, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100 hover:border-orange-200 transition-colors"
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Icon
                name={spec.icon}
                size="18px"
                className={isPeach ? 'text-[#FF6B35]' : 'text-amber-600'}
              />
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-slate-700">
                {spec.label}
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm text-primary-container font-extrabold">
              {spec.value}
            </p>
            <p className="font-body-sm text-body-sm text-slate-500">{spec.detail}</p>
          </div>
        ))}
      </div>

      {/* Tasting Notes Sensory Palette Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#f8fafd] border border-slate-100 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase font-extrabold tracking-wider text-primary-container">
            Sensory Architecture
          </span>
          <span className="font-label-sm text-label-sm text-slate-500 font-semibold">
            {product.sensoryNotes.carbonation}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-1 font-body-sm text-body-sm">
          <span className="px-3 py-1.5 rounded-lg bg-white text-slate-800 font-bold shadow-xs border border-slate-100">
            Top: {product.sensoryNotes.top}
          </span>
          <span className="text-slate-400">→</span>
          <span className="px-3 py-1.5 rounded-lg bg-white text-slate-800 font-bold shadow-xs border border-slate-100">
            Core: {product.sensoryNotes.core}
          </span>
          <span className="text-slate-400">→</span>
          <span className="px-3 py-1.5 rounded-lg bg-white text-slate-800 font-bold shadow-xs border border-slate-100">
            Finish: {product.sensoryNotes.finish}
          </span>
        </div>
      </div>

      {/* Pack Sizing Selector */}
      <PackSelector
        packs={product.packs}
        selectedPackId={selectedPack.id}
        onSelect={(p) => setSelectedPack(p)}
      />

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
        <Button
          variant={isPeach ? 'peach' : 'gold'}
          size="lg"
          icon="shopping_bag"
          iconPosition="left"
          className="flex-1"
          onClick={handleBuy}
        >
          BUY ONLINE • {selectedPack.price}
        </Button>
        <Button
          variant="secondary"
          size="lg"
          icon="mail"
          iconPosition="left"
          onClick={() => navigateTo('partner-with-us')}
        >
          PRODUCT ENQUIRY
        </Button>
      </div>

      {addedMessage && (
        <div className="p-3.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl font-label-md text-label-md text-center font-bold animate-in fade-in">
          {product.name} ({selectedPack.name}) added to express checkout! Connecting to direct dispatch...
        </div>
      )}
    </div>
  );

  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id={product.id}>
      <div className="relative rounded-3xl bg-white shadow-[0_20px_60px_rgba(28,25,36,0.06)] overflow-hidden border border-slate-100">
        {/* Subtle Side Ambient Glow */}
        <div
          className={`absolute top-0 ${
            isInverted ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'
          } w-2/5 h-full ${
            isPeach ? 'from-orange-100/40' : 'from-purple-100/30'
          } to-transparent pointer-events-none hidden lg:block`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-14 items-center relative z-10">
          {isInverted ? (
            <>
              {SpecColumn}
              {VisualColumn}
            </>
          ) : (
            <>
              {VisualColumn}
              {SpecColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
