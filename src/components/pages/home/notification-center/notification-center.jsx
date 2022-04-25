import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';
import LINKS from 'constants/links.js';
import useLottie from 'hooks/use-lottie';

import lottieData from './data/notification-center-lottie-data.json';

const TITLE = 'Fully featured notification center in minutes';
const DESCRIPTION =
  'Build a real-time notification center using our embeddable components or connect your custom UI with our notification feed API.';
const BUTTON_TEXT = 'Read Docs';
const BUTTON_URL = LINKS.documentation;

const NotificationCenter = () => {
  const [animationWrapperRef, isAnimationWrapperInView] = useInView({
    threshold: 0.6,
  });

  const { animationRef, animation, isAnimationReady } = useLottie({
    lottieOptions: {
      animationData: lottieData,
      loop: true,
    },
    isInView: isAnimationWrapperInView,
  });

  useEffect(() => {
    if (!animation) return;
    if (isAnimationWrapperInView) {
      animation.play();
    } else {
      animation.pause();
    }
  }, [animation, isAnimationWrapperInView]);

  return (
    <section className="notification-center safe-paddings bg-gray-2 pb-30 pt-40 lg:pt-32 lg:pb-24 md:pt-28 md:pb-18 sm:pt-18 sm:pb-12">
      <div className="container grid-gap-x grid grid-cols-12 items-center md:flex md:flex-col">
        <div
          className={clsx(
            'col-start-1 col-end-8 md:order-2 md:mt-11 md:w-full sm:mt-8',
            isAnimationReady && 'opacity-100'
          )}
          ref={animationWrapperRef}
        >
          <div className="w-full md:mx-auto md:max-w-[712px]" ref={animationRef} />
        </div>

        <div className="col-start-9 col-end-13 xl:col-start-8 md:order-1 md:text-center">
          <Heading
            size="lg"
            tag="h2"
            className="leading-tight lg:text-4xl sm:text-3xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p className="mt-5 text-lg font-book leading-snug text-gray-8 lg:mt-3 lg:text-base">
            {DESCRIPTION}
          </p>
          <Button
            className="mt-7 md:mt-6"
            to={BUTTON_URL}
            size="sm"
            theme="gray-outline"
            target="_blank"
          >
            {BUTTON_TEXT}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotificationCenter;
