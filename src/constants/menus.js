import INTEGRATION_MENU_ITEMS from 'constants/integration-menu';
import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      text: 'Product',
      variant: 'product',
      content: [
        {
          items: [
            {
              text: 'Novu Notify',
              description: 'Notification center for your app',
              ...LINKS.inbox,
            },
            {
              text: 'Novu Connect',
              description: 'Connect AI agents with customers',
              ...LINKS.connect,
            },
          ],
        },
      ],
    },
    {
      text: 'Channels',
      variant: 'channels',
      content: [
        {
          items: [
            {
              text: 'Slack',
              menuIcon: 'slack',
              ...LINKS.channelSlack,
              children: [
                {
                  text: 'LangChain',
                  menuIcon: 'langchain',
                  ...LINKS.channelSlackLangchain,
                },
              ],
            },
            {
              text: 'WhatsApp',
              menuIcon: 'whatsapp',
              ...LINKS.channelWhatsApp,
              children: [
                {
                  text: 'LangChain',
                  menuIcon: 'langchain',
                  ...LINKS.channelWhatsAppLangchain,
                },
              ],
            },
            {
              text: 'Telegram',
              menuIcon: 'telegram',
              ...LINKS.channelTelegram,
              children: [
                {
                  text: 'LangChain',
                  menuIcon: 'langchain',
                  ...LINKS.channelTelegramLangchain,
                },
              ],
            },
            {
              text: 'MS Teams',
              menuIcon: 'teams',
              ...LINKS.channelMicrosoftTeams,
              children: [
                {
                  text: 'LangChain',
                  menuIcon: 'langchain',
                  ...LINKS.channelMicrosoftTeamsLangchain,
                },
              ],
            },
            {
              text: 'Email',
              menuIcon: 'email',
              ...LINKS.channelEmail,
              children: [
                {
                  text: 'LangChain',
                  menuIcon: 'langchain',
                  ...LINKS.channelEmailLangchain,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: 'Integrations',
      variant: 'integrations',
      content: [
        {
          items: INTEGRATION_MENU_ITEMS,
        },
      ],
    },
    {
      text: 'AI',
      variant: 'ai',
      content: [
        {
          items: [
            { text: 'MCP', menuIcon: 'mcp', ...LINKS.mcp },
            { text: 'Novu Copilot', menuIcon: 'copilot', ...LINKS.copilot },
            { text: 'Novu ACI', menuIcon: 'aci', ...LINKS.aci },
            { text: 'Skills', menuIcon: 'skills', ...LINKS.githubSkills },
          ],
        },
      ],
    },
    {
      text: 'Resources',
      variant: 'resources',
      content: [
        {
          title: 'Discover',
          items: [
            { text: 'Blog', menuIcon: 'blog', ...LINKS.blog },
            { text: 'Customers', menuIcon: 'customers', ...LINKS.customers },
            { text: 'Community', menuIcon: 'community', ...LINKS.community },
            { text: 'Changelog', menuIcon: 'changelog', ...LINKS.changeLog },
          ],
        },
        {
          title: 'Developers',
          items: [
            { text: 'Documentation', menuIcon: 'documentation', ...LINKS.docs },
            { text: 'API Reference', menuIcon: 'api', ...LINKS.docsApis },
            { text: 'SDKs & Frameworks', menuIcon: 'sdks', ...LINKS.docsSdks },
            { text: 'GitHub', menuIcon: 'github', ...LINKS.github },
          ],
        },
        {
          title: 'Company',
          items: [
            { text: 'About', menuIcon: 'about', ...LINKS.handbook },
            { text: 'Careers', menuIcon: 'careers', ...LINKS.careers },
            { text: 'Status', menuIcon: 'status', ...LINKS.statusPage },
            { text: 'Contact us', menuIcon: 'contact', ...LINKS.contactUs },
          ],
        },
      ],
    },
    { text: 'Customers', ...LINKS.customers },
    { text: 'Pricing', ...LINKS.pricing },
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
            label: 'Novu Copilot',
            href: LINKS.copilot.to,
            isNew: false,
          },
          {
            label: 'Novu MCP',
            href: LINKS.mcp.to,
            isNew: false,
          },
          {
            label: 'Novu ACI',
            href: LINKS.aci.to,
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
