import React from 'react';

import Heading from 'components/shared/heading';

import contentManagement from './data/content-management-lottie-data.json';
import digest from './data/digest-lottie-data.json';
import monitoring from './data/monitoring-lottie-data.json';
/* import preferences from './data/preferences-lottie-data.json'; */
import priorityManagement from './data/priority-management-lottie-data.json';
import timezone from './data/timezone-lottie-data.json';
// import multiProviders from './data/multiple-providers-lottie-data.json'; --> We need to create this asset
import Item from './item';

const TITLE = '';
const ITEMS = [
  {
    animationData: digest, // This is a place holder animation of the Lottie animation data
    title: 'Broad framework support',
    description: 'Novu supports content frameworks like React Email, MJML, Vue-email, and more.',
  },
  {
    animationData: priorityManagement,
    title: 'Type safe',
    description:
      "Zod and validation plugins ensure procuct teams won't break critical workflows as they update content.",
  },
  {
    animationData: contentManagement, // This is a place holder animation of the Lottie animation data
    title: 'Code-first workflows',
    description:
      'Define workflows as code, re-use components, and deploy confidently while developing in your IDE of choice.',
  },
  {
    animationData: contentManagement, // We might consider change the name of this variable
    title: 'No-code editor',
    description:
      'Developers start with content code in their framework of choice (React, Vue, etc.), and Product teams are presented with a no-code version to edit.',
  },
  {
    animationData: monitoring,
    title: 'Dedicated environments',
    description:
      'A local preview environment that lives near your code and matching interface for Non-Technical users in production.',
  },
  {
    animationData: timezone,
    title: 'Ready-to-use components',
    description:
      'Add notifications capabilities to your app through pre-built inbox and preference components--all stateful, and with DX in mind.',
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
