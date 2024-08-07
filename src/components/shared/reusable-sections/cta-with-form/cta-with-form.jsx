import copyToClipboard from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';

import background from './images/background.svg';
import codeDots from './images/code-dots.svg';

const CtaWithForm = ({ title, description, leftItem, rightItem }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!isCopied && leftItem.code) {
      copyToClipboard(leftItem.code, { onCopy: setIsCopied(true) });
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
    <section className="cta-with-form relative safe-paddings mt-60 lg:mt-[204px] md:mt-[124px]">
      <div className="container-sm relative md:px-8 sm:w-full sm:px-5">
        <div className="relative z-10 flex flex-col items-center">
          <Heading
            className="leading-denser tracking-snug font-medium max-w-4xl lg:text-4xl md:text-[32px]"
            size="44"
            tag="h2"
          >
            {title}
          </Heading>
          <p className="max-w-md text-center text-[17px] leading-snug font-book text-gray-9 mt-3.5 md:text-base md:max-w-sm">
            {description}
          </p>
          <div className="flex justify-center gap-x-8 mt-12 md:mt-7 sm:flex-col sm:items-center">
            {leftItem.code && (
              <div className="w-[392px] h-[54px] pl-5 pr-2 relative flex items-center justify-between rounded-md bg-black border border-transparent bg-clip-border shadow-[#C2B2FF_0_0_6px_0] before:absolute before:-z-20 before:-inset-0.5 before:rounded-md before:bg-[linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),radial-gradient(30.74%_144.53%_at_59.44%_100%,#FFFFFF_2.5%,#A7BBFF_21.5%,rgba(183,165,255,0.2)_100%)] lg:h-[46px] sm:pl-4 sm:w-[320px]">
                <span className="font-mono font-medium">{leftItem.code}</span>
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
                <div
                  className="absolute -top-0.5 right-px w-[144px] h-[3px] blur-[2px] bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] mix-blend-plus-lighter opacity-70"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-[3px] left-[155px] w-[144px] h-[3px] before:absolute before:inset-0 before:bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] before:blur-[5px] before:opacity-60 after:absolute after:inset-0 after:bg-[linear-gradient(91.15deg,rgba(205,204,255,0)_2.67%,rgba(205,204,255,0.76156)_21.19%,#CDCCFF_60.95%,rgba(205,204,255,0)_93.27%)] after:blur-[2px] after:opacity-50 after:mix-blend-plus-lighter"
                  aria-hidden
                />
                <img
                  className="absolute max-w-none bottom-[-105px] left-[-69px] pointer-events-none z-0"
                  src={codeDots}
                  width={482}
                  height={206}
                  alt=""
                  loading="lazy"
                  aria-hidden
                />
              </div>
            )}
            {leftItem.text && (
              <Button
                className="text-sm h-14 min-w-[148px] -mt-px lg:h-12 sm:mb-4"
                theme="white-filled"
                to={leftItem.link}
              >
                {leftItem.text}
              </Button>
            )}
            <Button
              className="text-sm h-14 min-w-[148px] -mt-px lg:h-12 sm:border-none sm:h-auto sm:text-[13px] sm:text-primary-1 sm:underline sm:underline-offset-[6px] sm:mt-[18px]"
              theme="gray-outline"
              to={rightItem.link}
            >
              {rightItem.text}
            </Button>
          </div>
        </div>
        <img
          className="absolute max-w-none bottom-[-435px] left-[-357px] pointer-events-none z-0 md:left-1/2 md:-translate-x-1/2"
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  leftItem: PropTypes.shape({
    code: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  rightItem: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default CtaWithForm;
