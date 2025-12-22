import clsx from 'clsx';
import { m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import DEFAULT_EASE from 'constants/default-ease';
import ArrowIcon from 'icons/chevron-right.inline.svg';

const styles = {
  base: 'inline-block leading-none transition-colors duration-200',
  size: {
    xl: 'text-xl',
    base: 'text-base',
    md: 'text-md',
    sm: 'text-sm',
    xs: 'text-xs',
    xxs: 'text-[11px]',
  },
  theme: {
    primary: 'text-primary-1 hover:text-primary-2 focus-visible:text-primary-2',
    'primary-underline':
      'text-primary-1 relative tracking-wide uppercase pb-1.5 hover:text-primary-1 focus-visible:text-primary-1',
    'white-underline': 'text-white relative tracking-wide uppercase pb-1.5',
    white: 'text-white hover:text-primary-1 focus-visible:text-primary-1',
    gray: 'text-gray-8 hover:text-primary-1 focus-visible:text-primary-1',
    'gray-9': 'text-gray-9 hover:text-primary-1 focus-visible:text-primary-1',
    'gray-11': 'text-gray-11 hover:text-primary-1 focus-visible:text-primary-1',
    'gray-to-white':
      'text-gray-9 hover:text-white hover:bg-[#17171f]/85 focus-visible:text-white focus-visible:bg-[#17171f]/85 outline-none focus-visible:ring-2 focus-visible:ring-white',
    ghost: 'text-white opacity-50 hover:opacity-100 focus-visible:opacity-100',
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

  const arrow = (
    <span className="relative mt-0.5 w-1.5 shrink-0 overflow-hidden transition-[width] duration-200 group-hover:w-3">
      <ArrowIcon className="ml-auto w-1.5" />
      <span className="absolute right-px top-1/2 h-px w-full -translate-y-1/2 bg-primary-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </span>
  );

  // Paths that are proxied to another site and should use regular <a> tags
  // to ensure Netlify redirects work properly
  const proxiedPaths = [
    '/blog',
    '/changelog',
    '/customers',
    '/pricing',
    '/dpa',
    '/privacy',
    '/terms',
  ];
  const isProxiedPath =
    to &&
    proxiedPaths.some((path) => {
      const pathWithoutQuery = to.split('?')[0];
      return pathWithoutQuery === path || pathWithoutQuery.startsWith(`${path}/`);
    });

  if (to?.startsWith('/') && !tag && !isProxiedPath) {
    return (
      <GatsbyLink
        className={className}
        to={to}
        onMouseEnter={isUnderline ? handleHover : undefined}
        {...props}
      >
        {children}
        {isUnderline && underline}
        {withArrow && arrow}
      </GatsbyLink>
    );
  }

  // For proxied paths: use window.location to force full page reload
  // This ensures Netlify redirects work even if a Gatsby page exists
  const handleClick = (e) => {
    if (isProxiedPath && to) {
      e.preventDefault();
      window.location.href = to;
    }
  };

  return (
    <Tag
      className={className}
      href={to}
      onClick={handleClick}
      onMouseEnter={isUnderline ? handleHover : undefined}
      {...props}
    >
      {children}
      {isUnderline && underline}
      {withArrow && arrow}
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
