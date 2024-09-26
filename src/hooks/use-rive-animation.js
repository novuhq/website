import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useRiveAnimation({ withReset = false, threshold = 0.1 }) {
  const [riveInstance, setRiveInstance] = useState(null);

  const { ref: wrapperRef, inView: isIntersecting } = useInView({
    triggerOnce: true,
    rootMargin: '500px 0px',
  });

  const { ref: animationRef, inView: isVisible } = useInView({
    threshold,
  });

  useEffect(() => {
    if (riveInstance) {
      if (isVisible) {
        riveInstance.play();
      } else {
        if (withReset) {
          riveInstance.reset();
        }
        riveInstance.pause();
      }
    }
  }, [riveInstance, isVisible, withReset]);

  return {
    riveInstance,
    wrapperRef,
    animationRef,
    isVisible,
    isIntersecting,
    setRiveInstance,
  };
}
