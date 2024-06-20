import React from 'react';

import Heading from 'components/shared/heading';

// import Link from 'components/shared/link';
// import LINKS from 'constants/links';
import providers from './images/providers.svg';
import template from './images/template.svg';
import trigger from './images/trigger.svg';

const TITLE =
  'Novu simplifies the process of adding multi-channel notifications to your existing app';
const SUBTITLE = 'De-centralized notifications are costly in more ways than just engineering time…';

const CARDS = [
  {
    title: 'High Costs',
    description:
      'Sending end-user notifications requires significant engineering effort to build and maintain the required infrastructure',
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
    title: 'Integration Complexity',
    description:
      'Integrating new notification channels is complex and time-consuming and requires new application code and new content',
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
    title: 'Inconsistent User Experiences',
    description:
      'Businesses lack cross-channel observability, which slows troubleshooting and debugging–which negatively impacts end-user experience',
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
  <section className="painRestatement safe-paddings py-40 lg:pb-24 lg:pt-16 md:pb-18 md:pt-14 sm:pb-12 sm:pt-9">
    <div className="container flex flex-col items-center">
      <Heading
        size="md"
        tag="h2"
        className="max-w-[764px] text-center leading-tight sm:text-3xl"
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
