import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';

import aeswibon from './images/aeswibon.jpg';
import csabaKissi from './images/csaba-kissi.jpg';
import doinfinehq from './images/doinfinehq.jpg';
import levlaz from './images/levlaz.jpg';
import lukasboehler from './images/lukasboehler.jpg';
import madebyfabian from './images/madebyfabian.jpg';
import nikkisiapno from './images/nikkisiapno.jpg';
import pontusab from './images/pontusab.jpg';
// import psteinroe from './images/psteinroe.jpg';
// import rauchg from './images/rauchg.jpg';
// import nathanTarbert from './images/nathan-tarbert.jpg';
// import fgribreau from './images/fgribreau.jpg';
// import merlindru from './images/merlindru.jpg';
import vishucodes from './images/vishucodes.jpg';

const TITLE = 'Loved by developers and product teams';
const DESCRIPTION =
  "Explore tweets from developers and non-technical users and see why they're fans of our open-source notifications framework.";

const ITEMS = [
  {
    text: 'New <span>@middayai</span> engineering blog post just dropped. Learn how we are using <span>@novuhq</span> as our notification infrastructure. Link in thread 🧵⬇️',
    linkUrl: 'https://x.com/pontusab/status/1785312430882714031',
    author: {
      name: 'Pontus Abrahamsson',
      username: '@pontusab',
      avatar: pontusab,
    },
    image: (
      <StaticImage
        className="mt-5 w-full rounded"
        src="./images/novumidday.jpeg"
        alt="MiddayAI uses Novu"
        loading="lazy"
      />
    ),
  },
  {
    text: 'Novu is so dope!',
    linkUrl: 'https://x.com/levlaz/status/1810734219330736300',
    author: {
      name: 'Lev Lazinskiy',
      username: '@levlaz',
      avatar: levlaz,
    },
  },
  {
    text: 'Haha yeah I’m so happy my notification logic isn’t inside the database anymore. Love Novu!🚀',
    linkUrl: 'https://x.com/madebyfabian/status/1603010122451746816',
    author: {
      name: 'Fabian B.',
      username: '@madebyfabian',
      avatar: madebyfabian,
    },
  },
  {
    text: 'Todos for today: <span>#ship</span> a <span>@GleapSDK</span> update that utilizes <span>@novuhq</span> for amazing notifications 🎉',
    linkUrl: 'https://twitter.com/lukasboehler/status/1696793039841144916',
    author: {
      name: 'Lukas Boehler',
      username: '@lukasboehler',
      avatar: lukasboehler,
    },
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
    text: 'The best solution for notifications.',
    linkUrl: 'https://twitter.com/csaba_kissi/status/1696056864373416109',
    author: {
      name: 'Csaba Kissi',
      username: '@csaba_kissi',
      avatar: csabaKissi,
    },
  },
  {
    text: "That's awesome! Real-time notifications can really boost user engagement. Love that <span>@novuhq</span> supports multiple frameworks & customization options. Definitely giving the repo a star to show support! 🌟 <span>#OpenSource #SoftwareDevelopment</span>",
    linkUrl: 'https://x.com/aeswibon/status/1696467646429147200',
    author: {
      name: 'Abhiuday',
      username: '@aeswibon',
      avatar: aeswibon,
    },
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
    text: 'Hey Developers👋<br/>What are you doing today?<br/>Me:-<br/>Implementing <span>@novuhq</span> notifications in spring boot',
    linkUrl: 'https://x.com/vishucodes/status/1810576925456523330',
    author: {
      name: 'Vishu',
      username: '@vishucodes',
      avatar: vishucodes,
    },
  },
  /*  {
    text: 'This is how you write an article!!! Convinced to use <span>@novuhq</span> or similar instead of rolling my own after reading it',
    linkUrl: 'https://x.com/merlindru/status/1782045528026444205',
    author: {
      name: 'Merlin',
      username: '@merlindru',
      avatar: merlindru,
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
*/
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
