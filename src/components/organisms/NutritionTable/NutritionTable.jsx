import React from 'react';
import { NUTRITION_MATRIX } from '../../../constants/products';
import Icon from '../../atoms/Icon/Icon';

export default function NutritionTable() {
  return (
    <section className="w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#FF6B35] border border-orange-200/60 font-label-sm text-label-sm uppercase tracking-widest font-extrabold">
            <Icon name="verified_user" size="14px" />
            Biochemical Transparency
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary-container font-extrabold sm:text-4xl">
            Nutritional &amp; Formulation Matrix
          </h2>
          <p className="font-body-md text-body-md text-slate-600 max-w-2xl leading-relaxed">
            Complete disclosure of bio-active extracts, mineral electrolytes, and nutritional telemetry per 250ml serving.
          </p>
        </div>

        {/* Quick Telemetry Micro Metric */}
        <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-200/80 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
            <Icon name="eco" size="24px" />
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-slate-500 block uppercase font-bold">
              FSSAI Certified Lab
            </span>
            <span className="font-headline-sm text-headline-sm text-primary-container font-extrabold">
              100% Traceable Botanicals
            </span>
          </div>
        </div>
      </div>

      {/* Comparison Bento Table: Crisp White Card */}
      <div className="w-full rounded-3xl bg-white shadow-[0_20px_50px_rgba(28,25,36,0.06)] overflow-x-auto border border-slate-100">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-100">
              <th className="p-6 font-label-md text-label-md uppercase tracking-wider text-slate-700 font-extrabold w-1/3">
                Biochemical Metric
              </th>
              <th className="p-6 font-headline-sm text-headline-sm text-primary-container w-1/3 font-extrabold">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-primary-container shadow-xs" />
                  <span>Mix Berry Sparks (250ml)</span>
                </div>
              </th>
              <th className="p-6 font-headline-sm text-headline-sm text-[#FF6B35] w-1/3 font-extrabold">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] shadow-xs shadow-orange-500/30" />
                  <span>Peach Sparks (250ml)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-slate-800 divide-y divide-slate-100">
            {NUTRITION_MATRIX.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors hover:bg-slate-50/60 ${
                  idx % 2 === 1 ? 'bg-slate-50/30' : 'bg-white'
                }`}
              >
                <td className="p-6 font-bold text-slate-800 flex items-center gap-3">
                  <Icon name={row.icon} size="20px" className="text-amber-600" />
                  <span>{row.metric}</span>
                </td>
                <td className="p-6 text-slate-600 font-medium">
                  {row.mixBerry}
                </td>
                <td className="p-6 text-slate-600 font-medium">
                  {row.peach}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
