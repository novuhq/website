import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Link from 'components/shared/link';
import PodcastCover from 'components/shared/podcast-cover';
import { useAudioPlayer } from 'context/audio-player';

const Card = ({ title, author, subtitle, episode, audio, slug, imageUrl }) => {
  const audioPlayerData = useMemo(
    () => ({
      title: `${title}. ${subtitle}`,
      audio,
      link: slug,
      episode,
    }),
    [title, subtitle, audio, episode, slug]
  );
  const player = useAudioPlayer(audioPlayerData);

  return (
    <article className="col-span-6 flex space-x-7 sm:flex-col sm:space-x-0">
      <Link className="relative flex-shrink-0" to={slug}>
        <PodcastCover imageUrl={imageUrl} author={author} imageLoading="lazy" />
      </Link>
      <div className="flex grow flex-col sm:mt-5">
        <header className="space-y-3.5">
          <span className="text-xs font-medium uppercase text-secondary-2">Episode {episode}</span>
          <h1 className="mt-3.5 text-xl font-medium leading-denser md:text-lg">
            <Link className="inline-block align-top line-clamp-3" to={slug} theme="white">
              {title}. {subtitle}
            </Link>
          </h1>
        </header>
        <footer className="mt-3.5 flex items-center space-x-3">
          <button
            className="group flex items-center leading-none"
            type="button"
            onClick={() => player.toggle()}
          >
            <span className="sr-only">
              {player.playing ? 'Pause' : 'Play'}
              episode {episode.title}
            </span>

            <span
              className={clsx(
                'flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-200 group-hover:bg-white',
                player.playing ? 'bg-white' : 'bg-primary-1'
              )}
            >
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
              className={clsx(
                'ml-3 transition-colors duration-200 group-hover:text-white sm:text-xs',
                player.playing ? 'text-white' : 'text-primary-1'
              )}
              aria-hidden="true"
            >
              {player.playing ? 'Pause' : 'Listen'}
            </span>
          </button>
          <span className="inline-block h-[18px] w-px bg-gray-4" />
          <Link className="leading-none sm:text-xs" to={slug} theme="primary">
            Show notes
          </Link>
        </footer>
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  audio: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
