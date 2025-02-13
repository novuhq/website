import clsx from 'clsx';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import useScrollStatus from 'hooks/use-scroll-status';
import ChevronIcon from 'icons/chevron-small.inline.svg';

const ANIMATION_DURATION = 0.2;

const variants = {
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

const SubMenu = ({ currentMenu, handleOpenMenu, isBanner }) => {
  const [openSubMenu, setOpenSubMenu] = useState('');
  const { isScrolledToBottom, hasScroll, handleScroll } = useScrollStatus();

  const handleCloseButton = () => {
    setOpenSubMenu('');
    handleOpenMenu(null);
  };

  const handleOpenSubMenu = (label) => {
    setOpenSubMenu((current) => (current === label ? '' : label));
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {currentMenu && (
          <m.div
            className="absolute inset-0 z-50 hidden sm:block"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <Button
              className={clsx(
                'fixed inset-x-0 z-10 flex h-16 w-full items-center !justify-start gap-x-1 !rounded-none border-b border-b-gray-2 !bg-black px-5 text-sm font-normal !normal-case',
                isBanner ? 'top-9' : 'top-0'
              )}
              type="button"
              onClick={handleCloseButton}
            >
              <ChevronIcon className="mr-1 h-3.5 w-3.5 rotate-90" />
              Back
            </Button>
            <ul
              className={clsx(
                'h-full overflow-x-hidden overflow-y-scroll bg-black px-5',
                hasScroll &&
                  !isScrolledToBottom &&
                  'after:pointer-events-none after:fixed after:inset-x-4 after:bottom-[88px] after:top-16 after:z-50 after:bg-[linear-gradient(180deg,#05050B00_92.46%,#05050B_100%)] xs:after:bottom-[142px]'
              )}
              onScroll={handleScroll}
            >
              {currentMenu?.items?.map(
                ({ title, icon, image, description, items, to, target }, index) => (
                  <li className="border-b border-b-gray-2 last:border-b-0" key={index}>
                    <Link
                      className="flex w-full items-center justify-between py-5 text-left text-base leading-none"
                      tag={to ? null : 'button'}
                      to={to}
                      theme="white"
                      target={target}
                      onClick={to ? null : () => handleOpenSubMenu(title)}
                    >
                      <span
                        className={clsx(
                          'flex items-center gap-x-2.5',
                          image && 'w-full flex-col gap-y-3.5'
                        )}
                      >
                        {image && (
                          <img
                            className="h-auto w-full rounded-md border border-[#333347]/20"
                            src={image}
                            alt=""
                            width={294}
                            height={164}
                          />
                        )}
                        {icon && <img src={icon} width={36} height={36} alt="" loading="lazy" />}
                        <span className="flex w-full flex-col items-start gap-y-2">
                          <span className={clsx(image && 'leading-snug')}>{title}</span>
                          {description && (
                            <span
                              className={clsx(
                                'font-light text-gray-8',
                                image ? 'mt-0.5 text-sm leading-normal' : 'text-[13px]'
                              )}
                            >
                              {description}
                            </span>
                          )}
                        </span>
                      </span>
                      {items && (
                        <ChevronIcon
                          className={clsx(
                            'size-3.5 -rotate-90 transition-transform duration-200',
                            openSubMenu === title && 'rotate-0'
                          )}
                        />
                      )}
                    </Link>
                    <AnimatePresence>
                      {openSubMenu === title && (
                        <m.div
                          className="pb-[18px] pl-[22px]"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={variants}
                        >
                          <ul className="-mt-2 flex flex-col gap-y-3">
                            {items.map(({ title, icon, to }, index) => (
                              <li key={index}>
                                <Link
                                  className="flex items-center gap-x-2"
                                  to={to}
                                  target={target}
                                  theme="gray-9"
                                >
                                  <img src={icon} alt="" width={16} height={16} />
                                  {title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              )}
              {(currentMenu?.label === 'developers' || currentMenu?.label === 'resources') && (
                <li className="flex flex-col items-center justify-between gap-y-3 rounded-lg border-t border-t-[#333347]/50 p-6 pt-[23px] text-base font-light leading-none text-gray-9">
                  <span>Any questions? We&apos;re here to help</span>
                  <Link className="text-[15px]" theme="primary" withArrow {...LINKS.contactUsCTA}>
                    Contact us
                  </Link>
                </li>
              )}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

SubMenu.propTypes = {
  currentMenu: PropTypes.shape({
    items: PropTypes.array,
    label: PropTypes.string,
  }),
  isBanner: PropTypes.bool.isRequired,
};

SubMenu.defaultProps = {
  currentMenu: null,
};

export default SubMenu;
