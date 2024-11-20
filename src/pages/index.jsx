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
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import RiveWasm from 'components/shared/rive-wasm';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
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

const HomePage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <Hero />
    <SectionWithLogos
      containerSize="lg"
      title="Notifications brands count on"
      description="Ensuring seamless notifications from business to users, with zero hassle."
      logos={SECTION_WITH_LOGOS_2}
    />
    <Inbox
      title="The most customizable <Inbox&nbsp;/>"
      description="Drop-in in-app notifications for your app or website, deployable in minutes, and synchronized across all your channels."
      button={{
        label: 'LEARN MORE',
        link: '/inbox?utm_campaign=ws-inbox-hero',
      }}
    />
    <Integration />
    <div id="codefirst">
      <Code />
    </div>
    <CtaWithForm
      title="Send your first notification in minutes"
      /* description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo." */
      leftItem={{
        text: 'GET STARTED',
        link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
      }}
      rightItem={{
        text: 'BOOK A DEMO',
        link: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=ws-cta',
      }}
    />
    <Flexibility />
    <Libraries />
    <Infrastructure />
    <Reviews />
    <CtaWithForm
      className="mb-30 mt-[166px]"
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
