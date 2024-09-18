import { useGSAP } from '@gsap/react';
import { Layout, Fit, Alignment, EventType } from '@rive-app/canvas';
import { useStateMachineInput } from '@rive-app/react-canvas';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useCallback, useEffect } from 'react';

import Button from 'components/shared/button';
import RiveAnimation from 'components/shared/rive-animation';
import useRiveAnimation from 'hooks/use-rive-animation';

const useCardBlueAnimation = () => {
  const { riveInstance, wrapperRef, animationRef, setRiveInstance } = useRiveAnimation({});

  const riveAnimationProps = {
    src: '/animations/pages/home/hero/new-hero.riv',
    artboard: 'card-blue',
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
    cardBlueAnimationInstance: riveInstance,
    cardBlueAnimationWrapperRef: wrapperRef,
    cardBlueAnimationRef: animationRef,
    setCardBlueAnimationInstance: setRiveInstance,
    cardBlueAnimationProps: riveAnimationProps,
  };
};

const useCardPurpleAnimation = () => {
  const { riveInstance, wrapperRef, animationRef, setRiveInstance } = useRiveAnimation({});

  const riveAnimationProps = {
    src: '/animations/pages/home/hero/new-hero.riv',
    artboard: 'card-purple',
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
    cardPurpleAnimationInstance: riveInstance,
    cardPurpleAnimationWrapperRef: wrapperRef,
    cardPurpleAnimationRef: animationRef,
    setCardPurpleAnimationInstance: setRiveInstance,
    cardPurpleAnimationProps: riveAnimationProps,
  };
};

const useCardCodeAnimation = () => {
  const { riveInstance, wrapperRef, animationRef, setRiveInstance } = useRiveAnimation({});

  const riveAnimationProps = {
    src: '/animations/pages/home/hero/new-hero.riv',
    artboard: 'card-code',
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
    cardCodeAnimationInstance: riveInstance,
    cardCodeAnimationWrapperRef: wrapperRef,
    cardCodeAnimationRef: animationRef,
    setCardCodeAnimationInstance: setRiveInstance,
    cardCodeAnimationProps: riveAnimationProps,
  };
};

const usePhoneAnimation = () => {
  const { riveInstance, wrapperRef, animationRef, setRiveInstance } = useRiveAnimation({});

  const riveAnimationProps = {
    src: '/animations/pages/home/hero/new-hero.riv',
    artboard: 'phone',
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
    phoneAnimationInstance: riveInstance,
    phoneAnimationWrapperRef: wrapperRef,
    phoneAnimationRef: animationRef,
    setPhoneAnimationInstance: setRiveInstance,
    phoneAnimationProps: riveAnimationProps,
  };
};

const useInboxAnimation = () => {
  const { riveInstance, wrapperRef, animationRef, setRiveInstance } = useRiveAnimation({});

  const riveAnimationProps = {
    src: '/animations/pages/home/hero/new-hero.riv',
    artboard: 'inbox',
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
    inboxAnimationInstance: riveInstance,
    inboxAnimationWrapperRef: wrapperRef,
    inboxAnimationRef: animationRef,
    setInboxAnimationInstance: setRiveInstance,
    inboxAnimationProps: riveAnimationProps,
  };
};

const Animation = () => {
  const animationInterval = useRef(null);

  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const cardPurpleRef = useRef(null);
  const cardBlueRef = useRef(null);
  const cardCodeRef = useRef(null);
  const phoneRef = useRef(null);
  const inboxRef = useRef(null);

  const developersRef = useRef(null);
  const productTeamsRef = useRef(null);
  const endUsersRef = useRef(null);

  const {
    cardBlueAnimationInstance,
    cardBlueAnimationWrapperRef,
    cardBlueAnimationRef,
    setCardBlueAnimationInstance,
    cardBlueAnimationProps,
  } = useCardBlueAnimation();

  const {
    cardPurpleAnimationInstance,
    cardPurpleAnimationWrapperRef,
    cardPurpleAnimationRef,
    setCardPurpleAnimationInstance,
    cardPurpleAnimationProps,
  } = useCardPurpleAnimation();

  const {
    cardCodeAnimationInstance,
    cardCodeAnimationWrapperRef,
    cardCodeAnimationRef,
    setCardCodeAnimationInstance,
    cardCodeAnimationProps,
  } = useCardCodeAnimation();

  const {
    phoneAnimationInstance,
    phoneAnimationWrapperRef,
    phoneAnimationRef,
    setPhoneAnimationInstance,
    phoneAnimationProps,
  } = usePhoneAnimation();

  const {
    inboxAnimationInstance,
    inboxAnimationWrapperRef,
    inboxAnimationRef,
    setInboxAnimationInstance,
    inboxAnimationProps,
  } = useInboxAnimation();

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

  useGSAP(
    () => {
      const height = animationRef.current.offsetHeight;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 448px',
        end: '+=448px',
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
        start: `${height}px`,
        end: `+=${height * 0.5}px`,
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
        start: `${height * 2.5}px`,
        end: `+=${height * 0.5}px`,
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
        start: `${height * 4}px`,
        end: `+=${height * 0.5}px`,
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
      scope: containerRef,
    }
  );

  useGSAP(
    () => {
      const height = animationRef.current.offsetHeight;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        pin: animationRef.current,
        pinSpacing: false,
        end: 'bottom bottom',
      });

      // first step
      gsap.from(cardPurpleRef.current, {
        skewY: 15,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: 'top 448px',
          end: '+=448px',
        },
      });
      gsap.to(cardPurpleRef.current, {
        startAt: { top: '-14.722%', left: '6.473%', scale: 1 },
        top: '8.334%',
        left: '-3.282%',
        scale: 1.47,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: 'top 448px',
          end: '+=448px',
        },
      });

      gsap.from(cardBlueRef.current, {
        skewY: 15,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: 'top 448px',
          end: '+=448px',
        },
      });
      gsap.to(cardBlueRef.current, {
        startAt: { top: '6.019%', left: '29.613%', scale: 1 },
        top: '29.63%',
        left: '6.771%',
        scale: 1.44,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: 'top 448px',
          end: '+=448px',
        },
      });

      gsap.from(cardCodeRef.current, {
        skewY: 15,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: 'top 448px',
          end: '+=448px',
        },
      });
      gsap.to(cardCodeRef.current, {
        startAt: { top: '4.074%', right: '11.161%', scale: 1 },
        top: '28.425%',
        right: '25.149%',
        scale: 1.42,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: 'top 448px',
          end: '+=448px',
        },
      });

      // developers step
      gsap.to(cardPurpleRef.current, {
        immediateRender: false,
        left: '18.2%',
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: 'top',
          end: `+=${height}px`,
        },
      });
      gsap.to(cardCodeRef.current, {
        immediateRender: false,
        right: '58.779%',
        ease: 'none',
        transformOrigin: 'left center',
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
        transformOrigin: 'left center',
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
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 0.35}px`,
          end: `+=${height * 0.15}px`,
        },
      });
      gsap.to(developersRef.current, {
        startAt: { right: '-2.827%', opacity: 0, pointerEvents: 'none' },
        right: '4.613%',
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
        right: '0.893%',
        opacity: 0,
        pointerEvents: 'none',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 1.5}px`,
          end: `+=${height * 0.2}px`,
        },
      });
      gsap.to(cardCodeRef.current, {
        immediateRender: false,
        right: '55.059%',
        opacity: 0,
        pointerEvents: 'none',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 1.5}px`,
          end: `+=${height * 0.2}px`,
        },
      });
      gsap.to(cardBlueRef.current, {
        startAt: { left: '53.613%' },
        immediateRender: false,
        left: '30.771%',
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 1.7}px`,
          end: `+=${height * 0.8}px`,
        },
      });
      gsap.to(cardBlueRef.current, {
        startAt: { opacity: 0 },
        immediateRender: false,
        opacity: 1,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 1.7}px`,
          end: `+=${height * 0.2}px`,
        },
      });
      gsap.to(cardPurpleRef.current, {
        immediateRender: false,
        left: '20.879%',
        pointerEvents: 'none',
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 1.5}px`,
          end: `+=${height}px`,
        },
      });
      gsap.to(productTeamsRef.current, {
        startAt: { left: '9.005%', opacity: 0, pointerEvents: 'none' },
        left: '-1.412%',
        opacity: 1,
        pointerEvents: 'auto',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 1.7}px`,
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
          start: `${height * 3.0}px`,
          end: `+=${height * 0.2}px`,
        },
      });
      gsap.to(cardBlueRef.current, {
        immediateRender: false,
        y: -700,
        opacity: 0,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 3.0}px`,
          end: `+=${height * 0.5}px`,
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
          start: `${height * 3.4}px`,
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
          start: `${height * 3.4}px`,
          end: `+=${height * 0.2}px`,
        },
      });
      gsap.to(cardPurpleRef.current, {
        immediateRender: false,
        left: '17.579%',
        top: '17.734%',
        pointerEvents: 'auto',
        scale: 1.64,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 3.3}px`,
          end: `+=${height * 0.7}px`,
        },
      });

      gsap.to(phoneRef.current, {
        startAt: { right: '-14.731%', opacity: 0, pointerEvents: 'none' },
        right: '-3.571%',
        opacity: 1,
        pointerEvents: 'auto',
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 3.3}px`,
          end: `+=${height * 0.7}px`,
        },
      });

      gsap.to(inboxRef.current, {
        startAt: { left: '-7.812%', opacity: 0, pointerEvents: 'none' },
        left: '3.348%',
        opacity: 1,
        pointerEvents: 'auto',
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: `${height * 3.3}px`,
          end: `+=${height * 0.7}px`,
        },
      });
    },
    {
      scope: containerRef,
    }
  );

  useEffect(() => {
    const animationContainerHeight = animationRef.current.offsetHeight * 5.5;
    containerRef.current.style.height = `${animationContainerHeight}px`;
  }, []);

  return (
    <div className="container-xl relative" ref={containerRef}>
      <div className="w-full h-auto aspect-[56/45]" ref={animationRef}>
        <section
          className="developers max-w-80 absolute bottom-1/2 translate-y-1/2 right-[4.613%] opacity-0 z-50"
          ref={developersRef}
        >
          <h2 className="text-[44px] leading-denser tracking-snug font-medium">Developers</h2>
          <p className="mt-3 text-white/70 text-lg leading-snug">
            Define workflows as code, re-use components, and deploy confidently while developing in
            your IDE of choice. Experience seamless GitOps.
          </p>
          <Button className="text-sm h-10 min-w-[140px] mt-6" theme="white-filled">
            Learn more
          </Button>
        </section>
        <section
          className="product-teams max-w-[360px] absolute bottom-1/2 translate-y-1/2 left-[-1.488%] opacity-0 z-40"
          ref={productTeamsRef}
        >
          <h2 className="text-[44px] leading-denser tracking-snug font-medium">Product teams</h2>
          <p className="mt-3 text-white/70 text-lg leading-snug">
            Define workflows as code, re-use components, and deploy confidently while developing in
            your IDE of choice. Experience seamless GitOps Notifications revolutionizing workflow
            management
          </p>
          <Button className="text-sm h-10 min-w-[140px] mt-6" theme="white-filled">
            Learn more
          </Button>
        </section>
        <section
          className="end-users max-w-[552px] absolute left-1/2 -translate-x-1/2 top-[11.111%] text-center opacity-0 z-50"
          ref={endUsersRef}
        >
          <h2 className="text-[44px] leading-denser tracking-snug font-medium">End users</h2>
          <p className="mt-3 text-white/70 text-lg leading-snug">
            Define workflows as code, re-use components, and deploy confidently while developing in
            your IDE of choice.
          </p>
        </section>
        <div
          className="card-code absolute w-auto h-[41.46%] aspect-[137/107] top-[4.074%] right-[11.161%] z-30"
          ref={cardCodeRef}
        >
          <span
            className="absolute left-0 top-0 -z-10 h-full w-px"
            ref={cardCodeAnimationWrapperRef}
            aria-hidden
          />
          <div
            className="relative w-full h-full [&_canvas]:!h-full [&_canvas]:!w-full"
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
          className="card-blue absolute w-auto h-[41.481%] aspect-[59/46] top-[6.019%] left-[29.613%] z-30"
          ref={cardBlueRef}
        >
          <span
            className="absolute left-0 top-0 -z-10 h-full w-px"
            ref={cardBlueAnimationWrapperRef}
            aria-hidden
          />
          <div
            className="relative w-full h-full [&_canvas]:!h-full [&_canvas]:!w-full"
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
          className="card-purple absolute w-auto h-[68.611%] aspect-[789/1084] top-[-14.722%] left-[6.473%] z-40"
          ref={cardPurpleRef}
        >
          <span
            className="absolute left-0 top-0 -z-10 h-full w-px"
            ref={cardPurpleAnimationWrapperRef}
            aria-hidden
          />
          <div
            className="relative w-full h-full [&_canvas]:!h-full [&_canvas]:!w-full"
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
          className="phone absolute w-auto h-[74.537%] aspect-[547/805] top-[32.129%] right-[-3.571%] opacity-0 z-30"
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
          className="inbox absolute w-auto h-[44.444%] aspect-[341/480] top-[39.629%] left-[3.348%] opacity-0 z-30"
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
  );
};

export default Animation;
