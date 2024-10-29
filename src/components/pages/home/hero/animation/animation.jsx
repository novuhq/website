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
        className="w-full max-w-[1920px] mx-auto relative h-[400vh] z-0 mb-20 lg:mb-0 md:hidden"
        ref={containerRef}
      >
        <div
          className="absolute w-[60%] h-auto top-0 left-0 translate-x-[-11.5%] translate-y-[-47%] opacity-0"
          ref={lightImageRef}
        >
          <StaticImage
            className="w-full h-auto"
            src="../images/light.png"
            alt=""
            width={1453}
            height={1305}
            loading="eager"
            quality={100}
          />
        </div>
        <div className="w-full h-screen" ref={animationRef}>
          <section
            className="developers max-w-80 absolute bottom-1/2 translate-y-1/2 right-[18.313%] opacity-0 z-50 xl:right-[12%] lg:right-[5%] lg:max-w-72"
            ref={developersRef}
          >
            <h2 className="text-[44px] leading-denser tracking-snug font-medium xl:text-5xl lg:text-4xl">
              {firstSectionData.title}
            </h2>
            <p className="mt-3 text-white/70 text-lg leading-snug lg:text-sm">
              {firstSectionData.description}
            </p>
            {firstSectionData.button && (
              <Button
                className="text-sm h-10 min-w-[140px] mt-6"
                theme="white-filled"
                to={firstSectionData.button.link}
              >
                {firstSectionData.button.label}
              </Button>
            )}
          </section>
          <section
            className="product-teams max-w-[360px] absolute bottom-1/2 translate-y-1/2 left-[14%] opacity-0 z-40 xl:left-[7%] lg:left-[10%] lg:max-w-72"
            ref={productTeamsRef}
          >
            <h2 className="text-[44px] leading-denser tracking-snug font-medium xl:text-5xl lg:text-4xl">
              {secondSectionData.title}
            </h2>
            <p className="mt-3 text-white/70 text-lg leading-snug lg:text-sm">
              {secondSectionData.description}
            </p>
            {secondSectionData.button && (
              <Button
                className="text-sm h-10 min-w-[140px] mt-6"
                theme="white-filled"
                to={secondSectionData.button.link}
              >
                {secondSectionData.button.label}
              </Button>
            )}
          </section>
          <section
            className="end-users max-w-[552px] absolute left-1/2 -translate-x-1/2 top-[11.111%] text-center opacity-0 z-50 lg:max-w-md"
            ref={endUsersRef}
          >
            <h2 className="text-[44px] leading-denser tracking-snug font-medium xl:text-5xl lg:text-4xl">
              {thirdSectionData.title}
            </h2>
            <p className="mt-3 text-white/70 text-lg leading-snug lg:text-sm">
              {thirdSectionData.description}
            </p>
          </section>
          <div
            className="card-code absolute w-[29.896%] h-auto aspect-[137/107] top-0 right-[23.061%] z-30 skew-y-[15deg] translate-y-[27%]"
            ref={cardCodeRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={cardCodeAnimationWrapperRef}
              aria-hidden
            />
            <div
              className={clsx(
                'relative w-full h-full [&_canvas]:!h-full [&_canvas]:!w-full transition-opacity duration-300',
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
              className="absolute w-full h-[89.58%] bottom-0 left-0 bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)] pointer-events-none"
              aria-hidden
            />
          </div>
          <div
            className="card-blue absolute w-[29.948%] h-auto aspect-[59/46] top-0 left-[35.713%] z-30 skew-y-[15deg] translate-y-[31%]"
            ref={cardBlueRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={cardBlueAnimationWrapperRef}
              aria-hidden
            />
            <div
              className={clsx(
                'relative w-full h-full [&_canvas]:!h-full [&_canvas]:!w-full transition-opacity duration-300',
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
              className="absolute w-full h-[34.375%] bottom-0 left-0 bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)] pointer-events-none"
              aria-hidden
            />
          </div>
          <div
            className="card-purple absolute w-[28.073%] h-auto aspect-[789/1084] top-0 left-[19.473%] skew-y-[15deg] z-40 translate-y-[-12%]"
            ref={cardPurpleRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={cardPurpleAnimationWrapperRef}
              aria-hidden
            />
            <div
              className={clsx(
                'relative w-full h-full [&_canvas]:!h-full [&_canvas]:!w-full transition-opacity duration-300',
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
              className="absolute w-[58.5%] h-[46.423%] bottom-0 left-[20%] bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)] pointer-events-none"
              aria-hidden
            />
          </div>
          <div
            className="phone absolute w-[28.49%] h-auto aspect-[547/805] top-[50%] translate-y-[-24%] right-[12.5%] opacity-0 z-30"
            ref={phoneRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={phoneAnimationWrapperRef}
              aria-hidden
            />
            <div
              className="relative w-full h-full [&_canvas]:!h-full [&_canvas]:!w-full"
              ref={phoneAnimationRef}
            >
              <RiveAnimation setRiveInstance={setPhoneAnimationInstance} {...phoneAnimationProps} />
            </div>
            <div
              className="absolute w-[67%] h-[79.503%] bottom-0 left-[15.5%] bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)] pointer-events-none"
              aria-hidden
            />
          </div>
          <div
            className="inbox absolute w-[17.76%] h-auto aspect-[341/480] top-[50%] translate-y-[-23.8%] left-[17.3%] opacity-0 z-30"
            ref={inboxRef}
          >
            <span
              className="absolute left-0 top-0 -z-10 h-full w-px"
              ref={inboxAnimationWrapperRef}
              aria-hidden
            />
            <div
              className="relative w-full h-full [&_canvas]:!h-full [&_canvas]:!w-full"
              ref={inboxAnimationRef}
            >
              <RiveAnimation setRiveInstance={setInboxAnimationInstance} {...inboxAnimationProps} />
            </div>
            <div
              className="absolute w-full h-[32.083%] bottom-0 left-0 bg-[linear-gradient(180deg,rgba(5,5,11,0)_9.7%,#05050B_69.1%)] pointer-events-none"
              aria-hidden
            />
          </div>
        </div>
      </div>
      <div className="-z-10 absolute top-0 w-full h-full md:hidden" ref={snapRef} aria-hidden />
    </>
  );
};

export default Animation;
