import React from 'react';

import CopyCodeIcon from 'icons/copy-code-icon.inline.svg';

const CopyCodeBtn = ({ codeText }) => (
    <button
      className="absolute right-4 top-4 z-50 rounded border border-[#27272A] bg-[#09090B] p-1.5 text-[#A1A1AA] transition-colors duration-200 hover:text-[#fafafa]"
      type="button"
      aria-label="Copy code"
      onClick={() => navigator.clipboard.writeText(codeText)}
    >
      <CopyCodeIcon className="w-3.5" />
    </button>
  );

export default CopyCodeBtn;
