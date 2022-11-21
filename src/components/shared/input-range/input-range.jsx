import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const InputRange = ({ className, styleSliderTrackWidth, blurStyles, ...otherProps }) => (
  <div
    className={clsx(
      'relative z-10 before:absolute before:top-1/2 before:left-0 before:-z-20 before:h-3 before:w-full before:-translate-y-1/2 before:rounded-[10px] before:bg-gray-3',
      className
    )}
  >
    <span
      className={clsx(
        'absolute top-1/2 left-0 -z-10 h-2.5 -translate-y-1/2 rounded-l-[40px] bg-slider-gradient'
      )}
      style={styleSliderTrackWidth}
    />
    <span
      className={clsx(
        'absolute top-1/2 -z-10 h-5 w-24 -translate-y-1/2 -translate-x-full bg-yellow-gradient blur-[5px]'
      )}
      style={blurStyles}
    />

    <input
      className="input-range relative flex w-full appearance-none items-center bg-transparent focus:outline-none"
      type="range"
      {...otherProps}
    />
  </div>
);

InputRange.propTypes = {
  className: PropTypes.string,
  styleSliderTrackWidth: PropTypes.shape({
    width: PropTypes.string.isRequired,
  }).isRequired,
  blurStyles: PropTypes.shape({
    left: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  }).isRequired,
};

InputRange.defaultProps = {
  className: null,
};

export default InputRange;
