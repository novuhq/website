import React from 'react';

import Heading from 'components/shared/heading';

import contentManagement from './data/content-management-lottie-data.json';
import digest from './data/digest-lottie-data.json';
import monitoring from './data/monitoring-lottie-data.json';
import preferences from './data/preferences-lottie-data.json';
import priorityManagement from './data/priority-management-lottie-data.json';
import timezone from './data/timezone-lottie-data.json';
// import multiProviders from './data/multiple-providers-lottie-data.json'; --> We need to create this asset
import Item from './item';

const TITLE = '';
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
  <section className="features safe-paddings relative overflow-hidden pb-30 pt-10 lg:pb-32 lg:pt-24 md:pb-28 md:pt-18 sm:pb-18 sm:pt-12">
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
