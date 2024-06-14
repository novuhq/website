import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

import createCustomElement from './create-custom-element';

const CODE = `import { Echo } from '@novu/echo';

const echo = new @@Echo@echoTooltip@@();

const commentWorkflow = echo.workflow('comment-on-post', async (@@event@eventTooltip@@) => {
  const inAppResponse = await event.step.inApp('notify-user', async () => ({
    body: renderReactComponent(event.@@payload@payloadTooltip@@.postId)
  }));

  const { events } = await event.step.digest('1 week');

  await event.@@step@stepTooltip@@.email('weekly-comments', async (inputs) => {
    return {
      subject: \`Weekly post comments (\${events.length + 1})\`,
      body: renderReactEmail(inputs, events)
    };
  }, { skip: () => inAppResponse.@@seen@seenTooltip@@ });
}, { payloadSchema: z.object({ postId: z.string() }) }
);

// Use the same familiar syntax to send a notification
commentWorkflow.@@trigger@triggerTooltip@@({
  to: { subscriberId: 'joe@acme.com' },
  payload: { postId: '12345' }
});`;

const TABS = [
  {
    title: 'Digest Events',
    code: CODE,
  },
  {
    title: 'SMS',
    code: CODE,
  },
  {
    title: 'Delay',
    code: CODE,
  },
  {
    title: 'In-app',
    code: CODE,
  },
];

const customRenderer = ({ rows, stylesheet, useInlineStyles }) =>
  rows.map((node, i) =>
    createCustomElement({
      node,
      stylesheet,
      useInlineStyles,
      key: `code-segement${i}`,
    })
  );

SyntaxHighlighter.registerLanguage('javascript', javascript);

const Code = () => {
  const [code, setCode] = useState(TABS[0].code);
  const [activeTab, setActiveTab] = useState(TABS[0].title);

  return (
    <section className="code mt-[204px]">
      <div className="container-lg px-8 min-h-[836px] relative">
        <h2 className="text-[52px] leading-none tracking-snug font-medium text-transparent max-w-[500px] bg-clip-text bg-[linear-gradient(360deg,rgba(104,181,215,1)_-19.23%,#FFFFFF_30.54%)] ml-[42px]">
          Developer-first with&nbsp;product in mind
        </h2>
        <ul className="flex justify-end gap-x-7 font-medium text-[15px] text-[#CAE9FF]/60 leading-snug mt-8 pl-8">
          {TABS.map(({ title, code }, index) => (
            <li key={index}>
              <button
                className={clsx(
                  'relative hover:text-[#FFE071] transition-colors duration-300 after:absolute after:w-full after:h-px after:left-0 after:-bottom-1.5 after:bg-gradient-to-br after:from-[#FFE071] after:to-[#FFE071] after:bg-no-repeat after:bg-[length:0%_1px] after:transition-all after:duration-300 hover:after:bg-[length:100%_1px]',
                  {
                    'text-[#FFE071] after:bg-[length:100%_1px]': title === activeTab,
                  }
                )}
                type="button"
                onClick={() => {
                  setCode(code);
                  setActiveTab(title);
                }}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
        <SyntaxHighlighter
          className="echo-code pl-[42px] mt-[70px] scrollbar-hidden text-sm font-normal"
          language="javascript"
          useInlineStyles={false}
          renderer={customRenderer}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
        <StaticImage
          className="!absolute bottom-0 right-6 -z-10 w-[1262px]"
          src="./images/code-background.png"
          alt=""
          width={1262}
          height={766}
        />
        <div
          className="absolute bottom-0 right-6 w-[1152px] h-[652px] rounded-[20px] bg-[linear-gradient(180deg,rgba(5,5,11,0)_47.56%,rgba(5,5,11,0.1)_74.21%,#05050B_97.67%)] pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute left-[-90px] top-[90px] h-[348px] w-[490px] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#3BDCFF_27.2%,#69B7FF_80.5%,#4759FF_100%)] opacity-15 blur-3xl scale-[1.5] -z-20 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute right-[-200px] top-[-200px] h-[712px] w-[733px] rounded-[50%] bg-[#4474F2] opacity-10 blur-3xl scale-[1.3] -z-20 pointer-events-none"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default Code;
