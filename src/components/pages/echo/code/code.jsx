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
    <section className="code mt-[206px] lg:mt-36 md:mt-[116px] sm:mt-20">
      <div className="container-lg px-8 min-h-[836px] relative lg:max-w-5xl lg:min-h-[692px] md:max-w-3xl md:min-h-[535px] sm:min-h-[324px]">
        <h2 className="text-[52px] leading-none tracking-snug font-medium text-transparent max-w-[500px] bg-clip-text bg-[linear-gradient(360deg,rgba(104,181,215,1)_-19.23%,#FFFFFF_30.54%)] ml-[42px] lg:text-5xl lg:ml-8 md:text-4xl md:max-w-md md:ml-0 sm:text-[32px]">
          Developer-first with&nbsp;product in mind
        </h2>
        <ul className="flex justify-end gap-x-7 font-medium text-[15px] text-[#CAE9FF]/60 leading-snug mt-8 pr-8 lg:mt-5 lg:gap-x-6 md:text-sm md:mt-4 md:pr-0 md:gap-x-[22px] sm:justify-start sm:mt-[30px]">
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
        <div className="relative lg:mx-auto sm:max-w-80 sm:mx-auto">
          <SyntaxHighlighter
            className="echo-code pl-[42px] mt-[70px] scrollbar-hidden text-sm font-normal lg:mt-[62px] lg:pl-[35px] lg:text-xs md:mt-[53px] md:pl-[26px] sm:text-[10px] sm:mt-11 sm:overflow-y-scroll sm:ml-2 sm:pl-[7px] sm:mr-1.5 sm:[mask-image:linear-gradient(270deg,rgba(255,255,255,0.5)_0%,#FFFFFF_11.33%)]"
            language="javascript"
            useInlineStyles={false}
            renderer={customRenderer}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
          <StaticImage
            className="!absolute bottom-[-85px] right-0 -z-10 w-[1252px] lg:bottom-[-60px] lg:w-[1044px] md:!hidden"
            src="./images/code-background.png"
            alt=""
            width={1252}
            height={766}
            quality={100}
          />
          <StaticImage
            className="!absolute !hidden -z-10 md:!inline-block md:w-[775px] md:bottom-[-46px] md:left-[-61px] sm:!hidden"
            src="./images/code-background-tablet.png"
            alt=""
            width={775}
            height={633}
            quality={100}
          />
          <StaticImage
            className="!absolute !hidden -z-10 sm:!inline-block sm:w-[351px] sm:bottom-[-31px] sm:-left-7"
            src="./images/code-background-mobile.png"
            alt=""
            width={351}
            height={453}
            quality={100}
          />
        </div>
        <div
          className="absolute left-[-90px] top-[90px] h-[348px] w-[490px] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#3BDCFF_27.2%,#69B7FF_80.5%,#4759FF_100%)] opacity-15 blur-3xl scale-[1.5] -z-20 pointer-events-none will-change-transform lg:w-[408px] lg:h-[290px] md:w-[300px] md:h-[212px] sm:w-[136px] sm:h-[96px] sm:left-[-20px] sm:top-[120px]"
          aria-hidden
        />
        <div
          className="absolute right-[-200px] top-[-200px] h-[712px] w-[733px] rounded-[50%] bg-[#4474F2] opacity-10 blur-3xl scale-[1.3] -z-20 pointer-events-none will-change-transform lg:w-[611px] lg:h-[594px] md:w-[448px] md:h-[435px] md:top-[-50px] sm:w-[203px] sm:h-[196px] sm:top-[120px] sm:right-[-20px]"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default Code;
