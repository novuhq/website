import clsx from 'clsx';
import BentoFiveBlocks from 'components/pages/inbox/bento-five-blocks';
import InboxWithImage from 'components/shared/inbox-with-image';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import CodeSection from 'components/pages/inbox/code-section';
import Inbox from 'components/pages/inbox/inbox';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import GetInvolved from 'components/shared/reusable-sections/get-involved';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import SEO from 'components/shared/seo';
import changeIcon from 'images/icons/change.svg';
import cubeIcon from 'images/icons/cube.svg';
import guardIcon from 'images/icons/guard.svg';
import preferencesIcon from 'images/icons/preferences.svg';
import rhombGridIcon from 'images/icons/rhomb-grid.svg';
import userIcon from 'images/icons/user.svg';
import javaScriptLogo from 'images/reusable-sections/section-with-logos/javascript-icon.svg';
import reactLogo from 'images/reusable-sections/section-with-logos/react-icon.svg';

const GET_INVOLVED = [
  {
    icon: reactLogo,
    title: 'Ready',
    description: 'Create a Novu account, and pick your framework of choice.',
    linkText: 'Overview',
    linkUrl: '/',
  },
  {
    icon: reactLogo,
    title: 'Set',
    description: 'Add the Novu Inbox import to your code.',
    linkText: 'React Quickstart',
    linkUrl: '/',
  },
  {
    icon: javaScriptLogo,
    title: 'Go',
    description: 'Trigger and deliver notification to the end user.',
    linkText: 'Trigger a Notification',
    linkUrl: '/',
  },
];

const CODE_SECTION = `import { Inbox } from "@novu/react";

const tabs = [
  {
    label: "All",
    value: [],
  },
  {
    label: "What's New",
    value: [ 'new' ],
  },
  {
    label: "Alerts",
    value: [ 'alerts' ],
  }
];

function Novu() {
  return (
    <Inbox
      applicationIdentifier="YOUR_APPLICATION_IDENTIFIER"
      subscriberId="YOUR_SUBSCRIBER_ID"
      tabs={tabs}
    />
  );
}`;

const SECTION_WITH_BIG_ICONS = [
  {
    icon: cubeIcon,
    title: 'Versatile components',
    description:
      '<Inbox/>, <Bell/>, <Notification/>, and user <Preferences/> provide the ultimate experience.',
    linkUrl: '/',
  },
  {
    icon: changeIcon,
    title: 'Built-in preferences',
    description: 'Your app users access and set their Preferences with ease.',
    linkUrl: '/',
  },
  {
    icon: userIcon,
    title: 'Popular frameworks',
    description: 'React, React-native, vanilla JavaScript, headless, and more.',
    linkUrl: '/',
  },
  {
    icon: preferencesIcon,
    title: 'HMAC encryption',
    description: 'Component to Novu service communication and user identifiers are fully secured.',
    linkUrl: '/',
  },
  {
    icon: guardIcon,
    title: 'Customizable',
    description: 'Seamlessly match your existing brand, styling, and customer-specified language.',
    linkUrl: '/',
  },
  {
    icon: rhombGridIcon,
    title: 'Unified',
    description: 'Add channels like email, SMS, and WhatsApp, mirroring Inbox across touchpoints.',
    linkUrl: '/',
  },
];

const BENTO_IMAGE_CLASS_NAME =
  '!absolute inset-0 z-10 rounded-xl [&_img]:!object-cover [&_img]:!object-center';

const SECTION_BENTO = {
  className: 'mt-[192px] md:mt-[88px]',
  title: 'Multiple components for any InApp requirement',
  titleClassName:
    '!text-[40px] lg:!text-4xl md:!text-[32px] sm:!text-3xl sm:text-center sm:mx-auto',
  description:
    'Configure layouts like bell-triggered popovers, side menus, full-page displays, or any other layout imaginable, with customizable styles and UI elements.',
  button: {
    label: 'Learn more',
    link: '/',
  },
  cards: [
    {
      title: 'Actions',
      description:
        'Streamline inbox management with bulk actions like marking as read or archiving all.',
      className:
        'bg-[#243349]/70 bg-[radial-gradient(71.42%_59.96%_at_73.69%_28.52%,rgba(41,56,102,0.50)_0%,rgba(41,56,102,0.00)_67.88%)]',
      image: (
        <StaticImage
          className={BENTO_IMAGE_CLASS_NAME}
          src="../components/pages/inbox/bento-five-blocks/images/actions.jpg"
          alt=""
          width={402}
          height={384}
          quality={100}
          aria-hidden
        />
      ),
    },
    {
      title: 'Bell',
      description:
        'A recognizable notification indicator, alerting users to new messages or updates in real time with visual cues.',
      className: 'bg-[radial-gradient(ellipse,#1B2637_0%,#27222F_100%)]',
      image: (
        <StaticImage
          className={BENTO_IMAGE_CLASS_NAME}
          src="../components/pages/inbox/bento-five-blocks/images/bell.jpg"
          alt=""
          width={484}
          height={384}
          quality={100}
          aria-hidden
        />
      ),
    },
    {
      title: 'Easy to embed',
      description: 'Switch easily between the Inbox and platform sections.',
      className: 'bg-[radial-gradient(circle,#243349_10%,#1E2334_23%)]',
      image: (
        <StaticImage
          className={BENTO_IMAGE_CLASS_NAME}
          src="../components/pages/inbox/bento-five-blocks/images/embed.jpg"
          alt=""
          width={270}
          height={384}
          quality={100}
          aria-hidden
        />
      ),
    },
    {
      title: 'Preferences',
      description:
        'Allows users to customize how and when they receive notifications, ensuring a tailored experience.',
      className: 'bg-[#27222F] overflow-hidden',
      image: (
        <StaticImage
          className={clsx(
            BENTO_IMAGE_CLASS_NAME,
            'md:bottom-4 md:scale-[1.15] sm:bottom-0 sm:scale-100'
          )}
          src="../components/pages/inbox/bento-five-blocks/images/preferences.jpg"
          alt=""
          width={546}
          height={434}
          quality={100}
          aria-hidden
        />
      ),
    },
    {
      title: 'Notification',
      description:
        'Notifications deliver updates or messages to users in the Inbox. They can be customized with text, buttons, and links to suit different needs.',
      className: 'bg-[#22272F]',
      image: (
        <StaticImage
          className={BENTO_IMAGE_CLASS_NAME}
          src="../components/pages/inbox/bento-five-blocks/images/notification.jpg"
          alt=""
          width={640}
          height={434}
          quality={100}
          aria-hidden
        />
      ),
    },
  ],
};

const InboxPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <InboxWithImage
      title="Add In-App Notifications with the most customizable <Inbox/>"
      description="Enable in-app notifications in your app or website with a pre-built and customizable components, available in popular frameworks."
      button={{
        label: 'See it live',
        link: '/',
      }}
    />
    <SectionWithBigIcons
      title="The fastest way to create rich, customized application notifications"
      items={SECTION_WITH_BIG_ICONS}
    />
    <Inbox
      title="Fits perfectly into your app"
      description="Deliver a rich in-app notification experience that completely mirrors your existing UX, not an afterthought or a bolt-on."
      button={{
        label: 'Learn more',
        link: 'https://inbox.novu.co?utm_campaign=fp-inbox-view-playground-hero',
        target: '_blank',
      }}
      sectionOffsets="mt-[286px]"
    />
    <CodeSection
      code={CODE_SECTION}
      title="Fast, composable, and simple to implement"
      description="Built for developers, with drop-in integration that can be infinitely customized, no matter your application, or use case."
      button={{
        label: 'Learn more',
        link: '/',
      }}
    />
    <BentoFiveBlocks {...SECTION_BENTO} />
    <GetInvolved
      title="For the best Inbox, Ready. Set. Go."
      bottomMargin="mt-[196px] md:mt-[120px]"
      items={GET_INVOLVED}
    />
    <CtaWithForm
      className="mb-[207px] mt-[342px] md:mt-[140px]"
      title="We're ready for your requirements..."
      description="Whatever your use case, Novu is ready. Start for free, no credit card required."
      leftItem={{
        text: 'Get started',
        link: 'https://dashboard-v2.novu.co/?utm_campaign=gs-website-inbox',
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
    ogImage: `/images/seo/og-novu-inbox.jpg`,
  };
  return <SEO {...pageMetadata} />;
};
