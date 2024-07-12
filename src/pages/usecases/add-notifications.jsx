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
    title: 'Add Notifications to Your App | Novu Notifications Infrastructure',
    description:
      "Easily add notifications to your app with Novu's robust infrastructure and ready-to-use components. Streamline notification delivery across multiple channels with broad framework support, type-safe workflows, and a no-code editor. Ensure reliability and scalability, integrate popular providers, and maintain full visibility and compliance. Simplify debugging and enhance innovation with a developer-friendly environment.",
  };
  return <SEO {...pageMetadata} />;
};
