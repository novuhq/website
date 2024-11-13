import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from 'components/shared/layout';
import FeatureCards from 'components/shared/reusable-sections/feature-cards';
import SectionWithCards from 'components/shared/reusable-sections/section-with-cards';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SEO from 'components/shared/seo';

const FEATURE_CARDS = [
  {
    title: 'Digest',
    description:
      'BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.',
    linkTitle: 'Visit boxyhq',
    linkUrl: 'https://boxyhq.com',
  },
  {
    title: 'User preferences',
    description:
      'Cal.com is a scheduling tool that helps you schedule meetings without the back-and-forth emails.',
    linkTitle: 'Visit cal.com',
    linkUrl: 'https://cal.com',
  },
  {
    title: 'Monitoring',
    description:
      'Centralize community, product, and customer data to understand which companies are engaging with your open source project.',
    linkTitle: 'Visit Crowd.dev',
    linkUrl: 'https://crowd.dev',
  },
];

const FEATURE_CARDS_2 = [
  {
    title: 'Digest',
    description:
      'BoxyHQ’s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.',
    linkTitle: 'Visit boxyhq',
    linkUrl: 'https://boxyhq.com',
  },
  {
    title: 'Monitoring',
    description:
      'Centralize community, product, and customer data to understand which companies are engaging with your open source project.',
    linkTitle: 'Visit Crowd.dev',
    linkUrl: 'https://crowd.dev',
  },
];

const SECTION_WITH_FORM_LEFT = {
  title: 'Getting started with Novu',
  description:
    "Do any of these questions describe you? If so, please fill the form out, and we'll respond with next steps.",
  features: [
    {
      title: 'Non-technical users',
      description: 'Do you prefer a UI when building out workflows?',
    },
    {
      title: 'Backend stack',
      description:
        'Is your backend comprised of something other than Javascript (NodeJS, Next.Js, etc.)?',
    },
    {
      title: 'Not you? Keep reading below.',
      description:
        'Our code-first workflow approach insanely powerful. Keep reading to see how you can get started.',
    },
  ],
  formPosition: 'left',
  hubspotFormId: '6ec81561-2562-477e-92a3-dcb06c35f510',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'first-form',
};

const SECTION_WITH_FORM_RIGHT = {
  title: 'Getting started with Novu',
  description:
    "Do any of these questions describe you? If so, please fill the form out, and we'll respond with next steps.",
  features: [
    {
      title: 'Non-technical users',
      description: 'Do you prefer a UI when building out workflows?',
    },
    {
      title: 'Backend stack',
      description:
        'Is your backend comprised of something other than Javascript (NodeJS, Next.Js, etc.)?',
    },
    {
      title: 'Not you? Keep reading below.',
      description:
        'Our code-first workflow approach insanely powerful. Keep reading to see how you can get started.',
    },
  ],
  formPosition: 'right',
  hubspotFormId: 'e7e1ff66-ecd4-4c5c-a670-0de73dae69d4',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'second-form',
};

const SECTION_WITH_CARDS = [
  {
    image: (
      <StaticImage
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="lazy"
        width={384}
        height={214}
      />
    ),
    title: 'Missed Updates',
    description:
      'Without timely notifications, users may miss critical updates or events related to their interests or activities, which may lead to frustration.',
  },
  {
    image: (
      <StaticImage
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="lazy"
        width={384}
        height={214}
      />
    ),
    title: 'Irrelevant Notifications',
    description:
      'Poorly targeted or excessive notifications can overwhelm users, causing annoyance and distraction from their intended tasks or activities.',
  },
  {
    image: (
      <StaticImage
        src="../../images/placeholder-image.jpg"
        alt="Placeholder image"
        loading="lazy"
        width={384}
        height={214}
      />
    ),
    title: 'Negative Brand Perception',
    description:
      'Poorly managed notifications can reflect negatively on the brand, portraying it as intrusive, unorganized, or unresponsive to user needs and preferences.',
  },
];

const ReusableComponents2 = () => (
  <Layout mainClassName="overflow-hidden pt-16 bg-[#05050B] reusable-components">
    <FeatureCards
      title="Loved by engineers from around the world"
      description="Explore tweets from engineers worldwide and see why they're fans of our company's innovations."
      cards={FEATURE_CARDS}
    />
    <FeatureCards
      title="Loved by engineers from around the world"
      description="Explore tweets from engineers worldwide and see why they're fans of our company's innovations."
      cards={FEATURE_CARDS_2}
      columns={2}
    />
    <SectionWithForm {...SECTION_WITH_FORM_RIGHT} withBlur />
    <SectionWithForm {...SECTION_WITH_FORM_LEFT} withBlur />
    <SectionWithCards
      title="Seamlessly integrate with existing services and legacy systems to facilitate adoption"
      cards={SECTION_WITH_CARDS}
    />
  </Layout>
);

export default ReusableComponents2;

export const Head = () => {
  const pageMetadata = {
    slug: '/reusable-components/',
    title: 'Novu - Reusable Components Examples',
    description: 'Reusable components examples',
  };
  return <SEO {...pageMetadata} />;
};
