import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import CheckSelectedIcon from './images/check-select.inline.svg';
import DownArrowIcon from './images/down-arrow.inline.svg';
import LinearMoreIcon from './images/linear-more.inline.svg';
import LinearSettingsIcon from './images/linear-settings.inline.svg';
import OrderingIcon from './images/opposite-arrows.inline.svg';

const THEMES = {
  linearDark: {
    titleColor: 'text-white',
    moreIconsColor: 'text-[#A5A4A1]',
    settingsIconColor: 'text-[#A5A4A1]',
    mainIconsUnderlayStyles: 'bg-[#21222B]',
    menuStyles:
      'bg-[#23242E] shadow-[0px 4px 8px 0px rgba(19, 22, 29, 0.60)] border border-[#373847]',
    menuItemStyles: 'text-[#E5E6EF] hover:bg-[#343543] hover:text-white',
    menuSeparatorStyles: 'bg-[#373847]',
    orderingMenuStyles:
      'bg-[#23242E] text-[#9A9AA1] shadow-[0px_4px_8px_0px_rgba(19,22,29,0.60)] border border-[#373847]',
    orderingMenuIconStyles: 'text-[#9A9AA1]',
    orderingDropdownStyles:
      'border border-[#373847] bg-[#303140] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] text-white',
    orderingDropdownBtnStyles: 'border border-[#373847] bg-[#303140] text-[#E5E6EF]',
    orderingDropdownIconStyles: 'text-white',
    toggleOnBgColor: 'bg-[#4B73EC]',
    toggleOffBgColor: 'bg-[#73737A]',
    menuIconStyles: 'text-[#9F9FA7] group-hover/item:text-white',
    headerSeparator: 'bg-[#2C2E3A]',
  },
  linearLight: {
    titleColor: 'text-[#1B1B1B]',
    moreIconsColor: 'text-[#1B1B1B]',
    settingsIconColor: 'text-[#5D5D5E]',
    mainIconsUnderlayStyles: 'bg-[#F1F1F1] hover:text-white',
    menuStyles:
      'bg-white shadow-[0px_4px_10px_0px_rgba(53,53,53,0.15),_0px_1px_2px_0px_rgba(53,53,53,0.20)] border border-[#DCDCDC]',
    menuItemStyles: 'text-[#303031] hover:bg-[#F3F3F3] hover:text-[#1B1B1B]',
    menuSeparatorStyles: 'bg-[#E4E4E4]',
    menuIconStyles: 'text-[#5E5E60] group-hover/item:text-[#1B1B1B]',

    orderingMenuStyles:
      'bg-[#Ffffff] text-[#5D5D5E] shadow-[0px_4px_10px_0px_rgba(53,53,53,0.15),_0px_1px_2px_0px_rgba(53,53,53,0.20)] border border-[#E4E4E4]',
    orderingMenuIconStyles: 'text-[#5D5D5E]',
    orderingDropdownStyles:
      'bg-[#ffffff] border border-[#E4E4E4] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.10)] text-[#303031]',
    orderingDropdownBtnStyles: 'border bg-white border-[#D8D8D8] text-[#1B1B1B]',
    orderingDropdownIconStyles: 'text-[#5E5E60]',
    toggleOnBgColor: 'bg-[#4B73EC]',
    toggleOffBgColor: 'bg-[#CDCDCD]',
    headerSeparator: 'bg-[#DCDCDC]',
  },
};

const LinearHeader = ({
  theme,
  ordering,
  actions,
  handleAction,
  orderingPosition,
  handleOrdering,
  toggleShowUnreadFirst,
  showUnreadFirst,
  toggleShowRead,
  showRead,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const currentTheme = THEMES[theme];

  const handleSortingClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOrderingClick = (value) => {
    handleOrdering(value);
    setIsExpanded(false);
  };

  return (
    <div className="relative z-20 mb-2.5 flex shrink-0 items-center justify-between py-[18px] pl-[26px] pr-6">
      <div className="flex items-center gap-x-2.5">
        <span
          className={clsx(
            currentTheme.titleColor,
            'inline-block font-inter text-xl font-medium leading-none'
          )}
        >
          Inbox
        </span>
        <span className="group relative flex items-center" role="button" tabIndex="0">
          <div
            className={clsx(
              'invisible absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-[6px] opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100',
              currentTheme.mainIconsUnderlayStyles
            )}
          />
          <LinearMoreIcon
            className={clsx('z-10 size-5', currentTheme.moreIconsColor)}
            aria-hidden
          />
          <ul
            className={clsx(
              'invisible absolute left-0 top-[calc(100%+10px)] z-10 min-w-[280px] rounded-[10px] p-1.5 pt-[5px] font-inter opacity-0 transition-[opacity,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100',
              currentTheme.menuStyles
            )}
          >
            {actions.map(({ label, Icon, action }, index) => (
              <li key={index}>
                {index === 1 && (
                  <div
                    className={clsx(
                      '-mx-1.5 my-[5px] h-px w-[calc(100%+12px)]',
                      currentTheme.menuSeparatorStyles
                    )}
                    aria-hidden
                  />
                )}
                <button
                  className={clsx(
                    'group/item flex w-full items-center gap-x-2 rounded-md px-[13px] py-2.5 text-left leading-none',
                    currentTheme.menuItemStyles
                  )}
                  type="button"
                  onClick={handleAction(action)}
                >
                  <Icon className={clsx('size-5', currentTheme.menuIconStyles)} aria-hidden />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </span>
      </div>
      <span className="group relative flex items-center" role="button" tabIndex="0">
        <div
          className={clsx(
            'invisible absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-[6px] opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100',
            currentTheme.mainIconsUnderlayStyles
          )}
        />
        <LinearSettingsIcon
          className={clsx('z-10 size-5', currentTheme.settingsIconColor)}
          aria-hidden
        />

        <div
          className={clsx(
            'invisible absolute right-0 top-[calc(100%+12px)] min-w-[306px] rounded-[10px] px-[19px] pb-[17px] pt-3 font-inter opacity-0 transition-[opacity,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100',
            currentTheme.orderingMenuStyles
          )}
        >
          <div className="relative flex items-center justify-between gap-x-2">
            <div className="flex items-center gap-x-3">
              <OrderingIcon className="size-4 shrink-0" aria-hidden />
              <span>Ordering</span>
            </div>
            <button
              className={clsx(
                'flex items-center gap-x-2.5 rounded-[6px] px-2.5 py-1.5 font-inter text-[16px] leading-none',
                currentTheme.orderingDropdownBtnStyles
              )}
              type="button"
              onClick={handleSortingClick}
            >
              <span className="">{orderingPosition}</span>
              <DownArrowIcon className="size-2" aria-hidden />
            </button>
            {isExpanded && (
              <div
                className={clsx(
                  'absolute right-0 top-0 z-10 flex flex-col gap-y-2 rounded-[6px] border-[0.5px] p-2.5',
                  currentTheme.orderingDropdownStyles
                )}
              >
                <button
                  className="relative pl-6"
                  type="button"
                  onClick={() => handleOrderingClick(ordering[0].label)}
                >
                  {orderingPosition === ordering[0].label && (
                    <CheckSelectedIcon
                      className={clsx(
                        'absolute left-0 top-1/2 size-3.5 -translate-y-1/2',
                        currentTheme.orderingDropdownIconStyles
                      )}
                      aria-hidden
                    />
                  )}
                  {ordering[0].label}
                </button>
                <button
                  className="relative pl-6"
                  type="button"
                  onClick={() => handleOrderingClick(ordering[1].label)}
                >
                  {orderingPosition === ordering[1].label && (
                    <CheckSelectedIcon
                      className={clsx(
                        'absolute left-0 top-1/2 size-3.5 -translate-y-1/2',
                        currentTheme.orderingDropdownIconStyles
                      )}
                      aria-hidden
                    />
                  )}
                  {ordering[1].label}
                </button>
              </div>
            )}
          </div>
          <span
            className={clsx(
              'absolute inset-x-0 top-[54px] block h-px',
              currentTheme.menuSeparatorStyles
            )}
            aria-hidden
          />
          <div className="mt-[31px] flex flex-col justify-between gap-y-6">
            <div className="flex items-center justify-between text-[16px] leading-none">
              <p>Show unread first</p>
              <button
                className={clsx(
                  'relative h-5 w-8 rounded-full px-0.5 py-[3px] transition-colors duration-300 ease-in-out',
                  showUnreadFirst ? currentTheme.toggleOnBgColor : currentTheme.toggleOffBgColor
                )}
                type="button"
                aria-label={`Switcher to show unread messages first. Now ${
                  showUnreadFirst ? 'on' : 'off'
                }`}
                onClick={toggleShowUnreadFirst}
              >
                <span
                  className={clsx(
                    'absolute top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-white transition-transform duration-300 ease-in-out',
                    showUnreadFirst ? 'translate-x-0' : '-translate-x-full'
                  )}
                />
              </button>
            </div>

            <div className="flex items-center justify-between text-[16px] leading-none">
              <p>Show read</p>
              <button
                className={clsx(
                  'relative h-[20px] w-[32px] rounded-full px-[2px] py-[3px] transition-colors duration-300 ease-in-out',
                  showRead ? currentTheme.toggleOnBgColor : currentTheme.toggleOffBgColor
                )}
                type="button"
                aria-label={`Switch to show read messages. Now ${showRead ? 'on' : 'off'}`}
                onClick={toggleShowRead}
              >
                <span
                  className={clsx(
                    'absolute top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-white transition-transform duration-300 ease-in-out',
                    showRead ? 'translate-x-0' : '-translate-x-full'
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </span>
      <div
        className={clsx(
          currentTheme.headerSeparator,
          'pointer-events-none absolute inset-x-0 top-full -z-10 h-px'
        )}
        aria-hidden
      />
    </div>
  );
};

LinearHeader.propTypes = {
  theme: PropTypes.oneOf(['linearDark', 'linearLight']).isRequired,
  ordering: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
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
  orderingPosition: PropTypes.string.isRequired,
  handleOrdering: PropTypes.func.isRequired,
  toggleShowUnreadFirst: PropTypes.func.isRequired,
  toggleShowRead: PropTypes.func.isRequired,
  showUnreadFirst: PropTypes.bool.isRequired,
  showRead: PropTypes.bool.isRequired,
};

export default LinearHeader;
