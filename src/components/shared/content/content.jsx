// eslint-disable-next-line import/no-extraneous-dependencies

import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Content = ({ className, content, asHTML }) => {
  if (asHTML) {
    return (
      <div className="mt-10 md:mt-8">
        <div className={clsx('content', className)} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }

  return (
    <div className="mt-10 md:mt-8">
      <div className={clsx('content', className)}>{content}</div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  asHTML: PropTypes.bool,
};

Content.defaultProps = {
  className: null,
  asHTML: false,
};

export default Content;
