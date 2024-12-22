import clsx from 'clsx';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';

const Dropdown = ({ isDropdownOpen, dropdownMenuContent, setDropdownOpen }) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {isDropdownOpen && (
        <m.div
          className={clsx(
            'absolute -bottom-2 w-[680px] translate-y-full rounded-2xl bg-[#0F0F0F] p-2 shadow-[0px_20px_50px_0px_rgba(0,0,0,0.8),0px_4px_12px_0px_rgba(0,0,0,0.3)] outline outline-gray-2 transition-[left,min-width] duration-[0.4s] ease-in-out will-change-transform lg:-left-3.5',
            'before:absolute before:-top-1.5 before:left-1/2 before:z-10 before:h-3.5 before:w-3.5 before:rotate-45 before:rounded-[1px] before:border before:border-gray-2 before:bg-[#0F0F0F]',
            {
              '-left-[272px] before:-translate-x-6 lg:before:-translate-x-72':
                dropdownMenuContent?.label === 'product',
              '-left-40 before:-translate-x-[7px] lg:before:-translate-x-44':
                dropdownMenuContent?.label === 'developers',
              '-left-8 before:-translate-x-[5px] lg:before:-translate-x-16':
                dropdownMenuContent?.label === 'resources',
            }
          )}
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
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <ul
            className={clsx('relative z-20 gap-2', {
              'grid grid-cols-2 grid-rows-[261px_186px_106px]':
                dropdownMenuContent?.label === 'product',
              'flex flex-col':
                dropdownMenuContent?.label === 'developers' ||
                dropdownMenuContent?.label === 'resources',
            })}
          >
            {dropdownMenuContent?.items.map(
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
                            'grid-cols-2 gap-x-[50px]': index === 0,
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
          </ul>
          {(dropdownMenuContent?.label === 'developers' ||
            dropdownMenuContent?.label === 'resources') && (
            <p className="flex items-center justify-between p-6 pb-3.5 pt-[22px] text-base font-light leading-none text-gray-9">
              <span>Any questions? We&apos;re here to help</span>
              <Link className="text-[15px]" theme="primary" withArrow {...LINKS.contactUsCTA}>
                Contact us
              </Link>
            </p>
          )}
          <div className="absolute left-1/2 top-0 z-10 h-4 w-11/12 -translate-x-1/2 bg-[#0F0F0F]" />
        </m.div>
      )}
    </AnimatePresence>
  </LazyMotion>
);

export default Dropdown;
