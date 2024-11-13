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
        className="left-[3.5%] z-10 lg:h-auto lg:w-[500px] md:w-[380px] sm:left-0 sm:w-full sm:max-w-[628px]"
        src="./images/inbox.png"
        alt=""
        width={628}
        height={659}
      />
      <img
        className="pointer-events-none absolute left-[-5.2548%] top-[-13.8088%] z-10 h-[31.4112%] w-[76.7516%]"
        src={currentTheme.backgroundImage}
        alt=""
        width="482"
        height="206"
      />
      <div
        className="pointer-events-none absolute left-[13.3757%] top-[-23.3687%] z-0 h-[68.2852%] w-[39.8089%] rotate-90 bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)] blur-[22px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[4.5523%] top-[-23.3687%] z-0 h-[91.9575%] w-[76.1146%] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[-17.5159%] top-[-44.006%] z-0 h-[154.7799%] w-[131.8471%] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]"
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
