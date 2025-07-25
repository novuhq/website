import React from 'react';

import Bento from 'components/shared/bento';
import Layout from 'components/shared/layout';
import CodeSectionNew from 'components/shared/reusable-sections/code-section-new';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SectionWithCards from 'components/shared/reusable-sections/section-with-cards';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/framework';

const FrameworkPage = () => (
  <Layout mainClassName="overflow-hidden pt-16 sm:pt-14 bg-[#05050B]">
    <h1 className="sr-only">Framework</h1>
    <CodeSectionNew
      {...DATA.hero}
      className="mb-[222px] mt-[134px] lg:mb-[134px] md:mb-[145px] md:mt-[100px] sm:mt-20"
    />
    <SectionWithCards {...DATA.developers} />
    <Bento {...DATA.infrastructure} />
    <CtaWithForm
      {...DATA.ctaNow}
      className="mb-[250px] mt-[235px] text-center lg:mb-[204px] md:mb-[124px]"
    />
    <SectionWithLogos {...DATA.integrations} />
    <TextWithPicture
      {...DATA.workflowControl}
      className="mt-[238px] lg:mt-[100px] md:mt-[88px] sm:mt-[60px]"
      imageClassName="relative w-full h-full !overflow-visible"
    />
    <TextWithPicture
      {...DATA.selfService}
      className="mt-[380px] lg:mt-[184px] md:mt-[110px] sm:mt-[410px]"
      imageClassName="relative w-full h-full !overflow-visible"
    />
    <TextWithPicture
      {...DATA.reuse}
      className="mt-[414px] lg:mt-[184px] md:mt-[88px] sm:mt-[280px]"
      imageClassName="relative w-full h-full !overflow-visible"
    />
    <TextWithPicture
      {...DATA.localAndCloud}
      className="mb-[100px] mt-[402px] lg:mt-[184px] md:mb-[50px] md:mt-[88px] sm:mb-[220px] sm:mt-[260px]"
      imageClassName="relative w-full h-full !overflow-visible"
    />
    <CtaWithForm
      {...DATA.ctaFree}
      className="mb-[147px] mt-[190px] text-center xl:mt-[280px] lg:mt-[140px]"
    />
  </Layout>
);

export default FrameworkPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/framework/',
    title: 'Complete Control Over Notifications with Novu Framework',
    description:
      'Novu Framework gives developers code-backed workflows, full control, and seamless integration, while empowering non-technical teams to make safe updates.',
  };
  return <SEO {...pageMetadata} />;
};
