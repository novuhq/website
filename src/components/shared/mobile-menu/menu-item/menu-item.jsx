import clsx from 'clsx';
import React, { useState } from 'react';

import Link from 'components/shared/link';
import ChevronIcon from 'icons/chevron-small.inline.svg';

import SubMenu from '../sub-menu';

const MenuItem = ({ text, to, target, menuItems, className, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className="px-7 sm:px-4">
      <Link
        className={clsx(
          'flex justify-between items-center w-full text-xl text-left leading-none sm:text-[15px]',
          className
        )}
        tag={to ? null : 'button'}
        to={to}
        theme="white"
        target={target}
        onClick={to ? null : handleMenuClick}
      >
        <span className="flex items-center gap-x-2.5">
          {icon && <img src={icon} width={24} height={24} alt="" loading="lazy" />}
          {text}
        </span>
        {menuItems && <ChevronIcon className="w-4 h-4 -rotate-90" />}
      </Link>
      {menuItems && (
        <SubMenu isOpen={isOpen} setIsOpen={setIsOpen}>
          {menuItems.map(({ title, icon, to, items }, index) =>
            title ? (
              <MenuItem
                className="h-[60px] border-b border-b-gray-2"
                key={index}
                text={title}
                to={to}
                icon={icon}
                menuItems={items}
              />
            ) : (
              items &&
              items.map(
                ({ title, icon, to, desktopOnly }, index) =>
                  !desktopOnly && (
                    <MenuItem
                      className={clsx('py-3', { 'mt-3': index === 0 })}
                      key={index}
                      text={title}
                      to={to}
                      icon={icon}
                    />
                  )
              )
            )
          )}
        </SubMenu>
      )}
    </li>
  );
};

export default MenuItem;
