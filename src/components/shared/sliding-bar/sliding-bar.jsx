'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

const SlidingBar = ({ allTabs, activeTabIndex, setActiveTabIndex, className }) => {
  const handleClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div
      className={clsx(
        'relative flex h-9 w-fit items-center rounded-full border border-[#534B5D80] bg-[#100F16] px-1',
        className
      )}
      role="tablist"
    >
      <div className="relative flex gap-x-[10px]">
        {allTabs.map((tab, index) => (
          <button
            key={index}
            className={clsx(
              'relative z-10 my-1 h-7 select-none rounded-full px-[12px] text-center text-sm leading-none transition-all duration-300',
              activeTabIndex === index
                ? 'cursor-default text-white'
                : 'cursor-pointer text-gray-7 hover:text-white'
            )}
            type="button"
            role="tab"
            aria-selected={activeTabIndex === index}
            aria-controls={`tabpanel-${index}`}
            onClick={() => handleClick(index)}
          >
            {tab.name}
            {activeTabIndex === index && (
              <motion.div
                layoutId="sliding-bar"
                className="absolute inset-0 -z-10 h-full rounded-full border border-[#534B5D80] bg-white/10 py-1"
                transition={{ duration: 0.3, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlidingBar;
