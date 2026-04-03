export const applyQueryParams = (link, queryParams = []) => {
  // Ensure trailing slash before query params (due to trailingSlash: 'always' in gatsby-config)
  const path = link.to.endsWith('/') ? link.to : `${link.to}/`;
  return {
    ...link,
    to: `${path}?${queryParams.join('&')}`,
  };
};

export default {
  // Pages
  home: {
    to: '/',
  },
  blog: {
    to: '/blog/',
  },
  contributors: {
    to: '/contributors',
  },
  directory: {
    to: '/directory',
  },
  termsOfUse: {
    to: '/terms',
  },
  privacyPolicy: {
    to: '/privacy',
  },
  dataProcessingAgreement: {
    to: '/dpa',
  },
  pricing: {
    to: '/pricing',
  },
  community: {
    to: '/community',
  },
  security: {
    to: '/security',
  },
  useCases: {
    to: '/usecases',
  },
  inbox: {
    to: '/inbox',
  },
  digest: {
    to: '/digest',
  },
  framework: {
    to: '/framework',
  },
  contactUs: {
    to: '/contact-us',
  },
  contactUsCTA: {
    to: '/contact-us?utm_campaign=homeCTA',
    target: '_self',
  },

  // New website
  integrations: {
    to: '/integrations',
  },
  comparisonCourier: {
    to: '/comparison/courier',
  },
  comparisonKnock: {
    to: '/comparison/knock',
  },
  comparisonMagicBell: {
    to: '/comparison/magicbell',
  },
  comparisonSuprSend: {
    to: '/comparison/suprsend',
  },
  comparisonInHouse: {
    to: '/comparison/building-in-house',
  },
  changeLog: {
    to: '/changelog',
  },
  customers: {
    to: '/customers',
  },

  // Dashboard
  dashboard: {
    to: 'https://dashboard.novu.co',
  },
  dashboardV2: {
    to: 'https://dashboard.novu.co',
    target: '_blank',
  },
  dashboardV2SignUp: {
    to: 'https://dashboard.novu.co/auth/sign-up',
    target: '_blank',
  },
  dashboardV2SignIn: {
    to: 'https://dashboard.novu.co/auth/sign-in',
    target: '_blank',
  },

  // Other pages
  roadmapPage: {
    to: 'https://roadmap.novu.co',
    target: '_blank',
  },
  handbook: {
    to: 'https://handbook.novu.co',
    target: '_blank',
  },
  statusPage: {
    to: 'https://novustatus.com',
    target: '_blank',
  },
  careers: {
    to: 'https://careers.novu.co',
    target: '_blank',
  },
  trustPage: {
    to: 'https://trust.novu.co',
    target: '_blank',
  },
  bookMeeting: {
    to: 'https://novu.co/contact-us/',
    target: '_blank',
  },

  // Social
  applePodcasts: {
    to: 'https://podcasts.apple.com/il/podcast/sourcelife/id1632801980',
    target: '_blank',
  },
  spotify: {
    to: 'https://open.spotify.com/show/2OyQJkn07lnJPNdxFWft96',
    target: '_blank',
  },
  discord: {
    to: 'https://discord.gg/novu?utm_campaign=website',
    target: '_blank',
  },
  twitter: {
    to: 'https://twitter.com/novuhq?utm_campaign=website',
    target: '_blank',
  },
  github: {
    to: 'https://github.com/novuhq/novu?utm_campaign=website',
    target: '_blank',
  },
  pixelPoint: {
    to: 'https://pixelpoint.io/',
    target: '_blank',
  },

  // Docs
  docs: {
    to: 'https://docs.novu.co/',
    target: '_blank',
  },
  docsFramework: { to: 'https://docs.novu.co/framework/introduction', target: '_blank' },
  docsWorkflow: { to: 'https://docs.novu.co/platform/workflow', target: '_blank' },
  docsInApp: {
    to: 'https://docs.novu.co/platform/inbox',
    target: '_blank',
  },
  docsOverview: {
    to: 'https://docs.novu.co/platform',
    target: '_blank',
  },
  docsSdks: {
    to: 'https://docs.novu.co/platform/sdks',
    target: '_blank',
  },
  docsApis: {
    to: 'https://docs.novu.co/api-reference',
    target: '_blank',
  },
  docsGuides: {
    to: 'https://docs.novu.co/guides',
    target: '_blank',
  },
  docsUserPreferences: {
    to: 'https://docs.novu.co/platform/sdks/react/hooks/use-preferences',
    target: '_blank',
  },
  docsContentManagement: {
    to: 'https://docs.novu.co/platform/workflow/add-notification-content/channels-template-editors',
    target: '_blank',
  },
  docsProviders: {
    to: 'https://docs.novu.co/platform/integrations?utm_campaign=website',
    target: '_blank',
  },
  docsQuickStart: {
    to: 'https://docs.novu.co/platform/quickstart/nextjs?utm_campaign=website',
    target: '_blank',
  },
  docsNotifications: {
    to: 'https://docs.novu.co/platform/inbox',
    target: '_blank',
  },
};
