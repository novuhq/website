import LINKS from 'constants/links.js';
import ChannelsIcon from 'images/header/channels-icon.svg';
import DocumentationIcon from 'images/header/documentation-icon.svg';
import FeaturesIcon from 'images/header/features-icon.svg';
import FrameworksIcon from 'images/header/frameworks-icon.svg';
import GettingStartedIcon from 'images/header/getting-started-icon.svg';
import GuidesIcon from 'images/header/guides-icon.svg';
import ProvidersIcon from 'images/header/providers-icon.svg';
import UseCasesIcon from 'images/header/use-cases-icon.svg';

const MENUS = {
  header: [
    {
      text: 'Product',
      menuItems: {
        label: 'product',
        items: [
          {
            title: 'Use Cases',
            description: "How you'll use Novu",
            icon: UseCasesIcon,
            items: [
              { title: 'Multichannel Notifications', ...LINKS.multichannelNotifications },
              { title: 'Add notifications to your app', ...LINKS.notifications },
              { title: 'Improve user communication experience', ...LINKS.communication },
              { title: 'Unified notification platform', ...LINKS.notificationPlatform },
              { title: 'Notification content management', ...LINKS.notificationContentManagement },
            ],
          },
          {
            title: '<Inbox /> Components',
            description: 'What Novu can do',
            icon: FeaturesIcon,
            items: [
              { title: '<Inbox /> overview', to: '/inbox?utm_campaign=ws_top_nav' },
              {
                title: 'React components',
                to: 'https://docs.novu.co/inbox/react/components/overview?utm_campaign=ws_top_nav',
              },
              {
                title: '<Bell /> component',
                to: 'https://docs.novu.co/inbox/react/components/bell?utm_campaign=ws_top_nav',
              },
              {
                title: 'In-app <Notifications />',
                to: 'https://docs.novu.co/inbox/react/components/notifications?utm_campaign=ws_top_nav',
              },
              {
                title: 'User <Preferences />',
                to: 'https://docs.novu.co/inbox/react/components/preferences?utm_campaign=ws_top_nav',
              },
              {
                title: 'React Native',
                to: 'https://docs.novu.co/inbox/react/hooks/overview?utm_campaign=ws_top_nav',
              },
              {
                title: 'Native JavaScript',
                to: 'https://docs.novu.co/inbox/headless/get-started?utm_campaign=ws_top_bav',
              },
              {
                title: '<Inbox /> playground',
                to: 'https://inbox.novu.co?utm_campaign=top_nav',
                target: '_blank',
              },
            ],
          },
          {
            title: 'Providers',
            description: 'Who Novu connects with',
            icon: ProvidersIcon,
            items: [
              { title: 'Sendgrid', ...LINKS.sendgrid },
              { title: 'FCM', ...LINKS.fcm },
              { title: 'SES', ...LINKS.ses },
              { title: 'Twilio', ...LINKS.twilio },
              { title: 'Nodemailer', ...LINKS.nodemailer },
              { title: 'Slack', ...LINKS.slack },
              { title: 'Mailgun', ...LINKS.mailgun },
              { title: 'Postmark', ...LINKS.postmark },
              { title: 'Discord', ...LINKS.discord },
              { title: 'Sendinblue', ...LINKS.sendinblue },
            ],
          },
          {
            title: 'Channels',
            description: 'Where Novu integrates',
            icon: ChannelsIcon,
            items: [
              { title: 'In-app', ...LINKS.inAppChannel },
              { title: 'Push', ...LINKS.pushChannel },
              { title: 'Email', ...LINKS.emailChannel },
              { title: 'SMS', ...LINKS.smsChannel },
              { title: 'Chat', ...LINKS.chatChannel },
              // { title: 'Mobile*', ...LINKS.mobileChannel }, -> We don't have that page yet
            ],
          },
          {
            title: 'Frameworks',
            description: 'What Novu builds on',
            icon: FrameworksIcon,
            items: [
              { title: 'Remix', ...LINKS.remix },
              { title: 'NextJS', ...LINKS.nextjs },
              { title: 'Nuxt', ...LINKS.nuxt },
              { title: 'Svelte', ...LINKS.svelte },
              { title: 'Express', ...LINKS.express },
              { title: 'H3', ...LINKS.h3 },
              // { title: 'Hono', ...LINKS.hono }, -> We don't have that page yet
              // { title: 'Nest.js', ...LINKS.nestjs }, -> We don't have that page yet
            ],
          },
        ],
      },
    },
    {
      text: 'Developers',
      menuItems: {
        label: 'developers',
        items: [
          {
            title: 'Documentation',
            icon: DocumentationIcon,
            mobileOnly: true,
            ...LINKS.documentation,
          },
          {
            title: 'Getting started',
            icon: GettingStartedIcon,
            items: [
              { title: 'How-to guides', ...LINKS.howToGuides }, // We might consider changing it
              { title: 'Libraries and SDKs', ...LINKS.librariesAndSdks },
              { title: 'Integrations', ...LINKS.integrations },
            ],
          },
          {
            title: 'Code-first examples',
            icon: GuidesIcon,
            items: [{ title: 'Workflow examples', ...LINKS.preBuiltWorkflows }],
          },
          {
            items: [
              {
                title: 'Documentation',
                withImage: true,
                desktopOnly: true,
                ...LINKS.documentation,
              },
              { title: 'Community', ...LINKS.community },
              { title: 'API Reference', ...LINKS.apiReference },
              { title: 'Changelog', ...LINKS.changeLog },
              { title: 'System Status', ...LINKS.systemStatus },
              { title: 'Discord', ...LINKS.discord },
            ],
          },
        ],
      },
    },
    {
      text: 'Pricing',
      ...LINKS.pricing,
    },
    {
      text: 'Docs',
      ...LINKS.documentation,
    },
    { text: 'Blog', ...LINKS.blog },
  ],
  footer: [
    [
      { text: 'Blog', ...LINKS.blog },
      { text: 'Community', ...LINKS.community },
      { text: 'Contributors', ...LINKS.contributors },
      { text: 'Pricing', ...LINKS.pricing },
      { text: 'Careers', ...LINKS.careers },
      { text: 'OSS Friends', ...LINKS.ossFriends },
    ],
    [
      { text: 'Documentation', ...LINKS.documentation },
      { text: 'Roadmap', ...LINKS.roadmapPage },
      { text: 'Changelog', ...LINKS.changeLog },
      { text: 'Providers', ...LINKS.providers },
      { text: 'Handbook', ...LINKS.handbook },
      { text: 'Contact Us', ...LINKS.discord },
      { text: 'Press Kit', ...LINKS.pressKit },
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
