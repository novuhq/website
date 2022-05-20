import React from 'react';

import Achievements from 'components/pages/contributor/achievements';
import Activity from 'components/pages/contributor/activity';
import Profile from 'components/pages/contributor/profile';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const SEO = {
  title: 'Novu - Contributor',
  description:
    'The ultimate library for managing multi-channel transactional notifications with a single API.',
  slug: 'contributor',
  // TODO: this value allows you not to index the page in search engines, once the page is ready remove this value
  preventIndexing: true,
};

const ContributorPage = () => (
  <Layout seo={SEO}>
    <div className="safe-paddings pt-44 md:pt-30 sm:pt-22">
      <div className="container-lg grid grid-cols-12 items-start gap-x-8 lg:gap-x-7 md:flex md:flex-col md:gap-x-0">
        <Profile />
        <div className="col-span-8">
          <Achievements />
          <Separator className="py-20 px-0 sm:py-16" backgroundColor="black" />
          <Activity />
        </div>
      </div>
    </div>
    <GetStarted />
    <Separator backgroundColor="black" />
  </Layout>
);

export default ContributorPage;
