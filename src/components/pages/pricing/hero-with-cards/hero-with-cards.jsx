import React, { useState } from 'react';

import Heading from 'components/shared/heading';

import Cloud from './cloud';
import bgSm from './images/bg-sm.svg';
import bg from './images/bg.svg';

const title = 'Flexible pricing <br /> for companies and developers';

const Hero = ({ activeTier, setActiveTier, findActiveTier }) => {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <section className="safe-paddings relative overflow-hidden pt-36 lg:pt-32 md:pt-28 sm:pt-20">
      <div className="container relative z-10">
        <Heading
          className="flat-breaks sm:flat-none mx-auto text-center text-[72px] font-bold leading-denser lg:text-6xl md:text-5xl"
          size="3xl"
          tag="h1"
          theme="white"
          asHTML
        >
          {title}
        </Heading>
        <Cloud
          activeTier={activeTier.value}
          setActiveTier={setActiveTier}
          findActiveTier={findActiveTier}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
        />
      </div>
      <img
        className="absolute left-1/2 top-0 min-w-[1920px] -translate-x-1/2 sm:hidden sm:min-w-[360px]"
        src={bg}
        loading="eager"
        alt=""
        aria-hidden
      />
      <img
        className="absolute left-1/2 top-0 hidden min-w-[360px] -translate-x-1/2 sm:block"
        src={bgSm}
        loading="eager"
        alt=""
        aria-hidden
      />
    </section>
  );
};

export default Hero;
