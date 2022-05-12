import React from 'react';

import Link from 'components/shared/link';
import './banner.css';

import ArrowIcon from './images/arrow.inline.svg';
import illustrationLeft from './images/illustration-left.svg';
import illustrationRight from './images/illustration-right.svg';

const Banner = () => (
  <Link
    className="group relative z-20 block overflow-hidden bg-gray-3 py-2.5"
    to="/blog/seed-funding"
  >
    <div className="container relative flex items-center justify-center">
      <p className="banner-text">
        We are thrilled to announce our <span>$6.6m</span> seed funding
        <ArrowIcon
          className="ml-2.5 inline-block h-2.5 w-5 transition-colors duration-200 group-hover:text-primary-1"
          arria-hidden
        />
      </p>

      <img
        className="absolute left-24 xl:left-0 lg:-left-30 md:-left-60 sm:hidden"
        src={illustrationLeft}
        alt=""
        loading="eager"
        arria-hidden
      />
      <img
        className="absolute right-24 xl:right-0 lg:-right-30 md:-right-60 sm:hidden"
        src={illustrationRight}
        alt=""
        loading="eager"
        arria-hidden
      />
    </div>
  </Link>
);

export default Banner;
