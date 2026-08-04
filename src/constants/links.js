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
  copilot: {
    to: '/copilot',
  },
  mcp: {
    to: '/mcp',
  },
  connect: {
    to: '/connect',
  },
  aci: {
    to: '/aci',
  },
  channelSlack: {
    to: '/channels/slack',
  },
  channelSlackLangchain: {
    to: '/channels/slack/langchain',
  },
  channelSlackAiSdk: {
    to: '/channels/slack/ai-sdk',
  },
  channelSlackChatSdk: {
    to: '/channels/slack/chat-sdk',
  },
  channelSlackCustomCode: {
    to: '/channels/slack/custom-code',
  },
  channelSlackClaude: {
    to: '/channels/slack/claude',
  },
  channelSlackClaudeAws: {
    to: '/channels/slack/claude-aws',
  },
  channelWhatsApp: {
    to: '/channels/whatsapp',
  },
  channelWhatsAppLangchain: {
    to: '/channels/whatsapp/langchain',
  },
  channelWhatsAppAiSdk: {
    to: '/channels/whatsapp/ai-sdk',
  },
  channelWhatsAppChatSdk: {
    to: '/channels/whatsapp/chat-sdk',
  },
  channelWhatsAppCustomCode: {
    to: '/channels/whatsapp/custom-code',
  },
  channelWhatsAppClaude: {
    to: '/channels/whatsapp/claude',
  },
  channelWhatsAppClaudeAws: {
    to: '/channels/whatsapp/claude-aws',
  },
  channelTelegram: {
    to: '/channels/telegram',
  },
  channelTelegramLangchain: {
    to: '/channels/telegram/langchain',
  },
  channelTelegramAiSdk: {
    to: '/channels/telegram/ai-sdk',
  },
  channelTelegramChatSdk: {
    to: '/channels/telegram/chat-sdk',
  },
  channelTelegramCustomCode: {
    to: '/channels/telegram/custom-code',
  },
  channelTelegramClaude: {
    to: '/channels/telegram/claude',
  },
  channelTelegramClaudeAws: {
    to: '/channels/telegram/claude-aws',
  },
  channelMicrosoftTeams: {
    to: '/channels/microsoft-teams',
  },
  channelMicrosoftTeamsLangchain: {
    to: '/channels/microsoft-teams/langchain',
  },
  channelMicrosoftTeamsAiSdk: {
    to: '/channels/microsoft-teams/ai-sdk',
  },
  channelMicrosoftTeamsChatSdk: {
    to: '/channels/microsoft-teams/chat-sdk',
  },
  channelMicrosoftTeamsCustomCode: {
    to: '/channels/microsoft-teams/custom-code',
  },
  channelMicrosoftTeamsClaude: {
    to: '/channels/microsoft-teams/claude',
  },
  channelMicrosoftTeamsClaudeAws: {
    to: '/channels/microsoft-teams/claude-aws',
  },
  channelEmail: {
    to: '/channels/email',
  },
  channelEmailLangchain: {
    to: '/channels/email/langchain',
  },
  channelEmailAiSdk: {
    to: '/channels/email/ai-sdk',
  },
  channelEmailChatSdk: {
    to: '/channels/email/chat-sdk',
  },
  channelEmailCustomCode: {
    to: '/channels/email/custom-code',
  },
  channelEmailClaude: {
    to: '/channels/email/claude',
  },
  channelEmailClaudeAws: {
    to: '/channels/email/claude-aws',
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
    to: 'https://dashboard.novu.co',
    target: '_blank',
  },
  dashboardV2SignIn: {
    to: 'https://dashboard.novu.co',
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
    to: 'https://novu.co/careers',
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
  githubSkills: {
    to: 'https://github.com/novuhq/skills',
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
  docsMcp: {
    to: 'https://docs.novu.co/platform/additional-resources/mcp',
    target: '_blank',
  },
  docsCustomCode: {
    to: 'https://docs.novu.co/agents/get-started/what-is-aci',
    target: '_blank',
  },
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
