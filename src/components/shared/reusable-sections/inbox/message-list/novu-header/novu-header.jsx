import clsx from 'clsx';
import React from 'react';

import MoreIcon from './images/more.inline.svg';
import SettingsIcon from './images/settings.inline.svg';

const THEMES = {
  novuDark: {
    titleColor: 'text-[#FFFFFF]',
    mainIconsColor: 'text-[#9498B1]',
    menuStyles: 'bg-[#292B32] shadow-[0px_4px_12px_0px_rgba(19,22,29,0.4)]',
    menuItemStyles: 'text-[#FFFFFF] hover:bg-[#40434E]',
  },
  novuLight: {
    titleColor: 'text-[#22242A]',
    mainIconsColor: 'text-[#999999]',
    menuStyles: 'bg-[#FFFFFF] shadow-[0px_4px_20px_0px_rgba(19,22,29,0.1)] border border-[#E3E0E0]',
    menuItemStyles: 'text-[#373530] hover:bg-[#F7F7F5]',
  },
};

const NovuHeader = ({ theme, filters, actions, handleAction, handleFilter }) => {
  const currentTheme = THEMES[theme];

  return (
    <div className="relative z-20 mt-3.5 flex shrink-0 items-center justify-between px-[18px]">
      <div className="flex items-center gap-x-3">
        <span
          className={clsx(currentTheme.titleColor, 'font-inter text-xl font-medium leading-none')}
        >
          Inbox
        </span>
      </div>
      <div className="flex items-center gap-x-3.5">
        <button className="group relative flex items-center" type="button">
          <MoreIcon className={clsx('size-[26px]', currentTheme.mainIconsColor)} />
          <ul
            className={clsx(
              'invisible absolute right-0 top-[calc(100%+7px)] w-[219px] rounded-[10px] px-1 py-0.5 opacity-0 transition-[opacity,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100',
              currentTheme.menuStyles
            )}
          >
            {actions.map(({ label, Icon, action }, index) => (
              <li key={index}>
                <div
                  className={clsx(
                    'flex h-[30px] w-full items-center gap-x-2.5 rounded-md pl-4 text-left font-inter text-sm font-medium leading-none',
                    currentTheme.menuItemStyles
                  )}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleAction(action)()}
                  onClick={handleAction(action)}
                >
                  <Icon className="size-[18px]" aria-hidden />
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </button>
        <button className="group relative flex items-center" type="button">
          <SettingsIcon className={clsx('size-7', currentTheme.mainIconsColor)} />
          <ul
            className={clsx(
              'invisible absolute right-0 top-[calc(100%+7px)] w-[219px] gap-y-0.5 rounded-[10px] px-1 py-0.5 opacity-0 transition-[opacity,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100',
              currentTheme.menuStyles
            )}
          >
            {filters.map(({ label, Icon }, index) => (
              <li key={index}>
                <div
                  className={clsx(
                    'flex h-[30px] w-full items-center gap-x-2.5 rounded-md pl-4 text-left font-inter text-sm font-medium leading-none',
                    currentTheme.menuItemStyles
                  )}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => e.key === 'Enter' && handleFilter(index)()}
                  onClick={handleFilter(index)}
                >
                  <Icon className="size-[18px]" aria-hidden />
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </button>
      </div>
    </div>
  );
};

export default NovuHeader;
