import React from 'react';

import Community from 'components/pages/home/community/community';
import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import Logos from 'components/pages/home/logos';
import NotificationCenter from 'components/pages/home/notification-center';
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
  </Layout>
);

export default HomePage;
