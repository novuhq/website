import React from 'react';

// Imprort page-specific components
import Features from 'components/pages/add-notifications/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
// import RelatedContent from 'components/pages/add-notifications/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';
import BENEFITS from 'data/pages/usecases/add-notifications/benefits';
import PAIN_RESTATEMENT from 'data/pages/usecases/add-notifications/pain-restatement';

const addNotificationsPage = () => (
  <Layout>
    {/* Section: Hero with CTA */}
    <Hero
      title="Test in minutes, go to prod before dinner"
      description="Ship notifications in your app with production-ready infrastructure and out-of-the-box components."
      links={[
        {
          text: 'Create free account',
          url: 'https://dashboard.novu.co/?utm_campaign=website-usecase-addNotification',
          target: '_blank',
        },
        {
          text: 'Book Meeting',
          url: 'https://notify.novu.co/meetings/novumeet/discovery-session?utm_campaign=website-usecase-addNotification',
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
