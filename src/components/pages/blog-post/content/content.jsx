// eslint-disable-next-line import/no-extraneous-dependencies

import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Content = ({ className, content }) => (
  <div className="mt-10 md:mt-8">
    <div className={clsx('content', className)}>{content}</div>
  </div>
);

Content.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Content.defaultProps = {
  className: null,
};

export default Content;
