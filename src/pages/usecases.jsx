import React from 'react';

import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import FeatureCards from 'components/shared/reusable-sections/feature-cards';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/usecases';

const UseCasesPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <h1 className="sr-only">Use Cases</h1>
    <TextWithPicture
      {...DATA.hero}
      className="pb-[100px] pt-[76px] md:pb-16 md:pt-0"
      imageClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
    />
    <FeatureCards {...DATA.goals} />
    <CtaWithForm {...DATA.ctaEcho} className="relative z-10 mt-[275px]" />
    <TextWithPicture
      {...DATA.multiChannelNotifications}
      className="py-52 md:py-40 sm:!mt-28 sm:pb-20 sm:pt-0"
      imageClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
    />
    <TextWithPicture
      {...DATA.inAppNotifications}
      className="relative z-10 py-[184px] md:py-32 sm:pb-28 sm:pt-0 xs:pb-36"
      imageClassName="relative w-full h-full sm:h-[300px] xs:h-[200px] z-10"
    />
    <TextWithPicture
      {...DATA.notificationManagement}
      className="py-20 md:py-10 sm:pb-20 sm:pt-0 xs:pb-32"
      imageClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
    />
    <TextWithPicture
      {...DATA.notificationContent}
      className="py-[288px] md:py-32 sm:pb-20 sm:pt-0"
      imageClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
    />
    <CtaWithForm {...DATA.ctaRequirements} className="mb-52 sm:mt-[224px] sm-xs:mt-[164px]" />
  </Layout>
);

export default UseCasesPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu Use Cases: Enhance Engagement with Multi-Channel Notifications',
    description:
      "Discover how Novu's unified platform enables teams to deliver personalized, multi-channel notifications, boosting user satisfaction and retention. Learn more about accelerating development, enhancing collaboration, and driving engagement.",
  };
  return <SEO {...pageMetadata} />;
};
