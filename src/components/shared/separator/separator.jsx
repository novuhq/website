import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  size: {
    base: 'container',
    lg: 'container-lg',
  },
};

const Separator = ({ size, className }) => (
  <div className={clsx('separator', styles.size[size], className)}>
    <div className="relative after:absolute after:z-10 after:w-full after:border-t after:border-dashed after:border-gray-4" />
  </div>
);

Separator.propTypes = {
  size: PropTypes.oneOf(Object.keys(styles.size)),
  className: PropTypes.string,
};

Separator.defaultProps = {
  size: 'base',
  className: null,
};

export default Separator;
