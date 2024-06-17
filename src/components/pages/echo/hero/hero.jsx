import copyToClipboard from 'copy-to-clipboard';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';

import DATA from './data';
import borderGlow from './images/border-glow.svg';

const CODE = 'npx novu-labs@latest echo';

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
    <section className="hero pt-[339px] pb-[342px] lg:pt-[196px] lg:pb-[200px] md:pt-[98px] md:pb-0">
      <div className="container-xl relative">
        <div className="max-w-[562px] lg:max-w-md md:max-w-none md:px-16 sm:px-0">
          <h1 className="text-[52px] leading-denser tracking-snug font-medium lg:text-5xl md:text-4xl sm:text-[30px] sm:text-center">
            {DATA.title}
          </h1>
          <p className="mt-4 text-lg font-book leading-snug text-white/70 md:max-w-md md:mt-3 md:text-base sm:max-w-none sm:text-center">
            {DATA.description}
          </p>
          <div className="flex justify-between mt-12 lg:flex-wrap lg:gap-y-4 lg:mt-[42px] md:justify-start md:gap-x-6 md:mt-9 sm:flex-col sm:mt-7 sm:items-center">
            <div className="w-[392px] h-[54px] pl-5 pr-2 relative flex items-center justify-between rounded-md bg-black border border-transparent bg-clip-border before:absolute before:-z-20 before:-inset-0.5 before:rounded-md before:bg-[linear-gradient(267.51deg,#FFD447_10.88%,#FF8125_28.58%,#FF036B_62.46%,#DE18BC_109.99%)] lg:h-[46px] md:pr-1.5 sm:pl-4 sm:w-full sm:max-w-xs">
              <span className="font-mono font-medium">npx novu-labs@latest echo</span>
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
              <img
                className="absolute -z-10 top-[-25px] -right-6"
                src={borderGlow}
                width={186}
                height={93}
                alt=""
                loading="eager"
                aria-hidden
              />
            </div>
            <Button
              className="h-14 -mt-px text-sm min-w-[142px] lg:h-12 lg:mt-0 md:-mt-px sm:border-none sm:mt-0 sm:h-auto sm:text-[13px] sm:text-primary-1 sm:underline sm:underline-offset-[6px]"
              theme="gray-outline"
              to={DATA.link}
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="absolute w-full h-full left-0 top-0 -z-30 md:relative md:w-[702px] md:mx-auto md:h-auto md:aspect-[1.2] sm:w-80 sm:aspect-[0.65]">
          <StaticImage
            className="!absolute w-[1696px] h-auto left-[-188px] top-[-797px] lg:w-[1272px] lg:left-[-89px] lg:top-[-535px] md:w-[1390px] md:left-[-616px] md:top-[-454px] sm:w-[994px] sm:left-[-466px] sm:top-[-280px]"
            src="./images/illustration.png"
            alt=""
            width={1696}
            height={1552}
            loading="eager"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
