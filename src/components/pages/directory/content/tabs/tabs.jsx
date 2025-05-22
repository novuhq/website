import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import SlidingBar from 'components/shared/sliding-bar';

export const Tab = ({ children }) => children;

const Tabs = ({ children }) => {
  const tabs = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="scrollbar-hidden col-span-full mx-[-16px] hidden w-fit rounded-full sm:block sm:w-[calc(100%+32px)] sm:overflow-x-auto sm:overflow-y-hidden sm:rounded-none">
        <div className="flex h-full w-full items-center gap-x-1 rounded-full sm:block sm:whitespace-nowrap">
          {tabs.map((tab, index) => (
            <button
              className={clsx(
                'text-15 relative z-10 mr-1 h-[34px] rounded-full px-4 leading-none tracking-tighter before:invisible before:block before:h-0 before:overflow-hidden before:font-medium before:content-[attr(title)] last:mr-0 sm:inline-block sm:shrink-0 first:sm:ml-4 last:sm:mr-4',
                activeIndex === index
                  ? 'cursor-default border border-[#534B5D80] bg-sliding-bar-tab text-white'
                  : 'cursor-pointer text-gray-7 hover:text-white'
              )}
              key={index}
              title={tab.props.title}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              {tab.props.title}
            </button>
          ))}
        </div>
      </div>
      <SlidingBar
        className="sm:hidden"
        allTabs={tabs.map((tab) => ({ name: tab.props.title }))}
        activeTabIndex={activeIndex}
        setActiveTabIndex={setActiveIndex}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="my-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {tabs[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Tabs;
