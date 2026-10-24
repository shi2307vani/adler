import React from 'react';

export default function PackSelector({ packs = [], selectedPackId, onSelect }) {
  return (
    <div className="space-y-3 pt-2">
      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant block font-semibold">
        Select Packaging Unit
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {packs.map((pack) => {
          const isSelected = selectedPackId === pack.id;
          return (
            <button
              key={pack.id}
              type="button"
              onClick={() => onSelect(pack)}
              className={`p-3.5 rounded-xl text-left transition-all relative overflow-hidden cursor-pointer ${
                isSelected
                  ? 'bg-secondary-fixed/50 shadow-md ring-2 ring-secondary'
                  : 'bg-surface-container-low hover:bg-surface-container shadow-sm'
              }`}
            >
              {pack.tag && (
                <div className="absolute top-1.5 right-2 text-[9px] font-bold uppercase tracking-wider text-on-tertiary-container bg-tertiary-fixed px-1.5 py-0.5 rounded shadow-xs">
                  {pack.tag}
                </div>
              )}
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                {pack.name}
              </div>
              <div className="font-headline-sm text-headline-sm text-primary mt-1 font-bold">
                {pack.price}
              </div>
              <div className="font-label-sm text-xs text-secondary mt-0.5">
                {pack.unitPrice || pack.usd}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
