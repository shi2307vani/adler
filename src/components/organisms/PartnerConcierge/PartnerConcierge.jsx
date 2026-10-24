import React from 'react';
import Icon from '../../atoms/Icon/Icon';

export default function PartnerConcierge() {
  return (
    <div className="flex flex-col gap-6">
      {/* Instant WhatsApp Concierge Card */}
      <div className="rounded-2xl bg-primary-container text-on-primary p-8 shadow-xl relative overflow-hidden flex flex-col justify-between border border-secondary/20">
        <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none" />
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping" />
              ACTIVE CONCIERGE
            </span>
            <Icon name="chat" size="32px" className="text-secondary-fixed" />
          </div>
          <h3 className="font-headline-md text-headline-md text-on-primary uppercase leading-tight mb-3 font-bold">
            DIRECT WHATSAPP B2B CONCIERGE
          </h3>
          <p className="font-body-sm text-body-sm text-primary-fixed mb-6 leading-relaxed">
            Need immediate answers regarding sample deliveries, stock allocations, or large festival event sponsorships? Speak right now with our National Commercial Director.
          </p>
        </div>

        <div>
          <a
            href="https://wa.me/919820011223?text=Hello%20ADLER%20Beverages%20Commercial%20Desk,%20we%20are%20interested%20in%20becoming%20a%20partner."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm text-headline-sm uppercase tracking-wider hover:bg-tertiary-fixed-dim transition-all flex items-center justify-center gap-3 shadow-md font-bold"
          >
            <Icon name="forum" size="20px" />
            <span>CHAT ON WHATSAPP (+91 98200 11223)</span>
          </a>
          <span className="block text-center font-label-sm text-label-sm text-primary-fixed mt-2">
            Typical reply within 12 minutes
          </span>
        </div>
      </div>

      {/* Corporate HQ & Facilities Details */}
      <div className="rounded-2xl bg-surface-container-low p-8 shadow-sm flex flex-col gap-6 border border-secondary/15">
        <h3 className="font-headline-sm text-headline-sm text-primary uppercase font-bold">
          HEADQUARTERS &amp; TRADE DESKS
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5 shadow-xs">
              <Icon name="corporate_fare" size="18px" />
            </div>
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold block">
                Mumbai Executive Office
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                The Eagle Tower, 14th Floor, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5 shadow-xs">
              <Icon name="biotech" size="18px" />
            </div>
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold block">
                Bengaluru Botanical R&amp;D Facility
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                ADLER Formulation Lab, Phase II Electronic City, Bengaluru, Karnataka 560100
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5 shadow-xs">
              <Icon name="mail" size="18px" />
            </div>
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold block">
                Direct Commercial Mail
              </span>
              <a
                href="mailto:b2b@adlerbeverages.com"
                className="font-body-sm text-body-sm text-primary-container font-semibold hover:underline block"
              >
                b2b@adlerbeverages.com
              </a>
              <span className="text-on-surface-variant font-body-sm text-body-sm block">
                partnerships@adlerbeverages.com
              </span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5 shadow-xs">
              <Icon name="call" size="18px" />
            </div>
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold block">
                Priority Wholesale Hotline
              </span>
              <span className="font-body-sm text-body-sm text-primary font-bold">
                +91 (022) 4900-ADLER
              </span>
              <span className="text-on-surface-variant font-body-sm text-body-sm block text-xs">
                Mon – Sat, 9:00 AM – 7:00 PM IST
              </span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-surface-container-high bg-surface-container p-4 rounded-xl flex items-center gap-3">
          <Icon name="verified" size="24px" className="text-on-tertiary-container" />
          <div>
            <span className="font-label-sm text-label-sm uppercase font-bold text-primary block">
              GST &amp; FSSAI Compliant Invoicing
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
              Full input tax credit eligibility with all B2B orders.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
