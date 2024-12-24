import React from 'react';

// Imprort page-specific components
import Features from 'components/pages/multi-channel-notifications/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
// import RelatedContent from 'components/pages/multi-channel-notifications/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';
import BENEFITS from 'data/pages/usecases/multi-channel-notifications/benefits';
import PAIN_RESTATEMENT from 'data/pages/usecases/multi-channel-notifications/pain-restatement';

const MultiChannelNotificationsPage = () => (
  <Layout>
    {/* Section: Hero with CTA */}
    <Hero
      title="Expand your reach with multi-channel notifications"
      description="Add new notification channels to your app faster than you can brew a pot of coffee."
      links={[
        {
          text: 'Create free account',
          url: 'https://dashboard-v2.novu.co/?utm_campaign=usecase-CTA',
          target: '_blank',
        },
        {
          text: 'Book Meeting',
          url: 'https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=website-usecase-multiChannel',
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

export default MultiChannelNotificationsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/multi-channel-notifications/',
    title: 'Multi-Channel Notifications',
    description:
      "Boost user engagement and streamline notifications with Novu's multi-channel notifications. Effortlessly integrate email, SMS, push, chat, and in-app notifications into your app with centralized content management and extensive provider integrations. Enhance visibility, optimize strategies, and ensure seamless user experiences. Simplify development, reduce costs, and eliminate friction between teams.",
  };
  return <SEO {...pageMetadata} />;
};
