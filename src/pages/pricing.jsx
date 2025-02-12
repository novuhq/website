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
      text: 'Start Building',
      theme: 'gray-outline',
      link: 'https://dashboard-v2.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
    },
    description: 'Start for free. Essential features, no limits on subscribers.',
    advantages: [
      '10K events/month included',
      'Multi-Channel Support: Email, In-app, SMS, Chat, Push',
      'Unlimited Subscribers',
      'Up to 20 Workflows',
      '2 Environments',
      'Unlimited Provider Integrations',
      'Activity Feed Retention: 24 hours',
      'Up to 3 Team Members',
    ],
    hasAdditionalLabel: false,
  },
  {
    title: 'Pro',
    price: '$30',
    paymentPeriod: 'month',
    button: {
      text: 'Start Free Trial',
      theme: 'gray-outline',
      link: 'https://dashboard-v2.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
    },
    description: 'Go pro. More scale, better retention, no branding.',
    advantages: [
      'All in Free, plus...',
      '30K events/month included',
      'Activity Feed Retention: 7 days',
      'Remove Novu Branding',
    ],
    hasAdditionalLabel: true,
    additionalLabelText: false,
  },
  {
    title: 'Team',
    price: '$250',
    paymentPeriod: 'month',
    button: {
      text: 'Start Free Trial',
      theme: 'white-filled',
      link: 'https://dashboard-v2.novu.co/auth/sign-up?utm_campaign=ws_pricing',
      target: '_blank',
    },
    description: 'For growing teams. Higher limits, full control.',
    advantages: [
      'All in Pro, plus...',
      '250K events/month included',
      'Up to 10 Environments',
      'Activity Feed Retention: 90 days',
      'Unlimited Workflows',
      'Unlimited Team Members',
    ],
    hasAdditionalLabel: true,
    additionalLabelText: 'Best Offer',
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    button: {
      text: 'Contact us',
      theme: 'gray-outline',
      link: 'https://novu.co/contact-us/?utm_campaign=ws_pricing',
    },
    description: 'Unlimited power. Built for scale.',
    advantages: [
      'All in Team, plus...',
      '5M events/month included',
      'Unlimited Environments',
      'Unlimited Activity Feed Retention',
    ],
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
