import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading from 'components/shared/heading';

const TITLE = 'Powerful, centralized content management in any framework';
const SUBTITLE =
  'From React to Vue to more. Re-use and build content once, then empower your product teams to maintain it.';

const CARDS = [
  {
    title: 'Effortless collaboration',
    description:
      'Developers and product teams work together with unified notifications content and logic.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/effortless-collaboration.jpg"
        alt=""
        width={842}
        height={502}
      />
    ),
  },
  {
    title: 'Reduce engineering interrupts',
    description:
      'Developers specify editable fields, show/hide toggles, and dropdown selectors for properties, empowering product teams to iterate faster.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/reduce-engineering-interrupts.jpg"
        alt=""
        width={842}
        height={560}
      />
    ),
  },
  {
    title: 'Consistent user experience',
    description:
      'Product and marketing teams maintain ownership of messaging and branding, and can interate as fast as they need to.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/consistent-user-experience.png"
        alt=""
        width={842}
        height={532}
      />
    ),
  },
  {
    title: 'Personalized notifications',
    description:
      'Deliver rich, personalized notifications across any channel, and know content updates will never break workflow logic.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/personalized-messages.png"
        alt=""
        width={842}
        height={495}
      />
    ),
  },
  {
    title: 'Reuse content',
    description:
      'Bring your own content, no matter the format. Novu supports popular frameworks including React, Vue-email, MJML, and more.',
    image: (
      <StaticImage
        className="rounded-[20px]"
        src="./images/reuse-content.jpg"
        alt=""
        width={842}
        height={560}
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
