import React from 'react';

import Heading from 'components/shared/heading';

/* import contentManagement from './data/content-management-lottie-data.json'; */
import digest from './data/digest-lottie-data.json';
import monitoring from './data/monitoring-lottie-data.json';
import preferences from './data/preferences-lottie-data.json';
import priorityManagement from './data/priority-management-lottie-data.json';
/* import timezone from './data/timezone-lottie-data.json'; */
import Item from './item';

const TITLE = 'Simplify Your Notifications';
const ITEMS = [
  {
    animationData: digest,
    title: 'Workflow content editor',
    description: '...',
  },
  {
    animationData: preferences,
    title: 'Content delegation',
    description: '...',
  },
  {
    animationData: priorityManagement,
    title: 'Broad content framework support',
    description: '...',
  },
  {
    animationData: monitoring,
    title: 'Singluar content source',
    description: '...',
  },
  /*
  {
    animationData: contentManagement,
    title: 'Content management',
    description: 'Manage content for all channels and in multiple languages without the need to redeploy your code',
  },
  {
    animationData: timezone,
    title: 'Timezone awareness',
    comingSoon: true,
    description: "Send transactional notifications based on user's timezone and working hours.",
  },
  */
];

const Features = () => (
  <section className="features safe-paddings relative overflow-hidden pb-40 pt-30 lg:pb-32 lg:pt-24 md:pb-28 md:pt-18 sm:pb-18 sm:pt-12">
    <div className="container relative z-10">
      <Heading
        size="md"
        tag="h2"
        className="text-center leading-tight lg:text-left sm:text-center sm:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>

      <ul className="mt-20 grid grid-cols-3 gap-x-8 gap-y-20 lg:mt-16 lg:gap-y-16 md:mt-14 md:grid-cols-2 md:gap-x-6 md:gap-y-14 sm:mt-10 sm:flex sm:flex-col sm:items-center sm:gap-0 sm:space-y-10 sm:text-center">
        {ITEMS.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </div>
  </section>
);

export default Features;
