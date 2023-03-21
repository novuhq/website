import React from 'react';

import Timeline from 'components/pages/timeline/timeline';
import SEO from 'components/shared/seo';

import Layout from '../components/shared/layout';

const TimelinePage = () => (
  <Layout>
    <Timeline />
  </Layout>
);

export default TimelinePage;

export const Head = () => {
  const pageMetadata = {
    slug: '/timeline/',
    title: 'Novu 2022 Events',
    ogImage: `/images/social-preview-timeline.jpg`,
  };
  return <SEO {...pageMetadata} />;
};
