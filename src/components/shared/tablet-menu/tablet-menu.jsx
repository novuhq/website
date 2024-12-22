import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import ChevronIcon from 'icons/chevron-small.inline.svg';

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

const variantsDropdownMenu = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen }) => {
  const [openMenu, setOpenMenu] = useState('');
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  const handleOpenMenu = (label) => {
    setOpenMenu((current) => (current === label ? '' : label));
  };

  const handleScroll = (e) => {
    const isScrollable = e.target.scrollHeight > e.target.clientHeight;
    setHasScroll(isScrollable);

    const bottom = Math.abs(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) < 1;
    setIsScrolledToBottom(bottom);
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen && (
          <m.div
            className="safe-paddings pointer-events-none fixed inset-0 hidden w-full flex-col justify-between overflow-x-hidden overflow-y-scroll pt-16 md:flex sm:hidden sm:pt-14"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
          >
            <nav
              className={clsx(
                'pointer-events-auto relative flex h-full w-full overflow-x-hidden overflow-y-scroll bg-black',
                !isScrolledToBottom &&
                  hasScroll &&
                  'after:pointer-events-none after:fixed after:inset-x-0 after:bottom-24 after:top-16 after:bg-[linear-gradient(180deg,#05050B00_92.46%,#05050B_100%)]'
              )}
              onScroll={handleScroll}
            >
              <m.div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
                animate={{
                  background:
                    !hasScroll || isScrolledToBottom
                      ? 'linear-gradient(180deg, rgba(5,5,11,0) 0%, rgba(5,5,11,0) 100%)'
                      : 'linear-gradient(180deg, rgba(5,5,11,0) 92.46%, rgba(5,5,11,1) 100%)',
                }}
                transition={{ duration: 0.2 }}
              />
              <ul className="relative flex h-full w-full flex-col border-t border-t-[#1F1F1F] bg-black px-8">
                {MENUS.header.map(({ to, text, target, menuItems }, index) => (
                  <li className="border-b border-b-[#1F1F1F]" key={index}>
                    <Link
                      className={clsx(
                        'flex h-[53px] w-full items-center justify-between text-left text-lg leading-none'
                      )}
                      tag={to ? null : 'button'}
                      to={to}
                      theme="white"
                      target={target}
                      onClick={to ? null : () => handleOpenMenu(menuItems?.label)}
                    >
                      {text}
                      {menuItems && (
                        <ChevronIcon
                          className={clsx(
                            'h-3.5 w-3.5 -rotate-90 transition-transform duration-200',
                            openMenu === menuItems?.label ? 'rotate-0' : ''
                          )}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {openMenu === menuItems?.label && (
                        <m.div
                          className=""
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={variantsDropdownMenu}
                        >
                          <ul
                            className={clsx('relative z-20 mb-2.5 gap-2', {
                              'grid grid-cols-[328px_1fr] grid-rows-[261px_186px_106px]':
                                openMenu === 'product',
                              'flex flex-col':
                                openMenu === 'developers' || openMenu === 'resources',
                            })}
                          >
                            {menuItems?.items.map(
                              ({ title, description, icon, image, to, items }, index) => {
                                const itemTitle = (
                                  <>
                                    {image ? (
                                      <img
                                        className="rounded-md border border-[#333347]/20"
                                        src={image}
                                        alt=""
                                        width={294}
                                        height={164}
                                      />
                                    ) : (
                                      <img src={icon} alt="" width={44} height={44} />
                                    )}
                                    <span
                                      className={clsx(
                                        'flex flex-col items-start gap-y-2',
                                        image && 'pr-9'
                                      )}
                                    >
                                      <span
                                        className={clsx(
                                          'text-lg text-current',
                                          image ? 'leading-snug' : 'whitespace-nowrap leading-none'
                                        )}
                                      >
                                        {title}
                                      </span>
                                      <span
                                        className={clsx(
                                          'text-gray-8',
                                          image
                                            ? 'line-clamp-3 text-sm leading-normal'
                                            : 'whitespace-nowrap text-base leading-none'
                                        )}
                                      >
                                        {description}
                                      </span>
                                    </span>
                                  </>
                                );

                                return (
                                  <li
                                    className={clsx(
                                      'rounded-lg border border-[#333347]/50 bg-[#12121C]/50 p-6 pt-[22px]',
                                      {
                                        'col-span-full': index === 0,
                                        'row-span-2 row-start-2': index === 1,
                                        '!py-[30px]': index === 3,
                                      }
                                    )}
                                    key={index}
                                  >
                                    {to ? (
                                      <Link
                                        className={clsx(
                                          'flex items-center',
                                          image ? 'gap-x-[19px]' : 'gap-x-3'
                                        )}
                                        theme="white"
                                        to={to}
                                      >
                                        {itemTitle}
                                      </Link>
                                    ) : (
                                      <>
                                        <p className="flex items-center gap-x-3 text-white">
                                          {itemTitle}
                                        </p>
                                        <ul
                                          className={clsx('mt-8 grid gap-y-[18px]', {
                                            'grid-cols-2 gap-x-2': index === 0,
                                          })}
                                        >
                                          {items.map(({ title, icon, ...linkProps }, index) => (
                                            <li key={index}>
                                              <Link
                                                className="flex items-center gap-x-3 whitespace-nowrap font-light leading-none outline-none"
                                                size="base"
                                                theme="gray-9"
                                                {...linkProps}
                                              >
                                                <img
                                                  className="shrink-0"
                                                  src={icon}
                                                  alt=""
                                                  width={20}
                                                  height={20}
                                                />
                                                {title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </>
                                    )}
                                  </li>
                                );
                              }
                            )}
                            {(openMenu === 'developers' || openMenu === 'resources') && (
                              <li className="flex items-center justify-between rounded-lg border border-[#333347]/50 bg-[#12121C]/50 p-6 pt-[23px] text-base font-light leading-none text-gray-9">
                                <span>Any questions? We&apos;re here to help</span>
                                <Link
                                  className="text-[15px]"
                                  theme="primary"
                                  withArrow
                                  {...LINKS.contactUsCTA}
                                >
                                  Contact us
                                </Link>
                              </li>
                            )}
                          </ul>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pointer-events-auto bg-black">
              <div className="container">
                <div className="flex w-full justify-between space-x-4 py-7">
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
