import PropTypes from 'prop-types';
import React from 'react';

const OutroText = ({ text }) => (
  <p className="mx-auto mt-[44px] w-fit text-[17px] leading-snug text-white [mask-image:radial-gradient(34%_361.31%_at_50.23%_-67.39%,#FFFFFF_50%,rgba(255,255,255,0.5)_150%)] md:text-sm">
    {text}
  </p>
);

export default OutroText;

OutroText.propTypes = {
  text: PropTypes.string.isRequired,
};
