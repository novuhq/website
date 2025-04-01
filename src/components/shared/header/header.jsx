import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import ButtonGithubStars from 'components/shared/button-github-stars';
import Link from 'components/shared/link';
import LINKS, { applyQueryParams } from 'constants/links';
import MENUS from 'constants/menus';
import useHeaderData from 'hooks/use-header-data';
import useHeaderNavigation from 'hooks/use-header-navigation';
import useScrollPosition from 'hooks/use-scroll-position';
import ChevronIcon from 'icons/chevron-small.inline.svg';
import Logo from 'images/logo.inline.svg';
import useLandingSimpleTracking from 'utils/use-landing-simple-tracking';

import Dropdown from './dropdown';

const defaultDropdownMenuContent = {
  label: '',
  content: null,
};

const Header = ({ isMobileMenuOpen, onBurgerClick = () => {} }) => {
  const [isBanner, setIsBanner] = useState(false);
  const click = useLandingSimpleTracking();
  const isScrolled = useScrollPosition(0);
  const { changelog, post } = useHeaderData();
  const {
    isDropdownOpen,
    setDropdownOpen,
    dropdownMenuContent,
    handleFocus,
    handleBlur,
    handleMenuKeyDown,
    handleDropdownKeyDown,
  } = useHeaderNavigation(defaultDropdownMenuContent);

  useEffect(() => {
    const topBanner = document.querySelector('.top-banner');
    const linkBanner = document.querySelector('.link-banner');
    if (topBanner || linkBanner) {
      setIsBanner(true);
    }
  }, []);

  return (
    <header
      className={clsx(
        'safe-paddings sticky right-0 top-0 z-40 -mb-16 w-full transition-colors duration-200',
        isBanner ? 'top-9' : 'top-0',
        isScrolled ? 'bg-[#05050B]' : 'bg-transparent'
      )}
      data-disable-document-scroll={isMobileMenuOpen}
    >
      <div className="container flex h-16 items-center justify-between lg:px-8 sm-xs:px-5">
        <div className="flex items-center gap-x-11">
          <Link
            className="rounded outline-none focus-visible:shadow-[0_0_0_6px_#05050B,0_0_0_8px_white]"
            {...LINKS.home}
          >
            <Logo className="h-8" aria-hidden />
            <span className="sr-only">Novu</span>
          </Link>
          <ButtonGithubStars
            className="outline-none focus-visible:shadow-[0_0_0_6px_#05050B,0_0_0_8px_white] lg:hidden"
            size="small"
          />
        </div>
        <nav className="absolute left-1/2 h-full -translate-x-1/2 lg:-translate-x-[73%]">
          <ul className="flex h-full items-center gap-x-3 pt-1 md:hidden">
            {MENUS.header.map(({ text, content, to }, index) => (
              <li
                className="relative"
                key={index}
                onMouseEnter={handleFocus(text, content)}
                onMouseLeave={(event) => handleBlur(event)}
                onFocus={handleFocus(text, content)}
                onBlur={(event) => handleBlur(event)}
              >
                <Link
                  className="flex min-h-7 items-center gap-x-1.5 rounded-full px-3 leading-none after:absolute after:-left-1.5 after:top-1 after:size-[calc(100%+12px)]"
                  size="md"
                  theme="gray-to-white"
                  tag={to ? null : 'button'}
                  to={to}
                  onKeyDown={content ? handleMenuKeyDown : undefined}
                >
                  {text}
                  {content && (
                    <ChevronIcon
                      className={clsx('mt-0.5 size-2 transition-transform duration-200', {
                        'rotate-180': dropdownMenuContent?.label === text,
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
            changelog={changelog}
            post={post}
            onKeyDown={handleDropdownKeyDown}
          />
        </nav>
        <div className="flex gap-x-5 lg:gap-x-4 md:hidden">
          <ButtonGithubStars
            className="!hidden outline-none focus-visible:shadow-[0_0_0_4px_#05050B,0_0_0_6px_white] lg:!flex lg:text-sm"
            size="small"
          />
          <Button
            className="outline-none focus-visible:shadow-[0_0_0_1px_#05050B,0_0_0_3px_white]"
            size="xs"
            theme="gray-outline"
            {...applyQueryParams(LINKS.dashboardSignIn, ['utm_campaign=ws_top_bar'])}
            onClick={click}
          >
            Login
          </Button>
          <Button
            className="outline-none focus-visible:shadow-[0_0_0_2px_#05050B,0_0_0_4px_white]"
            size="xs"
            theme="white-filled"
            {...applyQueryParams(LINKS.dashboardSignUp, ['utm_campaign=ws_top_bar'])}
            onClick={click}
          >
            Get Started
          </Button>
        </div>
        <Burger className="hidden md:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
      </div>
    </header>
  );
};

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

export default Header;
