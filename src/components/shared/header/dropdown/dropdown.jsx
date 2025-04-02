import clsx from 'clsx';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import React from 'react';

import Link from 'components/shared/link';

const InnerContent = ({ title, description, url, image }) => (
  <Link
    className="group -mr-px block rounded-sm pt-0.5 outline-none focus-visible:shadow-[0_0_0_5px_#05050B,0_0_0_6px_white]"
    to={url}
    target="_blank"
    rel="noopener noreferrer"
  >
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

const Dropdown = ({ isOpen, label, content, changelog, post, handleMenuOpen }) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence>
      {isOpen && (
        <m.div
          layoutId="navigation-dropdown"
          className={clsx(
            'absolute -left-5 top-[42px] rounded-[14px] border border-gray-2 bg-[#0F0F0F] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.8),0px_4px_12px_0px_rgba(0,0,0,0.3)] transition-[left,min-width] duration-[0.4s] ease-in-out will-change-transform lg:top-[52px]',
            'before:absolute before:-top-1.5 before:z-10 before:h-3.5 before:w-3.5 before:rotate-45 before:rounded-[1px] before:border before:border-gray-2 before:bg-[#0F0F0F]',
            label === 'Product' &&
              'min-w-[515px] before:left-[59px] lg:-left-[26px] lg:before:left-[60px]',
            label === 'Resources' &&
              'min-w-[515px] before:left-[53px] lg:-left-5 lg:before:left-[54px]',
            label === 'Docs' && 'min-w-[434px] before:left-[50px]'
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
            duration: 0.2,
          }}
          onMouseEnter={() => handleMenuOpen(label)}
          onMouseLeave={() => handleMenuOpen(label)}
        >
          <div className="relative z-10 flex gap-x-3.5 rounded-[14px] bg-[#0F0F0F] px-8 pb-7 pt-6">
            {content?.map(({ title, type, items, content }, index) => (
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
                    label === 'Product' && 'mb-5'
                  )}
                >
                  {title}
                </p>
                {items && items.length > 0 && (
                  <ul className="mt-auto flex flex-col gap-y-3">
                    {items.map(({ text, ...linkProps }, index) => (
                      <li key={index}>
                        <Link
                          className="rounded-sm font-light leading-none outline-none focus-visible:shadow-[0_0_0_7px_#05050B,0_0_0_8px_white]"
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
