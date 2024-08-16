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
    animationData: digest,
    title: 'Endless provider integrations',
    description:
      'Batteries included. Use our dozens of pre-built provider integrations, or easily extend Novu through your own custom one.',
  },
  {
    animationData: contentManagement,
    title: 'Content centralization',
    description:
      'Enable frictionless collaboration between developers and product teams with centralized content management.',
  },
  {
    animationData: timezone,
    title: 'Unified API',
    description:
      'Integrate Novu with your application once, and access any delivery provider instantly.',
  },
  {
    animationData: priorityManagement,
    title: 'Multi-channel',
    description:
      'Send notifications via email, SMS, push, chat, in-app, and more. Reach users through the most effective channels.',
  },
  {
    animationData: monitoring,
    title: 'Observability',
    description:
      'Gain clear visibility into how and why a notification was (or was not) sent so you can optimize strategies and efficiently debug.',
  },
  {
    animationData: preferences,
    title: 'User preferences',
    description:
      'Your end users directly set and configure their preferred communication methods, times, languages, and more.',
  },
];

const Features = () => (
  <section className="features safe-paddings relative overflow-hidden mt-[200px] lg:mt-[152px] md:mt-[120px] sm:mt-20">
    <div className="container max-w-[1382px] relative z-10">
      <ul className="grid grid-cols-3 gap-x-[126px] gap-y-20 lg:gap-y-16 md:grid-cols-2 md:gap-x-6 md:gap-y-14 sm:flex sm:flex-col sm:items-center sm:gap-0 sm:space-y-10 sm:text-center">
        {ITEMS.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </div>
  </section>
);

export default Features;
