import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';

import csabaKissi from './images/csaba-kissi.jpg';
import doinfinehq from './images/doinfinehq.jpg';
import fgribreau from './images/fgribreau.jpg';
import lukasboehler from './images/lukasboehler.jpg';
import nathanTarbert from './images/nathan-tarbert.jpg';
import nikkisiapno from './images/nikkisiapno.jpg';
import psteinroe from './images/psteinroe.jpg';
import rauchg from './images/rauchg.jpg';

const TITLE = 'Loved by engineers from around the world';
const DESCRIPTION =
  "Explore tweets from engineers worldwide and see why they're fans of our company's innovations.";

const ITEMS = [
  {
    text: 'Todos for today: <span>#ship</span> a <span>@GleapSDK</span> update that utilizes <span>@novuhq</span> for amazing notifications 🎉',
    linkUrl: 'https://twitter.com/lukasboehler/status/1696793039841144916',
    author: {
      name: 'Lukas',
      username: '@lukasboehler',
      avatar: lukasboehler,
    },
  },
  {
    text: 'migrating to <span>@novuhq</span> be like...',
    linkUrl:
      'https://twitter.com/psteinroe/status/1602958750847062017?s=20&t=GazBEYVRhI2ch6xP7Wqn5A',
    author: {
      name: 'Philipp Steinrötter',
      username: '@psteinroe',
      avatar: psteinroe,
    },
    image: (
      <StaticImage
        className="mt-5 w-full rounded"
        src="./images/console.jpg"
        alt="Console output"
        loading="lazy"
      />
    ),
  },
  {
    text: 'Thanks to a great tool called <span>@novuhq</span>, we can easily implement notifications into our upcoming v0.5.0 release.',
    linkUrl: 'https://twitter.com/doinfinehq/status/1671123804049874947',
    author: {
      name: 'Doinfine',
      username: '@doinfinehq',
      avatar: doinfinehq,
    },
    image: (
      <StaticImage
        className="mt-5 w-full rounded"
        src="./images/notification.jpg"
        alt="Notification"
        loading="lazy"
      />
    ),
  },
  {
    text: "Novu make notification management much easier. They're doing a great job with the service they offer.",
    linkUrl: 'https://twitter.com/NikkiSiapno/status/1696509202993426884',
    author: {
      name: 'Nikki Siapno',
      username: '@NikkiSiapno',
      avatar: nikkisiapno,
    },
  },
  {
    text: 'So excited about the rise of the notifications infrastructure space (+ open source 🔥)',
    linkUrl: 'https://twitter.com/rauchg/status/1557048605042565120',
    author: {
      name: 'Guillermo Rauch',
      username: '@rauchg',
      avatar: rauchg,
    },
  },
  {
    text: 'The best solution for notifications.',
    linkUrl: 'https://twitter.com/csaba_kissi/status/1696056864373416109',
    author: {
      name: 'Csaba Kissi',
      username: '@csaba_kissi',
      avatar: csabaKissi,
    },
  },
  {
    text: 'Amazon Simple Notification Service: <span>@novuhq</span>',
    linkUrl: 'https://twitter.com/nathan_tarbert/status/1692654472952959300',
    author: {
      name: 'Nathan🔸Tarbert',
      username: '@nathan_tarbert',
      avatar: nathanTarbert,
    },
  },
  {
    text: 'Finally, someone (Novu) made an open-source notification center',
    linkUrl: 'https://twitter.com/FGRibreau/status/1686631921797767168',
    author: {
      name: 'Francois-Guillaume Ribreau',
      username: '@FGRibreau',
      avatar: fgribreau,
    },
  },
];

const Reviews = () => (
  <section className="reviews safe-paddings bg-black pt-40 lg:pt-28 md:pt-16 sm:pt-11">
    <div className="container">
      <h3 className="text-center text-6xl leading-tight text-white md:text-3xl">{TITLE}</h3>
      <p className="mx-auto mt-5 max-w-[720px] text-center text-lg leading-snug text-gray-9 lg:mt-3 lg:text-base">
        {DESCRIPTION}
      </p>
      <ul className="mt-10 flex h-[687px] w-full flex-col flex-wrap content-between gap-y-10 lg:h-[760px] lg:gap-y-7 sm:mt-6 sm:h-auto sm:flex-nowrap sm:gap-y-5">
        {ITEMS.map(({ text, image, author, linkUrl }, index) => (
          <li
            key={index}
            className={clsx(
              index % 4 === 0 && 'order-1',
              index % 4 === 1 && 'order-2',
              index % 4 === 2 && 'order-3',
              index % 4 === 3 && 'order-4',
              index % 3 === 0 && 'lg:order-1',
              index % 3 === 1 && 'lg:order-2',
              index % 3 === 2 && 'lg:order-3',
              'relative w-[calc(25%-30px)] overflow-hidden rounded-xl lg:w-[calc(33%-18px)] md:w-[calc(33%-13px)] sm:order-none sm:w-full'
            )}
          >
            <Link
              className="relative z-10 block bg-gradient-to-b from-gray-2 to-gray-2/70 px-7 py-6 transition-colors duration-300 hover:bg-gray-3 lg:px-6 lg:pt-5"
              to={linkUrl}
              target="_blank"
              rel="nofollow noopener"
            >
              <p
                className="text-lg leading-snug lg:text-base [&>span]:text-primary-1"
                dangerouslySetInnerHTML={{ __html: text }}
              />
              {image && image}
              <div className="mt-8 flex items-center gap-x-3 lg:mt-6">
                <img
                  className="h-12 w-12 rounded-full lg:h-11 lg:w-11"
                  src={author.avatar}
                  alt={author.name}
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div>
                  <span className="block leading-tight lg:text-sm">{author.name}</span>
                  <span className="mt-1 block leading-tight text-gray-8 lg:text-sm">
                    {author.username}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Reviews;
