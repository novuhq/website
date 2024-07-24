import copyToClipboard from 'copy-to-clipboard';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';
import buttonClick from 'utils/use-landing-simple-tracking';

import background from './images/background.svg';

const TITLE = 'Get started now';

const DESCRIPTION =
  'Create and send your first code-based notification in minutes&nbsp;before your coffee gets cold.';

const LINK = {
  text: 'Book Session',
  url: 'https://notify.novu.co/meetings/novuhq/notifications-45min?utm_campaign=website-homeCTA',
};

const CODE = 'npx novu@latest dev';

const Cta = () => {
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
    <section className="cta mt-[244px] mb-[118px] lg:mt-[204px] lg:mb-[104px] md:mt-[124px] md:mb-[100px] sm:mt-20">
      <div className="container-sm relative">
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[44px] leading-denser tracking-snug font-medium max-w-4xl lg:text-4xl md:text-[32px]">
            {TITLE}
          </h2>
          <p
            className="max-w-md text-center text-[17px] leading-snug font-book text-gray-9 mt-3.5 md:text-base md:max-w-sm"
            dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
          />
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
              className="text-sm h-14 min-w-[160px] -mt-px lg:h-12 sm:hover:bg-transparent sm:max-w-none sm:border-none sm:h-auto sm:text-[13px] sm:text-primary-1 sm:underline sm:underline-offset-[6px] sm:mt-[18px]"
              theme="gray-outline"
              to={LINK.url}
              onClick={buttonClick('book_a_call', { type: 'homepage' })}
            >
              {LINK.text}
            </Button>
          </div>
        </div>
        <img
          className="absolute max-w-none bottom-[-545px] left-[-557px] pointer-events-none z-0"
          src={background}
          width={2015}
          height={1269}
          alt=""
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Cta;
