import React from 'react';

import Hero from 'components/pages/thank-you-swag/hero';
import JoinUs from 'components/shared/join-us';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

const ThankYouPage = () => (
  <Layout>
    <Hero />
    <JoinUs />
    <Separator backgroundColor="black" />
  </Layout>
);

export default ThankYouPage;

export const Head = () => {
  const pageMetadata = {
    preventIndexing: true,
    title: 'Novu - We received your SWAG contest entry!',
    description: 'Thanks for submitting your post links for the Novu Community SWAG contest.',
  };

  return <SEO {...pageMetadata} />;
};
