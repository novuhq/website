import React from 'react';

import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

import Navigation from './navigation';
import SystemStatus from './system-status';

const ICONS = {
  x: (
    <>
      <path d="M10.8442 15.1485L4.4085 22.497H0.84375L9.17925 12.975L10.8442 15.1485Z" />
      <path d="M12.7875 8.241L18.6803 1.5H22.2428L14.4375 10.4265L12.7875 8.241Z" />
      <path d="M23.6164 22.5H16.4471L0.384377 1.5H7.73513L23.6164 22.5ZM17.4304 20.3677H19.4044L6.66263 3.5205H4.54463L17.4304 20.3677Z" />
    </>
  ),
  github: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0.295311C5.4 0.295311 0 5.69531 0 12.2953C0 17.6203 3.45 22.1203 8.175 23.6953C8.775 23.7703 9 23.4703 9 23.0953C9 22.7953 9 22.0453 9 21.0703C5.625 21.8203 4.95 19.4953 4.95 19.4953C4.425 18.1453 3.6 17.7703 3.6 17.7703C2.475 17.0203 3.675 17.0203 3.675 17.0203C4.875 17.0953 5.55 18.2203 5.55 18.2203C6.6 20.0203 8.325 19.4953 9.075 19.1953C9.15 18.4453 9.525 17.9203 9.825 17.6203C7.125 17.3203 4.35 16.2703 4.35 11.6953C4.35 10.4203 4.8 9.29531 5.55 8.47031C5.4 8.17031 5.025 6.97031 5.7 5.32031C5.7 5.32031 6.675 5.02031 9 6.52031C9.975 6.22031 10.95 6.14531 12 6.14531C13.05 6.14531 14.025 6.29531 15 6.52031C17.325 4.94531 18.3 5.24531 18.3 5.24531C18.975 6.89531 18.525 8.09531 18.45 8.39531C19.2 9.22031 19.65 10.2703 19.65 11.6203C19.65 16.1953 16.875 17.2453 14.175 17.5453C14.625 17.9203 15 18.6703 15 19.7953C15 21.3703 15 22.7203 15 23.0953C15 23.3953 15.225 23.7703 15.825 23.6953C20.55 22.1203 24 17.6203 24 12.2953C24 5.69531 18.6 0.295311 12 0.295311Z"
    />
  ),
  discord: (
    <path d="M21.6309 5.21801C19.9309 3.88281 17.8586 3.10786 15.6997 3L15.4039 3.33798C17.3257 3.85041 19.1169 4.76479 20.6592 6.02072C18.6922 4.9369 16.5322 4.24831 14.3009 3.99374C12.882 3.83738 11.4494 3.85156 10.0339 4.03599C8.25115 4.20255 6.50895 4.66666 4.87963 5.40905C4.09804 5.76815 3.63332 6.02164 3.63332 6.02164C5.25939 4.70228 7.15624 3.75746 9.18891 3.25441L8.97767 3.00092C6.81714 3.10784 4.74308 3.88284 3.04185 5.21893C1.10866 9.0408 0.0685615 13.2518 0 17.5342C0 17.5342 1.77441 20.5972 6.4428 20.7487C6.4428 20.7487 7.22438 19.7981 7.8581 18.9954C6.37298 18.6209 5.06541 17.7392 4.16142 16.5028C5.84258 17.5688 7.71364 18.3004 9.67201 18.6574C11.4785 19.0045 13.3339 19.0116 15.1431 18.6786C17.0959 18.322 18.961 17.5903 20.6353 16.5239C19.6974 17.7867 18.343 18.6771 16.8119 19.0377C17.4456 19.8404 18.2061 20.7487 18.2061 20.7487C22.8745 20.6008 24.67 17.5342 24.67 17.5342C24.6024 13.2517 23.5633 9.04039 21.6309 5.21801ZM8.3862 15.566C7.79833 15.5166 7.25046 15.2481 6.85115 14.8139C6.45184 14.3796 6.23024 13.8112 6.23024 13.2212C6.23024 12.6313 6.45184 12.0629 6.85115 11.6286C7.25046 11.1943 7.79833 10.9259 8.3862 10.8765C8.97408 10.9259 9.52195 11.1943 9.92125 11.6286C10.3206 12.0629 10.5422 12.6313 10.5422 13.2212C10.5422 13.8112 10.3206 14.3796 9.92125 14.8139C9.52195 15.2481 8.97408 15.5166 8.3862 15.566ZM16.101 15.566C15.6289 15.6059 15.1557 15.5024 14.7433 15.2689C14.331 15.0355 13.9987 14.683 13.7901 14.2576C13.5814 13.8321 13.506 13.3536 13.5738 12.8847C13.6416 12.4157 13.8494 11.9781 14.1701 11.6292C14.4907 11.2803 14.9091 11.0363 15.3707 10.9292C15.8323 10.8221 16.3155 10.8568 16.757 11.0289C17.1985 11.2009 17.5777 11.5022 17.8452 11.8934C18.1126 12.2846 18.2556 12.7474 18.2557 13.2212C18.2774 13.8177 18.0627 14.3987 17.6584 14.8378C17.254 15.2768 16.6927 15.5385 16.0964 15.566H16.101Z" />
  ),
};

const Footer = () => (
  <footer className="relative border-t border-dashed border-t-gray-4 bg-black px-8 pb-8 pt-12 lg:pt-12 md:pb-7 md:pt-10 sm:px-5 sm:pb-6">
    <div className="mx-auto w-full max-w-[1344px]">
      <div className="flex items-start gap-[122px] lg:flex-col lg:items-stretch lg:gap-10">
        <Link {...LINKS.home}>
          <span className="sr-only">Novu</span>
          <Logo className="h-8" aria-hidden />
        </Link>
        <Navigation />
      </div>
      <div className="mt-16 pt-px xl:pt-0 md:mt-18">
        <div className="flex justify-between pb-[26px] md:pb-[21px] sm:flex-col sm:justify-normal sm:pb-4">
          <SystemStatus />
          <ul className="right-5 top-[45px] mr-[3px] mt-0.5 flex gap-8 xl:mr-0 sm:absolute">
            {MENUS.footer.social.map(({ href, icon, label }, index) => (
              <Link
                className="text-gray-7 transition-colors duration-300 hover:text-white focus-visible:text-white"
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  {ICONS[icon]}
                </svg>
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-between gap-y-5 border-t border-t-gray-3 pt-6 md:pt-[21px] sm:flex-col sm:justify-normal">
          <ul className="flex gap-[34px] lg:gap-8 md:gap-4 sm:flex-col sm:gap-3">
            {MENUS.footer.legal.map(({ label, href }, index) => (
              <li key={index}>
                <Link
                  className="tracking-tight lg:tracking-normal sm:tracking-tight"
                  to={href}
                  theme="ghost"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-[35px] md:gap-[27px] sm:gap-[13px]">
            <p className="text-base leading-none -tracking-[0.02em] text-gray-5 lg:tracking-normal">
              <span className="ml-px mr-2">©</span>
              {new Date().getFullYear()} Novu
            </p>
            <p className="relative text-base leading-none -tracking-[0.02em] text-gray-5 before:absolute before:-left-[18px] before:h-full before:w-px before:bg-gray-5 lg:tracking-normal md:before:-left-3.5 sm:before:-left-1.5">
              Design made by Pixel Point
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
