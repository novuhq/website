import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button/button';
import Heading from 'components/shared/heading/heading';
import LINKS from 'constants/links';

import bg from './images/bg.svg';

import './get-started.css';

const TITLE = 'Ready to send your first notification?';

const LEFT_TITLE = 'Self-Hosted';
const LEFT_DESCRIPTION = 'Run locally with docker-compose';
const LEFT_BUTTON_TEXT = 'Read Docs';

const RIGHT_TITLE = 'Cloud';
const RIGHT_DESCRIPTION = 'Use our free managed service';
const RIGHT_BUTTON_TEXT = 'Get Started';

const themeClassNames = {
  pink: 'get-started-gradient-multicolor',
  blue: 'get-started-blue-gradient-multicolor',
};

const GetStarted = ({
  title,
  leftTitle,
  leftDescription,
  leftButtonLink,
  leftButtonText,
  rightTitle,
  rightDescription,
  rightButtonLink,
  rightButtonText,
  theme,
}) => (
  <section className="get-started safe-paddings relative overflow-hidden py-40 lg:py-28 md:py-16 sm:py-11">
    <div className="container relative z-10">
      <Heading size="md" tag="h2" className="text-center leading-tight md:text-3xl" theme="white">
        {title}
      </Heading>

      <div className="mx-auto mt-16 grid max-w-[968px] grid-cols-2 gap-x-10 lg:gap-x-7 md:mt-12 md:gap-x-5 sm:mt-8 sm:grid-cols-1 sm:gap-x-0 sm:gap-y-7">
        <div className="flex flex-col items-center rounded-[20px] bg-gradient-to-b from-gray-2 to-[rgba(26,26,26,0.7)] p-8 pb-10 lg:rounded-2xl sm:order-2 sm:p-5">
          <Heading
            size="sm"
            tag="h3"
            className="font-medium leading-snug sm:text-2xl"
            theme="white"
          >
            {leftTitle}
          </Heading>
          <p className="mb-7 mt-3 text-center font-book leading-snug text-gray-9 sm:mb-5 sm:text-base">
            {leftDescription}
          </p>
          <Button
            className="mt-auto sm:h-10 sm:text-xs"
            size="sm"
            theme="gray-outline"
            to={leftButtonLink || leftButtonLink.to}
            {...leftButtonLink}
          >
            {leftButtonText}
          </Button>
        </div>

        <div
          className={clsx(
            'flex flex-col items-center rounded-[20px] p-8 pb-10 lg:rounded-2xl sm:order-1 sm:p-5',
            themeClassNames[theme]
          )}
        >
          <Heading
            size="sm"
            tag="h3"
            className="font-medium leading-snug sm:text-2xl"
            theme="black"
          >
            {rightTitle}
          </Heading>
          <p className="mb-7 mt-3 text-center leading-snug text-black sm:mb-5 sm:text-base">
            {rightDescription}
          </p>
          <Button
            className="mt-auto sm:h-10 sm:text-xs"
            size="sm"
            theme="black-filled"
            to={rightButtonLink || rightButtonLink.to}
            {...rightButtonLink}
          >
            {rightButtonText}
          </Button>
        </div>
      </div>
    </div>

    <img
      className="absolute left-1/2 top-1/2 min-w-[1920px] -translate-x-1/2 -translate-y-1/2"
      src={bg}
      loading="lazy"
      alt=""
      aria-hidden
    />
  </section>
);

GetStarted.propTypes = {
  title: PropTypes.string,
  leftTitle: PropTypes.string,
  leftDescription: PropTypes.string,
  leftButtonLink: PropTypes.shape({
    to: PropTypes.string,
    target: PropTypes.string,
  }),
  leftButtonText: PropTypes.string,
  rightTitle: PropTypes.string,
  rightDescription: PropTypes.string,
  rightButtonLink: PropTypes.shape({
    to: PropTypes.string,
    target: PropTypes.string,
  }),
  rightButtonText: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themeClassNames)),
};

GetStarted.defaultProps = {
  title: TITLE,
  leftTitle: LEFT_TITLE,
  leftDescription: LEFT_DESCRIPTION,
  leftButtonLink: LINKS.docker,
  leftButtonText: LEFT_BUTTON_TEXT,
  rightTitle: RIGHT_TITLE,
  rightDescription: RIGHT_DESCRIPTION,
  rightButtonLink: LINKS.getStarted,
  rightButtonText: RIGHT_BUTTON_TEXT,
  theme: 'pink',
};

export default GetStarted;
