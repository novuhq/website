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

  const { animationRef, containerRef, lightImageRef } = refs;

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
};

export default useGSAPAnimations;
