import React from 'react';

import Benefits_imgOnLeftSide from 'components/pages/content-management/benefits/benefit_imgOnLeftSide/benefit_imgOnLeftSide';
import Benefits_imgOnRightSide from 'components/pages/content-management/benefits/benefit_imgOnRightSide/benefits_imgOnRightSide';
import Heading from 'components/shared/heading';

const TITLE = 'Never build notificfations again';
const SUBTITLE =
  'Increase team velociuty and customer experience by adding notifications to your existing application.';
  
const Benefits = () => {
  const Benefit_1_Props = {
    title: 'Time relevant notifications',
    description:
      'Communicate with your users at the right time, for them',
  };
  const Benefit_2_Props = {
    title: 'Personalized messages',
    description:
      'Send tailored messages that are relevant to each user, based on their behavior and preferences or location',
  };
  const Benefit_3_Props = {
    title: 'Consistent branding',
    description:
      'Maintain a consistent brand experience across all channels in one place',
  };
  const Benefit_4_Props = {
    title: 'Multi-channel Accessibility',
    description:
      'Reach your users on the channel they prefer, be it email, SMS, push notifications, Chat or in-app messages',
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
      <Benefits_imgOnLeftSide {...Benefit_4_Props} />
    </section>
  );
};

export default Benefits;