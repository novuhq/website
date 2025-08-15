import React from 'react';

import CommunityHeroes from 'components/pages/hacktoberfest/community-heroes';
import Contribute from 'components/pages/hacktoberfest/contribute';
import GlobalEvents from 'components/pages/hacktoberfest/global-events';
import Hero from 'components/pages/hacktoberfest/hero';
import Swag from 'components/pages/hacktoberfest/swag';
import FAQS from 'components/shared/faqs/Questions';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/hacktoberfest';

const HacktoberfestPage = () => (
  <Layout>
    <Hero />
    <Contribute />
    <Swag />
    <GlobalEvents />
    <CommunityHeroes />
    <GetStarted {...DATA.getStarted} />
    <FAQS />
  </Layout>
);

export default HacktoberfestPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Hacktoberfest',
    description:
      'Whether it’s your first time — or your ninth — it’s almost time to hack out four pristine pull/merge requests and complete your mission for open source.',
    slug: '/hacktoberfest/',
  };
  return <SEO {...pageMetadata} />;
};
