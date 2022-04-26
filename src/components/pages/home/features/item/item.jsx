import PropTypes from 'prop-types';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Heading from 'components/shared/heading/heading';
import useLottie from 'hooks/use-lottie';

const Item = ({ lottieData, title, description }) => {
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
    <li className="sm:max-w-[410px]" ref={animationWrapperRef}>
      <div className="h-16 max-w-[124px] sm:mx-auto sm:h-14" ref={animationRef} />
      <div className="mt-5">
        <Heading className="leading-snug lg:text-2xl" tag="h3" size="sm" theme="white">
          {title}
        </Heading>
        <p className="mt-3 max-w-[377px] font-book leading-snug text-gray-8 lg:mt-2 lg:max-w-none">
          {description}
        </p>
      </div>
    </li>
  );
};

Item.propTypes = {
  lottieData: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
