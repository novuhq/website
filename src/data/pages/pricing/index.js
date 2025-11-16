const PRICING_PLANS = [
  {
    title: 'Free',
    price: '$0',
    paymentPeriod: 'month',
    button: {
      text: 'GET STARTED',
      theme: 'gray-outline',
      link: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    description:
      'A complete starter toolkit for exploring Novu and sending your first notifications.',
    advantagesHeading: 'Includes:',
    advantages: [
      '10,000 workflow runs / month',
      'All channels: Email, In-app, SMS, Chat, Push',
      'US + EU data residency',
      'Up to 20 workflows',
      '2 environments (Dev + Prod)',
      'Activity feed retention: 24 hours',
      'Up to 3 team members',
    ],
  },
  {
    title: 'Pro',
    price: '$30',
    showFrom: true,
    paymentPeriod: 'month',
    button: {
      text: 'GET STARTED',
      theme: 'white-filled',
      link: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    description: 'More scale and flexibility — ideal for teams moving beyond experimentation.',
    advantagesHeading: 'Everything in Free, plus:',
    advantages: [
      '30,000+ workflow runs / month',
      '7-day activity feed retention',
      'Remove Novu branding in In-App components',
      'Advanced email editor (blocks, layouts)',
      'Higher rate limits & faster processing',
    ],
  },
  {
    title: 'Team',
    price: '$250',
    showFrom: true,
    paymentPeriod: 'month',
    button: {
      text: 'GET STARTED',
      theme: 'gray-outline',
      link: 'https://dashboard.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    description: 'Built for growing engineering teams sending meaningful volume into production.',
    advantagesHeading: 'Everything in Pro, plus:',
    advantages: [
      '250,000+ workflow runs / month',
      'Up to 10 environments (Staging, QA, Pre-prod…)',
      '90-day activity feed retention',
      'Unlimited team members',
      'Unlimited workflows',
      'Role-Based Access Control (RBAC)',
      'Expanded rate limits (600 RPS triggers)',
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
    description: 'Enterprise-grade scale, compliance, support, and hosting options.',
    advantagesHeading: 'Everything in Team, plus:',
    advantages: [
      '5M+ workflow runs / month (custom volume tiers)',
      'Unlimited environments',
      'Custom retention policies (feed, audit, logs)',
      'Custom delay & digest windows',
      'SOC 2 / ISO reports, HIPAA BAA, compliance reviews',
      'Dedicated SSO (SAML / OIDC, SCIM)',
      'Private Slack/Teams support channel',
      'Advanced data residency (SG, UK, AU, JP, KR, custom regions)',
      'Self-hosted + Managed VPC deployment options',
    ],
  },
];

const ACTIVE_TIER = 'pro';

const CTA = {
  title: "You're five minutes away from your first Novu-powered notification",
  description:
    'Create a free account, send your first notification, all before your coffee gets cold... no credit card required.',
  leftItem: {
    text: 'GET STARTED',
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
