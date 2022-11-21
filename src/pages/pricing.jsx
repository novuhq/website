import React from 'react';

import Hero from 'components/pages/pricing/hero-with-cards';
import SEO from 'components/shared/seo';
import Subscribe from 'components/shared/subscribe';

import Layout from '../components/shared/layout';

const PricingPage = () => (
  <Layout>
    <Hero />
    {/* <PricingFeatures />
    <FAQ /> */}
    <Subscribe />
  </Layout>
);

export default PricingPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/pricing',
    title: 'Pricing',
    description: 'Pricing Plans',
  };
  return <SEO {...pageMetadata} />;
};
