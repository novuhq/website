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

/* TODO: find a way to simplify the styles for applying a gradient border for the input field */
const inputBeforeClassNames =
  'before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:-z-10 before:-m-0.5 before:rounded-[inherit] before:bg-input-gradient';
const inputAfterClassNames =
  'after:absolute after:left-0 after:top-0 after:right-0 after:bottom-0 after:-z-20 after:-m-0.5 after:rounded-[inherit] after:bg-input-gradient after:blur-sm';

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
    <section className="hero safe-paddings relative overflow-hidden bg-black pt-34 pb-20 lg:pt-32 lg:pb-16 md:pt-30 md:pb-14 sm:pt-22 sm:pb-9">
      <div className="container relative z-10 flex flex-col items-center">
        <Heading
          className="max-w-[764px] text-center font-normal leading-denser md:max-w-[712px] md:text-4xl sm:text-[26px]"
          size="xl"
          tag="h1"
          theme="white"
        >
          {TITLE}
        </Heading>
        <p className="mt-5 text-center text-lg font-book leading-tight text-gray-9 lg:max-w-[782px] md:max-w-[590px] md:text-base sm:mt-3">
          {DESCRIPTION}
        </p>

        <div
          className={clsx(
            'relative mt-10 flex h-16 w-full max-w-[464px] items-center justify-between rounded-md border border-transparent bg-black bg-clip-border pl-5 pr-3 before:top-0 md:mt-8 md:max-w-[458px] sm:h-[60px]',
            inputBeforeClassNames,
            inputAfterClassNames
          )}
        >
          <span className="whitespace-nowrap font-mono text-lg !leading-none sm:text-base">
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

        <div className="mt-18 lg:mt-16 md:mt-14 sm:mt-12">
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
