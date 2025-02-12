import React from 'react';

import FAQ from 'components/pages/pricing/faq';
import HeroNew from 'components/pages/pricing/hero';
import PricingPlanCards from 'components/pages/pricing/pricing-plans-cards';
import PricingTable from 'components/pages/pricing/pricing-table';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SEO from 'components/shared/seo';

const activeTier = 'pro';

const PRICING_PLANS = [
  {
    title: 'Free',
    price: '$0',
    paymentPeriod: 'month',
    button: {
      text: 'Free Forever',
      theme: 'gray-outline',
      link: 'https://dashboard-v2.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
    },
    description: 'For testing and small-scale projects.',
    advantages: ['10K events/month included'],
    hasAdditionalLabel: false,
  },
  {
    title: 'Pro',
    price: '$30',
    paymentPeriod: 'month',
    button: {
      text: 'Free for 14 days',
      theme: 'white-filled',
      link: 'https://dashboard-v2.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
    },
    description:
      'Perfect for startups and indie hackers looking to add <Inbox /> and connect to Email and digest engine.',
    advantages: ['30K events/month included', '$1.20 per 1,000 additional events'],
    hasAdditionalLabel: true,
    additionalLabelText: false,
  },
  {
    title: 'Team',
    price: '$250',
    paymentPeriod: 'month',
    button: {
      text: 'Free for 14 days',
      theme: 'white-filled',
      link: 'https://dashboard-v2.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
    },
    description:
      'Ideal for teams looking to add <Inbox/> in minutes, and manage system notification experiance from one system.',
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
      link: 'https://novu.co/contact-us/?utm_campaign=ws_pricing',
    },
    description:
      'For organizations with privacy, and compliance demands. Looking to add the best OS notification technology, while maintaining flexibility.',
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
    <CtaWithForm
      className="mb-[192px] mt-[238px] text-center"
      title="You're five minutes away from your first Novu-powered notification"
      description="Create a free account, send your first notification, all before your coffee gets cold... no credit card required."
      leftItem={{
        text: 'Get started',
        link: 'https://dashboard-v2.novu.co/?utm_campaign=ws_home_cta',
      }}
      rightItem={{
        text: 'Contact us',
        link: 'https://novu.co/contact-us/?utm_campaign=ws_home_cta',
      }}
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
