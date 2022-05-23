import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  size: {
    base: 'container',
    lg: 'container-lg',
  },
  backgroundColor: {
    black: 'after:border-gray-4',
    gray: 'after:border-gray-5',
  },
};

const Separator = ({ className, size, backgroundColor }) => (
  <div className={clsx('separator', styles.size[size], className)}>
    <div
      className={clsx(
        'relative after:absolute after:z-10 after:w-full after:border-t after:border-dashed after:border-gray-4',
        styles.backgroundColor[backgroundColor]
      )}
    />
  </div>
);

Separator.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  backgroundColor: PropTypes.oneOf(Object.keys(styles.backgroundColor)).isRequired,
};

Separator.defaultProps = {
  className: null,
  size: 'base',
};

export default Separator;
