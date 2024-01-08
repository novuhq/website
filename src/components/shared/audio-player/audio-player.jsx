import React, { useEffect, useRef, useState } from 'react';

import Link from 'components/shared/link';
import { useAudioPlayer } from 'context/audio-player';
import parseTime from 'utils/parse-time';

import ForwardButton from './forward-button';
import MuteButton from './mute-button';
import PlayButton from './play-button';
import RewindButton from './rewind-button';
import Slider from './slider';

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
    <div className="safe-paddings relative border-t border-gray-4 bg-[rgba(0,0,0,.96)] py-4">
      <div className="container-lg">
        <div className="flex items-center space-x-5 md:space-x-0">
          <div className="md:hidden">
            <PlayButton player={player} size="medium" />
          </div>

          <div className="flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-3.5">
            <div className="grid grid-cols-[76px_1fr] items-end gap-x-5 md:flex md:flex-col md:items-center">
              <span className="block text-[11px] font-medium uppercase leading-denser text-secondary-2">
                Episode {player.meta.episode}
              </span>
              {player.meta.link ? (
                <Link className="md:mt-2.5" to={player.meta.link} theme="white">
                  <span
                    className="line-clamp-1 block text-sm leading-denser md:text-center"
                    title={player.meta.title}
                  >
                    {player.meta.title}
                  </span>
                </Link>
              ) : (
                <span
                  className="line-clamp-1 block text-sm leading-denser md:mt-2.5 md:text-center"
                  title={player.meta.title}
                >
                  {player.meta.title}
                </span>
              )}
            </div>

            <div className="grid grid-cols-[76px_1fr] items-center gap-x-5 md:flex md:justify-center md:gap-x-0">
              <div className="md:flex md:items-center">
                <div className="absolute left-7 hidden md:block sm:left-4">
                  <MuteButton player={player} />
                </div>
                <div className="flex flex-none items-center space-x-5">
                  <RewindButton player={player} />
                  <div className="hidden md:block">
                    <PlayButton player={player} size="small" />
                  </div>
                  <ForwardButton player={player} />
                </div>
              </div>

              <div className="flex space-x-5">
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

                <div className="flex items-center md:hidden">
                  <MuteButton player={player} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
