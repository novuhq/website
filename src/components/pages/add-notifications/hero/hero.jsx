import React from 'react';

import Heading from 'components/shared/heading';

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden pb-10 pt-34 lg:pb-16 lg:pt-32 md:pt-[104px] sm:pb-10 sm:pt-[95px]">
    <div className="container relative z-10 flex flex-col items-center">
      <Heading
        className="mx-auto text-center font-normal leading-denser md:max-w-[712px] md:text-4xl sm:text-[34px]"
        size="2xl"
        tag="h1"
        theme="white"
      >
        Test in minutes, go to prod before dinner
      </Heading>
      <p className="mx-auto mt-4 max-w-[900px] text-center text-lg leading-tight opacity-70 lg:mt-5 lg:max-w-[676px] md:mt-4 md:max-w-[590px] md:text-base sm:mt-3">
        Ship notifications in your app with production-ready infrastructure and out-of-the-box
        components.
      </p>
    </div>
  </section>
);

export default Hero;
