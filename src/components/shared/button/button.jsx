import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'inline-flex items-center justify-center !leading-none text-center whitespace-nowrap rounded transition-[colors, opacity] duration-200 outline-none uppercase font-medium',
  size: {
    sm: 'h-12 px-6 text-sm',
    xs: 'h-10 px-5 text-xs',
    xxs: 'h-8 px-4 text-[11px]',
  },
  theme: {
    primary: 'bg-primary-1 text-black hover:bg-white',
    'black-filled': 'bg-black text-white hover:bg-[rgba(0,0,0,0.8)]',
    'white-filled': 'bg-white text-black hover:bg-[rgba(255,255,255,0.8)]',
    'black-outline':
      'bg-transparent text-black border border-black hover:bg-gray-5 hover:border-gray-5',
    'gray-outline':
      'bg-transparent text-white border border-gray-5 hover:bg-gray-4 hover:border-gray-4',
    'gray-outline-primary':
      'bg-transparent text-white border border-gray-5 hover:bg-primary-1 hover:border-transparent hover:text-black',
    'blue-gradient':
      'text-black bg-blue-gradient relative before:absolute before:-z-10 before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded before:bg-blue-gradient before:blur-[3px] before:opacity-100 hover:before:opacity-0 before:transition-opacity before:duration-200',
    'pink-to-yellow-gradient':
      'text-black bg-transparent bg-pink-yellow-gradient hover:bg-white hover:bg-none transition-[color,background-image]',
    yellow: 'bg-yellow text-black hover:bg-white',
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
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
  theme: null,
};

export default Button;
