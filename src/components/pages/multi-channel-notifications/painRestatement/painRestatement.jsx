import React from 'react';

import Heading from 'components/shared/heading';

import costs from './images/costs.svg';
import inconsistent from './images/inconsistent.svg';
import integration from './images/integration.svg';

const TITLE = 'Adding new notification channels is costly and complex';
const SUBTITLE =
  'More channels and content sources means more complexity, risk, and team friction.';

const CARDS = [
  {
    title: 'High costs',
    description:
      'DIY notifications infrastructure requires significant engineering effort, distracting teams from adding value to their products.',
    image: <img width={80} height={80} src={costs} alt="Create template" loading="lazy" />,
  },
  {
    title: 'Integration complexity',
    description:
      'Every new channel comes with a new custom integration, content source requirement, and ongoing maintenance burden.',
    image: <img width={80} height={80} src={integration} alt="Connect providers" loading="lazy" />,
  },
  {
    title: 'Inconsistent user experiences',
    description:
      'When product teams cannot easily manage and iterate on content, user experiences suffer... and so does your brand.',
    image: <img width={80} height={80} src={inconsistent} alt="Add trigger" loading="lazy" />,
  },
];

const PainRestatement = () => (
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
      <div className="mt-10 grid grid-cols-3 gap-x-10 pt-10 lg:gap-x-7 md:block md:gap-x-0 md:space-y-7 sm:mt-9 sm:space-y-5">
        {CARDS.map(({ title, description, image }, index) => (
          <div
            className="rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] lg:rounded-2xl"
            key={index}
          >
            <div className="p-8 lg:p-5">
              {image}
              <Heading
                className="mt-4 leading-snug lg:text-2xl md:text-3xl sm:text-2xl"
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

export default PainRestatement;
