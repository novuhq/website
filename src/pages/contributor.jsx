import React from 'react';

import Achievements from 'components/pages/contributor/achievements';
import Activity from 'components/pages/contributor/activity';
import Profile from 'components/pages/contributor/profile';
import GetStarted from 'components/pages/home/get-started/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const ContributorPage = () => (
  <Layout>
    <div className="safe-paddings pt-44">
      <div className="container-lg grid grid-cols-12 items-start gap-x-8">
        <Profile />
        <div className="col-span-8">
          <Achievements />
          <Separator className="py-20" backgroundColor="black" />
          <Activity />
        </div>
      </div>
    </div>
    <GetStarted />
    <Separator backgroundColor="black" />
  </Layout>
);

export default ContributorPage;
