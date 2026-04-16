import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      text: 'Product',
      content: [
        {
          title: 'Features',
          items: [
            { text: 'Inbox Component', ...LINKS.inbox },
            {
              text: 'User Preference',
              ...LINKS.docsUserPreferences,
            },
            {
              text: 'Workflows',
              ...LINKS.docsWorkflow,
            },
            {
              text: 'Framework',
              ...LINKS.framework,
            },
            { text: 'Digest', ...LINKS.digest },
            {
              text: 'Content Management',
              ...LINKS.docsContentManagement,
            },
            { text: 'Integrations', ...LINKS.integrations },
          ],
        },
        {
          title: 'Changelog news',
          type: 'changelog',
        },
      ],
    },
    { text: 'Novu MCP', ...LINKS.mcp },
    {
      text: 'Resources',
      content: [
        {
          title: 'Explore',
          items: [
            { text: 'Use cases', ...LINKS.useCases },
            { text: 'Blog', ...LINKS.blog },
            { text: 'Changelog', ...LINKS.changeLog },
            { text: 'Roadmap', ...LINKS.roadmapPage },
            { text: 'Directory', ...LINKS.directory },
            { text: 'Support', ...LINKS.contactUs },
            { text: 'Discord', ...LINKS.discord },
            {
              text: 'Security & Compliance',
              ...LINKS.security,
            },
          ],
        },
        {
          title: 'Latest post',
          type: 'post',
        },
      ],
    },
    {
      text: 'Docs',
      content: [
        {
          title: 'Topics',
          items: [
            {
              text: 'Documentation',
              ...LINKS.docs,
            },
            { text: 'Guides', ...LINKS.docsGuides },
            {
              text: 'Framework',
              ...LINKS.docsFramework,
            },
            {
              text: 'API reference',
              ...LINKS.docsApis,
            },
            { text: 'SDKs', ...LINKS.docsSdks },
          ],
        },
        {
          title: 'Quickstart',
          type: 'link',
          content: {
            title: 'Getting started',
            description: 'This guide walks you through integrating Novu’s Inbox',
            image: '/images/header/illustration-docs.jpg',
            url: LINKS.docsOverview.to,
          },
        },
      ],
    },
    { text: 'Customers', ...LINKS.customers },
    { text: 'Pricing', ...LINKS.pricing },
    { text: 'Contact Us', ...LINKS.contactUs },
  ],
  footer: {
    main: [
      {
        title: 'Product',
        items: [
          { label: 'Inbox Component', href: LINKS.inbox.to, isNew: false },
          {
            label: 'User Preference',
            href: LINKS.docsUserPreferences.to,
            isNew: false,
          },
          { label: 'Workflows', href: LINKS.docsWorkflow.to, isNew: false },
          { label: 'Framework', href: LINKS.framework.to, isNew: false },
          { label: 'Digest', href: LINKS.digest.to, isNew: false },
          {
            label: 'Content Management',
            href: LINKS.docsContentManagement.to,
            isNew: false,
          },
          { label: 'Integrations', href: LINKS.integrations.to, isNew: false },
          {
            label: 'Notifications Directory',
            href: LINKS.docsNotifications.to,
            isNew: false,
          },
          {
            label: 'Novu MCP',
            href: LINKS.mcp.to,
            isNew: true,
          },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Documentation', href: LINKS.docs.to, isNew: false },
          { label: 'Blog', href: LINKS.blog.to, isNew: false },
          { label: 'Use Cases', href: LINKS.useCases.to, isNew: false },
          { label: 'Changelog', href: LINKS.changeLog.to, isNew: false },
          { label: 'Roadmap', href: LINKS.roadmapPage.to, isNew: false },
          { label: 'Support', href: LINKS.contactUs.to, isNew: false },
          {
            label: 'Security & Compliance',
            href: LINKS.security.to,
            isNew: false,
          },
          { label: 'Pricing', href: LINKS.pricing.to, isNew: false },
          { label: 'Customers', href: LINKS.customers.to, isNew: false },
        ],
      },
      {
        title: 'Comparison',
        items: [
          {
            label: 'Novu vs Courier',
            href: LINKS.comparisonCourier.to,
            isNew: false,
          },
          { label: 'Novu vs Knock', href: LINKS.comparisonKnock.to, isNew: false },
          {
            label: 'Novu vs MagicBell',
            href: LINKS.comparisonMagicBell.to,
            isNew: false,
          },
          {
            label: 'Novu vs SuprSend',
            href: LINKS.comparisonSuprSend.to,
            isNew: false,
          },
          {
            label: 'Novu vs In-house',
            href: LINKS.comparisonInHouse.to,
            isNew: false,
          },
        ],
      },
      {
        title: 'Company',
        items: [
          { label: 'Community', href: LINKS.community.to, isNew: false },
          { label: 'Contributors', href: LINKS.contributors.to, isNew: false },
          { label: 'Careers', href: LINKS.careers.to, isNew: false },
          { label: 'Handbook', href: LINKS.handbook.to, isNew: false },
          { label: 'Contact Us', href: LINKS.contactUs.to, isNew: false },
        ],
      },
    ],
    legal: [
      { label: 'Terms of Use', href: LINKS.termsOfUse.to },
      { label: 'Privacy Policy', href: LINKS.privacyPolicy.to },
      { label: 'DPA', href: LINKS.dataProcessingAgreement.to },
    ],
    social: [
      {
        label: 'Follow us on X',
        href: LINKS.twitter.to,
        icon: 'x',
      },
      {
        label: 'Follow us on GitHub',
        href: LINKS.github.to,
        icon: 'github',
      },
      {
        label: 'Join us on Discord',
        href: LINKS.discord.to,
        icon: 'discord',
      },
    ],
  },
};

export default MENUS;
