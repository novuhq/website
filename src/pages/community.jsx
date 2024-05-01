import React from 'react';

import Events from 'components/pages/community/events';
import GetInvolved from 'components/pages/community/get-involved';
import Hero from 'components/pages/community/hero';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const CommunityPage = () => (
  <Layout className="bg-[#09050B]" headerTheme="community">
    <div className="relative overflow-hidden">
      <Hero />
      <GetInvolved />
    </div>
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
