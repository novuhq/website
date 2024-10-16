import React from 'react';

import Layout from 'components/shared/layout';
import FeatureCards from 'components/shared/reusable-sections/feature-cards';

const cards = [
  {
    title: 'Digest',
    description:
      'BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.',
    linkTitle: 'Visit boxyhq',
    link: 'https://boxyhq.com',
  },
  {
    title: 'User preferences',
    description:
      'Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.',
    linkTitle: 'Visit cal.com',
    link: 'https://cal.com',
  },
  {
    title: 'Monitoring',
    description:
      'Centralize community, product, and customer data to understand which companies are engaging with your open source project.',
    linkTitle: 'Visit Crowd.dev',
    linkUrl: 'https://crowd.dev',
  },
];

const cards2 = cards.slice(0, 2);

const ReusableComponents2 = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <FeatureCards
      title="Loved by engineers from around the world"
      description="Explore tweets from engineers worldwide and see why they're fans of our company's innovations."
      cards={cards}
    />
    <FeatureCards
      title="Loved by engineers from around the world"
      description="Explore tweets from engineers worldwide and see why they're fans of our company's innovations."
      cards={cards2}
      columns={2}
    />
  </Layout>
);

export default ReusableComponents2;
