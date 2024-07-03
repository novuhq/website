export const applyQueryParams = (link, queryParams = []) => ({
  ...link,
  to: `${link.to}?${queryParams.join('&')}`,
});

export default {
  // Pages
  home: {
    to: '/',
  },
  blog: {
    to: '/blog',
  },
  community: {
    to: '/community',
  },
  contributors: {
    to: '/contributors',
  },
  podcast: {
    to: '/podcast',
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
  hacktoberfest: {
    to: '/hacktoberfest',
  },
  pricing: {
    to: '/pricing',
  },
  timeline: {
    to: '/timeline',
  },
  ossFriends: {
    to: '/oss-friends',
  },
  chat: {
    to: '/chat',
  },

  // Header submenus
  // Use cases
  multichannelNotifications: { to: 'https://novu.co/usecases/multi-channel-notifications/' },
  notifications: { to: 'https://novu.co/usecases/add-notifications/' },
  communication: { to: 'https://novu.co/usecases/improve-communication-experience/' },
  notificationPlatform: { to: 'https://novu.co/usecases/unified-platform/' },
  notificationContentManagement: { to: 'https://novu.co/usecases/content-management/' },

  // Features
  workflow: { to: 'https://docs.novu.co/workflows/notification-workflows' },
  contentManagment: { to: 'https://docs.novu.co/workflow/content' },
  // translation: { to: '/' }, -> We need to add this page
  embedComponent: { to: 'https://docs.novu.co/inbox/introduction' },
  endUserPreferences: { to: 'https://docs.novu.co/concepts/preferences' },
  // observability: { to: '/' }, -> We need to add this page

  // Providers
  sendgrid: { to: 'https://docs.novu.co/integrations/providers/email/sendgrid' },
  fcm: { to: 'https://docs.novu.co/integrations/providers/push/fcm' },
  ses: { to: 'https://docs.novu.co/integrations/providers/email/amazon-ses' },
  twilio: { to: 'https://docs.novu.co/integrations/providers/sms/twilio' },
  nodemailer: { to: 'https://docs.novu.co/integrations/providers/email/custom-smtp' },
  slack: { to: 'https://docs.novu.co/integrations/providers/chat/slack' },
  mailgun: { to: 'https://docs.novu.co/integrations/providers/email/mailgun' },
  postmark: { to: 'https://docs.novu.co/integrations/providers/email/postmark' },
  discord: { to: 'https://docs.novu.co/integrations/providers/chat/discord' },
  sendinblue: { to: 'https://docs.novu.co/integrations/providers/email/sendinblue' },

  // Channels
  inAppChannel: { to: 'https://docs.novu.co/inbox/introduction' },
  pushChannel: { to: 'https://docs.novu.co/integrations/providers/push/overview' },
  emailChannel: { to: 'https://docs.novu.co/integrations/providers/email/overview' },
  smsChannel: { to: 'https://docs.novu.co/integrations/providers/sms/overview' },
  chatChannel: { to: 'https://docs.novu.co/integrations/providers/chat/overview' },
  // mobileChannel: { to: 'https://roadmap.novu.co/roadmap/b359fa16-0fd4-4de1-9199-c71a177df4a3' }, -> We need to add this page

  // Frameworks
  remix: { to: 'https://docs.novu.co/quickstart/remix' },
  nextjs: { to: 'https://docs.novu.co/quickstart/nextjs' },
  nuxt: { to: 'https://docs.novu.co/quickstart/nuxt' },
  svelte: { to: 'https://docs.novu.co/quickstart/svelte' },
  express: { to: 'https://docs.novu.co/quickstart/express' },
  h3: { to: 'https://docs.novu.co/quickstart/h3' },
  // hono: { to: 'https://docs.novu.co/' }, -> We need to add this page
  // nestjs: { to: 'https://docs.novu.co/' }, -> We need to add this page

  // Getting started
  howToGuides: { to: 'https://docs.novu.co/guides/workflows/introduction' },
  librariesAndSdks: { to: 'https://docs.novu.co/sdks/framework/typescript/overview' },
  integrations: { to: 'https://docs.novu.co/integrations/providers/introduction' },

  // Code First Examples
  preBuiltWorkflows: { to: 'https://github.com/novuhq/examples' },

  // Last part of the dropdown links
  apiReference: { to: 'https://docs.novu.co/api-reference/overview' },
  changelog: { to: 'https://novustatus.com?utm_campaign=website' },
  systemStatus: { to: 'https://novustatus.com/' },

  // Other pages
  pricingContactUs: {
    to: 'https://novu.co/contact-us?utm_campaign=pricing-enterprise-cu',
    target: '_blank',
  },
  documentation: {
    to: 'https://docs.novu.co/overview/introduction?utm_campaign=website',
    target: '_blank',
  },
  careers: {
    to: 'https://careers.novu.co',
    target: '_blank',
  },
  inAppDocs: {
    to: 'https://docs.novu.co/inbox/introduction',
    target: '_blank',
  },
  docker: {
    to: 'https://docs.novu.co/self-hosting-novu/deploy-with-docker?utm_campaign=website',
    target: '_blank',
  },
  faq: {
    to: 'https://docs.novu.co/faqs/questions?utm_campaign=website',
    target: '_blank',
  },
  sdk: {
    to: 'https://docs.novu.co/sdks/introduction?utm_campaign=website',
    target: '_blank',
  },
  contactUs: {
    to: 'https://www.novu.co/sections/content-3?utm_campaign=website',
    target: '_blank',
  },
  getStarted: {
    to: 'https://web.novu.co?utm_campaign=gs_website',
    target: '_blank',
  },
  getStartedTopBar: {
    to: 'https://web.novu.co?utm_campaign=gs_top_bar',
    target: '_blank',
  },
  getStartedBase: {
    to: 'https://web.novu.co',
    target: '_blank',
  },
  quickStart: {
    to: 'https://docs.novu.co/quickstarts/01-introduction?utm_campaign=website',
    target: '_blank',
  },
  providers: {
    to: 'https://docs.novu.co/channels-and-providers/introduction?utm_campaign=website',
    target: '_blank',
  },
  handbook: {
    to: 'https://handbook.novu.co',
    target: '_blank',
  },
  applePodcasts: {
    to: 'https://podcasts.apple.com/il/podcast/sourcelife/id1632801980',
    target: '_blank',
  },
  spotify: {
    to: 'https://open.spotify.com/show/2OyQJkn07lnJPNdxFWft96',
    target: '_blank',
  },
  statusPage: {
    to: 'https://novustatus.com?utm_campaign=website',
    target: '_blank',
  },
  changeLog: {
    to: 'https://novu.productlane.com/changelog',
    target: '_blank',
  },
  roadmapPage: {
    to: 'https://roadmap.novu.co',
    target: '_blank',
  },
  trustPage: {
    to: 'https://trust.novu.co?utm_campaign=website',
    target: '_blank',
  },
  pressKit: {
    to: 'https://handbook.novu.co/830bf2b7e920431bb52d36c9b503d3ca',
    target: '_blank',
  },
  libraries: {
    to: 'https://docs.novu.co/sdks/introduction?utm_campaign=website',
    target: '_blank',
  },
  // It still says calendly, but we're pointing it to Hubspot Meetings now
  // old link: https://calendly.com/novuhq/novu-meeting?utm_campaign=main-page&utm_campaign=website
  calendly: {
    to: 'https://notify.novu.co/meetings/novuhq/notifications-45min?utm_campaign=website',
    target: '_blank',
  },
  bamCTA: {
    to: 'https://notify.novu.co/meetings/novuhq/notifications-45min?utm_campaign=website-cta-bottom',
    target: '_blank',
  },

  // Social
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
  polishing: {
    to: '/polishing',
  },
  notificationDirectory: {
    to: 'https://notifications.directory?utm_campaign=website',
  },
};
