import React from 'react';
import { PARTNERSHIP_TRACKS, DISTRIBUTOR_PERKS } from '../../constants/partners';
import Icon from '../../components/atoms/Icon/Icon';
import Button from '../../components/atoms/Button/Button';
import TrackCard from '../../components/molecules/TrackCard/TrackCard';
import PartnershipForm from '../../components/organisms/PartnershipForm/PartnershipForm';
import PartnerConcierge from '../../components/organisms/PartnerConcierge/PartnerConcierge';

export default function PartnerWithUsPage() {
  const scrollToForm = () => {
    const el = document.getElementById('partner-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Banner & Header Intro */}
      <section className="relative w-full overflow-hidden bg-surface-container-low pt-12 pb-20 border-b border-secondary/10">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Eagle Overhead Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-highest shadow-sm border border-secondary/15">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container font-bold">
                COMMERCIAL PARTNERSHIP NETWORK
              </span>
            </div>
            <div className="flex items-center gap-6 font-label-md text-label-md text-on-surface-variant font-medium">
              <span className="flex items-center gap-1.5">
                <Icon name="verified_user" size="18px" className="text-secondary" /> Tier-1 FMCG Allocation
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <Icon name="timer" size="18px" className="text-on-tertiary-container" /> 4-Hour Response Guarantee
              </span>
            </div>
          </div>

          {/* Main Headline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-bold">
                  EXPAND YOUR MARGIN HORIZONS
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl sm:text-5xl lg:text-6xl text-primary uppercase tracking-tight leading-[1.08] max-w-4xl font-extrabold">
                PARTNER WITH INDIA’S{' '}
                <span className="text-primary-container relative inline-block">
                  PREMIER
                  <span className="absolute left-0 bottom-1 w-full h-2 bg-secondary-container/60 -z-10 rounded" />
                </span>{' '}
                FUNCTIONAL BEVERAGE BRAND
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl leading-relaxed">
                Join our curated distribution network across modern luxury supermarkets, Tier-1 corporate micro-kitchens,
                executive athletics clubs, and boutique hospitality lounges. Pure cognitive clarity, exceptional margins.
              </p>
            </div>

            {/* Quick Summary Box */}
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="p-6 rounded-xl bg-surface-container-lowest shadow-md flex flex-col gap-4 border border-secondary/15">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Q3 ALLOCATION STATUS
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm uppercase font-bold shadow-xs">
                    ACCEPTING
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg text-primary font-extrabold">
                    35% – 45%
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    Baseline Trade Margin
                  </span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                  <div className="bg-primary-container h-full rounded-full w-[78%]" />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
                  <Icon name="info" size="16px" className="text-secondary" />
                  <span>78% regional exclusivity slots filled for FY25.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Track Selector */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-10 mb-20 relative z-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERSHIP_TRACKS.map((t) => (
            <TrackCard key={t.track} track={t} onSelect={scrollToForm} />
          ))}
        </div>
      </section>

      {/* Editorial Product Splendor Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 w-full">
        <div className="rounded-2xl bg-surface-container p-8 lg:p-12 relative overflow-hidden shadow-lg border border-secondary/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visuals from Inspiration: 2 Elegant Beverage Shots */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-lg h-72 lg:h-[420px] relative group border border-purple-100 bg-gradient-to-b from-purple-50 via-white to-white p-6 flex flex-col items-center justify-center">
                <img
                  className="h-full w-auto max-h-[360px] object-contain group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_20px_35px_rgba(43,13,71,0.25)]"
                  alt="ADLER Mix Berry Sparks slim aluminum can"
                  src="/images/mix-berries.png?v=2"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-primary-container text-white font-label-sm text-label-sm uppercase font-extrabold shadow-sm border border-amber-300/30">
                  Mix Berries 250ml
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-72 lg:h-[420px] relative group mt-6 border border-orange-100 bg-gradient-to-b from-orange-50 via-white to-white p-6 flex flex-col items-center justify-center">
                <img
                  className="h-full w-auto max-h-[360px] object-contain group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_20px_35px_rgba(255,107,53,0.3)]"
                  alt="ADLER Peach Sparks slim aluminum beverage can"
                  src="/images/peach-sparks.png?v=2"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white font-label-sm text-label-sm uppercase font-extrabold shadow-sm shadow-orange-500/25">
                  Peach Sparks 250ml
                </div>
              </div>
            </div>

            {/* Copy & Wholesale Value Proof */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold mb-2">
                UNMATCHED PRODUCT INTEGRITY
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase leading-tight mb-4 font-extrabold">
                CRAFTED FOR EXECUTIVE ENERGY. ENGINEERED FOR HIGH REPEAT VELOCITY.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Unlike legacy sugary energy sodas, ADLER combines natural caffeine derived from green tea extracts
                with clean L-Theanine, essential B-complex electrolytes, and zero artificial sweeteners. Modern Indian
                consumers demand mindful vitality—resulting in industry-leading store-shelf sell-through rates.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-surface-container-high">
                <div>
                  <span className="font-headline-md text-headline-md text-primary block font-bold">
                    3.4x
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Repeat purchase velocity vs category standard
                  </span>
                </div>
                <div>
                  <span className="font-headline-md text-headline-md text-primary block font-bold">
                    100%
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Natural botanicals with zero taurine or jitter agents
                  </span>
                </div>
                <div>
                  <span className="font-headline-md text-headline-md text-primary block font-bold">
                    12 Mos
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Extended ambient shelf stability in slim-line cans
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="md" icon="arrow_downward" onClick={scrollToForm}>
                  REQUEST SAMPLE CRATE
                </Button>
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-container-highest text-primary font-label-md text-label-md uppercase font-bold border border-secondary/15">
                  <Icon name="local_police" size="20px" className="text-secondary" />
                  FSSAI Standard Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Support Framework & Perks (4 Columns) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            MUTUAL COMMERCIAL PROSPERITY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mt-2 font-extrabold">
            THE ADLER DISTRIBUTOR COMMITMENT
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            We invest in our channel partners. When you stock ADLER, our marketing machine and retail merchandising support back every single case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISTRIBUTOR_PERKS.map((perk, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-surface-container-low shadow-sm hover:shadow-md transition-shadow border border-secondary/10 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-xs ${perk.iconBg}`}
                >
                  <Icon name={perk.icon} size="22px" />
                </div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2 font-bold">
                  {perk.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Two-Column Action Hub: Form & Instant WhatsApp/B2B Concierge */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 w-full" id="partner-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <PartnershipForm />
          </div>
          <div className="lg:col-span-5">
            <PartnerConcierge />
          </div>
        </div>
      </section>

      {/* Logistical Footprint & Distribution Depots Console */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 w-full">
        <div className="p-8 lg:p-10 rounded-2xl bg-surface-container-high shadow-md border border-secondary/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                LOGISTICAL FOOTPRINT
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary uppercase mt-1 font-extrabold">
                NATIONWIDE COLD-CHAIN HUB NETWORK
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl leading-relaxed">
                Our temperature-monitored hubs ensure rapid 24-48 hour stock replenishment across western, northern, and southern corridors.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-secondary" /> 3 Master Warehouses
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase font-bold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-on-tertiary-container" /> 18 Regional Transit Hubs
              </span>
            </div>
          </div>

          {/* Location Map View */}
          <div
            className="w-full h-80 rounded-xl bg-cover bg-center shadow-inner relative overflow-hidden border border-secondary/15"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSbDxW2sG01xd7qQBZ42Q5s4CwawYKMuJjyY3IwxfqrpLLUa0_4yoU51B_OPLrRRM48Ox8qBKFXGS0YN1kbQUg7VM7NKsOJOb6S9qaEyD2ScgJLyupRvpA6jzhH-kqIn3MBSLHvichMw5HPY_9bdQLOioiPCtt00VkVLnzjKngpau9jFtHLzgQ3q4fYY7NYpLcawUctkZl49GFQp3xjs3broNx0DNDJB_Ba-xhgrHc0Z1GZdwcTR1PbQ')"
            }}
          >
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
            <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md shadow-lg max-w-sm border border-secondary/15">
              <span className="font-label-sm text-label-sm uppercase font-bold text-secondary block">
                CENTRAL DISPATCH CONSOLE
              </span>
              <p className="font-headline-sm text-headline-sm text-primary uppercase mt-1 font-bold">
                Bandra Kurla Complex, Mumbai
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-1">
                Dispatches to Gujarat, Maharashtra, Goa, &amp; MP daily at 06:00 IST.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Media Relations Strip */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 w-full">
        <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-secondary/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-secondary-fixed shrink-0 shadow-sm">
              <Icon name="newspaper" size="24px" />
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-primary uppercase font-bold">
                MEDIA RELATIONS &amp; INVESTOR COMMUNICATIONS
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Press inquiries, podcast appearances, and official high-res brand asset kits.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-highest transition-colors font-label-sm text-label-sm text-primary uppercase font-bold flex items-center gap-2"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
              <Icon name="open_in_new" size="14px" />
            </a>
            <a
              className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-highest transition-colors font-label-sm text-label-sm text-primary uppercase font-bold flex items-center gap-2"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <Icon name="open_in_new" size="14px" />
            </a>
            <a
              className="px-4 py-2 rounded-lg bg-primary-container text-secondary-fixed hover:bg-primary transition-colors font-label-sm text-label-sm uppercase font-bold flex items-center gap-2 shadow-xs"
              href="mailto:press@adlerbeverages.com"
            >
              <Icon name="mail" size="14px" />
              <span>Press Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
