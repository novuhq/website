import React from 'react';

import './src/styles/main.css';
import { AudioProvider } from 'context/audio-player';

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  if (location.state && location.state.preventScroll === true) {
    return false;
  }

  return true;
};

export const wrapRootElement = ({ element }) => <AudioProvider>{element}</AudioProvider>;
