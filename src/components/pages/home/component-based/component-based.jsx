import React from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';
import ImagePlaceholder from 'components/shared/image-placeholder';
import LINKS from 'constants/links';
import useLottie from 'hooks/use-lottie';

import lottieData from './data/component-based-lottie-data.json';

const TITLE = 'Component based';
const DESCRIPTION =
  'Novu API-first approach, means that you can  use just what you need, when you need it.';
const BUTTON_TEXT = 'Get Started';

const ComponentBased = () => {
  const [animationWrapperRef, isAnimationWrapperInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const { animationRef } = useLottie({
    lottieOptions: {
      animationData: lottieData,
    },
    isInView: isAnimationWrapperInView,
  });

  return (
    <section className="component-based safe-paddings py-40 lg:py-32 md:py-28 sm:py-18">
      <div className="container grid-gap-x grid grid-cols-12 items-center md:flex md:flex-col">
        <div className="col-start-1 col-end-5 xl:col-end-6 md:text-center">
          <Heading
            size="xl"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p className="mt-5 text-lg font-book leading-snug text-gray-8 xl:max-w-[464px] lg:mt-3 lg:max-w-[296px] lg:text-base md:max-w-full">
            {DESCRIPTION}
          </p>
          <Button className="mt-7 md:mt-6" size="sm" theme="primary" {...LINKS.getStarted}>
            {BUTTON_TEXT}
          </Button>
        </div>

        <div
          className="relative col-start-6 col-end-13 lg:col-start-6 md:mt-11 md:w-full sm:mt-8"
          ref={animationWrapperRef}
        >
          <ImagePlaceholder width={842} height={560} />
          <div className="absolute top-0 left-0 h-full w-full" ref={animationRef} />
        </div>
      </div>
    </section>
  );
};

export default ComponentBased;
