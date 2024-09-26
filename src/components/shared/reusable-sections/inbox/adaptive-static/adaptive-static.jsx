import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import dots from '../images/dots.svg';

const THEMES = {
  dark: {
    backgroundImage: dots,
  },
};

const AdaptiveStatic = ({ theme, className }) => {
  const currentTheme = THEMES[theme];

  return (
    <div className={clsx(className, 'relative shrink-0 sm:order-last sm:mt-6')}>
      <StaticImage
        className="z-10 left-[3.5%] lg:w-[500px] lg:h-auto md:w-[380px] sm:w-full sm:max-w-[628px] sm:left-0"
        src="./images/inbox.png"
        alt=""
        width={628}
        height={659}
      />
      <img
        className="absolute z-10 w-[76.7516%] h-[31.4112%] top-[-13.8088%] left-[-5.2548%]"
        src={currentTheme.backgroundImage}
        alt=""
        width="482"
        height="206"
      />
      <div
        className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)] w-[39.8089%] h-[68.2852%] rotate-90 top-[-23.3687%] left-[13.3757%] blur-[22px]"
        aria-hidden
      />
      <div
        className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)] w-[76.1146%] h-[91.9575%] -rotate-45 top-[-23.3687%] left-[4.5523%]"
        aria-hidden
      />
      <div
        className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)] w-[131.8471%] h-[154.7799%] -rotate-45 top-[-44.006%] left-[-17.5159%]"
        aria-hidden
      />
    </div>
  );
};

AdaptiveStatic.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired,
  className: PropTypes.string,
};

AdaptiveStatic.defaultProps = {
  className: '',
};

export default AdaptiveStatic;
