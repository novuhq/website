import React from 'react';

import Code from 'components/pages/home/code';
import Flexibility from 'components/pages/home/flexibility';
import Hero from 'components/pages/home/hero';
import Infrastructure from 'components/pages/home/infrastructure';
import Integration from 'components/pages/home/integration';
import Libraries from 'components/pages/home/libraries';
import Reviews from 'components/pages/home/reviews';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import Inbox from 'components/shared/reusable-sections/inbox';
import RiveWasm from 'components/shared/rive-wasm';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

// import LINKS from 'constants/links';

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

const HomePage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <Hero />
    <Integration />
    <Inbox
      title="The most powerful and customizable notification <Inbox/>"
      description="Drop-in in-app notifications for your app or website, deployable in minutes, and synchronizsed across all your channels."
      button={{
        label: 'LEARN MORE',
        link: '/inbox?utm_campaign=ws-inbox-hero',
      }}
      categories={INBOX_CATEGORIES}
      messages={INBOX_MESSAGES}
    />
    <a id="codefirst">
      <Code />
    </a>
    <CtaWithForm
      title="Send your first notification in minutes"
      /* description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo." */
      leftItem={{
        text: 'GET STARTED',
        link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
      }}
      rightItem={{
        text: 'BOOK A DEMO',
        link: 'https://notify.novu.co/meetings/novumeet/discovery-session?utm_campaign=ws-cta',
      }}
    />
    <Flexibility />
    <Libraries />
    <Infrastructure />
    <Reviews />
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
    <Separator className="w-full max-w-none" backgroundColor="echo-gradient" />
  </Layout>
);

export default HomePage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Open-source notifications infrastructure and framework',
    description:
      'Novu empowers developers and product teams to collaborate seamlessly on notification management. Its unified platform provides centralized content, type-safe schemas, and reusable components, facilitating efficient workflows. With code-first and no-code tools, teams can easily customize and deploy notifications across multiple channels like email, SMS, push, chat, and in-app. Novu enhances communication, reduces friction, and ensures reliable, scalable, and personalized user experiences while maintaining full visibility and control over notifications.',
  };
  return (
    <>
      <SEO {...pageMetadata} />
      <RiveWasm />
      <link
        rel="preload"
        href="/animations/pages/home/hero/new_hero.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
    </>
  );
};
