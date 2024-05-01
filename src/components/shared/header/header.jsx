import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import ButtonGithubStars from 'components/shared/button-github-stars';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';
import useLandingSimpleTracking from 'utils/use-landing-simple-tracking';

const themes = ['default', 'community'];

const Header = ({ theme, isMobileMenuOpen, onBurgerClick }) => {
  const click = useLandingSimpleTracking();

  return (
    <header className="safe-paddings absolute left-0 right-0 top-0 z-40 w-full">
      <div
        className={clsx(
          'flex items-center justify-between py-3 md:py-4 sm:py-3.5',
          theme === 'community'
            ? 'container grid grid-cols-12 grid-gap-x'
            : 'px-10 lg:space-x-4 md:px-7 sm:px-4'
        )}
      >
        <Link
          className={clsx(theme === 'community' && 'col-start-2 w-fit col-span-5')}
          {...LINKS.home}
        >
          <Logo className="h-8 sm:h-7" aria-hidden />
          <span className="sr-only">Novu</span>
        </Link>

        {theme !== 'community' && (
          <>
            <div className="flex items-center space-x-16 lg:space-x-8">
              <nav>
                <ul className="flex space-x-8 md:hidden">
                  {MENUS.header.map(({ to, text, target }, index) => (
                    <li key={index}>
                      <Link to={to} theme="white" size="sm" target={target}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex space-x-5 md:hidden">
                <ButtonGithubStars className="pl-3" />
                <Button size="xs" theme="white-filled" {...LINKS.getStartedTopBar} onClick={click}>
                  Get Started
                </Button>
              </div>
            </div>

            <Burger
              className="hidden md:block"
              isToggled={isMobileMenuOpen}
              onClick={onBurgerClick}
            />
          </>
        )}

        {theme === 'community' && (
          <Button
            className="col-span-6 w-fit ml-auto"
            size="xs"
            theme="white-filled"
            {...LINKS.getStartedTopBar}
            onClick={click}
          >
            Join now
          </Button>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(themes),
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  theme: 'default',
};

export default Header;
