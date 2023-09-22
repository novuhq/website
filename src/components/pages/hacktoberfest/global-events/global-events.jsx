import React, { useMemo, useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const TITLE = 'Global events';
const DESCRIPTION =
  'Hacktoberfest events are happening all month long so you can join your friends day or night, from dusk to dawn, as you work to complete your pull/merge requests.';
const ITEMS = [
  {
    date: 'Oct 2',
    time: '03:00 PM',
    utc: 'UTC-05:00, R',
    title: 'Hacktoberfest kick-off with Novu team',
  },
  {
    date: 'Oct 5',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'Livestream with Chakra UI / Panda CSS',
  },
  {
    date: 'Oct 6',
    time: '05:00 PM',
    utc: 'UTC+02:00, B',
    title: 'Twitter spaces with Github stars Samson Goddy & Ruth Ikegah',
  },
  {
    date: 'Oct 10',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'Office hourse',
  },
  {
    date: 'Oct 12',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'Livestream with Appwrite',
  },
  {
    date: 'Oct 13',
    time: '03:00 PM',
    utc: 'UTC+01:00, A',
    title: 'Twitter Space with Alt School - Sultan & Jerry',
  },
  {
    date: 'Oct 31',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'C&S build night for Hacktoberfest, Night 5/5',
    link: 'https://www.meetup.com/Code-and-Supply/events/280000000/',
  },
  {
    date: 'Oct 17',
    time: '03:00 PM',
    utc: 'UTC+01:00, A',
    title: 'Novu (Hacksquad) - How to build an auth system',
  },
  {
    date: 'Oct 19',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'Livestream with Sourcegraph',
  },
  {
    date: 'Oct 20',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'Twitter Space with Francesco Ciulla',
  },
  {
    date: 'Oct 31',
    time: '10:00 PM',
    utc: 'UTC-05:00, R',
    title: 'Office Hours',
  },
];

const GlobalEvents = () => {
  const [isShownMore, setIsShownMore] = useState(false);

  const list = useMemo(() => (isShownMore ? ITEMS : ITEMS.slice(0, 2)), [isShownMore]);

  return (
    <section className="global-events safe-paddings bg-gray-2 py-20 sm:py-16">
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
      </div>
      <div className="md:scrollbar-hidden container-lg mt-12 md:mt-10 md:max-w-none md:overflow-x-auto sm:mt-8">
        <table className="w-full text-lg md:min-w-[1080px] md:text-base">
          <tbody className="divide-y divide-gray-4">
            {list.map(({ date, time, utc, title, link }, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap py-4 pr-5 font-medium md:pr-3.5">{date}</td>
                <td className="whitespace-nowrap pr-5 font-medium md:pr-3.5">{time}</td>
                <td className="whitespace-nowrap pr-5 text-gray-9 md:pr-3.5">{utc}</td>
                <td className="pr-5 font-medium md:pr-3.5">{title}</td>
                {link && (
                  <td className="!ml-auto flex justify-end py-4">
                    <Button
                      className="!h-7"
                      theme="yellow"
                      size="xs"
                      to={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!isShownMore && list.length !== ITEMS.length && (
        <div className="container-lg mt-8 text-center">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link
            type="button"
            size="sm"
            theme="primary-underline"
            tag="button"
            onClick={() => setIsShownMore(true)}
          >
            Load more events
          </Link>
        </div>
      )}
    </section>
  );
};

export default GlobalEvents;
