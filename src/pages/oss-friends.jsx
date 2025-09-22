import React from 'react';

import Hero from 'components/pages/oss-friends/hero';
import GetStarted from 'components/shared/get-started';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const OssFriendsPage = () => (
  <Layout>
    <Hero />
    <GetStarted />
  </Layout>
);

export default OssFriendsPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/oss-friends/',
    title: 'Our Open-source Friends - Novu',
    description: 'Our open-source friends and partners',
  };
  return <SEO {...pageMetadata} />;
};
