import clsx from 'clsx';
import copyToClipboard from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';

import background from './images/background.svg';
import codeDots from './images/code-dots.svg';

const CtaWithForm = ({ className, title, description, leftItem, rightItem }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!isCopied && leftItem.code) {
      copyToClipboard(leftItem.code, { onCopy: setIsCopied(true) });
    }
  };

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <section
      className={clsx(
        'cta-with-form safe-paddings relative mt-20 lg:mt-[204px] md:mt-[124px]',
        className
      )}
    >
      <div className="container-sm relative md:px-8 sm:w-full sm:px-5">
        <div className="relative z-10 flex flex-col items-center">
          <Heading
            className="max-w-4xl text-center font-medium leading-denser tracking-snug lg:text-4xl md:text-[32px]"
            size="44"
            tag="h2"
          >
            {title}
          </Heading>
          <p className="mt-3 max-w-[600px] text-center text-lg font-book tracking-snug text-gray-8 md:max-w-lg md:text-base">
            {description}
          </p>
          <div className="mt-8 flex justify-center gap-5 md:mt-7 sm:flex-col sm:items-center">
            {leftItem.code && (
              <div
                className={clsx(
                  'relative flex h-12 w-[392px] items-center justify-between rounded-md border border-transparent bg-black bg-clip-border pl-5 pr-1.5 shadow-[#C2B2FF_0_0_6px_0]',
                  'before:absolute before:-inset-0.5 before:-z-20 before:rounded-md before:bg-[linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),radial-gradient(30.74%_144.53%_at_59.44%_100%,#FFFFFF_2.5%,#A7BBFF_21.5%,rgba(183,165,255,0.2)_100%)]',
                  'lg:h-[46px] sm:w-[320px] sm:pl-4 2xs:w-[280px]'
                )}
              >
                <span className="font-mono font-medium 2xs:text-sm">{leftItem.code}</span>
                <Button
                  className="h-9 sm:px-2.5"
                  theme="white-filled"
                  size="xs"
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
                <div
                  className="absolute -top-0.5 right-px h-[3px] w-[144px] bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] opacity-70 mix-blend-plus-lighter blur-[2px]"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-[3px] left-[155px] h-[3px] w-[144px] before:absolute before:inset-0 before:bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] before:opacity-60 before:blur-[5px] after:absolute after:inset-0 after:bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] after:opacity-50 after:mix-blend-plus-lighter after:blur-[2px]"
                  aria-hidden
                />
                <img
                  className="pointer-events-none absolute bottom-[-105px] left-[-69px] z-0 max-w-none"
                  src={codeDots}
                  width={482}
                  height={206}
                  alt=""
                  loading="lazy"
                  aria-hidden
                />
              </div>
            )}
            <div className="flex gap-x-7 sm:gap-x-5">
              {leftItem.text && (
                <Button
                  className="px-5 2xs:h-10 2xs:px-4 2xs:text-xs"
                  theme="white-filled"
                  size="sm"
                  to={leftItem.link}
                  rel={leftItem.rel}
                  target={leftItem.target}
                >
                  {leftItem.text}
                </Button>
              )}
              <Button
                className="px-5 2xs:h-10 2xs:px-4 2xs:text-xs"
                theme="gray-outline"
                size="sm"
                to={rightItem.link}
                rel={rightItem.rel}
                target={rightItem.target}
              >
                {rightItem.text}
              </Button>
            </div>
          </div>
        </div>
        <img
          className="pointer-events-none absolute bottom-[-435px] left-[-357px] z-0 max-w-none md:left-1/2 md:-translate-x-1/2"
          src={background}
          width={1523}
          height={1012}
          alt=""
          loading="lazy"
          aria-hidden
        />
      </div>
    </section>
  );
};

CtaWithForm.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  leftItem: PropTypes.shape({
    code: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
  }).isRequired,
  rightItem: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }).isRequired,
};

CtaWithForm.defaultProps = {
  className: '',
};

export default CtaWithForm;