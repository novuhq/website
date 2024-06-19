import React from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';
import LottieAnimation from 'components/shared/lottie-animation';

// import LINKS from 'constants/links';
import animationData from './data/notification-center-lottie-data.json';

const Benefit_imgOnLeftSide = ({ title, description, buttonText }) => {
  const [animationWrapperRef, isAnimationWrapperInView] = useInView({
    threshold: 0.6,
  });

  const lottieData = {
    lottieOptions: {
      animationData,
      loop: true,
    },
    isInView: isAnimationWrapperInView,
  };

  return (
    <section className="notification-center safe-paddings bg-gray-2 pb-10 pt-20 lg:pb-24 lg:pt-32 md:pb-18 md:pt-28 sm:pb-12 sm:pt-18">
      <div className="container grid-gap-x grid grid-cols-12 items-center md:flex md:flex-col">
        <div
          className="relative col-start-1 col-end-7 md:order-2 md:mt-11 md:w-full sm:mt-8"
          ref={animationWrapperRef}
        >
          <LottieAnimation {...lottieData} />
        </div>

        <div className="col-start-8 col-end-13 xl:col-start-8 md:order-1 md:text-center">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {title}
          </Heading>
          <p className="mt-5 text-lg font-book leading-snug text-gray-9 lg:mt-3 lg:text-base">
            {description}
          </p>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
};

export default Benefit_imgOnLeftSide;
