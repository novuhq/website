import React from 'react';

import CommunityHeroes from 'components/pages/hacktoberfest/community-heroes';
import Contribute from 'components/pages/hacktoberfest/contribute';
// import Events from 'components/pages/hacktoberfest/events';
import GlobalEvents from 'components/pages/hacktoberfest/global-events';
import Hero from 'components/pages/hacktoberfest/hero';
import Issues from 'components/pages/hacktoberfest/issues';
// import Swag from 'components/pages/hacktoberfest/swag';
import FAQS from 'components/shared/faqs/Questions';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
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
  theme: 'blue',
};

const HacktoberfestPage = () => (
  <Layout>
    <Hero />
    <Contribute />
    <Issues className="mt-32 bg-gray-2 py-20 md:mt-20 sm:mt-16 sm:py-16" />
    {/* TODO: Bring this section back once the design is ready and updated */}
    {/* <Swag /> */}
    {/* <Events /> */}
    <CommunityHeroes />
    <GlobalEvents />
    <GetStarted {...GET_STARTED} />
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
