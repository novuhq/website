import React from 'react';

import Heading from 'components/shared/heading';

const title = 'Flexible pricing <br /> for companies and developers';

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden pt-[72px] lg:pt-[66px] md:pt-[49px] sm:pt-[50px]">
    <div className="container relative z-10">
      <Heading
        className="text-center text-[52px] font-medium leading-denser tracking-snug lg:text-[48px] md:text-[36px] sm:text-[32px]"
        tag="h1"
        theme="white"
        asHTML
      >
        {title}
      </Heading>
    </div>
  </section>
);

export default Hero;
