import React from 'react';

import Hero from 'components/pages/thank-you-discovery-session/hero';
import Layout from 'components/shared/layout';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/thank-you';

const ThankYouPage = () => (
  <Layout mainClassName="thank-you-discovery-session overflow-hidden pb-px">
    <Hero />
    <SectionWithLogos {...DATA.companies} />
    <SectionWithBigIcons
      {...DATA.getInvolved}
      className="mb-40 lg:mb-[120px] md:mb-[100px] sm:mb-20"
    />
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
