import React from 'react';

// Imprort page-specific components
import Features from 'components/pages/content-management/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
// import RelatedContent from 'components/pages/content-management/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';
import BENEFITS from 'data/pages/usecases/content-management/benefits';
import PAIN_RESTATEMENT from 'data/pages/usecases/content-management/pain-restatement';

const contentManagementPage = () => (
  <Layout>
    {/* Section: Hero with CTA */}
    <Hero
      title="Eliminate the content dance between development and product teams"
      description="Developers now empower product teams to safely interact with all of your notifications content, no interrupts needed."
      links={[
        {
          text: 'Create free account',
          url: 'https://dashboard.novu.co/?utm_campaign=website-usecase-contentManagement',
          target: '_blank',
        },
        {
          text: 'Book Meeting',
          url: 'https://notify.novu.co/meetings/novumeet/discovery-session?utm_campaign=usecase-CTA',
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

export default contentManagementPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/content-management/',
    title: 'Notification Content Management for Developers',
    description:
      "Simplify content management with Novu's unified platform. Empower your product teams to manage notifications without interrupting developers. Utilize code-first workflows, a no-code editor, and broad framework support including React, Vue-email, and MJML. Ensure type-safe updates and consistent branding while delivering personalized notifications across all channels. Enhance collaboration, reduce development interruptions, and maintain a seamless user experience.",
  };
  return <SEO {...pageMetadata} />;
};
