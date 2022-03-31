import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import GitHubLogo from 'images/logo-github.inline.svg';
import Logo from 'images/logo.inline.svg';

const LINKS = [
  {
    title: 'Documentation',
    to: '/',
  },
  {
    title: 'Blog',
    to: '/',
  },
  {
    title: 'FAQ',
    to: '/',
  },
];

// TODO: Implement mobile menu functionality and delete eslint comment below, example — https://user-images.githubusercontent.com/20713191/144221747-70dc933e-a5bd-4586-9019-08117afc13e0.png
// eslint-disable-next-line no-unused-vars
const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings absolute top-0 left-0 right-0 z-40 w-full bg-black lg:relative">
    <div className="flex items-center justify-between py-3 px-10 md:px-7 sm:px-4">
      <Link to="/">
        <Logo className="h-6" aria-hidden />
        <span className="sr-only">Notu</span>
      </Link>

      <div className="flex items-center space-x-20">
        <nav>
          <ul className="flex space-x-8 md:hidden">
            {LINKS.map(({ to, title }, index) => (
              <li key={index}>
                <Link to={to} theme="white" size="sm">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex space-x-5">
          <Button className="pl-3" to="/" size="xs" theme="gray-outline">
            <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
            Star us on Github
          </Button>
          <Button to="/" size="xs" theme="white-filled">
            Get Started
          </Button>
        </div>
      </div>
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
