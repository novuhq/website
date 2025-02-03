import React from 'react';

import Link from 'components/shared/link';
import bannerData from 'data/link-banner';

import bgImage from './images/banner-bg.jpg';

const LinkBanner = () => {
  const { text, url, isActive } = bannerData;

  if (!isActive) return null;

  return (
    <section className="sticky top-0 z-50 overflow-hidden bg-[#0B0C0F]">
      <Link
        className="relative z-10 h-9 w-full justify-center"
        to={url}
        size="sm"
        theme="white"
        withArrow
      >
        {text}
      </Link>
      <img
        className="absolute inset-y-0 left-1/2 h-auto min-w-[1920px] -translate-x-1/2 xs:-translate-x-[45%] sm-xs:-translate-x-[40%]"
        src={bgImage}
        alt=""
        loading="eager"
        aria-hidden
      />
    </section>
  );
};

export default LinkBanner;
