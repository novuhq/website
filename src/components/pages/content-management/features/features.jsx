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
    animationData: preferences,
    title: 'Code-first workflows',
    description:
      'Define workflows as code, re-use content components, and deploy confidently while developing in your IDE of choice.',
  },
  {
    animationData: contentManagement,
    title: 'No-code editor',
    description:
      'Product teams can manage workflow configurations without the risk of breaking notification flows.',
  },
  {
    animationData: digest,
    title: 'Broad framework support',
    description: 'Novu supports content frameworks like React-email, MJML, Vue-email, and more.',
  },
  {
    animationData: priorityManagement,
    title: 'Type safe',
    description:
      "Zod and validation plugins ensure product teams won't break critical workflows as they update content.",
  },
  {
    animationData: monitoring,
    title: 'Dedicated interfaces',
    description:
      'A local preview environment lives near your code, and product teams use a matching cloud interface.',
  },
  {
    animationData: timezone,
    title: 'Single content source',
    description:
      'Write once, and use the same notification content across all notification channels.',
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
