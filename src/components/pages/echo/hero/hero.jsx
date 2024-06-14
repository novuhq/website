import copyToClipboard from 'copy-to-clipboard';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';

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
    <section className="hero pt-[339px] pb-[342px] lg:pt-[196px] lg:pb-[200px] md:pt-24 md:pb-0">
      <div className="container-xl relative">
        <div className="max-w-[562px] lg:max-w-md md:max-w-none md:px-[68px] sm:px-1">
          <h1 className="text-[52px] leading-denser tracking-snug font-medium lg:text-5xl md:text-4xl sm:text-[30px] sm:text-center">
            {DATA.title}
          </h1>
          <p className="mt-4 text-lg font-book leading-snug text-white/70 md:mt-3 md:text-base sm:text-center">
            {DATA.description}
          </p>
          <div className="flex justify-between mt-12 lg:flex-wrap lg:gap-y-4 lg:mt-[42px] md:justify-start md:gap-x-6 md:mt-9 sm:mt-7">
            <div className="w-[392px] h-[54px] pl-5 pr-2 relative flex items-center justify-between rounded-md bg-black border border-transparent bg-clip-border before:absolute before:-z-20 before:-inset-0.5 before:rounded-md before:bg-[linear-gradient(267.51deg,#FFD447_10.88%,#FF8125_28.58%,#FF036B_62.46%,#DE18BC_109.99%)] lg:h-[46px]">
              <span className="font-mono font-medium">npx novu-labs@latest echo</span>
              <Button
                className="min-w-[88px] h-10 text-sm lg:h-[34px]"
                theme="white-filled"
                onClick={handleCopy}
              >
                {isCopied ? 'Copied!' : 'Copy'}
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
              className="h-14 -mt-px text-sm min-w-[142px] lg:h-12 lg:mt-0 md:-mt-px"
              theme="gray-outline"
              to={DATA.link}
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="absolute w-full h-full left-0 top-0 -z-30 md:relative md:h-auto md:aspect-[0.8054]">
          <StaticImage
            className="!absolute w-[950px] h-auto left-[557px] top-[-316px] lg:w-[711px] lg:top-[-173px] lg:left-[470px] md:w-[110.11%] md:top-[-7.2398%] md:left-0"
            src="./images/screens.png"
            alt=""
            width={950}
            height={1071}
            loading="eager"
            quality={100}
          />
          <StaticImage
            className="!absolute w-[1452px] h-auto left-[-188px] top-[-797px] lg:w-[1087px] lg:left-[-87px] lg:top-[-534px] md:w-[152.668%] md:top-[-46.38%] md:left-[-77.387%]"
            src="./images/lights.png"
            alt=""
            width={1452}
            height={1305}
            loading="eager"
            quality={100}
          />
          <div className="absolute w-[812px] h-[638px] right-[-120px] -top-16 bg-[radial-gradient(88.16%_151.57%_at_9.96%_6.04%,rgba(5,5,11,0)_42.91%,rgba(5,5,11,0.05)_60.44%,rgba(5,5,11,0.5)_92.78%),radial-gradient(115.01%_79.4%_at_48.34%_5.6%,rgba(5,5,11,0)_42.91%,rgba(5,5,11,0.05)_66.26%,rgba(5,5,11,0.9)_92.78%)] lg:w-[608px] lg:h-[478px] lg:right-[-126px] lg:top-4 md:w-full md:aspect-[1.2727] md:h-auto md:right-[-11%] md:top-[16%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
