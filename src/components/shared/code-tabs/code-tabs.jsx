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

const classNamesCode =
  'h-full text-base text-secondary-2 overflow-auto scrollbar-hidden mt-8 md:text-sm sm:pr-6';

const CodeTabs = ({ className, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={clsx('overflow-hidden rounded-[20px] bg-black p-8 md:p-6 sm:pr-0', className)}
      aria-hidden
    >
      <ul className="scrollbar-hidden flex space-x-3 overflow-x-auto overflow-y-hidden">
        {items.map(({ name }, index) => (
          <li key={index}>
            <button
              className={clsx(
                'hover:bg-gray-9 block w-full cursor-pointer whitespace-nowrap rounded-[50px] border border-gray-4 bg-black py-2.5 px-4 text-sm uppercase leading-none text-white transition-colors duration-200',
                activeIndex === index && '!border-white !bg-white !text-black'
              )}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      <div className="sm:pr-6">
        <SyntaxHighlighter
          className={clsx(classNamesCode, 'sm:hidden')}
          language={items[activeIndex].language}
          useInlineStyles={false}
          showLineNumbers
        >
          {items[activeIndex].code}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          className={clsx(classNamesCode, 'hidden sm:block')}
          language={items[activeIndex].language}
          useInlineStyles={false}
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
