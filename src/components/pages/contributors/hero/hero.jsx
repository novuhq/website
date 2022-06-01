import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback } from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';

import bg from './images/bg.svg';

const TITLE = 'Contributors';
const Description = () => (
  <>
    Novu is being built for developers using the incredible power of the community! Here is a list
    of these amazing individuals, working together to build the best open-source notification
    infrastructure 🚀
    <br />
    Do you want to be listed here too?
  </>
);
const BUTTON_TEXT = 'Become a contributor';

const Hero = () => {
  const scrollDown = useCallback(() => {
    document.querySelector('#started').scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <section className="hero safe-paddings relative overflow-hidden pt-32 pb-30 md:pt-30 md:pb-20 sm:pt-22 sm:pb-16">
      <div className="container-lg relative z-10">
        <div className="flex items-center justify-between sm:flex-col">
          <div className="max-w-[488px] lg:max-w-[377px] md:max-w-[346px] sm:max-w-none sm:text-center">
            <Heading
              size="2xl"
              tag="h2"
              className="leading-tight md:text-4xl sm:text-3xl"
              theme="white"
            >
              {TITLE}
            </Heading>
            <p className="mt-5 text-lg font-light leading-snug text-gray-8 md:text-base">
              <Description />
            </p>
            <Button className="mt-7 md:mt-5" size="sm" theme="primary" onClick={scrollDown}>
              {BUTTON_TEXT}
            </Button>
          </div>

          <StaticImage
            className="-mt-2.5 -mr-2.5 max-w-[660px] lg:max-w-[510px] md:max-w-[360px] sm:hidden"
            src="./images/contributors-hero-illustration.png"
            loading="eager"
            alt=""
            aria-hidden
          />
        </div>
      </div>

      <img
        className="absolute top-1/2 left-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
        src={bg}
        loading="eager"
        alt=""
        aria-hidden
      />
    </section>
  );
};

export default Hero;
