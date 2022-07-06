import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import ApplePodcastIcon from 'icons/apple-podcast.inline.svg';
import SpotifyIcon from 'icons/spotify.inline.svg';

import Share from './share';

const ShareAndSubscribe = ({ className, url }) => (
  <div className={clsx('flex flex-col items-start space-y-8', className)}>
    <div className="flex flex-col items-start space-y-3">
      <span className="text-xs font-light text-gray-9">Share episode:</span>
      <Share url={url} />
    </div>

    <div>
      <span className="text-xs font-light text-gray-9">Subscribe to podcast:</span>
      <div className="mt-3 flex flex-col items-start space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Link
          className="flex items-center space-x-2 rounded-md border border-gray-4 p-2 pr-4 sm:pr-2"
          {...LINKS.applePodcasts}
        >
          <ApplePodcastIcon className="h-9 flex-shrink-0 md:h-8" />
          <div className="flex flex-col">
            <span className="text-xs leading-none md:text-[10px]">Listen on</span>
            <span className="mt-1 font-bold leading-none md:mt-0.5 xs:text-sm xs:font-medium">
              Apple Podcasts
            </span>
          </div>
        </Link>
        <Link
          className="flex items-center space-x-2 rounded-md border border-gray-4 p-2 pr-4 sm:pr-2"
          {...LINKS.spotify}
        >
          <SpotifyIcon className="h-9 flex-shrink-0 md:h-8" />
          <div className="flex flex-col">
            <span className="text-xs leading-none md:text-[10px]">Listen on</span>
            <span className="mt-1 font-bold leading-none md:mt-0.5 xs:text-sm xs:font-medium">
              Spotify
            </span>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

ShareAndSubscribe.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

ShareAndSubscribe.defaultProps = {
  className: null,
};

export default ShareAndSubscribe;
