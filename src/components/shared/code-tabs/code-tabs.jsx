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
    <div
      className={clsx(
        'overflow-hidden rounded-[20px] bg-black p-8 lg:rounded-2xl md:p-6 sm:p-4 sm:px-0',
        className
      )}
      aria-hidden
    >
      <ul className="scrollbar-hidden flex items-center space-x-2.5 overflow-x-auto overflow-y-hidden sm:space-x-2 sm:px-4">
        {items.map(({ name }, index) => (
          <li key={index}>
            <button
              className={clsx(
                'hover:bg-gray-9 block h-[34px] w-full cursor-pointer whitespace-nowrap rounded-[50px] border border-gray-4 bg-black px-4 text-sm uppercase leading-none text-gray-5 transition-colors duration-200 hover:text-white md:h-8 md:text-xs sm:h-7 sm:px-3.5',
                activeIndex === index && '!border-white !bg-white !text-black'
              )}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              {name}
            </button>
          </li>
        ))}
        <li className="!ml-2.5 flex items-center whitespace-nowrap text-sm font-light leading-none text-secondary-2 before:mr-3 before:content-['—'] sm:text-xs">
          Coming Soon...
        </li>
      </ul>
      <div className="scrollbar-hidden mt-8 h-full overflow-auto text-base md:mt-6 md:!text-sm sm:mt-5 sm:px-4">
        <SyntaxHighlighter
          language={items[activeIndex].language}
          useInlineStyles={false}
          showLineNumbers
        >
          {items[activeIndex].code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

CodeTabs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      language: PropTypes.oneOf(['javascript', 'ruby', 'python', 'go', 'php', 'bash']).isRequired,
    })
  ).isRequired,
};

CodeTabs.defaultProps = {
  className: null,
};

export default CodeTabs;
