import React from 'react';

import Hero from 'components/pages/thank-you-discovery-session/hero';
import Layout from 'components/shared/layout';
import GetInvolved from 'components/shared/reusable-sections/get-involved';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
import GET_INVOLVED from 'data/thank-you-discovery-session/get-involved';
import SECTION_WITH_LOGOS from 'data/thank-you-discovery-session/section-with-logos';

const ThankYouPage = () => (
  <Layout mainClassName="thank-you-discovery-session overflow-hidden pb-px">
    <Hero />
    <SectionWithLogos
      title={SECTION_WITH_LOGOS.title}
      description={SECTION_WITH_LOGOS.description}
      logos={SECTION_WITH_LOGOS.logos}
    />
    <GetInvolved
      title={GET_INVOLVED.title}
      items={GET_INVOLVED.items}
      bottomMargin="mb-40 lg:mb-[120px] md:mb-[100px] sm:mb-20"
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
