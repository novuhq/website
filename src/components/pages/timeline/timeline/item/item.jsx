import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import airplaneIcon from './images/airplane.svg';
import arrowIcon from './images/arrow.svg';
import ballonIcon from './images/ballon.svg';
import bookmarkIcon from './images/bookmark.svg';
import boxIcon from './images/box.svg';
import checkIcon from './images/check.svg';
import codeIcon from './images/code.svg';
import githubIcon from './images/github.svg';
import lightningIcon from './images/lightning.svg';
import shineIcon from './images/shine.svg';
import speakerIcon from './images/speaker.svg';
import swagIcon from './images/swag.svg';
import twitterIcon from './images/twitter.svg';
import userIcon from './images/user.svg';

const icons = {
  check: checkIcon,
  user: userIcon,
  github: githubIcon,
  lightning: lightningIcon,
  box: boxIcon,
  code: codeIcon,
  airplane: airplaneIcon,
  ballon: ballonIcon,
  speaker: speakerIcon,
  twitter: twitterIcon,
  swag: swagIcon,
  bookmark: bookmarkIcon,
  shine: shineIcon,
};

const Item = ({ date, title, description, iconName, animationDelay }) => {
  const [animationWrapperRef, isAnimationWrapperInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const [isOpen, setIsOpen] = useState(false);

  const icon = icons[iconName];

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={clsx('timeline-item group absolute left-[-22px] z-10 h-fit w-max', {
          'cursor-pointer': description,
          'z-20': isOpen,
        })}
        role={description && 'button'}
        tabIndex={0}
        initial={{ opacity: 0, y: -10 }}
        animate={isAnimationWrapperInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: animationDelay }}
        ref={animationWrapperRef}
        data-date={date}
        onClick={description && handleClick}
        onKeyDown={description && handleClick}
      >
        <div className="timeline-item-border-gradient flex flex-col rounded-md p-3">
          <div className="flex items-center gap-x-3">
            <img src={icon} height={24} width={24} loading="eager" alt="" />
            <span className="text-white opacity-70 transition-opacity duration-200 group-hover:opacity-100">
              {title}
            </span>
            {description && (
              <div className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.4)_100%)]">
                <img src={arrowIcon} width={8} height={6} loading="eager" alt="" />
              </div>
            )}
          </div>
          {description && (
            <AnimatePresence>
              {isOpen && (
                <m.p
                  className="max-w-[340px] text-sm text-gray-7 group-hover:text-white"
                  initial={{ opacity: 0, height: 0, y: 0, transition: { duration: 0 } }}
                  animate={{ opacity: 1, height: 'auto', y: 6, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, height: 0, y: 0, transition: { duration: 0 } }}
                >
                  {description}
                </m.p>
              )}
            </AnimatePresence>
          )}
        </div>
      </m.div>
    </LazyMotion>
  );
};

Item.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  iconName: PropTypes.oneOf(Object.keys(icons)).isRequired,
  animationDelay: PropTypes.number,
};

Item.defaultProps = {
  description: null,
  animationDelay: 0,
};

export default Item;
