import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { LinkedinShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';

import AuthorWithDate from 'components/shared/author-with-date';
import FacebookIcon from 'icons/facebook-solid.inline.svg';
import LinkedinIcon from 'icons/linkedin-solid.inline.svg';
import TwitterIcon from 'icons/x-solid.inline.svg';

const SocialShare = ({ className, author, date, url }) => (
  <div
    className={clsx(
      'relative flex flex-col md:flex-row md:items-center md:justify-between md:gap-3.5 md:pt-8 sm:flex-col',
      className
    )}
  >
    <AuthorWithDate className="hidden md:flex" author={author} date={date} />
    <span className="text-[#EEEFF1] md:hidden">Share article:</span>
    <div className="flex gap-x-4 mt-2.5 md:mt-0">
      <TwitterShareButton url={url} resetButtonStyle={false}>
        <div className="rounded-full bg-white w-8 h-8 flex justify-center items-center transition-opacity duration-200 hover:opacity-80 md:w-6 md:h-6">
          <TwitterIcon className="h-4 w-4 md:h-3 md:w-3" />
        </div>
      </TwitterShareButton>
      <FacebookShareButton url={url} resetButtonStyle={false}>
        <div className="rounded-full bg-white w-8 h-8 flex justify-center items-center transition-opacity duration-200 hover:opacity-80 md:w-6 md:h-6">
          <FacebookIcon className="h-4 w-4 md:h-3 md:w-3" />
        </div>
      </FacebookShareButton>
      <LinkedinShareButton url={url} resetButtonStyle={false}>
        <div className="rounded-full bg-white w-8 h-8 flex justify-center items-center transition-opacity duration-200 hover:opacity-80 md:w-6 md:h-6">
          <LinkedinIcon className="h-4 w-4 md:h-3 md:w-3" />
        </div>
      </LinkedinShareButton>
    </div>
  </div>
);

SocialShare.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      alternativeText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.any.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialShare;
