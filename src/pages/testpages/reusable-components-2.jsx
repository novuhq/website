import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from 'components/shared/layout';
import ComplianceSection from 'components/shared/reusable-sections/complience-section';
import FeatureCards from 'components/shared/reusable-sections/feature-cards';
import SectionWithCards from 'components/shared/reusable-sections/section-with-cards';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SEO from 'components/shared/seo';
import gdprWhiteIcon from 'images/reusable-sections/compliance-section/gdpr-white.svg';
import gdprIcon from 'images/reusable-sections/compliance-section/gdpr.svg';
import hipaaWhiteIcon from 'images/reusable-sections/compliance-section/hipaa-white.svg';
import hipaaIcon from 'images/reusable-sections/compliance-section/hipaa.svg';
import isoWhiteIcon from 'images/reusable-sections/compliance-section/iso-white.svg';
import isoIcon from 'images/reusable-sections/compliance-section/iso.svg';
import soc2WhiteIcon from 'images/reusable-sections/compliance-section/soc-2-white.svg';
import soc2Icon from 'images/reusable-sections/compliance-section/soc-2.svg';

const COMPLIANCE_SECTION = [
  {
    title: 'SOC2 Type II',
    image: soc2Icon,
  },
  {
    title: 'HIPAA',
    image: hipaaIcon,
  },
  {
    title: 'ISO 27001:2013',
    image: isoIcon,
  },
  {
    title: 'GDPR',
    image: gdprIcon,
  },
];

const COMPLIANCE_SECTION_WHITE = [
  {
    title: 'SOC2 Type II',
    image: soc2WhiteIcon,
  },
  {
    title: 'HIPAA',
    image: hipaaWhiteIcon,
  },
  {
    title: 'ISO 27001:2013',
    image: isoWhiteIcon,
  },
  {
    title: 'GDPR',
    image: gdprWhiteIcon,
  },
];

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
  title: 'SectionWithForm',
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
  title: 'SectionWithForm',
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
    linkText: 'Learn more',
    linkUrl: '/',
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
    linkText: 'Learn more',
    linkUrl: '/',
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
    linkText: 'Learn more',
    linkUrl: '/',
  },
];

const ReusableComponents2 = () => (
  <Layout mainClassName="overflow-hidden pt-16 bg-[#05050B] reusable-components pb-[118px] lg:pb-[104px] md:pb-[100px]">
    <FeatureCards
      title="FeatureCards"
      description="Explore tweets from engineers worldwide and see why they're fans of our company's innovations."
      cards={FEATURE_CARDS}
    />
    <FeatureCards
      title="FeatureCards"
      description="Explore tweets from engineers worldwide and see why they're fans of our company's innovations."
      cards={FEATURE_CARDS_2}
      columns={2}
    />
    <SectionWithForm {...SECTION_WITH_FORM_RIGHT} withBlur />
    <SectionWithForm {...SECTION_WITH_FORM_LEFT} withBlur />
    <SectionWithCards title="SectionWithCards" cards={SECTION_WITH_CARDS} />
    <SectionWithCards title="SectionWithCards" cards={SECTION_WITH_CARDS} withLinks />
    <ComplianceSection items={COMPLIANCE_SECTION} title="ComplianceSection" theme="colored" />
    <ComplianceSection items={COMPLIANCE_SECTION_WHITE} title="ComplianceSection" theme="white" />
    <ComplianceSection
      items={COMPLIANCE_SECTION.slice(0, 3)}
      title="ComplianceSection"
      theme="colored"
      columns={3}
    />
    <ComplianceSection
      items={COMPLIANCE_SECTION_WHITE.slice(0, 3)}
      title="ComplianceSection"
      theme="white"
      columns={3}
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
