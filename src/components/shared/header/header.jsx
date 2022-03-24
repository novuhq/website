import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

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
    <div className="container flex items-center justify-between  py-3">
      <Link to="/">
        <Logo className="h-6 2xl:h-5" aria-hidden />
      </Link>
      <nav className="xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
        <ul className="flex space-x-12 2xl:space-x-10 lg:hidden">
          {LINKS.map(({ to, title }, index) => (
            <li key={index}>
              <Link className="text-white" to={to}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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
