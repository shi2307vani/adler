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
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HomeHero />

      {/* BRAND INTRODUCTION: Tactile Luxury */}
      <section className="w-full py-24 bg-surface text-on-surface relative border-b border-secondary/10">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Text Philosophy */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-2">
                <Icon name="psychiatry" size="20px" className="text-on-tertiary-container" />
                <span className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary font-bold">
                  The Adler Paradigm
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight font-extrabold">
                Crafted for Mindful Vitality, <br />
                <span className="text-primary-container">Born in India.</span>
              </h2>

              <div className="w-20 h-1 rounded-full bg-secondary-container" />

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                For decades, high-octane beverages relied on extreme sugar spikes, bitter synthetic chemicals,
                and abrupt physiological crashes. ADLER was formulated to rewrite this outdated equation.
              </p>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                By harmonizing certified organic botanical cordials with pure L-Theanine and purified natural
                caffeine, we engineer a state of calm hyper-focus. We honor the royal herbal wisdom of India while
                meeting the exacting standards of contemporary athletes, executives, and creative visionaries across the globe.
              </p>

              {/* Metric Highlights Bento */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col items-start border border-secondary/10">
                  <span className="font-headline-md text-headline-md text-primary-container font-extrabold">
                    0g
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase mt-1 tracking-wider font-semibold">
                    Added Sugar
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col items-start border border-secondary/10">
                  <span className="font-headline-md text-headline-md text-secondary font-extrabold">
                    1:1
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase mt-1 tracking-wider font-semibold">
                    Focus Ratio
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col items-start border border-secondary/10">
                  <span className="font-headline-md text-headline-md text-on-tertiary-container font-extrabold">
                    100%
                  </span>
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase mt-1 tracking-wider font-semibold">
                    Veg Botanical
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Visual Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container border border-secondary/15">
                <img
                  className="w-full h-full object-cover"
                  alt="Overhead artisanal flatlay of ADLER botanical ingredients"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaO1sch7CfwcUpTZ4Q-QOQ8B5uNwRjOHzU-4zEnxE4qPJAEySjFN7ms1_DfHkKnpR8yGN9Pl4eJx96nACa4pl9TX-C5NHcuNpvRPZKOcyFiLp-TR84qEAXqGOHlCWq-toj6pNzC3jRzbA4nlk6ujjfgcJKVc16AQACmz7mmN66SOPFGIQULlqM8p6kPOBYcawCaVVb-T7xB4Mzpt7sjBVMX-Ckdcp0C9jiZcfXGLvT_8_D5C3Una8LNA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                    Batch Certified
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-surface-container-lowest mt-1 font-bold">
                    Pure Plant Chemistry
                  </h4>
                  <p className="font-body-sm text-body-sm text-outline-variant mt-1">
                    No artificial colors. Zero aspartame. Zero taurine fillers.
                  </p>
                </div>
              </div>

              {/* Floating Eagle Seal Accent */}
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-xl shadow-xl flex items-center gap-3 border border-secondary/20">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shadow-sm">
                  <Icon name="verified" size="26px" />
                </div>
                <div>
                  <p className="font-label-lg text-label-lg font-bold text-primary-container">
                    Indian Formulations
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Global ISO GMP Standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE: Card Grid with Visual Distinction */}
      <section className="w-full py-24 bg-surface-container-low text-on-surface relative">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                  Functional Lineup
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary-container tracking-tight font-extrabold">
                The Elixir Selection
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
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

      {/* FOUR REASONS TO CHOOSE ADLER: 4-Column Luxury Bento Grid */}
      <section className="w-full py-24 bg-surface text-on-surface relative">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest font-bold shadow-xs">
              Uncompromising Formulation
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary-container mt-3 font-extrabold">
              Why Modern Leaders Reach for ADLER
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
              Four foundational pillars that set our elixirs apart from standard commercial energy drinks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_REASONS.map((pillar) => (
              <div
                key={pillar.number}
                className="group p-8 rounded-2xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-secondary/15 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-headline-md text-headline-md text-secondary/40 font-mono font-bold">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shadow-xs">
                      <Icon name={pillar.icon} size="20px" />
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">
                    {pillar.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 flex items-center gap-1.5 text-on-tertiary-container font-label-sm text-label-sm font-semibold border-t border-surface-container">
                  <Icon name={pillar.tagIcon} size="16px" />
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
      <section className="w-full py-24 bg-surface text-on-surface relative">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary-container via-primary-container to-primary text-on-primary p-10 sm:p-16 shadow-2xl overflow-hidden border border-secondary/20">
            {/* Ambient Light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md text-secondary-fixed font-label-sm text-label-sm font-bold uppercase mb-6 border border-secondary/30">
                <Icon name="domain" size="16px" />
                <span>Commercial Distribution &amp; Retail Network</span>
              </div>

              <h2 className="font-headline-xl text-headline-xl sm:text-4xl lg:text-5xl text-surface-container-lowest tracking-tight leading-tight font-extrabold">
                Partner With India’s Next-Gen Beverage Pioneer.
              </h2>

              <p className="font-body-lg text-body-lg text-outline-variant mt-5 leading-relaxed">
                ADLER BEVERAGES is rapidly expanding across luxury grocery, state-of-the-art gyms,
                executive pantries, boutique hotels, and premier cafés. Secure exclusive regional dealership or retail presence today.
              </p>

              {/* Channel Badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Regional Distributors', 'Modern Trade Supermarkets', 'High-End Fitness Clubs', 'Tech Campus Pantries'].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest/10 font-label-sm text-label-sm text-surface-container-lowest border border-white/10"
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
                  variant="glass"
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
