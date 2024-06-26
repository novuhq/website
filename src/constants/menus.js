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
    /* Removing temporarily - justnems 20240301 */
    /* {
      text: 'Hacktoberfest',
      ...LINKS.hacktoberfest,
    }, */
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
              { title: 'Multichannel Notifications', to: '' },
              { title: 'Add notifications to your app', to: '' },
              { title: 'Improve user communication experience', to: '' },
              { title: 'Unified notification platform', to: '' },
              { title: 'Notification content management', to: '' },
            ],
          },
          {
            title: 'Features',
            description: 'What Novu can do',
            icon: FeaturesIcon,
            items: [
              { title: 'Notifications workflows', to: '' },
              { title: 'Content management', to: '' },
              { title: 'Translation', to: '' },
              { title: 'Embeddable inbox component', to: '' },
              { title: 'End user preferences', to: '' },
              { title: 'Observability', to: '' },
            ],
          },
          {
            title: 'Providers',
            description: 'Who Novu connects with',
            icon: ProvidersIcon,
            items: [
              { title: 'Sendgrid', to: '' },
              { title: 'FCM', to: '' },
              { title: 'SES', to: '' },
              { title: 'Twilio', to: '' },
              { title: 'Nodemailer', to: '' },
              { title: 'Slack', to: '' },
              { title: 'Mailgun', to: '' },
              { title: 'Postmark', to: '' },
              { title: 'Discord', to: '' },
              { title: 'Sendinblue', to: '' },
            ],
          },
          {
            title: 'Channels',
            description: 'Where Novu integrates',
            icon: ChannelsIcon,
            items: [
              { title: 'In-app', to: '' },
              { title: 'Push', to: '' },
              { title: 'Email', to: '' },
              { title: 'SMS', to: '' },
              { title: 'Chat', to: '' },
              { title: 'Mobile*', to: '' },
            ],
          },
          {
            title: 'Frameworks',
            description: 'What Novu builds on',
            icon: FrameworksIcon,
            items: [
              { title: 'Remix', to: '' },
              { title: 'NextJS', to: '' },
              { title: 'Nuxt', to: '' },
              { title: 'Hono', to: '' },
              { title: 'Nest.js', to: '' },
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
            to: '',
            mobileOnly: true,
          },
          {
            title: 'Getting started',
            icon: GettingStartedIcon,
            items: [
              { title: 'Pre-built Examples', to: '' },
              { title: 'Libraries and SDKs', to: '' },
              { title: 'Integrations', to: '' },
            ],
          },
          {
            title: 'Guides',
            icon: GuidesIcon,
            items: [
              { title: 'Sending notifications', to: '' },
              { title: 'End user preferences', to: '' },
              { title: 'Novu notification guide', to: '' },
            ],
          },
          {
            items: [
              { title: 'Documentation', withImage: true, to: '', desktopOnly: true },
              { title: 'Community', to: '' },
              { title: 'API Reference', to: '' },
              { title: 'Changelog', to: '' },
              { title: 'System Status', to: '' },
              { title: 'Discord', to: '' },
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
      /* Remocing temporarily - justnems 20240301 */
      /* { text: 'Hacktoberfest', ...LINKS.hacktoberfest }, */
      { text: 'Blog', ...LINKS.blog },
      { text: 'Community', ...LINKS.community },
      // { text: 'Podcast', ...LINKS.podcast },
      { text: 'Pricing', ...LINKS.pricing },
      { text: 'Careers', ...LINKS.careers },
      /* { text: '2022 Events', ...LINKS.timeline }, */
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
  mobile: [
    {
      text: 'Documentation',
      ...LINKS.documentation,
    },
    { text: 'Blog', ...LINKS.blog },
    { text: 'Community', ...LINKS.community },
    { text: 'Careers', ...LINKS.careers },
    {
      text: 'Pricing',
      ...LINKS.pricing,
    },
  ],
};

export default MENUS;
