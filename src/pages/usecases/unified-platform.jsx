// Imprort page-specific components
import React from 'react';

import Benefits from 'components/pages/unified-platform/benefits';
import Cta from 'components/pages/unified-platform/cta';
import Features from 'components/pages/unified-platform/features';
import Hero from 'components/pages/unified-platform/hero';
import PainRestatement from 'components/pages/unified-platform/painRestatement';
import RelatedContent from 'components/pages/unified-platform/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const unifiedPlatformPage = () => (
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
    <RelatedContent />
    {/* Section: Get Started */}
    <GetStarted />
  </Layout>
);

export default unifiedPlatformPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/unified-platform/',
    title: 'Unified Development and Product Notification Platform',
    description: 'Reach Your Audience Where They Are: Multi-Channel Notification Solutions',
  };
  return <SEO {...pageMetadata} />;
};
