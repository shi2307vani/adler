import React from 'react';
import { BRAND_VALUES } from '../../constants/brand';
import { useNavigation } from '../../context/NavigationContext';
import Icon from '../../components/atoms/Icon/Icon';
import Button from '../../components/atoms/Button/Button';
import ValueCard from '../../components/molecules/ValueCard/ValueCard';
import EnduranceGraph from '../../components/organisms/PerformanceGraph/EnduranceGraph';

export default function AboutUsPage() {
  const { navigateTo } = useNavigation();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section: Editorial & Grand */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden py-space-xl lg:py-28 px-margin-mobile lg:px-margin border-b border-secondary/10">
        {/* Ambient Royal Glow Overlay */}
        <div className="absolute -top-32 right-0 w-[580px] h-[580px] rounded-full bg-gradient-to-br from-primary-fixed/30 via-secondary-container/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-surface-container-high/40 via-surface-variant/20 to-transparent blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb & Badge */}
          <div className="flex flex-wrap items-center gap-space-sm mb-space-lg">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest shadow-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> ADLER HERITAGE &amp; ORIGIN
            </span>
            <span className="text-outline-variant font-label-sm">/</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase font-semibold">
              Executive Overview
            </span>
          </div>

          {/* Main Headline Typography */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-headline-xl text-headline-xl sm:text-5xl lg:text-6xl text-primary-container tracking-tight font-extrabold leading-[1.08]">
                THE STORY OF <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-primary-container via-surface-tint to-secondary bg-clip-text text-transparent">
                  ADLER BEVERAGES
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface max-w-2xl leading-relaxed">
                Where Health Meets Refreshment. Engineered for visionary minds who refuse to choose between clean sustained mental clarity and royal sensorial indulgence.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="bg-surface-container-low rounded-xl p-space-md shadow-[0_4px_20px_-2px_rgba(35,22,16,0.06)] flex flex-col gap-space-xs border border-secondary/15">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-bold">
                    FOUNDATIONAL CREED
                  </span>
                  <Icon name="visibility" size="20px" className="text-secondary" fill={1} />
                </div>
                <div className="font-headline-md text-headline-md text-primary-container uppercase tracking-tight font-extrabold">
                  FOCUS LIKE AN EAGLE
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Precision vitality born in India, formulated to reset the standard of global functional elixirs.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual Composition */}
          <div className="mt-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
            <div className="lg:col-span-8 relative rounded-xl overflow-hidden shadow-xl min-h-[380px] lg:min-h-[460px] flex items-end p-space-lg bg-gradient-to-br from-primary-container via-primary to-[#19052b] border border-secondary/20">
              {/* Decorative Brand Crest Watermark */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-80 h-80 opacity-10 pointer-events-none flex items-center justify-center">
                <img
                  src="/images/logo.png?v=2"
                  alt=""
                  className="w-full h-full object-contain filter invert"
                />
              </div>

              {/* Can Visual Showcase on the Right */}
              <div className="hidden sm:flex absolute right-8 bottom-0 top-6 items-end justify-center pointer-events-none z-10">
                <img
                  src="/images/mix-berries.png?v=2"
                  alt="ADLER Mix Berries 250ml"
                  className="h-full w-auto max-h-[380px] object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md w-full">
                <div className="max-w-md">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                    100% VEGETARIAN • ZERO SUGAR
                  </span>
                  <p className="font-headline-sm text-headline-sm text-on-primary font-bold">
                    The Pinnacle of Botanical Caffeine
                  </p>
                  <p className="font-body-sm text-body-sm text-surface-container-high mt-1 leading-relaxed">
                    Infused with natural green tea extract, calming L-Theanine, and real mountain fruit essences.
                  </p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  icon="arrow_forward"
                  onClick={() => navigateTo('our-products')}
                >
                  View The Elixir
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-md justify-between">
              <div className="bg-surface-container p-space-lg rounded-xl shadow-sm flex flex-col justify-between h-full border border-secondary/15">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="w-10 h-10 rounded-lg bg-primary-container text-secondary-fixed flex items-center justify-center shadow-sm">
                      <Icon name="psychology" size="22px" />
                    </span>
                    <span className="font-label-sm text-label-sm text-on-tertiary-container bg-surface-container-high px-2 py-0.5 rounded-full font-bold">
                      CLINICAL SYNERGY
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary-container mb-space-xs font-bold">
                    Sustained Neural Lift
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                    Unlike traditional synthetic formulations that cause severe heart racing and sudden sugar crashes, ADLER delivers smooth alpha-wave brain activation.
                  </p>
                </div>
                <div className="flex items-center gap-space-md pt-space-xs border-t border-surface-container-highest">
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-primary-container font-extrabold">
                      Zero
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Added Sugar
                    </span>
                  </div>
                  <div className="w-px h-8 bg-surface-dim" />
                  <div className="flex flex-col">
                    <span className="font-headline-md text-headline-md text-primary-container font-extrabold">
                      1:1
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      L-Theanine Ratio
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-high p-space-md rounded-xl flex items-center gap-space-md border border-secondary/10">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0 shadow-sm">
                  <Icon name="flag" size="24px" />
                </div>
                <div>
                  <div className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
                    Origin Story
                  </div>
                  <div className="font-headline-sm text-headline-sm text-primary-container font-bold">
                    Crafted in India
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Conceived in Mumbai &amp; Bengaluru labs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Story Behind ADLER (Editorial Narrative) */}
      <section className="w-full bg-surface py-space-xl lg:py-24 px-margin-mobile lg:px-margin border-b border-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Visual Story Column: Fresh Luminous Peach Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-gradient-to-b from-orange-50 via-white to-white p-8 flex flex-col items-center justify-center border border-orange-100 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.18),transparent_70%)] pointer-events-none" />
                <img
                  src="/images/peach-sparks.png?v=2"
                  alt="ADLER Peach Sparks 250ml"
                  className="h-full w-auto max-h-[380px] object-contain relative z-10 filter drop-shadow-[0_20px_35px_rgba(255,107,53,0.32)] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 right-6 p-space-md bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-slate-100 z-20">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="verified_user" size="18px" className="text-[#FF6B35]" />
                    <span className="font-label-sm text-label-sm text-primary-container uppercase font-extrabold tracking-wider">
                      The Purity Mandate
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-slate-500 leading-relaxed">
                    No high-fructose syrups. No artificial colors. Only natural caffeine derived from green tea leaves and pure fruit essence.
                  </p>
                </div>
              </div>

              {/* Decorative Stamp Overlap */}
              <div className="hidden sm:flex absolute -top-5 -right-5 w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFA07A] text-white p-3 shadow-xl items-center justify-center text-center flex-col border-2 border-white z-30">
                <Icon name="workspace_premium" size="24px" />
                <span className="font-label-sm text-[9px] uppercase tracking-wider font-extrabold mt-0.5">
                  Royal Blend
                </span>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-space-md pl-0 lg:pl-space-md">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-secondary" />
                <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-widest">
                  A Modern Beverage Renaissance
                </span>
              </div>

              <h2 className="font-headline-lg text-headline-lg text-primary-container tracking-tight font-extrabold">
                Challenging An Outdated Beverage Paradigm
              </h2>

              <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-surface leading-relaxed">
                <p>
                  For decades, the Indian beverage shelf offered an unforgiving compromise: artificially flavored,
                  hyper-carbonated sodas loaded with empty calories, or extreme fluorescent energy drinks laden with
                  synthetic taurine, industrial sugar loads, and violent post-consumption slumps.
                </p>
                <p>
                  Our founders recognized that the contemporary Indian professional, creator, and athlete required
                  something radically elevated: a functional elixir that delivers genuine mental acuity without
                  compromising physical wellness.
                </p>
                <p className="p-space-md rounded-lg bg-surface-container-low font-body-md text-on-surface border-l-4 border-secondary">
                  <strong className="text-primary-container font-headline-sm block mb-1">
                    "We asked a singular question:
                  </strong>
                  Why can’t a high-performance caffeinated beverage taste as exquisite as an artisanal nectar while
                  holding the clean physiological credentials of an apothecary wellness tonic?"
                </p>
                <p>
                  ADLER BEVERAGES was crystallized from that conviction. Combining deep botanical extraction with
                  modern cognitive science, our formula marries crisp natural carbonation, real fruit notes, and
                  nootropics engineered to instill laser focus without jitteriness.
                </p>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-space-sm pt-space-sm mt-space-sm">
                <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col border border-secondary/10">
                  <span className="font-headline-md text-headline-md text-primary-container font-extrabold">
                    18+
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    Months in R&amp;D
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col border border-secondary/10">
                  <span className="font-headline-md text-headline-md text-secondary font-extrabold">
                    100%
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    Clean Nutrition
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col border border-secondary/10">
                  <span className="font-headline-md text-headline-md text-primary-container font-extrabold">
                    250ml
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    Infinite Cans
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4: Vision & Mission (Split Contrast Luxury Bento) */}
      <section className="w-full bg-surface-container-low py-space-xl lg:py-24 px-margin-mobile lg:px-margin border-b border-secondary/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-1">
              NORTH STAR PRINCIPLES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary-container font-extrabold">
              Purpose-Driven Evolution
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              From metropolitan boardrooms in Mumbai and tech campuses in Bengaluru to prestigious boutique spaces worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
            {/* Vision Card */}
            <div className="relative bg-surface-container-lowest rounded-xl p-space-xl shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden border border-secondary/15">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-container via-secondary to-secondary-fixed" />
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-fixed flex items-center justify-center shadow-sm">
                    <Icon name="explore" size="26px" />
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                    Long-Term Horizon
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-md text-label-md text-secondary uppercase tracking-widest font-bold">
                    OUR VISION
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary-container font-extrabold">
                    Becoming India's Most Recognized &amp; Respected Beverage Brand
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We envision rewriting the narrative of consumer packaged goods originating from South Asia.
                  By engineering products that outperform international incumbents in taste, functional integrity,
                  and design prestige, ADLER aims to become the definitive daily companion for high-functioning individuals
                  across Tier-1 Indian metros and key global epicenters.
                </p>
              </div>

              <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-md flex items-center justify-between border border-secondary/10">
                <div className="flex items-center gap-2">
                  <Icon name="public" size="20px" className="text-secondary" />
                  <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                    Global Ambition • Indian Roots
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                  2026–2030
                </span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative bg-surface-container-lowest rounded-xl p-space-xl shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden border border-secondary/15">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container" />
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                    <Icon name="bolt" size="26px" />
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary-fixed text-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
                    Operational Creed
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-md text-label-md text-primary-container uppercase tracking-widest font-bold">
                    OUR MISSION
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary-container font-extrabold">
                    Creating Refreshing, Flavour-Led Beverages That Elevate Everyday Living
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We pledge relentless dedication to uncompromised formulations. Every can of ADLER is calibrated with
                  clinically studied nootropics, 100% natural caffeine, real fruit character, zero artificial preservatives,
                  zero refined sugar, and full vegetarian verification. We design moments of unadulterated focus and refreshment
                  that empower you to accomplish your greatest work.
                </p>
              </div>

              <div className="mt-space-lg pt-space-md bg-surface-container-low rounded-lg p-space-md flex items-center justify-between border border-secondary/10">
                <div className="flex items-center gap-2">
                  <Icon name="energy_savings_leaf" size="20px" className="text-on-tertiary-container" />
                  <span className="font-label-sm text-label-sm text-primary-container font-semibold">
                    100% Clean Label Certified
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-primary-container font-bold">
                  Zero Flaws
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Five Core Values (Grid Layout with Distinct Hierarchy) */}
      <section className="w-full bg-surface-container-lowest py-space-xl lg:py-28 px-margin-mobile lg:px-margin border-b border-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                DNA OF EXCELLENCE
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary-container mt-1 font-extrabold">
                Our Five Foundational Values
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                The unbending benchmarks that govern our laboratory formulas, supply chain ethics, and consumer stewardship.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm bg-surface-container px-3 py-1.5 rounded-full border border-secondary/10 font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Non-Negotiable Quality Framework
            </div>
          </div>

          {/* Bento 5 Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md">
            {BRAND_VALUES.map((val) => (
              <ValueCard key={val.number} item={val} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Ingredient & Performance Matrix Graphic */}
      <section className="w-full bg-surface-container py-space-xl px-margin-mobile lg:px-margin border-b border-secondary/10">
        <div className="max-w-7xl mx-auto bg-surface-container-lowest rounded-2xl p-space-lg lg:p-space-xl shadow-md border border-secondary/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-5 flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                PHYSIOLOGICAL BLUEPRINT
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary-container font-extrabold">
                Engineered For The Eagle Mind
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Every element inside an ADLER can serves an exact neurological purpose. Here is how our formulation behaves compared to generic energy drinks.
              </p>

              <div className="mt-space-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-secondary/10">
                  <div className="flex items-center gap-3">
                    <Icon name="flash_on" size="20px" className="text-secondary" />
                    <span className="font-body-md text-body-md font-semibold text-primary-container">
                      Energy Curve
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-tertiary-container font-bold">
                    Smooth 4-6hr Peak
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-secondary/10">
                  <div className="flex items-center gap-3">
                    <Icon name="psychology_alt" size="20px" className="text-secondary" />
                    <span className="font-body-md text-body-md font-semibold text-primary-container">
                      Jitter Index
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">
                    Near Zero (L-Theanine Buffered)
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low border border-secondary/10">
                  <div className="flex items-center gap-3">
                    <Icon name="speed" size="20px" className="text-secondary" />
                    <span className="font-body-md text-body-md font-semibold text-primary-container">
                      Crash Phase
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary-container font-bold">
                    Eliminated
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <EnduranceGraph />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: The Road Ahead & Leadership Commitment */}
      <section className="w-full bg-surface-container-lowest py-space-xl lg:py-28 px-margin-mobile lg:px-margin">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-container text-on-primary rounded-2xl overflow-hidden shadow-2xl relative border border-secondary/20">
            {/* Golden Decorative Arc */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />

            <div className="p-space-lg lg:p-20 relative z-10 flex flex-col gap-space-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-primary-fixed-dim/20 pb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-3 h-3 rounded-full bg-secondary-fixed" />
                  <span className="font-label-md text-label-md uppercase tracking-widest text-secondary-fixed font-bold">
                    THE ROAD AHEAD • 2025 &amp; BEYOND
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider font-semibold">
                  Official Executive Statement
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
                <div className="lg:col-span-8 flex flex-col gap-space-md">
                  <h2 className="font-headline-lg text-headline-lg sm:text-4xl text-on-primary tracking-tight font-extrabold leading-snug">
                    "Our journey has just commenced. We are pioneering an enduring beverage dynasty from India."
                  </h2>
                  <p className="font-body-lg text-body-lg text-surface-container-high/90 leading-relaxed">
                    As we scale across modern retail, premium fitness club chains, and boutique café cultures
                    across India, our manufacturing commitment remains uncompromising: zero single-use plastic,
                    sustainable water conservation practices at our contract bottling partners, and continuous botanical innovation.
                  </p>

                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <div className="flex items-center gap-2">
                      <Icon name="recycling" size="20px" className="text-secondary-fixed" />
                      <span className="font-label-md text-label-md text-on-primary font-medium">
                        100% Infinitely Recyclable
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="nature" size="20px" className="text-secondary-fixed" />
                      <span className="font-label-md text-label-md text-on-primary font-medium">
                        Botanical Green Tea Sourcing
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="inventory_2" size="20px" className="text-secondary-fixed" />
                      <span className="font-label-md text-label-md text-on-primary font-medium">
                        Cold-Chain Preserved
                      </span>
                    </div>
                  </div>
                </div>

                {/* Founder Portrait Card / Stamp */}
                <div className="lg:col-span-4 bg-surface-container-lowest text-on-surface p-space-lg rounded-xl shadow-lg flex flex-col gap-space-sm border border-secondary/15">
                  <div className="flex items-center gap-space-md">
                    <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed shrink-0 shadow-sm">
                      <Icon name="shield_with_house" size="28px" />
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm text-primary-container font-bold">
                        Executive Board
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                        Adler Beverages India
                      </div>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    "We invite discerning retail partners, distributors, and conscious consumers to experience how functional hydration can be elevated to high art."
                  </p>
                  <div className="pt-space-xs border-t border-surface-container-highest flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      Mumbai • Bengaluru
                    </span>
                    <Icon name="handshake" size="18px" className="text-secondary" />
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-md border-t border-primary-fixed-dim/20">
                <Button
                  variant="gold"
                  size="md"
                  icon="local_cafe"
                  iconPosition="left"
                  onClick={() => navigateTo('our-products')}
                >
                  Explore Our Flavours
                </Button>
                <Button
                  variant="glass"
                  size="md"
                  icon="mail"
                  iconPosition="left"
                  onClick={() => navigateTo('partner-with-us')}
                >
                  Connect With Our Founders
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
