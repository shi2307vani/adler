import React from 'react';
import { NAV_LINKS } from '../../../constants/navigation';
import { useNavigation } from '../../../context/NavigationContext';
import Logo from '../../atoms/Logo/Logo';
import Icon from '../../atoms/Icon/Icon';

export default function Footer() {
  const { navigateTo } = useNavigation();

  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-secondary/15">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
        {/* Top Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-xl border-b border-surface-container-highest">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <Logo variant="footer" />
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-sm">
              ADLER BEVERAGES — Where Health Meets Refreshment. Born in India with global ambitions.
              Crafting caffeinated functional elixirs engineered for modern high-performance thinkers.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container text-on-tertiary-container font-label-sm text-label-sm">
                <Icon name="eco" size="14px" /> Clean Caffeine
              </span>
              <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm">
                <Icon name="verified" size="14px" /> Royal Heritage
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <h4 className="font-label-lg text-label-lg uppercase text-primary-container tracking-wider font-bold">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => navigateTo(link.id)}
                    className="hover:text-primary-container transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Functional Line */}
          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <h4 className="font-label-lg text-label-lg uppercase text-primary-container tracking-wider font-bold">
              Functional Line
            </h4>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('our-products', 'mix-berry-sparks')}
                  className="hover:text-primary-container transition-colors flex items-center justify-between w-full cursor-pointer text-left"
                >
                  <span>Mix Berry Sparks</span>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">250ml</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('our-products', 'peach-sparks')}
                  className="hover:text-primary-container transition-colors flex items-center justify-between w-full cursor-pointer text-left"
                >
                  <span>Peach Sparks</span>
                  <span className="font-label-sm text-label-sm text-secondary font-bold">250ml</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('our-products')}
                  className="hover:text-primary-container transition-colors flex items-center justify-between w-full cursor-pointer text-left"
                >
                  <span>Upcoming Botanicals</span>
                  <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-tertiary-container font-semibold">
                    Preview
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* B2B & Concierge */}
          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <h4 className="font-label-lg text-label-lg uppercase text-primary-container tracking-wider font-bold">
              B2B &amp; Concierge
            </h4>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('partner-with-us')}
                  className="hover:text-primary-container transition-colors text-left cursor-pointer"
                >
                  Distributor Enquiries
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('partner-with-us')}
                  className="hover:text-primary-container transition-colors text-left cursor-pointer"
                >
                  Corporate &amp; Retailer Tie-ups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('partner-with-us')}
                  className="hover:text-primary-container transition-colors text-left cursor-pointer"
                >
                  Gyms &amp; Premium Cafés
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/919820011223?text=Hello%20ADLER%20Beverages%20Commercial%20Desk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-container transition-colors flex items-center gap-1.5 text-on-tertiary-container font-medium"
                >
                  <Icon name="chat" size="16px" /> WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Social & Certifications Bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md text-on-surface-variant">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all"
              aria-label="Instagram"
            >
              <Icon name="share" size="18px" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all"
              aria-label="LinkedIn"
            >
              <Icon name="public" size="18px" />
            </a>
            <a
              href="mailto:partnerships@adlerbeverages.com"
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all"
              aria-label="Email Concierge"
            >
              <Icon name="forum" size="18px" />
            </a>
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-right">
            © 2025 ADLER BEVERAGES PVT. LTD. All rights reserved. Crafted with pride in India.
          </p>

          <div className="flex items-center gap-4 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            <span className="flex items-center gap-1">
              <Icon name="verified" size="14px" className="text-secondary" /> GMP
            </span>
            <span className="flex items-center gap-1">
              <Icon name="eco" size="14px" className="text-on-tertiary-container" /> Botanical
            </span>
            <span className="flex items-center gap-1">
              <Icon name="military_tech" size="14px" className="text-primary-container" /> FSSAI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
