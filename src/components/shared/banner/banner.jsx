import React from 'react';

import Link from 'components/shared/link';

import ArrowIcon from './images/arrow.inline.svg';
import illustrationLeft from './images/illustration-left.svg';
import illustrationRight from './images/illustration-right.svg';

const Banner = () => (
  <Link
    className="group relative z-20 block overflow-hidden bg-gray-3 py-2.5 md:py-4 md:px-7 sm:py-3.5 sm:px-4"
    to="/polishing/"
  >
    <div className="relative flex items-center justify-center">
      <p className="text-highlighting-secondary-2-gradient text-center text-base sm:text-sm">
        We are polishing, One month dedicated for{' '}
        <span className="text-xl font-bold sm:text-base">bug fixing</span> and performance
        <ArrowIcon
          className="ml-2.5 inline-block h-2.5 w-5 transition-colors duration-200 group-hover:text-primary-1"
          aria-hidden
        />
      </p>

      <img
        className="absolute left-3 xl:-left-12 lg:-left-40 md:-left-80 sm:-left-80"
        src={illustrationLeft}
        alt=""
        loading="eager"
        aria-hidden
      />
      <img
        className="absolute right-3 xl:-right-12 lg:-right-40 md:-right-80 sm:-right-80"
        src={illustrationRight}
        alt=""
        loading="eager"
        aria-hidden
      />
    </div>
  </Link>
);

export default Banner;
