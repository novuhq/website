import React from 'react';

import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SectionWithBigIcons from 'components/shared/reusable-sections/section-with-big-icons';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import DATA from 'data/pages/digest';

const Digests = () => (
  <Layout mainClassName="overflow-hidden pb-52 lg:pb-32 md:pb-28">
    <h1 className="sr-only">Digest</h1>
    <TextWithPicture
      {...DATA.hero}
      className="sm:pt-14"
      imageClassName="relative w-full h-[655px] !overflow-visible lg:h-[500px] md:h-[400px] sm:w-full sm-xs:h-96"
    />
    <SectionWithBigIcons {...DATA.batchNotifications} className="relative z-10 mt-44" />
    <TextWithPicture
      {...DATA.digestStrategies}
      imageClassName="relative w-full h-[657px] !overflow-visible lg:h-96 md:h-80 sm:h-72 sm-xs:h-56"
    />
    <TextWithPicture
      {...DATA.notificationFatigue}
      imageClassName="relative w-full h-96 !overflow-visible lg:h-[400px] md:h-80 sm:h-48"
    />
    <SectionWithBigIcons
      {...DATA.useCases}
      className="mt-52 text-center sm:mt-40 sm-xs:mt-20 [&_h3]:text-2xl sm:[&_h3]:text-[22px]"
    />
    <CtaWithForm
      {...DATA.cta}
      className="mt-[234px] text-center [&_h2]:px-2.5 [&_p]:mb-1 [&_p]:mt-4 [&_p]:max-w-[720px]"
    />
  </Layout>
);

export default Digests;

export const Head = () => {
  const pageMetadata = {
    title: "Streamline Notifications with Novu's Digest",
    description:
      "Consolidate notifications, reduce overload, and keep users informed with Novu's flexible Digest feature.",
  };
  return <SEO {...pageMetadata} />;
};
