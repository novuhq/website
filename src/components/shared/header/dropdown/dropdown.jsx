import clsx from 'clsx';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import React from 'react';

import Link from 'components/shared/link';

const InnerContent = ({ title, description, url, image }) => (
  <Link className="group -mr-px block pt-0.5" to={url} target="_blank" rel="noopener noreferrer">
    <div className="aspect-[220/124] overflow-hidden rounded-md border border-[#333347]/50 bg-[linear-gradient(294deg,rgba(0,0,0,0)_45.36%,rgba(0,0,0,0.7)_126.53%),linear-gradient(120deg,rgba(0,0,0,0)_54.73%,rgba(0,0,0,0.8)_112.66%),linear-gradient(73deg,rgba(0,0,0,0)_17.56%,rgba(27,64,79,0.2)_79.95%),linear-gradient(252deg,rgba(29,23,50,0)_-8.69%,rgba(46,37,83,0.2)_100%),linear-gradient(180deg,#111427_0%,#0F122D_43.27%,#0F1223_100%)]">
      <img src={image} alt="" loading="eager" fetchPriority="high" decoding="sync" />
    </div>
    <p className="mt-3 line-clamp-2 font-medium leading-tight text-white group-hover:text-primary-1 group-focus-visible:text-primary-1">
      {title}
    </p>
    <p className="mt-1.5 line-clamp-3 text-sm font-light leading-tight text-[#909090]">
      {description}
    </p>
  </Link>
);

const Dropdown = ({
  isDropdownOpen,
  dropdownMenuContent,
  setDropdownOpen,
  changelog,
  post,
  onKeyDown,
}) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {isDropdownOpen && (
        <m.div
          className={clsx(
            'absolute left-1/2 top-16 rounded-[14px] border border-gray-2 bg-[#0F0F0F] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.8),0px_4px_12px_0px_rgba(0,0,0,0.3)] transition-[transform,min-width] duration-[0.4s] ease-in-out will-change-transform lg:top-[72px]',
            'before:absolute before:-top-1.5 before:left-[50px] before:z-10 before:h-3.5 before:w-3.5 before:rotate-45 before:rounded-[1px] before:border before:border-gray-2 before:bg-[#0F0F0F] lg:before:left-[60px]',
            dropdownMenuContent?.label === 'Product' &&
              'min-w-[515px] -translate-x-[41.2%] lg:-translate-x-[42.3%]',
            dropdownMenuContent?.label === 'Resources' && 'min-w-[515px] -translate-x-[20.5%]',
            dropdownMenuContent?.label === 'Docs' && 'min-w-[434px] translate-x-[3.7%]'
          )}
          role="menu"
          tabIndex={-1}
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
          onKeyDown={onKeyDown}
        >
          <div className="relative z-10 flex gap-x-3.5 rounded-[14px] bg-[#0F0F0F] px-8 pb-7 pt-6">
            {dropdownMenuContent?.content?.map(({ title, type, items, content }, index) => (
              <div
                className={clsx(
                  'min-w-0',
                  index === 0 && '-ml-px grow',
                  index === 1 && 'w-[220px]'
                )}
                key={index}
              >
                <p
                  className={clsx(
                    'mb-4 text-sm leading-none -tracking-[0.01em] text-[#909090]',
                    dropdownMenuContent?.label === 'Product' && 'mb-5'
                  )}
                >
                  {title}
                </p>
                {items && items.length > 0 && (
                  <ul className="mt-auto flex flex-col gap-y-3">
                    {items.map(({ text, ...linkProps }, index) => (
                      <li key={index}>
                        <Link
                          className="font-light leading-none"
                          size="base"
                          theme="white"
                          {...linkProps}
                          tabIndex={0}
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {type === 'changelog' && <InnerContent {...changelog} />}
                {type === 'post' && <InnerContent {...post} />}
                {type === 'link' && <InnerContent {...content} />}
              </div>
            ))}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  </LazyMotion>
);

export default Dropdown;
