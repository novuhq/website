/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import React, { useState } from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import ChevronRightIcon from 'icons/chevron-right.inline.svg';

import IntegrationMenuIcon from '../integration-menu-icon';
import MenuIcon from '../menu-icon';

const PRODUCT_BANNERS = [
  '/images/header/menu/banner-inbox.jpg',
  '/images/header/menu/banner-connect.jpg',
];

const ProductMenu = ({ content }) => {
  const items = content[0]?.items ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <div className="flex w-max gap-3 p-3 font-inter">
      <div className="flex w-[296px] shrink-0 flex-col">
        <ul className="flex flex-col gap-y-0.5">
          {items.map(({ text, description, to, target }, index) => (
            <li key={text}>
              <Link
                className={clsx(
                  'flex w-full flex-col items-start gap-1 rounded-[10px] px-3 py-2.5 transition-colors hover:bg-[#121417] focus-visible:bg-[#121417] focus-visible:outline-none',
                  index === activeIndex && 'bg-[#121417]'
                )}
                to={to}
                target={target}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <span className="block text-base font-normal leading-none tracking-[-0.02em] text-white">
                  {text}
                </span>
                {description && (
                  <span className="block text-sm font-normal leading-[1.375] tracking-[-0.025em] text-[#A3A6B2]">
                    {description}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          className="mb-3 mt-auto inline-flex w-fit items-center gap-1 px-3 text-sm font-medium leading-none text-white transition-colors hover:text-[#A3A6B2] focus-visible:text-[#A3A6B2]"
          {...LINKS.dashboardV2SignUp}
        >
          Start for free
          <ChevronRightIcon className="size-4" aria-hidden />
        </Link>
      </div>

      {activeItem && (
        <Link
          className="relative aspect-[13/11] w-[325px] shrink-0 overflow-hidden rounded-[10px] border border-[#23242A] outline-none focus-visible:ring-2 focus-visible:ring-white"
          to={activeItem.to}
          target={activeItem.target}
          aria-label={`Open ${activeItem.text}`}
        >
          {PRODUCT_BANNERS.map((src, index) => (
            <img
              className={clsx(
                'absolute inset-0 size-full object-cover transition-opacity duration-200 ease-out motion-reduce:transition-none',
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              )}
              src={src}
              width="650"
              height="550"
              alt=""
              loading="eager"
              decoding="async"
              key={src}
            />
          ))}
        </Link>
      )}
    </div>
  );
};

const MenuLinks = ({ items, variant }) => (
  <ul
    className={clsx(
      'font-inter',
      variant === 'solutions' && 'flex flex-col p-3.5',
      variant === 'ai' && 'flex flex-col p-3.5'
    )}
  >
    {items.map(({ text, to, target, menuIcon }) => (
      <li
        className={clsx(
          variant === 'solutions' && 'min-w-[180px]',
          variant === 'ai' && 'min-w-[150px]'
        )}
        key={text}
      >
        <Link
          className="group flex w-full items-center gap-2.5 whitespace-nowrap rounded-lg p-2.5 text-[15px] font-normal leading-none tracking-[-0.02em] text-[#E0E1E5] transition-colors hover:bg-[#121417] hover:text-white focus-visible:bg-[#121417] focus-visible:text-white focus-visible:outline-none"
          to={to}
          target={target}
        >
          <MenuIcon icon={menuIcon} />
          {text}
        </Link>
      </li>
    ))}
  </ul>
);

const NestedMenu = ({ items, variant }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <div className="flex font-inter">
      <ul className="shrink-0 rounded-l-[22px] bg-[#0B0C0E] p-3.5">
        {items.map(({ text, to, target, menuIcon }, index) => (
          <li key={text}>
            <Link
              className={clsx(
                'group flex min-h-9 w-full min-w-[170px] items-center gap-2.5 whitespace-nowrap rounded-[10px] p-2.5 text-[15px] font-normal leading-none tracking-[-0.02em] text-[#A3A6B2] transition-colors hover:bg-[#121417] hover:text-white focus-visible:bg-[#121417] focus-visible:text-white focus-visible:outline-none',
                activeIndex === index && 'bg-[#121417] text-white'
              )}
              to={to}
              target={target}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <MenuIcon icon={menuIcon} />
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {activeItem && (
        <div className="min-w-[256px] shrink-0 border-l border-[#2A2B33] p-3.5">
          {variant === 'channels' && (
            <p className="mx-2.5 mb-3.5 mt-2.5 text-xs font-medium uppercase leading-none tracking-normal text-[#707280]">
              {activeItem.text} Agent Frameworks
            </p>
          )}
          <ul aria-label={`${activeItem.text} links`}>
            {activeItem.children?.map(({ text, to, target, menuIcon, integrationIcon }) => (
              <li key={text}>
                <Link
                  className="group flex min-h-9 w-full items-center gap-2.5 whitespace-nowrap rounded-[10px] p-2.5 text-[15px] font-normal leading-none tracking-[-0.02em] text-[#E0E1E5] transition-colors hover:bg-[#121417] hover:text-white focus-visible:bg-[#121417] focus-visible:text-white focus-visible:outline-none"
                  to={to}
                  target={target}
                >
                  <MenuIcon icon={menuIcon} />
                  <IntegrationMenuIcon icon={integrationIcon} />
                  {text}
                </Link>
              </li>
            ))}
            {Boolean(activeItem.remainingCount) && (
              <li>
                <Link
                  className="flex min-h-9 w-full items-center gap-1 whitespace-nowrap rounded-[10px] p-2.5 text-[15px] font-normal leading-none tracking-[-0.02em] text-[#A3A6B2] transition-colors hover:bg-[#121417] hover:text-white focus-visible:bg-[#121417] focus-visible:text-white focus-visible:outline-none"
                  to={activeItem.to}
                  target={activeItem.target}
                >
                  +{activeItem.remainingCount} more
                  <ChevronRightIcon className="size-4" aria-hidden />
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const ResourcesMenu = ({ content }) => (
  <div className="grid auto-cols-max grid-flow-col gap-x-6 p-3.5 pt-6 font-inter">
    {content.map(({ title, items }) => (
      <div className="w-[210px]" key={title}>
        {title && (
          <span className="mb-3.5 ml-2.5 block text-xs font-medium uppercase leading-none text-[#707280]">
            {title}
          </span>
        )}
        <ul className="flex flex-col">
          {items.map(({ text, to, target, menuIcon }) => (
            <li key={text}>
              <Link
                className="group flex min-h-9 items-center gap-2.5 whitespace-nowrap rounded-lg p-2.5 text-[15px] font-normal leading-none tracking-[-0.02em] text-[#E0E1E5] transition-colors hover:bg-[#121417] hover:text-white focus-visible:bg-[#121417] focus-visible:text-white focus-visible:outline-none"
                to={to}
                target={target}
              >
                <MenuIcon icon={menuIcon} />
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Dropdown = ({ id, isOpen, animateIn, label, variant, content }) => {
  if (!isOpen) return null;

  const items = content.flatMap((group) => group.items ?? []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        id={id}
        aria-label={`${label} submenu`}
        initial={animateIn ? { opacity: 0, y: -4 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={animateIn ? { duration: 0.16, ease: 'easeOut' } : { duration: 0 }}
        className={clsx(
          'absolute top-[calc(100%+20px)] z-50 rounded-[22px] border border-[#2A2B33] bg-black shadow-[0_3px_26px_4px_rgba(0,0,0,0.54)]',
          'after:absolute after:-top-6 after:left-0 after:h-6 after:w-full after:bg-transparent',
          variant === 'product' && '-left-3',
          ['solutions', 'channels', 'ai', 'integrations'].includes(variant) && '-left-2',
          variant === 'resources' && '-left-[420px] lg:-left-[500px]'
        )}
      >
        {variant === 'product' && <ProductMenu content={content} />}
        {(variant === 'solutions' || variant === 'ai') && (
          <MenuLinks items={items} variant={variant} />
        )}
        {(variant === 'channels' || variant === 'integrations') && (
          <NestedMenu items={items} variant={variant} />
        )}
        {variant === 'resources' && <ResourcesMenu content={content} />}
      </m.div>
    </LazyMotion>
  );
};

export default Dropdown;
