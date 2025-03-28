import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useState, useEffect } from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import ButtonGithubStars from 'components/shared/button-github-stars';
import Link from 'components/shared/link';
import LINKS, { applyQueryParams } from 'constants/links';
import MENUS from 'constants/menus';
import useHeaderData from 'hooks/use-header-data';
import ChevronIcon from 'icons/chevron-small.inline.svg';
import Logo from 'images/logo.inline.svg';
import useLandingSimpleTracking from 'utils/use-landing-simple-tracking';

import Dropdown from './dropdown';

const defaultDropdownMenuContent = {
  label: '',
  content: null,
};

const Header = ({ isMobileMenuOpen, onBurgerClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownMenuContent, setDropdownMenuContent] = useState(defaultDropdownMenuContent);
  const [lastFocusedLink, setLastFocusedLink] = useState(null);
  const [isBanner, setIsBanner] = useState(false);
  const click = useLandingSimpleTracking();
  const { changelog, post } = useHeaderData();

  useEffect(() => {
    const topBanner = document.querySelector('.top-banner');
    const linkBanner = document.querySelector('.link-banner');
    if (topBanner || linkBanner) {
      setIsBanner(true);
    }
  }, []);

  const handleFocus = useCallback(
    (label, content) => () => {
      if (label && content) {
        setDropdownOpen(true);
        setDropdownMenuContent({ label, content });
      }
    },
    []
  );

  const handleBlur = useCallback((event) => {
    const dropdown = document.querySelector('[role="menu"]');
    if (event?.relatedTarget && dropdown?.contains(event.relatedTarget)) {
      return;
    }
    setDropdownOpen(false);
    setDropdownMenuContent(defaultDropdownMenuContent);
  }, []);

  const handleClose = () => {
    setDropdownOpen(false);
    setDropdownMenuContent(defaultDropdownMenuContent);
    setLastFocusedLink(null);
  };

  const handleMenuKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        document.activeElement.blur();
        handleClose();
      }
      if (event.key === 'ArrowDown' && isDropdownOpen) {
        event.preventDefault();
        setLastFocusedLink(event.target);
        const dropdown = document.querySelector('[role="menu"]');
        const firstFocusable = dropdown?.querySelector('a, button, [tabindex="0"]');
        firstFocusable?.focus();
      }
    },
    [isDropdownOpen]
  );

  const handleDropdownKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        document.activeElement.blur();
        handleClose();
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
        event.stopPropagation();

        const dropdown = document.querySelector('[role="menu"]');
        const focusableElements = Array.from(
          dropdown?.querySelectorAll('a, button, [tabindex="0"]') || []
        );
        const currentIndex = focusableElements.indexOf(document.activeElement);

        if (event.key === 'ArrowDown') {
          const nextIndex = (currentIndex + 1) % focusableElements.length;
          focusableElements[nextIndex]?.focus();
        } else if (event.key === 'ArrowUp') {
          const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
          focusableElements[prevIndex]?.focus();
        }
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        const dropdown = document.querySelector('[role="menu"]');
        const focusableElements = Array.from(
          dropdown?.querySelectorAll('a, button, [tabindex="0"]') || []
        );
        const currentIndex = focusableElements.indexOf(document.activeElement);

        const headerFocusableElements = Array.from(
          document.querySelectorAll(
            'header a:not([style*="display: none"]), header button:not([style*="display: none"]), header [tabindex="0"]:not([style*="display: none"])'
          )
        );
        const currentLinkIndex = headerFocusableElements.indexOf(lastFocusedLink);

        handleClose();

        if (currentIndex === focusableElements.length - 1 && !event.shiftKey) {
          if (dropdownMenuContent?.label === 'Docs') {
            const pricingLink = headerFocusableElements.find((el) => el.textContent === 'Pricing');
            pricingLink?.focus();
            return;
          }
          const nextIndex = (currentLinkIndex + 1) % headerFocusableElements.length;
          headerFocusableElements[nextIndex]?.focus();
          return;
        }

        if (event.shiftKey) {
          const prevIndex =
            currentLinkIndex <= 0 ? headerFocusableElements.length - 1 : currentLinkIndex - 1;
          headerFocusableElements[prevIndex]?.focus();
        } else {
          const nextIndex = (currentLinkIndex + 1) % headerFocusableElements.length;
          headerFocusableElements[nextIndex]?.focus();
        }
      }
    },
    [lastFocusedLink, dropdownMenuContent?.label]
  );

  return (
    <header
      className={clsx(
        'safe-paddings sticky right-0 top-0 z-40 -mb-16 w-full bg-black',
        isBanner ? 'top-9' : 'top-0'
      )}
      data-disable-document-scroll={isMobileMenuOpen}
    >
      <div className="container flex h-16 items-center justify-between lg:px-8 sm-xs:px-5">
        <div className="flex items-center gap-x-11">
          <Link {...LINKS.home}>
            <Logo className="h-8" aria-hidden />
            <span className="sr-only">Novu</span>
          </Link>
          <ButtonGithubStars className="lg:hidden" size="small" />
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
          <ButtonGithubStars className="hidden lg:flex lg:text-sm" size="small" />
          <Button
            size="xs"
            theme="gray-outline"
            {...applyQueryParams(LINKS.dashboardSignIn, ['utm_campaign=ws_top_bar'])}
            onClick={click}
          >
            Login
          </Button>
          <Button
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
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
