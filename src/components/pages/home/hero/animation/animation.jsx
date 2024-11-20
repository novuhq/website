import { clsx } from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';

import Button from 'components/shared/button';
import RiveAnimation from 'components/shared/rive-animation';

import { firstSectionData, secondSectionData, thirdSectionData } from './data';
import useAnimation from './use-animation';
import useAnimationSetup from './use-animation-setup';
import useGSAPAnimations from './use-gsap-animations';
import useGSAPPositioning from './use-gsap-positioning';

const Animation = () => {
  // define refs for all animation elements
  const animationInterval = useRef(null);

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const snapRef = useRef(null);

  const cardPurpleRef = useRef(null);
  const cardBlueRef = useRef(null);
  const cardCodeRef = useRef(null);
  const phoneRef = useRef(null);
  const inboxRef = useRef(null);

  const developersRef = useRef(null);
  const productTeamsRef = useRef(null);
  const endUsersRef = useRef(null);

  const lightImageRef = useRef(null);

  const refs = {
    animationRef,
    containerRef,
    cardBlueRef,
    cardPurpleRef,
    cardCodeRef,
    phoneRef,
    inboxRef,
    developersRef,
    productTeamsRef,
    endUsersRef,
    lightImageRef,
    snapRef,
  };
  // initialize animations
  const {
    riveInstance: cardBlueAnimationInstance,
    wrapperRef: cardBlueAnimationWrapperRef,
    animationRef: cardBlueAnimationRef,
    setRiveInstance: setCardBlueAnimationInstance,
    riveAnimationProps: cardBlueAnimationProps,
  } = useAnimation('card-blue');

  const {
    riveInstance: cardPurpleAnimationInstance,
    wrapperRef: cardPurpleAnimationWrapperRef,
    animationRef: cardPurpleAnimationRef,
    setRiveInstance: setCardPurpleAnimationInstance,
    riveAnimationProps: cardPurpleAnimationProps,
  } = useAnimation('card-purple');

  const {
    riveInstance: cardCodeAnimationInstance,
    wrapperRef: cardCodeAnimationWrapperRef,
    animationRef: cardCodeAnimationRef,
    setRiveInstance: setCardCodeAnimationInstance,
    riveAnimationProps: cardCodeAnimationProps,
  } = useAnimation('card-code');

  const {
    riveInstance: phoneAnimationInstance,
    wrapperRef: phoneAnimationWrapperRef,
    animationRef: phoneAnimationRef,
    setRiveInstance: setPhoneAnimationInstance,
    riveAnimationProps: phoneAnimationProps,
  } = useAnimation('phone');

  const {
    riveInstance: inboxAnimationInstance,
    wrapperRef: inboxAnimationWrapperRef,
    animationRef: inboxAnimationRef,
    setRiveInstance: setInboxAnimationInstance,
    riveAnimationProps: inboxAnimationProps,
  } = useAnimation('inbox');

  const { isCodeAnimationReady, isBlueAnimationReady, isPurpleAnimationReady, stateMachineInputs } =
    useAnimationSetup({
      cardBlueAnimationInstance,
      cardPurpleAnimationInstance,
      cardCodeAnimationInstance,
      phoneAnimationInstance,
      inboxAnimationInstance,
    });

  useGSAPAnimations({
    refs,
    animationInterval,
    stateMachineInputs,
    isCodeAnimationReady,
    isBlueAnimationReady,
    isPurpleAnimationReady,
  });

  // GSAP section for animation positioning
  useGSAPPositioning({ refs });

  return (
    <>
      <div
        className="relative z-0 mx-auto mb-20 h-[400vh] w-full max-w-[1920px] lg:mb-0 md:hidden"
        ref={containerRef}
      >
        <div
          className="absolute left-0 top-0 h-auto w-[60%] translate-x-[-11.5%] translate-y-[-47%] opacity-0"
          ref={lightImageRef}
        >
          <StaticImage
            className="h-auto w-full"
            src="../images/light.png"
            alt=""
            width={1453}
            height={1305}
            loading="eager"
            quality={100}
          />
        </div>
        <div className="h-screen w-full" ref={animationRef}>
          <section
            className="developers absolute bottom-1/2 right-[18.313%] z-50 max-w-80 translate-y-1/2 opacity-0 xl:right-[12%] lg:right-[5%] lg:max-w-72"
            ref={developersRef}
          >
            <h2 className="text-[44px] font-medium leading-denser tracking-snug xl:text-5xl lg:text-4xl">
              {firstSectionData.title}
            </h2>
            <p className="mt-3 text-lg leading-snug text-white/70 lg:text-sm">
              {firstSectionData.description}
            </p>
            {firstSectionData.button && (
              <Button
                className="mt-6 h-10 min-w-[140px] text-sm"
                theme="white-filled"
                to={firstSectionData.button.link}
              >
                {firstSectionData.button.label}
              </Button>
            )}
          </section>
          <section
            className="product-teams absolute bottom-1/2 left-[14%] z-40 max-w-[360px] translate-y-1/2 opacity-0 xl:left-[7%] lg:left-[10%] lg:max-w-72"
            ref={productTeamsRef}
          >
            <h2 className="text-[44px] font-medium leading-denser tracking-snug xl:text-5xl lg:text-4xl">
              {secondSectionData.title}
            </h2>
            <p className="mt-3 text-lg leading-snug text-white/70 lg:text-sm">
              {secondSectionData.description}
            </p>
            {secondSectionData.button && (
              <Button
                className="mt-6 h-10 min-w-[140px] text-sm"
                theme="white-filled"
                to={secondSectionData.button.link}
              >
                {secondSectionData.button.label}
              </Button>
            )}
          </section>
          <section
            className="end-users absolute left-1/2 top-[11.111%] z-50 max-w-[552px] -translate-x-1/2 text-center opacity-0 lg:max-w-md"
            ref={endUsersRef}
          >
            <h2 className="text-[44px] font-medium leading-denser tracking-snug xl:text-5xl lg:text-4xl">
              {thirdSectionData.title}
            </h2>
            <p className="mt-3 text-lg leading-snug text-white/70 lg:text-sm">
              {thirdSectionData.description}
            </p>
          </section>
          <div
            className="card-code absolute right-[23.061%] top-0 z-30 aspect-[137/107] h-auto w-[29.896%] translate-y-[27%] skew-y-[15deg]"
            ref={cardCodeRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={cardCodeAnimationWrapperRef}
              aria-hidden
            />
            <div
              className={clsx(
                'relative h-full w-full transition-opacity duration-300 [&_canvas]:!h-full [&_canvas]:!w-full',
                isCodeAnimationReady ? 'opacity-100' : 'opacity-0'
              )}
              ref={cardCodeAnimationRef}
            >
              <RiveAnimation
                setRiveInstance={setCardCodeAnimationInstance}
                {...cardCodeAnimationProps}
              />
            </div>
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-[89.58%] w-full bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)]"
              aria-hidden
            />
          </div>
          <div
            className="card-blue absolute left-[35.713%] top-0 z-30 aspect-[59/46] h-auto w-[29.948%] translate-y-[31%] skew-y-[15deg]"
            ref={cardBlueRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={cardBlueAnimationWrapperRef}
              aria-hidden
            />
            <div
              className={clsx(
                'relative h-full w-full transition-opacity duration-300 [&_canvas]:!h-full [&_canvas]:!w-full',
                isBlueAnimationReady ? 'opacity-100' : 'opacity-0'
              )}
              ref={cardBlueAnimationRef}
            >
              <RiveAnimation
                setRiveInstance={setCardBlueAnimationInstance}
                {...cardBlueAnimationProps}
              />
            </div>
            <div
              className="pointer-events-none absolute -bottom-px left-0 h-[34.375%] w-full bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)]"
              aria-hidden
            />
          </div>
          <div
            className="card-purple absolute left-[19.473%] top-0 z-40 aspect-[789/1084] h-auto w-[28.073%] translate-y-[-12%] skew-y-[15deg]"
            ref={cardPurpleRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={cardPurpleAnimationWrapperRef}
              aria-hidden
            />
            <div
              className={clsx(
                'relative h-full w-full transition-opacity duration-300 [&_canvas]:!h-full [&_canvas]:!w-full',
                isPurpleAnimationReady ? 'opacity-100' : 'opacity-0'
              )}
              ref={cardPurpleAnimationRef}
            >
              <RiveAnimation
                setRiveInstance={setCardPurpleAnimationInstance}
                {...cardPurpleAnimationProps}
              />
            </div>
            <div
              className="pointer-events-none absolute bottom-0 left-[20%] h-[46.423%] w-[58.5%] bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)]"
              aria-hidden
            />
          </div>
          <div
            className="phone absolute right-[12.5%] top-[50%] z-30 aspect-[547/805] h-auto w-[28.49%] translate-y-[-24%] opacity-0"
            ref={phoneRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={phoneAnimationWrapperRef}
              aria-hidden
            />
            <div
              className="relative h-full w-full [&_canvas]:!h-full [&_canvas]:!w-full"
              ref={phoneAnimationRef}
            >
              <RiveAnimation setRiveInstance={setPhoneAnimationInstance} {...phoneAnimationProps} />
            </div>
            <div
              className="pointer-events-none absolute bottom-0 left-[15.5%] h-[79.503%] w-[67%] bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)]"
              aria-hidden
            />
          </div>
          <div
            className="inbox absolute left-[17.3%] top-[50%] z-30 aspect-[341/480] h-auto w-[17.76%] translate-y-[-23.8%] opacity-0"
            ref={inboxRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={inboxAnimationWrapperRef}
              aria-hidden
            />
            <div
              className="relative h-full w-full [&_canvas]:!h-full [&_canvas]:!w-full"
              ref={inboxAnimationRef}
            >
              <RiveAnimation setRiveInstance={setInboxAnimationInstance} {...inboxAnimationProps} />
            </div>
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-[32.083%] w-full bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)]"
              aria-hidden
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 -z-10 h-full w-full md:hidden" ref={snapRef} aria-hidden />
    </>
  );
};

export default Animation;
