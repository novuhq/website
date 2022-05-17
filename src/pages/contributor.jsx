import React from 'react';

import GetStarted from 'components/pages/home/get-started/get-started';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const ContributorPage = () => (
  <Layout>
    <GetStarted />
    <Separator backgroundColor="black" />
  </Layout>
);

export default ContributorPage;
