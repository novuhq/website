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

const TITLE = 'Developer-first with&nbsp;product in mind';

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
      <div className="container-lg relative min-h-[836px] px-8 lg:min-h-[692px] lg:w-full lg:max-w-5xl md:min-h-[535px] md:max-w-3xl sm:min-h-[324px] sm:px-5">
        <h2
          className="relative z-10 ml-[42px] max-w-[500px] bg-[linear-gradient(360deg,rgba(104,181,215,1)_-19.23%,#FFFFFF_30.54%)] bg-clip-text text-[52px] font-medium leading-none tracking-snug text-transparent lg:ml-8 lg:text-5xl md:ml-0 md:max-w-md md:text-4xl sm:text-[32px]"
          dangerouslySetInnerHTML={{ __html: TITLE }}
        />
        <ul className="relative z-10 mt-8 flex justify-end gap-x-7 pr-8 text-[15px] font-medium leading-snug text-[#CAE9FF]/60 lg:mt-5 lg:gap-x-6 md:mt-4 md:gap-x-[22px] md:pr-0 md:text-sm sm:mt-[30px] sm:justify-start">
          {TABS.map(({ title, code }, index) => (
            <li key={index}>
              <button
                className={clsx(
                  'relative transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-gradient-to-br after:from-[#FFE071] after:to-[#FFE071] after:bg-[length:0%_1px] after:bg-no-repeat after:transition-all after:duration-300 hover:text-[#FFE071] hover:after:bg-[length:100%_1px]',
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
        <div className="relative z-10 lg:mx-auto sm:mx-auto sm:max-w-[572px] sm-xs:max-w-80">
          <SyntaxHighlighter
            className="echo-code scrollbar-hidden relative z-10 mt-[70px] pl-[42px] text-sm font-normal lg:mt-[62px] lg:pl-[35px] lg:text-xs md:mt-[53px] md:pl-[26px] sm:ml-2 sm:mr-1.5 sm:mt-11 sm:overflow-y-scroll sm:pl-[7px] sm:text-[10px] sm:[mask-image:linear-gradient(270deg,rgba(255,255,255,0.5)_0%,#FFFFFF_11.33%)]"
            language="javascript"
            useInlineStyles={false}
            renderer={customRenderer}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
          <StaticImage
            className="pointer-events-none !absolute bottom-[-85px] right-0 z-0 w-[1252px] lg:bottom-[-60px] lg:w-[1044px] md:!hidden"
            src="./images/code-background.png"
            alt=""
            width={1252}
            height={766}
            quality={100}
          />
          <StaticImage
            className="pointer-events-none !absolute z-0 !hidden md:bottom-[-46px] md:left-[-61px] md:!inline-block md:w-[775px] sm:w-[652px] sm-xs:!hidden"
            src="./images/code-background-tablet.png"
            alt=""
            width={775}
            height={633}
            quality={100}
          />
          <StaticImage
            className="pointer-events-none !absolute z-0 !hidden sm-xs:-left-7 sm-xs:bottom-[-31px] sm-xs:!inline-block sm-xs:w-[351px]"
            src="./images/code-background-mobile.png"
            alt=""
            width={351}
            height={453}
            quality={100}
          />
        </div>
        <div
          className="pointer-events-none absolute left-[-90px] top-[90px] z-0 h-[348px] w-[490px] scale-[1.5] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#3BDCFF_27.2%,#69B7FF_80.5%,#4759FF_100%)] opacity-15 blur-3xl will-change-transform lg:h-[290px] lg:w-[408px] md:h-[212px] md:w-[300px] sm:left-[-20px] sm:top-[120px] sm:h-[96px] sm:w-[136px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[-200px] top-[-200px] z-0 h-[712px] w-[733px] scale-[1.3] rounded-[50%] bg-[#4474F2] opacity-10 blur-3xl will-change-transform lg:h-[594px] lg:w-[611px] md:top-[-50px] md:h-[435px] md:w-[448px] sm:right-[-20px] sm:top-[120px] sm:h-[196px] sm:w-[203px]"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default Code;
