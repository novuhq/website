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
    to: '/blog',
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
    to: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr',
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
  docsFramework: { to: 'https://docs.novu.co/framework/overview', target: '_blank' },
  docsWorkflow: { to: 'https://docs.novu.co/platform/workflow/overview', target: '_blank' },
  docsInApp: {
    to: 'https://docs.novu.co/inbox/introduction',
    target: '_blank',
  },
  docsOverview: {
    to: 'https://docs.novu.co/platform/overview',
    target: '_blank',
  },
  docsSdks: {
    to: 'https://docs.novu.co/sdks/overview',
    target: '_blank',
  },
  docsApis: {
    to: 'https://docs.novu.co/api-reference/overview',
    target: '_blank',
  },
  docsGuides: {
    to: 'https://docs.novu.co/guides/overview',
    target: '_blank',
  },
  docsUserPreferences: {
    to: 'https://docs.novu.co/inbox/react/components/preferences',
    target: '_blank',
  },
  docsContentManagement: {
    to: 'https://docs.novu.co/workflow/template-editor',
    target: '_blank',
  },
  docsProviders: {
    to: 'https://docs.novu.co/channels-and-providers/introduction?utm_campaign=website',
    target: '_blank',
  },
  docsQuickStart: {
    to: 'https://docs.novu.co/quickstarts/01-introduction?utm_campaign=website',
    target: '_blank',
  },
  docsNotifications: {
    to: 'https://docs.novu.co/platform/inbox/setup-inbox',
    target: '_blank',
  },
};
