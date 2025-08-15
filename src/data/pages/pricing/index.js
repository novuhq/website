const PRICING_PLANS = [
  {
    title: 'Free',
    price: '$0',
    paymentPeriod: 'month',
    button: {
      text: 'Start Building',
      theme: 'gray-outline',
      link: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    description: 'Start for free. Essential features, no limits on subscribers.',
    advantages: [
      '10K events/month included',
      'Multi-Channel Support: Email, In-app, SMS, Chat, Push',
      'EU or US Data-residency',
      'Up to 20 Workflows',
      '2 Environments',
      'Activity Feed Retention: 24 hours',
      'Up to 3 Team Members',
    ],
  },
  {
    title: 'Pro',
    price: '$30',
    showFrom: true,
    paymentPeriod: 'month',
    button: {
      text: 'Start Free Trial',
      theme: 'white-filled',
      link: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    description: 'Go pro. More scale, better retention, no branding.',
    advantagesHeading: 'Everything in Free, plus...',
    advantages: [
      '30K events/month included',
      'Activity Feed Retention: 7 days',
      'Remove Novu Branding',
    ],
    additionalLabelText: 'New',
  },
  {
    title: 'Team',
    price: '$250',
    showFrom: true,
    paymentPeriod: 'month',
    button: {
      text: 'Start Free Trial',
      theme: 'gray-outline',
      link: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    description: 'For growing teams. Higher limits, full control.',
    advantagesHeading: 'Everything in Pro, plus...',
    advantages: [
      '250K events/month included',
      'Up to 10 Environments',
      'Activity Feed Retention: 90 days',
      'Unlimited Team Members',
      'Unlimited Workflows',
    ],
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    button: {
      text: 'Contact us',
      theme: 'gray-outline',
      link: 'https://novu.co/contact-us/?utm_campaign=ws_pricing',
    },
    description: 'Unlimited power. Built for scale.',
    advantagesHeading: 'Everything in Team, plus...',
    advantages: [
      '5M events/month included',
      'Unlimited Environments',
      'Custom Activity Feed Retention',
      'Custom Delay duration',
      'Custom Digest duration',
    ],
  },
];

const ACTIVE_TIER = 'pro';

const CTA = {
  title: "You're five minutes away from your first Novu-powered notification",
  description:
    'Create a free account, send your first notification, all before your coffee gets cold... no credit card required.',
  leftItem: {
    text: 'Get started',
    link: 'https://dashboard.novu.co/?utm_campaign=ws_home_cta',
  },
  rightItem: {
    text: 'Contact us',
    link: 'https://novu.co/contact-us/?utm_campaign=ws_home_cta',
  },
};

export default {
  pricingPlans: PRICING_PLANS,
  activeTier: ACTIVE_TIER,
  cta: CTA,
};
