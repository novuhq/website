import clsx from 'clsx';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';
import { domAnimation } from 'framer-motion/dom';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeTabs = ({ codeBlocks }) => {
  const [activeTab, setActiveTab] = useState(codeBlocks[0].language);
  const activeCode = codeBlocks.find((block) => block.language === activeTab);

  return (
    <div className="overflow-hidden rounded-md border border-gray-2 bg-gray-1 text-white">
      <div className="flex border-b border-gray-2">
        {codeBlocks.map(({ language }) => (
          <button
            key={language}
            className={clsx(
              'relative px-[14px] py-[12px] text-[13px] font-medium leading-none tracking-snug',
              activeTab === language
                ? 'cursor-default text-primary-1'
                : 'text-white hover:text-primary-2'
            )}
            type="button"
            onClick={() => setActiveTab(language)}
          >
            {language}
            {activeTab === language && (
              <span className="absolute inset-x-0 bottom-0 h-px w-full bg-primary-1" aria-hidden />
            )}
          </button>
        ))}
      </div>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            key={activeTab}
            layout
          >
            <SyntaxHighlighter
              className="scrollbar-hidden relative z-10 overflow-y-scroll bg-[#000000] p-4 text-[14px] font-normal lg:text-xs sm:text-[10px] [&_code]:!block"
              language={activeCode.language.toLowerCase()}
              useInlineStyles={false}
              showLineNumbers
            >
              {activeCode.code.trim()}
            </SyntaxHighlighter>
            <button
              className="hover:bg-gray-700 absolute right-2 top-2 z-50 rounded px-2 py-1 text-xs text-white"
              type="button"
              onClick={() => navigator.clipboard.writeText(activeCode.code)}
            >
              Copy
            </button>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

export default CodeTabs;
