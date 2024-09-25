import copyToClipboard from 'copy-to-clipboard';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';

import Animation from './animation';
import borderGlow from './images/border-glow.svg';

const TITLE = 'Create powerful notification workflows and content using code';

const DESCRIPTION =
  'Create complex workflows, access local data, and reuse existing content templates with Novu Echo.';

const LINK = {
  text: 'Learn more',
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
    <section className="hero pt-[152px] pb-20 lg:pt-[196px] md:pt-[98px] md:pb-0">
      <div className="container-xl relative xl:px-10 lg:px-8 lg:max-w-none md:max-w-3xl sm:max-w-lg sm:px-5 z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[52px] leading-denser tracking-snug font-medium max-w-[902px] lg:text-5xl md:text-4xl sm:text-[30px] text-center">
            {TITLE}
          </h1>
          <p className="mt-5 text-lg font-book leading-snug text-white/70 max-w-xl text-center">
            {DESCRIPTION}
          </p>
          <div className="flex justify-between mt-[54px] gap-x-3.5 lg:flex-wrap lg:gap-y-4 lg:mt-[42px] md:justify-start md:gap-x-6 md:mt-9 sm:flex-col sm:mt-7 sm:items-center">
            <div className="w-[392px] h-[54px] z-10 relative after:absolute after:-z-20 after:-inset-px after:rounded-md after:bg-[linear-gradient(267.51deg,#FFD447_10.88%,#FF8125_28.58%,#FF036B_62.46%,#DE18BC_109.99%)] lg:h-[46px] sm:w-full sm:max-w-xs">
              <div className="w-full h-full pl-5 pr-2 flex items-center justify-between rounded-md bg-black md:pr-1.5 sm:pl-4">
                <span className="font-mono font-medium">npx novu@latest dev</span>
                <Button
                  className="min-w-[88px] h-10 text-sm lg:h-[34px] sm:min-w-[34px]"
                  theme="white-filled"
                  onClick={handleCopy}
                >
                  {isCopied ? (
                    <>
                      <span className="sm:hidden">Copied!</span>
                      <CheckIcon className="w-[18px] h-3 hidden sm:block" />
                    </>
                  ) : (
                    <>
                      <span className="sm:hidden">Copy</span>
                      <CopyIcon className="w-4 h-4 hidden sm:block" />
                    </>
                  )}
                </Button>
              </div>
              <img
                className="absolute -z-10 -top-6 right-[-23px]"
                src={borderGlow}
                width={186}
                height={93}
                alt=""
                loading="eager"
                aria-hidden
              />
            </div>
            <Button
              className="h-14 -mt-px text-sm min-w-[142px] rounded-md lg:h-12 lg:mt-0 md:-mt-px sm:border-none sm:mt-0 sm:h-auto sm:text-[13px] sm:text-primary-1 sm:underline sm:underline-offset-[6px]"
              theme="gray-outline"
              to={LINK.url}
            >
              {LINK.text}
            </Button>
          </div>
        </div>
      </div>
      <Animation />
    </section>
  );
};

export default Hero;
