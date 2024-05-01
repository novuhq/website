import React from 'react';

import Events from 'components/pages/community/events';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const CommunityPage = () => (
  <Layout className="bg-[#09050B]" headerTheme="community">
    <Events />
  </Layout>
);

export default CommunityPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/community/',
    title: 'Community - Novu',
    description:
      'Join the Novu community, contribute code, meet new friends, learn, create and innovate with us!',
  };
  return <SEO {...pageMetadata} />;
};
