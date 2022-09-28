import { axios } from 'helpers/axios';
import React from 'react';

import Issues from 'components/pages/contributors/issues';
import Hero from 'components/pages/hacktoberfest/hero';
import CommunityHeroes from 'components/shared/community-heroes';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';

const COMMUNITY_HEROES = {
  titleSize: 'xl',
  titleTag: 'h2',
  titleClassName: 'font-normal',
  description:
    "Novu is more than just a notification system. It's a community. We want to let other people achieve a better status in our community by offering incentives unrelated to money.",
  buttonUrl: '/contributors',
  buttonText: 'How it works',
  bgTheme: 'blue',
};

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

const HacktoberfestPage = ({ serverData: { issues } }) => (
  <Layout>
    <Hero />
    <Issues className="mt-32 bg-gray-2" issues={issues} />
    <CommunityHeroes className="pt-20" {...COMMUNITY_HEROES} />
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
