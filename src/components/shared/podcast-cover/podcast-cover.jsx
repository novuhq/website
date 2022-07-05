import PropTypes from 'prop-types';
import React from 'react';

import triangle from './images/triangle.svg';

const PodcastCover = ({ imageUrl, author, imageLoading }) => (
  <div className="relative overflow-hidden rounded-lg">
    <img
      className="rounded-lg grayscale sm:h-36 sm:w-36"
      src={imageUrl}
      loading={imageLoading}
      height={160}
      width={160}
      alt=""
    />
    <img
      className="absolute bottom-0 left-0"
      src={triangle}
      loading={imageLoading}
      height={56}
      width={128}
      alt=""
      aria-hidden
    />
    <span className="absolute bottom-2.5 left-2.5 rounded-sm bg-white px-2 py-1 text-xs font-medium text-black">
      {author}
    </span>
  </div>
);

PodcastCover.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageLoading: PropTypes.oneOf(['lazy', 'eager']).isRequired,
};

export default PodcastCover;
