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
    title: 'Centralized content',
    description:
      'Create notification content that can be used across all supported notification channels within Novu.',
  },
  {
    animationData: priorityManagement,
    title: 'Type safe',
    description:
      'Bring your own JSON schemas for full end-to-end validation across all your team members.',
  },
  {
    animationData: preferences,
    title: 'Code-first workflows',
    description:
      'Define workflows as code, re-use components, and deploy confidently while developing in your IDE of choice.',
  },
  {
    animationData: contentManagement,
    title: 'No-code editor',
    description:
      'Product teams can manage workflow configurations without the risk of breaking notification flows.',
  },
  {
    animationData: monitoring,
    title: 'Dedicated environments',
    description:
      'A local preview environment that lives near your code and a matching interface for Non-Technical users in production.',
  },
  {
    animationData: timezone,
    title: 'Reusable components',
    description:
      'Leverage our library of pre-built Inbox and end user preferences components to quickly build and deploy notifications capabilities directly in your app.',
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
