import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

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

const TabletMenu = ({ openMenu, label }) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {openMenu?.label === label && (
        <m.div
          className="sm:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <ul
            className={clsx('relative z-20 mb-2.5 gap-2', {
              'grid grid-cols-[328px_1fr] grid-rows-[261px_186px_106px]':
                openMenu.label === 'product',
              'flex flex-col': openMenu.label === 'developers' || openMenu.label === 'resources',
            })}
          >
            {openMenu?.items.map(({ title, description, icon, image, to, items }, index) => {
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
                  <span className={clsx('flex flex-col items-start gap-y-2', image && 'pr-9')}>
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
                      className={clsx('flex items-center', image ? 'gap-x-[19px]' : 'gap-x-3')}
                      theme="white"
                      to={to}
                    >
                      {itemTitle}
                    </Link>
                  ) : (
                    <>
                      <p className="flex items-center gap-x-3 text-white">{itemTitle}</p>
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
                              <img className="shrink-0" src={icon} alt="" width={20} height={20} />
                              {title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
            {(openMenu.label === 'developers' || openMenu.label === 'resources') && (
              <li className="flex items-center justify-between rounded-lg border border-[#333347]/50 bg-[#12121C]/50 p-6 pt-[23px] text-base font-light leading-none text-gray-9">
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

TabletMenu.propTypes = {
  openMenu: PropTypes.shape({
    items: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      image: PropTypes.string,
      to: PropTypes.string,
      items: PropTypes.array,
    }),
    label: PropTypes.string,
  }),
  label: PropTypes.string,
};

TabletMenu.defaultProps = {
  openMenu: '',
  label: '',
};

export default TabletMenu;
