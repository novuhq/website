import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import dots from './images/dots.svg';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeSection = ({ title, description, button, code, codePosition }) => (
  <section className="code-section safe-paddings mt-60 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-lg flex items-center gap-x-24">
      <div className="relative max-w-[672px] bg-code-block-border rounded-xl p-px">
        <div className="relative z-10 w-full h-full bg-code-block-bg rounded-xl p-[22px] overflow-hidden">
          <SyntaxHighlighter
            className="echo-code [&_code]:!block relative z-10 scrollbar-hidden text-[13px] font-normal shadow-[10px_10px_20px_0px_rgba(0,0,0,0.15),4px_4px_8px_0px_rgba(0,0,0,0.1),-2px_-2px_10px_0px_rgba(4,9,15,0.1)] [mask-image:linear-gradient(270deg,rgba(255,255,255,0.5)_0%,#FFFFFF_11.33%)] overflow-y-scroll"
            language="javascript"
            useInlineStyles={false}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
          <div
            className="absolute top-[-260px] right-[-130px] w-[724px] h-[464px] rotate-[158deg] mix-blend-soft-light opacity-40 blur-3xl rounded-[50%] bg-[#BBCBFB] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute top-[-140px] right-[-40px] w-[466px] h-[221px] rotate-[158deg] mix-blend-soft-light opacity-80 blur-3xl rounded-[50%] bg-[#B8C9FF] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute top-[-120px] right-[-55px] w-[417px] h-[145px] rotate-[161deg] mix-blend-soft-light opacity-60 blur-3xl rounded-[50%] bg-[#E0E8FF] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute top-[-145px] right-[-110px] w-[481px] h-[130px] rotate-[161deg] mix-blend-soft-light opacity-80 blur-3xl rounded-[50%] bg-[#E0E8FF] pointer-events-none"
            aria-hidden
          />
        </div>
        <div
          className="absolute z-20 top-0 right-2.5 opacity-30 mix-blend-plus-lighter blur-sm pointer-events-none w-[500px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)]"
          aria-hidden
        />
        <div
          className="absolute z-20 top-0 right-2.5 opacity-40 mix-blend-plus-lighter blur-[2px] pointer-events-none w-[500px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)]"
          aria-hidden
        />
        <div
          className="absolute z-20 top-0 right-2.5 opacity-50 mix-blend-plus-lighter blur-[1px] pointer-events-none w-[500px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)]"
          aria-hidden
        />
        <div
          className="absolute z-20 top-0 right-2.5 opacity-50 mix-blend-plus-lighter pointer-events-none w-[500px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)]"
          aria-hidden
        />
        <img
          className="absolute top-[-102px] right-[-52px]"
          src={dots}
          alt=""
          width={482}
          height={206}
        />
        <div
          className="absolute -top-2 right-[60px] opacity-30 pointer-events-none w-[314px] h-[155px] bg-[#7599F5] blur-3xl rounded-[50%]"
          aria-hidden
        />
        <div
          className="absolute -top-2 right-[60px] opacity-30 pointer-events-none w-[314px] h-[155px] bg-[#7599F5] blur-3xl rounded-[50%]"
          aria-hidden
        />
        <div
          className="absolute -top-2 rotate-[148deg] right-[60px] opacity-20 pointer-events-none w-[376px] h-[233px] bg-[#4474F2] blur-3xl rounded-[50%]"
          aria-hidden
        />
        <div
          className="absolute top-0 rotate-[156deg] right-0 opacity-20 pointer-events-none w-[704px] h-[524px] bg-[linear-gradient(354.24deg,#4474F2_4.81%,rgba(68,116,242,0.6)_95.42%)] blur-3xl rounded-[50%]"
          aria-hidden
        />
      </div>
      <div className={clsx(codePosition === 'right' && 'order-first')}>
        <Heading className="font-medium leading-denser tracking-snug" tag="h2" size="xl">
          {title}
        </Heading>
        <p className="text-[17px] leading-snug text-grey-9 mt-3">{description}</p>
        {button && (
          <Button className="h-14 text-sm px-6 mt-7" link={button.link} theme="gray-outline">
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
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  code: PropTypes.string.isRequired,
  codePosition: PropTypes.oneOf(['left', 'right']),
};

CodeSection.defaultProps = {
  button: null,
  codePosition: 'left',
};

export default CodeSection;
