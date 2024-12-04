import copyToClipboard from 'copy-to-clipboard';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';
import CheckIcon from 'icons/check.inline.svg';
import CopyIcon from 'icons/copy.inline.svg';

import background from './images/background.svg';

const TITLE = 'Get started now';

const DESCRIPTION =
  'Create and send your first code-based notification in&nbsp;less than five minutes.';

const LINK = {
  text: 'Book a demo',
  url: 'https://novu.co/',
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
    <section className="cta mb-[118px] mt-[244px] lg:mb-[104px] lg:mt-[204px] md:mb-[100px] md:mt-[124px] sm:mt-[188px]">
      <div className="container-sm relative md:px-8 sm:w-full sm:px-5">
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="max-w-4xl text-[44px] font-medium leading-denser tracking-snug lg:text-4xl md:text-[32px]">
            {TITLE}
          </h2>
          <p
            className="mt-3.5 max-w-md text-center text-[17px] font-book leading-snug text-gray-9 md:max-w-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
          />
          <div className="mt-12 flex justify-center gap-x-8 md:mt-7 sm:flex-col sm:items-center">
            <div className="relative flex h-[54px] w-[392px] items-center justify-between rounded-md border border-transparent bg-black bg-clip-border pl-5 pr-2 before:absolute before:-inset-0.5 before:-z-20 before:rounded-md before:bg-[linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),radial-gradient(30.74%_144.53%_at_59.44%_100%,#FFFFFF_2.5%,#A7BBFF_21.5%,rgba(183,165,255,0.2)_100%)] lg:h-[46px] sm:w-[320px] sm:pl-4">
              <span className="font-mono font-medium">{CODE}</span>
              <Button
                className="h-10 min-w-[88px] text-sm lg:h-[34px] sm:min-w-[34px]"
                theme="white-filled"
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
            </div>
            <Button
              className="-mt-px h-14 min-w-[148px] text-sm lg:h-12 sm:mt-[18px] sm:h-auto sm:border-none sm:text-[13px] sm:text-primary-1 sm:underline sm:underline-offset-[6px]"
              theme="gray-outline"
              to={LINK.url}
            >
              {LINK.text}
            </Button>
          </div>
        </div>
        <img
          className="pointer-events-none absolute bottom-[-545px] left-[-557px] z-0 max-w-none"
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
