import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

import Button from 'components/shared/button';
import InboxComponent from 'components/shared/reusable-sections/inbox/inbox-component';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeWithInbox = ({ className, title, description, button, tabs, isMainPage }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={clsx(
        'code-section safe-paddings mt-60 flex flex-col items-center lg:mt-[120px] md:mt-[100px] sm:mt-20',
        className
      )}
    >
      <div className="container flex flex-col items-center">
        <h2
          className="text-center text-[48px] font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p className="mt-3 max-w-[746px] text-center text-lg leading-normal tracking-snug text-gray-8 md:text-[16px] sm:mt-3 sm:max-w-none">
            {description}
          </p>
        )}
        {button && (
          <Button
            className="mb-16 mt-8 md:mb-[48px] md:mt-7 sm:mb-[44px] sm:mt-[24px]"
            theme={button.theme}
            size="sm"
            to={button.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {button.label}
          </Button>
        )}
      </div>
      <div
        className={clsx(
          'container-lg grid max-w-[1248px] grid-cols-2 items-center gap-x-8 xl:px-8 lg:grid-cols-[404px_auto] md:max-w-[576px] md:grid-cols-[512px] md:gap-y-[16px] sm:grid-cols-1 sm:px-5'
        )}
      >
        <div
          className={clsx(
            'relative z-10 w-full max-w-[672px] rounded-xl bg-[linear-gradient(180deg,#303755_-2.71%,#1A1E2E_45.57%)] p-px backdrop-blur-[32px] lg:max-w-[434px] md:w-full md:max-w-full sm:max-w-[398px]'
          )}
        >
          <div className="relative z-10 h-full w-full overflow-hidden rounded-xl bg-home-code-block px-[22px] pb-[20px] pt-0 sm:px-[16px] sm:pb-[16px]">
            <div className="flex gap-4 md:-ml-3 md:gap-5">
              {tabs.map((tab, index) => (
                <button
                  className={clsx(
                    'relative flex items-center gap-1 p-[10px] leading-none text-[#C3CEF1] hover:opacity-80 md:text-[14px] sm:text-[12px]',
                    activeIndex === index && 'pointer-events-none text-[#DEE5F7]'
                  )}
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={tab.icon} alt="" className="h-4 w-4 sm:h-[14px] sm:w-[14px]" />
                  {tab.title}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="sliding-bar"
                      className="absolute inset-x-0 -bottom-px z-10 h-px bg-[#BDC6E0]"
                      transition={{ duration: 0.3, ease: 'linear' }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="absolute inset-x-0 -z-10 h-[1px] bg-[linear-gradient(90deg,#3F4E8B_0%,rgba(57,69,119,0.8)_57.07%)]" />
            <LazyMotion features={domAnimation}>
              <AnimatePresence mode="wait">
                <m.div
                  className="mt-4 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={activeIndex}
                >
                  <SyntaxHighlighter
                    className="echo-code scrollbar-hidden relative z-10 overflow-y-scroll text-[13px] font-normal lg:text-xs sm:text-[10px] [&_code]:!block"
                    language="javascript"
                    useInlineStyles={false}
                    showLineNumbers
                  >
                    {tabs[activeIndex].code}
                  </SyntaxHighlighter>
                </m.div>
              </AnimatePresence>
            </LazyMotion>
            <div
              className="pointer-events-none absolute -left-[142px] -top-[208px] h-[437px] w-[470px] rounded-[50%] bg-[#B8C9FF] opacity-70 mix-blend-soft-light blur-3xl md:-bottom-[156px] md:-left-[138px] md:top-[initial]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[-40px] top-[-140px] h-[622px] w-[776px] rotate-[21deg] rounded-[50%] bg-[#BBCBFB] opacity-30 mix-blend-soft-light blur-3xl md:-bottom-[170px] md:left-[-260px] md:top-[initial] md:-rotate-[21deg]"
              aria-hidden
            />
          </div>
        </div>
        <InboxComponent className="z-0" isMainPage={isMainPage} />
      </div>
    </section>
  );
};

CodeWithInbox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
  code: PropTypes.string.isRequired,
  codePosition: PropTypes.oneOf(['left', 'right']),
  isPriorityImageLoading: PropTypes.bool,
  btnStyle: PropTypes.oneOf(['gray-outline', 'white-filled']),
};

CodeWithInbox.defaultProps = {
  className: '',
  containerClassName: '',
  textContentClassName: '',
  codeClassName: '',
  button: null,
  codePosition: 'left',
  isPriorityImageLoading: false,
  btnStyle: 'gray-outline',
};

export default CodeWithInbox;
