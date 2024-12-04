import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading from 'components/shared/heading';

const TITLE = 'All of the flexibility of DIY, \nnone of the hassle';
const SUBTITLE =
  'Increase end user engagement with multi-channel notifications and centralized content.';

const CARDS = [
  {
    title: 'Extensible integrations',
    description:
      'Integrates with all popular providers and channels, and you can easily extend support to your own custom code.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/extensible-integration.jpg"
        alt=""
        width={842}
        height={560}
      />
    ),
  },
  {
    title: 'Engage end-users regardless of channel',
    description:
      'Easily implement multi-channel notifications and flexible provider management, boosting platform user engagement.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/engage-end-users.jpg"
        alt=""
        width={842}
        height={532}
      />
    ),
  },
  {
    title: 'Reduce friction between development and product teams',
    description:
      'Eliminate productivity barriers when developers provide notifications infrastructure to product teams. Development teams focus on core app value while product iterates.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/reduce-distractions.jpg"
        alt=""
        width={842}
        height={495}
      />
    ),
  },
  {
    title: 'Ship faster',
    description:
      'Engineering teams easily deliver notification capabilities into the applications.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/ship-faster.jpg"
        alt=""
        width={842}
        height={532}
      />
    ),
  },
];

const Benefits = () => (
  <section className="benefits bg-gray-2 pb-40 pt-40 lg:pb-32 lg:pt-24 md:pb-28 md:pt-18 sm:pb-18 sm:pt-12">
    <Heading
      size="xl"
      tag="h1"
      className="mx-auto text-center leading-tight sm:text-3xl"
      theme="white"
    >
      {TITLE}
    </Heading>
    <p className="mx-auto mt-4 max-w-[900px] text-center text-lg leading-tight opacity-70 lg:mt-5 lg:max-w-[676px] md:mt-4 md:max-w-[590px] md:text-base sm:mt-3">
      {SUBTITLE}
    </p>
    <ul className="sm:mt-6">
      {CARDS.map(({ title, description, image }, index) => (
        <li
          className="container grid-gap-x grid grid-cols-12 items-center py-30 lg:py-20 md:flex md:flex-col md:py-16 sm:py-6"
          key={index}
        >
          <div
            className={clsx('md:text-center', {
              'col-start-1 col-end-6': index % 2 === 0,
              'col-start-8 col-end-13': index % 2 === 1,
            })}
          >
            <Heading
              size="xl"
              tag="h2"
              className="leading-tight lg:text-4xl sm:text-3xl"
              theme="white"
            >
              {title}
            </Heading>
            <p className="mt-5 text-lg font-book leading-snug text-gray-9 xl:max-w-[464px] lg:mt-3 lg:max-w-[296px] lg:text-base md:max-w-full">
              {description}
            </p>
          </div>

          <div
            className={clsx('relative md:mt-11 md:flex md:w-full md:justify-center sm:mt-8', {
              'col-start-7 col-end-13 lg:col-start-6': index % 2 === 0,
              'col-start-1 col-end-7 row-start-1 lg:col-end-8': index % 2 === 1,
            })}
          >
            {image}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Benefits;
