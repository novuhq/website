import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import PodcastCover from 'components/shared/podcast-cover';

import ShareAndSubscribe from '../share-and-subscribe';

const Hero = ({ className, imageUrl, url, author }) => (
  <div className={className}>
    <div className="relative">
      <StaticImage
        className="max-w-[312px]"
        src="./images/podcast-detail-hero-illustration.png"
        alt=""
        loading="eager"
      />

      <div className="absolute left-7 -bottom-5 md:left-[30px] md:bottom-[-50px] sm:left-7 sm:-bottom-7">
        <PodcastCover imageUrl={imageUrl} author={author} imageLoading="eager" />
      </div>
    </div>

    <ShareAndSubscribe className="mt-14 md:mt-20 sm:mt-14 sm:hidden" url={url} />
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  className: null,
};

export default Hero;
