import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';

const ANIMATION_DURATION = 0.2;
const MOTION_EASY = [0.25, 0.1, 0.25, 1];

const THEMES = {
  novuDefault: {
    border: 'bg-[linear-gradient(90deg,#576282_0%,#7681A3_28%,#394056_66%,#232A43_100%)]',
    borderActive: 'bg-[#CCD9FF]',
    badge:
      'text-black bg-[linear-gradient(180deg,#FFFFFF80,#FFFFFF00),linear-gradient(180deg,#FFDF66_0%,#FFB433_100%)]',
    badgeInner: 'bg-[linear-gradient(180deg,#FFDF66_0%,#FFB433_100%)]',
  },
  notionDark: {
    border: 'bg-[linear-gradient(90deg,#576282_0%,#7681A3_28%,#394056_66%,#232A43_100%)]',
    borderActive: 'bg-[#CCD9FF]',
    badge:
      'text-black bg-[linear-gradient(180deg,#FFFFFF80,#FFFFFF00),linear-gradient(180deg,#FFDF66_0%,#FFB433_100%)]',
    badgeInner: 'bg-[linear-gradient(180deg,#FFDF66_0%,#FFB433_100%)]',
  },
};

const TabList = ({ theme, tabs, activeTab, setActiveTab }) => {
  const [activeTabIndicator, setActiveTabIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeTabIndex = tabs.findIndex((tab) => tab.label === activeTab);
    if (tabRefs.current[activeTabIndex]) {
      setActiveTabIndicator({
        left: tabRefs.current[activeTabIndex].offsetLeft,
        width: tabRefs.current[activeTabIndex].offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  const currentTheme = THEMES[theme];

  return (
    <div className="relative z-10 scrollbar-hidden overflow-scroll shrink-0 h-[38px]">
      <ul className="flex items-center h-9">
        {tabs.map(({ label, count }, index) => (
          <li className="h-full" key={label}>
            <button
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              className="flex justify-center items-center gap-1 min-w-[100px] h-full px-4 font-light text-sm capitalize text-nowrap transition-[font-weight] duration-200 hover:font-normal focus-visible:font-normal"
              type="button"
              onClick={() => setActiveTab(label)}
            >
              {label}
              {count !== 0 && (
                <span
                  className={clsx(
                    currentTheme.badge,
                    'flex p-px font-normal text-xs leading-none rounded-3xl'
                  )}
                >
                  <span className={clsx(currentTheme.badgeInner, 'py-px px-[5px] rounded-3xl')}>
                    {count}
                  </span>
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
      <div
        className={clsx(currentTheme.border, 'absolute inset-x-0 top-0 h-px pointer-events-none')}
      />
      <div
        className={clsx(
          currentTheme.border,
          'absolute inset-x-0 bottom-0 h-px pointer-events-none'
        )}
      />
      <LazyMotion features={domAnimation}>
        <m.div
          className={clsx(currentTheme.borderActive, 'absolute bottom-0 h-px pointer-events-none')}
          animate={{
            left: activeTabIndicator.left,
            width: activeTabIndicator.width,
          }}
          transition={{
            duration: ANIMATION_DURATION,
            ease: MOTION_EASY,
          }}
        />
      </LazyMotion>
    </div>
  );
};

TabList.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default TabList;
