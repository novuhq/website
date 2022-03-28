import React from 'react';

import Community from 'components/pages/home/community/community';
import ComponentBased from 'components/pages/home/component-based';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import Languages from 'components/pages/home/languages/languages';
import Logos from 'components/pages/home/logos';
import NotificationCenter from 'components/pages/home/notification-center';
import SimpleUse from 'components/pages/home/simple-use';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const HomePage = () => (
  <Layout>
    <Hero />
    <Logos />
    <HowItWorks />
    <Separator />
    <Features />
    <NotificationCenter />
    <Separator />
    <Community />
    <ComponentBased />
    <SimpleUse />
    <Separator />
    <Languages />
  </Layout>
);

export default HomePage;
