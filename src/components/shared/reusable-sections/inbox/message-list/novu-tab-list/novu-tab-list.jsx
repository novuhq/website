import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';

const ANIMATION_DURATION = 0.2;
const MOTION_EASY = [0.25, 0.1, 0.25, 1];

const THEMES = {
  novuDark: {
    border: 'bg-[#313339]',
    borderActive: 'bg-[#8760F5]',
    activeTabStyles: 'text-white',
    tabStyles: 'text-[#8E96A5]',
    badge: 'text-white bg-[#FB3748]',
  },
  novuLight: {
    border: 'bg-[#E7E7E7]',
    borderActive: 'bg-[#8760F5]',
    activeTabStyles: 'text-black',
    tabStyles: 'text-[#646464]',
    badge: 'text-white bg-[#FB3748]',
  },
};

const NovuTabList = ({ theme, tabs, activeTab, setActiveTab }) => {
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
    <div className="tab-list scrollbar-hidden relative z-10 mt-0.5 h-12 shrink-0 overflow-scroll font-inter">
      <ul className="flex h-full items-center gap-x-[22px] px-[18px]">
        {tabs.map(({ label, count }, index) => (
          <li className="h-full" key={label}>
            <button
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              className={clsx(
                'flex h-full items-center justify-center gap-[5px] text-nowrap px-1 text-md font-medium capitalize',
                activeTab === label ? currentTheme.activeTabStyles : currentTheme.tabStyles
              )}
              type="button"
              onClick={() => setActiveTab(label)}
            >
              {label}
              {count !== 0 && (
                <span
                  className={clsx(
                    currentTheme.badge,
                    'flex size-[18px] items-center justify-center rounded-full text-xs font-medium leading-none'
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
      <div
        className={clsx(
          currentTheme.border,
          'pointer-events-none absolute inset-x-0 bottom-0 h-px'
        )}
      />
      <LazyMotion features={domAnimation}>
        <m.div
          className={clsx(currentTheme.borderActive, 'pointer-events-none absolute bottom-0 h-px')}
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

NovuTabList.propTypes = {
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

export default NovuTabList;
