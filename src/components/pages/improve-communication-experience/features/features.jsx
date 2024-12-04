import React from 'react';

import contentManagement from './data/content-management-lottie-data.json';
import digest from './data/digest-lottie-data.json';
import monitoring from './data/monitoring-lottie-data.json';
import preferences from './data/preferences-lottie-data.json';
import priorityManagement from './data/priority-management-lottie-data.json';
import timezone from './data/timezone-lottie-data.json';
// import multiProviders from './data/multiple-providers-lottie-data.json'; --> We need to create this asset
import Item from './item';

const ITEMS = [
  {
    animationData: timezone,
    title: 'Timezone awareness',
    description: "Send notifications based on a user's timezone and working hours.",
  },
  {
    animationData: digest,
    title: 'Digest engine',
    description:
      'Aggregate multiple disparate events multiple events in to a single timely notification.',
  },
  {
    animationData: preferences,
    title: 'User preferences',
    description:
      'Your end users directly set and configure their preferred communication methods, times, languages, and more.',
  },
  {
    animationData: contentManagement,
    title: 'Translations',
    description: "Customize notification content to match each end user's preferred language.",
  },
  {
    animationData: monitoring,
    title: 'Multi-channel',
    description:
      'Send notifications via email, SMS, push, chat, in-app, and more. Reach users through the most effective channels.',
  },
  {
    animationData: priorityManagement,
    title: 'Content centralization',
    description:
      'Enable frictionless collaboration between developers, product teams, and marketers with centralized content management.',
  },
];

const Features = () => (
  <section className="features safe-paddings relative mt-[200px] overflow-hidden lg:mt-[152px] md:mt-[120px] sm:mt-20">
    <div className="container relative z-10 max-w-[1382px]">
      <ul className="grid grid-cols-3 gap-x-[126px] gap-y-20 lg:gap-y-16 md:grid-cols-2 md:gap-x-6 md:gap-y-14 sm:flex sm:flex-col sm:items-center sm:gap-0 sm:space-y-10 sm:text-center">
        {ITEMS.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </div>
  </section>
);

export default Features;
