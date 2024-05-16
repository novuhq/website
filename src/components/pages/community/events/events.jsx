import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const TITLE = 'Engage in events, forging connections, and gaining insights';

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
  <section className="events safe-paddings relative z-10 mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container grid grid-cols-12 grid-gap-x">
      <header className="col-span-4 col-start-3 pt-3 xl:col-span-5 xl:col-start-2 lg:col-span-6 lg:pt-0 sm:col-span-full">
        <Heading
          className="font-medium text-[44px] leading-denser lg:text-5xl lg:leading-tight md:text-[32px] sm:text-3xl"
          tag="h2"
          theme="white"
        >
          {TITLE}
        </Heading>
        <p className="mt-4 text-gray-9 font-light leading-snug sm:mt-3">
          Let’s say you’ve been tasked to build an application to help consumers find agencies
          providing a specific service tasked to build. To&nbsp;build an application to help
          consumers
        </p>
        <Button className="mt-7 !text-[13px] md:h-11 sm:mt-6" theme="gray-outline" size="sm">
          View All events
        </Button>
      </header>
      <ul className="col-span-4 pl-[50px] flex gap-y-6 flex-col xl:col-span-5 lg:col-span-6 lg:pl-[52px] md:pl-0 sm:col-span-full sm:mt-8 sm:gap-y-5">
        {ITEMS.map(({ title, description, linkUrl, category, date, place }, index) => (
          <li key={index} className="flex flex-col items-center'">
            <article
              className={clsx(
                index !== ITEMS.length - 1 && 'border-b pb-6 border-gray-3 sm:pb-5',
                'lg:max-w-[405px] sm:max-w-none'
              )}
            >
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
              <h3 className="mt-2 text-2xl leading-tight md:text-xl sm:text-lg">{title}</h3>
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
