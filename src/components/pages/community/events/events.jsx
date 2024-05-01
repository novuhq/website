import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const TITLE = 'Engage in events, forging connections, and gaining insights';
const DESCRIPTION =
  'Let’s say you’ve been tasked to build an application to help consumers find agencies providing a specific service tasked to build. To build an application to help consumers';

const ITEMS = [
  {
    title: 'Webinar marketing planning',
    description:
      'An application to help consumers find agencies providing a specific service tasked to build.',
    linkUrl: '',
    category: 'Webinar',
    date: 'Mar 11, 2022',
    place: 'Discord',
  },
  {
    title: '7 Strategies for success',
    description:
      'Tasked to build an application to help consumers find agencies providing a specific service tasked to build.',
    linkUrl: '',
    category: 'Meetup',
    date: 'Mar 11, 2022',
    place: 'Discord',
  },
  {
    title: 'Application to help consumers',
    description:
      'Let’s say you’ve been tasked to build an application to help consumers find agencies providing a specific.',
    linkUrl: '',
    category: 'Conference',
    date: 'Mar 11, 2022',
    place: 'Discord',
  },
];

const Events = () => (
  <section className="get-involved safe-paddings relative z-10 mt-40">
    <div className="container grid grid-cols-12 grid-gap-x">
      <header className="col-span-4 col-start-3 pt-3">
        <Heading className="font-medium text-[44px] leading-denser" tag="h2" theme="white">
          {TITLE}
        </Heading>
        <p className="mt-4 text-gray-9 font-light leading-snug">{DESCRIPTION}</p>
        <Button className="mt-7 !text-[13px]" theme="gray-outline" size="sm">
          View All events
        </Button>
      </header>
      <ul className="col-span-4 pl-[50px] flex gap-y-6 flex-col">
        {ITEMS.map(({ title, description, linkUrl, category, date, place }, index) => (
          <li key={index} className="flex flex-col items-center'">
            <article className={clsx(index !== ITEMS.length - 1 && 'border-b pb-6 border-gray-3')}>
              <header className="flex gap-x-2.5 text-sm leading-denser text-gray-6">
                <span className="bg-clip-text bg-pink-red-gradient w-fit text-transparent">
                  {category}
                </span>
                <time className="relative pl-[11px] before:absolute before:left-0 before:w-px before:top-px before:bg-gray-4 before:h-3.5">
                  {date}
                </time>
                <span className="relative pl-[11px] before:absolute before:left-0 before:w-px before:top-px before:bg-gray-4 before:h-3.5">
                  {place}
                </span>
              </header>
              <h3 className="mt-2 text-2xl leading-tight">{title}</h3>
              <p className="mt-2 text-gray-9 font-light leading-snug">{description}</p>
              <Link
                className="mt-4 text-[13px] font-medium !tracking-normal leading-none inline-block"
                theme="primary-underline"
                to={linkUrl}
              >
                Learn more
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Events;
