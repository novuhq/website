/* eslint-disable no-unused-vars */
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import React, { createContext, useContext, useMemo, useReducer, useRef } from 'react';

import AudioPlayer from 'components/shared/audio-player';

const ANIMATION_DURATION = 0.2;
const MOTION_EASY = [0.25, 0.1, 0.25, 1];

const variants = {
  hidden: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: ANIMATION_DURATION,
      ease: MOTION_EASY,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: MOTION_EASY,
    },
  },
};

const AudioPlayerContext = createContext();

const reducers = {
  SET_META(state, action) {
    return { ...state, meta: action.payload, isOpen: true };
  },
  PLAY(state, _action) {
    return { ...state, playing: true };
  },
  PAUSE(state, _action) {
    return { ...state, playing: false };
  },
  TOGGLE_MUTE(state, _action) {
    return { ...state, muted: !state.muted };
  },
  SET_CURRENT_TIME(state, action) {
    return { ...state, currentTime: action.payload };
  },
  SET_DURATION(state, action) {
    return { ...state, duration: action.payload };
  },
};

function audioReducer(state, action) {
  return reducers[action.type](state, action);
}

export const AudioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(audioReducer, {
    playing: false,
    muted: false,
    duration: 0,
    currentTime: 0,
    meta: null,
    isOpen: false,
  });
  const playerRef = useRef(null);

  const actions = useMemo(
    () => ({
      play(data) {
        if (data) {
          dispatch({ type: 'SET_META', payload: data });

          if (playerRef.current.currentSrc !== data.audio.src) {
            const { playbackRate } = playerRef.current;
            playerRef.current.src = data.audio.src;
            playerRef.current.load();
            playerRef.current.pause();
            playerRef.current.playbackRate = playbackRate;
            playerRef.current.currentTime = 0;
          }
        }

        playerRef.current.play();
      },
      pause() {
        playerRef.current.pause();
      },
      toggle(data) {
        this.isPlaying(data) ? actions.pause() : actions.play(data);
      },
      seekBy(amount) {
        playerRef.current.currentTime += amount;
      },
      seek(time) {
        playerRef.current.currentTime = time;
      },
      playbackRate(rate) {
        playerRef.current.playbackRate = rate;
      },
      toggleMute() {
        dispatch({ type: 'TOGGLE_MUTE' });
      },
      isPlaying(data) {
        return data
          ? state.playing && playerRef.current.currentSrc === data.audio.src
          : state.playing;
      },
    }),
    [state.playing, playerRef]
  );

  const api = useMemo(() => ({ ...state, ...actions }), [state, actions]);

  return (
    <>
      <AudioPlayerContext.Provider value={api}>
        {children}

        {state.isOpen && (
          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              <m.div
                className="fixed bottom-0 left-0 z-10 w-full translate-y-full"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
              >
                <AudioPlayer />
              </m.div>
            </AnimatePresence>
          </LazyMotion>
        )}
      </AudioPlayerContext.Provider>

      <audio
        ref={playerRef}
        className="hidden"
        muted={state.muted}
        onPlay={() => dispatch({ type: 'PLAY' })}
        onPause={() => dispatch({ type: 'PAUSE' })}
        onTimeUpdate={(event) => {
          dispatch({
            type: 'SET_CURRENT_TIME',
            payload: Math.floor(event.target.currentTime),
          });
        }}
        onDurationChange={(event) => {
          dispatch({
            type: 'SET_DURATION',
            payload: Math.floor(event.target.duration),
          });
        }}
      >
        <track kind="captions" />
      </audio>
    </>
  );
};

export function useAudioPlayer(data) {
  const player = useContext(AudioPlayerContext);

  return useMemo(
    () => ({
      ...player,
      play() {
        player.play(data);
      },
      toggle() {
        player.toggle(data);
      },
      get playing() {
        return player?.isPlaying(data);
      },
    }),
    [player, data]
  );
}
