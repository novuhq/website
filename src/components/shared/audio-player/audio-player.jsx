import React, { useEffect, useRef, useState } from 'react';

import Link from 'components/shared/link';
import { useAudioPlayer } from 'context/audio-player';

import ForwardButton from './forward-button';
import MuteButton from './mute-button';
import PlayButton from './play-button';
import PlaybackRateButton from './playback-rate-button';
import RewindButton from './rewind-button';
import Slider from './slider';

function parseTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;
  return [hours, minutes, seconds];
}

function formatHumanTime(seconds) {
  const [h, m, s] = parseTime(seconds);
  return `${h} hour${h === 1 ? '' : 's'}, ${m} minute${m === 1 ? '' : 's'}, ${s} second${
    s === 1 ? '' : 's'
  }`;
}

const AudioPlayer = () => {
  const player = useAudioPlayer();
  const wasPlayingRef = useRef(false);

  const [currentTime, setCurrentTime] = useState(player.currentTime);

  useEffect(() => {
    setCurrentTime(null);
  }, [player.currentTime]);

  if (!player.meta) {
    return null;
  }

  return (
    <div className="flex items-center gap-6 border-t border-gray-4 bg-black py-4 px-6 md:px-4">
      <div className="block md:hidden">
        <PlayButton player={player} size="medium" />
      </div>
      <div className="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
        <Link to={player.meta.link}>
          <a
            className="truncate text-left text-sm font-bold leading-6 md:text-center"
            title={player.meta.title}
          >
            {player.meta.title}
          </a>
        </Link>
        <div className="flex justify-between gap-6">
          <div className="hidden items-center md:flex">
            <MuteButton player={player} />
          </div>
          <div className="flex flex-none items-center gap-4">
            <RewindButton player={player} />
            <div className="hidden md:block">
              <PlayButton player={player} size="small" />
            </div>
            <ForwardButton player={player} />
          </div>
          <Slider
            label="Current time"
            maxValue={player.duration}
            step={1}
            value={[currentTime ?? player.currentTime]}
            numberFormatter={{ format: formatHumanTime }}
            onChange={([v]) => setCurrentTime(v)}
            onChangeEnd={(value) => {
              player.seek(value);
              if (wasPlayingRef.current) {
                player.play();
              }
            }}
            onChangeStart={() => {
              wasPlayingRef.current = player.playing;
              player.pause();
            }}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <PlaybackRateButton player={player} />
            </div>
            <div className="flex items-center md:hidden">
              <MuteButton player={player} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
