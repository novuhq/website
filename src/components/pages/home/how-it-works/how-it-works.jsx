import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

import providers from './images/providers.svg';
import template from './images/template.svg';
import trigger from './images/trigger.svg';

const TITLE = 'How it works?';
const LINK_NAME = 'Read quick start guide';

const CARDS = [
  {
    title: 'Create template',
    description:
      'Select channels, add content with {{dynamic}} syntax, and custom rules to control the delivery of notifications.',
    image: <img className="w-full" width={464} height={224} src={template} alt="" loading="lazy" />,
  },
  {
    title: 'Connect providers',
    description:
      "Use a built in collection of popular providers - Sendgrid, Mailgun, Twilio and many more. Add API key and you're ready to go.",
    image: (
      <img className="w-full" width={464} height={224} src={providers} alt="" loading="lazy" />
    ),
  },
  {
    title: 'Add trigger',
    description:
      "Send an event trigger using one of our community built SDK's, and we will handle it from there.",
    image: <img className="w-full" width={464} height={224} src={trigger} alt="" loading="lazy" />,
  },
];

const HowItWorks = () => (
  <section className="how-it-works safe-paddings pb-30 pt-20 lg:pt-16 lg:pb-24 md:pt-14 md:pb-18 sm:pt-9 sm:pb-12">
    <div className="container flex flex-col items-center">
      <Heading
        size="md"
        tag="h2"
        className="max-w-[764px] text-center leading-tight sm:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>
      <Link
        className="mt-7 lg:mt-6 sm:mt-5 sm:text-xs"
        theme="primary-underline"
        size="sm"
        {...LINKS.quickStart}
      >
        {LINK_NAME}
      </Link>

      <div className="mt-10 grid grid-cols-3 gap-x-10 lg:gap-x-7 md:block md:gap-x-0 md:space-y-7 sm:mt-9 sm:space-y-5">
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
              <p className="mt-3 font-book leading-snug text-gray-8 sm:mt-2.5">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
