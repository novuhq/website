import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import Timer from '../timer/timer';

const PAGE_TITLE = 'We are happy to take part in<br /><span>Hacktoberfest 2023</span>';
const BUTTON_TEXT = 'START HERE 🎉';
const BUTTON_URL = 'https://github.com/novuhq/novu/labels/Hacktoberfest';

const Hero = () => (
  <section className="hero safe-paddings pt-36 lg:pt-32 md:pt-28 sm:pt-18">
    <div className="relative flex items-center bg-hero-gradient bg-cover bg-center bg-no-repeat pb-[52px] pt-[42px] md:pb-10 md:pt-8">
      <Heading
        className="text-highlighting-blue-gradient container text-center text-[72px] font-bold leading-denser lg:text-6xl md:text-5xl"
        tag="h1"
        size="3xl"
        theme="white"
        asHTML
      >
        {PAGE_TITLE}
      </Heading>
    </div>
    <div className="container-lg mt-14 flex flex-col md:mt-10 sm:mt-9">
      <Button
        className="mx-auto"
        size="sm"
        theme="blue-gradient"
        to={BUTTON_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {BUTTON_TEXT}
      </Button>
    </div>
    <Timer />
  </section>
);

export default Hero;
