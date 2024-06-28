import React from 'react';

import Heading from 'components/shared/heading';

/* import Link from 'components/shared/link'; */
/* import LINKS from 'constants/links'; */
import providers from './images/providers.svg';
import template from './images/template.svg';
import trigger from './images/trigger.svg';

const TITLE = 'Effective Notification Infrastructure';
const SUBTITLE = 'Users can tell when a notification system is poorly designed or managed.';

const CARDS = [
  {
    title: 'Missed Updates',
    description:
      'Without timely notifications, users may miss critical updates or events related to their interests or activities, which may lead to frustration.',
    image: (
      <img
        className="w-full"
        width={464}
        height={224}
        src={template}
        alt="Create template"
        loading="lazy"
      />
    ),
  },
  {
    title: 'Irrelevant Notifications',
    description:
      'Poorly targeted or excessive notifications can overwhelm users, causing annoyance and distraction from their intended tasks or activities.',
    image: (
      <img
        className="w-full"
        width={464}
        height={224}
        src={providers}
        alt="Connect providers"
        loading="lazy"
      />
    ),
  },
  {
    title: 'Negative Brand Perception',
    description:
      'Poorly managed notifications can reflect negatively on the brand, portraying it as intrusive, unorganized, or unresponsive to user needs and preferences.',
    image: (
      <img
        className="w-full"
        width={464}
        height={224}
        src={trigger}
        alt="Add trigger"
        loading="lazy"
      />
    ),
  },
];

const Pain_restatement = () => (
  <section className="painRestatement safe-paddings pb-30 pt-20 lg:pb-24 lg:pt-16 md:pb-18 md:pt-14 sm:pb-12 sm:pt-9">
    <div className="container flex flex-col items-center">
      <Heading
        size="xl"
        tag="h2"
        className="mx-auto text-center leading-tight sm:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>
      <p className="mx-auto mt-4 max-w-[800px] text-center text-lg leading-tight opacity-70 lg:mt-5 lg:max-w-[676px] md:mt-4 md:max-w-[590px] md:text-base sm:mt-3">
        {SUBTITLE}
      </p>

      <div className="mt-10 pt-10 grid grid-cols-3 gap-x-10 lg:gap-x-7 md:block md:gap-x-0 md:space-y-7 sm:mt-9 sm:space-y-5">
        {CARDS.map(({ title, description, image }, index) => (
          <div
            className="rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] lg:rounded-2xl md:grid md:grid-cols-2 md:items-center sm:block"
            key={index}
          >
            {image}
            <div className="p-8 pt-5 lg:p-5 lg:pt-2 md:pt-5 sm:pt-2">
              <Heading
                className="leading-snug lg:text-2xl md:text-3xl sm:text-2xl"
                tag="h3"
                size="sm"
                theme="white"
              >
                {title}
              </Heading>
              <p className="mt-3 font-book leading-snug text-gray-9 sm:mt-2.5">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pain_restatement;