import { axios } from 'helpers/axios';
import React from 'react';

import Achievments from 'components/pages/contributors/achievments';
import Hero from 'components/pages/contributors/hero';
import HowItWorks from 'components/pages/contributors/how-it-works/how-it-works';
import Issues from 'components/pages/contributors/issues';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const ContributorsPage = ({
  serverData: {
    contributors: { list },
    issues,
  },
}) => (
  <Layout>
    <Hero />
    <Achievments list={list} />
    <HowItWorks />
    <Issues issues={issues} />
    <GetStarted />
    <Separator backgroundColor="black" />
  </Layout>
);

export default ContributorsPage;

/* eslint-disable-next-line consistent-return */
export async function getServerData() {
  try {
    const contributors = await axios.get(`/contributors`);
    const issues = await axios.get(`/issues`);

    return {
      props: {
        contributors: contributors.data,
        issues: issues.data.issues,
      },
    };
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.log(err);
  }
}

export { Head } from 'components/pages/contributors/contributors-head/contributors-head';
