import PropTypes from 'prop-types';
import React from 'react';
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

const Code = ({ language, content }) => (
  <SyntaxHighlighter
    className="scrollbar-hidden h-full overflow-auto p-8 text-base font-normal md:p-6 md:!text-sm sm:p-4"
    language={language}
    useInlineStyles={false}
    showLineNumbers
  >
    {content}
  </SyntaxHighlighter>
);

Code.propTypes = {
  language: PropTypes.oneOf(['javascript', 'ruby', 'python', 'go', 'php', 'bash']).isRequired,
  content: PropTypes.string.isRequired,
};

export default Code;
