import PropTypes from 'prop-types';
import React from 'react';

import GradientBorder from 'components/shared/gradient-border';

const Label = ({ text }) => (
  <div className="absolute right-6 top-6 z-30 flex items-center justify-center rounded-full bg-[#63316D] bg-[radial-gradient(70.44%_126%_at_50%_-26%,_rgba(255,_204,_255,_0.60)_0%,_rgba(255,_204,_255,_0.00)_100%)] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.40)] backdrop-blur-[2px]">
    <p className="px-3 py-1.5 text-[14px] leading-none tracking-snug text-white">{text}</p>
    <GradientBorder className="border-image-[linear-gradient(0deg,#A974B1,#A974B1)]" />
    <GradientBorder className="border-image-[radial-gradient(47.5%_103.07%_at_45.69%_-17.07%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.09)_100%)]" />
  </div>
);

export default Label;

Label.propTypes = {
  text: PropTypes.string.isRequired,
};
