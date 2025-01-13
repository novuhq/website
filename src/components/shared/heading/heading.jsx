import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  size: {
    '3xl': 'text-8xl',
    '2xl': 'text-7xl',
    xl: 'text-6xl',
    44: 'text-[44px]',
    40: 'text-[40px]',
    lg: 'text-5xl',
    md: 'text-4xl',
    sm: 'text-3xl',
    xs: 'text-2xl',
  },
  theme: {
    white: 'text-white',
    black: 'text-black',
    purple: 'text-purple',
  },
};

const Heading = ({
  className: additionalClassName,
  tag: Tag,
  size,
  theme,
  asHTML,
  children,
  ...otherProps
}) => {
  const className = clsx(styles.size[size], styles.theme[theme], additionalClassName);

  if (asHTML) {
    return (
      <Tag className={className} dangerouslySetInnerHTML={{ __html: children }} {...otherProps} />
    );
  }

  return (
    <Tag className={className} {...otherProps}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  asHTML: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  className: null,
  asHTML: false,
};

export default Heading;
