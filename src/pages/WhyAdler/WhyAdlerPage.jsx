import React from 'react';
import { BRAND_STATS } from '../../constants/brand';
import { useNavigation } from '../../context/NavigationContext';
import Icon from '../../components/atoms/Icon/Icon';
import Button from '../../components/atoms/Button/Button';
import SensoryArcItem from '../../components/molecules/SensoryArcItem/SensoryArcItem';
import SensoryRadar from '../../components/organisms/SensoryRadar/SensoryRadar';
import PharmacokineticGraph from '../../components/organisms/PerformanceGraph/PharmacokineticGraph';

export default function WhyAdlerPage() {
  const { navigateTo } = useNavigation();

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 0: HERO HEADER */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fafd] via-white to-white py-20 lg:py-28 border-b border-slate-100">
        <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#FF6B35]/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-start max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 text-[#FF6B35] shadow-xs mb-6 border border-orange-200/60 font-label-sm text-label-sm uppercase tracking-widest font-extrabold">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              THE ARCHITECTURE OF UNCOMPROMISING BEVERAGE CRAFT
            </div>

            <h1 className="font-headline-xl text-headline-xl sm:text-5xl lg:text-6xl text-primary-container uppercase tracking-tight mb-6 font-extrabold leading-[1.08]">
              WHY ADLER REWRITES THE DRINKING EXPERIENCE
            </h1>

            <p className="font-body-lg text-body-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
              A radical synthesis of physiological performance, artisanal sensorial bliss, and responsible luxury packaging.
              We engineered an elixir that honours both your cognitive edge and your refined palate.
            </p>

            {/* Stats strip in crisp white cards */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white shadow-[0_15px_40px_rgba(28,25,36,0.06)] border border-slate-100">
              {BRAND_STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className={`font-headline-lg text-headline-lg font-extrabold ${idx === 1 ? 'text-[#FF6B35]' : stat.color}`}>
                    {stat.value}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-500 font-bold mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: DISTINCTIVE, MULTI-LAYERED FLAVOURS */}
      <section className="w-full py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Narrative & Sensory Architecture */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="font-label-md text-label-md uppercase tracking-widest text-[#FF6B35] font-extrabold mb-3">
                01 // Distinctive, Multi-Layered Flavours
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary-container uppercase tracking-tight mb-6 font-extrabold sm:text-4xl">
                ELEVATED BOTANICALS OVER INDUSTRIAL SYRUPS
              </h2>
              <p className="font-body-md text-body-md text-slate-600 mb-6 leading-relaxed">
                Breaking away from aggressive medicinal syrups, battery-acid aftertastes, and oversweetened industrial sodas.
                ADLER extracts nuance from real botanical flora—wild Himalayan berries, crisp hand-pressed blackcurrants,
                and sun-kissed white peaches paired with a micro-fine champagne effervescence.
              </p>

              {/* Sensory Tasting Arc */}
              <div className="space-y-4 mt-4">
                <SensoryArcItem
                  title="Top Notes"
                  time="0.0 – 1.5s"
                  icon="bubble_chart"
                  iconBg="bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white"
                  description="Vibrant floral aromatics, tart Alpine bilberry, and crisp mountain white peach aroma delivered on fine bubbles."
                />
                <SensoryArcItem
                  title="Mid Palate"
                  time="1.5 – 4.0s"
                  icon="spa"
                  iconBg="bg-primary-container text-amber-300"
                  description="Smooth polyphenolic depth from ceremonial green tea extract; silky botanical body without syrupy coating."
                />
                <SensoryArcItem
                  title="Clean Dry Finish"
                  time="Post-Sip"
                  icon="clean_hands"
                  iconBg="bg-emerald-50 text-emerald-700"
                  description="Subtle citric snap, zero tongue fatigue, zero sugar cloy, leaving the throat refreshed and receptive."
                />
              </div>
            </div>

            {/* Right: Sensory Wheel Card & Large Visual Showcase */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <SensoryRadar />

              {/* Product imagery preview (Much Larger & Luminous) */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => navigateTo('our-products', 'mix-berry-sparks')}
                  className="rounded-2xl overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white shadow-sm hover:shadow-lg h-72 sm:h-80 border border-purple-100 flex flex-col items-center justify-center p-4 group cursor-pointer transition-all"
                >
                  <img
                    className="h-full w-auto max-h-[260px] object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_16px_28px_rgba(43,13,71,0.25)]"
                    alt="ADLER Mix Berry Sparks 250ml Can"
                    src="/images/mix-berries.png?v=2"
                  />
                  <span className="font-label-sm text-label-sm uppercase font-extrabold text-primary-container mt-2">
                    Mix Berry Sparks
                  </span>
                </div>

                <div
                  onClick={() => navigateTo('our-products', 'peach-sparks')}
                  className="rounded-2xl overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white shadow-sm hover:shadow-lg h-72 sm:h-80 border border-orange-100 flex flex-col items-center justify-center p-4 group cursor-pointer transition-all"
                >
                  <img
                    className="h-full w-auto max-h-[260px] object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_16px_28px_rgba(255,107,53,0.3)]"
                    alt="ADLER Peach Sparks 250ml Can"
                    src="/images/peach-sparks.png?v=2"
                  />
                  <span className="font-label-sm text-label-sm uppercase font-extrabold text-[#FF6B35] mt-2">
                    Peach Sparks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PREMIUM BRAND IDENTITY */}
      <section className="w-full py-24 bg-surface-container-low border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold mb-3 block">
              02 // Unapologetic Prestige &amp; Visual Poise
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight mb-4 font-extrabold">
              AN ICON OF SOVEREIGN INTELLECT &amp; SHARP RESOLVE
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Inspired by the majestic raptor, the eagle—synonymous with laser-sharp focus, aerial poise, and unclouded vision.
              ADLER is not merely an energy drink; it is designed as an aspirational accessory for metropolitan boardrooms,
              creative studios, elite athletic spaces, and exclusive private clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl p-8 bg-surface-container-lowest shadow-md flex flex-col justify-between border border-secondary/15">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center mb-6 shadow-sm">
                  <Icon name="visibility" size="24px" className="text-secondary-fixed" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary uppercase mb-3 font-bold">
                  Tactile Matte Metallic
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Crafted with a specialized soft-touch tactile matte finish on aerospace-grade aluminum that feels weighted,
                  balanced, and instantly distinguishable in hand.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold border-t border-surface-container">
                <Icon name="verified" size="16px" /> Sensory Grip Finish
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl p-8 bg-surface-container-lowest shadow-md flex flex-col justify-between border border-secondary/15">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6 shadow-sm">
                  <Icon name="shield" size="24px" className="text-on-secondary-fixed" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary uppercase mb-3 font-bold">
                  Embossed Eagle Crest
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Every chassis features the regal golden eagle silhouette, hot-stamped to symbolize predatory focus,
                  elevated perception, and calm dominion over chaos.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold border-t border-surface-container">
                <Icon name="verified" size="16px" /> Sovereign Brand Signet
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl p-8 bg-surface-container-lowest shadow-md flex flex-col justify-between border border-secondary/15">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-sm">
                  <Icon name="architecture" size="24px" className="text-secondary-fixed" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary uppercase mb-3 font-bold">
                  Editorial Clarity
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Refined typographic spacing and architectural grid discipline ensure that ADLER looks distinguished alongside luxury horology, fountain pens, and executive tech.
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold border-t border-surface-container">
                <Icon name="verified" size="16px" /> Designed for Elite Spaces
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CLINICAL FORMULATION & PURITY STANDARDS */}
      <section className="w-full py-24 bg-surface border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Purity Lab Column */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-2xl overflow-hidden bg-surface-container shadow-lg relative border border-secondary/15">
                <img
                  className="w-full h-80 object-cover"
                  alt="High-tech analytical beverage laboratory showing spectroscopy equipment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4tCUD-gMcKoQJwlTNikWmq72hHH8vopPdK7Y4zf8QG8BKsE46vjAeuaQcFjh_j_NylXk3hsBh5xnnij6NQIjzm7cO3pOHcBM0QAaGk4nZyE9PjX90v5ZDTExB1hfu7js1B5VcWKyIDrYtN_VUZZpGU1MeGV0mIpvjtIBRiwF9zXr7TKczVoWRlN-C1vmLti1fvZsMULgtyQc-B9XHV8zR7-83ExewTK22tgiL20KZ162sg-ZKgHNgAA"
                />
                <div className="p-6 bg-surface-container-highest">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="science" size="24px" className="text-on-tertiary-container" />
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      Certified cGMP Facility
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Every batch is subjected to 48-point laboratory spectroscopy testing prior to canning, verifying absolute microbiological safety and molecular consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content & Pillars */}
            <div className="lg:col-span-7 flex flex-col">
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold mb-3">
                03 // Clinical Formulation &amp; Purity Standards
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight mb-6 font-extrabold">
                WHAT WE REMOVED MATTERS AS MUCH AS WHAT WE ADDED
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Mainstream energy beverages flood the bloodstream with synthetic taurine, cheap high-fructose corn syrups,
                and petrochemical dyes that trigger cardiac palpitations and severe adrenal depletion. ADLER replaces cheap
                stimulants with bio-compatible botanical compounds.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
                      <Icon name="block" size="18px" className="text-on-secondary-fixed" />
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Zero Refined Sugar
                    </h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Sweetened subtly via non-glycemic stevia reb-M leaves. No blood sugar spikes, zero keto disruption.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center">
                      <Icon name="eco" size="18px" className="text-on-tertiary-fixed-variant" />
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                      100% Vegetarian
                    </h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Certified Green Dot compliant. Absolutely free from animal-derived gelatin, clarifying agents, or synthetic carmine.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                      <Icon name="sync_alt" size="18px" className="text-secondary-fixed" />
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                      1:1 Neuro-Synergy
                    </h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Standardized pharmaceutical-grade L-Theanine paired 1:1 with natural caffeine for sustained alpha-wave brain rhythm.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                      <Icon name="psychology" size="18px" className="text-on-secondary-fixed" />
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Green Coffee Origin
                    </h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Pure unroasted raw green coffee bean extract providing 75mg clean caffeine with rich natural chlorogenic acids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTEMPORARY PRODUCT DEVELOPMENT & NEUROSCIENCE */}
      <section className="w-full py-24 bg-surface-container-low border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold mb-3 block">
              04 // Cognitive Science Meets Modern Palates
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight mb-4 font-extrabold">
              SMOOTH SUSTAINED NEURO-LIFT VS. SYNTHETIC ENERGY CRASH
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              When high-dose synthetic caffeine hits the system alone, it triggers rapid vasoconstriction and adrenal over-activation.
              ADLER introduces an organic counterweight: botanical L-Theanine stimulates inhibitory neurotransmitters, smoothing out heart-rate spikes
              and sustaining an intense, calm flow state for 4 to 6 continuous hours.
            </p>
          </div>

          {/* Pharmacokinetic Graph */}
          <PharmacokineticGraph />
        </div>
      </section>

      {/* SECTION 5: INDIAN ORIGINS WITH GLOBAL AMBITIONS */}
      <section className="w-full py-24 bg-surface border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content left */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold mb-4 w-fit">
                <Icon name="public" size="14px" />
                Himalayan Flora • International Benchmark
              </div>
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold mb-3">
                05 // Conceived in India, Engineered for the World
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight mb-6 font-extrabold">
                ROOTED IN ROYAL INDIAN WELLNESS, READY FOR GLOBAL METROPOLISES
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Born in the high-velocity innovation hubs of Mumbai and Bengaluru, ADLER fuses India’s millennia of botanical
                mastery with rigorous contemporary food science. While honoring authentic regional ingredients, every formulation
                is compliant with European EFSA and US FDA dietary safety norms.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10">
                  <span className="font-headline-sm text-headline-sm text-primary block mb-1 font-bold">
                    Mumbai &amp; BLR
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider font-semibold">
                    Formulation &amp; R&amp;D Labs
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10">
                  <span className="font-headline-sm text-headline-sm text-secondary block mb-1 font-bold">
                    ISO 22000
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider font-semibold">
                    Food Safety Management
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10">
                  <span className="font-headline-sm text-headline-sm text-on-tertiary-container block mb-1 font-bold">
                    FSSAI Certified
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider font-semibold">
                    Central License Tier-1
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low shadow-sm border border-secondary/10">
                  <span className="font-headline-sm text-headline-sm text-primary block mb-1 font-bold">
                    London &amp; Dubai
                  </span>
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider font-semibold">
                    2026 Export Corridors
                  </span>
                </div>
              </div>
            </div>

            {/* Global Map Visual right */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="rounded-2xl overflow-hidden bg-primary-container p-8 shadow-xl text-on-primary relative border border-secondary/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block font-bold">
                      Global Supply Nodes
                    </span>
                    <h4 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                      Cold-Chain Distribution Network
                    </h4>
                  </div>
                  <Icon name="flight_takeoff" size="32px" className="text-secondary-fixed" />
                </div>

                <div
                  className="w-full h-64 rounded-xl bg-cover bg-center overflow-hidden mb-6 relative border border-white/10"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCauSb8B4ue2xZ2qMiqx3uwGzqD1Leg9LUJu7Kei2Fnn1fd3Sl7gXmRjC9cYHSqhjD8Zw2T-Df0dWyN8uSL1fGhE6CkXn8KJU3i5-YCRvBUXt-we7XZU9Gy8R1wLdzBcr8l57ImJps8K3NKFsyB_F992Jhx7Wm9rWNdR_sXG2dCPOSVfoFCbtX2pp0kYlD8a7v_D6w2rCGRhI2hnQpnPKxsUje_M3K6y_7m8Ep3hmVG_OIrQanGKvi4Ag')"
                  }}
                >
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center p-6 text-center">
                    <div className="p-4 rounded-xl bg-surface/90 text-primary shadow-lg max-w-sm border border-secondary/20">
                      <Icon name="verified" size="24px" className="text-secondary" />
                      <p className="font-label-md text-label-md font-bold uppercase mt-1">
                        Direct Factory to Global Shelves
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                        Temperature-controlled nitrogen flushed storage ensuring 12-month organoleptic stability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-primary-fixed-dim font-label-sm text-label-sm uppercase font-semibold">
                  <span>Origin: Western Ghats Botanicals</span>
                  <span>Hubs: IN • UAE • UK (Q2)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SUSTAINABLE INNOVATION & FUTURE VISION */}
      <section className="w-full py-24 bg-surface-container-low border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold mb-3 block">
              06 // Sustainable Innovation &amp; The 2030 Horizon
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-tight mb-4 font-extrabold">
              CIRCULAR LUXURY PACKAGING &amp; NEXT-GEN ADAPTOGENS
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              True prestige cannot exist at the expense of ecological health. ADLER operates on zero single-use plastics across
              our direct wholesale packing, housing each elixir in infinitely recyclable 250ml slim aluminum cylinders protected
              by advanced BPA-NI liners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between border border-secondary/15">
              <div>
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center mb-6 shadow-xs">
                  <Icon name="recycling" size="24px" className="text-on-tertiary-fixed-variant" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-3 font-bold">
                  100% Infinite Aluminum
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Aluminum recycles indefinitely without loss of tensile integrity. Over 75% of all aluminum ever produced remains in productive circulation today.
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-on-tertiary-container uppercase tracking-wider font-bold mt-6">
                Closed Loop Lifecycle
              </span>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between border border-secondary/15">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 shadow-xs">
                  <Icon name="health_and_safety" size="24px" className="text-primary" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-3 font-bold">
                  BPA-NI Non-Intent Liner
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Every interior can wall is layered with a clean organic lacquer barrier, ensuring zero endocrine disruptors and absolute preservation of crisp floral notes.
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold mt-6">
                Zero Leaching Certified
              </span>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between border border-secondary/15">
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6 shadow-xs">
                  <Icon name="psychiatry" size="24px" className="text-on-secondary-fixed" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary uppercase mb-3 font-bold">
                  Q4 Adaptogen Pipeline
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Our future laboratory roadmap encompasses cold-brewed sparkling tea varietals, holy basil extracts, and functional Lion's Mane mushroom spritzes.
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold mt-6">
                R&amp;D Pipeline 2025–2026
              </span>
            </div>
          </div>

          {/* Sustainability Banner Strip */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-surface-container to-surface-container-high flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-secondary/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm shrink-0">
                <Icon name="nature_people" size="32px" className="text-secondary" />
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Zero Plastic Distribution Guarantee
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  All palletised freight and B2B multi-packs utilize 100% recycled unbleached kraft card stock and water-based inks.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <span className="px-5 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider font-bold shadow-sm border border-secondary/10">
                Verified FSC Mix
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING B2B CONVERSION BANNER */}
      <section className="w-full py-20 bg-primary-container text-on-primary relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-fixed/15 blur-3xl pointer-events-none" />
        <div className="absolute left-10 top-0 w-80 h-80 rounded-full bg-primary/40 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest/20 text-secondary-fixed font-label-sm text-label-sm uppercase font-semibold mb-4 border border-secondary/20">
                <Icon name="storefront" size="16px" />
                <span>Commercial Partnerships</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 text-on-primary font-extrabold leading-tight">
                ELEVATE YOUR SHELVES WITH ADLER.
              </h2>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                Partner with India’s most visionary caffeinated elixir brand. From luxury boutique hospitality and modern retail to high-performance workspace pantries and fitness sanctuaries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <Button
                variant="gold"
                size="lg"
                icon="arrow_forward"
                onClick={() => navigateTo('partner-with-us')}
              >
                BECOME A STOCKIST
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon="description"
                iconPosition="left"
                onClick={() => navigateTo('partner-with-us')}
              >
                DOWNLOAD BRAND DECK (.PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
