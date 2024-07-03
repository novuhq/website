import clsx from 'clsx';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import React, { useState, useCallback } from 'react';

import Link from 'components/shared/link';

const Product = ({ items }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const [dropdownMenuContent, setDropdownMenuContent] = useState(null);

  const handleMouseEnter = useCallback(
    (menuItems, index) => () => {
      if (menuItems) {
        setDropdownOpen(true);
        setDropdownMenuContent(menuItems);
        setActiveElement(index);
      }
    },
    []
  );

  const handleMouseLeave = useCallback(
    (menuItems) => () => {
      if (menuItems) {
        setDropdownOpen(false);
      }
    },
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <div
          className={clsx('overflow-hidden transition-all duration-300', {
            'w-[502px]': isDropdownOpen,
            'w-[234px]': !isDropdownOpen,
          })}
          onMouseLeave={() => setActiveElement(null)}
        >
          <div className="grid grid-rows-1 grid-cols-[240px_262px] gap-x-0">
            <ul className="relative flex flex-col min-h-[280px] w-[240px]">
              {items.map(({ title, description, icon, items }, index) => (
                <li
                  className="pr-2.5"
                  key={index}
                  onMouseEnter={handleMouseEnter(items, index)}
                  onMouseLeave={handleMouseLeave(items)}
                >
                  <button
                    className={clsx(
                      'relative w-full flex items-center gap-x-3 p-2.5 rounded-lg transition-colors duration-300 after:absolute after:w-[7px] after:h-[7px] after:-right-1 after:top-0 after:bottom-0 after:my-auto after:bg-gray-2 after:rotate-45 after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none',
                      {
                        'bg-gray-2 after:opacity-100': activeElement === index,
                      }
                    )}
                    type="button"
                  >
                    <img src={icon} alt="" width={36} height={36} />
                    <span className="flex flex-col items-start gap-y-1">
                      <span className="text-[15px] leading-none text-gray-10 whitespace-nowrap">
                        {title}
                      </span>
                      <span className="text-[13px] leading-none text-gray-8 whitespace-nowrap">
                        {description}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            {isDropdownOpen && (
              <m.ul
                className="w-[262px] flex flex-col items-start gap-y-3 p-4 pt-[13px] bg-gray-2 border border-gray-3 rounded-lg shadow-[0px_3px_8px_0px_rgba(0,0,0,0.1)] will-change-transform"
                initial={{
                  opacity: 0,
                  minHeight: 0,
                }}
                animate={{
                  opacity: 1,
                  minHeight: 'auto',
                }}
                exit={{
                  opacity: 0,
                  minHeight: 0,
                  transition: {
                    minHeight: { duration: 0.2, delay: 0.2 },
                    opacity: { duration: 0.2 },
                  },
                }}
                transition={{
                  minHeight: { duration: 0.2 },
                  opacity: { duration: 0.2, delay: 0.2 },
                }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => {
                  setDropdownOpen(false);
                  setActiveElement(null);
                }}
              >
                {dropdownMenuContent.map(({ title, to }, index) => (
                  <li className="text-sm leading-snug" key={index}>
                    <Link className="text-gray-10 font-light hover:text-primary-1" to={to}>
                      {title}
                    </Link>
                  </li>
                ))}
              </m.ul>
            )}
          </div>
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
};

export default Product;
