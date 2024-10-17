import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading from 'components/shared/heading';

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden pt-[303px] sm:pt-52">
    <div className="container relative z-10 flex flex-col items-center text-center">
      <Heading
        className="font-bold leading-tight [mask-image:linear-gradient(90deg,rgba(255,255,255,0.7)_0%,#FFFFFF_38.57%,#FFFFFF_53.21%,rgba(255,255,255,0.7)_100%)] md:text-4xl sm:text-[34px]"
        size="3xl"
        tag="h1"
        theme="white"
      >
        You&apos;re confirmed
      </Heading>
      <p className="mt-5 max-w-[560px] text-center text-lg font-light leading-snug md:text-base sm:mt-3">
        The stars aligned, and we managed to find a time to meet!
      </p>
      <p className="mt-5 max-w-[560px] text-center text-lg font-light leading-snug md:text-base sm:mt-3">
        Check your email and calendar for the details, including a meeting link. Chat soon, but in
        the meantime... Happy Notifying!
      </p>
    </div>
    <StaticImage
      className="!absolute w-[541px] left-1/2 -translate-x-1/2 -top-20 pointer-events-none sm:w-[448px] sm:-top-28"
      src="./images/illustration.png"
      width={541}
      height={541}
      loading="eager"
      alt=""
      aria-hidden
    />
  </section>
);

export default Hero;
