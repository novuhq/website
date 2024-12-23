import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import dots from './images/dots.svg';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeSection = ({
  className,
  title,
  description,
  button,
  containerClassName,
  textContentClassName,
  code,
  codePosition,
  codeClassName,
  isPriorityImageLoading,
}) => (
  <section
    className={clsx(
      'code-section safe-paddings mt-60 lg:mt-[120px] md:mt-[100px] sm:mt-20',
      className
    )}
  >
    <div
      className={clsx('container-lg flex items-center gap-x-16 md:flex-col', containerClassName)}
    >
      <div
        className={clsx(
          'relative max-w-[672px] rounded-xl bg-code-block-border p-px lg:max-w-[532px] md:mt-12 md:w-full md:max-w-[672px] sm:max-w-[520px]',
          codeClassName
        )}
      >
        <div className="relative z-10 h-full w-full overflow-hidden rounded-xl bg-code-block-bg p-[22px] sm:p-4">
          <SyntaxHighlighter
            className="echo-code scrollbar-hidden relative z-10 overflow-y-scroll text-[13px] font-normal shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15),4px_4px_8px_0px_rgba(0,0,0,0.1),-2px_-2px_10px_0px_rgba(4,9,15,0.1)] [mask-image:linear-gradient(270deg,rgba(255,255,255,0.5)_0%,#FFFFFF_11.33%)] lg:text-xs sm:text-[10px] [&_code]:!block"
            language="javascript"
            useInlineStyles={false}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
          <div
            className="pointer-events-none absolute right-[-130px] top-[-260px] h-[464px] w-[724px] rotate-[158deg] rounded-[50%] bg-[#BBCBFB] opacity-40 mix-blend-soft-light blur-3xl sm:right-1/2 sm:translate-x-1/2"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[-40px] top-[-140px] h-[221px] w-[466px] rotate-[158deg] rounded-[50%] bg-[#B8C9FF] opacity-80 mix-blend-soft-light blur-3xl sm:right-1/2 sm:translate-x-1/2"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[-55px] top-[-120px] h-[145px] w-[417px] rotate-[161deg] rounded-[50%] bg-[#E0E8FF] opacity-60 mix-blend-soft-light blur-3xl sm:right-1/2 sm:translate-x-1/2"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[-110px] top-[-145px] h-[130px] w-[481px] rotate-[161deg] rounded-[50%] bg-[#E0E8FF] opacity-80 mix-blend-soft-light blur-3xl sm:right-1/2 sm:translate-x-1/2"
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute right-2.5 top-0 z-20 h-px w-[500px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)] opacity-30 mix-blend-plus-lighter blur-sm sm:right-0 sm:w-full"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-2.5 top-0 z-20 h-px w-[500px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)] opacity-40 mix-blend-plus-lighter blur-[2px] sm:right-0 sm:w-full"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-2.5 top-0 z-20 h-px w-[500px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)] opacity-50 mix-blend-plus-lighter blur-[1px] sm:right-0 sm:w-full"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-2.5 top-0 z-20 h-px w-[500px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)] opacity-50 mix-blend-plus-lighter sm:right-0 sm:w-full"
          aria-hidden
        />
        <img
          className="absolute right-[-52px] top-[-102px] max-w-none sm:right-1/3 sm:translate-x-1/2"
          src={dots}
          alt=""
          width={482}
          height={206}
          loading={isPriorityImageLoading ? 'eager' : 'lazy'}
        />
        <div
          className="pointer-events-none absolute -top-2 right-[60px] h-[155px] w-[314px] rounded-[50%] bg-[#7599F5] opacity-30 blur-3xl sm:right-1/2 sm:translate-x-1/2"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-2 right-[60px] h-[155px] w-[314px] rounded-[50%] bg-[#7599F5] opacity-30 blur-3xl sm:right-1/2 sm:translate-x-1/2"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-2 right-[60px] h-[233px] w-[376px] rotate-[148deg] rounded-[50%] bg-[#4474F2] opacity-20 blur-3xl sm:right-1/2 sm:translate-x-1/2"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-[524px] w-[704px] rotate-[156deg] rounded-[50%] bg-[linear-gradient(354.24deg,#4474F2_4.81%,rgba(68,116,242,0.6)_95.42%)] opacity-20 blur-3xl lg:h-[424px] lg:w-[604px] sm:right-1/2 sm:translate-x-1/2"
          aria-hidden
        />
      </div>
      <div
        className={clsx(
          'md:order-first md:max-w-lg md:text-center',
          codePosition === 'right' && 'order-first',
          textContentClassName
        )}
      >
        <Heading
          className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
          tag="h2"
          size="xl"
        >
          {title}
        </Heading>
        <p className="mt-3 text-pretty text-lg tracking-snug text-gray-8 md:text-sm">
          {description}
        </p>
        {button && (
          <Button
            className="mt-8"
            theme="gray-outline"
            size="sm"
            to={button.link}
            rel={button.rel}
            target={button.target}
          >
            {button.label}
          </Button>
        )}
      </div>
    </div>
  </section>
);

CodeSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  textContentClassName: PropTypes.string,
  codeClassName: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
  code: PropTypes.string.isRequired,
  codePosition: PropTypes.oneOf(['left', 'right']),
  isPriorityImageLoading: PropTypes.bool,
};

CodeSection.defaultProps = {
  className: '',
  containerClassName: '',
  textContentClassName: '',
  codeClassName: '',
  button: null,
  codePosition: 'left',
  isPriorityImageLoading: false,
};

export default CodeSection;
