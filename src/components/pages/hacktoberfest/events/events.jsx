import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TITLE = 'Events all month long';
const DESCRIPTION =
  'Join forces in virtual and in-person events to get your pull/merge requests done as a team, learn new skills, and meet lifelong friends.';
const ITEMS = [
  {
    title: 'Hacktoberfest Kick-Off',
    date: 'October 4',
    time: '11:00 AM',
    description: 'Eastern daylight time',
    link: 'https://www.meetup.com/ReactJS-Dallas/events/280000000/',
  },
  {
    title: 'Hacktoberfest hack party Asia Pacific Edition',
    date: 'October 12',
    time: '11:00 AM',
    description: 'Indian standard time',
    link: 'https://www.meetup.com/ReactJS-Dallas/events/280000000/',
  },
  {
    title: 'Hacktoberfest Hack Party',
    date: 'October 20',
    time: 'TBD',
    link: 'https://www.meetup.com/ReactJS-Dallas/events/280000000/',
  },
  {
    title: 'Hacktoberfest Wrap Party',
    date: 'October 27',
    time: '11:00 AM',
    description: 'Eastern daylight time',
    link: 'https://www.meetup.com/ReactJS-Dallas/events/280000000/',
  },
];
const Events = () => (
  <section className="events safe-paddings py-32 md:py-20 sm:py-16">
    <div className="container-lg text-center">
      <Heading className="leading-tight md:text-5xl sm:text-4xl" tag="h2" size="xl" theme="white">
        {TITLE}
      </Heading>
      <p className="mx-auto mt-11 max-w-[716px] text-lg text-gray-9 md:mt-8 md:max-w-none md:text-base">
        {DESCRIPTION}
      </p>
      <div className="mt-16 grid auto-rows-fr grid-cols-4 gap-x-10 gap-y-7 xl:grid-cols-2 md:mt-12 sm:mt-10 sm:auto-rows-auto sm:grid-cols-1 sm:gap-y-6">
        {ITEMS.map(({ title, date, time, description, link }, index) => {
          const isExternal = link.startsWith('http');
          return (
            <div
              className="flex flex-col rounded-[20px] py-6 px-5"
              style={{
                background:
                  'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%), #000000',
              }}
              key={index}
            >
              <Heading
                className="mb-5 font-medium leading-snug md:text-xl"
                tag="h3"
                size="xs"
                theme="purple"
              >
                {title}
              </Heading>
              <div className="mt-auto flex shrink flex-col">
                <span className="flex justify-center space-x-5 text-lg font-medium sm:text-base">
                  <date>{date}</date>
                  <time>{time}</time>
                </span>
                <span className="mt-1 mb-5 text-lg text-gray-9 sm:text-base">
                  {description || 'TBD'}
                </span>
                <Button
                  className="mt-auto h-7 self-center"
                  theme="yellow"
                  to={link}
                  target={isExternal ? '_blank' : null}
                  rel={isExternal ? 'noopener noreferrer' : null}
                  size="xs"
                >
                  Learn more
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Events;
