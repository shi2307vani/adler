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

  const handleBuy = () => {
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  const VisualColumn = (
    <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group border border-secondary/20 bg-gradient-to-b from-surface-container-high/40 via-surface to-surface-container-lowest/90 flex items-center justify-center p-6 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,212,136,0.12),transparent_70%)] pointer-events-none" />
        <img
          alt={product.name}
          src={product.detailImage}
          className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_20px_35px_rgba(43,13,71,0.3)] z-10"
        />

        {/* Veg Mark Float */}
        <div
          className={`absolute top-4 ${
            isInverted ? 'right-4' : 'left-4'
          } bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md border border-secondary/10`}
        >
          <span className="w-3.5 h-3.5 rounded-sm bg-white p-0.5 flex items-center justify-center shadow-xs border border-on-tertiary-container/30">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container block" />
          </span>
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            100% Certified Veg
          </span>
        </div>

        {/* Dynamic Micro Spec Badge */}
        <div
          className={`absolute bottom-4 ${
            isInverted ? 'left-4' : 'right-4'
          } bg-primary-container/95 text-on-primary backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-secondary/20`}
        >
          <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
            {product.category === 'hydration' ? 'Electrolyte Restorative' : 'Neural Formula'}
          </p>
          <p className="font-headline-sm text-headline-sm leading-tight text-white font-bold">
            {product.specs[0].value === '80 mg' ? '80mg Caffeine' : '60mg Clean Caffeine'}
          </p>
        </div>
      </div>
    </div>
  );

  const SpecColumn = (
    <div className="lg:col-span-7 flex flex-col space-y-6">
      {/* Badges & Titles */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-widest font-bold">
            {product.heroBadge}
          </span>
          <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
            {product.subBadge}
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight">
          {product.name}
        </h2>
        <p className="font-body-md text-body-md text-secondary font-semibold">
          {product.subtitle}
        </p>
      </div>

      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {product.fullDescription}
      </p>

      {/* Approved Biochemical Specs (Mosaic Grid) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
        {product.specs.map((spec, i) => (
          <div
            key={i}
            className="p-3.5 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10"
          >
            <div className="flex items-center gap-1.5 text-primary-container mb-1">
              <Icon name={spec.icon} size="18px" className="text-secondary" />
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">
                {spec.label}
              </span>
            </div>
            <p className="font-headline-sm text-headline-sm text-primary font-bold">
              {spec.value}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{spec.detail}</p>
          </div>
        ))}
      </div>

      {/* Tasting Notes Sensory Palette Bar */}
      <div className="p-4 rounded-xl bg-surface-container-high/60 shadow-inner space-y-2 border border-secondary/10">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-primary">
            Sensory Architecture
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            {product.sensoryNotes.carbonation}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-1 font-body-sm text-body-sm">
          <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-semibold shadow-xs">
            Top: {product.sensoryNotes.top}
          </span>
          <span className="text-outline">→</span>
          <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-semibold shadow-xs">
            Core: {product.sensoryNotes.core}
          </span>
          <span className="text-outline">→</span>
          <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface font-semibold shadow-xs">
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
          variant="gold"
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
        <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-lg font-label-md text-label-md text-center font-bold animate-in fade-in">
          {product.name} ({selectedPack.name}) added to express checkout! Connecting to direct dispatch...
        </div>
      )}
    </div>
  );

  return (
    <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto" id={product.id}>
      <div className="relative rounded-2xl bg-surface-container-lowest shadow-xl overflow-hidden border border-secondary/15">
        {/* Backdrop Accent */}
        <div
          className={`absolute top-0 ${
            isInverted ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'
          } w-2/5 h-full from-secondary-fixed/30 to-transparent pointer-events-none hidden lg:block`}
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
