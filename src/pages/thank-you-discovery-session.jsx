import React from 'react';

import Logos from 'components/pages/home/logos';
import Cta from 'components/pages/thank-you-discovery-session/cta';
import Hero from 'components/pages/thank-you-discovery-session/hero';
import JoinUs from 'components/shared/join-us';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

const ThankYouPage = () => (
  <Layout>
    <Hero />
    <Logos />
    <Cta />
    <Logos />
    <JoinUs />
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
