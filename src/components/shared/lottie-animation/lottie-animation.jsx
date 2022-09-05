import clsx from 'clsx';
import lottie from 'lottie-web';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import ImagePlaceholder from 'components/shared/image-placeholder';

const LottieAnimation = ({ className, lottieOptions, events = {}, isInView, width, height }) => {
  const animationRef = useRef();
  const [isAnimationReady, setIsAnimationReady] = useState(false);
  const [wrapperRef, isWrapperInView] = useInView({ triggerOnce: true, rootMargin: '200px' });
  const [animation, setAnimation] = useState(lottieOptions.autoplay);

  useEffect(() => {
    if (!isWrapperInView) return null;
    const lottieAnimation =
      isWrapperInView &&
      lottie.loadAnimation({
        renderer: 'svg',
        container: animationRef.current,
        autoplay: false,
        loop: false,
        ...lottieOptions,
      });
    Object.entries({
      loaded_images() {
        setIsAnimationReady(true);
      },
      ...events,
    }).forEach(([eventName, callback]) => {
      lottieAnimation.addEventListener(eventName, callback.bind(lottieAnimation));
    });

    setAnimation(lottieAnimation);

    return () => lottieAnimation.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWrapperInView]);

  useEffect(() => {
    if (animation && isAnimationReady) {
      if (isInView) {
        animation.play();
      } else {
        animation.pause();
      }
    }
  }, [animation, isAnimationReady, isInView]);

  return (
    <div className={clsx('relative', className)} ref={wrapperRef}>
      <ImagePlaceholder
        width={width || lottieOptions.animationData.w / 2}
        height={height || lottieOptions.animationData.h / 2}
      />
      <div
        className={clsx(
          'absolute inset-0 opacity-0 transition-[opacity,visibility] duration-500',
          isAnimationReady && '!visible !opacity-100'
        )}
        ref={animationRef}
      />
    </div>
  );
};

LottieAnimation.propTypes = {
  className: PropTypes.string,
  lottieOptions: PropTypes.shape({
    autoplay: PropTypes.bool,
    animationData: PropTypes.shape({
      w: PropTypes.number,
      h: PropTypes.number,
    }),
  }).isRequired,
  events: PropTypes.shape({}),
  isInView: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

LottieAnimation.defaultProps = {
  className: null,
  events: null,
  isInView: false,
  width: null,
  height: null,
};

export default LottieAnimation;
