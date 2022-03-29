import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import GitHubLogo from 'images/logo-github.inline.svg';
import Logo from 'images/logo.inline.svg';

const LINKS = [
  [
    { text: 'Blog', to: '/' },
    { text: 'FAQ', to: '/' },
  ],
  [
    { text: 'Documentation', to: '/' },
    { text: 'Providers', to: '/' },
    { text: 'SDK', to: '/' },
  ],
  [
    { text: 'Contact Us', to: '/' },
    { text: 'Discord', to: '/' },
  ],
  [
    { text: 'Twitter', to: '/' },
    { text: 'Github', to: '/' },
  ],
];
const COPYRIGHT = 'Transmit';
const GITHUB_BUTTON_TEXT = 'Star us on Github';
const GITHUB_BUTTON_URL = '/';

const Footer = () => (
  <footer className="safe-paddings bg-black">
    <div className="container flex justify-between py-20 sm:block">
      <div className="flex flex-col items-start justify-between">
        <Link to="/">
          <span className="sr-only">Notu</span>
          <Logo className="h-6" aria-hidden />
        </Link>
        <p className="text-sm leading-none text-gray-8">
          Ⓒ {new Date().getFullYear()} {COPYRIGHT}
        </p>
      </div>
      <div className="flex space-x-28">
        <nav className="flex space-x-28 sm:grid sm:grid-cols-2">
          {LINKS.map((links, index) => (
            <ul className="space-y-3" key={index}>
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

        <div className="flex flex-col items-end justify-between">
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
    </div>
  </footer>
);

export default Footer;
