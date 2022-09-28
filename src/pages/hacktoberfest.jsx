import React from 'react';

import Hero from 'components/pages/hacktoberfest/hero';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';

const GET_STARTED = {
  title: 'Join to our community',
  leftTitle: 'Twitter',
  leftDescription: 'We’d love to stay connect with you.',
  leftButtonLink: LINKS.twitter,
  leftButtonText: 'Follow us on twitter',
  rightTitle: 'Discord',
  rightDescription: 'Join our community and get help from our team.',
  rightButtonLink: LINKS.discord,
  rightButtonText: 'Join the Novu discord',
  themeClassName: 'get-started-blue-gradient-multicolor',
};

const HacktoberfestPage = () => (
  <Layout>
    <Hero />
    <GetStarted {...GET_STARTED} />
  </Layout>
);

export default HacktoberfestPage;
