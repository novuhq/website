import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import DEFAULT_EASE from 'constants/default-ease';

const styles = {
  base: 'inline-block leading-none',
  size: {
    base: 'text-base',
    sm: 'text-sm',
  },
  theme: {
    'primary-underline':
      'text-primary-2 relative tracking-wide uppercase pb-1.5 transition-colors duration-200 hover:text-primary-2',
    white: 'text-white hover:text-primary-2 transition-colors',
    gray: 'text-gray-8 hover:text-primary-2 transition-colors',
  },
};

const underlineVariants = {
  initial: {
    right: 0,
    left: 'auto',
    width: '100%',
    scaleX: -1,
  },
  start: {
    right: 0,
    left: 'auto',
    width: 0,
    scaleX: -1,
    transition: {
      duration: 0.25,
      ease: DEFAULT_EASE,
    },
    transitionEnd: {
      right: 'auto',
      left: 0,
      scaleX: 1,
    },
  },
  finish: {
    width: '100%',
    transition: {
      duration: 0.25,
      ease: DEFAULT_EASE,
    },
    transitionEnd: {
      right: 0,
      left: 'auto',
      scaleX: -1,
    },
  },
};

const Link = ({ className: additionalClassName, size, theme, to, children, ...props }) => {
  const [canAnimate, setCanAnimate] = useState(true);
  const controls = useAnimation();

  const className = clsx(
    size && theme && styles.base,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  const handleHover = () => {
    if (!canAnimate) return;

    setCanAnimate(false);

    controls.start('start').then(() => controls.start('finish').then(() => setCanAnimate(true)));
  };

  const isUnderline = theme === 'primary-underline';

  const underline = (
    <motion.span
      className="absolute bottom-0 left-0 h-px w-full rounded-full bg-primary-2"
      initial="initial"
      variants={underlineVariants}
      animate={controls}
      aria-hidden
    />
  );

  if (to.startsWith('/')) {
    return (
      <GatsbyLink
        className={className}
        to={to}
        onMouseEnter={isUnderline ? handleHover : undefined}
        {...props}
      >
        {children}
        {isUnderline && underline}
      </GatsbyLink>
    );
  }

  return (
    <a
      className={className}
      href={to}
      onMouseEnter={isUnderline ? handleHover : undefined}
      {...props}
    >
      {children}
      {isUnderline && underline}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
};

export default Link;
