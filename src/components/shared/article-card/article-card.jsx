import PropTypes from 'prop-types';
import React from 'react';

import ArticleCardLarge from './article-card-large';
import ArticleCardMedium from './article-card-medium';
import ArticleCardPropTypes from './article-card-prop-types';

const components = {
  md: ArticleCardMedium,
  lg: ArticleCardLarge,
};

const ArticleCard = ({ size, ...otherProps }) => {
  const Component = components[size];

  return <Component {...otherProps} />;
};

ArticleCard.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(components)).isRequired,
  ...ArticleCardPropTypes,
};

ArticleCard.defaultProps = {
  className: null,
};

export default ArticleCard;
