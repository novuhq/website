import LINKS from 'constants/links';

const PLANS = {
  // FREE TIER
  free: {
    title: 'Free',
    linkText: 'Get started',
    linkUrl: LINKS.getStartedPricingFree.to,
    common: {},
    platform: {
      events: '30k',
      additionalEvents: '-',
      channels: true,
      subscribers: 'Unlimited',
    },
    framework: {
      workflows: 'Unlimited',
      providers: 'Unlimited',
      feedRetention: '30 days',
      digest: true,
      stepControl: true,
      translations: true,
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      bellComponent: true,
      notificationsComponent: true,
      inboxContentComponent: true,
      branding: false,
    },
    account: {
      teamMembers: '3',
      rbac: false,
      standardSAML: true,
      customSAML: false,
      local: true,
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: false,
      hipaa: false,
      customSOC: false,
      dpa: 'Standard',
    },
  },
  // BUSINESS TIER
  business: {
    title: 'Business',
    linkText: 'Get Started',
    linkUrl: LINKS.getStartedPricingBus.to,
    common: {},
    platform: {
      events: '250k',
      additionalEvents: '$1.20 per 1,000',
      channels: true,
      subscribers: true,
    },
    framework: {
      workflows: 'Unlimited',
      providers: 'Unlimited',
      feedRetention: '90 days',
      digest: true,
      stepControl: true,
      translations: true,
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      bellComponent: true,
      notificationsComponent: true,
      inboxContentComponent: true,
      branding: true,
    },
    account: {
      teamMembers: '10',
      rbac: true,
      standardSAML: true,
      customSAML: false,
      local: true,
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: true,
      hipaa: false,
      customSOC: false,
      dpa: 'Standard',
    },
  },
  // ENTERPRISE TIER
  enterprise: {
    title: 'Enterprise',
    linkText: 'Contact Us',
    linkUrl: LINKS.getStartedPricingEnt.to,
    common: {},
    platform: {
      events: '5 million',
      additionalEvents: 'Custom',
      channels: true,
      subscribers: true,
    },
    framework: {
      workflows: 'Unlimited',
      providers: 'Unlimited',
      feedRetention: 'Unlimited',
      digest: true,
      stepControl: true,
      translations: true,
    },
    inbox: {
      inboxComponent: true,
      preferencesComponent: true,
      bellComponent: true,
      notificationsComponent: true,
      inboxContentComponent: true,
      branding: true,
    },
    account: {
      teamMembers: 'Unlimited',
      rbac: true,
      standardSAML: true,
      customSAML: true,
      local: true,
      mfa: true,
    },
    compliance: {
      gdpr: true,
      soc2: true,
      hipaa: true,
      customSOC: true,
      dpa: 'Custom',
    },
  },
};

const LABELS = [
  {
    title: '',
    items: {},
  },
  {
    title: 'Platform',
    items: {
      events: 'Included monthly events',
      additionalEvents: 'Additional events',
      channels: 'Channels supported: email, in-app, SMS, chat, push, and custom',
      subscribers: 'Notification Subscribers',
    },
  },
  {
    title: 'Novu Framework',
    items: {
      workflows: 'Maximum Workflows',
      providers: 'Provider integrations',
      feedRetention: 'Activity Feed retention',
      digest: 'Notification Digests',
      stepControl: 'Workflow Step Controls',
      translations: 'Translations',
    },
  },
  {
    title: 'Inbox',
    items: {
      inboxComponent: 'Inbox component',
      preferencesComponent: 'User preferences component',
      bellComponent: 'Bell component',
      notificationsComponent: 'Notifications component',
      inboxContentComponent: 'Content component',
      branding: 'Remove Novu branding',
    },
  },
  {
    title: 'Administration and Security',
    items: {
      teamMembers: 'Maximum team members',
      rbac: 'Role-Based Access Control (RBAC)',
      standardSAML: 'Standard SAML authentication (Google, GitHub)',
      customSAML: 'Custom SAML SSO, enterprise providers',
      local: 'Built-In authentication',
      mfa: 'Multi-Factor Authentication (MFA)',
    },
  },
  {
    title: 'Compliance',
    items: {
      gdpr: 'GDPR',
      soc2: 'SOC 2 / ISO 27001',
      hipaa: 'US HIPAA',
      customSOC: 'Custom security reviews',
      dpa: 'Data Processing Agreements (DPA)',
    },
  },
];

export { PLANS, LABELS };
