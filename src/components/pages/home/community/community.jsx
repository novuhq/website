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

const Community = () => (
  <section className="community safe-paddings bg-gray-2 pt-28 pb-40">
    <div className="container flex items-center justify-between lg:flex-col">
      <div className="max-w-[464px] xl:max-w-[525px] lg:max-w-[782px] lg:text-center md:max-w-[712px] sm:w-full sm:max-w-none">
        <Heading size="xl" tag="h2" className="leading-tight xl:text-5xl sm:text-3xl">
          {TITLE}
        </Heading>
        <div
          className="mt-5 text-lg font-light text-gray-8 sm:text-base"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />

        <div className="mt-10">
          <h4 className="text-white">{SOCIAL_TILE}</h4>
          <div className="mt-5 flex space-x-6 lg:justify-center">
            {SOCIAL_ITEMS.map(({ icon, url, countFollowers }, index) => (
              <Link
                className="relative flex h-[88px] w-[88px] items-center justify-center rounded-2xl bg-social-card-gradient transition-colors duration-200 hover:bg-hover-social-card-gradient"
                to={url}
                key={index}
              >
                {countFollowers && (
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-secondary-2 font-bold leading-none">
                    {countFollowers}
                  </span>
                )}
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:mt-6" aria-hidden>
        <StaticImage
          className="max-w-[842px] xl:max-w-[600px] lg:max-w-[782px] md:max-w-[712px] sm:max-w-full"
          src="./images/illustration.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Community;
