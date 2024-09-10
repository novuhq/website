import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from 'components/shared/layout';
import CodeSection from 'components/shared/reusable-sections/code-section';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import GetInvolved from 'components/shared/reusable-sections/get-involved';
import Inbox from 'components/shared/reusable-sections/inbox';
import SectionWithSmallIcons from 'components/shared/reusable-sections/section-with-small-icons';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
// import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
// import SectionWithVideo from 'components/shared/reusable-sections/section-with-video';
// import discordIcon from 'icons/discord.svg';
// import githubIcon from 'icons/github.svg';
import cloudDataIcon from 'images/icons/cloud-data.svg';
import consoleIcon from 'images/icons/console.svg';
import debugIcon from 'images/icons/debug.svg';
import editIcon from 'images/icons/edit.svg';
import integrationIcon from 'images/icons/integration.svg';
import migrationIcon from 'images/icons/migration.svg';
import angularIcon from 'images/reusable-sections/section-with-logos/angular.svg';
import reactLogo from 'images/reusable-sections/section-with-logos/react-icon.svg';

const INBOX_CATEGORIES = ["What's New", 'Alerts', 'Account'];

const INBOX_MESSAGES = [
  {
    category: "What's New",
    title: 'Security Update: Token Management',
    text: 'Secure your integration with the new token management system to safeguard your API keys.',
    date: '4 Sep 2024',
    isRead: false,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'In-App Notification Center Released',
    text: 'Stay updated with the new in-app notification center for real-time alerts.',
    date: '2 Sep 2024',
    isRead: false,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'Improved SMS Delivery Reports',
    text: 'Get detailed delivery reports for SMS notifications for better tracking and analytics.',
    date: '2 Sep 2024',
    isRead: false,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'Personalized Notifications Available',
    text: 'You can now personalize notifications based on user preferences for a tailored experience.',
    date: '31 Aug 2024',
    isRead: false,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'New Webhook Support',
    text: 'Webhook support added for real-time tracking of notification delivery statuses.',
    date: '24 Aug 2024',
    isRead: true,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'New Integration Added!',
    text: 'You can now integrate with Amazon SES for sending emails seamlessly.',
    date: '21 Aug 2024',
    isRead: true,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'Multi-Provider Failover Enabled',
    text: 'Your notifications are now more reliable with automatic failover to secondary providers.',
    date: '17 Aug 2024',
    isRead: true,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'New UI for Notification Templates',
    text: 'Check out the updated, more intuitive UI for creating and managing notification templates.',
    date: '16 Aug 2024',
    isRead: true,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'Email Provider Health Status',
    text: 'Monitor the health status of your email providers directly from your dashboard.',
    date: '11 Aug 2024',
    isRead: true,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: "What's New",
    title: 'Performance Improvements',
    text: 'Your notifications now load faster with backend performance enhancements.',
    date: '11 Aug 2024',
    isRead: true,
    buttons: ['Try it now', 'Learn more'],
  },
  {
    category: 'Alerts',
    title: 'High Error Rate Detected in Workflow',
    text: 'Your workflow "Order Processing" experienced a high error rate in the past hour. Review the logs for more details.',
    date: '3 Sep 2024',
    isRead: false,
    buttons: ['Go'],
  },
  {
    category: 'Product',
    title: 'New Provider Added',
    text: 'You successfully added Twilio as a new SMS provider to your notification system.',
    date: '29 Aug 2024',
    isRead: false,
    buttons: ['Go'],
  },
  {
    category: 'Product',
    title: 'New Workflow Created',
    text: 'The "Customer Signup Notification" workflow was successfully created and is now live.',
    date: '27 Aug 2024',
    isRead: true,
    buttons: ['Go'],
  },
  {
    category: 'Product',
    title: 'Weekly Workflow Summary Available',
    text: 'Your weekly summary for the "Transaction Alerts" workflow is now available. View performance and insights in the dashboard.',
    date: '1 Sep 2024',
    isRead: true,
    buttons: ['Go'],
  },
  {
    category: 'Product',
    title: 'Provider Health Alert',
    text: 'The email provider SendGrid has reported intermittent delays in message delivery over the past 24 hours.',
    date: '31 Aug 2024',
    isRead: true,
    buttons: ['Go'],
  },
  {
    category: 'Account',
    title: 'New Account User Created',
    text: 'A new user "justnems" has been successfully added to your account.',
    date: '4 Sep 2024',
    isRead: false,
    buttons: ['Users'],
  },
  {
    category: 'Account',
    title: 'Payment Successful',
    text: 'Your payment of $299 for the Pro Plan has been successfully processed.',
    date: '2 Sep 2024',
    isRead: false,
    buttons: ['Billing'],
  },
  {
    category: 'Account',
    title: 'Subscription Renewal',
    text: 'Your subscription for the Pro Plan has been renewed. The next billing cycle starts on 01 Oct 2024.',
    date: '1 Sep 2024',
    isRead: false,
    buttons: ['My Subscription'],
  },
  {
    category: 'Account',
    title: 'Password Changed',
    text: 'The password for your account has been successfully updated.',
    date: '28 Aug 2024',
    isRead: true,
    buttons: ['My Account'],
  },
  {
    category: 'Account',
    title: 'Account Settings Updated',
    text: 'Your account settings were updated. If you did not make this change, please contact support immediately.',
    date: '25 Aug 2024',
    isRead: true,
    buttons: ['Preferences'],
  },
];

const SECTION_WITH_SMALL_ICONS = [
  {
    title: 'Multiple, flexible components',
    description:
      '<Inbox/>, <Bell/>, <Notification/>, and rich user <Preferences/> provide the ultimate customer-facing notifications experience.',
    image: editIcon,
  },
  {
    title: 'Supports popular frameworks',
    description:
      "React, React-native, Vue, vanilla JavaScript, headless, and more. Access Novu's powerful capabilities regardless of framework.",
    image: cloudDataIcon,
  },
  {
    title: 'Customizable',
    description:
      'Build your Inbox experience to seamlessly match your existing brand, styling, and customer-selected language.',
    image: integrationIcon,
  },
  {
    title: 'Built-in preferences',
    description: 'Your app users access and set their Preferences with ease.',
    image: migrationIcon,
  },
  {
    title: 'HMAC encryption',
    description: 'Component to Novu service communication and user identifiers are fully secured.',
    image: debugIcon,
  },
  {
    title: 'Unified notifications',
    description:
      'Easily add notifications channels like email, sms, and WhatsApp, and mirror your Inbox experience elsewhere.',
    image: consoleIcon,
  },
];

/*
const SECTION_WITH_LOGOS = [
  {
    title: 'React',
    src: reactEmailLogo,
  },
  {
    title: 'Vue',
    src: nestJsLogo,
  },
  {
    title: 'Angular',
    src: remixLogo,
  },
  {
    title: 'Web Component',
    src: astroLogo,
  },
  {
    title: 'Headless',
    src: astroLogo,
  },
];
*/

const GET_INVOLVED = [
  {
    icon: reactLogo,
    title: 'React',
    description: 'React Inbox components',
    linkText: 'React Docs',
    linkUrl: 'https://docs.novu.co/inbox/react/components?utm_campaign=inbox-fp',
  },
  {
    icon: reactLogo,
    title: 'React Native',
    description: 'React Native Inbox components',
    linkText: 'Week of 9 September',
    linkUrl: 'https://roadmap.novu.co/roadmap/d84e52ff-4cbe-4c5e-8fab-361a11fff95e',
  },
  {
    icon: angularIcon,
    title: 'Angular',
    description: 'Angular Inbox components',
    linkText: 'Coming Soon',
    linkUrl: '/inbox?utm_campaign=inbox_angular',
  },
];

const CODE_SECTION = `import { Inbox } from "@novu/react";

const tabs = [
  {
    title: "All",
    value: ["system","account","product"],
  },
  {
    title: "System",
    value: ["system"],
  },
];

function Novu() {
  return (
    <Inbox
      options={{
        subscriberId: "SUBSCRIBER_ID",
        applicationIdentifier: "APPLICATION_IDENTIFIER",
      }}
      tabs={tabs}
    />
  );
}`;

const InboxPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <Inbox
      title="Add notifications to your application or website"
      description="Enable in-app notifications in your app or website with a pre-built and customizable components, available in popular frameworks."
      button={{
        label: 'INTERACTIVE EXAMPLE',
        link: 'https://inbox.novu.co',
        target: '_blank',
      }}
      categories={INBOX_CATEGORIES}
      messages={INBOX_MESSAGES}
    />
    <SectionWithSmallIcons
      title="Powerful notification <Inbox/> features in minutes, not days"
      items={SECTION_WITH_SMALL_ICONS}
    />
    <CodeSection
      code={CODE_SECTION}
      title="Fast, composable, and simple to implement"
      description="Built for developers, with drop-in integration that can be infinitely customized, no matter your application, or use case."
      button={{ label: 'LIVE EXAMPLE', link: 'https://inbox.novu.co' }}
    />

    {/*
    <SectionWithLogos
      title="Broad framework support out of the box"
      //        description="Built from scratch to integrate your existing tooling and content with the Novu Platform."
      logos={SECTION_WITH_LOGOS}
    />
    */}

    <GetInvolved title="Get started: pick your framework, code, and deploy" items={GET_INVOLVED} />
    <TextWithPicture
      title="Infinitely customizable to seamlessly match your app experience"
      description="Easily customize the Novu inbox to match your styles, design, and UX."
      image={
        <StaticImage
          src="../images/pages/inbox/inbox-reddit-example.webp"
          alt="Reddit Inbox example using the styled Novu Inbox"
          loading="eager"
          /* width={800} */
          /* height={480} */
        />
      }
      button={{
        label: 'INTERACTIVE EXAMPLE',
        link: 'https://inbox.novu.co',
      }}
      theme="imageFullWidth"
    />
    <CtaWithForm
      className="mb-30"
      title="It's time to add in-app notifications"
      description="Create a free account, send your first notification, and add an Inbox... all for free."
      leftItem={{
        text: 'Get started',
        link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
      }}
      rightItem={{
        text: 'Contact us',
        link: 'https://novu.co/contact-us/?utm_campaign=contact-inbox',
      }}
    />
  </Layout>
);

export default InboxPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Full-stack Inbox for In-app notifications',
    description:
      "Novu's Inbox is the easiest way to add a highly customizable notifications Inbox to your application or website.",
  };
  return <SEO {...pageMetadata} />;
};
