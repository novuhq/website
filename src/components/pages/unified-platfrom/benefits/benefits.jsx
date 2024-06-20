import React from 'react';

import Benefits_imgOnLeftSide from 'components/pages/content-management/benefits/benefit_imgOnLeftSide/benefit_imgOnLeftSide';
import Benefits_imgOnRightSide from 'components/pages/content-management/benefits/benefit_imgOnRightSide/benefits_imgOnRightSide';

const Benefits = () => {
  const Benefit_1_Props = {
    title: 'Ship faster',
    description:
      'Engineering teams easily deliver notification capabilities into the applications',
  };
  const Benefit_2_Props = {
    title: 'Reduce engineering interrupts',
    description:
      'Developers specifcy which fields and values product teams can manipulate, empowering them to iterate faster.',
  };
  const Benefit_3_Props = {
    title: 'Consistent user experience',
    description:
      'Product and marketing teams maintain ownership of messaging and branding, and can interate as fast as they need to.',
  };
  const Benefit_4_Props = {
    title: 'Effortless collaboration',
    description:
      'Developers and product teams work together on a platform that unifies all notifications content and logic.',
  };

 

  return (
    <section className="benefits bg-gray-2 pb-40 pt-30 lg:pb-32 lg:pt-24 md:pb-28 md:pt-18 sm:pb-18 sm:pt-12">
      <Benefits_imgOnRightSide {...Benefit_1_Props} />
      <Benefits_imgOnLeftSide {...Benefit_2_Props} />
      <Benefits_imgOnRightSide {...Benefit_3_Props} />
      <Benefits_imgOnLeftSide {...Benefit_4_Props} />

    </section>
  );
};

export default Benefits;