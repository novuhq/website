import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import ButtonGithubStars from 'components/shared/button-github-stars';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import ChevronIcon from 'icons/chevron-small.inline.svg';
import Logo from 'images/logo.inline.svg';
import useLandingSimpleTracking from 'utils/use-landing-simple-tracking';

import Dropdown from './dropdown';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownMenuContent, setDropdownMenuContent] = useState(null);
  const click = useLandingSimpleTracking();

  const handleMouseEnter = useCallback(
    (menuItems) => () => {
      if (menuItems) {
        setDropdownOpen(true);
        setDropdownMenuContent(menuItems);
      }
    },
    []
  );

  const handleMouseLeave = useCallback(
    (menuItems) => () => menuItems && setDropdownOpen(false),
    []
  );

  return (
    <header
      className={clsx(
        'safe-paddings absolute left-0 right-0 top-0 z-40 w-full transition-colors duration-200',
        { 'bg-black': isMobileMenuOpen }
      )}
      data-disable-document-scroll={isMobileMenuOpen}
    >
      <div className="container flex items-center justify-between py-3 lg:gap-x-4 md:px-7 md:py-4 sm:px-5">
        <Link {...LINKS.home}>
          <Logo className="h-8" aria-hidden />
          <span className="sr-only">Novu</span>
        </Link>

        <nav className="absolute left-1/2 h-full -translate-x-[48.7%] lg:-translate-x-[69%]">
          <ul className="flex h-full md:hidden">
            {MENUS.header.map(({ to, text, target, menuItems }, index) => (
              <li
                key={index}
                onMouseEnter={handleMouseEnter(menuItems)}
                onMouseLeave={handleMouseLeave(menuItems)}
              >
                <Link
                  className={clsx(
                    'relative flex h-full cursor-pointer items-center gap-x-1.5 px-[18px] pt-1.5 text-[15px] leading-none lg:px-3.5',
                    menuItems &&
                      'after:absolute after:-bottom-5 after:left-0 after:z-10 after:h-8 after:w-full'
                  )}
                  tag={to ? null : 'button'}
                  to={to}
                  theme="white"
                  target={target}
                >
                  {text}

                  {menuItems && (
                    <ChevronIcon
                      className={clsx('h-2 w-2 transition-transform duration-200', {
                        'rotate-180':
                          isDropdownOpen && dropdownMenuContent?.label === menuItems.label,
                      })}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Dropdown
            isDropdownOpen={isDropdownOpen}
            dropdownMenuContent={dropdownMenuContent}
            setDropdownOpen={setDropdownOpen}
          />
        </nav>
        <div className="flex gap-x-5 lg:gap-x-3 md:hidden">
          <ButtonGithubStars className="pl-3" size="small" />
          <Button size="xs" theme="white-outline" {...LINKS.loginTopBar} onClick={click}>
            Login
          </Button>
          <Button size="xs" theme="white-filled" {...LINKS.getStartedTopBar} onClick={click}>
            Get Started
          </Button>
        </div>

        <Burger className="hidden md:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
