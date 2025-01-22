import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const GradientBorder = ({ className }) => (
  <span
    className={clsx(
      'border-linear pointer-events-none absolute inset-0 z-10 rounded-[inherit]',
      className
    )}
    aria-hidden
  />
);

export default GradientBorder;

GradientBorder.propTypes = {
  className: PropTypes.string,
};
