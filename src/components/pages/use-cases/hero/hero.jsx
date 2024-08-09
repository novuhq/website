import copyToClipboard from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';
import buttonClick from 'utils/use-landing-simple-tracking';

const Hero = ({ title, description, link, code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!isCopied) {
      copyToClipboard(code, { onCopy: setIsCopied(true) });
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
    <section className="safe-paddings relative overflow-hidden pb-10 pt-34 lg:pb-16 lg:pt-32 md:pt-[104px] sm:pb-10 sm:pt-[95px]">
      <div className="container relative z-10 flex flex-col items-center">
        <Heading
          className="text-[52px] mx-auto max-w-[920px] text-center font-medium leading-denser lg:text-5xl md:text-4xl sm:text-[30px]"
          tag="h1"
          theme="white"
        >
          {title}
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-book leading-tight text-white/70 lg:mt-5 lg:max-w-xl md:mt-4 md:max-w-lg sm:mt-3">
          {description}
        </p>
        <div className="flex justify-center gap-x-8 mt-12 md:mt-7 sm:flex-col sm:items-center">
          <div className="w-[392px] h-[54px] pl-5 pr-2 relative flex items-center justify-between rounded-md bg-black border border-transparent bg-clip-border before:absolute before:-z-20 before:-inset-0.5 before:rounded-md before:bg-pink-yellow-gradient lg:h-[46px] sm:pl-4 sm:w-[320px]">
            <span className="font-mono font-medium">{code}</span>
            <Button
              className="min-w-[88px] h-10 text-sm lg:h-[34px] sm:min-w-[34px]"
              theme="white-filled"
              onClick={() => {
                handleCopy();
                buttonClick('copy_command', { type: 'usecase' });
              }}
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
          </div>
          <Button
            className="text-sm h-14 min-w-[148px] -mt-px lg:h-12 sm:border-none sm:h-auto sm:text-[13px] sm:text-primary-1 sm:underline sm:underline-offset-[6px] sm:mt-[18px]"
            theme="gray-outline"
            to={link.url}
            target={link.target}
            onClick={buttonClick('book_a_call', { type: 'usecase' })}
          >
            {link.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
  }).isRequired,
  code: PropTypes.string.isRequired,
};

export default Hero;
