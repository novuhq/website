import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import csabaKissi from './images/csaba-kissi.png';
import doinfinehq from './images/doinfinehq.png';
import fgribreau from './images/fgribreau.png';
import lukasboehler from './images/lukasboehler.png';
import nathanTarbert from './images/nathan-tarbert.png';
import nikkisiapno from './images/nikkisiapno.png';
import psteinroe from './images/psteinroe.png';
import rauchg from './images/rauchg.png';

const TITLE = 'Loved by engineers from around the world';
const DESCRIPTION =
  "Explore tweets from engineers worldwide and see why they're fans of our company's innovations.";

const ITEMS = [
  {
    text: 'Todos for today: #ship a @GleapSDK update that utilizes @novuhq for amazing notifications 🎉',
    author: {
      name: 'Lukas',
      username: '@lukasboehler',
      avatar: lukasboehler,
    },
  },
  {
    text: 'migrating to @novuhq be like...',
    author: {
      name: 'Philipp Steinrötter',
      username: '@psteinroe',
      avatar: psteinroe,
    },
    image: (
      <StaticImage
        className="mt-5 w-full max-w-[282px] rounded"
        src="./images/console.jpg"
        alt="Console output"
        width={282}
        height={216}
        loading="lazy"
      />
    ),
  },
  {
    text: 'Thanks to a great tool called @novuhq, we can easily implement notifications into our upcoming v0.5.0 release.',
    author: {
      name: 'Doinfine',
      username: '@doinfinehq',
      avatar: doinfinehq,
    },
    image: (
      <StaticImage
        className="mt-5 w-full max-w-[282px] rounded"
        src="./images/notification.jpg"
        alt="Notification"
        width={282}
        height={77}
        loading="lazy"
      />
    ),
  },
  {
    text: "Novu make notification management much easier. They're doing a great job with the service they offer.",
    author: {
      name: 'Nikki Siapno',
      username: '@NikkiSiapno',
      avatar: nikkisiapno,
    },
  },
  {
    text: 'So excited about the rise of the notifications infrastructure space (+ open source 🔥)',
    author: {
      name: 'Guillermo Rauch',
      username: '@rauchg',
      avatar: rauchg,
    },
  },
  {
    text: 'The best solution for notifications.',
    author: {
      name: 'Csaba Kissi',
      username: '@csaba_kissi',
      avatar: csabaKissi,
    },
  },
  {
    text: 'Amazon Simple Notification Service: @novuhq',
    author: {
      name: 'Nathan🔸Tarbert',
      username: '@nathan_tarbert',
      avatar: nathanTarbert,
    },
  },
  {
    text: 'Finally, someone (Novu) made an open-source notification center',
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
      <ul className="masonry mt-10 flex h-[687px] w-full gap-10 lg:h-[760px] lg:gap-7 md:space-x-0 sm:mt-6 sm:h-auto sm:gap-x-5 sm:gap-y-5">
        {ITEMS.map(({ text, image, author }, index) => (
          <li
            key={index}
            className="masonry__item h-fit w-[calc(25%-30px)] rounded-xl bg-gradient-to-b from-gray-2 to-gray-2/70 px-7 py-6 lg:w-[calc(33%-18px)] lg:px-6 lg:pt-5 md:w-[calc(33%-13px)] sm:w-full"
          >
            <p className="text-lg leading-snug lg:text-base">{text}</p>
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
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Reviews;
