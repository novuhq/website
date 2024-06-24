import React from 'react';

// Imprort page-specific components
import Benefits from 'components/pages/unified-platfrom/benefits';
import Cta from 'components/pages/unified-platfrom/cta';
import Features from 'components/pages/unified-platfrom/features';
import Hero from 'components/pages/unified-platfrom/hero';
import Pain_restatement from 'components/pages/unified-platfrom/painRestatement';
import RelatedContent from 'components/pages/unified-platfrom/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const unifiedPlatfromPage = () => (
  <Layout>
    {/* Section: Header */}
    <Hero />
    {/* Section: Call To Action */}
    <Cta />
    {/* Section: Supporting features */}
    <Features />
    {/* Section: Pain Restatement */}
    <Pain_restatement />
    {/* Section: Benefits */}
    <Benefits />
    {/* Section: Related Content */}
    <RelatedContent />
    {/* Section: Get Started */}
    <GetStarted />
  </Layout>
);

export default unifiedPlatfromPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/unified-platfrom/',
    title: 'Unified Development and Product Notification Platform',
    description: 'Reach Your Audience Where They Are: Multi-Channel Notification Solutions',
  };
  return <SEO {...pageMetadata} />;
};
