import React from 'react';
import { useNavigation } from '../../../context/NavigationContext';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';

export default function ProductShowcaseCard({ product, theme = 'purple' }) {
  const { navigateTo } = useNavigation();
  const isPurple = theme === 'purple';

  return (
    <div className="group rounded-2xl bg-surface-container-lowest overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col justify-between border border-secondary/10">
      <div className="p-8 sm:p-10 flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold tracking-wider uppercase shadow-xs ${
              isPurple
                ? 'bg-primary-container text-on-primary'
                : 'bg-secondary-container text-on-secondary-fixed'
            }`}
          >
            {isPurple ? 'Antioxidant Focus' : 'Electrolyte Renewal'}
          </span>
          <span className="font-label-md text-label-md font-bold text-secondary tracking-wider">
            250 ML SLIM CAN
          </span>
        </div>

        {/* Name & Summary */}
        <div className="mt-6">
          <h3 className="font-headline-lg text-headline-lg text-primary-container font-bold">
            {product.name}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {product.badges.map((badge, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded font-label-sm text-label-sm ${
                idx === product.badges.length - 1
                  ? 'bg-surface-container text-on-tertiary-container font-semibold'
                  : 'bg-surface-container text-primary-container'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Product Image & CTA Bar */}
      <div
        className={`relative pt-4 pb-8 px-8 flex flex-col items-center ${
          isPurple
            ? 'bg-gradient-to-t from-primary/10 via-transparent to-transparent'
            : 'bg-gradient-to-t from-secondary-container/20 via-transparent to-transparent'
        }`}
      >
        <div className="h-64 sm:h-72 w-full flex items-center justify-center">
          <img
            alt={product.name}
            src={product.image}
            className={`h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
              isPurple
                ? 'filter drop-shadow-[0_12px_24px_rgba(43,13,71,0.25)]'
                : 'filter drop-shadow-[0_12px_24px_rgba(119,90,25,0.25)]'
            }`}
          />
        </div>

        <div className="w-full flex items-center justify-between mt-6 pt-6 bg-surface-container-lowest/90 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-secondary/10">
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block font-medium">
              Serving profile
            </span>
            <p
              className={`font-headline-sm text-headline-sm font-bold ${
                isPurple ? 'text-primary-container' : 'text-secondary'
              }`}
            >
              {product.servingProfile}
            </p>
          </div>

          <Button
            variant={isPurple ? 'primary' : 'gold'}
            size="sm"
            icon="north_east"
            onClick={() => navigateTo('our-products', product.id)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
