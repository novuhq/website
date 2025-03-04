import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Code from 'components/pages/home/code';
import Hero from 'components/pages/home/hero';
import Reviews from 'components/pages/home/reviews';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import Inbox from 'components/shared/reusable-sections/inbox';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import SectionWithCards from 'components/shared/reusable-sections/section-with-cards';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import SectionWithSmallIcons from 'components/shared/reusable-sections/section-with-small-icons';
import RiveWasm from 'components/shared/rive-wasm';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
import apifirstIcon from 'images/icons/api-first.svg';
import bellOutlineIcon from 'images/icons/bell-outline.svg';
import chatOutlineIcon from 'images/icons/chat-outline.svg';
import componentsIcon from 'images/icons/components.svg';
import emailOutlineIcon from 'images/icons/email-outline.svg';
import gearOutlineIcon from 'images/icons/gear-outline.svg';
import inappOutlineIcon from 'images/icons/in-app-outline.svg';
import integration2Icon from 'images/icons/integration2.svg';
import observabilityIcon from 'images/icons/observability.svg';
import planeOutlineIcon from 'images/icons/plane-outline.svg';
import preferencesIcon from 'images/icons/preferences.svg';
import workflowsIcon from 'images/icons/workflows.svg';
import allstarLogo from 'images/reusable-sections/section-with-logos/allstar.svg';
import axiosHqLogo from 'images/reusable-sections/section-with-logos/axios-hq.svg';
import baskLogo from 'images/reusable-sections/section-with-logos/bask.svg';
import capgeminiLogo from 'images/reusable-sections/section-with-logos/capgemini.svg';
import middayLogo from 'images/reusable-sections/section-with-logos/midday.svg';
import mongoDbLogo from 'images/reusable-sections/section-with-logos/mongodb.svg';
import mothershipLogo from 'images/reusable-sections/section-with-logos/mothership.svg';
import runnLogo from 'images/reusable-sections/section-with-logos/runn.svg';
import saladLogo from 'images/reusable-sections/section-with-logos/salad.svg';
import siemensLogo from 'images/reusable-sections/section-with-logos/siemens.svg';
import teocoLogo from 'images/reusable-sections/section-with-logos/teoco.svg';
import unityLogo from 'images/reusable-sections/section-with-logos/unity.svg';

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
    title: 'Midday',
    src: middayLogo,
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
        src="../images/reusable-sections/section-with-cards/dx.png"
      />
    ),
    //  linkText: 'Learn more',
    //  linkUrl: 'https://docs.novu.co/getting-started/introduction',
  },
  {
    title: '100% flexible',
    description:
      'Build workflows in the Ul, extend with code, and embed customizable <Inbox /> components.',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../images/reusable-sections/section-with-cards/flexibility.png"
      />
    ),
    //  linkText: 'Learn more',
    //  linkUrl: 'https://docs.novu.co/getting-started/how-novu-works',
  },
  {
    title: 'Open source backed',
    description:
      'Community driven and commercially-backed notifications innovation that never locks you in.',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../images/reusable-sections/section-with-cards/opensource-redesigned.jpg"
      />
    ),
    //  linkText: 'Learn more',
    //  linkUrl: 'https://github.com/novuhq/novu',
  },
];

const SECTION_WITH_BIG_ICONS = [
  {
    icon: componentsIcon,
    title: '<Inbox /> components',
    description:
      'Drop-in and fully configurable, the Novu <Inbox /> is the fastest way to add InApp notifications to your app.',
    linkUrl: 'https://docs.novu.co/inbox/overview',
  },
  {
    icon: integration2Icon,
    title: 'Integrations',
    description:
      'Use ReactEmail, MJML, LaunchDarkly (and more!), and fetch content and values from anywhere.',
    linkUrl: 'https://docs.novu.co/concepts/integrations',
  },
  {
    icon: preferencesIcon,
    title: 'Preferences',
    description:
      'End users directly set their own communication preferences like channels, timezone, and language.',
    linkUrl: 'https://docs.novu.co/inbox',
  },
  {
    icon: workflowsIcon,
    title: 'Powerful workflows',
    description:
      'Start with a Ul workflow and achieve unlimited power and flexibility through code.',
    linkUrl: 'https://docs.novu.co/concepts/workflows',
  },
  {
    icon: observabilityIcon,
    title: 'Observability',
    description:
      'Rapidly identify and solve previously complicated content hydratin and notification routing issues.',
    linkUrl: 'https://docs.novu.co/api-reference/execution-details/get-execution-details',
  },
  {
    icon: apifirstIcon,
    title: 'API-first, and open source backed',
    description: "Native developer experience that's backed by a huge community.",
    linkUrl: 'https://docs.novu.co/api-reference/overview',
  },
];

const SECTION_WITH_SMALL_ICONS = [
  {
    title: 'InApp/Inbox',
    description:
      'Display real-time, contextual notifications within your app using customizable components.',
    image: inappOutlineIcon,
  },
  {
    title: 'Email',
    description:
      'Send targeted emails for confirmations, reports, and updates to ensure clear communication.',
    image: emailOutlineIcon,
  },
  {
    title: 'Push',
    description:
      "Deliver instant notifications to users' devices, ensuring real-time engagement and immediate updates.",
    image: bellOutlineIcon,
  },
  {
    title: 'SMS',
    description:
      'Send reliable text messages for authentication and alerts, even without internet access.',
    image: planeOutlineIcon,
  },
  {
    title: 'Chat',
    description:
      'Engage users through instant messaging apps and platforms, enhancing communication and support.',
    image: chatOutlineIcon,
  },
  {
    title: 'Custom',
    description:
      'Create tailored notification channels to meet your specific needs and integrate seamlessly.',
    image: gearOutlineIcon,
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
      title="Notification building blocks provide unlimited capability"
      items={SECTION_WITH_BIG_ICONS}
    />
    <SectionWithSmallIcons
      title="All your channels in one platform"
      description="True omnichannel notifications are just a few clicks away"
      items={SECTION_WITH_SMALL_ICONS}
      hasOutroText
    />
    <Inbox
      sectionOffsets="mt-[250px] sm:mt-20"
      title="<Inbox /> Component"
      description="Enable in-app notifications in your app or website with a pre-built and customizable components, available in popular frameworks."
      button={{
        label: 'Learn more',
        link: '/inbox?utm_campaign=ws-inbox-hero',
      }}
    />
    <div id="codefirst">
      <Code />
    </div>
    <Reviews />
    <CtaWithForm
      className="mb-[192px] mt-[238px] text-center"
      title="You're five minutes away from your first Novu-powered notification"
      description="Create a free account, send your first notification, all before your coffee gets cold... no credit card required."
      leftItem={{
        text: 'Get started',
        link: 'https://dashboard-v2.novu.co/?utm_campaign=ws_home_cta_bottom',
      }}
      rightItem={{
        text: 'Contact us',
        link: 'https://novu.co/contact-us/?utm_campaign=ws_home_cta_bottom',
      }}
    />
    <Separator className="h-px w-full max-w-none" backgroundColor="black" />
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
