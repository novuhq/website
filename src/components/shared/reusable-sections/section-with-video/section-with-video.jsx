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
            className="aspect-video w-full"
            src={`https://www.youtube.com/embed/${getYouTubeId(video.url)}`}
            title="Youtube video"
            allowFullScreen
          />
        );
      case 'vimeo':
        return (
          <div
            className="[&_iframe]:aspect-video [&_iframe]:w-full"
            dangerouslySetInnerHTML={{ __html: video.embed }}
          />
        );
      case 'loom':
        return (
          <div
            className="relative aspect-video w-full"
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
          className={clsx('md:order-first md:w-full md:max-w-lg md:p-0 md:text-center', {
            'order-last pr-8': videoPosition === 'left',
            'pl-8': videoPosition === 'right',
            'flex w-full max-w-[655px] flex-col text-center': videoPosition === 'fullWidth',
          })}
        >
          <Heading
            className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
            tag="h2"
            size="44"
          >
            {title}
          </Heading>
          <p className="mt-3 text-lg leading-snug text-gray-8 md:mt-2 md:text-sm">{description}</p>
        </div>
        <figure
          className={clsx(
            'h-full shrink-0 md:mt-8',
            videoPosition !== 'fullWidth' ? 'w-[672px] lg:w-[480px] md:w-full' : 'mt-12 w-full'
          )}
          aria-describedby="transcript"
        >
          {getVideoComponent()}
        </figure>
        {transcription !== null && videoPosition === 'fullWidth' && (
          <div
            id="transcript"
            className="relative mx-auto mt-[88px] w-full max-w-[776px] pl-9 after:absolute after:left-0.5 after:top-0 after:h-full after:w-0.5 after:rounded-full after:bg-[linear-gradient(180deg,#5D9CB1_0%,#475B94_100%)] after:opacity-30 lg:mt-20 md:mt-16 sm:mt-10 sm:pl-0 sm:after:hidden"
          >
            <Heading
              className="text-[32px] font-medium leading-denser tracking-snug lg:text-3xl md:text-2xl sm:text-xl"
              tag="h3"
            >
              Transcript
            </Heading>
            {transcription.map((item, index) => (
              <p key={index} className="mt-5 text-lg leading-snug text-gray-8 first:mt-6">
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
