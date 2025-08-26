import React from 'react';

import Features from 'components/pages/improve-communication-experience/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/usecases/improve-communication-experience';

const improveCommunicationExperiencePage = () => (
  <Layout>
    <Hero {...DATA.hero} />
    <Features />
    <PainRestatement {...DATA.painRestatement} />
    <Benefits {...DATA.benefits} />
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
