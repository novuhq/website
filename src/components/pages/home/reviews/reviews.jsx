import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Slider from 'react-slick';

import Link from 'components/shared/link';
import ArrowIcon from 'icons/review-arrow.inline.svg';

import Heading from '../../../shared/heading';

import aeswibon from './images/aeswibon.jpg';
import csabaKissi from './images/csaba-kissi.jpg';
import doinfinehq from './images/doinfinehq.jpg';
import levlaz from './images/levlaz.jpg';
import lukasboehler from './images/lukasboehler.jpg';
import madebyfabian from './images/madebyfabian.jpg';
import nikkisiapno from './images/nikkisiapno.jpg';
import pontusab from './images/pontusab.jpg';
// import psteinroe from './images/psteinroe.jpg';
import rauchg from './images/rauchg.jpg';
// import ArrowIcon from 'icons/chevron.inline.svg';
// import nathanTarbert from './images/nathan-tarbert.jpg';
// import fgribreau from './images/fgribreau.jpg';
// import merlindru from './images/merlindru.jpg';
// import vishucodes from './images/vishucodes.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './reviews.css';

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
        className="mt-5 w-full rounded-2xl"
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
        className="mt-5 w-full rounded-2xl"
        src="./images/notification.jpg"
        alt="Notification"
        loading="lazy"
      />
    ),
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
  /*
  {
    text: 'Hey Developers👋<br/>What are you doing today?<br/>Me:-<br/>Implementing <span>@novuhq</span> notifications in spring boot',
    linkUrl: 'https://x.com/vishucodes/status/1810576925456523330',
    author: {
      name: 'Vishu',
      username: '@vishucodes',
      avatar: vishucodes,
    },
  },
  {
    text: 'This is how you write an article!!! Convinced to use <span>@novuhq</span> or similar instead of rolling my own after reading it',
    linkUrl: 'https://x.com/merlindru/status/1782045528026444205',
    author: {
      name: 'Merlin',
      username: '@merlindru',
      avatar: merlindru,
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

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      className="group absolute inset-y-1/2 -right-12 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-[#333347]/60 to-[#2B2B3B]/40 p-[1px] transition-all duration-300 hover:from-[#272730] hover:via-[#5C638A]/50 hover:to-[#5C638A]"
      type="button"
      aria-label="Prev testimonial"
      onClick={onClick}
    >
      <span className="flex h-full w-full items-center justify-center rounded-full bg-[#111018] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#111018] group-hover:via-[#302D43] group-hover:to-[#464C6D]">
        <ArrowIcon
          className="h-auto w-full rotate-180 transition-colors duration-300 [&>path]:stroke-[#666666] group-hover:[&>path]:stroke-[#C7C9D1]"
          aria-hidden
        />
      </span>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <button
      className="group absolute inset-y-1/2 -left-12 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-[#333347]/60 to-[#2B2B3B]/40 p-[1px] transition-all duration-300 hover:from-[#272730] hover:via-[#5C638A]/50 hover:to-[#5C638A]"
      type="button"
      aria-label="Prev testimonial"
      onClick={onClick}
    >
      <span className="flex h-full w-full items-center justify-center rounded-full bg-[#111018] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#111018] group-hover:via-[#302D43] group-hover:to-[#464C6D]">
        <ArrowIcon
          className="h-auto w-full transition-colors duration-300 [&>path]:stroke-[#666666] group-hover:[&>path]:stroke-[#C7C9D1]"
          aria-hidden
        />
      </span>
    </button>
  );
};

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="reviews safe-paddings mt-[200px] md:mt-36 sm:mt-20">
      <div className="container-lg xl:px-0 lg:w-full lg:max-w-5xl lg:px-8 md:max-w-3xl sm:px-5">
        <Heading
          className="text-center font-medium leading-denser tracking-snug md:text-[40px] sm:text-[32px] xs:text-[29px]"
          size="44"
          tag="h3"
        >
          {TITLE}
        </Heading>
        <p className="mx-auto mt-3.5 max-w-xl text-center text-[17px] font-book leading-snug text-gray-9 md:text-base">
          {DESCRIPTION}
        </p>
        <div className="relative -mx-4 mt-14 xl:mx-12 md:mx-[42px] md:mt-12 sm:mx-10 sm:mt-10 xs:-mx-5 xs:mt-9">
          <Slider className="flex w-full" {...settings}>
            {ITEMS.map(({ text, author, linkUrl }, index) => (
              <div key={index} className="relative h-full">
                <Link
                  className="relative z-10 flex h-full flex-col rounded-xl border border-[rgba(51,51,71,0.60)] bg-[#111018] px-6 py-5 transition-colors duration-300 hover:bg-[#15141D] xs:px-5 xs:pb-4"
                  to={linkUrl}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <p
                    className="xs:mb-4.5 mb-5 line-clamp-5 text-base leading-snug md:text-[15px] [&>span]:text-primary-1"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                  <div className="mt-auto flex items-center gap-x-3 border-t border-t-[#333347] pt-5">
                    <img
                      className="h-9 w-9 rounded-full"
                      src={author.avatar}
                      alt={author.name}
                      width={36}
                      height={36}
                      loading="lazy"
                    />
                    <div>
                      <span className="block text-base leading-none text-gray-9 md:text-[15px]">
                        {author.name}
                      </span>
                      <span className="mt-[6px] block text-sm leading-none text-gray-8 md:text-sm">
                        {author.username}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
