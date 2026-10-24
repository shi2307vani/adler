export const PARTNERSHIP_TRACKS = [
  {
    track: 'TRACK 01',
    title: 'State-Level FMCG Distributors',
    badgeClass: 'bg-primary text-secondary-fixed',
    icon: 'local_shipping',
    iconColor: 'text-primary-container',
    hoverBg: 'group-hover:bg-primary-container group-hover:text-secondary-fixed',
    description: 'Exclusive territorial rights, cold-chain replenishment protocols, heavy merchandising collateral, and priority pallet allotment.',
    requirement: 'Min: 5,000+ Cans'
  },
  {
    track: 'TRACK 02',
    title: 'Modern Retail & Gourmet Marts',
    badgeClass: 'bg-secondary text-on-secondary',
    icon: 'storefront',
    iconColor: 'text-secondary',
    hoverBg: 'group-hover:bg-secondary group-hover:text-on-secondary',
    description: 'Turn-key POS floor units, high-gloss acrylic fixtures, zero slotting fee friction on launch sets, and end-cap experiential banners.',
    requirement: 'Supermarkets & Air Duty'
  },
  {
    track: 'TRACK 03',
    title: 'Luxury Gyms & Elite Cafés',
    badgeClass: 'bg-tertiary-container text-tertiary-fixed',
    icon: 'fitness_center',
    iconColor: 'text-on-tertiary-container',
    hoverBg: 'group-hover:bg-tertiary-container group-hover:text-tertiary-fixed',
    description: 'Branded mini back-bar coolers, bespoke botanical mocktail recipe guides, barista training, and pre-workout sample kits.',
    requirement: '500 – 2,500 Cans/Mo'
  },
  {
    track: 'TRACK 04',
    title: 'Corporate Campuses & Offices',
    badgeClass: 'bg-primary-container text-on-primary',
    icon: 'apartment',
    iconColor: 'text-primary-container',
    hoverBg: 'group-hover:bg-primary-container group-hover:text-secondary-fixed',
    description: 'Zero-sugar, jitter-free cognitive fuel for executive boardrooms, venture teams, and technology hubs. Automated recurring delivery.',
    requirement: 'Corporate Subscriptions'
  }
];

export const DISTRIBUTOR_PERKS = [
  {
    title: '35% – 45% Margins',
    description: 'Lucrative tier-based channel margins engineered to deliver rapid cash-on-cash returns and handsome dealer incentives across all territories.',
    icon: 'payments',
    iconBg: 'bg-secondary-container text-on-secondary-fixed'
  },
  {
    title: 'Acrylic POS Displays',
    description: 'Complimentary luxury countertop stands, gilded chillers, branded window decals, and shelf talkers supplied directly to your stockists.',
    icon: 'diamond',
    iconBg: 'bg-primary-fixed text-primary-container'
  },
  {
    title: 'Hyperlocal Marketing',
    description: 'Geo-targeted social media advertising driving footfalls to your specific retail locations, paired with local fitness event sponsorships.',
    icon: 'campaign',
    iconBg: 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
  },
  {
    title: '100% Replacement',
    description: 'Zero commercial risk. Uncompromised policy covering transit damages, can dent replacements, and nearing-expiry inventory rotations.',
    icon: 'published_with_changes',
    iconBg: 'bg-surface-container-highest text-primary'
  }
];

export const BUSINESS_SEGMENTS = [
  { value: 'distributor', label: 'State / Regional Super-Stockist' },
  { value: 'retail', label: 'Supermarket / Gourmet Store Chain' },
  { value: 'fitness', label: 'Luxury Fitness Club / CrossFit Arena' },
  { value: 'hospitality', label: 'Café, Fine Dining & Boutique Hotel' },
  { value: 'corporate', label: 'Corporate Pantry / Venture Workspace' },
  { value: 'export', label: 'International Export Trade' }
];

export const VOLUME_OPTIONS = [
  { value: 'trial', label: 'Sample Pilot Crate (200 – 500 cans)' },
  { value: 'tier1', label: 'Tier 1 (500 – 2,000 cans)' },
  { value: 'tier2', label: 'Tier 2 (2,000 – 10,000 cans)' },
  { value: 'tier3', label: 'Pallet Allocation (10,000+ cans / Month)' }
];
