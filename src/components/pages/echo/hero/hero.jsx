import copyToClipboard from 'copy-to-clipboard';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';

import borderGlow from './images/border-glow.svg';

const TITLE = 'Create powerful notification workflows and content using code';

const DESCRIPTION =
  'Create complex workflows, access local data, and reuse existing content templates with Novu Echo.';

const LINK = {
  text: 'Read docs',
  url: 'https://novu.mintlify.app/echo/quickstart',
};

const CODE = 'npx novu@latest dev';

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!isCopied) {
      copyToClipboard(CODE, { onCopy: setIsCopied(true) });
    }
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  return (
    <section className="hero pb-[342px] pt-[339px] lg:pb-[200px] lg:pt-[196px] md:pb-0 md:pt-[98px]">
      <div className="container-xl relative xl:px-10 lg:max-w-none lg:px-8 md:max-w-3xl sm:max-w-lg sm:px-5">
        <div className="max-w-[562px] lg:max-w-md md:max-w-none md:px-16 sm:px-0">
          <h1 className="text-[52px] font-medium leading-denser tracking-snug lg:text-5xl md:text-4xl sm:text-center sm:text-[30px]">
            {TITLE}
          </h1>
          <p className="mt-4 text-lg font-book leading-snug text-white/70 md:mt-3 md:max-w-md md:text-base sm:max-w-none sm:text-center">
            {DESCRIPTION}
          </p>
          <div className="mt-12 flex justify-between lg:mt-[42px] lg:flex-wrap lg:gap-y-4 md:mt-9 md:justify-start md:gap-x-6 sm:mt-7 sm:flex-col sm:items-center">
            <div className="relative z-10 h-[54px] w-[392px] after:absolute after:-inset-px after:-z-20 after:rounded-md after:bg-[linear-gradient(267.51deg,#FFD447_10.88%,#FF8125_28.58%,#FF036B_62.46%,#DE18BC_109.99%)] lg:h-[46px] sm:w-full sm:max-w-xs">
              <div className="flex h-full w-full items-center justify-between rounded-md bg-black pl-5 pr-2 md:pr-1.5 sm:pl-4">
                <span className="font-mono font-medium">npx novu@latest dev</span>
                <Button
                  className="h-10 min-w-[88px] text-sm lg:h-[34px] sm:min-w-[34px]"
                  theme="white-filled"
                  onClick={handleCopy}
                >
                  {isCopied ? (
                    <>
                      <span className="sm:hidden">Copied!</span>
                      <CheckIcon className="hidden h-3 w-[18px] sm:block" />
                    </>
                  ) : (
                    <>
                      <span className="sm:hidden">Copy</span>
                      <CopyIcon className="hidden h-4 w-4 sm:block" />
                    </>
                  )}
                </Button>
              </div>
              <img
                className="absolute -top-6 right-[-23px] -z-10"
                src={borderGlow}
                width={186}
                height={93}
                alt=""
                loading="eager"
                aria-hidden
              />
            </div>
            <Button
              className="-mt-px h-14 min-w-[142px] text-sm lg:mt-0 lg:h-12 md:-mt-px sm:mt-0 sm:h-auto sm:border-none sm:text-[13px] sm:text-primary-1 sm:underline sm:underline-offset-[6px]"
              theme="gray-outline"
              to={LINK.url}
            >
              {LINK.text}
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full md:relative md:mx-auto md:aspect-[1.2] md:h-auto md:w-[702px] sm:aspect-[0.65] sm:w-80">
          <StaticImage
            className="!absolute left-[-188px] top-[-797px] h-auto w-[1652px] lg:left-[-93px] lg:top-[-538px] lg:w-[1246px] md:left-[-616px] md:top-[-454px] md:w-[1353px] sm:left-[-466px] sm:top-[-280px] sm:w-[994px]"
            src="./images/illustration.png"
            alt=""
            width={1652}
            height={1371}
            loading="eager"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
