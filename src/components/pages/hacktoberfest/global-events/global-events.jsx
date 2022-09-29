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
                <td className="whitespace-nowrap pr-5 font-medium md:pr-3.5">{date}</td>
                <td className="whitespace-nowrap pr-5 font-medium md:pr-3.5">{time}</td>
                <td className="whitespace-nowrap pr-5 text-gray-9 md:pr-3.5">{utc}</td>
                <td className="pr-5 font-medium md:pr-3.5">{title}</td>
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
