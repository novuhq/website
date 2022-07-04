import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Heading from 'components/shared/heading';
import Separator from 'components/shared/separator';
import { useAudioPlayer } from 'context/audio-player';

import ShareAndSubscribe from '../share-and-subscribe';

const Content = ({ className, episode, title, subtitle, audio, text, date, url }) => {
  const audioPlayerData = useMemo(
    () => ({
      title: `${title}. ${subtitle}`,
      audio,
      episode,
    }),
    [title, subtitle, audio, episode]
  );
  const player = useAudioPlayer(audioPlayerData);

  return (
    <div className={clsx('sm:mt-10', className)}>
      <span className="text-sm font-medium uppercase text-secondary-2 md:text-xs">
        Episode {episode}
      </span>

      <Heading
        className="mt-5 leading-tight lg:mt-4 lg:text-4xl md:mt-3 sm:text-3xl"
        tag="h1"
        size="lg"
        theme="white"
      >
        {title}
      </Heading>
      <p className="mt-5 text-lg font-book leading-tight lg:mt-4 md:mt-3 md:text-base">
        {subtitle}
      </p>

      <div className="mt-5 flex items-center space-x-3 lg:mt-4 md:mt-3">
        <button
          className="group flex items-center leading-none"
          type="button"
          onClick={() => player.toggle()}
        >
          <span className="sr-only">
            {player.playing ? 'Pause' : 'Play'}
            episode {episode.title}
          </span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-1">
            <svg
              className={clsx('h-2.5 w-2.5 fill-current text-black', {
                'ml-1': !player.playing,
              })}
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              {player.playing ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  stroke="currentColor"
                  d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
                />
              ) : (
                <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
              )}
            </svg>
          </span>
          <span
            className="ml-3 text-primary-1 transition-colors duration-200 group-hover:text-white sm:text-xs"
            aria-hidden="true"
          >
            Listen now
          </span>
        </button>
        <span className="inline-block h-[18px] w-px bg-gray-4" />
        <span className="font-book leading-none text-gray-9 sm:text-xs">
          {moment(date).format('MMMM D, YYYY')}
        </span>
      </div>

      <Separator className="py-5 px-0" backgroundColor="black" />
      <div className="content" dangerouslySetInnerHTML={{ __html: text }} />

      <ShareAndSubscribe className="mt-10 hidden sm:block" url={url} />
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  episode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  audio: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Content.defaultProps = {
  className: null,
};

export default Content;
