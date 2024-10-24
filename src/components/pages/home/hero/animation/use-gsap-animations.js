import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useGSAPAnimations = ({
  refs,
  animationInterval,
  stateMachineInputs,
  isCodeAnimationReady,
  isBlueAnimationReady,
  isPurpleAnimationReady,
}) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const {
    cardPurpleFloating,
    cardPurpleSparkle,
    cardBlueFloating,
    cardCodeFloating,
    cardCodeChange,
    cardBlueChangeName,
    phoneNotification,
    inboxNotification,
    phoneReset,
    inboxReset,
    cardBlueDisabled,
  } = stateMachineInputs;

  const {
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
  } = refs;

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
};

export default useGSAPAnimations;
