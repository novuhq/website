import PropTypes from 'prop-types';
import React from 'react';
import { LinkedinShareButton, TwitterShareButton, FacebookMessengerShareButton } from 'react-share';

import AuthorWithDate from 'components/shared/author-with-date';
import FacebookIcon from 'icons/facebook.inline.svg';
import LinkedinIcon from 'icons/linkedin.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';

const SocialShare = ({ author, date, url }) => (
  <div className="relative flex items-center justify-between gap-3.5 pt-8 sm:flex-col">
    <AuthorWithDate author={author} date={date} />

    <div className="flex space-x-4">
      <TwitterShareButton url={url} resetButtonStyle={false}>
        <TwitterIcon className="h-6 transition-opacity duration-200 hover:opacity-80" />
      </TwitterShareButton>
      <LinkedinShareButton url={url} resetButtonStyle={false}>
        <LinkedinIcon className="h-6 transition-opacity duration-200 hover:opacity-80" />
      </LinkedinShareButton>
      <FacebookMessengerShareButton url={url} resetButtonStyle={false}>
        <FacebookIcon className="h-6 transition-opacity duration-200 hover:opacity-80" />
      </FacebookMessengerShareButton>
    </div>
  </div>
);

SocialShare.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
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
