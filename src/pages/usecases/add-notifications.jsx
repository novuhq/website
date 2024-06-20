import React from 'react';

// Imprort page-specific components
import Benefits from 'components/pages/add-notifications/benefits';
import Features from 'components/pages/add-notifications/features';
import Hero from 'components/pages/add-notifications/hero';
import Pain_restatement from 'components/pages/add-notifications/painRestatement';
import RelatedContent from 'components/pages/add-notifications/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const addNotificationsPage = () => (
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

export default addNotificationsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/add-notifications/',
    title: 'Multi-Channel Notifications',
    description: 'Reach Your Audience Where They Are: Multi-Channel Notification Solutions',
  };
  return <SEO {...pageMetadata} />;
};
