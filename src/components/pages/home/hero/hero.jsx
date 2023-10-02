import React from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import useLandingSimpleTracking from 'components/shared/conversions/use.landing.simple.tracking';
import Heading from 'components/shared/heading';
import LottieAnimation from 'components/shared/lottie-animation';
import LINKS from 'constants/links';

import animationData from './data/hero-lottie-data.json';
import bgSm from './images/bg-sm.svg';
import bg from './images/bg.svg';

const TITLE = 'The open-source notification infrastructure for developers';
const DESCRIPTION =
  'Simple components and APIs for managing all communication channels in one place: Email, SMS, Direct, and Push';

const Hero = () => {
  const click = useLandingSimpleTracking();
  const [animationWrapperRef, isAnimationWrapperInView] = useInView({
    threshold: 0.6,
  });

  const lottieData = {
    lottieOptions: {
      renderer: 'canvas',
      animationData,
      loop: true,
    },
    isInView: isAnimationWrapperInView,
  };

  return (
    <section className="hero safe-paddings relative overflow-hidden pb-20 pt-34 lg:pb-16 lg:pt-32 md:pb-14 md:pt-30 sm:pb-32 sm:pt-22">
      <div className="container relative z-10 flex flex-col items-center">
        <Heading
          className="max-w-[764px] text-center font-normal leading-denser md:max-w-[712px] md:text-4xl sm:text-[26px]"
          size="2xl"
          tag="h1"
          theme="white"
        >
          {TITLE}
        </Heading>
        <p className="mt-5 text-center text-lg font-book leading-tight text-gray-9 lg:max-w-[782px] md:max-w-[590px] md:text-base sm:mt-3">
          {DESCRIPTION}
        </p>

        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-5">
          <Button
            className="w-[152px]"
            size="sm"
            theme="white-filled"
            {...LINKS.getStarted}
            onClick={click}
          >
            Get Started
          </Button>
          <Button className="w-[152px]" size="sm" theme="white-outline" {...LINKS.calendly}>
            Book a demo
          </Button>
        </div>

        <div
          className="relative mt-24 max-w-[1300px] lg:mt-16 md:mt-14 sm:mt-12 sm:hidden"
          ref={animationWrapperRef}
        >
          <LottieAnimation {...lottieData} />
        </div>
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
