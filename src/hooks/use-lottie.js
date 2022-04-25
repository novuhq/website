import lottie from 'lottie-web';
import { useState, useRef, useEffect } from 'react';

export default function useLottie({ lottieOptions, events = {}, isInView }) {
  const animationRef = useRef();
  const [animation, setAnimation] = useState(lottieOptions.autoplay);

  const [isAnimationReady, setIsAnimationReady] = useState(false);

  useEffect(() => {
    const lottieAnimation = lottie.loadAnimation({
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
  }, []);

  useEffect(() => {
    if (animation && isAnimationReady) {
      if (isInView) {
        animation.play();
      } else {
        animation.pause();
      }
    }
  }, [animation, isAnimationReady, isInView]);

  return {
    animationRef,
    animation,
    isAnimationReady,
  };
}
