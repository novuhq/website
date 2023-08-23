import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import React from 'react';

import useScrollPosition from 'hooks/use-scroll-position';
import Arrow from 'icons/arrow.inline.svg';

const SCROLL_THRESHOLD = 200;

const animationVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};

const FloatingButton = ({ isCookieBannerVisible }) => {
  const isVisible = useScrollPosition(SCROLL_THRESHOLD);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isVisible && (
          <m.button
            className={clsx(
              'fixed bottom-28 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gray-6 bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_0%,rgba(26,26,26,0.28)_100%)] text-gray-6 backdrop-blur-[5px] transition-colors duration-200 hover:bg-gray-6 hover:text-white',
              {
                'sm:bottom-32': isCookieBannerVisible,
              }
            )}
            key="floating-button"
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            type="button"
            onClick={handleClick}
          >
            <Arrow className="h-[18px] w-3" />
          </m.button>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default FloatingButton;
