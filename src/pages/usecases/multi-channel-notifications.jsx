import React from 'react';

import Features from 'components/pages/multi-channel-notifications/features';
import Benefits from 'components/pages/use-cases/benefits';
import Hero from 'components/pages/use-cases/hero';
import PainRestatement from 'components/pages/use-cases/pain-restatement';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/usecases/multi-channel-notifications';

const MultiChannelNotificationsPage = () => (
  <Layout>
    <Hero {...DATA.hero} />
    <Features />
    <PainRestatement {...DATA.painRestatement} />
    <Benefits {...DATA.benefits} />
    <GetStarted />
  </Layout>
);

export default MultiChannelNotificationsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/usecases/multi-channel-notifications/',
    title: 'Multi-Channel Notifications',
    description:
      "Boost user engagement and streamline notifications with Novu's multi-channel notifications. Effortlessly integrate email, SMS, push, chat, and in-app notifications into your app with centralized content management and extensive provider integrations. Enhance visibility, optimize strategies, and ensure seamless user experiences. Simplify development, reduce costs, and eliminate friction between teams.",
  };
  return <SEO {...pageMetadata} />;
};
