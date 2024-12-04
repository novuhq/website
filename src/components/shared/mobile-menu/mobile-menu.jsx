import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import GITHUB from 'constants/github';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import GitHubIcon from 'icons/github.inline.svg';

import MenuItem from './menu-item';

const RIGHT_BUTTON_TEXT = 'Get Started';

const ANIMATION_DURATION = 0.2;

const variants = {
  hidden: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  visible: {
    zIndex: 50,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen }) => {
  const controls = useAnimation();
  const [paddingTopClassName, setPaddingTopClassName] = useState('pt-16 sm:pt-14');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  useEffect(() => {
    const topBanner = document.querySelector('.top-banner');
    if (topBanner) {
      setPaddingTopClassName('pt-[114px] sm:pt-[121px]');
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            className={clsx(
              'safe-paddings pointer-events-none fixed inset-0 hidden w-full flex-col justify-between overflow-x-hidden overflow-y-scroll md:flex',
              paddingTopClassName
            )}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <nav className="pointer-events-auto flex h-full w-full overflow-x-hidden overflow-y-scroll bg-black">
              <ul className="relative flex h-full w-full flex-col border-t border-t-[#1F1F1F] bg-black">
                {MENUS.header.map(({ to, text, target, menuItems }, index) => (
                  <MenuItem
                    className="h-[60px] border-b border-b-gray-2"
                    key={index}
                    text={text}
                    to={to}
                    target={target}
                    menuItems={menuItems && menuItems.items}
                  />
                ))}
              </ul>
            </nav>

            <div className="pointer-events-auto bg-black">
              <div className="container">
                <div className="flex w-full justify-between space-x-4 border-t border-t-gray-2 py-7">
                  <Button
                    className="w-full sm:text-xs"
                    to={GITHUB.repoUrl}
                    target="_blank"
                    size="sm"
                    theme="gray-outline"
                  >
                    <GitHubIcon className="mr-2 h-[26px] w-[26px]" />
                    <span>Star us</span>
                  </Button>

                  <Button
                    className="w-full sm:text-xs"
                    size="sm"
                    theme="white-filled"
                    {...LINKS.getStarted}
                  >
                    {RIGHT_BUTTON_TEXT}
                  </Button>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
