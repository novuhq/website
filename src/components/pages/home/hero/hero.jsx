import clsx from 'clsx';
import copyToClipboard from 'copy-to-clipboard';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import ImagePlaceholder from 'components/shared/image-placeholder';
import useLottie from 'hooks/use-lottie';

import lottieData from './data/hero-lottie-data.json';
import bg from './images/bg.svg';

const TITLE = 'The open-source notification infrastructure for developers';
const DESCRIPTION =
  'Simple components and APIs for managing all communication channels in one place: Email, SMS, Direct, and Push';

const INPUT_TEXT = 'npx notu init';

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [animationWrapperRef, isAnimationWrapperInView] = useInView({
    threshold: 0.6,
  });
  const { animationRef, animation, isAnimationReady } = useLottie({
    lottieOptions: {
      render: 'canvas',
      animationData: lottieData,
      loop: true,
    },
    isInView: isAnimationWrapperInView,
  });

  const handleButtonClick = () => {
    if (!isCopied) {
      copyToClipboard(INPUT_TEXT, { onCopy: setIsCopied(true) });
    }
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  useEffect(() => {
    if (!animation) return;
    if (isAnimationWrapperInView) {
      animation.play();
    } else {
      animation.pause();
    }
  }, [animation, isAnimationWrapperInView]);

  return (
    <section className="hero safe-paddings relative overflow-hidden bg-black pt-34 pb-20 lg:pt-32 lg:pb-16 md:pt-30 md:pb-14 sm:pt-22 sm:pb-9">
      <div className="container relative z-10 flex flex-col items-center">
        <Heading
          className="max-w-[764px] text-center font-normal leading-denser md:max-w-[712px] md:text-4xl sm:text-[26px]"
          size="xl"
          tag="h1"
          theme="white"
        >
          {TITLE}
        </Heading>
        <p className="mt-5 text-center text-lg font-book leading-tight text-gray-9 lg:max-w-[782px] md:max-w-[590px] md:text-base sm:mt-3">
          {DESCRIPTION}
        </p>

        <div className="input-border-gradient relative mt-10 flex h-16 w-full max-w-[464px] items-center justify-between rounded-md bg-black pl-5 pr-3">
          <span className="whitespace-nowrap font-mono text-lg font-medium !leading-none text-white">
            {INPUT_TEXT}
          </span>

          <Button className="relative" size="xs" theme="white-filled" onClick={handleButtonClick}>
            <span className={clsx({ 'opacity-0': isCopied })}>Copy</span>
            <span
              className={clsx(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0',
                { 'opacity-100': isCopied }
              )}
            >
              Copied!
            </span>
          </Button>
        </div>

        <div
          className={clsx(
            'relative mt-18 max-w-[1300px] opacity-0 transition-opacity duration-500 lg:mt-16 md:mt-14 sm:mt-12',
            isAnimationReady && 'opacity-100'
          )}
          ref={animationWrapperRef}
        >
          <ImagePlaceholder width={1300} height={321} />
          <div className="absolute top-0 left-0 h-full w-full" ref={animationRef} />
        </div>
      </div>

      <img
        className="absolute -top-12 left-1/2 min-w-[1920px] -translate-x-1/2"
        src={bg}
        loading="eager"
        alt=""
        aria-hidden
      />
    </section>
  );
};

export default Hero;
