import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import useScrollStatus from 'hooks/use-scroll-status';
import ChevronIcon from 'icons/chevron-small.inline.svg';

import SubMenu from './sub-menu';
import TabletMenu from './tablet-menu';

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
  const [openMenu, setOpenMenu] = useState(null);
  const [isBanner, setIsBanner] = useState(false);
  const { isScrolledToBottom, hasScroll, handleScroll } = useScrollStatus();

  const handleOpenMenu = (items) => {
    setOpenMenu((current) => (current?.label === items?.label ? null : items));
  };

  useEffect(() => {
    const topBanner = document.querySelector('.top-banner');
    const linkBanner = document.querySelector('.link-banner');
    if (topBanner || linkBanner) {
      setIsBanner(true);
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            className={clsx(
              'safe-paddings pointer-events-none fixed inset-0 hidden w-full flex-col justify-between overflow-x-hidden overflow-y-scroll pt-16 md:flex',
              isBanner ? 'pt-[100px]' : 'pt-16'
            )}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <nav
              className={clsx(
                'pointer-events-auto relative flex h-full w-full overflow-x-hidden overflow-y-scroll bg-black',
                hasScroll &&
                  !isScrolledToBottom &&
                  'after:pointer-events-none after:fixed after:inset-x-4 after:bottom-24 after:top-16 after:z-50 after:bg-[linear-gradient(180deg,#05050B00_86.18%,#05050B_100%)] sm:after:bottom-[142px]'
              )}
              onScroll={handleScroll}
            >
              <ul className="relative flex h-full w-full flex-col border-t border-t-[#1F1F1F] px-8 sm:px-5">
                {MENUS.header.map(({ text, to, target, menuItems }, index) => (
                  <li className="border-b border-b-[#1F1F1F] last:border-b-0" key={index}>
                    <Link
                      className={clsx(
                        'flex h-[53px] w-full items-center justify-between text-left text-lg leading-none sm:h-[45px] sm:text-base'
                      )}
                      tag={to ? null : 'button'}
                      to={to}
                      theme="white"
                      target={target}
                      onClick={to ? null : () => handleOpenMenu(menuItems)}
                    >
                      {text}
                      {menuItems && (
                        <ChevronIcon
                          className={clsx(
                            'size-3.5 -rotate-90 transition-transform duration-200',
                            openMenu?.label === menuItems?.label ? 'rotate-0' : ''
                          )}
                        />
                      )}
                    </Link>
                    <TabletMenu openMenu={openMenu} label={menuItems?.label} />
                  </li>
                ))}
              </ul>
              <SubMenu currentMenu={openMenu} handleOpenMenu={handleOpenMenu} isBanner={isBanner} />
            </nav>

            <div className="pointer-events-auto bg-black">
              <div className="container flex justify-between gap-x-4 gap-y-3.5 py-7 sm:px-5 sm:py-6 xs:flex-col">
                <Button className="w-full" size="xs" theme="white-outline" {...LINKS.loginTopBar}>
                  Login
                </Button>
                <Button
                  className="w-full"
                  size="xs"
                  theme="white-filled"
                  {...LINKS.getStartedTopBar}
                >
                  Get Started
                </Button>
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
