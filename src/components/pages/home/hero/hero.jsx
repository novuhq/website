import clsx from 'clsx';
import copyToClipboard from 'copy-to-clipboard';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import bg from './images/bg.svg';

const TITLE = 'The open-source notification infrastructure for developers';
const DESCRIPTION =
  'Simple components and APIs for managing all communication channels in one place: Email, SMS, Direct, and Push';

const INPUT_TEXT = 'npx notu init';

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleButtonClick = () => {
    if (!isCopied) {
      copyToClipboard(INPUT_TEXT, { onCopy: setIsCopied(true) });
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
    <section className="hero safe-paddings relative overflow-hidden bg-black pt-32 pb-20">
      <div className="container relative z-10 flex flex-col items-center">
        <Heading
          className="max-w-[764px] text-center font-normal leading-tight"
          size="xl"
          tag="h1"
          theme="white"
        >
          {TITLE}
        </Heading>
        <p className="mt-5 text-center text-lg font-light text-white lg:max-w-[782px]">
          {DESCRIPTION}
        </p>

        <div className="bedore:top-0 input-border-gradient relative mt-10 flex h-16 w-full max-w-[464px] items-center justify-between rounded-md bg-black pl-5 pr-3">
          <span className="whitespace-nowrap font-mono text-lg !leading-none text-white">
            {INPUT_TEXT}
          </span>

          <Button className="relative" size="xs" theme="white-filled" onClick={handleButtonClick}>
            <span className={clsx({ 'opacity-0': isCopied })}>Copy</span>
            <span
              className={clsx(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0',
                { 'opacity-100': isCopied }
              )}
            >
              Copied!
            </span>
          </Button>
        </div>

        <div className="mt-32">
          <StaticImage
            className="max-w-[1096px]"
            src="./images/hero-illustration.png"
            alt=""
            loading="eager"
          />
        </div>
      </div>

      <img
        className="absolute -top-12 left-1/2 min-w-[1920px] -translate-x-1/2"
        src={bg}
        loading="eager"
        alt=""
        aria-hidden
      />
    </section>
  );
};

export default Hero;
