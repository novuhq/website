import PropTypes from 'prop-types';
import React from 'react';

import GradientBorder from 'components/shared/gradient-border';

const Label = ({ text }) => (
  <div className="absolute right-6 top-6 z-30 flex items-center justify-center rounded-full bg-[#63316D] bg-[linear-gradient(233deg,#FFE16F_23.37%,#FEBF52_89.91%)] shadow-pricing-card-label">
    <p className="px-3.5 py-1.5 text-[14px] leading-none tracking-snug text-black">{text}</p>
    <GradientBorder className="border-image-[linear-gradient(202.15deg,rgba(255,255,255,0.5)_-2.8%,rgba(255,255,255,0)_57.35%)]" />
  </div>
);

export default Label;

Label.propTypes = {
  text: PropTypes.string.isRequired,
};
