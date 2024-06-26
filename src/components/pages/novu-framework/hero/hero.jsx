import copyToClipboard from 'copy-to-clipboard';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';

import borderGlow from './images/border-glow.svg';

const TITLE = 'The Notification Framework for Developers and Product Teams';

const DESCRIPTION =
  'Fully extensible open source notifications infrastructure framework that empowers developers and product teams to create captivating notification experiences.';

const LINK = {
  text: 'Read docs',
  url: 'https://docs.novu.co/?utm_campaign=v2-web',
};

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
    <section className="hero pt-[339px] pb-[180px] lg:pt-[196px] lg:pb-[200px] md:pt-[98px] md:pb-0">
      <div className="container-xl relative">
        <div className="max-w-[562px] lg:max-w-md md:max-w-none md:px-16 sm:px-0">
          <h1 className="text-[52px] leading-denser tracking-snug font-medium lg:text-5xl md:text-4xl sm:text-[30px] sm:text-center">
            {TITLE}
          </h1>
          <p className="mt-4 text-lg font-book leading-snug text-white/70 md:max-w-md md:mt-3 md:text-base sm:max-w-none sm:text-center">
            {DESCRIPTION}
          </p>
          <div className="flex justify-between mt-12 lg:flex-wrap lg:gap-y-4 lg:mt-[42px] md:justify-start md:gap-x-6 md:mt-9 sm:flex-col sm:mt-7 sm:items-center">
            <div className="w-[392px] h-[54px] z-10 relative after:absolute after:-z-20 after:-inset-px after:rounded-md after:bg-[linear-gradient(267.51deg,#FFD447_10.88%,#FF8125_28.58%,#FF036B_62.46%,#DE18BC_109.99%)] lg:h-[46px] sm:w-full sm:max-w-xs">
              <div className="w-full h-full pl-5 pr-2 flex items-center justify-between rounded-md bg-black md:pr-1.5 sm:pl-4">
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
              </div>
              <img
                className="absolute -z-10 -top-6 right-[23px]"
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
              to={LINK.url}
            >
              {LINK.text}
            </Button>
          </div>
        </div>

        <div className="absolute w-full h-full left-0 top-0 z-0 md:relative md:w-[702px] md:mx-auto md:h-auto md:aspect-[1.2] sm:w-80 sm:aspect-[0.65]">
          <StaticImage
            className="!absolute w-[1652px] h-auto left-[-188px] top-[-797px] lg:w-[1246px] lg:left-[-93px] lg:top-[-538px] md:w-[1353px] md:left-[-616px] md:top-[-454px] sm:w-[994px] sm:left-[-466px] sm:top-[-280px]"
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
