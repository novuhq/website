import React, { useMemo, useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

const TITLE = 'Global events';
const DESCRIPTION =
  'Hacktoberfest events are happening all month long so you can join your friends day or night, from dusk to dawn, as you work to complete your pull/merge requests.';
const ITEMS = [
  {
    date: 'Date',
    time: 'Time (In WAT)',
    utc: 'Time in UTC',
    title: 'Event',
  },
  {
    date: 'Oct 2',
    time: '03:00 PM',
    utc: '02:00 PM UTC',
    title: 'Hacktoberfest kick-off with Novu team',
    link: 'https://novu-co.zoom.us/webinar/register/WN_554VmkuaQ6iDqSPXPd2hLg',
  },
  {
    date: 'Oct 5',
    time: '10:00 PM',
    utc: '09:00 PM UTC',
    title: 'Livestream with Chakra UI / Panda CSS',
    link: 'https://novu-co.zoom.us/webinar/register/WN_QtJh33oqS9mKkmizmRGFVA',
  },
  {
    date: 'Oct 6',
    time: '05:00 PM',
    utc: '04:00 PM UTC',
    title: 'Twitter space with Github stars Samson Goddy & Ruth Ikegah',
    link: 'https://twitter.com/i/spaces/1dRKZEzDbzmxB',
  },
  {
    date: 'Oct 10',
    time: '01:00 PM',
    utc: '12:00 PM UTC',
    title: 'Office hours',
    link: 'https://novu-co.zoom.us/webinar/register/WN_AxbuSpetTqOT1CYWbMYG8g',
  },
  {
    date: 'Oct 12',
    time: '04:00 PM',
    utc: '03:00 PM UTC',
    title: 'Livestream with Appwrite',
    link: 'https://novu-co.zoom.us/webinar/register/WN_eAGFff5_Tg6qAW99BgEjqQ',
  },
  {
    date: 'Oct 13',
    time: '06:00 PM',
    utc: '05:00 PM UTC',
    title: 'Twitter Space with Alt School - Sultan & Jerry',
    link: 'https://twitter.com/i/spaces/1lDxLPdLNkZxm',
  },
  {
    date: 'Oct 17',
    time: '08:00 PM',
    utc: '07:00 PM UTC',
    title: 'Novu (Hacksquad) - How to build an auth system',
  },
  {
    date: 'Oct 19',
    time: '04:00 PM',
    utc: '03:00 PM UTC',
    title: 'Livestream with Sourcegraph',
    link: 'https://novu-co.zoom.us/webinar/register/WN_T5tYzTIVQLmvi8XriGFDDQ',
  },
  {
    date: 'Oct 20',
    time: '06:00 PM',
    utc: '05:00 PM UTC',
    title: 'Twitter Space with Francesco Ciulla',
    link: 'https://twitter.com/i/spaces/1dRKZEBkOPoxB',
  },
  {
    date: 'Oct 31',
    time: '01:00 PM',
    utc: '12:00 PM UTC',
    title: 'Office Hours',
  },
];

const GlobalEvents = () => {
  const [isShownMore, setIsShownMore] = useState(false);

  const list = useMemo(() => (isShownMore ? ITEMS : ITEMS.slice(0, 2)), [isShownMore]);

  return (
    <section className="global-events safe-paddings py-20 sm:py-16">
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
                <td
                  className={`whitespace-nowrap py-4 pr-5 ${
                    date === 'Date' ? 'text-2xl' : 'font-medium'
                  } md:pr-3.5`}
                >
                  {date}
                </td>
                <td
                  className={`whitespace-nowrap pr-5 ${
                    time === 'Time' ? 'text-2xl' : 'font-medium'
                  } md:pr-3.5`}
                >
                  {time}
                </td>
                <td
                  className={`whitespace-nowrap pr-5 ${
                    time === 'Time' ? 'text-2xl font-medium' : 'text-gray-9'
                  } md:pr-3.5`}
                >
                  {utc}
                </td>
                <td
                  className={`pr-5 font-medium ${
                    title === 'Event' ? 'text-2xl font-medium' : ''
                  } md:pr-3.5`}
                >
                  {title}
                </td>
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
                      RSVP
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
