import React from 'react';

// Imprort page-specific components
import Benefits from 'components/pages/multi-channel-notifications/benefits';
import Features from 'components/pages/multi-channel-notifications/features';
import Hero from 'components/pages/multi-channel-notifications/hero';
import Pain_restatement from 'components/pages/multi-channel-notifications/painRestatement';
import RelatedContent from 'components/pages/multi-channel-notifications/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const MultiChannelNotificationsPage = () => (
  <Layout>
    {/* Section: Header */}
    <Hero />
    {/* Section: Pain Restatement */}
    <Pain_restatement />
    {/* Section: Benefits */}
    <Benefits />
    {/* Section: Supporting features */}
    <Features />
    {/* Section: Related Content */}
    <RelatedContent />
    {/* Section: Get Started */}
    <GetStarted />
  </Layout>
);

export default MultiChannelNotificationsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/multi-channel-notifications/',
    title: 'Multi-Channel Notifications that delight users',
    description:
      'Reach Your Audience Where They Are: Multi-Channel Notification Infrastructure Solutions',
  };
  return <SEO {...pageMetadata} />;
};
