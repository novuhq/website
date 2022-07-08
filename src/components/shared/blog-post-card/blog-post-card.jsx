import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCardLarge from './blog-post-card-large';
import BlogPostCardMedium from './blog-post-card-medium';
import BlogPostCardPropTypes from './blog-post-card-prop-types';

const components = {
  md: BlogPostCardMedium,
  lg: BlogPostCardLarge,
};

const BlogPostCard = ({ size, ...otherProps }) => {
  const Component = components[size];

  return <Component {...otherProps} />;
};

BlogPostCard.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(components)).isRequired,
  ...BlogPostCardPropTypes,
};

BlogPostCard.defaultProps = {
  className: null,
};

export default BlogPostCard;
