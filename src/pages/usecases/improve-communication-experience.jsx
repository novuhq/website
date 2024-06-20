import React from 'react';

// Imprort page-specific components
import Benefits from 'components/pages/improve-communication-experience/benefits';
import Features from 'components/pages/improve-communication-experience/features';
import Hero from 'components/pages/improve-communication-experience/hero';
import Pain_restatement from 'components/pages/improve-communication-experience/painRestatement';
import RelatedContent from 'components/pages/improve-communication-experience/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const improveCommunicationExperiencePage = () => (
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

export default improveCommunicationExperiencePage;

export const Head = () => {
  const pageMetadata = {
    slug: '/improve-user-communication-experience/',
    title: 'Unified Development and Product Notification Platform',
    description: 'Reach Your Audience Where They Are: Multi-Channel Notification Solutions',
  };
  return <SEO {...pageMetadata} />;
};
