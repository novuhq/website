import React from 'react';

import Heading from 'components/shared/heading';

const Hero = () => (
  <section className="safe-paddings relative overflow-hidden pb-10 pt-36 lg:pb-16 lg:pt-32 md:pt-[104px] sm:pb-10 sm:pt-[95px]">
    <div className="container-lg relative z-10">
      <Heading
        className="mx-auto text-center text-8xl font-bold leading-denser lg:text-6xl md:text-4xl sm:text-[32px]"
        size="3xl"
        tag="h1"
        theme="white"
        asHTML
      >
        Send Multi-Channel Notifications
      </Heading>
      <p className="mx-auto mt-4 max-w-[800px] text-center text-lg leading-tight opacity-70 lg:mt-5 lg:max-w-[676px] md:mt-4 md:max-w-[590px] md:text-base sm:mt-3">
        Reach Your Audience Where They Are: Multi-Channel Notification Solutions
      </p>
    </div>
  </section>
);

export default Hero;
