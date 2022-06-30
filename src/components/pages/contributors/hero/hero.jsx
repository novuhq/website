import React, { useCallback } from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import bg from './images/bg.svg';

const TITLE = 'Community Heroes';
const DESCRIPTION = `
Novu is being built for developers using the incredible power of the community!
<br /> 
Here is a list
of these amazing individuals, working together to build the best open-source notification
infrastructure 🚀
<br />
<br />
Do you want to be listed here too?`;
const BUTTON_TEXT = 'Become a contributor';

const Hero = () => {
  const scrollDown = useCallback(() => {
    document.querySelector('#started').scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <section className="hero safe-paddings relative overflow-hidden pt-32 md:pt-30 sm:pt-22">
      <div className="container-lg relative z-10">
        <div className="mx-auto max-w-[800px] text-center">
          <Heading
            size="3xl"
            tag="h1"
            className="font-bold leading-tight md:text-5xl sm:text-4xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p
            className="mt-5 text-lg font-book leading-snug text-gray-8 md:text-base"
            dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
          />
          <Button className="mt-7 md:mt-5" size="sm" theme="white-filled" onClick={scrollDown}>
            {BUTTON_TEXT}
          </Button>
        </div>
      </div>

      <img
        className="relative left-1/2 -mt-[330px] min-w-[1920px] -translate-x-1/2 lg:-mt-[280px] lg:min-w-[1700px] md:-mt-[210px] md:min-w-[1300px]"
        src={bg}
        loading="eager"
        height={654}
        width={1920}
        alt=""
        aria-hidden
      />
    </section>
  );
};

export default Hero;
