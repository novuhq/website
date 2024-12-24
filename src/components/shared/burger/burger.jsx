import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

const ANIMATION_DURATION = 0.2;

const Burger = ({ className: additionalClassName, isToggled, onClick }) => (
  <LazyMotion features={domAnimation}>
    <m.button
      className={clsx('relative h-[19px] w-4', additionalClassName)}
      type="button"
      animate={isToggled ? 'toggled' : 'initial'}
      aria-label="Menu"
      onClick={onClick}
    >
      <m.span
        className="absolute left-0 top-1 block h-px w-4 rounded-full bg-white"
        variants={{
          initial: {
            top: 4,
            display: 'block',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
          toggled: {
            top: 9,
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
        }}
      />
      <m.span
        className="absolute left-0 top-[9px] block h-px w-3 rounded-full bg-white"
        variants={{
          initial: {
            display: 'block',
          },
          toggled: {
            display: 'none',
          },
        }}
      />
      <m.span
        className="absolute bottom-1 left-0 block h-px w-4 rounded-full bg-white"
        variants={{
          initial: {
            bottom: 4,
            display: 'block',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
          toggled: {
            bottom: 9,
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
        }}
      />
      <m.span
        className="absolute left-0 top-[9px] hidden h-px w-4 rounded-full bg-white"
        variants={{
          initial: {
            rotate: '0deg',
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
          toggled: {
            display: 'block',
            rotate: '45deg',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
        }}
      />
      <m.span
        className="absolute left-0 top-[9px] hidden h-px w-4 rounded-full bg-white"
        variants={{
          initial: {
            rotate: '0deg',
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
          toggled: {
            display: 'block',
            rotate: '-45deg',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
        }}
      />
    </m.button>
  </LazyMotion>
);

Burger.propTypes = {
  className: PropTypes.string,
  isToggled: PropTypes.bool,
  onClick: PropTypes.func,
};

Burger.defaultProps = {
  className: null,
  isToggled: false,
  onClick: null,
};

export default Burger;
