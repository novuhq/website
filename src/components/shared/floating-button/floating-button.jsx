import { m, LazyMotion, domAnimation } from 'framer-motion';
import React from 'react';

import useScrollPosition from 'hooks/use-scroll-position';
import Arrow from 'icons/arrow.inline.svg';

const SCROLL_THRESHOLD = 200;

const animationVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const FloatingButton = () => {
  const threshold = useScrollPosition(SCROLL_THRESHOLD);

  const handleClick = () => {
    const scrollRef = document.getElementById('scroll-ref');
    window.scrollTo({
      top: scrollRef.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className="fixed bottom-7 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gray-6 bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_0%,rgba(26,26,26,0.28)_100%)] text-gray-6 backdrop-blur-[5px] transition-colors duration-200 hover:bg-gray-6 hover:text-white"
        variants={animationVariants}
        initial="hidden"
        animate={threshold ? 'show' : 'hidden'}
        type="button"
        onClick={handleClick}
      >
        <Arrow className="h-[18px] w-3" />
      </m.button>
    </LazyMotion>
  );
};

export default FloatingButton;
