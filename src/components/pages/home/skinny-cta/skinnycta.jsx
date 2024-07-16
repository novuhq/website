import copyToClipboard from 'copy-to-clipboard';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';
import buttonClick from 'utils/use-landing-simple-tracking';

// import background from './images/background.svg';

const TITLE = 'Send your first notification in minutes';
// const DESCRIPTION =
//  'Create and send your first code-based notification in&nbsp;before your coffee gets even cold.';

const CODE = 'npx novu@latest dev';

const SkinnyCTA = () => {
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
    <section className="cta my-[132px] lg:my-30 md:mt-24 sm:my-20">
      <div className="container-sm relative">
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[44px] leading-denser tracking-snug text-center font-medium max-w-4xl lg:text-4xl md:text-[32px]">
            {TITLE}
          </h2>
          <div className="flex justify-center gap-x-8 mt-12 md:mt-7 sm:flex-col sm:items-center">
            <div className="w-[392px] h-[54px] pl-5 pr-2 relative flex items-center justify-between rounded-md bg-black border border-transparent bg-clip-border before:absolute before:-z-20 before:-inset-0.5 before:rounded-md before:bg-[linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),radial-gradient(30.74%_144.53%_at_59.44%_100%,#FFFFFF_2.5%,#A7BBFF_21.5%,rgba(183,165,255,0.2)_100%)] lg:h-[46px] sm:pl-4 sm:w-[320px]">
              <span className="font-mono font-medium">{CODE}</span>
              <Button
                className="min-w-[88px] h-10 text-sm lg:h-[34px] sm:min-w-[34px]"
                theme="white-filled"
                onClick={() => {
                  handleCopy();
                  buttonClick('copy_command', { type: 'homepage' });
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
              size="lg"
              {...LINKS.getStarted}
              onClick={buttonClick('book_a_call', { type: 'homepage' })}
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinnyCTA;
