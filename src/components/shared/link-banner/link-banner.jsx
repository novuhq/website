import React from 'react';

import Link from 'components/shared/link';
import bannerData from 'data/link-banner';

import bgImage from './images/banner-bg.jpg';

const outsideSettings = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const LinkBanner = () => {
  const { text, url, isActive } = bannerData;
  const isExternal = !url.startsWith('/');

  if (!isActive) return null;

  return (
    <section className="link-banner sticky top-0 z-50 overflow-hidden bg-[#0B0C0F] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-white after:mix-blend-overlay">
      <Link
        className="relative z-20 h-9 w-full justify-center"
        to={url}
        size="sm"
        theme="white"
        {...(isExternal && outsideSettings)}
        withArrow
      >
        {text}
      </Link>
      <img
        className="absolute inset-y-0 left-1/2 z-10 h-9 min-w-[1920px] -translate-x-1/2 object-bottom xs:-translate-x-[45%] sm-xs:-translate-x-[40%]"
        src={bgImage}
        alt=""
        loading="eager"
        aria-hidden
      />
    </section>
  );
};

export default LinkBanner;
