import React from 'react';

import Link from 'components/shared/link';

import ArrowIcon from './images/arrow.inline.svg';
import illustrationLeft from './images/illustration-left.svg';
import illustrationRight from './images/illustration-right.svg';

const Banner = () => (
  <Link
    className="top-banner group relative z-30 block overflow-hidden bg-gray-3 py-2.5"
    target="_blank"
    to="https://www.producthunt.com/golden-kitty-awards/hall-of-fame#open-source"
  >
    <div className="container relative flex items-center justify-center">
      <p className="text-highlighting-secondary-2-gradient text-center text-base sm:text-sm">
        {/* Novu won the Product Hunt Golden Kitty <span className="text-xl font-bold sm:text-base">open-source</span>, help us by
        starring our GitHub repo 🚀 */}
        {/* -----------------callout for golden kitty awards */}
        Novu won a Product Hunt {' '}
        <span className="text-xl font-bold sm:text-base">Golden Kitty Award</span> for best Open Source project
        {/* ------------------------------------------------ */}
        <ArrowIcon
          className="ml-2.5 inline-block h-2.5 w-5 transition-colors duration-200 group-hover:text-primary-1"
          aria-hidden
        />
      </p>

      <img
        className="absolute left-24 xl:left-0 lg:-left-30 md:-left-60 sm:-left-80"
        src={illustrationLeft}
        alt=""
        loading="eager"
        aria-hidden
      />
      <img
        className="absolute right-24 xl:right-0 lg:-right-30 md:-right-60 sm:-right-80"
        src={illustrationRight}
        alt=""
        loading="eager"
        aria-hidden
      />
    </div>
  </Link>
);

export default Banner;
