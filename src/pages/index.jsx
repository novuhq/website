import React from 'react';

import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import Logos from 'components/pages/home/logos';
import Layout from 'components/shared/layout';

const HomePage = () => (
  <Layout>
    <Hero />
    <Logos />
    <HowItWorks />
  </Layout>
);

export default HomePage;
