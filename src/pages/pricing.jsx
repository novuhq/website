import React from 'react';

import FAQ from 'components/pages/pricing/faq';
import HeroNew from 'components/pages/pricing/hero';
import PricingPlanCards from 'components/pages/pricing/pricing-plans-cards';
import PricingTable from 'components/pages/pricing/pricing-table';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/pricing';

const PricingPage = () => (
  <Layout mainClassName="overflow-hidden pt-16 sm:pt-14 bg-[#05050B]">
    <HeroNew />
    <PricingPlanCards plans={DATA.pricingPlans} />
    <PricingTable activeTier={DATA.activeTier} />
    <FAQ />
    <CtaWithForm {...DATA.cta} className="mb-[192px] mt-[238px] text-center" />
  </Layout>
);

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
