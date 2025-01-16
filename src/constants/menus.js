import LINKS from 'constants/links.js';
import ApiIcon from 'images/header/api-icon.svg';
import BlogIcon from 'images/header/blog-icon.svg';
import ChannelsIcon from 'images/header/channels-icon.svg';
import ChatIcon from 'images/header/chat-icon.svg';
import ComponentIcon from 'images/header/component-icon.svg';
import ContentIcon from 'images/header/content-icon.svg';
import DeveloperIcon from 'images/header/developer-icon.svg';
import DiscordIcon from 'images/header/discord-icon.svg';
import DocsIcon from 'images/header/docs-icon.svg';
import EmailIcon from 'images/header/email-icon.svg';
import FeaturesIcon from 'images/header/features-icon.svg';
import FrameworkIcon from 'images/header/framework-icon.svg';
import GettingStartedIcon from 'images/header/getting-started-icon.svg';
import GuideIcon from 'images/header/guide-icon.svg';
import InAppIcon from 'images/header/in-app-icon.svg';
import JoinUsIcon from 'images/header/join-us-icon.svg';
import LibraryIcon from 'images/header/library-icon.svg';
import NewsIcon from 'images/header/news-icon.svg';
import OpenSourceIcon from 'images/header/open-source-icon.svg';
import ProvidersIcon from 'images/header/providers-icon.svg';
import PushIcon from 'images/header/push-icon.svg';
import SecurityIcon from 'images/header/security-icon.svg';
import SmsIcon from 'images/header/sms-icon.svg';
import SubscriberIcon from 'images/header/subscriber-icon.svg';
import TeamCommunityIcon from 'images/header/team-community-icon.svg';
import UseCasesIcon from 'images/header/use-cases-icon.svg';
import UserIcon from 'images/header/user-icon.svg';
import WorkflowDigestIcon from 'images/header/workflow-digest-icon.svg';

import futureOfNovuImage from '../images/header/future-of-novu.jpg';
import notificationHowToImage from '../images/header/notification-how-to.jpg';

const MENUS = {
  header: [
    {
      text: 'Product',
      menuItems: {
        label: 'product',
        items: [
          {
            title: 'Features',
            description: 'Comprehensive solutions',
            icon: FeaturesIcon,
            items: [
              {
                title: 'Inbox and In-App Components',
                icon: ComponentIcon,
                to: '/inbox/?utm_campaign=ws_nav',
              },
              {
                title: 'Subscriber management',
                icon: SubscriberIcon,
                to: 'https://docs.novu.co/concepts/subscribers?utm_campaign=ws_nav',
              },
              {
                title: 'User preferences',
                icon: UserIcon,
                to: '/inbox/react/components/preferences?utm_campaign=ws_nav',
              },
              { title: 'Digest', icon: WorkflowDigestIcon, to: '/digest/?utm_campaign=ws_nav' },
              {
                title: 'Workflows',
                icon: WorkflowDigestIcon,
                to: 'https://docs.novu.co/workflows/notification-workflows?utm_campaign=ws_nav',
              },
              { title: 'Framework', icon: FrameworkIcon, to: '/framework?utm_campaign=ws_nav' },
              {
                title: 'Notification content management',
                icon: ContentIcon,
                to: 'https://docs.novu.co/workflow/template-editor?utm_campaign=ws_nav',
              },
              {
                title: 'Compliance and Security',
                icon: SecurityIcon,
                to: 'https://trust.novu.co/',
              },
            ],
          },
          {
            title: 'Channels',
            description: 'Ways to send notifications',
            icon: ChannelsIcon,
            items: [
              {
                title: 'In-app',
                icon: InAppIcon,
                to: 'https://docs.novu.co/integrations/providers/in-app/overview?utm_campaign=ws_nav',
              },
              {
                title: 'Push',
                icon: PushIcon,
                to: 'https://docs.novu.co/integrations/providers/push/overview?utm_campaign=ws_nav',
              },
              {
                title: 'E-mail',
                icon: EmailIcon,
                to: 'https://docs.novu.co/integrations/providers/email/overview?utm_campaign=ws_nav',
              },
              {
                title: 'SMS',
                icon: SmsIcon,
                to: 'https://docs.novu.co/integrations/providers/sms/overview?utm_campaign=ws_nav',
              },
              {
                title: 'Chat',
                icon: ChatIcon,
                to: 'https://docs.novu.co/integrations/providers/chat/overview?utm_campaign=ws_nav',
              },
            ],
          },
          {
            title: 'Novu for',
            description: 'Loved by Developers and Product Teams',
            icon: ProvidersIcon,
            items: [
              {
                title: 'Developers',
                icon: DeveloperIcon,
                to: 'https://docs.novu.co/getting-started/novu-for/developers?utm_campaign=ws_nav',
              },
              {
                title: 'Product teams',
                icon: TeamCommunityIcon,
                to: 'https://docs.novu.co/getting-started/novu-for/product?utm_campaign=ws_nav',
              },
            ],
          },
          {
            title: 'Use Cases',
            description: "How you'll use Novu",
            icon: UseCasesIcon,
            to: 'usecases/?utm_campaign=ws_nav',
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
            title: 'Get started',
            description: 'Developer essentials',
            icon: GettingStartedIcon,
            items: [
              { title: 'Docs', icon: DocsIcon, to: 'https://docs.novu.co?utm_campaign=ws_nav' },
              {
                title: 'API',
                icon: ApiIcon,
                to: 'https://docs.novu.co/api-reference/overview?utm_campaign=ws_nav',
              },
              {
                title: 'Frameworks',
                icon: FrameworkIcon,
                to: 'https://docs.novu.co/sdks/overview?utm_campaign=ws_nav',
              },
              { title: "What's new", icon: NewsIcon, to: 'https://roadmap.novu.co/changelog' },
              {
                title: 'How to guides',
                icon: GuideIcon,
                to: 'hhttps://docs.novu.co/recipes/workflows/introduction?utm_campaign=ws_nav',
              },
              {
                title: 'Components',
                icon: ComponentIcon,
                to: 'https://docs.novu.co/inbox/react/components/overview?utm_campaign=ws_nav',
              },
              {
                title: 'Libraries and integrations',
                icon: LibraryIcon,
                to: 'https://docs.novu.co/sdks/overview?utm_campaign=ws_nav',
              },
            ],
          },
          {
            title: 'How to Add Real-Time Notifications to a React App',
            description:
              'A comprehensive guide for\ndevelopers on selecting notification\nplatforms',
            image: notificationHowToImage,
            to: '/blog/how-to-add-real-time-notifications-to-a-react-app?utm_campaign=ws_nav',
          },
        ],
      },
    },
    {
      text: 'Resources',
      menuItems: {
        label: 'resources',
        items: [
          {
            title: 'Join us',
            description: 'Explore opportunities',
            icon: JoinUsIcon,
            items: [
              { title: 'Blog', icon: BlogIcon, to: '/blog/?utm_campaign=ws_nav' },
              { title: 'Discord', icon: DiscordIcon, ...LINKS.discord },
              { title: 'Community', icon: TeamCommunityIcon, to: '/community?utm_campaign=ws_nav' },
              { title: 'Open source', icon: OpenSourceIcon, to: 'https://github.com/novuhq' },
            ],
          },
          {
            title: 'The future of Novu',
            description:
              "Explore what's next for Novu, the open-\nsource notification infrastructure,\nincluding its innovative UI, code-first workflows, and seamless integration for delivering top-notch notification experiences.",
            image: futureOfNovuImage,
            to: 'https://roadmap.novu.co/roadmap',
          },
        ],
      },
    },
    { text: 'Pricing', to: '/pricing?utm_campaign=ws_nav' },
    { text: 'Docs', to: 'https://docs.novu.co/?utm_campaign=ws_nav' },
  ],
  footer: [
    [
      { text: 'Blog', to: '/blog/?utm_campaign=ws_nav_bottom' },
      { text: 'Community', to: '/community/?utm_campaign=ws_nav_bottom' },
      { text: 'Contributors', to: '/contributors/?utm_campaign=ws_nav_bottom' },
      { text: 'Pricing', to: '/pricing/?utm_campaign=ws_nav_bottom' },
      { text: 'Careers', ...LINKS.careers },
      { text: 'OSS Friends', to: '/oss-friends/?utm_campaign=ws_nav_bottom' },
    ],
    [
      { text: 'Documentation', to: 'https://docs.novu.co/?utm_campaign=ws_nav_bottom' },
      { text: 'Roadmap', to: 'https://roadmap.novu.co/roadmap' },
      { text: 'Changelog', to: 'https://roadmap.novu.co/' },
      { text: 'Providers', to: '' },
      { text: 'Handbook', ...LINKS.handbook },
      { text: 'Contact Us', to: 'https://novu.co/contact-us/?utm_campaign=ws_nav_bottom' },
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
