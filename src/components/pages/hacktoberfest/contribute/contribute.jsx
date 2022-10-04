import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import blogIcon from './images/blog.svg';
import buildIcon from './images/build.svg';
import contributionsIcon from './images/contributions.svg';
import tutorialIcon from './images/tutorial.svg';

const TITLE = 'How to contribute';
const ITEMS = [
  {
    icon: contributionsIcon,
    title: 'Contributions<br/> to open issues',
    description:
      'We have a curated list of Hacktoberfest issues that are ready for you to pick up.',
    url: 'https://github.com/novuhq/novu/issues?q=is%3Aopen+is%3Aissue+label%3AHacktoberfest',
  },
  {
    icon: buildIcon,
    title: 'Build a demo app',
    description:
      'Build a demo app of your choice using Novu to deliver notifications',
    url: '/',
  },
  {
    icon: blogIcon,
    title: 'Write a blog post',
    description:
      'Made a PR? Have used Novu in a recent project? Tell the world about it in form of an blog post, article or guide',
    url: '/',
  },
  {
    icon: tutorialIcon,
    title: 'Make a tutorial',
    description:
      'Create a video tutorial or a written one, help new users and maintainers get started with Novu!',
    url: '/',
  },
];

const Contribute = () => (
  <section className="contribute safe-paddings mt-52 lg:mt-40 md:mt-32 sm:mt-20">
    <div className="container-lg">
      <Heading
        className="text-center leading-tight md:text-5xl sm:text-4xl"
        tag="h2"
        theme="white"
        size="xl"
      >
        {TITLE}
      </Heading>
      <ul className="mt-20 grid grid-cols-4 gap-x-10 lg:auto-rows-fr lg:grid-cols-2 lg:gap-y-16 lg:gap-x-16 md:mt-16 md:gap-x-10 md:gap-y-10 sm:mt-12 sm:grid-cols-1">
        {ITEMS.map(({ icon, title, description, url }, index) => (
          <li
            className="flex flex-col items-start lg:max-w-sm sm:mx-auto sm:max-w-[410px] sm:items-center sm:text-center"
            key={index}
          >
            <img
              className="h-auto w-30 md:w-28"
              src={icon}
              alt=""
              width={120}
              height={64}
              loading="lazy"
              aria-hidden
            />
            <Heading
              className="mt-5 font-medium sm:text-xl"
              tag="h3"
              theme="white"
              size="xs"
              asHTML
            >
              {title}
            </Heading>
            <p className="mt-3 text-gray-9">{description}</p>
            <Link className="mt-5" size="sm" theme="primary-underline" to={url}>
              View issue
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Contribute;
