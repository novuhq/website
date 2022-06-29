import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import ApplePodcastIcon from 'icons/apple-podcast.inline.svg';
import SpotifyIcon from 'icons/spotify.inline.svg';

import bg from './images/bg.svg';

const TITLE = `Let's unravel top founders decisions
to build their
<br>
<span>COSS companies.</span>`;
const DESCRIPTION = `A podcast by Novu where our hosts <strong>Nevo David</strong> and <strong>Emillien Pearce</strong> talk with CEO, founders, and a wide range of People leaders about how people success is business success.`;

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden pt-36 pb-28 lg:pt-32 md:pt-28 md:pb-10 sm:pt-18">
    <div className="container relative z-10 grid grid-cols-12 gap-x-8 lg:gap-x-7 md:flex md:flex-col">
      <div className="col-start-1 col-end-7 flex flex-col md:order-2 md:mt-5">
        <Heading
          className="text-highlighting-colorful-gradient mt-4 text-[72px] font-bold leading-none sm:text-3xl"
          size="2xl"
          tag="h1"
          theme="white"
          asHTML
        >
          {TITLE}
        </Heading>
        <p
          className="mt-6 max-w-[590px] text-lg font-book leading-tight text-gray-9"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />

        <div className="mt-7 flex space-x-6">
          <Link
            className="flex items-center space-x-2 rounded-md border border-gray-4 p-2 pr-4"
            to="/"
          >
            <ApplePodcastIcon className="h-9" />
            <div className="flex flex-col">
              <span className="text-xs leading-none">Listen on</span>
              <span className="mt-1 font-bold leading-none">Apple Podcasts</span>
            </div>
          </Link>
          <Link
            className="flex items-center space-x-2 rounded-md border border-gray-4 p-2 pr-4"
            to="/"
          >
            <SpotifyIcon className="h-9" />
            <div className="flex flex-col">
              <span className="text-xs leading-none">Listen on</span>
              <span className="mt-1 font-bold leading-none">Spotify</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="col-start-7 col-end-13">
        <StaticImage
          className="-mt-[28px] -mb-[48px] -ml-[38px] max-w-[716px]"
          src="./images/podcast-hero-illustration.png"
          alt=""
          loading="eager"
        />
      </div>
    </div>

    <img
      className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
