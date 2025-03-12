import { Layout, Fit, Alignment } from '@rive-app/canvas';
import { clsx } from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import RiveAnimation from 'components/shared/rive-animation';
import useRiveAnimation from 'hooks/use-rive-animation';

const Animation = () => {
  const { riveInstance, wrapperRef, animationRef, setRiveInstance } = useRiveAnimation({});

  const riveAnimationProps = {
    src: '/animations/pages/home/hero/hero.riv',
    artboard: 'main',
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

  return (
    <div className="relative z-0 mx-auto h-[720px] w-full lg:h-[562px] md:mt-[-7.5%] md:h-auto sm:mt-[-2.5%]">
      <span className="absolute left-0 top-0 -z-10 h-full w-px" ref={wrapperRef} aria-hidden />
      <div
        className={clsx(
          'relative left-1/2 top-[-283px] aspect-[728/473] h-auto w-[1596px] -translate-x-1/2 lg:top-[-200px] lg:w-[1220px] md:hidden [&_canvas]:!h-full [&_canvas]:!w-full'
        )}
        ref={animationRef}
      >
        <RiveAnimation setRiveInstance={setRiveInstance} {...riveAnimationProps} />
      </div>
      <StaticImage
        src="./images/illustration-mobile.png"
        alt=""
        className="relative left-1/2 !hidden w-[109%] -translate-x-1/2 md:!inline-block sm:w-[122%] sm:[mask-image:radial-gradient(50%_50%_at_50%_50%,#D9D9D9_73.96%,rgba(115,115,115,0)_100%)]"
        width={768}
        height={459}
        loading="eager"
        quality={100}
        aria-hidden
      />
      <span
        className="absolute bottom-[-17.4%] left-1/2 h-[60%] w-screen -translate-x-1/2 bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)]"
        aria-hidden
      />
    </div>
  );
};

export default Animation;
