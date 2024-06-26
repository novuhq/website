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

const MobileMenu = ({ isOpen, setIsOpen }) => {
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
      {isOpen && (
        <AnimatePresence>
          <m.div
            className="hidden safe-paddings fixed inset-0 justify-between w-full flex-col overflow-x-hidden overflow-y-scroll md:flex"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <Button
              className="absolute h-8 w-6 top-4 right-7 sm:top-3.5 sm:right-4"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            />
            <nav className={clsx('flex h-full w-full', paddingTopClassName)}>
              <ul className="flex h-full w-full flex-col relative bg-black border-t border-t-[#1F1F1F]">
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

            <div className="bg-black">
              <div className="container">
                <div className="flex w-full justify-between space-x-4 py-7 border-t border-t-gray-2">
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
        </AnimatePresence>
      )}
    </LazyMotion>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
