import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'inline-flex items-center justify-center text-center whitespace-nowrap rounded outline-none transition-[colors, opacity] duration-200 uppercase font-medium !leading-none',
  size: {
    sm: 'h-12 px-6 text-sm rounded-md',
    xs: 'h-10 px-5 text-xs',
    xxs: 'h-8 px-4 text-[11px]',
  },
  theme: {
    primary: 'bg-primary-1 text-black hover:bg-white',
    'black-filled': 'bg-black text-white hover:bg-[rgba(0,0,0,0.8)]',
    'white-filled': 'bg-white text-black hover:bg-gray-10',
    'black-outline':
      'bg-transparent border border-black text-black hover:border-gray-5 hover:bg-gray-5',
    'white-outline': 'bg-transparent border border-white text-white hover:bg-gray-4',
    'gray-outline':
      'relative z-10 text-white border border-[#534B5D] hover:border-[#686170] bg-gray-btn after:absolute after:-z-10 after:inset-0 after:rounded-[inherit] after:bg-gray-gradient-4 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100 after:pointer-events-none',
    'blue-gradient':
      'relative z-10 text-black bg-blue-gradient before:absolute before:-z-10 before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded-inherit before:bg-blue-gradient before:blur-[3px] before:opacity-100 before:transition-opacity before:duration-200 hover:before:opacity-0',
    'pink-to-yellow-gradient':
      'bg-transparent bg-pink-yellow-gradient text-black transition-[color,background-image] hover:bg-white hover:bg-none',
    'pink-to-red-gradient': 'bg-pink-red-gradient text-white',
    yellow: 'bg-yellow text-black hover:bg-white',
    'blue-gradient-white-outline':
      'relative z-10 bg-white border border-[#F3F5FC] text-black before:absolute before:-inset-px before:bg-[linear-gradient(180deg,#D6DCF5_0%,#B6C0ED_100%)] before:transition-all before:duration-200 hover:before:opacity-0 focus-visible:before:opacity-0',
    'blue-outline':
      'border border-current text-[#BBC5EE]/90 transition-[color,border-color] hover:text-white focus-visible:text-white',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      <span className="relative z-30 inline-flex items-center justify-center">{children}</span>
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
