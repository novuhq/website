import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  base: 'inline-flex items-center justify-center !leading-none text-center whitespace-nowrap rounded transition-[colors, opacity] duration-200 outline-none uppercase font-medium',
  size: {
    sm: 'h-12 px-6 text-sm',
    xs: 'h-10 px-5 text-xs',
  },
  theme: {
    primary: 'bg-primary-2 text-black hover:bg-white',
    'black-filled': 'bg-black text-white hover:bg-gray-4',
    'white-filled': 'bg-white text-black hover:opacity-80',
    'black-outline': 'bg-white text-black border border-black hover:bg-gray-5 hover:border-gray-5',
    'gray-outline': 'bg-black text-white border border-gray-5 hover:bg-gray-5',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
};

export default Button;
