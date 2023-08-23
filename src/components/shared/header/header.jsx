import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import ButtonGithubStars from 'components/shared/button-github-stars';
import InkeepSearchBarWidget from 'components/shared/inkeep-widgets/inkeep-search-bar/inkeep-searchbar';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

import useLandingSimpleTracking from '../conversions/use.landing.simple.tracking';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => {
  const click = useLandingSimpleTracking();

  return (
    <header className="safe-paddings absolute left-0 right-0 top-0 z-40 w-full">
      <div className="flex items-center justify-between px-10 py-3 md:px-7 md:py-4 sm:px-4 sm:py-3.5">
        <Link {...LINKS.home}>
          <Logo className="h-8 sm:h-7" aria-hidden />
          <span className="sr-only">Novu</span>
        </Link>

        <div className="flex h-8 w-60 items-center lg:hidden">
          <InkeepSearchBarWidget />
        </div>

        <div className="flex items-center space-x-16 lg:space-x-14">
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
            <Button size="xs" theme="white-filled" {...LINKS.getStarted} onClick={click}>
              Get Started
            </Button>
          </div>
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
