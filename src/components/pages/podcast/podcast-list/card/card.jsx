import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Link from 'components/shared/link';
import { useAudioPlayer } from 'context/audio-player';

import triangle from './images/triangle.svg';

const Card = ({ title, author, episode, audio, slug, imageUrl }) => {
  // const date = new Date(episode.published);

  const audioPlayerData = useMemo(
    () => ({
      title,
      audio,
      link: `/${title}`,
    }),
    [title, audio]
  );
  const player = useAudioPlayer(audioPlayerData);

  return (
    <article className="col-span-6 mt-14 flex space-x-7">
      <Link className="relative overflow-hidden rounded-lg" to={slug}>
        <img className="grayscale" src={imageUrl} loading="lazy" height={160} width={160} alt="" />
        <img
          className="absolute bottom-0 left-0"
          src={triangle}
          loading="lazy"
          height={56}
          width={128}
          alt=""
          aria-hidden
        />
        <span className="absolute bottom-2.5 left-2.5 rounded-sm bg-white px-2 py-1 text-xs font-medium text-black">
          {author}
        </span>
      </Link>
      <div className="flex grow flex-col">
        <header className="space-y-3.5">
          <span className="text-xs font-medium uppercase text-secondary-2">Episode {episode}</span>
          <h1 className="mt-3.5 text-xl font-medium leading-denser">
            <Link className="inline-block align-top" to={slug} theme="white">
              {title}
            </Link>
          </h1>
          {/* <p className="text-base font-book text-gray-8 line-clamp-3">{description}</p> */}
        </header>
        {/* <footer className="mt-3.5 flex items-center space-x-3 md:mt-5">
        <AuthorWithDate author={author} date={date} />
      </footer> */}
        <button
          type="button"
          className="text-pink-500 hover:text-pink-700 active:text-pink-900 flex items-center text-sm font-bold leading-6"
          onClick={() => player.toggle()}
        >
          <span className="sr-only">
            {player.playing ? 'Pause' : 'Play'}
            episode {episode.title}
          </span>
          <svg
            className="h-2.5 w-2.5 fill-current"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
          >
            {player.playing ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
              />
            ) : (
              <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
            )}
          </svg>

          <span className="ml-3" aria-hidden="true">
            Listen
          </span>
        </button>
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  audio: PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
