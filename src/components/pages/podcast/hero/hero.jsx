import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
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
    <div className="container relative z-10 grid grid-cols-12 gap-x-8 lg:gap-x-7 sm:flex sm:flex-col sm:gap-0 sm:space-y-10">
      <div className="col-start-1 col-end-7 flex flex-col">
        <h1
          className="text-highlighting-colorful-gradient mt-4 text-[72px] font-bold leading-none lg:text-6xl md:text-4xl sm:text-[32px]"
          dangerouslySetInnerHTML={{ __html: TITLE }}
        />
        <p
          className="mt-6 max-w-[590px] text-lg font-book leading-tight text-gray-9 lg:mt-5 md:mt-4 md:text-base"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />

        <div className="mt-7 flex space-x-6 lg:mt-6 md:mt-5 md:space-x-4">
          <Link
            className="flex items-center space-x-2 rounded-md border border-gray-4 p-2 pr-4 sm:pr-2"
            {...LINKS.applePodcasts}
          >
            <ApplePodcastIcon className="h-9 flex-shrink-0 md:h-8" />
            <div className="flex flex-col">
              <span className="text-xs leading-none md:text-[10px]">Listen on</span>
              <span className="mt-1 font-bold leading-none md:mt-0.5 xs:text-sm xs:font-medium">
                Apple Podcasts
              </span>
            </div>
          </Link>
          <Link
            className="flex items-center space-x-2 rounded-md border border-gray-4 p-2 pr-4 sm:pr-2"
            {...LINKS.spotify}
          >
            <SpotifyIcon className="h-9 flex-shrink-0 md:h-8" />
            <div className="flex flex-col">
              <span className="text-xs leading-none md:text-[10px]">Listen on</span>
              <span className="mt-1 font-bold leading-none md:mt-0.5 xs:text-sm xs:font-medium">
                Spotify
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="col-start-7 col-end-13 sm:mx-auto sm:max-w-[328px]">
        <StaticImage
          className="-mt-[28px] -mb-[48px] -ml-[38px] max-w-[716px] lg:-my-5 lg:-ml-[26px] md:-my-3.5 md:-ml-5"
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
