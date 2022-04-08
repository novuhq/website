import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading from 'components/shared/heading/heading';
import Link from 'components/shared/link/link';

import discord from './images/discord.svg';
import github from './images/github.svg';
import twitter from './images/twitter.svg';

const TITLE = 'Built by the community';
const DESCRIPTION = `Open-source is in the heart of Notu. We keep all the source code and work publicly available. Join our community driven project with <strong class="text-white">over 3,000+ developers</strong> from around the world who contribute code and help building the modern notification infrastructure.`;

const SOCIAL_TILE = 'Join the community:';
const SOCIAL_ITEMS = [
  {
    icon: <img src={github} alt="" loading="lazy" width={46} height={45} />,
    url: '/',
    countFollowers: '3k',
  },
  {
    icon: <img src={discord} alt="" loading="lazy" width={46} height={34} />,
    url: '/',
  },
  {
    icon: <img src={twitter} alt="" loading="lazy" width={40} height={32} />,
    url: '/',
  },
];

const socialCardGradient = `before:to-[rgba(0,0,0,0.1)] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-2xl before:bg-gradient-to-t before:from-black before:opacity-100 before:transition-all before:duration-200
 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-2xl after:bg-gradient-to-t after:from-gray-3 after:to-gray-3 after:opacity-0 after:transition-all after:duration-200 hover:before:opacity-0 hover:after:opacity-100`;

const Community = () => (
  <section className="community safe-paddings bg-gray-2 pt-30 pb-40 lg:py-24 md:pt-18 md:pb-28 sm:pt-12 sm:pb-18">
    <div className="container grid-gap-x grid grid-cols-12 items-center md:flex md:flex-col">
      <div className="col-start-1 col-end-5 lg:col-end-6 md:text-center">
        <Heading size="lg" tag="h2" className="leading-tight lg:text-4xl sm:text-3xl" theme="white">
          {TITLE}
        </Heading>
        <div
          className="mt-5 text-lg font-light leading-snug text-gray-8 lg:mt-3 lg:max-w-[324px] lg:text-base md:max-w-full"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />

        <div className="mt-10 lg:mt-7">
          <h4 className="text-white">{SOCIAL_TILE}</h4>
          <div className="mt-5 flex space-x-6 md:justify-center sm:space-x-8 xs:justify-between xs:space-x-0">
            {SOCIAL_ITEMS.map(({ icon, url, countFollowers }, index) => (
              <Link
                className={clsx(
                  'group relative flex h-[88px] w-[88px] items-center justify-center rounded-2xl',
                  socialCardGradient
                )}
                to={url}
                key={index}
              >
                <div className="relative z-10">{icon}</div>
                {countFollowers && (
                  <span className="absolute -top-1 -right-1 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-secondary-2 font-bold leading-none transition-colors duration-200 group-hover:bg-primary-1">
                    {countFollowers}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="col-start-6 col-end-13 md:mt-11 sm:mt-8" aria-hidden>
        <StaticImage
          className="md:mx-auto md:max-w-[712px]"
          src="./images/illustration.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Community;
