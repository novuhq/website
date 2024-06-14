import copyToClipboard from 'copy-to-clipboard';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';

import background from './images/background.svg';

const CODE = 'npx novu-labs@latest echo';

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
    <section className="cta mt-[244px] mb-[118px]">
      <div className="container-sm relative">
        <div className="flex flex-col items-center">
          <h2 className="text-[44px] leading-denser tracking-snug font-medium max-w-4xl">
            Get started now
          </h2>
          <p className="max-w-md text-center text-[17px] leading-snug font-book text-gray-9 mt-3.5">
            Create and send your first code-based notification in&nbsp;less than five minutes.
          </p>
          <div className="flex justify-center gap-x-8 mt-12">
            <div className="w-[392px] h-[54px] pl-5 pr-2 relative flex items-center justify-between rounded-md bg-black border border-transparent bg-clip-border before:absolute before:-z-20 before:-inset-0.5 before:rounded-md before:bg-[linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),radial-gradient(30.74%_144.53%_at_59.44%_100%,#FFFFFF_2.5%,#A7BBFF_21.5%,rgba(183,165,255,0.2)_100%)]">
              <span className="font-mono font-medium">{CODE}</span>
              <Button
                className="min-w-[88px] h-10 text-sm"
                theme="white-filled"
                onClick={handleCopy}
              >
                {isCopied ? 'Copied!' : 'Copy'}
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
              className="text-sm h-14 min-w-[148px] -mt-px"
              theme="gray-outline"
              to="https://novu.co/"
            >
              Book a demo
            </Button>
          </div>
        </div>
        <img
          className="absolute max-w-none bottom-[-545px] left-[-557px] pointer-events-none -z-10"
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
