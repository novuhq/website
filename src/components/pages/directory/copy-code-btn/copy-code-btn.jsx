import clsx from 'clsx';
import copyToClipboard from 'copy-to-clipboard';
import React, { useState, useEffect } from 'react';

import CheckIcon from 'icons/check-copied.inline.svg';
import CopyCodeIcon from 'icons/copy-code-icon.inline.svg';

const CopyCodeBtn = ({ codeText }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!isCopied && codeText) {
      copyToClipboard(codeText);
      setIsCopied(true);
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
    <button
      className={clsx(
        'absolute right-4 top-4 z-50 rounded border border-[#27272A] bg-[#09090B] p-1.5 text-[#A1A1AA] transition-colors duration-200 hover:text-[#fafafa]',
        isCopied && 'pointer-events-none'
      )}
      type="button"
      disabled={isCopied}
      aria-label={clsx(isCopied ? 'Copied' : 'Copy')}
      onClick={handleCopy}
    >
      {isCopied ? <CheckIcon className="[] w-3.5" /> : <CopyCodeIcon className="w-3.5" />}
    </button>
  );
};

export default CopyCodeBtn;
