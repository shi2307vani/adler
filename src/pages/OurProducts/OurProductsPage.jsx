import React, { useState } from 'react';
import { PRODUCTS } from '../../constants/products';
import { useNavigation } from '../../context/NavigationContext';
import Icon from '../../components/atoms/Icon/Icon';
import Button from '../../components/atoms/Button/Button';
import ProductDetailSection from '../../components/organisms/ProductDetail/ProductDetailSection';
import NutritionTable from '../../components/organisms/NutritionTable/NutritionTable';

export default function OurProductsPage() {
  const { navigateTo } = useNavigation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts =
    activeFilter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.id === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Page Hero / Introduction Section */}
      <section className="relative w-full pt-8 pb-16 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Ambient Glow Orbs */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 -left-12 w-80 h-80 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border-0 shadow-sm text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest font-semibold">
            <Icon name="stars" size="16px" className="text-secondary" fill={1} />
            Master Formulations • Batch 04 Release
          </div>

          <h1 className="font-headline-xl text-headline-xl sm:text-5xl lg:text-6xl text-primary font-extrabold tracking-tight">
            THE ADLER ELIXIR PORTFOLIO
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Caffeinated Functional Formulations Engineered for Uncompromising Mental Clarity &amp; Sensory Refinement.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5" id="product-filters">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm font-semibold cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-primary-container text-on-primary shadow-md'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              All Formulations
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('mix-berry-sparks')}
              className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm font-semibold cursor-pointer ${
                activeFilter === 'mix-berry-sparks'
                  ? 'bg-primary-container text-on-primary shadow-md'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              Mix Berry Sparks (250ml)
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('peach-sparks')}
              className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm font-semibold cursor-pointer ${
                activeFilter === 'peach-sparks'
                  ? 'bg-primary-container text-on-primary shadow-md'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              Peach Sparks (250ml)
            </button>

            <button
              type="button"
              disabled
              className="px-5 py-2 rounded-full font-label-md text-label-md transition-all shadow-sm bg-surface-container-lowest text-on-surface-variant opacity-60 cursor-not-allowed font-semibold"
            >
              Collector Editions (Reserved)
            </button>
          </div>
        </div>
      </section>

      {/* Product Detailed Sections */}
      {filteredProducts.map((prod, idx) => (
        <ProductDetailSection
          key={prod.id}
          product={prod}
          layout={idx % 2 === 1 ? 'inverted' : 'normal'}
        />
      ))}

      {/* Comparative Nutritional & Biochemical Matrix */}
      <NutritionTable />

      {/* Visual Ingredient Mosaic & Sensory Science */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="rounded-2xl bg-surface-container p-8 lg:p-14 shadow-lg relative overflow-hidden border border-secondary/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-xs">
                <Icon name="science" size="16px" className="text-secondary" />
                Precision Extraction Lab
              </div>

              <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold leading-tight">
                Crafted with No Compromises. From Himalayan Springs to Botanical Distillation.
              </h2>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Every drop of ADLER is formulated with supercritical CO2 herbal extractions and pristine
                Himalayan aquifer spring water. We eliminate crash-inducing synthetic taurines, excessive
                refined syrups, and abrasive artificial flavorings.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-xs">
                    <Icon name="check_circle" size="18px" className="text-primary-container" />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Micro-Filtered
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      7-stage mineralized water base
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-xs">
                    <Icon name="check_circle" size="18px" className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                      Natural Alkalinity
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Optimal bio-available cellular uptake
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Mosaic Graphic Showcase */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-44 rounded-xl overflow-hidden shadow-md border border-secondary/10">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt="Wild freshly harvested Himalayan berries with vibrant purple dew drops"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgk-Cu9PKGoc0UTXNNbs-frjqiJhP6e8rJj0dxPxvVCDATus3bvTL_h9k2-chMg_Dqly3GHESrP1YW8BiV7K6GCQVEMwXguJzYxmqNhZNMda1uSG9VMSN8PmPth1JWShYX32X77ekjkz9sSbGAUhhmEuUYCZUW-_p3q6JAzrxNGz6et1ZY6PfCDn2JHD2NR06UBwK_S5Z6QCEbkslmUgA522LpchXO8Zo-OTX-BhgmOY9op8fRbm_-QQ"
                  />
                </div>
                <div className="p-5 rounded-xl bg-surface-container-lowest shadow-md space-y-2 border border-secondary/10">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Cold-Pressed Flavours
                  </span>
                  <p className="font-headline-sm text-headline-sm text-primary font-bold">
                    Authentic Nectar
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Zero synthetic candy flavorings or artificial dyes.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-5 rounded-xl bg-primary-container text-on-primary shadow-md space-y-2 border border-secondary/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
                    1:2 Synergy Ratio
                  </span>
                  <p className="font-headline-sm text-headline-sm text-white font-bold">
                    L-Theanine Lift
                  </p>
                  <p className="font-body-sm text-body-sm text-on-primary-container">
                    Proven alpha-wave stimulation for serene cognitive focus.
                  </p>
                </div>
                <div className="h-44 rounded-xl overflow-hidden shadow-md border border-secondary/10">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt="Ripe white peaches and pink Himalayan salt crystals"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwYo9M11QI-erwF3ymD4Wr_MCroH6M_FiYKF8iWXYa2T0zsrQanHImzeXepHQtXhsDKltUa_OgIVgIMheATT-wjSAdXLaTpNxfK6WjmcRvlNiZJFIcfYgLIJ_UYB6st9U_r2POIHa8Xl55rOkxceDSzasrYUOR9RuBJZycGY7tFvpY4Xa07XIXsAgCASz7kfVhjse6qfJlK-TsWiWXKgqdzKh0vWoYwBDFVEg7LzAo9Awrne-n75aYew"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Concierge & Bulk Tasting Kit Banner */}
      <section className="w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <div className="relative rounded-2xl bg-primary-container text-on-primary p-8 lg:p-14 shadow-2xl overflow-hidden border border-secondary/20">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-72 h-72 rounded-full bg-surface-tint/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-on-primary-fixed-variant/40 text-secondary-fixed font-label-sm text-label-sm uppercase tracking-widest font-semibold border border-secondary/20">
                <Icon name="local_shipping" size="16px" />
                B2B &amp; Corporate Hospitality Concierge
              </div>

              <h2 className="font-headline-lg text-headline-lg text-white font-extrabold leading-tight">
                Experiencing ADLER for Your Business or Event?
              </h2>

              <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
                Order our curated Dual-Can Discovery Tasting Set for qualified corporate partners, high-end hospitality venues, gym directors, and luxury retail stockists.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 font-label-md text-label-md text-secondary-fixed">
                <span className="flex items-center gap-1.5">
                  <Icon name="check" size="18px" /> Two 250ml Full Cans
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check" size="18px" /> Lab Specification Dossier
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check" size="18px" /> Priority Concierge Dispatch
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Button
                variant="gold"
                size="lg"
                icon="inventory_2"
                className="w-full sm:w-auto"
                onClick={() => navigateTo('partner-with-us')}
              >
                REQUEST TASTING KIT
              </Button>
              <Button
                variant="primary"
                size="lg"
                icon="chat"
                className="w-full sm:w-auto bg-primary text-secondary-fixed hover:bg-primary/80"
                href="https://wa.me/919820011223?text=Hello%20ADLER%20Commercial%20Desk,%20we%20would%20like%20to%20request%20a%20tasting%20kit."
                target="_blank"
                rel="noopener noreferrer"
              >
                VIP WhatsApp Desk
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
