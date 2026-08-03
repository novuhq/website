// eslint-disable-next-line import/no-extraneous-dependencies
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import ButtonGithubStars from 'components/shared/button-github-stars';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import useScrollPosition from 'hooks/use-scroll-position';
import ChevronIcon from 'icons/chevron-small.inline.svg';
import Logo from 'images/logo.inline.svg';
import useLandingSimpleTracking from 'utils/use-landing-simple-tracking';

import Dropdown from './dropdown';

const CLOSED_MENU = { label: null, animateIn: false };

const Header = ({ isMobileMenuOpen, onBurgerClick = () => {} }) => {
  const [openMenu, setOpenMenu] = useState(CLOSED_MENU);
  const [isBanner, setIsBanner] = useState(false);
  const click = useLandingSimpleTracking();
  const isScrolled = useScrollPosition(0);

  const handleMenuOpen = (label) => {
    setOpenMenu((current) => ({
      label,
      animateIn: current.label === null,
    }));
  };

  const handleMenuClose = () => setOpenMenu(CLOSED_MENU);

  useEffect(() => {
    const topBanner = document.querySelector('.top-banner');
    const linkBanner = document.querySelector('.link-banner');
    if (topBanner || linkBanner) setIsBanner(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpenMenu(CLOSED_MENU);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
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
      <div className="container grid h-16 max-w-[1536px] grid-cols-[1fr_auto_1fr] items-center px-8 md:flex md:justify-between sm:px-5">
        <Link
          className="justify-self-start rounded outline-none focus-visible:shadow-[0_0_0_6px_#05050B,0_0_0_8px_white]"
          {...LINKS.home}
        >
          <Logo className="h-8" aria-hidden />
          <span className="sr-only">Novu</span>
        </Link>

        <nav
          className="h-full justify-self-center font-inter md:hidden"
          aria-label="Main navigation"
          onMouseLeave={handleMenuClose}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) handleMenuClose();
          }}
        >
          <ul className="flex h-full items-center gap-x-0.5">
            {MENUS.header.map(({ text, content, to, target, variant }) => {
              const isOpen = openMenu.label === text;
              const dropdownId = `navigation-${variant || text.toLowerCase()}-menu`;

              return (
                <li
                  className="relative"
                  key={text}
                  onMouseEnter={() => (content ? handleMenuOpen(text) : handleMenuClose())}
                >
                  <Link
                    className="relative flex min-h-9 items-center gap-x-1.5 whitespace-nowrap rounded-lg px-2.5 text-[15px] font-normal leading-none text-[#E0E1E5] transition-colors hover:bg-[#121417] hover:text-white focus-visible:bg-[#121417] focus-visible:text-white focus-visible:outline-none lg:px-2 lg:text-sm"
                    tag={content ? 'button' : null}
                    to={to}
                    target={target}
                    type={content ? 'button' : null}
                    aria-haspopup={content ? 'true' : null}
                    aria-expanded={content ? isOpen : null}
                    aria-controls={content && isOpen ? dropdownId : null}
                    onClick={
                      content
                        ? () => (isOpen ? handleMenuClose() : handleMenuOpen(text))
                        : undefined
                    }
                  >
                    {text}
                    {content && (
                      <ChevronIcon
                        className={clsx(
                          'size-2 translate-y-0.5 transition-transform duration-200',
                          isOpen && 'rotate-180'
                        )}
                        aria-hidden
                      />
                    )}
                  </Link>

                  {content && (
                    <Dropdown
                      id={dropdownId}
                      isOpen={isOpen}
                      animateIn={openMenu.animateIn}
                      label={text}
                      variant={variant}
                      content={content}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-x-5 justify-self-end md:hidden">
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
                {...LINKS.dashboardV2SignIn}
                onClick={click}
              >
                Login
              </Button>
              <Button
                className="outline-none focus-visible:shadow-[0_0_0_2px_#05050B,0_0_0_4px_white]"
                size="xs"
                theme="white-filled"
                {...LINKS.dashboardV2SignUp}
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

        <Burger
          className="hidden justify-self-end md:block"
          isToggled={isMobileMenuOpen}
          onClick={onBurgerClick}
        />
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
