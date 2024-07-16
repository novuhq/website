import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import LINKS from 'constants/links';

import bgSm from './images/bg-sm.svg';
import bg from './images/bg.svg';
import heart from './images/heart.svg';

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden pb-36 pt-36 lg:pb-16 lg:pt-32 md:pb-14 md:pt-30 sm:pb-11 sm:pt-24">
    <div className="container relative z-10 flex flex-col items-center">
      <img className="" src={heart} width={154} height={154} loading="eager" alt="" />
      <Heading
        className="mt-11 font-bold leading-denser md:max-w-[712px] md:text-4xl sm:text-[34px]"
        size="3xl"
        tag="h1"
        theme="white"
      >
        We can't wait to meet you!
      </Heading>
      <p className="mt-3.5 max-w-[720px] text-center text-lg font-book leading-snug text-gray-9 lg:max-w-[782px] md:max-w-[590px] md:text-base sm:mt-3 sm:leading-snug">
        We've sucessfully received your meeting booking. Chat soon!
      </p>
      <p className="mt-3.5 max-w-[720px] text-center text-lg font-book leading-snug text-gray-9 lg:max-w-[782px] md:max-w-[590px] md:text-base sm:mt-3 sm:leading-snug">
        Can't wait? Click below to send your first notification in minutes.
      </p>
      <Button className="mt-10 sm:mt-7" size="sm" theme="white-filled" to={LINKS.getStarted.to}>
        Get Started Now
      </Button>
    </div>
    <img
      className="absolute left-1/2 top-0 min-w-[1920px] -translate-x-1/2 sm:hidden sm:min-w-[360px]"
      src={bg}
      width={1920}
      height={1000}
      loading="eager"
      alt=""
    />
    <img
      className="absolute left-1/2 top-0 hidden min-w-[360px] -translate-x-1/2 sm:block"
      src={bgSm}
      width={360}
      height={530}
      loading="eager"
      alt=""
    />
  </section>
);

export default Hero;
