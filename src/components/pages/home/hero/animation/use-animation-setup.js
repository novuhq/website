import { EventType } from '@rive-app/canvas';
import { useStateMachineInput } from '@rive-app/react-canvas';
import { useState, useEffect, useCallback } from 'react';

const useAnimationSetup = ({
  cardBlueAnimationInstance,
  cardPurpleAnimationInstance,
  cardCodeAnimationInstance,
  phoneAnimationInstance,
  inboxAnimationInstance,
}) => {
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

  const cardPurpleOnScroll = useStateMachineInput(cardPurpleAnimationInstance, 'SM', 'scroll');

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

  const stateMachineInputs = {
    cardPurpleFloating,
    cardPurpleSparkle,
    cardPurpleOnScroll,
    cardBlueFloating,
    cardBlueDisabled,
    cardBlueChangeName,
    cardCodeFloating,
    cardCodeChange,
    phoneNotification,
    inboxNotification,
    phoneReset,
    inboxReset,
  };

  return {
    isCodeAnimationReady,
    isBlueAnimationReady,
    isPurpleAnimationReady,
    stateMachineInputs,
  };
};

export default useAnimationSetup;
