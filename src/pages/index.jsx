import React from 'react';

import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import Layout from 'components/shared/layout';

const HomePage = () => (
  <Layout>
    <Hero />
    <HowItWorks />
  </Layout>
);

export default HomePage;
