import React from 'react';

import Features from 'components/pages/add-notifications/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/usecases/add-notifications';

const addNotificationsPage = () => (
  <Layout>
    <Hero {...DATA.hero} />
    <Features />
    <PainRestatement {...DATA.painRestatement} />
    <Benefits {...DATA.benefits} />
    <GetStarted />
  </Layout>
);

export default addNotificationsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/usecases/add-notifications/',
    title: 'Add Notifications to Your App | Novu Notifications Infrastructure',
    description:
      "Easily add notifications to your app with Novu's robust infrastructure and ready-to-use components. Streamline notification delivery across multiple channels with broad framework support, type-safe workflows, and a no-code editor. Ensure reliability and scalability, integrate popular providers, and maintain full visibility and compliance. Simplify debugging and enhance innovation with a developer-friendly environment.",
  };
  return <SEO {...pageMetadata} />;
};
