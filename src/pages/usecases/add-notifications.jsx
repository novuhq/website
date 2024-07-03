import React from 'react';

// Imprort page-specific components
import Benefits from 'components/pages/add-notifications/benefits';
import Cta from 'components/pages/add-notifications/cta';
import Features from 'components/pages/add-notifications/features';
import Hero from 'components/pages/add-notifications/hero';
import PainRestatement from 'components/pages/add-notifications/painRestatement';
// import RelatedContent from 'components/pages/add-notifications/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const addNotificationsPage = () => (
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

export default addNotificationsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/add-notifications/',
    title: 'Add Notifications to Your App',
    description: 'Notification Solutions for Developers and Product Teams',
  };
  return <SEO {...pageMetadata} />;
};
