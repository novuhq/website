import React from 'react';

import FAQ from 'components/pages/pricing/faq';
import Hero from 'components/pages/pricing/hero-with-cards';
import PricingTable from 'components/pages/pricing/pricing-table';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Subscribe from 'components/shared/subscribe';

const INITIAL_SLIDER_VALUE = 0;

const findActiveTier = (value) => {
  if (value >= 40) return 'business'; /* change to enterprise if slider re-enabled */
  if (value < 10) return 'business'; /* change to free if slider re-enabled */
  return 'business';
};

const PricingPage = () => {
  const [activeTier, setActiveTier] = React.useState({
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
    ogImage: `/images/seo/og-novu-pricing.jpg`,
  };
  return <SEO {...pageMetadata} />;
};
