import React from 'react';

import Heading from 'components/shared/heading';

import bg from './images/bg.svg';
import contentManagement from './images/content-management.svg';
import digest from './images/digest.svg';
import monitoring from './images/monitoring.svg';
import preferences from './images/preferences.svg';
import priorityManagement from './images/priority-management.svg';
import timezone from './images/timezone.svg';

const TITLE = "We've built it so you don't have to";
const ITEMS = [
  {
    icon: digest,
    title: 'Digest',
    description:
      'A digest engine that aggregates multiple events in to a single precise notification.',
  },
  {
    icon: preferences,
    title: 'User preferences',
    description:
      'Using Notu API to handle all user preferences and subscriptions across channels. UI components included.',
  },
  {
    icon: priorityManagement,
    title: 'Priority management',
    description:
      'A smart API to centralize all communication channels in a single place: E-mail, SMS, Direct, Push and many more...',
  },
  {
    icon: monitoring,
    title: 'Monitoring',
    description: 'Debug deliverability and analyze sending patterns  across multiple channels',
  },
  {
    icon: contentManagement,
    title: 'Content management',
    description:
      'Manage content for all channels and in multiple languages without the need to redeploy your code',
  },
  {
    icon: timezone,
    title: 'Timezone awareness',
    description: "Send transactional notifications based on user's timezone and working hours.",
  },
];

const Features = () => (
  <section className="safe-paddings relative overflow-hidden bg-black">
    <div className="container relative z-10 border-t border-dashed border-gray-4 pt-28 pb-40">
      <Heading size="lg" tag="h2" className="text-center leading-tight sm:text-left sm:text-3xl">
        {TITLE}
      </Heading>

      <ul className="mt-20 grid grid-cols-3 gap-x-8 gap-y-20 lg:grid-cols-2 sm:block sm:gap-0 sm:space-y-12">
        {ITEMS.map(({ title, description, icon }, index) => (
          <li key={index}>
            <img src={icon} height={64} width={120} loading="lazy" alt={`Icon ${title}`} />
            <div className="mt-5">
              <Heading className="leading-snug text-white sm:text-2xl" tag="h3" size="md">
                {title}
              </Heading>
              <p className="mt-3 max-w-[377px] font-light leading-snug text-gray-8 sm:mt-2.5">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="lazy"
      alt=""
      aria-hidden
    />
  </section>
);

export default Features;
