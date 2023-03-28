import PropTypes from 'prop-types';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Heading from 'components/shared/heading/heading';
import LottieAnimation from 'components/shared/lottie-animation';

const Item = ({ animationData, title, description, comingSoon }) => {
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
    <li className="sm:max-w-[410px]" ref={animationWrapperRef}>
      <LottieAnimation className="h-16 max-w-[124px] sm:mx-auto sm:h-14" {...lottieData} />
      <div className="mt-5">
        <Heading className="leading-snug lg:text-2xl" tag="h3" size="sm" theme="white">
          {title}
        </Heading>
        <p className="mt-3 max-w-[377px] font-book leading-snug text-gray-9 lg:mt-2 lg:max-w-none">
          {description}
        </p>
        {comingSoon && (
          <span className="mt-2 block whitespace-nowrap text-sm font-normal leading-none text-secondary-2">
            Coming soon...
          </span>
        )}
      </div>
    </li>
  );
};

Item.propTypes = {
  animationData: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  comingSoon: PropTypes.bool,
};

Item.defaultProps = {
  comingSoon: false,
};

export default Item;
