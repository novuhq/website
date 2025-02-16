import React from 'react';

import Hero from 'components/pages/thank-you-discovery-session/hero';
import Layout from 'components/shared/layout';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
import SECTION_WITH_BIG_ICONS from 'data/pages/thank-you-discovery-session/section-with-big-icons';
import SECTION_WITH_LOGOS from 'data/pages/thank-you-discovery-session/section-with-logos';

const ThankYouPage = () => (
  <Layout mainClassName="thank-you-discovery-session overflow-hidden pb-px">
    <Hero />
    <SectionWithLogos
      title={SECTION_WITH_LOGOS.title}
      description={SECTION_WITH_LOGOS.description}
      logos={SECTION_WITH_LOGOS.logos}
    />
    <SectionWithBigIcons
      title={SECTION_WITH_BIG_ICONS.title}
      items={SECTION_WITH_BIG_ICONS.items}
      className="mb-40 lg:mb-[120px] md:mb-[100px] sm:mb-20"
      isCentered
    />
    <Separator backgroundColor="black" />
  </Layout>
);

export default ThankYouPage;

export const Head = () => {
  const pageMetadata = {
    preventIndexing: true,
    title: 'Novu - Discovery session booked',
    description: "We're looking forward to chatting soon.",
  };

  return <SEO {...pageMetadata} />;
};
