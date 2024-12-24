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
                ...LINKS.embedComponent,
              },
              { title: 'Subscriber management', icon: SubscriberIcon, ...LINKS.home },
              { title: 'User preferences', icon: UserIcon, ...LINKS.userPreferences },
              { title: 'Digest', icon: WorkflowDigestIcon, ...LINKS.home },
              { title: 'Workflows', icon: WorkflowDigestIcon, ...LINKS.workflow },
              { title: 'Framework', icon: FrameworkIcon, ...LINKS.framework },
              {
                title: 'Notification content management',
                icon: ContentIcon,
                ...LINKS.notificationContentManagement,
              },
              { title: 'Compliance and Security', icon: SecurityIcon, ...LINKS.home },
            ],
          },
          {
            title: 'Channels',
            description: 'Where Novu integrates',
            icon: ChannelsIcon,
            items: [
              { title: 'In-app', icon: InAppIcon, ...LINKS.inAppChannel },
              { title: 'Push', icon: PushIcon, ...LINKS.pushChannel },
              { title: 'E-mail', icon: EmailIcon, ...LINKS.emailChannel },
              { title: 'SMS', icon: SmsIcon, ...LINKS.smsChannel },
              { title: 'Chat', icon: ChatIcon, ...LINKS.chatChannel },
            ],
          },
          {
            title: 'Novu for',
            description: 'Who Novu connects with',
            icon: ProvidersIcon,
            items: [
              { title: 'Developers', icon: DeveloperIcon, ...LINKS.home },
              { title: 'Product teams', icon: TeamCommunityIcon, ...LINKS.home },
            ],
          },
          {
            title: 'Use Cases',
            description: "How you'll use Novu",
            icon: UseCasesIcon,
            ...LINKS.home,
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
              { title: 'Docs', icon: DocsIcon, ...LINKS.documentation },
              { title: 'API', icon: ApiIcon, ...LINKS.apiReference },
              { title: 'Frameworks', icon: FrameworkIcon, ...LINKS.framework },
              { title: "What's new", icon: NewsIcon, ...LINKS.changelog },
              { title: 'How to guides', icon: GuideIcon, ...LINKS.howToGuides },
              { title: 'Components', icon: ComponentIcon, ...LINKS.embedComponent },
              { title: 'Libraries and integrations', icon: LibraryIcon, ...LINKS.librariesAndSdks },
            ],
          },
          {
            title: 'How to Add Real-Time Notifications to a React App',
            description:
              'A comprehensive guide for\ndevelopers on selecting notification\nplatforms',
            image: notificationHowToImage,
            ...LINKS.howToNotificationsReact,
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
              { title: 'Blog', icon: BlogIcon, ...LINKS.blog },
              { title: 'Discord', icon: DiscordIcon, ...LINKS.discord },
              { title: 'Community', icon: TeamCommunityIcon, ...LINKS.community },
              { title: 'Open source', icon: OpenSourceIcon, ...LINKS.ossFriends },
            ],
          },
          {
            title: 'The future of Novu',
            description:
              "Explore what's next for Novu, the open-\nsource notification infrastructure,\nincluding its innovative UI, code-first workflows, and seamless integration for delivering top-notch notification experiences.",
            image: futureOfNovuImage,
            ...LINKS.futureOfNovu,
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
