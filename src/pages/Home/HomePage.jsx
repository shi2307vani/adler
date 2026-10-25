import React from 'react';
import { PRODUCTS } from '../../constants/products';
import { FOUR_REASONS } from '../../constants/brand';
import { useNavigation } from '../../context/NavigationContext';
import HomeHero from '../../components/organisms/Hero/HomeHero';
import ProductShowcaseCard from '../../components/organisms/ProductCard/ProductShowcaseCard';
import HorizonTeaser from '../../components/organisms/HorizonTeaser/HorizonTeaser';
import Icon from '../../components/atoms/Icon/Icon';
import Button from '../../components/atoms/Button/Button';

export default function HomePage() {
  const { navigateTo } = useNavigation();

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <HomeHero />

      {/* BRAND INTRODUCTION: Fresh Tactile Luxury in Crisp White */}
      <section className="w-full py-28 bg-white text-on-surface relative border-b border-slate-100 overflow-hidden">
        {/* Soft ambient peach-gold aura */}
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-orange-100/40 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-100/30 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Text Philosophy */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 w-fit shadow-xs">
                <Icon name="psychiatry" size="18px" className="text-[#FF6B35]" />
                <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-[#FF6B35] font-extrabold">
                  The Adler Paradigm
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-primary-container tracking-tight leading-tight font-extrabold sm:text-4xl">
                Crafted for Mindful Vitality, <br />
                <span className="bg-gradient-to-r from-primary-container via-amber-700 to-[#FF6B35] bg-clip-text text-transparent">
                  Born in India.
                </span>
              </h2>

              <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-[#FF6B35] via-amber-400 to-amber-300" />

              <p className="font-body-lg text-body-lg text-slate-600 leading-relaxed">
                For decades, commercial energy beverages relied on extreme sugar spikes, bitter synthetic chemicals,
                and violent physiological crashes. ADLER was formulated to rewrite this outdated equation.
              </p>

              <p className="font-body-md text-body-md text-slate-500 leading-relaxed">
                By harmonizing certified organic botanical cordials with pure L-Theanine and purified green tea
                caffeine, we engineer a state of calm hyper-focus. We honor the royal herbal heritage of India while
                meeting the exacting standards of contemporary athletes, executives, and creative visionaries across the globe.
              </p>

              {/* Metric Highlights Bento: Crisp Pure White with Vibrant Peach & Gold */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-[#FFF8F5] shadow-xs flex flex-col items-start border border-orange-200/50 hover:shadow-md transition-shadow">
                  <span className="font-headline-lg text-headline-lg text-[#FF6B35] font-extrabold">
                    0g
                  </span>
                  <span className="font-label-sm text-label-sm text-slate-700 uppercase mt-1 tracking-wider font-bold">
                    Added Sugar
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#FFFDF5] shadow-xs flex flex-col items-start border border-amber-200/60 hover:shadow-md transition-shadow">
                  <span className="font-headline-lg text-headline-lg text-amber-600 font-extrabold">
                    1:1
                  </span>
                  <span className="font-label-sm text-label-sm text-slate-700 uppercase mt-1 tracking-wider font-bold">
                    Focus Ratio
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#F4FBF4] shadow-xs flex flex-col items-start border border-emerald-200/60 hover:shadow-md transition-shadow">
                  <span className="font-headline-lg text-headline-lg text-emerald-600 font-extrabold">
                    100%
                  </span>
                  <span className="font-label-sm text-label-sm text-slate-700 uppercase mt-1 tracking-wider font-bold">
                    Veg Botanical
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Visual Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-50 border border-slate-200/80">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="Overhead artisanal flatlay of ADLER botanical ingredients"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaO1sch7CfwcUpTZ4Q-QOQ8B5uNwRjOHzU-4zEnxE4qPJAEySjFN7ms1_DfHkKnpR8yGN9Pl4eJx96nACa4pl9TX-C5NHcuNpvRPZKOcyFiLp-TR84qEAXqGOHlCWq-toj6pNzC3jRzbA4nlk6ujjfgcJKVc16AQACmz7mmN66SOPFGIQULlqM8p6kPOBYcawCaVVb-T7xB4Mzpt7sjBVMX-Ckdcp0C9jiZcfXGLvT_8_D5C3Una8LNA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/30 to-transparent flex flex-col justify-end p-8">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-amber-300 font-bold">
                    Batch Certified
                  </span>
                  <h4 className="font-headline-md text-headline-md text-white mt-1 font-extrabold">
                    Pure Plant Chemistry
                  </h4>
                  <p className="font-body-sm text-body-sm text-slate-200 mt-1">
                    No artificial colors. Zero aspartame. Zero taurine fillers.
                  </p>
                </div>
              </div>

              {/* Floating Eagle Seal Accent */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3.5 border border-amber-200/60 z-20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-[#FF6B35] text-white flex items-center justify-center shadow-md">
                  <Icon name="verified" size="26px" />
                </div>
                <div>
                  <p className="font-label-lg text-label-lg font-extrabold text-primary-container">
                    Indian Formulations
                  </p>
                  <p className="font-label-sm text-label-sm text-slate-500 font-medium">
                    Global ISO GMP Standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE: Card Grid with Visual Distinction on Ice-Crystal Backdrop */}
      <section className="w-full py-28 bg-gradient-to-b from-[#f8fafd] via-white to-[#fcfdff] text-on-surface relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35] shadow-xs shadow-orange-500/50" />
                <span className="font-label-md text-label-md uppercase tracking-wider text-amber-600 font-extrabold">
                  Functional Lineup
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary-container tracking-tight font-extrabold sm:text-4xl">
                The Elixir Selection
              </h2>
            </div>
            <p className="font-body-md text-body-md text-slate-600 max-w-md leading-relaxed">
              Carefully tuned carbonation with tailored sensory profiles to activate cognition and recharge your physical baseline.
            </p>
          </div>

          {/* 2-Card Primary Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            <ProductShowcaseCard product={PRODUCTS[0]} theme="purple" />
            <ProductShowcaseCard product={PRODUCTS[1]} theme="gold" />
          </div>
        </div>
      </section>

      {/* FOUR REASONS TO CHOOSE ADLER: 4-Column Luxury Bento Grid in Pure White */}
      <section className="w-full py-28 bg-white text-on-surface relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-orange-50 text-[#FF6B35] font-label-sm text-label-sm uppercase tracking-widest font-extrabold shadow-xs border border-orange-200/50">
              Uncompromising Formulation
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary-container mt-4 font-extrabold sm:text-4xl">
              Why Modern Leaders Reach for ADLER
            </h2>
            <p className="font-body-md text-body-md text-slate-600 mt-3 leading-relaxed">
              Four foundational pillars that set our elixirs apart from standard commercial energy drinks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_REASONS.map((pillar, idx) => (
              <div
                key={pillar.number}
                className="group p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-slate-100 hover:border-orange-200 transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-headline-md text-headline-md text-slate-300 group-hover:text-amber-500 transition-colors font-mono font-extrabold">
                      {pillar.number}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-xs transition-colors ${
                        idx === 1
                          ? 'bg-gradient-to-br from-[#FF6B35] to-[#FFA07A] text-white shadow-orange-500/20'
                          : idx === 0
                          ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-[#291700]'
                          : idx === 2
                          ? 'bg-emerald-500 text-white'
                          : 'bg-primary-container text-amber-300'
                      }`}
                    >
                      <Icon name={pillar.icon} size="22px" />
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary-container font-extrabold group-hover:text-[#FF6B35] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-slate-500 mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 flex items-center gap-1.5 text-slate-700 font-label-sm text-label-sm font-bold border-t border-slate-100">
                  <Icon
                    name={pillar.tagIcon}
                    size="16px"
                    className={idx === 1 ? 'text-[#FF6B35]' : 'text-amber-600'}
                  />
                  <span>{pillar.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING HORIZON TEASER */}
      <HorizonTeaser />

      {/* BUSINESS PARTNERSHIP CALL TO ACTION */}
      <section className="w-full py-28 bg-white text-on-surface relative">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1c0630] via-primary-container to-[#120224] text-white p-10 sm:p-16 shadow-2xl overflow-hidden border border-amber-300/20">
            {/* Ambient Peach-Gold Light Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-400/20 to-[#FF6B35]/25 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FF6B35]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 font-label-sm text-label-sm font-bold uppercase mb-6 border border-amber-200/30">
                <Icon name="domain" size="16px" />
                <span>Commercial Distribution &amp; Retail Network</span>
              </div>

              <h2 className="font-headline-xl text-headline-xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight font-extrabold">
                Partner With India’s Next-Gen Beverage Pioneer.
              </h2>

              <p className="font-body-lg text-body-lg text-slate-300 mt-5 leading-relaxed">
                ADLER BEVERAGES is rapidly expanding across luxury grocery, state-of-the-art gyms,
                executive pantries, boutique hotels, and premier cafés. Secure exclusive regional dealership or retail presence today.
              </p>

              {/* Channel Badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Regional Distributors', 'Modern Trade Supermarkets', 'High-End Fitness Clubs', 'Tech Campus Pantries'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm font-label-sm text-label-sm text-white border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <Button
                  variant="gold"
                  size="lg"
                  icon="assignment"
                  onClick={() => navigateTo('partner-with-us')}
                >
                  Submit Dealership Enquiry
                </Button>

                <Button
                  variant="peach"
                  size="lg"
                  icon="chat"
                  iconPosition="left"
                  href="https://wa.me/919820011223?text=Hello%20ADLER%20Commercial%20Desk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Direct WhatsApp Concierge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
