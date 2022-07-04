import React from 'react';

import PauseIcon from './images/pause.inline.svg';
import PlayIcon from './images/play.inline.svg';

const PlayButton = ({ player }) => (
  <button
    type="button"
    className="group relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-none bg-white outline-none"
    onClick={player.toggle}
  >
    <div className="absolute -inset-3 hidden md:block" />
    <span className="sr-only">{player.playing ? 'Pause' : 'Play'}</span>
    {player.playing ? <PauseIcon className="h-5" /> : <PlayIcon className="ml-1 h-[22px]" />}
  </button>
);

export default PlayButton;
