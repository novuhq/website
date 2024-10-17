import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const Author = ({ author }) => (
  <div>
    <span className="text-[#EEEFF1]">Author</span>
    <div className="flex items-center mt-3.5">
      <GatsbyImage
        className="mr-2.5 w-11 h-11"
        imgClassName="rounded-full"
        image={getImage(author.postAuthor?.photo?.localFile)}
        alt={author.postAuthor?.photo?.altText || author.title}
        loading="eager"
      />
      <div className="flex items-center">
        <span className="text-gray-10">{author.title}</span>
      </div>
    </div>
  </div>
);

Author.propTypes = {
  author: PropTypes.shape({
    title: PropTypes.string.isRequired,
    postAuthor: PropTypes.shape({
      photo: PropTypes.shape({
        localFile: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Author;
