import React from 'react';

import Hero from 'components/pages/thank-you-discovery-session/hero';
import Logos from 'components/pages/thank-you-discovery-session/logos';
import JoinUs from 'components/shared/join-us';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

const ThankYouPage = () => (
  <Layout>
    <Hero />
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
