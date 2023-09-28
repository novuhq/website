import React from 'react';

import Community from 'components/pages/home/community/community';
import ComponentBased from 'components/pages/home/component-based';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import Languages from 'components/pages/home/languages/languages';
import Logos from 'components/pages/home/logos';
import NotificationCenter from 'components/pages/home/notification-center';
import Reviews from 'components/pages/home/reviews';
import SimpleUse from 'components/pages/home/simple-use';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

const HomePage = () => (
  <Layout>
    <Hero />
    <Logos />
    <HowItWorks />
    <Separator backgroundColor="black" />
    <Features />
    <NotificationCenter />
    <Separator backgroundColor="gray" />
    <Community />
    <ComponentBased />
    <SimpleUse />
    <Separator backgroundColor="gray" />
    <Languages />
    <Reviews />
    <GetStarted />
    <Separator backgroundColor="black" />
  </Layout>
);

export default HomePage;

export const Head = () => <SEO />;
