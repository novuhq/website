import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS, { applyQueryParams } from 'constants/links';
import MENUS from 'constants/menus';
import useHeaderData from 'hooks/use-header-data';
import useScrollStatus from 'hooks/use-scroll-status';
import ChevronIcon from 'icons/chevron-small.inline.svg';

import InnerMenu from './inner-menu';

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

const defaultMenuContent = {
  label: '',
  content: null,
};

const MobileMenu = ({ isOpen = false }) => {
  const [openMenu, setOpenMenu] = useState(defaultMenuContent);
  const [isBanner, setIsBanner] = useState(false);
  const { isScrolledToBottom, hasScroll, handleScroll } = useScrollStatus();
  const { changelog, post } = useHeaderData();

  const handleOpenMenu = (label, content) =>
    setOpenMenu((current) => (current?.label === label ? defaultMenuContent : { label, content }));

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
                  'after:pointer-events-none after:fixed after:inset-x-4 after:bottom-[88px] after:top-16 after:z-50 after:bg-[linear-gradient(180deg,#05050B00_86.18%,#05050B_100%)] xs:after:bottom-[142px]'
              )}
              onScroll={handleScroll}
            >
              <ul className="relative flex h-full w-full flex-col border-t border-t-[#1F1F1F] px-8 sm:px-5">
                {MENUS.header.map(({ text, content, to }, index) => (
                  <li className="border-b border-b-[#1F1F1F] last:border-b-0" key={index}>
                    <Link
                      className={clsx(
                        'flex h-[54px] w-full items-center justify-between text-left !text-lg font-medium leading-none sm:h-[45px] sm:!text-base'
                      )}
                      tag={to ? null : 'button'}
                      to={to}
                      theme="white"
                      onClick={to ? null : () => handleOpenMenu(text, content)}
                    >
                      {text}
                      {content && (
                        <ChevronIcon
                          className={clsx(
                            'size-3.5 -rotate-90 transition-transform duration-200',
                            openMenu?.label === text ? 'rotate-0' : ''
                          )}
                        />
                      )}
                    </Link>
                    <InnerMenu openMenu={openMenu} label={text} changelog={changelog} post={post} />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pointer-events-auto bg-black">
              <div className="container flex justify-between gap-x-4 gap-y-3.5 py-7 sm:px-5 sm:py-6 xs:flex-col">
                <Button
                  className="w-full"
                  size="xs"
                  theme="white-outline"
                  {...applyQueryParams(LINKS.dashboardV2SignIn, ['utm_campaign=ws_top_bar'])}
                >
                  Login
                </Button>
                <Button
                  className="w-full"
                  size="xs"
                  theme="white-filled"
                  {...applyQueryParams(LINKS.dashboardV2SignUp, ['utm_campaign=ws_top_bar'])}
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
  // eslint-disable-next-line react/require-default-props
  isOpen: PropTypes.bool,
};

export default MobileMenu;
