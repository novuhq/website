import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import BlogIcon from './images/blog.inline.svg';
import BuildIcon from './images/build.inline.svg';
import ContributionsIcon from './images/contributions.inline.svg';
import TutorialIcon from './images/tutorial.inline.svg';

const TITLE = 'How to contribute';
const ITEMS = [
  {
    icon: ContributionsIcon,
    title: 'Contributions to open issues',
    description:
      'We have a curated list of Hacktoberfest issues that are ready for you to pick up.',
    url: '/',
  },
  {
    icon: BuildIcon,
    title: 'Build a demo app',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien turpis elementum non.',
    url: '/',
  },
  {
    icon: BlogIcon,
    title: 'Write a blog post',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien turpis elementum non.',
    url: '/',
  },
  {
    icon: TutorialIcon,
    title: 'Make a tutorial',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien turpis elementum non.',
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
        {ITEMS.map(({ icon: Icon, title, description, url }, index) => (
          <li
            className="flex flex-col items-start lg:max-w-sm sm:mx-auto sm:max-w-[410px] sm:items-center sm:text-center"
            key={index}
          >
            <Icon className="h-auto w-30 md:w-28" />
            <Heading className="mt-5 font-medium sm:text-xl" tag="h3" theme="white" size="xs">
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
