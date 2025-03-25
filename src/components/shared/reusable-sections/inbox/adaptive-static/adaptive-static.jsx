import clsx from 'clsx';
import { m } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

import dots from '../images/dots.png';

const INBOX_IMAGE_CLASSNAMES = 'z-10 sm:w-full';

const THEMES = {
  novuDefault: {
    image: (
      <StaticImage
        className={clsx(
          INBOX_IMAGE_CLASSNAMES,
          '-left-2 -top-2 w-[528px] sm:-left-1 sm:-top-1 sm:w-[103%]'
        )}
        src="./images/inbox.png"
        alt=""
        width={528}
        height={554}
      />
    ),
    backgroundImage: dots,
  },
  notionDark: {
    image: (
      <StaticImage
        className={INBOX_IMAGE_CLASSNAMES}
        src="./images/notion-dark.png"
        alt=""
        width={512}
        height={521}
      />
    ),
  },
  notionLight: {
    image: (
      <StaticImage
        className={INBOX_IMAGE_CLASSNAMES}
        src="./images/notion-light.png"
        alt=""
        width={512}
        height={521}
      />
    ),
  },
  linearDark: {
    image: (
      <StaticImage
        className={INBOX_IMAGE_CLASSNAMES}
        src="./images/linear-dark.png"
        alt=""
        width={512}
        height={521}
      />
    ),
  },
  linearLight: {
    image: (
      <StaticImage
        className={INBOX_IMAGE_CLASSNAMES}
        src="./images/linear-light.png"
        alt=""
        width={512}
        height={521}
      />
    ),
  },
};

const AdaptiveStatic = ({ theme, className }) => {
  const { image, backgroundImage } = THEMES[theme];

  return (
    <m.div
      className={clsx(className, 'absolute left-0 top-0 h-full w-full shrink-0 sm:order-last')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {image}
      {backgroundImage && (
        <img
          className="absolute left-[-5.2548%] top-[-13.8088%] z-10 h-[31.4112%] w-[76.7516%]"
          src={backgroundImage}
          alt=""
          width="482"
          height="206"
        />
      )}
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
    </m.div>
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
