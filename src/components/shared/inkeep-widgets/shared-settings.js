const theme = {
  colorMode: 'dark',
  fonts: {
    mono: "'IBM Plex Mono', monospace",
  },
  components: {
    SyntaxHighlighter: {
      highlighter: 'prism',
    },
  },
};

export const baseSettings = {
  organizationDisplayName: 'Novu',
  primaryBrandColor: '#f8247c',
  organizationId: process.env.GATSBY_INKEEP_ORGANIZATION_ID,
  apiKey: process.env.GATSBY_INKEEP_API_KEY,
  integrationId: process.env.GATSBY_INKEEP_INTEGRATION_ID,
  theme,
};

export const searchSettings = {
  tabSettings: {
    rootBreadcrumbsToUseAsTabs: ['Docs', 'GitHub'],
    alwaysDisplayedTabs: ['All', 'Docs', 'GitHub'],
  },
};
