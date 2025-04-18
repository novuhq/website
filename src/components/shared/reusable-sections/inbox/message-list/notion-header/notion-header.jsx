import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import NotionMoreIcon from './images/notion-more.inline.svg';
import NotionSettingsIcon from './images/notion-settings.inline.svg';

const THEMES = {
  notionDark: {
    titleColor: 'text-[#FFFFFF]',
    mainIconsColor: 'text-[#6F727B]',
    menuStyles: 'bg-[#292B32] shadow-[0px_4px_12px_0px_rgba(19,22,29,0.4)]',
    menuItemStyles: 'text-[#FFFFFF] hover:bg-[#40434E]',
  },
  notionLight: {
    titleColor: 'text-[#373530]',
    mainIconsColor: 'text-[#A5A4A1]',
    menuStyles: 'bg-[#FFFFFF] shadow-[0px_4px_20px_0px_rgba(19,22,29,0.1)] border border-[#E7E7E7]',
    menuItemStyles: 'text-[#373530] hover:bg-[#F0F0F0]',
  },
};

const NotionHeader = ({ theme, filters, actions, handleAction, handleFilter }) => {
  const currentTheme = THEMES[theme];

  return (
    <div className="relative z-20 mb-1 mt-5 flex shrink-0 items-start justify-between px-[26px]">
      <span
        className={clsx(
          currentTheme.titleColor,
          'inline-block font-inter text-xl font-semibold leading-none'
        )}
      >
        Inbox
      </span>
      <div className="flex items-center gap-x-6">
        <button className="group relative flex h-[30px] items-center pb-2.5" type="button">
          <NotionMoreIcon
            className={clsx('h-1.5 w-[18px]', currentTheme.mainIconsColor)}
            aria-hidden
          />
          <ul
            className={clsx(
              'invisible absolute right-0 top-full w-[219px] gap-y-0.5 rounded-[10px] px-1 py-0.5 opacity-0 transition-[opacity,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100',
              currentTheme.menuStyles
            )}
          >
            {actions.map(({ label, Icon, action }, index) => (
              <li key={index}>
                <div
                  className={clsx(
                    'flex h-[30px] w-full items-center gap-x-2.5 rounded-md pl-4 text-left',
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
        <button className="group relative flex h-[30px] items-center pb-2.5" type="button">
          <NotionSettingsIcon className={clsx('size-4', currentTheme.mainIconsColor)} aria-hidden />
          <ul
            className={clsx(
              'invisible absolute right-0 top-full w-[219px] gap-y-0.5 rounded-[10px] px-1 py-0.5 opacity-0 transition-[opacity,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100',
              currentTheme.menuStyles
            )}
          >
            {filters.map(({ label, Icon }, index) => (
              <li key={index}>
                <div
                  className={clsx(
                    'flex h-[30px] w-full items-center gap-x-2.5 rounded-md pl-4 text-left',
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

NotionHeader.propTypes = {
  theme: PropTypes.oneOf(['notionDark', 'notionLight']).isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      Icon: PropTypes.elementType.isRequired,
    })
  ).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      Icon: PropTypes.elementType.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
  handleAction: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default NotionHeader;
