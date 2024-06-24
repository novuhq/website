import React from 'react';

import Benefits_imgOnLeftSide from 'components/pages/content-management/benefits/benefit_imgOnLeftSide/benefit_imgOnLeftSide';
import Benefits_imgOnRightSide from 'components/pages/content-management/benefits/benefit_imgOnRightSide/benefits_imgOnRightSide';
import Heading from 'components/shared/heading';

const TITLE = 'Never build notificfations again';
const SUBTITLE =
  'Increase team velociuty and customer experience by adding notifications to your existing application.';

const Benefits = () => {
  const Benefit_1_Props = {
    title: 'Extensible integration',
    description: 'Integrate with any provider, channel, or content framework.',
  };
  const Benefit_2_Props = {
    title: 'Complete flexibility',
    description: 'Build any notification workflow imaginable, and iterate endlessly.',
  };
  const Benefit_3_Props = {
    title: 'Scalable and reliable',
    description: 'Deliver notifications at any scale and through any channel when needed.',
  };
  const Benefit_4_Props = {
    title: 'Full visibility and compliance',
    description: 'Simplify debugging with complete observability and ensure compliance with ease.',
  };
  const Benefit_5_Props = {
    title: 'Open source',
    description:
      'Transparent, flexible and allows you to inspect, modify, and enhance the infrastructure along with the community.',
  };

  return (
    <section className="benefits bg-gray-2 pb-40 pt-30 lg:pb-32 lg:pt-24 md:pb-28 md:pt-18 sm:pb-18 sm:pt-12">
      <Heading
        size="md"
        tag="h2"
        className="max-w-[764px] text-center leading-tight sm:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>
      <p className="mx-auto mt-4 max-w-[800px] text-center text-lg leading-tight opacity-70 lg:mt-5 lg:max-w-[676px] md:mt-4 md:max-w-[590px] md:text-base sm:mt-3">
        {SUBTITLE}
      </p>
      <Benefits_imgOnRightSide {...Benefit_1_Props} />
      <Benefits_imgOnLeftSide {...Benefit_2_Props} />
      <Benefits_imgOnRightSide {...Benefit_3_Props} />
      <Benefits_imgOnLeftSide {...Benefit_4_Props} />
      <Benefits_imgOnRightSide {...Benefit_5_Props} />
    </section>
  );
};

export default Benefits;
