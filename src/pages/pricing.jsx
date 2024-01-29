import React, { useState } from 'react';

import FAQ from 'components/pages/pricing/faq';
import Hero from 'components/pages/pricing/hero-with-cards';
import PricingTable from 'components/pages/pricing/pricing-table';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Subscribe from 'components/shared/subscribe';

// TODO: reset to 0 when pricing slider returns
const INITIAL_SLIDER_VALUE = 50;

const findActiveTier = (value) => {
  if (value >= 70) return 'enterprise';
  if (value < 10) return 'free';
  return 'business';
};

const PricingPage = () => {
  const [activeTier, setActiveTier] = useState({
    value: findActiveTier(INITIAL_SLIDER_VALUE),
    rangeValue: INITIAL_SLIDER_VALUE,
  });

  return (
    <Layout>
      <Hero activeTier={activeTier} setActiveTier={setActiveTier} findActiveTier={findActiveTier} />
      <PricingTable activeTier={activeTier} />
      <FAQ />
      <Subscribe />
    </Layout>
  );
};

export default PricingPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/pricing/',
    title: 'Pricing - Novu',
    description: 'Flexible pricing for companies and developers',
  };
  return <SEO {...pageMetadata} />;
};
