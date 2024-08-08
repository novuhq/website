import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import LINKS from 'constants/links';

import illustration from './images/illustration.svg';

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden pt-[303px]">
    <div className="container relative z-10 flex flex-col items-center">
      <Heading
        className="font-bold leading-tight [mask-image:linear-gradient(90deg,rgba(255,255,255,0.7)_0%,#FFFFFF_38.57%,#FFFFFF_53.21%,rgba(255,255,255,0.7)_100%)] md:text-4xl sm:text-[34px]"
        size="3xl"
        tag="h1"
        theme="white"
      >
        We can&apos;t wait to meet you!
      </Heading>
      <p className="mt-5 max-w-[560px] text-center text-lg font-light leading-snug md:text-base sm:mt-3">
        We&apos;ve successfully received your meeting booking. Chat soon! Can&apos;t&nbsp;wait?
        Click below to send your first notification in minutes.
      </p>
      <Button className="mt-10 sm:mt-7" size="sm" theme="white-filled" to={LINKS.getStarted.to}>
        Get Started Now
      </Button>
    </div>
    <img
      className="absolute left-1/2 -translate-x-1/2 -top-20 pointer-events-none"
      src={illustration}
      width={541}
      height={541}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
