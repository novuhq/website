import React from 'react';
import { useInView } from 'react-intersection-observer';

import Heading from 'components/shared/heading/heading';
import LottieAnimation from 'components/shared/lottie-animation';

import animationData from './data/component-based-lottie-data.json';

const Benefits_imgOnRightSide = ({ title, description }) => {
  const [animationWrapperRef, isAnimationWrapperInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const lottieData = {
    lottieOptions: {
      animationData,
    },
    isInView: isAnimationWrapperInView,
  };

  return (
    <section className="component-based safe-paddings py-40 lg:py-32 md:py-28 sm:py-18">
      <div className="container grid-gap-x grid grid-cols-12 items-center md:flex md:flex-col">
        <div className="col-start-1 col-end-6 xl:col-end-6 md:text-center">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {title}
          </Heading>
          <p className="mt-5 text-lg font-book leading-snug text-gray-9 xl:max-w-[464px] lg:mt-3 lg:max-w-[296px] lg:text-base md:max-w-full">
            {description}
          </p>
        </div>

        <div
          className="relative col-start-7 col-end-13 lg:col-start-6 md:mt-11 md:w-full sm:mt-8"
          ref={animationWrapperRef}
        >
          <LottieAnimation className="absolute left-0 top-0 h-full w-full" {...lottieData} />
        </div>
      </div>
    </section>
  );
};

export default Benefits_imgOnRightSide;
