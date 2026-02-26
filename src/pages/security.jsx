import React from 'react';

import Layout from 'components/shared/layout';
import ComplianceSection from 'components/shared/reusable-sections/complience-section';
import CTA from 'components/shared/reusable-sections/cta';
import FeatureCards from 'components/shared/reusable-sections/feature-cards';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/security';

const Security = () => (
  <Layout mainClassName="overflow-hidden bg-[#05050B] pb-52 lg:pb-32 md:pb-28">
    <h1 className="sr-only">About secure notifications</h1>
    <TextWithPicture
      {...DATA.hero}
      className="sm:pt-14 [&_p]:tracking-normal"
      imageClassName="relative w-full h-[560px] !overflow-visible lg:h-[400px] md:h-[300px] sm:w-full sm-xs:!h-48"
    />
    <ComplianceSection {...DATA.compliance} />
    <SectionWithBigIcons
      {...DATA.features}
      className="mt-[191px] [&_a]:mt-auto [&_a]:pt-2.5 [&_h2]:px-20 sm:[&_h2]:px-0 [&_ul]:mt-[60px] [&_ul]:gap-y-[30px]"
    />
    <FeatureCards {...DATA.deploymentModes} className="mt-[204px]" />
    <CTA {...DATA.cta} className="mt-52 [&_ul]:mt-12" />
  </Layout>
);

export default Security;

export const Head = () => {
  const pageMetadata = {
    slug: '/security/',
    title: 'Comprehensive Security Features for Novu: Protecting Your Data and Systems',
    description:
      "Explore Novu's robust security features designed to safeguard your data and ensure seamless, secure notifications. Learn about our encryption protocols, access controls, and compliance with industry standards to protect your systems and maintain privacy.",
  };
  return <SEO {...pageMetadata} />;
};
