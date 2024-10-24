import { useGSAP } from '@gsap/react';
import { Layout, Fit, Alignment, EventType } from '@rive-app/canvas';
import { useStateMachineInput } from '@rive-app/react-canvas';
import { clsx } from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useCallback, useState, useEffect } from 'react';

import Button from 'components/shared/button';
import RiveAnimation from 'components/shared/rive-animation';
import useRiveAnimation from 'hooks/use-rive-animation';

import { firstSectionData, secondSectionData, thirdSectionData } from './data';

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

  // define ready states for animations
  const [isCodeAnimationReady, setIsCodeAnimationReady] = useState(false);
  const [isBlueAnimationReady, setIsBlueAnimationReady] = useState(false);
  const [isPurpleAnimationReady, setIsPurpleAnimationReady] = useState(false);

  useEffect(() => {
    if (cardBlueAnimationInstance?.readyForPlaying) {
      setIsBlueAnimationReady(true);
    }
  }, [cardBlueAnimationInstance]);

  useEffect(() => {
    if (cardPurpleAnimationInstance?.readyForPlaying) {
      setIsPurpleAnimationReady(true);
    }
  }, [cardPurpleAnimationInstance]);

  useEffect(() => {
    if (cardCodeAnimationInstance?.readyForPlaying) {
      setIsCodeAnimationReady(true);
    }
  }, [cardCodeAnimationInstance]);

  // create stateMachineInputs for all animations
  const cardPurpleFloating = useStateMachineInput(
    cardPurpleAnimationInstance,
    'SM',
    'floating',
    true
  );
  const cardPurpleSparkle = useStateMachineInput(
    cardPurpleAnimationInstance,
    'SM',
    'sparkle',
    true
  );
  const cardBlueFloating = useStateMachineInput(cardBlueAnimationInstance, 'SM', 'floating', true);
  const cardBlueDisabled = useStateMachineInput(cardBlueAnimationInstance, 'SM', 'mobile', true);
  const cardCodeFloating = useStateMachineInput(cardCodeAnimationInstance, 'SM', 'floating', true);

  const cardCodeChange = useStateMachineInput(cardCodeAnimationInstance, 'SM', 'code-change');
  const cardPurpleChangeNumbers = useStateMachineInput(
    cardPurpleAnimationInstance,
    'SM',
    'numbers'
  );

  const cardBlueChangeName = useStateMachineInput(cardBlueAnimationInstance, 'SM', 'name-change');
  const cardPurpleChangeName = useStateMachineInput(cardPurpleAnimationInstance, 'SM', 'name');
  const cardPurpleChangeTag = useStateMachineInput(cardPurpleAnimationInstance, 'SM', 'tag', true);
  const cardPurpleChangeAvatar = useStateMachineInput(
    cardPurpleAnimationInstance,
    'SM',
    'avatar',
    false
  );
  const cardPurpleChangeDescription = useStateMachineInput(
    cardPurpleAnimationInstance,
    'SM',
    'description',
    true
  );

  const phoneNotification = useStateMachineInput(
    phoneAnimationInstance,
    'SM',
    'notification',
    true
  );
  const inboxNotification = useStateMachineInput(
    inboxAnimationInstance,
    'SM',
    'notification',
    true
  );

  const phoneReset = useStateMachineInput(phoneAnimationInstance, 'SM', 'reset', true);
  const inboxReset = useStateMachineInput(inboxAnimationInstance, 'SM', 'reset', true);

  // create listeners for all animations
  const cardCodeAnimationListener = useCallback(
    (event) => {
      if (event.data.name === 'numbers' && cardPurpleChangeNumbers) {
        cardPurpleChangeNumbers.fire();
      }
    },
    [cardPurpleChangeNumbers]
  );

  const cardBlueAnimationListener = useCallback(
    (event) => {
      if (event.data.name === 'name' && cardPurpleChangeName) {
        cardPurpleChangeName.fire();
      }
      if (event.data.name === 'tag' && cardPurpleChangeTag) {
        cardPurpleChangeTag.value = !cardPurpleChangeTag.value;
      }
      if (event.data.name === 'avatar' && cardPurpleChangeAvatar) {
        cardPurpleChangeAvatar.value = !cardPurpleChangeAvatar.value;
      }
      if (event.data.name === 'description' && cardPurpleChangeDescription) {
        cardPurpleChangeDescription.value = !cardPurpleChangeDescription.value;
      }
    },
    [cardPurpleChangeName, cardPurpleChangeTag, cardPurpleChangeAvatar, cardPurpleChangeDescription]
  );

  if (cardCodeAnimationInstance) {
    cardCodeAnimationInstance.on(EventType.RiveEvent, cardCodeAnimationListener);
  }

  if (cardBlueAnimationInstance) {
    cardBlueAnimationInstance.on(EventType.RiveEvent, cardBlueAnimationListener);
  }

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // GSAP section for animation triggers
  useGSAP(
    () => {
      const height = animationRef.current.offsetHeight;

      const offsetHeight = containerRef.current.offsetTop;

      const isAnimationPlayable = window.innerWidth >= 1024;

      if (isAnimationPlayable) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `top ${offsetHeight}px`,
          end: `+=${offsetHeight}px`,
          onEnter: () => {
            if (cardPurpleFloating) {
              cardPurpleFloating.value = false;
            }
            if (cardBlueFloating) {
              cardBlueFloating.value = false;
            }
            if (cardCodeFloating) {
              cardCodeFloating.value = false;
            }
          },
          onLeaveBack: () => {
            if (cardPurpleFloating) {
              cardPurpleFloating.value = true;
            }
            if (cardBlueFloating) {
              cardBlueFloating.value = true;
            }
            if (cardCodeFloating) {
              cardCodeFloating.value = true;
            }
          },
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `${height * 0.99}px`,
          end: `+=${height * 0.1}px`,
          onEnter: () => {
            let interval = null;

            if (cardCodeChange && animationInterval.current === null) {
              let counter = 0;

              cardCodeChange.fire();

              interval = setInterval(() => {
                cardCodeChange.fire();
                counter += 1;
                if (counter >= 2) {
                  clearInterval(interval);
                }
              }, 3000);

              animationInterval.current = interval;
            }

            return () => {
              clearInterval(interval);
              animationInterval.current = null;
            };
          },
          onLeave: () => {
            clearInterval(animationInterval.current);
            animationInterval.current = null;

            if (cardPurpleSparkle) {
              cardPurpleSparkle.value = false;
            }
            if (cardBlueDisabled) {
              cardBlueDisabled.value = false;
            }
          },
          onLeaveBack: () => {
            if (cardPurpleSparkle) {
              cardPurpleSparkle.value = true;
            }

            if (cardBlueDisabled) {
              cardBlueDisabled.value = true;
            }
          },
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `${height * 1.99}px`,
          end: `+=${height * 0.1}px`,
          onEnter: () => {
            let interval = null;

            if (cardBlueChangeName && animationInterval.current === null) {
              let counter = 0;

              cardBlueChangeName.fire();

              interval = setInterval(() => {
                cardBlueChangeName.fire();
                counter += 1;
                if (counter >= 2) {
                  clearInterval(interval);
                }
              }, 3000);

              animationInterval.current = interval;
            }

            return () => {
              clearInterval(interval);
              animationInterval.current = null;
            };
          },
          onLeave: () => {
            clearInterval(animationInterval.current);
            animationInterval.current = null;

            if (cardBlueDisabled) {
              cardBlueDisabled.value = true;
            }
          },
          onLeaveBack: () => {
            if (phoneReset) {
              phoneReset.fire();
            }
            if (inboxReset) {
              inboxReset.fire();
            }
            if (cardBlueDisabled) {
              cardBlueDisabled.value = false;
            }
          },
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `${height * 2.99}px`,
          end: `+=${height * 0.1}px`,
          onEnter: () => {
            if (phoneNotification) {
              phoneNotification.fire();
            }
            if (inboxNotification) {
              inboxNotification.fire();
            }
            if (cardPurpleSparkle) {
              cardPurpleSparkle.value = true;
            }
          },
          onLeaveBack: () => {
            if (cardPurpleSparkle) {
              cardPurpleSparkle.value = false;
            }
          },
          onEnterBack: () => {
            if (cardBlueDisabled) {
              cardBlueDisabled.value = false;
            }
          },
        });
      }
    },
    {
      dependencies: [
        cardPurpleFloating,
        cardPurpleSparkle,
        cardBlueFloating,
        cardCodeFloating,
        cardBlueChangeName,
        phoneNotification,
        inboxNotification,
        animationInterval,
        phoneReset,
        inboxReset,
        cardBlueDisabled,
      ],
      scope: containerRef.current,
    }
  );

  useGSAP(
    () => {
      if (isCodeAnimationReady && isBlueAnimationReady && isPurpleAnimationReady) {
        gsap.to(lightImageRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    },
    {
      dependencies: [isCodeAnimationReady, isBlueAnimationReady, isPurpleAnimationReady],
      scope: lightImageRef.current,
    }
  );

  // GSAP section for animation positioning
  useGSAP(
    () => {
      const height = animationRef.current.offsetHeight;

      const offsetHeight = containerRef.current.offsetTop;

      const isTablet = window.innerWidth < 1279;

      const isAnimationPlayable = window.innerWidth >= 1024;

      const containerHeight = height * 3;

      const snapTo = [
        0,
        (offsetHeight + height) / (containerHeight + offsetHeight),
        (offsetHeight + height * 2) / (containerHeight + offsetHeight),
        1,
      ];

      if (isAnimationPlayable) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          pin: animationRef.current,
          pinSpacing: false,
          end: 'bottom bottom',
        });

        ScrollTrigger.create({
          trigger: snapRef.current,
          start: 'top top',
          end: 'bottom bottom',
          snap: {
            snapTo,
            duration: 0.5,
            delay: 0,
            ease: 'power2.inOut',
          },
        });

        // first step
        gsap.to(lightImageRef.current, {
          immediateRender: false,
          opacity: 0,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `top ${offsetHeight}px`,
            end: `+=${offsetHeight * 0.5}px`,
          },
        });

        gsap.to(cardPurpleRef.current, {
          startAt: { yPercent: 0, left: '19.473%', scale: 1 },
          top: '50%',
          yPercent: -49,
          left: '22.708%',
          skewY: -15,
          scale: 1.47,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `top ${offsetHeight}px`,
            end: `+=${offsetHeight}px`,
          },
        });

        gsap.to(cardBlueRef.current, {
          startAt: { yPercent: 0, x: 0, left: '35.713%', scale: 1 },
          top: '50%',
          yPercent: -81,
          left: '29.74%',
          x: 0,
          skewY: -15,
          scale: 1.44,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `top ${offsetHeight}px`,
            end: `+=${offsetHeight}px`,
          },
        });

        gsap.to(cardCodeRef.current, {
          startAt: { yPercent: 0, right: '23.061%', scale: 1 },
          top: '50%',
          yPercent: -81,
          right: '22.604%',
          skewY: -15,
          scale: 1.42,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `top ${offsetHeight}px`,
            end: `+=${offsetHeight}px`,
          },
        });

        // developers step
        gsap.to(cardPurpleRef.current, {
          immediateRender: false,
          left: '34.4%',
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: 'top',
            end: `+=${height}px`,
          },
        });
        gsap.to(cardCodeRef.current, {
          immediateRender: false,
          right: '50.2%',
          x: 0,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: 'top',
            end: `+=${height}px`,
          },
        });
        gsap.to(cardBlueRef.current, {
          immediateRender: false,
          left: '22.172%',
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: 'top',
            end: `+=${height * 0.5}px`,
          },
        });
        gsap.to(cardBlueRef.current, {
          immediateRender: false,
          opacity: 0,
          x: 0,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 0.35}px`,
            end: `+=${height * 0.15}px`,
          },
        });
        gsap.to(developersRef.current, {
          startAt: { x: 100, opacity: 0, pointerEvents: 'none' },
          x: 0,
          opacity: 1,
          pointerEvents: 'auto',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 0.5}px`,
            end: `+=${height * 0.5}px`,
          },
        });

        // product teams step
        gsap.to(developersRef.current, {
          immediateRender: false,
          x: -50,
          opacity: 0,
          pointerEvents: 'none',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height}px`,
            end: `+=${height * 0.2}px`,
          },
        });
        gsap.to(cardCodeRef.current, {
          immediateRender: false,
          x: -50,
          opacity: 0,
          pointerEvents: 'none',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height}px`,
            end: `+=${height * 0.2}px`,
          },
        });
        gsap.to(cardBlueRef.current, {
          startAt: { left: '43.2%', x: 140 },
          immediateRender: false,
          x: 0,
          left: isTablet ? '50.2%' : '43.2%',
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 1.2}px`,
            end: `+=${height * 0.8}px`,
          },
        });
        gsap.to(cardBlueRef.current, {
          startAt: { opacity: 0 },
          immediateRender: false,
          opacity: 1,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 1.2}px`,
            end: `+=${height * 0.2}px`,
          },
        });
        gsap.to(cardPurpleRef.current, {
          immediateRender: false,
          left: isTablet ? '43.3%' : '36.3%',
          pointerEvents: 'none',
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height}px`,
            end: `+=${height}px`,
          },
        });
        gsap.to(productTeamsRef.current, {
          startAt: { x: 140, opacity: 0, pointerEvents: 'none' },
          x: 0,
          opacity: 1,
          pointerEvents: 'auto',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 1.2}px`,
            end: `+=${height * 0.8}px`,
          },
        });

        // end users step
        gsap.to(productTeamsRef.current, {
          immediateRender: false,
          y: -60,
          opacity: 0,
          pointerEvents: 'none',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 2.0}px`,
            end: `+=${height * 0.2}px`,
          },
        });
        gsap.to(cardBlueRef.current, {
          immediateRender: false,
          y: -700,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 2.0}px`,
            end: `+=${height * 0.5}px`,
          },
        });
        gsap.to(cardBlueRef.current, {
          immediateRender: false,
          opacity: 0,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 2.0}px`,
            end: `+=${height * 0.2}px`,
          },
        });
        gsap.to(endUsersRef.current, {
          startAt: { top: '0.926%', pointerEvents: 'none' },
          top: '11.111%',
          pointerEvents: 'auto',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 2.4}px`,
            end: `+=${height * 0.6}px`,
          },
        });
        gsap.to(endUsersRef.current, {
          startAt: { opacity: 0 },
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 2.4}px`,
            end: `+=${height * 0.2}px`,
          },
        });
        gsap.to(cardPurpleRef.current, {
          immediateRender: false,
          left: '36.3%',
          yPercent: -35.3,
          pointerEvents: 'auto',
          scale: 1.58,
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 2.3}px`,
            end: `+=${height * 0.7}px`,
          },
        });

        gsap.to(phoneRef.current, {
          startAt: { x: 150, opacity: 0, pointerEvents: 'none' },
          x: 0,
          opacity: 1,
          pointerEvents: 'auto',
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 2.3}px`,
            end: `+=${height * 0.7}px`,
          },
        });

        gsap.to(inboxRef.current, {
          startAt: { x: -150, opacity: 0, pointerEvents: 'none' },
          x: 0,
          opacity: 1,
          pointerEvents: 'auto',
          ease: 'none',
          transformOrigin: 'center center',
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: true,
            start: `${height * 2.3}px`,
            end: `+=${height * 0.7}px`,
          },
        });
      }
    },
    {
      scope: containerRef.current,
    }
  );

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
