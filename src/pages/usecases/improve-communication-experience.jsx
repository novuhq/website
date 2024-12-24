import React from 'react';

// Imprort page-specific components
import Features from 'components/pages/improve-communication-experience/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
// import RelatedContent from 'components/pages/improve-communication-experience/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';
import BENEFITS from 'data/pages/usecases/improve-communication-experience/benefits';
import PAIN_RESTATEMENT from 'data/pages/usecases/improve-communication-experience/pain-restatement';

const improveCommunicationExperiencePage = () => (
  <Layout>
    {/* Section: Hero with CTA */}
    <Hero
      title="Improve end user communication experiences"
      description="Increase engagement with optimized notification experiences tailored to user interactions and preferences."
      links={[
        {
          text: 'Create free account',
          url: 'https://dashboard-v2.novu.co/?utm_campaign=usecase-CTA',
          target: '_blank',
        },
        {
          text: 'Book Meeting',
          url: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=website-usecase-improveComms',
          target: '_blank',
        },
      ]}
    />
    {/* Section: Supporting features */}
    <Features />
    {/* Section: Pain Restatement */}
    <PainRestatement
      title={PAIN_RESTATEMENT.title}
      description={PAIN_RESTATEMENT.description}
      cards={PAIN_RESTATEMENT.cards}
    />
    {/* Section: Benefits */}
    <Benefits
      title={BENEFITS.title}
      description={BENEFITS.description}
      sections={BENEFITS.sections}
    />
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
