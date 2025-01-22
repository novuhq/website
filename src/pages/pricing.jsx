import React from 'react';

import FAQ from 'components/pages/pricing/faq';
import HeroNew from 'components/pages/pricing/hero';
import PricingPlanCards from 'components/pages/pricing/pricing-plans-cards';
import PricingTable from 'components/pages/pricing/pricing-table';
import SubscribeNew from 'components/pages/pricing/subscribe-new';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import LINKS from 'constants/links';

const activeTier = 'business';

const PRICING_PLANS = [
  {
    title: 'Free',
    price: '$0',
    paymentPeriod: 'month',
    button: {
      text: 'Get started for free',
      theme: 'gray-outline',
      link: LINKS.SIGNUP,
    },
    description: 'A generous free tier for testing and evaluation, or smaller requirements.',
    advantages: ['30K events/month included'],
    hasAdditionalLabel: false,
  },
  {
    title: 'Business',
    price: '$250',
    paymentPeriod: 'month',
    button: {
      text: 'Get started for free',
      theme: 'white-filled',
      link: LINKS.SIGNUP,
    },
    description: 'Best fit for most businesses. Best fit for most businesses.',
    advantages: ['250K events/month included', '$1.20 per 1,000 additional events'],
    hasAdditionalLabel: true,
    additionalLabelText: 'Popular',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    button: {
      text: 'Contact us',
      theme: 'gray-outline',
      link: LINKS.SIGNUP,
    },
    description: 'For businesses with the most demanding notification requirements.',
    advantages: ['5M events/month included'],
    hasAdditionalLabel: false,
  },
];
const PricingPage = () => (
  <Layout mainClassName="overflow-hidden pt-16 sm:pt-14 bg-[#05050B]">
    <HeroNew />
    <PricingPlanCards plans={PRICING_PLANS} />
    <PricingTable activeTier={activeTier} />
    <FAQ />
    <SubscribeNew
      title="Subscribe to the blog updates"
      description="Novu's latest articles, right in your inbox. Keep in touch with our news and updates."
    />
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
