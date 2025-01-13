import clsx from 'clsx';
import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import DEFAULT_EASE from 'constants/default-ease';
import ArrowIcon from 'icons/chevron-right.inline.svg';

const styles = {
  base: 'inline-block leading-none',
  size: {
    xl: 'text-xl',
    base: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs',
    xxs: 'text-[11px]',
  },
  theme: {
    primary: 'text-primary-1 transition-colors duration-200 hover:text-primary-2',
    'primary-underline':
      'text-primary-1 relative tracking-wide uppercase pb-1.5 transition-colors duration-200 hover:text-primary-1',
    'white-underline':
      'text-white relative tracking-wide uppercase pb-1.5 transition-colors duration-200',
    white: 'text-white hover:text-primary-1 transition-colors duration-200',
    gray: 'text-gray-8 hover:text-primary-1 transition-colors duration-200',
  },
  withArrow: 'group inline-flex items-center gap-1.5',
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

const Link = ({
  className: additionalClassName,
  size,
  theme,
  to,
  tag,
  withArrow,
  children,
  ...props
}) => {
  const [canAnimate, setCanAnimate] = useState(true);
  const controls = useAnimation();

  const Tag = tag || 'a';

  const className = clsx(
    size && theme && styles.base,
    styles.size[size],
    styles.theme[theme],
    withArrow && styles.withArrow,
    additionalClassName
  );

  const handleHover = () => {
    if (!canAnimate) return;

    setCanAnimate(false);

    controls.start('start').then(() => controls.start('finish').then(() => setCanAnimate(true)));
  };

  const isUnderline = theme === 'primary-underline' || theme === 'white-underline';

  const underline = (
    <LazyMotion features={domAnimation}>
      <m.span
        className={clsx('absolute bottom-0 left-0 h-px w-full rounded-full', {
          'bg-primary-1': theme === 'primary-underline',
          'bg-white': theme === 'white-underline',
        })}
        initial="initial"
        variants={underlineVariants}
        animate={controls}
        aria-hidden
      />
    </LazyMotion>
  );

  if (to?.startsWith('/') && !tag) {
    return (
      <GatsbyLink
        className={className}
        to={to}
        onMouseEnter={isUnderline ? handleHover : undefined}
        {...props}
      >
        {children}
        {isUnderline && underline}
        {withArrow && (
          <span className="relative mt-0.5 w-1.5 overflow-hidden transition-[width] duration-200 group-hover:w-3">
            <ArrowIcon className="ml-auto w-1.5" />
            <span className="absolute right-px top-1/2 h-px w-full -translate-y-1/2 bg-primary-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </span>
        )}
      </GatsbyLink>
    );
  }

  return (
    <Tag
      className={className}
      href={to}
      onMouseEnter={isUnderline ? handleHover : undefined}
      {...props}
    >
      {children}
      {isUnderline && underline}
      {withArrow && (
        <span className="relative mt-0.5 w-1.5 overflow-hidden transition-[width] duration-200 group-hover:w-3">
          <ArrowIcon className="ml-auto w-1.5" />
          <span className="absolute right-px top-1/2 h-px w-full -translate-y-1/2 bg-primary-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        </span>
      )}
    </Tag>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  tag: PropTypes.string,
  withArrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
  tag: null,
  withArrow: false,
};

export default Link;
