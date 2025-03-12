import clsx from 'clsx';
import React from 'react';

import ButtonGithubStars from 'components/shared/button-github-stars';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import { useAudioPlayer } from 'context/audio-player';
import Logo from 'images/logo.inline.svg';

import certificateAicpa from './images/certificate-aicpa.svg';
import certificateGDPR from './images/certificate-gdpr.svg';
import certificateHIPAA from './images/certificate-hipaa.svg';
import certificateISO from './images/certificate-iso.svg';
import certificateOSS from './images/certificate-oss.svg';

const COPYRIGHT = 'Novu';

const CERTIFICATES = [
  {
    src: certificateISO,
    alt: 'Certificate ISO27001',
    width: 48,
    height: 48,
  },
  {
    src: certificateAicpa,
    alt: 'Certificate Aicpa',
    width: 50,
    height: 48,
  },
  {
    src: certificateGDPR,
    alt: 'Certificate GDPR',
    width: 34,
    height: 48,
  },
  {
    src: certificateHIPAA,
    alt: 'Certificate HIPAA',
    width: 82,
    height: 48,
  },
  {
    src: certificateOSS,
    alt: 'Certificate OSS',
    width: 77,
    height: 33,
  },
];

const Footer = () => {
  const { isOpen } = useAudioPlayer();

  return (
    <footer className="safe-paddings">
      <div
        className={clsx(
          'container grid-gap-x grid grid-cols-12 py-20 lg:flex lg:flex-col lg:py-12 sm:block sm:py-10',
          {
            'pb-30 md:!pb-40': isOpen,
          }
        )}
      >
        <div className="col-span-3 flex flex-col items-start gap-y-10">
          <Link {...LINKS.home}>
            <span className="sr-only">Novu</span>
            <Logo className="h-8" aria-hidden />
          </Link>
          <ul className="flex flex-wrap gap-x-5 gap-y-6 lg:hidden">
            {CERTIFICATES.map(({ src, alt, width, height }, index) => (
              <li key={index}>
                <Link {...LINKS.trustPage}>
                  <img className="h-12 w-auto" src={src} alt={alt} width={width} height={height} />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-auto text-sm leading-none text-gray-8 lg:hidden">
            Ⓒ {new Date().getFullYear()} {COPYRIGHT}
          </p>
        </div>

        <div className="col-span-9 col-start-4 flex justify-between xl:col-span-10 lg:mt-8 lg:grid lg:grid-cols-12 lg:justify-between lg:gap-x-7 lg:space-x-0 sm:mt-9 sm:block">
          <nav className="flex justify-between space-x-30 pt-1.5 lg:col-span-9 lg:w-full lg:justify-start lg:space-x-22 md:col-span-6 md:grid md:grid-cols-2 md:gap-y-5 md:space-x-0">
            {MENUS.footer.map((links, index) => (
              <ul className="space-y-2.5 lg:space-y-2 sm:space-y-1" key={index}>
                {links.map(({ to, text, target }, index) => (
                  <li key={index}>
                    <Link to={to} size="base" theme="white" target={target}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>

          <div className="flex flex-col items-end lg:col-span-3 md:col-span-5 md:col-start-8 sm:mt-9 sm:items-start">
            <ButtonGithubStars className="pl-3" />
            <ul className="mt-8 hidden w-full justify-end gap-x-3 gap-y-4 lg:flex lg:flex-wrap md:gap-x-5 md:gap-y-6 sm:justify-start">
              {CERTIFICATES.map(({ src, alt, width, height }, index) => (
                <li key={index}>
                  <img
                    className="h-10 w-auto md:h-11"
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                  />
                </li>
              ))}
            </ul>

            <p className="mt-auto text-sm leading-none text-gray-8 lg:hidden">
              Design made by{' '}
              <Link theme="gray" rel="noopener" {...LINKS.pixelPoint}>
                Pixel Point
              </Link>
            </p>
          </div>
        </div>

        <div className="hidden lg:mt-8 lg:flex lg:justify-between sm:mt-9 sm:flex-col sm:space-y-2.5">
          <p className="text-sm leading-none text-gray-8">
            Ⓒ {new Date().getFullYear()} {COPYRIGHT}
          </p>
          <p className="text-sm leading-none text-gray-8">
            Design made by{' '}
            <Link theme="gray" rel="noopener" {...LINKS.pixelPoint}>
              Pixel Point
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
