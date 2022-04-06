import clsx from 'clsx';
import copyToClipboard from 'copy-to-clipboard';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';

/* TODO: find a way to simplify the styles for applying a gradient border for the input field */

const inputBeforeClassNames =
  'before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:-z-10 before:-m-0.5 before:rounded-[inherit] before:bg-input-gradient';

const inputAfterClassNames =
  'after:absolute after:left-0 after:top-0 after:right-0 after:bottom-0 after:-z-20 after:-m-0.5 after:rounded-[inherit] after:bg-input-gradient after:blur-sm';

const InputWithCopying = ({ className, text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleButtonClick = () => {
    if (!isCopied) {
      copyToClipboard({ text }, { onCopy: setIsCopied(true) });
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
    <div
      className={clsx(
        'input-with-copying relative flex h-16 w-full items-center justify-between rounded-md border border-transparent bg-black bg-clip-border pl-5 pr-3',
        inputBeforeClassNames,
        inputAfterClassNames,
        className
      )}
    >
      <span className="input-text whitespace-nowrap font-mono text-lg !leading-none text-white">
        {text}
      </span>

      <Button className="relative" size="xs" theme="white-filled" onClick={handleButtonClick}>
        <span className={clsx({ 'opacity-0': isCopied })}>Copy</span>
        <span
          className={clsx('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0', {
            'opacity-100': isCopied,
          })}
        >
          Copied!
        </span>
      </Button>
    </div>
  );
};

InputWithCopying.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

InputWithCopying.defaultProps = {
  className: null,
};

export default InputWithCopying;
