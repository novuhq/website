import LINKS, { applyQueryParams } from 'constants/links.js';

const MENUS = {
  header: [
    {
      text: 'Product',
      content: [
        {
          title: 'Features',
          items: [
            { text: 'Inbox Component', ...applyQueryParams(LINKS.inbox, ['utm_campaign=ws_nav']) },
            {
              text: 'User Preference',
              ...applyQueryParams(LINKS.docsUserPreferences, ['utm_campaign=ws_nav']),
            },
            {
              text: 'Workflows',
              ...applyQueryParams(LINKS.docsWorkflow, ['utm_campaign=ws_nav']),
            },
            {
              text: 'Framework',
              ...applyQueryParams(LINKS.framework, ['utm_campaign=ws_nav']),
            },
            { text: 'Digest', ...applyQueryParams(LINKS.digest, ['utm_campaign=ws_nav']) },
            {
              text: 'Content Management',
              ...applyQueryParams(LINKS.docsContentManagement, ['utm_campaign=ws_nav']),
            },
          ],
        },
        {
          title: 'Changelog news',
          type: 'changelog',
        },
      ],
    },
    {
      text: 'Resources',
      content: [
        {
          title: 'Explore',
          items: [
            { text: 'Use cases', ...applyQueryParams(LINKS.useCases, ['utm_campaign=ws_nav']) },
            { text: 'Blog', ...applyQueryParams(LINKS.blog, ['utm_campaign=ws_nav']) },
            { text: 'Changelog', ...LINKS.changeLog },
            { text: 'Roadmap', ...LINKS.roadmapPage },
            { text: 'Support', ...applyQueryParams(LINKS.contactUs, ['utm_campaign=ws_nav']) },
            { text: 'Discord', ...LINKS.discord },
            {
              text: 'Security & Compliance',
              ...applyQueryParams(LINKS.security, ['utm_campaign=ws_nav']),
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
              ...applyQueryParams(LINKS.docs, ['utm_campaign=ws_nav']),
            },
            { text: 'Guides', ...applyQueryParams(LINKS.docsGuides, ['utm_campaign=ws_nav']) },
            {
              text: 'Framework',
              ...applyQueryParams(LINKS.docsFramework, ['utm_campaign=ws_nav']),
            },
            {
              text: 'API reference',
              ...applyQueryParams(LINKS.docsApis, ['utm_campaign=ws_nav']),
            },
            { text: 'SDKs', ...applyQueryParams(LINKS.docsSdks, ['utm_campaign=ws_nav']) },
          ],
        },
        {
          title: 'Quickstart',
          type: 'link',
          content: {
            title: 'Getting started',
            description: 'This guide walks you through integrating Novu’s Inbox',
            image: '/images/header/illustration-docs.jpg',
            url: applyQueryParams(LINKS.docsOverview, ['utm_campaign=ws_nav']).to,
          },
        },
      ],
    },
    { text: 'Pricing', ...applyQueryParams(LINKS.pricing, ['utm_campaign=ws_nav']) },
    { text: 'Contact Us', ...applyQueryParams(LINKS.contactUs, ['utm_campaign=ws_nav']) },
  ],
  footer: [
    [
      { text: 'Blog', ...applyQueryParams(LINKS.blog, ['utm_campaign=ws_nav_bottom']) },
      { text: 'Pricing', ...applyQueryParams(LINKS.pricing, ['utm_campaign=ws_nav_bottom']) },
      { text: 'Security', ...applyQueryParams(LINKS.security, ['utm_campaign=ws_nav_bottom']) },
      {
        text: 'Community',
        ...applyQueryParams(LINKS.community, ['utm_campaign=ws_nav_bottom']),
      },
      {
        text: 'Contributors',
        ...applyQueryParams(LINKS.contributors, ['utm_campaign=ws_nav_bottom']),
      },
      { text: 'Careers', ...LINKS.careers },
    ],
    [
      {
        text: 'Documentation',
        ...applyQueryParams(LINKS.docs, ['utm_campaign=ws_nav_bottom']),
      },
      { text: 'Roadmap', ...LINKS.roadmapPage },
      { text: 'Changelog', ...LINKS.changeLog },
      { text: 'Handbook', ...LINKS.handbook },
      {
        text: 'Contact Us',
        ...applyQueryParams(LINKS.contactUs, ['utm_campaign=ws_nav_bottom']),
      },
    ],
    [
      { text: 'Discord', ...LINKS.discord },
      { text: 'Twitter', ...LINKS.twitter },
      { text: 'GitHub', ...LINKS.github },
    ],
    [
      { text: 'Terms of Use', ...LINKS.termsOfUse },
      { text: 'Privacy Policy', ...LINKS.privacyPolicy },
      { text: 'DPA', ...LINKS.dataProcessingAgreement },
      { text: 'Status Page', ...LINKS.statusPage },
    ],
  ],
};

export default MENUS;
