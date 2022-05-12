import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import ButtonGithubStars from 'components/shared/button-github-stars';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings absolute top-0 left-0 right-0 z-40 w-full">
    <div
      style={{
        cursor: 'pointer',
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        background: '#ab2151',
      }}
      onClick={() => {
        window.location.href = '/blog/seed-funding';
      }}
    >
      We are thrilled to announce our $6.6M Seed funding - Read More
    </div>
    <div className="flex items-center justify-between py-3 px-10 md:py-4 md:px-7 sm:py-3.5 sm:px-4">
      <Link {...LINKS.home}>
        <Logo className="h-8 sm:h-7" aria-hidden />
        <span className="sr-only">Novu</span>
      </Link>

      <div className="flex items-center space-x-16 lg:space-x-14">
        <nav>
          <ul className="flex space-x-8 md:hidden">
            {MENUS.header.map(({ to, title, target }, index) => (
              <li key={index}>
                <Link to={to} theme="white" size="sm" target={target}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex space-x-5 md:hidden">
          <ButtonGithubStars className="pl-3" />
          <Button size="xs" theme="white-filled" {...LINKS.getStarted}>
            Get Started
          </Button>
        </div>
      </div>

      <Burger className="hidden md:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
    </div>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
