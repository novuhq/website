import React from 'react';

import Benefits_imgOnLeftSide from 'components/pages/multi-channel-notifications/benefits/benefit_imgOnLeftSide/benefit_imgOnLeftSide';
import Benefits_imgOnRightSide from 'components/pages/multi-channel-notifications/benefits/benefit_imgOnRightSide/benefits_imgOnRightSide';
import Heading from 'components/shared/heading';

const TITLE = 'Never build notificfations again';
const SUBTITLE =
  "We've built it, so you don't have to.";

const Benefits = () => {
  const Benefit_1_Props = {
    title: 'Engage end-users regardless of channel',
    description:
      'Unified API supports multi-channel notifications and flexible provider management, boosting platform user engagement',
  };

  const Benefit_2_Props = {
    title: 'Improve app experience and retention',
    description: 'Personalized, real-time in-app notifications that streamline workflow management',
  };

  const Benefit_3_Props = {
    title: 'Reduce distractions and keep development teams focused on providing app value',
    description:
      'Novu centralizes notification management to enhance collaboration, and allows engineers to focus on core development while empowering non-technical teams to modify content without code disruption',
  };

  return (
    <section className="benefits bg-gray-2 pb-40 pt-40 lg:pb-32 lg:pt-24 md:pb-28 md:pt-18 sm:pb-18 sm:pt-12">
      <Heading
        size="xl"
        tag="h1"
        className="mx-auto text-center leading-tight sm:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>
      <p className="mx-auto mt-4 max-w-[900px] text-center text-lg leading-tight opacity-70 lg:mt-5 lg:max-w-[676px] md:mt-4 md:max-w-[590px] md:text-base sm:mt-3">
        {SUBTITLE}
      </p>
      <Benefits_imgOnRightSide {...Benefit_1_Props} />
      <Benefits_imgOnLeftSide {...Benefit_2_Props} />
      <Benefits_imgOnRightSide {...Benefit_3_Props} />
    </section>
  );
};

export default Benefits;
