import React from 'react';
import Icon from '../../atoms/Icon/Icon';

export default function ValueCard({ item }) {
  return (
    <div
      className={`${item.span || 'lg:col-span-4'} bg-white rounded-2xl p-space-lg shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-slate-100 hover:border-orange-200 transform hover:-translate-y-1`}
    >
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-headline-md text-headline-md text-slate-300 group-hover:text-amber-500 transition-colors font-mono font-extrabold">
            {item.number}
          </span>
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B35] flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:text-white transition-colors shadow-xs">
            <Icon name={item.icon} size="22px" />
          </div>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary-container uppercase tracking-tight font-extrabold group-hover:text-[#FF6B35] transition-colors">
          {item.title}
        </h3>
        <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="mt-space-md pt-space-xs flex items-center gap-2 text-amber-600 font-label-sm text-label-sm font-bold border-t border-slate-100">
        <span>{item.subtitle}</span>
      </div>
    </div>
  );
}
