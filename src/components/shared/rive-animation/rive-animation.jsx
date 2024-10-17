import { useRive } from '@rive-app/react-canvas';
import React, { useEffect } from 'react';

const RiveAnimation = ({ className, setRiveInstance, ...riveParameters }) => {
  const { rive, RiveComponent } = useRive(riveParameters);

  useEffect(() => {
    setRiveInstance(rive);
  }, [rive, setRiveInstance]);

  return <RiveComponent className={className} />;
};

export default RiveAnimation;
