import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import ChevronIcon from 'icons/chevron-small.inline.svg';

import SubMenu from './sub-menu';

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
  const [currentMenu, setCurrentMenu] = useState(null);

  const handleOpenMenu = (menuItems) => {
    setCurrentMenu((current) => (current?.label === menuItems?.label ? null : menuItems));
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            className="safe-paddings pointer-events-none fixed inset-0 hidden w-full flex-col justify-between overflow-x-hidden overflow-y-scroll pt-16 sm:flex"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <nav className="pointer-events-auto flex h-full w-full overflow-x-hidden overflow-y-scroll bg-black">
              <ul className="relative flex h-full w-full flex-col border-t border-t-[#1F1F1F] bg-black">
                {MENUS.header.map(({ text, menuItems, to, target }, index) => (
                  <li className="border-b border-b-gray-2 px-5 last:border-b-0" key={index}>
                    <Link
                      className={clsx(
                        'flex h-[45px] w-full items-center justify-between text-left text-base leading-none'
                      )}
                      tag={to ? null : 'button'}
                      to={to}
                      theme="white"
                      target={target}
                      onClick={to ? null : () => handleOpenMenu(menuItems)}
                    >
                      <span>{text}</span>
                      {menuItems && <ChevronIcon className="h-3.5 w-3.5 -rotate-90" />}
                    </Link>
                  </li>
                ))}
              </ul>
              <SubMenu currentMenu={currentMenu} handleOpenMenu={handleOpenMenu} />
            </nav>

            <div className="pointer-events-auto bg-black">
              <div className="container px-5">
                <div className="flex w-full flex-col justify-between gap-3.5 py-6">
                  <Button className="w-full" size="xs" theme="white-outline">
                    Login
                  </Button>
                  <Button className="w-full" size="xs" theme="white-filled" {...LINKS.getStarted}>
                    Get Started
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
