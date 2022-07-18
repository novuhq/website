import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const AuthorWithDate = ({ className, author: { name: authorName, photo: authorPhoto }, date }) => (
  <div className={clsx('flex items-center', className)}>
    <GatsbyImage
      className="mr-4"
      imgClassName="rounded-full"
      image={getImage(authorPhoto.localFile)}
      alt={authorPhoto.altText || authorName}
      loading="eager"
    />
    <div className="flex items-center">
      <span className="text-sm">{authorName}</span>
      <span className="mx-3.5 block h-5 w-px bg-gray-4" />
      <span className="text-sm text-gray-6">{date}</span>
    </div>
  </div>
);

AuthorWithDate.propTypes = {
  className: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      altText: PropTypes.string,
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.any.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

AuthorWithDate.defaultProps = {
  className: null,
};

export default AuthorWithDate;
