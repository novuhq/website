import React from 'react';

// TODO: replace Reviews to new directory before merge
import Reviews from 'components/pages/home/reviews';
import Bento from 'components/pages/home-new/bento';
import CodeWithInbox from 'components/pages/home-new/code-with-inbox/code-with-inbox';
import Community from 'components/pages/home-new/community';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SectionWithSmallIcons from 'components/shared/reusable-sections/section-with-small-icons';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
import DATA from 'data/pages/staging-pages/index-part-2';

const HomePage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <CodeWithInbox {...DATA.codeWithInbox} />
    <Bento {...DATA.bento} />
    <SectionWithSmallIcons
      {...DATA.sectionWithSmallIcons}
      className="mt-[204px] lg:mt-[148px] md:mt-[116px] sm:mt-[106px]"
    />
    <TextWithPicture
      {...DATA.textWithPicture}
      className="py-20 pl-[64px] lg:pl-[32px] md:py-10 sm:mb-0 sm:pb-20 sm:pt-0 xs:pb-[110px] sm-xs:pb-[70px]"
      imageClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
    />
    <Community />
    <Reviews className="mt-[220px] lg:mt-[184px] md:mt-[134px] sm:mt-[106px] [&_h3]:md:text-[32px] [&_h3]:sm:text-[28px]" />
    <CtaWithForm
      {...DATA.ctaWithForm}
      className="mb-[200px] mt-[200px] text-center lg:mb-[182px] lg:mt-[182px] md:mb-[144px] md:mt-[144px] sm:mb-[128px] sm:mt-[165px] [&_h2]:lg:text-[44px] [&_h2]:md:text-[36px] [&_h2]:sm:text-[32px]"
    />
    <Separator className="h-px w-full max-w-none" backgroundColor="black" />
  </Layout>
);

export default HomePage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Open-source notifications infrastructure for devs and product teams',
    description:
      'Novu is an open-source notification platform that empowers developers to create robust, multi-channel notifications for web and mobile apps. With powerful workflows, seamless integrations, and a flexible API-first approach, Novu enables product teams to manage notifications without breaking production.',
  };
  return <SEO {...pageMetadata} />;
};
