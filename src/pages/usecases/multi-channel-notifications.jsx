import React from 'react';

// Imprort page-specific components
import Benefits from 'components/pages/multi-channel-notifications/benefits';
import Cta from 'components/pages/multi-channel-notifications/cta';
import Features from 'components/pages/multi-channel-notifications/features';
import Hero from 'components/pages/multi-channel-notifications/hero';
import PainRestatement from 'components/pages/multi-channel-notifications/painRestatement';
// import RelatedContent from 'components/pages/multi-channel-notifications/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const MultiChannelNotificationsPage = () => (
  <Layout>
    {/* Section: Header */}
    <Hero />
    {/* Section: Call To Action */}
    <Cta />
    {/* Section: Supporting features */}
    <Features />
    {/* Section: Pain Restatement */}
    <PainRestatement />
    {/* Section: Benefits */}
    <Benefits />
    {/* Section: Related Content */}
    {/* <RelatedContent /> */}
    {/* Section: Get Started */}
    <GetStarted />
  </Layout>
);

export default MultiChannelNotificationsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/multi-channel-notifications/',
    title: 'Multi-Channel Notifications',
    description: 'Reach Your Audience Where They Are: Multi-Channel Notification Solutions',
  };
  return <SEO {...pageMetadata} />;
};
