// eslint-disable-next-line import/no-extraneous-dependencies
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import ButtonGithubStars from 'components/shared/button-github-stars';
import Link from 'components/shared/link';
import LINKS, { applyQueryParams } from 'constants/links';
import MENUS from 'constants/menus';
import useHeaderData from 'hooks/use-header-data';
import useScrollPosition from 'hooks/use-scroll-position';
import ChevronIcon from 'icons/chevron-small.inline.svg';
import Logo from 'images/logo.inline.svg';
import useLandingSimpleTracking from 'utils/use-landing-simple-tracking';

import Dropdown from './dropdown';

const Header = ({ isMobileMenuOpen, onBurgerClick = () => {} }) => {
  const [openMenu, setOpenMenu] = useState('');
  const [isBanner, setIsBanner] = useState(false);
  const click = useLandingSimpleTracking();
  const isScrolled = useScrollPosition(0);
  const { changelog, post } = useHeaderData();

  const handleMenuOpen = useCallback((label) => () => setOpenMenu(label), []);

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
      <div className="container flex h-16 max-w-[1536px] items-center justify-between px-8 sm:px-5">
        <Link
          className="rounded outline-none focus-visible:shadow-[0_0_0_6px_#05050B,0_0_0_8px_white]"
          {...LINKS.home}
        >
          <Logo className="h-8" aria-hidden />
          <span className="sr-only">Novu</span>
        </Link>
        <nav className="absolute left-1/2 h-full -translate-x-[53%] lg:-translate-x-[60%]">
          <ul className="flex h-full items-center gap-x-3.5 pt-1 lg:gap-1 lg:pt-0 md:hidden">
            {MENUS.header.map(({ text, content, to }, index) => (
              <li
                className="relative"
                key={index}
                onMouseEnter={handleMenuOpen(text)}
                onMouseLeave={handleMenuOpen(null)}
                onFocus={handleMenuOpen(text)}
                onBlur={handleMenuOpen(null)}
              >
                <Link
                  className="flex min-h-7 items-center gap-x-1.5 whitespace-nowrap rounded-full px-3 font-medium leading-none after:absolute after:-left-1.5 after:top-1 after:size-[calc(100%+12px)] lg:text-sm"
                  size="md"
                  theme="gray-to-white"
                  tag={to ? null : 'button'}
                  to={to}
                >
                  {text}
                  {content && (
                    <ChevronIcon
                      className={clsx('size-2 translate-y-0.5 transition-transform duration-200', {
                        'rotate-180': openMenu === text,
                      })}
                    />
                  )}
                </Link>
                {content && (
                  <Dropdown
                    isOpen={openMenu === text}
                    label={text}
                    content={content}
                    changelog={changelog}
                    post={post}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-x-5 lg:gap-x-5 md:hidden">
          <ClerkProvider
            publishableKey={process.env.GATSBY_CLERK_PUBLISHABLE_KEY}
            afterSignOutUrl="/"
          >
            <ButtonGithubStars
              className="font-medium outline-none focus-visible:shadow-[0_0_0_4px_#05050B,0_0_0_6px_white] lg:hidden"
              size="small"
            />
            <SignedOut>
              <Button
                className="outline-none focus-visible:shadow-[0_0_0_1px_#05050B,0_0_0_3px_white]"
                size="xs"
                theme="gray-outline"
                {...applyQueryParams(LINKS.dashboardV2SignIn, ['utm_campaign=ws_top_bar'])}
                onClick={click}
              >
                Login
              </Button>
              <Button
                className="outline-none focus-visible:shadow-[0_0_0_2px_#05050B,0_0_0_4px_white]"
                size="xs"
                theme="white-filled"
                {...applyQueryParams(LINKS.dashboardV2SignUp, ['utm_campaign=ws_top_bar'])}
                onClick={click}
              >
                Get Started
              </Button>
            </SignedOut>
            <SignedIn>
              <Button
                className="outline-none focus-visible:shadow-[0_0_0_2px_#05050B,0_0_0_4px_white]"
                size="xs"
                theme="white-filled"
                {...LINKS.dashboard}
                onClick={click}
              >
                Visit Dashboard
              </Button>
            </SignedIn>
          </ClerkProvider>
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
