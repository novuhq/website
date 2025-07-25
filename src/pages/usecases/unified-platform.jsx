import React from 'react';

import Features from 'components/pages/unified-platform/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/usecases/unified-platform';

const unifiedPlatformPage = () => (
  <Layout>
    <Hero {...DATA.hero} />
    <Features />
    <PainRestatement {...DATA.painRestatement} />
    <Benefits {...DATA.benefits} />
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
