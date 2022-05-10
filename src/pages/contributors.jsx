import React from 'react';

import Achievments from 'components/pages/contributors/achievments';
import Hero from 'components/pages/contributors/hero';
import HowItWorks from 'components/pages/contributors/how-it-works/how-it-works';
import GetStarted from 'components/pages/home/get-started/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const HomePage = () => (
  <Layout>
    <Hero />
    <Achievments />
    <HowItWorks />
    <GetStarted />
    <Separator backgroundColor="black" />
  </Layout>
);

export default HomePage;
