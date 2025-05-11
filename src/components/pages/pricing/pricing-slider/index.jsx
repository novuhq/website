import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const PricingSlider = ({ className }) => (
  <div className={clsx('mx-auto w-full max-w-4xl rounded-xl bg-[#111018] p-6', className)}>
    <h2 className="mb-6 text-center text-2xl font-medium">Pricing Slider</h2>
    <p className="text-gray-400 text-center">This component will be implemented in the future.</p>
  </div>
);

PricingSlider.propTypes = {
  className: PropTypes.string,
};

export default PricingSlider;
