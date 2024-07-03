import clsx from 'clsx';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import React from 'react';

import Developers from './developers';
import Product from './product';

const Dropdown = ({ isDropdownOpen, dropdownMenuContent, setDropdownOpen }) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {isDropdownOpen && (
        <m.div
          className={clsx(
            'absolute bottom-1.5 translate-y-full p-3.5 bg-[#0F0F0F] outline outline-gray-2 rounded-[20px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.8),0px_4px_12px_0px_rgba(0,0,0,0.3)] transition-[left,min-width] duration-[0.4s] ease-in-out overflow-hidden will-change-transform',
            {
              '-left-1 min-w-[262px]': dropdownMenuContent?.label === 'product',
              'left-[100px] min-w-[394px]': dropdownMenuContent?.label === 'developers',
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
          {dropdownMenuContent?.label === 'product' && (
            <m.div
              initial={{
                opacity: 0,
                minWidth: 0,
              }}
              animate={{
                opacity: 1,
                minWidth: '234px',
              }}
              exit={{
                opacity: 0,
                width: 0,
              }}
              transition={{
                minWidth: { duration: 0.2 },
                opacity: { duration: 0.2, delay: 0.2 },
              }}
              key="product"
            >
              <Product items={dropdownMenuContent?.items} />
            </m.div>
          )}
          {dropdownMenuContent?.label === 'developers' && (
            <m.div
              initial={{
                opacity: 0,
                width: 0,
              }}
              animate={{
                opacity: 1,
                width: 'auto',
              }}
              exit={{
                opacity: 0,
                width: 0,
                transition: {
                  width: { duration: 0.2, delay: 0.2 },
                  opacity: { duration: 0.2 },
                },
              }}
              transition={{
                width: { duration: 0.2 },
                opacity: { duration: 0.2, delay: 0.2 },
              }}
              key="developers"
            >
              <Developers items={dropdownMenuContent?.items} />
            </m.div>
          )}
        </m.div>
      )}
    </AnimatePresence>
  </LazyMotion>
);

export default Dropdown;
