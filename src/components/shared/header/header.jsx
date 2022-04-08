import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import Link from 'components/shared/link';
import GITHUB from 'constants/github';
import MENUS from 'constants/menus';
import useGithubRepoStars from 'hooks/use-github-repo-stars';
import GitHubLogo from 'images/logo-github.inline.svg';
import Logo from 'images/logo.inline.svg';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => {
  const githubStars = useGithubRepoStars(GITHUB.userName, GITHUB.repoName);

  return (
    <header className="safe-paddings absolute top-0 left-0 right-0 z-40 w-full bg-black">
      <div className="flex items-center justify-between py-3 px-10 md:py-4 md:px-7 sm:py-3.5 sm:px-4">
        <Link to="/">
          <Logo className="h-8 sm:h-7" aria-hidden />
          <span className="sr-only">Notu</span>
        </Link>

        <div className="flex items-center space-x-20 lg:space-x-14">
          <nav>
            <ul className="flex space-x-8 md:hidden">
              {MENUS.header.map(({ to, title }, index) => (
                <li key={index}>
                  <Link to={to} theme="white" size="sm">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex space-x-5 md:hidden">
            <Button
              className="pl-3"
              to={GITHUB.repoUrl}
              target="_blank"
              size="xs"
              theme="gray-outline"
            >
              <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
              <span>Star us</span>
              <span
                className={clsx(
                  'invisible flex items-center opacity-0 transition-[opacity,visibility] duration-200 before:mx-2.5 before:h-[18px] before:w-px before:bg-gray-4',
                  githubStars && '!visible !opacity-100'
                )}
                aria-label={`${githubStars} stars on Github`}
              >
                {githubStars}
              </span>
            </Button>
            <Button to="/" size="xs" theme="white-filled">
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
