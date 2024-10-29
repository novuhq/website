import { Layout, Fit, Alignment } from '@rive-app/canvas';

import useRiveAnimation from 'hooks/use-rive-animation';

const useAnimation = (artboard) => {
  const { riveInstance, wrapperRef, animationRef, setRiveInstance } = useRiveAnimation({});

  const riveAnimationProps = {
    src: '/animations/pages/home/hero/new-hero.riv',
    artboard,
    autoplay: false,
    stateMachines: 'SM',
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.Center,
    }),
    onLoad: () => {
      riveInstance?.resizeDrawingSurfaceToCanvas();
    },
  };

  return {
    riveInstance,
    wrapperRef,
    animationRef,
    setRiveInstance,
    riveAnimationProps,
  };
};

export default useAnimation;
