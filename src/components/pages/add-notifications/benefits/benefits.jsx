import React from 'react';

import Benefits_imgOnLeftSide from 'components/pages/content-management/benefits/benefit_imgOnLeftSide/benefit_imgOnLeftSide';
import Benefits_imgOnRightSide from 'components/pages/content-management/benefits/benefit_imgOnRightSide/benefits_imgOnRightSide';
import Heading from 'components/shared/heading';

const TITLE = 'Never build notificfations again';
const SUBTITLE =
  'Updates, additional capabilities, superior DX, and more promote effective notifications pracices, not distracting ongoing infrastructure work.';

const Benefits = () => {
  const Benefit_1_Props = {
    title: 'Extensible integrations',
    description:
      'Integrates with all popular providers and channels, and you can easily extend support to your own custom code.',
  };
  const Benefit_2_Props = {
    title: 'Complete flexibility',
    description:
      'Product teams can freely edit content, update branding, and change images--all without any developer input.',
  };
  const Benefit_3_Props = {
    title: 'Scalable and reliable',
    description:
      'Deliver notifications at any scale and through any channel when needed, and get the SLA and observability to prove it.',
  };
  const Benefit_4_Props = {
    title: 'Open source',
    description:
      'Transparent, flexible and allows you to inspect, modify, and enhance the infrastructure along with our vibrant community.',
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
