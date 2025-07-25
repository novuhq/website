import React from 'react';

import Layout from 'components/shared/layout';
import ComplianceSection from 'components/shared/reusable-sections/complience-section';
import FeatureCards from 'components/shared/reusable-sections/feature-cards';
import SectionWithCards from 'components/shared/reusable-sections/section-with-cards';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/testpages/reusable-components-2';

const ReusableComponents2 = () => (
  <Layout mainClassName="overflow-hidden pt-16 bg-[#05050B] reusable-components pb-[118px] lg:pb-[104px] md:pb-[100px]">
    <FeatureCards {...DATA.featureCards} />
    <FeatureCards {...DATA.featureCards2Columns} />
    <SectionWithForm {...DATA.sectionWithFormRight} withBlur />
    <SectionWithForm {...DATA.sectionWithFormLeft} withBlur />
    <SectionWithCards {...DATA.sectionWithCards} />
    <ComplianceSection {...DATA.complianceSectionColored} />
    <ComplianceSection {...DATA.complianceSectionWhite} />
    <ComplianceSection {...DATA.complianceSectionColoredSmall} />
    <ComplianceSection {...DATA.complianceSectionWhiteSmall} />
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
