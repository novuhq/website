import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import MENUS from 'constants/menus';
import GitHubLogo from 'images/logo-github.inline.svg';
import Logo from 'images/logo.inline.svg';

const COPYRIGHT = 'Transmit';
const GITHUB_BUTTON_TEXT = 'Star us on Github';
const GITHUB_BUTTON_URL = '/';

const Footer = () => (
  <footer className="safe-paddings bg-black">
    <div className="container flex justify-between py-20 lg:flex-col lg:py-11 sm:block">
      <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
        <Link to="/">
          <span className="sr-only">Notu</span>
          <Logo className="h-6" aria-hidden />
        </Link>
        <p className="text-sm leading-none text-gray-8 lg:hidden">
          Ⓒ {new Date().getFullYear()} {COPYRIGHT}
        </p>

        <Button
          className="hidden pl-3 lg:flex sm:hidden"
          to={GITHUB_BUTTON_URL}
          size="xs"
          theme="gray-outline"
        >
          <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
          {GITHUB_BUTTON_TEXT}
        </Button>
      </div>

      <div className="flex space-x-28 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-x-7 lg:space-x-0 sm:block">
        <nav className="flex space-x-28 lg:col-span-11 lg:w-full lg:justify-between lg:space-x-0 sm:hidden">
          {MENUS.footer.map((links, index) => (
            <ul className="space-y-3 lg:space-y-2" key={index}>
              {links.map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to} size="base" theme="white">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <nav className="hidden grid-cols-2 justify-between gap-y-8 sm:grid">
          {MENUS.footerSm.map((links, index) => (
            <ul className="space-y-2" key={index}>
              {links.map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to} size="base" theme="white">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className="flex flex-col items-end justify-between lg:hidden">
          <Button className="pl-3" to={GITHUB_BUTTON_URL} size="xs" theme="gray-outline">
            <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
            {GITHUB_BUTTON_TEXT}
          </Button>

          <p className="text-sm leading-none text-gray-8">
            Design made by{' '}
            <Link
              to="https://pixelpoint.io/"
              theme="gray"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Point
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-10 hidden sm:block">
        <Button className="pl-3" to={GITHUB_BUTTON_URL} size="xs" theme="gray-outline">
          <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
          {GITHUB_BUTTON_TEXT}
        </Button>
      </div>

      <div className="hidden lg:mt-14 lg:flex lg:justify-between sm:mt-10 sm:flex-col sm:space-y-2.5">
        <p className="text-sm leading-none text-gray-8">
          Ⓒ {new Date().getFullYear()} {COPYRIGHT}
        </p>
        <p className="text-sm leading-none text-gray-8">
          Design made by{' '}
          <Link to="https://pixelpoint.io/" theme="gray" target="_blank" rel="noopener noreferrer">
            Pixel Point
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
