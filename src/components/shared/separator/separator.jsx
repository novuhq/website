import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Separator = ({ className }) => (
  <div className={clsx('separator container', className)}>
    <div className="relative after:absolute after:z-10 after:w-full after:border-t after:border-dashed after:border-gray-4" />
  </div>
);

Separator.propTypes = {
  className: PropTypes.string,
};

Separator.defaultProps = {
  className: null,
};

export default Separator;
