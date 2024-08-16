// Imprort page-specific components
import React from 'react';

import Features from 'components/pages/unified-platform/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
// import RelatedContent from 'components/pages/unified-platform/related-content/related-content';
// Import shared (cross-page) components
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
// import SEO component
import SEO from 'components/shared/seo';
import BENEFITS from 'data/pages/usecases/unified-platform/benefits';
import PAIN_RESTATEMENT from 'data/pages/usecases/unified-platform/pain-restatement';

const unifiedPlatformPage = () => (
  <Layout>
    {/* Section: Hero with CTA */}
    <Hero
      title="Unified product notification platform for development and product teams"
      description="One platform for all of your notification needs, streamlining how your teams work together, and your users experience notifications."
      links={[
        {
          text: 'Create free account',
          url: 'https://dashboard.novu.co/?utm_campaign=website-usecase-unifiedPlatform',
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

export default unifiedPlatformPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/unified-platform/',
    title: 'Unified Development and Product Notification Platform',
    description:
      "Unify your team's notification workflows with Novu's comprehensive platform. Streamline communication with centralized content, type-safe schemas, and reusable components. Empower both developers and product teams to collaborate seamlessly using code-first and no-code tools. Enhance efficiency, reduce friction, and deliver consistent, branded user experiences across all channels. Accelerate development, minimize interruptions, and maintain full visibility and control over notification management.",
  };
  return <SEO {...pageMetadata} />;
};
