import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import dots from './images/dots.png';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeSectionNew = ({
  className,
  title,
  description,
  button,
  code,
  codeBlockPosition,
  codeBlockSize,
  isPriorityImageLoading,
}) => (
  <section className={clsx('code-section-new safe-paddings', className)}>
    <div
      className={clsx(
        'flex items-center md:flex-col',
        codeBlockSize === 'lg' && 'container max-w-[1470px] gap-x-[122px] lg:gap-x-16',
        codeBlockSize === 'md' && 'container-lg gap-x-[64px]',
        codeBlockPosition === 'right' && 'justify-end'
      )}
    >
      <div
        className={clsx(
          'relative w-full rounded-[20px] bg-[#05050B] bg-code-underlay-border p-px lg:max-w-[532px] md:mt-12 md:w-full md:max-w-[672px] sm:max-w-[520px]',
          codeBlockSize === 'md' && 'max-w-[672px]',
          codeBlockSize === 'lg' && 'max-w-[806px] xl:max-w-[672px]'
        )}
      >
        <div className="code-block-bg relative z-10 h-full w-full overflow-hidden rounded-[20px] p-5 [transform:translateZ(0)] sm:p-4">
          <div
            className="border-linear pointer-events-none absolute inset-5 z-10 rounded-xl blur-lg border-image-green-code-border sm:inset-4"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-3.5 top-5 z-20 h-px w-full max-w-[590px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#BAFFFF_42.53%,rgba(255,255,255,0)_100%)] mix-blend-plus-lighter blur-[1px] xl:max-w-[430px] sm:top-4 sm:max-w-[calc(100%-32px)]"
            aria-hidden
          />
          <SyntaxHighlighter
            className="echo-code scrollbar-hidden relative z-10 overflow-y-scroll rounded-xl bg-inside-code-underlay-green p-[22px] text-[14px] font-normal shadow-[-2px_-2px_10px_0px_rgba(4,9,15,0.1),4px_4px_8px_0px_rgba(0,0,0,0.1),10px_10px_20px_0px_rgba(0,0,0,0.15)] [mask-image:linear-gradient(270deg,transparent_1%,#FFFFFF_15%)] lg:text-xs sm:text-[10px] [&_code]:!block"
            language="javascript"
            useInlineStyles={false}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
          <div
            className="pointer-events-none absolute left-[-94px] top-[50px] h-[328px] w-[1295px] rotate-[-147deg] rounded-[50%] bg-[linear-gradient(270deg,#D2FCFF_13.37%,rgba(210,252,255,0.10)_45.79%)] opacity-30 mix-blend-plus-lighter blur-[100px] sm:left-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[-38px] top-[-42px] h-[209px] w-[867px] rotate-[-147deg] rounded-[50%] bg-[linear-gradient(270deg,#97E6FF_13.17%,rgba(151,230,255,0.10)_90.73%)] opacity-20 mix-blend-color-dodge blur-[100px] sm:left-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[-69px] top-[-27px] h-[335px] w-[1067px] rotate-[-147deg] rounded-[50%] bg-[linear-gradient(270deg,#97CDFF_0%,rgba(151,205,255,0.10)_46.49%)] opacity-50 mix-blend-overlay blur-[100px] sm:left-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[-176px] top-[-168px] h-[742px] w-[1472px] rotate-[-147deg] rounded-[50%] bg-[linear-gradient(270deg,#2666E3_0%,rgba(38,102,227,0.10)_39.76%,rgba(38,102,227,0.00)_75.86%)] opacity-10 blur-[100px] sm:left-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[-176px] top-[-168px] h-[1468px] w-[1382px] rotate-[-147deg] rounded-full bg-[#6498FF] opacity-[0.03] blur-[100px] sm:left-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-0 top-[-16px] h-[32px] w-[448px] rounded-[50%] bg-[#67DBFF] opacity-25 mix-blend-plus-lighter blur-[50px] sm:left-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[16px] top-[-11px] h-[23px] w-[400px] rounded-[50%] bg-[#E6FCFF] opacity-20 mix-blend-plus-lighter blur-[25px] sm:left-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-[#05050B]"
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute left-0 top-[-16px] h-[32px] w-[448px] rounded-[50%] bg-[#67DBFF] opacity-25 mix-blend-plus-lighter blur-[50px] sm:left-0"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[16px] top-[-11px] h-[23px] w-[400px] rounded-[50%] bg-[#E6FCFF] opacity-20 mix-blend-plus-lighter blur-[25px] sm:left-0"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-7 top-0 z-20 h-px w-[324px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#BAFFFF_42.53%,rgba(255,255,255,0)_100%)] mix-blend-plus-lighter blur-[5px] sm:left-0 sm:w-[300px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-7 top-0 z-20 h-px w-[324px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#BAFFFF_42.53%,rgba(255,255,255,0)_100%)] mix-blend-plus-lighter blur-[2px] sm:left-0 sm:w-[300px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-7 top-0 z-20 h-px w-[324px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)] mix-blend-plus-lighter blur-[1px] sm:left-0 sm:w-[300px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-7 top-0 z-20 h-px w-[324px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_10%,#FFFFFF_42.53%,rgba(255,255,255,0)_100%)] mix-blend-plus-lighter sm:left-0 sm:w-[300px]"
          aria-hidden
        />
        <img
          className="absolute left-0 top-[-102px] max-w-none"
          src={dots}
          alt=""
          width={482}
          height={206}
          loading={isPriorityImageLoading ? 'eager' : 'lazy'}
        />
        <div
          className="pointer-events-none absolute right-[-250px] top-[-102px] h-[712px] w-[733px] rounded-full bg-[#4474F2] opacity-[0.11] blur-[100px] lg:scale-90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[-125px] top-[-52px] h-[348px] w-[490px] rounded-full bg-[radial-gradient(92.52%_89.86%_at_62.86%_11.06%,#3BDCFF_27.2%,#69B7FF_80.5%,#4759FF_100%)] opacity-[0.25] blur-[100px] lg:scale-90"
          aria-hidden
        />
      </div>
      <div
        className={clsx(
          'lg:max-w-none md:order-first md:max-w-lg md:text-center',
          codeBlockPosition === 'right' && 'order-first xl:max-w-none',
          codeBlockSize === 'lg' && 'max-w-[416px]',
          codeBlockSize === 'md' && 'max-w-[480px]'
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
            theme={button.theme || 'gray-outline'}
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

CodeSectionNew.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    rel: PropTypes.string,
    target: PropTypes.string,
    theme: PropTypes.oneOf(['gray-outline', 'white-filled']),
  }),
  code: PropTypes.string.isRequired,
  codeBlockPosition: PropTypes.oneOf(['left', 'right']),
  codeBlockSize: PropTypes.oneOf(['lg', 'md']),
  isPriorityImageLoading: PropTypes.bool,
};

CodeSectionNew.defaultProps = {
  className: 'mt-60 lg:mt-[120px] md:mt-[100px] sm:mt-20',
  button: null,
  codeBlockPosition: 'left',
  isPriorityImageLoading: false,
  codeBlockSize: 'md',
};

export default CodeSectionNew;
