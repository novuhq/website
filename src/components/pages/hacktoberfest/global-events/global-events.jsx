import React, { useMemo, useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const TITLE = 'Global events';
const DESCRIPTION =
  'Hacktoberfest events are happening all month long so you can join your friends day or night, from dusk to dawn, as you work to complete your pull/merge requests.';
const ITEMS = [
  {
    date: 'Oct 3',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'C&S build night for Hacktoberfest, Night 1/5',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 10',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'C&S build night for Hacktoberfest, Night 2/5',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 11',
    time: '00:00 AM',
    utc: 'UTC+02:00, B',
    title: 'Hacktoberfest 2022 at Nantes and Caen at our office KNPLabs',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 17',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'C&S build night for Hacktoberfest, Night 3/5',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 24',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'C&S build night for Hacktoberfest, Night 4/5',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 24',
    time: '03:00 PM',
    utc: 'UTC+01:00, A',
    title: 'Hacktoberfest Edition: Civictech open source hack night',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 31',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'C&S build night for Hacktoberfest, Night 5/5',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 24',
    time: '03:00 PM',
    utc: 'UTC+01:00, A',
    title: 'Hacktoberfest Edition: Civictech open source hack night',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 31',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'C&S build night for Hacktoberfest, Night 5/5',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
];

const GlobalEvents = () => {
  const [isShownMore, setIsShownMore] = useState(false);

  const list = useMemo(() => (isShownMore ? ITEMS : ITEMS.slice(0, 7)), [isShownMore]);

  return (
    <section className="safe-paddings bg-gray-2 pt-32 pb-20 md:pt-20 sm:pt-16 sm:pb-16">
      <div className="container-lg">
        <Heading
          className="text-center leading-tight md:text-5xl sm:text-4xl"
          tag="h2"
          theme="white"
          size="xl"
        >
          {TITLE}
        </Heading>
        <p className="mx-auto mt-11 max-w-[716px] text-center text-lg text-gray-9 md:mt-8 md:max-w-none md:text-base">
          {DESCRIPTION}
        </p>
        <div className="mt-12 md:mt-10 sm:mt-8 sm:overflow-x-auto">
          <table className="w-full min-w-[650px] divide-y divide-gray-4 text-lg md:text-base">
            {list.map(({ date, time, utc, title, link }, index) => (
              <tr key={index}>
                <td className="pr-5 font-medium md:pr-3.5">
                  <date>{date}</date>
                </td>
                <td className="pr-5 font-medium md:pr-3.5">
                  <time>{time}</time>
                </td>
                <td className="pr-5 text-gray-9 md:pr-3.5">{utc}</td>
                <td className="pr-5 font-medium md:pr-3.5">{title}</td>
                <td className="!ml-auto flex justify-center py-4">
                  <Button className="!h-7" theme="yellow" size="xs" to={link}>
                    Learn more
                  </Button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        {!isShownMore && list.length !== ITEMS.length && (
          <div className="mt-8 text-center">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              className="sm:text-sm"
              type="button"
              size="base"
              theme="primary-underline"
              tag="button"
              onClick={() => setIsShownMore(true)}
            >
              Load more events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default GlobalEvents;
