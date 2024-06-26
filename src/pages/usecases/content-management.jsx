import React from 'react';

// Imprort page-specific components
import Benefits from 'components/pages/content-management/benefits';
import Cta from 'components/pages/content-management/cta';
import Features from 'components/pages/content-management/features';
import Hero from 'components/pages/content-management/hero';
import PainRestatement from 'components/pages/content-management/painRestatement';
import RelatedContent from 'components/pages/content-management/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const contentManagementPage = () => (
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

export default contentManagementPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/content-management/',
    title: 'Notification Content Management for Developers',
    description: 'Empower your product teams to safely interact with notitfcations content.',
  };
  return <SEO {...pageMetadata} />;
};
