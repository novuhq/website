import { axios } from 'helpers/axios';
import React from 'react';

import CommunityHeroes from 'components/pages/hacktoberfest/community-heroes';
import Contribute from 'components/pages/hacktoberfest/contribute';
import Events from 'components/pages/hacktoberfest/events';
import GlobalEvents from 'components/pages/hacktoberfest/global-events';
import Hero from 'components/pages/hacktoberfest/hero';
import GetStarted from 'components/shared/get-started';
import Issues from 'components/shared/issues';
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
  theme: 'blue',
};

const SEO = {
  title: 'Novu - Hacktoberfest',
  description:
    'Whether it’s your first time — or your ninth — it’s almost time to hack out four pristine pull/merge requests and complete your mission for open source.',
  slug: '/hacktoberfest/',
};

const HacktoberfestPage = ({ serverData: { issues } }) => (
  <Layout seo={SEO}>
    <Hero />
    <Contribute />
    <Issues className="mt-32 bg-gray-2 py-20 md:mt-20 sm:mt-16 sm:py-16" issues={issues} />
    <Events />
    <GlobalEvents />
    <CommunityHeroes />
    <GetStarted {...GET_STARTED} />
  </Layout>
);

export default HacktoberfestPage;

export async function getServerData() {
  try {
    const issues = await axios.get(`/issues`);

    return {
      props: {
        issues: issues.data.issues,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
