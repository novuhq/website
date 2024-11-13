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
    <div className="relative z-20 flex items-start justify-between mt-5 mb-1 px-[26px] shrink-0">
      <span
        className={clsx(
          currentTheme.titleColor,
          'inline-block leading-none text-xl font-inter font-semibold'
        )}
      >
        Inbox
      </span>
      <div className="flex items-center gap-x-6">
        <button className="group relative pb-2.5 h-[30px] flex items-center" type="button">
          <NotionMoreIcon
            className={clsx('w-[18px] h-1.5', currentTheme.mainIconsColor)}
            aria-hidden
          />
          <ul
            className={clsx(
              'absolute top-full right-0 w-[219px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-300 rounded-[10px] px-1 py-0.5 gap-y-0.5',
              currentTheme.menuStyles
            )}
          >
            {actions.map(({ label, Icon, action }, index) => (
              <li key={index}>
                <button
                  className={clsx(
                    'text-left flex items-center h-[30px] w-full rounded-md pl-4 gap-x-2.5',
                    currentTheme.menuItemStyles
                  )}
                  type="button"
                  onClick={handleAction(action)}
                >
                  <Icon className="size-[18px]" aria-hidden />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </button>
        <button className="group relative pb-2.5 h-[30px] flex items-center" type="button">
          <NotionSettingsIcon className={clsx('size-4', currentTheme.mainIconsColor)} aria-hidden />
          <ul
            className={clsx(
              'absolute top-full right-0 w-[219px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-300 rounded-[10px] px-1 py-0.5 gap-y-0.5',
              currentTheme.menuStyles
            )}
          >
            {filters.map(({ label, Icon }, index) => (
              <li key={index}>
                <button
                  className={clsx(
                    'text-left flex items-center h-[30px] w-full rounded-md pl-4 gap-x-2.5',
                    currentTheme.menuItemStyles
                  )}
                  type="button"
                  onClick={handleFilter(index)}
                >
                  <Icon className="size-[18px]" aria-hidden />
                  {label}
                </button>
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
