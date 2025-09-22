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
            { text: 'Directory', ...applyQueryParams(LINKS.directory, ['utm_campaign=ws_nav']) },
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
    { text: 'Customers', ...LINKS.customers },
    { text: 'Pricing', ...applyQueryParams(LINKS.pricing, ['utm_campaign=ws_nav']) },
    { text: 'Contact Us', ...applyQueryParams(LINKS.contactUs, ['utm_campaign=ws_nav']) },
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
          { label: 'Digest', href: LINKS.digest.to, isNew: true },
          {
            label: 'Content Management',
            href: LINKS.docsContentManagement.to,
            isNew: false,
          },
          {
            label: 'Notifications Directory',
            href: LINKS.docsNotifications.to,
            isNew: false,
          },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Documentation', href: LINKS.docs.to, isNew: true },
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
