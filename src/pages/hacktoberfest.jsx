import React from 'react';

import Hero from 'components/pages/hacktoberfest/hero';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';

const HacktoberfestPage = () => (
  <Layout>
    <Hero />
    <GetStarted />
  </Layout>
);

export default HacktoberfestPage;
