import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import ShareAndSubscribe from '../share-and-subscribe';

const Hero = ({ className, imageUrl, url }) => (
  <div className={className}>
    <div className="relative">
      <StaticImage
        className="max-w-[312px]"
        src="./images/podcast-detail-hero-illustration.png"
        alt=""
        loading="eager"
      />
      <img
        className="absolute left-7 -bottom-5 rounded-lg md:left-[30px] md:bottom-[-50px] sm:left-7 sm:-bottom-7 sm:h-36 sm:w-36"
        src={imageUrl}
        loading="eager"
        alt=""
        height={160}
        width={160}
      />
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
