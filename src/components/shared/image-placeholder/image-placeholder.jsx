import PropTypes from 'prop-types';
import React from 'react';

const ImagePlaceholder = ({ className, width, height }) => (
  <img
    className={className}
    src={`data:image/svg+xml;charset=utf-8,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`}
    alt=""
    aria-hidden
  />
);

ImagePlaceholder.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

ImagePlaceholder.defaultProps = {
  className: null,
};

export default ImagePlaceholder;
