export const PRODUCTS = [
  {
    id: 'mix-berry-sparks',
    name: 'Mix Berry Sparks',
    tagline: 'Antioxidant Focus • Deep Cognitive Flow',
    subtitle: 'Wild Mountain Berries & Crisp Blackcurrant • 250 ml Slim Aluminium Can',
    volume: '250ml',
    format: 'Slim Aluminium Can',
    servingProfile: 'Chilled • Crisp',
    category: 'flagship',
    badge: 'Flagship Elixir',
    badgeType: 'primary',
    heroBadge: 'Flagship Botanical Caffeinated Elixir',
    subBadge: 'Batch 04 Ready',
    description: 'A vivid fusion of tart wild blackberries, ripe strawberries, and crushed bilberries enhanced with 80mg clean green tea caffeine and 160mg Suntheanine® L-Theanine for unwavering clarity.',
    fullDescription: 'Formulated for deep computational flow and cognitive precision. Our flagship infusion couples crisp wild blackberry vibrancy with green tea-derived clean caffeine, moderated by high-purity L-Theanine for an unshakeable, zero-jitter state of mind.',
    image: '/images/mix-berries.png?v=2',
    detailImage: '/images/mix-berries.png?v=2',
    editorialImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVZEoyhSI9GLMse9_5ga-DoGXWz40ni-3rUm91uiYZKVhTyzhl9cUsoIbeZQ99YJmK4wsgLbCpBEjwqtFOSndT0gKBINAg8RJtSubmbhwBPn4a-r5hBc8nqnTR-VOCjKdABlNeuksdx1tYKnCPOYCWfcYkFLZV7BUPwDDhgFWRgu3Jz9rt3UfqwxCyhL-qLg9PBO0-oeFcUYA58lUoDT8sr8n9kAbjZRpiJZeds4agVGS53rrYqhMpkA',
    specs: [
      { label: 'Energy', value: '80 mg', detail: 'Green Tea Leaf Extract', icon: 'bolt' },
      { label: 'Calm Focus', value: '160 mg', detail: 'L-Theanine Synergy (2:1)', icon: 'psychology' },
      { label: 'Integrity', value: '0g Sugar', detail: 'No Aspartame / Keto Friendly', icon: 'verified' }
    ],
    badges: ['Blackcurrant Essence', 'Zero Aftertaste', 'Vitamin B3, B6 & B12'],
    sensoryNotes: {
      carbonation: 'Champagne Carbonation 3.2 vol',
      top: 'Alpine Blackberry',
      core: 'Velvety Wild Raspberry',
      finish: 'Sparkling Crisp Tannin'
    },
    packs: [
      { id: 'single', name: 'Single Can', price: '₹125', usd: '$4.25 USD', unitPrice: '₹125 / can' },
      { id: 'pack4', name: '4-Pack Precision', price: '₹480', usd: '$6.00 USD', unitPrice: '₹120 / can' },
      { id: 'pack12', name: '12-Can Collector', price: '₹1,350', usd: '$16.50 USD', unitPrice: '₹112 / can', tag: 'Best Value' }
    ]
  },
  {
    id: 'peach-sparks',
    name: 'Peach Sparks',
    tagline: 'Electrolyte Renewal • Zen Equilibrium',
    subtitle: 'Sun-Kissed White Peach & Himalayan Mineral Effervescence • 250 ml Slim Aluminium Can',
    volume: '250ml',
    format: 'Slim Aluminium Can',
    servingProfile: 'Refreshing • Velvety',
    category: 'hydration',
    badge: 'Radiant Peach',
    badgeType: 'secondary',
    heroBadge: 'Hydration & Cognitive Renewal Elixir',
    subBadge: 'Electrolyte Infused',
    description: 'Delicate botanical notes of sun-kissed white peaches and Himalayan rock salts, aerated with champagne-fine carbonation for all-day focus and cellular recharge.',
    fullDescription: 'Engineered for physical rejuvenation, mental equilibrium, and prolonged sustained focus. Combines naturally extracted white peach essence with pure Himalayan pink mineral electrolytes and balanced 60mg caffeine to recharge without spiking cortisol or blood glucose.',
    image: '/images/peach-sparks.png?v=2',
    detailImage: '/images/peach-sparks.png?v=2',
    editorialImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMI4dwy-LQLYs-HI0lBqdXescwlZY921_ri7VCuzPywfgFJBtQIyjPE0R0Q0pakLx_zM6qN7Fyq-W6iptXmCeiy9fLMISLmaLAzE5ubNaDGKWqM-NRZJSDwU9wpgLn72ZOCSnICNwyrwied4PohQY3OPcN_gERCnzYzgWtNWsEZkwdurUdg6AwYTfD6f6tvxdypQ5AKD_W2IAQNld7PaaKm7B-PMr4YSbYngs8xr6CH3mVgsPX7g1GLw',
    specs: [
      { label: 'Hydration', value: 'Pink Salt', detail: 'K, Mg, Na Electrolytes', icon: 'water_drop' },
      { label: 'Botanical', value: '60 mg', detail: 'Smooth Plant Caffeine', icon: 'spa' },
      { label: 'Zero Sugar', value: '100%', detail: 'Naturally Sweetened (Stevia Reb-M)', icon: 'nature' }
    ],
    badges: ['Velvety Stone Fruit', 'Natural Effervescence', 'Magnesium Rich'],
    sensoryNotes: {
      carbonation: 'Micro-Fine Champagne Effervescence',
      top: 'Peach Blossom Bouquet',
      core: 'Stone Fruit Nectar',
      finish: 'Subtle Himalayan Mineral Cleanse'
    },
    packs: [
      { id: 'single', name: 'Single Can', price: '₹125', usd: '$4.25 USD', unitPrice: '₹125 / can' },
      { id: 'pack4', name: '4-Pack Precision', price: '₹480', usd: '$6.00 USD', unitPrice: '₹120 / can' },
      { id: 'pack12', name: '12-Can Collector', price: '₹1,350', usd: '$16.50 USD', unitPrice: '₹112 / can', tag: 'Best Value' }
    ]
  }
];

export const NUTRITION_MATRIX = [
  {
    metric: 'Caffeine Extraction Source',
    icon: 'bolt',
    mixBerry: '80mg Natural Green Tea Leaf (Camellia Sinensis)',
    peach: '60mg Organic Raw Green Coffee & Tea Botanical'
  },
  {
    metric: 'Cognitive Synergy Factor',
    icon: 'psychology',
    mixBerry: '160mg Suntheanine® (2:1 Ratio for Zero Jitters)',
    peach: '100mg Suntheanine® (Synergistic Calm Baseline)'
  },
  {
    metric: 'Electrolyte & Mineral Core',
    icon: 'water_drop',
    mixBerry: 'Trace Ocean Minerals (Bio-Hydration Active)',
    peach: 'Himalayan Pink Salt (Full-Spectrum K, Mg, Na)'
  },
  {
    metric: 'Total Calories & Added Sugars',
    icon: 'fitness_center',
    mixBerry: '0 kcal • 0g Added Sugar',
    peach: '0 kcal • 0g Added Sugar'
  },
  {
    metric: 'Vitamin Complex Infusion',
    icon: 'medication',
    mixBerry: 'Vitamins B3 (Niacin), B6 (Pyridoxine), B12',
    peach: 'Vitamin C (Ascorbic Acid) + B-Complex Spectrum'
  },
  {
    metric: 'Intended Functional State',
    icon: 'flag',
    mixBerry: 'Deep Cognitive Flow & High-Stakes Focus',
    peach: 'Hydration Equilibrium & Smooth Vitality'
  },
  {
    metric: 'Vessel Architecture',
    icon: 'recycling',
    mixBerry: '100% Aerospace-Grade Slim Aluminium (Infinitely Recyclable)',
    peach: '100% Aerospace-Grade Slim Aluminium (Infinitely Recyclable)'
  }
];
