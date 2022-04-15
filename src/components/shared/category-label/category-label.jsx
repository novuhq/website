import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'block font-medium leading-none transition-colors duration-200 hover:text-white uppercase',
  size: {
    sm: 'text-sm',
    xs: 'text-xs',
  },
  theme: {
    blue: 'text-primary-1',
    yellow: 'text-secondary-2',
  },
};

const CategoryLabel = ({ className, url, size, theme, children }) => (
  <Link className={clsx(styles.base, styles.size[size], styles.theme[theme], className)} to={url}>
    {children}
  </Link>
);

CategoryLabel.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

CategoryLabel.defaultProps = {
  className: null,
};

export default CategoryLabel;
