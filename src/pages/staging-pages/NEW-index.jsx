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
import DATA from 'data/pages/staging-pages/NEW-index';

const HomePage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <Hero />
    <SectionWithLogos {...DATA.sectionWithLogos} />
    <SectionWithCards {...DATA.sectionWithCards} />
    <SectionWithBigIcons {...DATA.sectionWithBigIcons} />
    <SectionWithSmallIcons {...DATA.sectionWithSmallIcons} />
    <Inbox {...DATA.inbox} sectionOffsets="mt-[250px] sm:mt-20" />
    <div id="codefirst">
      <Code />
    </div>
    <Reviews />
    <CtaWithForm {...DATA.ctaWithForm} className="mb-[192px] mt-[238px] text-center" />
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
        href="/animations/pages/home/hero/new-hero.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
    </>
  );
};
