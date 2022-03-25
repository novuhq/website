import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  size: {
    xl: 'text-6xl',
    lg: 'text-4xl',
    md: 'text-3xl',
  },
};

const Heading = ({
  className: additionalClassName,
  tag: Tag,
  size,
  asHTML,
  children,
  ...otherProps
}) => {
  const className = clsx('text-white', styles.size[size], additionalClassName);

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
  asHTML: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Heading.defaultProps = {
  className: null,
  asHTML: false,
};

export default Heading;
