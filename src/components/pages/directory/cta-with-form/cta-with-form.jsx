import clsx from 'clsx';
import copyToClipboard from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Button from 'components/shared/button';

const CtaWithForm = ({ title, code, className }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!isCopied && code) {
      copyToClipboard(code, { onCopy: setIsCopied(true) });
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
    <div className={clsx('relative z-10', className)}>
      <h2 className="text-[36px] font-medium leading-denser tracking-snug sm:text-[28px]">
        {title}
      </h2>
      <div className="mt-8 flex gap-5 md:mt-7 sm:mt-8">
        <div
          className={clsx(
            'relative flex h-12 w-full items-center justify-between rounded-md border border-transparent bg-black bg-clip-border pl-5 pr-1.5 shadow-[#C2B2FF_0_0_6px_0]',
            'before:absolute before:-inset-0.5 before:-z-20 before:rounded-md before:bg-[linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),radial-gradient(30.74%_144.53%_at_59.44%_100%,#FFFFFF_2.5%,#A7BBFF_21.5%,rgba(183,165,255,0.2)_100%)]',
            'lg:h-[46px] sm:flex-col sm:items-start sm:justify-center sm:pl-4'
          )}
        >
          <span className="font-mono font-medium">{code}</span>
          <Button
            className="h-9 w-[122px] sm:absolute sm:inset-x-0 sm:top-[calc(100%+18px)] sm:w-full sm:px-2.5"
            theme="white-filled"
            size="xs"
            onClick={handleCopy}
          >
            <span className="">{isCopied ? 'Copied!' : 'Clone'}</span>
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
      </div>
    </div>
  );
};

CtaWithForm.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

CtaWithForm.defaultProps = {
  className: '',
};

export default CtaWithForm;
