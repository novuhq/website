import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import transcriptBorderGlow from './images/transcript-border-glow.svg';

const SectionWithVideo = ({ video, title, description, videoPosition, transcription }) => {
  const getVideoComponent = () => {
    switch (video.type) {
      case 'youtube':
        return (
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${getYouTubeId(video.url)}`}
            title="Youtube video"
            allowFullScreen
          />
        );
      case 'vimeo':
        return (
          <div
            className="[&_iframe]:w-full [&_iframe]:aspect-video"
            dangerouslySetInnerHTML={{ __html: video.embed }}
          />
        );
      case 'loom':
        return (
          <div
            className="relative w-full aspect-video"
            dangerouslySetInnerHTML={{ __html: video.embed }}
          />
        );
      default:
        return <p>Unsupported video source</p>;
    }
  };

  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <section className="section-with-video safe-paddings mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
      <div
        className={clsx(
          'container-lg flex items-center justify-center gap-x-16 lg:gap-x-12 md:flex-col',
          videoPosition === 'fullWidth' && 'flex-col'
        )}
      >
        <div
          className={clsx('md:order-first md:w-full md:p-0 md:text-center md:max-w-lg', {
            'order-last pr-8': videoPosition === 'left',
            'pl-8': videoPosition === 'right',
            'w-full flex flex-col max-w-[655px] text-center': videoPosition === 'fullWidth',
          })}
        >
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag="h2"
            size="44"
          >
            {title}
          </Heading>
          <p className="text-gray-9 text-[17px] leading-snug mt-3 md:text-sm md:mt-2">
            {description}
          </p>
        </div>
        <figure
          className={clsx(
            'shrink-0 h-full md:mt-8',
            videoPosition !== 'fullWidth' ? 'w-[672px] lg:w-[480px] md:w-full' : 'w-full mt-12'
          )}
          aria-describedby="transcript"
        >
          {getVideoComponent()}
        </figure>
        {transcription !== null && videoPosition === 'fullWidth' && (
          <div
            id="transcript"
            className="relative w-full max-w-[776px] mx-auto pl-9 mt-[88px] after:absolute after:w-0.5 after:h-full after:rounded-full after:bg-[linear-gradient(180deg,#5D9CB1_0%,#475B94_100%)] after:opacity-30 after:left-0.5 after:top-0 sm:after:hidden sm:pl-0 lg:mt-20 md:mt-16 sm:mt-10"
          >
            <Heading
              className="font-medium tracking-snug text-[32px] leading-denser lg:text-3xl md:text-2xl sm:text-xl"
              tag="h3"
            >
              Transcript
            </Heading>
            {transcription.map((item, index) => (
              <p key={index} className="text-gray-9 text-[17px] leading-snug mt-5 first:mt-6">
                {item}
              </p>
            ))}
            <img
              className="absolute -left-1.5 -top-2 sm:hidden"
              src={transcriptBorderGlow}
              alt=""
              width={18}
              height={249}
            />
          </div>
        )}
      </div>
    </section>
  );
};

SectionWithVideo.propTypes = {
  video: PropTypes.shape({
    type: PropTypes.oneOf(['youtube', 'vimeo', 'loom']),
    url: PropTypes.string,
    embed: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoPosition: PropTypes.oneOf(['left', 'right', 'fullWidth']),
  transcription: PropTypes.arrayOf(PropTypes.string),
};

SectionWithVideo.defaultProps = {
  videoPosition: 'right',
  transcription: null,
};

export default SectionWithVideo;
