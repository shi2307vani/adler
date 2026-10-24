import React from 'react';
import { NUTRITION_MATRIX } from '../../../constants/products';
import Icon from '../../atoms/Icon/Icon';

export default function NutritionTable() {
  return (
    <section className="w-full py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
            Biochemical Transparency
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
            Nutritional &amp; Formulation Matrix
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            Complete disclosure of bio-active extracts, mineral electrolytes, and nutritional telemetry per 250ml serving.
          </p>
        </div>

        {/* Quick Telemetry Micro Metric */}
        <div className="flex items-center gap-3 bg-surface-container-low px-5 py-3 rounded-xl shadow-sm border border-secondary/10 shrink-0">
          <Icon name="eco" size="28px" className="text-on-tertiary-container" />
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">
              FSSAI Certified Lab
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              100% Traceable Botanicals
            </span>
          </div>
        </div>
      </div>

      {/* Comparison Bento Table */}
      <div className="w-full rounded-2xl bg-surface-container-lowest shadow-xl overflow-x-auto border border-secondary/15">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-surface-container-high/60 border-b border-surface-container-highest">
              <th className="p-6 font-label-md text-label-md uppercase tracking-wider text-primary font-bold w-1/3">
                Biochemical Metric
              </th>
              <th className="p-6 font-headline-sm text-headline-sm text-primary-container w-1/3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary-container" />
                  <span className="font-bold">Mix Berry Sparks (250ml)</span>
                </div>
              </th>
              <th className="p-6 font-headline-sm text-headline-sm text-secondary w-1/3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="font-bold">Peach Sparks (250ml)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-on-surface divide-y divide-surface-container-low">
            {NUTRITION_MATRIX.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors hover:bg-surface-container-low/40 ${
                  idx % 2 === 1 ? 'bg-surface-container-low/20' : 'bg-surface-container-lowest'
                }`}
              >
                <td className="p-6 font-semibold text-primary flex items-center gap-2.5">
                  <Icon name={row.icon} size="18px" className="text-secondary" />
                  <span>{row.metric}</span>
                </td>
                <td className="p-6 text-on-surface-variant font-medium">
                  {row.mixBerry}
                </td>
                <td className="p-6 text-on-surface-variant font-medium">
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
