import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Dedicated components

import Code from 'components/pages/home/code';
import Hero from 'components/pages/home/hero';
import SectionWithCards from 'components/pages/home/cards/section-with-cards';
import SectionWithSmallIcons from 'components/pages/home/channels/section-with-small-icons';
import Reviews from 'components/pages/home/reviews';

// Shared components

import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import Inbox from 'components/shared/reusable-sections/inbox';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import RiveWasm from 'components/shared/rive-wasm';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

// Logos and images

import allstarLogo from 'images/reusable-sections/section-with-logos/allstar.svg';
import axiosHqLogo from 'images/reusable-sections/section-with-logos/axios-hq.svg';
import baskLogo from 'images/reusable-sections/section-with-logos/bask.svg';
import capgeminiLogo from 'images/reusable-sections/section-with-logos/capgemini.svg';
import mongoDbLogo from 'images/reusable-sections/section-with-logos/mongodb.svg';
import mothershipLogo from 'images/reusable-sections/section-with-logos/mothership.svg';
import rocheLogo from 'images/reusable-sections/section-with-logos/roche.svg';
import runnLogo from 'images/reusable-sections/section-with-logos/runn.svg';
import saladLogo from 'images/reusable-sections/section-with-logos/salad.svg';
import siemensLogo from 'images/reusable-sections/section-with-logos/siemens.svg';
import teocoLogo from 'images/reusable-sections/section-with-logos/teoco.svg';
import unityLogo from 'images/reusable-sections/section-with-logos/unity.svg';

//Big Icons

import preferencesIcon from 'images/icons/preferences.svg';
import workflowsIcon from 'images/icons/workflows.svg';
import observabilityIcon from 'images/icons/observability.svg';
import integration2Icon from 'images/icons/integration2.svg';
import componentsIcon from 'images/icons/components.svg';
import apifirstIcon from 'images/icons/api-first.svg';

//Small Icons

import inappIcon from 'images/icons/in-app.svg';
import emailIcon from 'images/icons/email.svg';
import pushIcon from 'images/icons/push.svg';
import smsIcon from 'images/icons/sms.svg';
import chatIcon from 'images/icons/chat.svg';
import customIcon from 'images/icons/custom.svg';

// import LINKS from 'constants/links';

const SECTION_WITH_LOGOS_2 = [
  {
    title: 'Salad',
    src: saladLogo,
  },
  {
    title: 'MongoDB',
    src: mongoDbLogo,
  },
  {
    title: 'Mothership',
    src: mothershipLogo,
  },
  {
    title: 'Capgemini',
    src: capgeminiLogo,
  },
  {
    title: 'Bask',
    src: baskLogo,
  },
  {
    title: 'Roche',
    src: rocheLogo,
  },
  {
    title: 'Unity',
    src: unityLogo,
  },
  {
    title: 'Siemens',
    src: siemensLogo,
  },
  {
    title: 'Teoco',
    src: teocoLogo,
  },
  {
    title: 'Axio HQ',
    src: axiosHqLogo,
  },
  {
    title: 'Runn',
    src: runnLogo,
  },
  {
    title: 'Allstar',
    src: allstarLogo,
  },
];

const SECTION_WITH_CARDS = [
  {
    title: 'Premier DX',
    description:
      'Simple integrations with real-time data access and protections power critical notifications.',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../images/premier-dx.png"
      />
    ),
    linkText: 'Learn more',
    linkUrl: 'https://docs.novu.co/getting-started/introduction',
  },
  {
    title: '100% flexible',
    description:
      'Build workflows in the Ul, extend with code, and embed customizable ‹Inbox /> components.',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../images/flexible.png"
      />
    ),
    linkText: 'Learn more',
    linkUrl: 'https://docs.novu.co/getting-started/introduction',
  },
  {
    title: 'Open source backed',
    description:
      'Community driven and commercially-backed notifications innovation that never locks you in.',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../images/opensource.png"
      />
    ),
    linkText: 'Learn more',
    linkUrl: 'https://github.com/novuhq/novu',
  },
];

const SECTION_WITH_BIG_ICONS = [
  {
    icon: componentsIcon,
    title: '<Inbox /> components',
    description:
      'Drop-in and fully configurable, the Novu <Inbox /> is the fastest way to add InApp notifications to your app.',
    linkUrl: 'https://docs.novu.co/',
  },
  {
    icon: integration2Icon,
    title: 'Integrations',
    description:
      'Use ReactEmail, MJML, LaunchDarkly (and more!), and fetch content and values from anywhere.',
    linkUrl: 'https://docs.novu.co/',
  },
  {
    icon: preferencesIcon,
    title: 'Preferences',
    description:
      'End users directly set their own communication preferences like channels, timezone, and language.',
    linkUrl: 'https://docs.novu.co/',
  },
  {
    icon: workflowsIcon,
    title: 'Powerful workflows',
    description:
      'Start with a Ul workflow and achieve unlimited power and flexibility through code.',
    linkUrl: 'https://docs.novu.co/',
  },
  {
    icon: observabilityIcon,
    title: 'Observability',
    description:
      'Rapidly identify and solve previously complicated content hydratin and notification routing issues.',
    linkUrl: 'https://docs.novu.co/',
  },
  {
    icon: apifirstIcon,
    title: 'API-first, and open source backed',
    description: "Native developer experience that's backed by a huge community.",
    linkUrl: 'https://docs.novu.co/',
  },
];

const SECTION_WITH_SMALL_ICONS = [
  {
    title: 'InApp/Inbox',
    description:
      'Display real-time, contextual notifications within your app using customizable components.',
    image: inappIcon,
  },
  {
    title: 'Email',
    description:
      'Send targeted emails for confirmations, reports, and updates to ensure clear communication.',
    image: emailIcon,
  },
  {
    title: 'Push',
    description:
      "Deliver instant notifications to users' devices, ensuring real-time engagement and immediate updates.",
    image: pushIcon,
  },
  {
    title: 'SMS',
    description:
      'Send reliable text messages for authentication and alerts, even without internet access.',
    image: smsIcon,
  },
  {
    title: 'Chat',
    description:
      'Engage users through instant messaging apps and platforms, enhancing communication and support.',
    image: chatIcon,
  },
  {
    title: 'Custom',
    description:
      'Create tailored notification channels to meet your specific needs and integrate seamlessly.',
    image: customIcon,
  },
];

const HomePage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <Hero />
    <SectionWithLogos
      containerSize="lg"
      title="Notifications brands count on"
      description="Ensuring seamless notifications from business to users, with zero hassle."
      logos={SECTION_WITH_LOGOS_2}
    />
    <SectionWithCards title="The Novu difference" cards={SECTION_WITH_CARDS} />
    <SectionWithBigIcons
      title="Notification building blocks provide unlimited capability"
      items={SECTION_WITH_BIG_ICONS}
    />
    <SectionWithSmallIcons
      title="All your channels in one platform"
      items={SECTION_WITH_SMALL_ICONS}
    />
    <Inbox
      title="Add In-App Notifications with the most customizable <Inbox/>"
      description="Enable in-app notifications in your app or website with a pre-built and customizable components, available in popular frameworks."
      button={{
        label: 'LEARN MORE',
        link: '/inbox?utm_campaign=ws-inbox-hero',
      }}
    />
    <div id="codefirst">
      <Code />
    </div>
    <Reviews />
    <CtaWithForm
      className="mb-30 mt-[166px]"
      title="You're five minutes away from your first Novu-powered notification"
      description="Create a free account, send your first notification, all before your coffee gets cold... no credit card required."
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
    title: 'Novu - Open-source notifications infrastructure for devs and product teams',
    description:
      'Novu is an open-source notification platform that empowers developers to create robust, multi-channel notifications for web and mobile apps. With powerful workflows, seamless integrations, and a flexible API-first approach, Novu enables product teams to manage notifications without breaking production.',
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
