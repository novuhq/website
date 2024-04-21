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
    to: 'https://jobs.ashbyhq.com/novu.co?utm_campaign=website',
    target: '_blank',
  },
  inAppDocs: {
    to: 'https://docs.novu.co/notification-center/introduction?utm_campaign=website',
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
