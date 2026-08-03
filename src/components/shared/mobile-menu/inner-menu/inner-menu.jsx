/* eslint-disable react/prop-types */
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import React from 'react';

import IntegrationMenuIcon from 'components/shared/header/integration-menu-icon';
import MenuIcon from 'components/shared/header/menu-icon';
import Link from 'components/shared/link';
import ChevronRightIcon from 'icons/chevron-right.inline.svg';

const variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const InnerMenu = ({ openMenu, label }) => (
  <LazyMotion features={domAnimation}>
    <AnimatePresence initial={false}>
      {openMenu?.label === label && (
        <m.div
          className="overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <div className="grid gap-8 pb-6 pt-2.5">
            {openMenu.content.map(({ title, items }, groupIndex) => (
              <div className="min-w-0" key={title || groupIndex}>
                {title && (
                  <p className="mb-4 text-xs font-medium uppercase text-[#707280]">{title}</p>
                )}
                {items && items.length > 0 && (
                  <ul className="flex flex-col gap-y-5">
                    {items.map(
                      ({ text, to, target, menuIcon, description, children, remainingCount }) => (
                        <li key={text}>
                          {children?.length ? (
                            <>
                              <Link
                                className="group flex w-full items-start gap-3 font-normal leading-none text-[#E0E1E5] outline-none focus-visible:text-white"
                                to={to}
                                target={target}
                              >
                                <MenuIcon className="mt-px" icon={menuIcon} />
                                <span>{text}</span>
                              </Link>
                              <ul className="mt-3 flex flex-col gap-y-3">
                                {children.map((child) => (
                                  <li key={child.text}>
                                    <Link
                                      className="flex items-center gap-2.5 text-sm font-normal leading-none text-[#A3A6B2] outline-none transition-colors hover:text-white focus-visible:text-white"
                                      to={child.to}
                                      target={child.target}
                                    >
                                      <MenuIcon icon={child.menuIcon} />
                                      <IntegrationMenuIcon icon={child.integrationIcon} />
                                      {child.text}
                                    </Link>
                                  </li>
                                ))}
                                {Boolean(remainingCount) && (
                                  <li>
                                    <Link
                                      className="flex items-center gap-1 text-sm font-normal leading-none text-[#A3A6B2] outline-none transition-colors hover:text-white focus-visible:text-white"
                                      to={to}
                                      target={target}
                                    >
                                      +{remainingCount} more
                                      <ChevronRightIcon className="size-3.5" aria-hidden />
                                    </Link>
                                  </li>
                                )}
                              </ul>
                            </>
                          ) : (
                            <Link
                              className={
                                openMenu.variant === 'product'
                                  ? 'group flex w-full items-start gap-3 font-normal leading-none text-white outline-none'
                                  : 'group flex w-full items-start gap-3 font-normal leading-none text-[#E0E1E5] outline-none hover:text-white focus-visible:text-white'
                              }
                              to={to}
                              target={target}
                            >
                              <MenuIcon className="mt-px" icon={menuIcon} />
                              <span>
                                <span className="block">{text}</span>
                                {description && (
                                  <span className="mt-1.5 block text-sm leading-4 text-[#A3A6B2]">
                                    {description}
                                  </span>
                                )}
                              </span>
                            </Link>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  </LazyMotion>
);

export default InnerMenu;
