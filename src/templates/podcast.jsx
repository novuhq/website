/* eslint-disable react/prop-types */

import React from 'react';

import Hero from 'components/pages/podcast/hero';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';
import Subscribe from 'components/shared/subscribe';

const PodcastPage = () => (
  <Layout>
    <Hero />

    <Subscribe />
    <Separator backgroundColor="black" />
  </Layout>
);

export default PodcastPage;
