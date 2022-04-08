import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import ruby from 'react-syntax-highlighter/dist/esm/languages/prism/ruby';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('ruby', ruby);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('bash', bash);

const CodeTabs = ({ className, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={clsx('rounded-[20px] bg-black lg:rounded-2xl', className)} aria-hidden>
      <ul className="scrollbar-hidden flex items-center space-x-2.5 overflow-x-auto overflow-y-hidden pl-8 pt-8 after:h-px after:w-8 after:flex-shrink-0 md:pl-6 md:pt-6 md:after:w-6 sm:space-x-2 sm:pl-4 sm:pt-4 sm:after:w-4">
        {items.map(({ name, code }, index) => (
          <li key={index}>
            <button
              className={clsx(
                'hover:bg-gray-9 block h-[34px] w-full cursor-pointer whitespace-nowrap rounded-[50px] border border-gray-4 bg-black px-4 text-sm uppercase leading-none text-gray-5 transition-colors duration-200 md:h-8 md:text-xs sm:h-7 sm:px-3.5',
                {
                  '!border-white !bg-white !text-black': activeIndex === index,
                  'cursor-default': !code,
                  'hover:text-white': code,
                }
              )}
              type="button"
              disabled={!code}
              onClick={() => setActiveIndex(index)}
            >
              {name}
            </button>
          </li>
        ))}
        {!items.every((item) => item.code) && (
          <li className="!ml-2.5 flex items-center whitespace-nowrap text-sm font-light leading-none text-secondary-2 before:mr-3 before:content-['—'] sm:text-xs">
            Coming Soon...
          </li>
        )}
      </ul>

      <SyntaxHighlighter
        className="scrollbar-hidden h-full overflow-auto p-8 text-base md:p-6 md:!text-sm sm:p-4"
        language={items[activeIndex].language}
        useInlineStyles={false}
        showLineNumbers
      >
        {items[activeIndex].code}
      </SyntaxHighlighter>
    </div>
  );
};

CodeTabs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string,
      language: PropTypes.oneOf(['javascript', 'ruby', 'python', 'go', 'php', 'bash']).isRequired,
    })
  ).isRequired,
};

CodeTabs.defaultProps = {
  className: null,
};

export default CodeTabs;
