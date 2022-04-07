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
    <section className="hero safe-paddings relative overflow-hidden bg-black pt-36 pb-20 lg:py-16 md:pt-10 sm:pb-12">
      <div className="container relative z-10 flex flex-col items-center">
        <Heading
          className="max-w-[764px] text-center font-normal leading-denser md:max-w-[712px] md:text-4xl"
          size="xl"
          tag="h1"
          theme="white"
        >
          {TITLE}
        </Heading>
        <p className="mt-5 text-center text-lg font-light text-white lg:max-w-[782px] md:max-w-[590px] md:text-base md:leading-tight">
          {DESCRIPTION}
        </p>

        <div
          className={clsx(
            'bedore:top-0 relative mt-10 flex h-16 w-full max-w-[464px] items-center justify-between rounded-md border border-transparent bg-black bg-clip-border pl-5 pr-3 md:max-w-[458px]',
            inputBeforeClassNames,
            inputAfterClassNames
          )}
        >
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

        <div className="mt-32 lg:mt-20 md:mt-16">
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
