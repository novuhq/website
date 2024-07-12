import React from 'react';

// Imprort page-specific components
import Benefits from 'components/pages/improve-communication-experience/benefits';
import Cta from 'components/pages/improve-communication-experience/cta';
import Features from 'components/pages/improve-communication-experience/features';
import Hero from 'components/pages/improve-communication-experience/hero';
import PainRestatement from 'components/pages/improve-communication-experience/painRestatement';
// import RelatedContent from 'components/pages/improve-communication-experience/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';

const improveCommunicationExperiencePage = () => (
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

export default improveCommunicationExperiencePage;

export const Head = () => {
  const pageMetadata = {
    slug: '/improve-user-communication-experience/',
    title: 'Improve User Communication Experience',
    description:
      "Enhance user communication with Novu's optimized notification experiences. Tailor interactions based on user preferences, timezones, and languages. Aggregate events into timely notifications, utilize multi-channel delivery, and centralize content management for seamless collaboration. Improve engagement, reduce notification fatigue, and maintain consistent branding. Ensure your notifications are relevant, personalized, and accessible across preferred channels.",
  };
  return <SEO {...pageMetadata} />;
};
