import clsx from 'clsx';
import { m, LazyMotion, AnimatePresence, domAnimation } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

import createCustomElement from './create-custom-element';

const COMMENT_WORKFLOW_CODE = `import { workflow, CronExpression } from '@novu/framework';
import { z } from 'zod';
import { render } from '@react-email/components';

const weeklyComments = @@workflow@workflowTooltip@@('weekly-comments', async (@@event@weeklyCommentsEventTooltip@@) => {
  const digest = await event.step.digest('digest-comments', (controls) => ({
    cron: controls.schedule
  }), { controlSchema: z.object({ schedule: z.nativeEnum(CronExpression) }) });

  await event.step.@@email@stepTooltip@@('digest-email', async (controls) => ({
    subject: controls.subject,
    body: render(<WeeklyDigestEmail {...@@controls@controlsTooltip@@} events={digest.events} />)
  }), {
    @@skip@skipTooltip@@: () => !digest.events.length,
    controlSchema: z.object({
      subject: z.string().default('Hi {{subscriber.firstName}} - Acme Comments'),
      openAiModel: z.enum(['gpt-3.5-turbo', 'gpt-4o']).default('gpt-4o'),
      aiPrompt: z.string().default('Produce a concise comment digest'),
    })
  });
}, { payloadSchema: z.object({ name: z.string(), comment: z.string() }) });

await weeklyComments.@@trigger@triggerTooltip@@({
  payload: { name: 'John', comment: 'Are you free to give me a call?' },
  to: 'jane@acme.com'
});`;

const OTP_WORKFLOW_CODE = `import { workflow } from '@novu/framework';
import { z } from 'zod';
import { Html, Body, Text, render } from '@react-email/components';

const oneTimePassword = @@workflow@workflowTooltip@@('one-time-password', async (@@event@otpEventTooltip@@) => {
  await event.step.sms('send-sms', ({ product }) => ({
    body: \`Your Acme \${product} verification code is \${event.payload.code}.\`,
  }), { controlSchema: z.object({ product: z.string().default('Shop') }) });

  await event.step.email('send-email', () => ({
    subject: \`Acme Code\${controls.codeInSubject ? \`: \${event.payload.code}\` : ''}\`,
    body: @@render@renderTooltip@@(
      <Html>
        <Body>
          <Text>Hi {event.subscriber.firstName},<Text>
          <Text>Your OTP code is {event.@@payload@otpPayloadTooltip@@.code}.</Text>
        </Body>
      </Html>
    ),
  }), { @@controlSchema@controlSchemaTooltip@@: z.object({ codeInSubject: z.boolean().default(false) }) });
}, { payloadSchema: z.object({ code: z.string().length(6) }) });

await oneTimePassword.trigger({
  payload: { code: '123456' },
  to: [{ email: 'john@acme.com', phone: '+1234567890' }]
});`;

const TABS = [
  {
    title: 'AI Digest',
    code: COMMENT_WORKFLOW_CODE,
    image: (
      <StaticImage
        className="!absolute pointer-events-none bottom-[-45px] -right-2.5 z-10 w-[368px] lg:w-[307px] lg:-right-2 lg:bottom-[-23px] md:!hidden"
        src="./images/ai-digest.png"
        alt=""
        width={368}
        height={616}
        quality={100}
      />
    ),
  },
  {
    title: 'One-Time Password',
    code: OTP_WORKFLOW_CODE,
    image: (
      <StaticImage
        className="!absolute pointer-events-none bottom-[-45px] -right-2.5 z-10 w-[368px] lg:w-[307px] lg:-right-2 lg:bottom-[-23px] md:!hidden"
        src="./images/one-time-password.png"
        alt=""
        width={368}
        height={616}
        quality={100}
      />
    ),
  },
];

const TITLE = 'Built by developers,<br>used by the rest of the team';
const DESCRIPTION =
  'Unapologetically built for development teams to provide notifications infrastructure to their product and business. Eliminate the expense and burden of building and maintaining home-grown notifications infrastructure, and still keep all of the flexibility you need and want.';

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
  const [activeTab, setActiveTab] = useState(TABS[0].title);

  return (
    <section className="code mt-[206px] lg:mt-36 md:mt-[116px] sm:mt-20">
      <div className="container-lg px-8 min-h-[836px] relative lg:max-w-5xl lg:min-h-[692px] md:max-w-3xl md:min-h-[535px] sm:min-h-[324px]">
        <h2
          className="relative z-10 text-[44px] leading-none tracking-snug font-medium text-transparent max-w-[700px] bg-clip-text bg-[linear-gradient(360deg,rgba(104,181,215,1)_-19.23%,#FFFFFF_30.54%)] ml-[42px] lg:text-5xl lg:ml-8 md:text-4xl md:max-w-md md:ml-0 sm:text-[32px]"
          dangerouslySetInnerHTML={{ __html: TITLE }}
        />
        <p className="mt-4 text-[17px] leading-snug font-book text-gray-9 max-w-[800px] ml-[42px] lg:ml-8 md:ml-0 lg:mt-2.5 md:text-base md:mt-3">
          {DESCRIPTION}
        </p>
        <ul className="relative z-10 flex justify-end gap-x-7 font-medium text-[15px] text-[#CAE9FF]/60 leading-snug mt-8 pr-8 lg:mt-5 lg:gap-x-6 md:text-sm md:mt-4 md:pr-0 md:gap-x-[22px] sm:justify-start sm:mt-[30px]">
          {TABS.map(({ title }, index) => (
            <li key={index}>
              <button
                className={clsx(
                  'relative hover:text-[#FFE071] transition-colors duration-300 after:absolute after:w-full after:h-px after:left-0 after:-bottom-1.5 after:bg-gradient-to-br after:from-[#FFE071] after:to-[#FFE071] after:bg-no-repeat after:bg-[length:0%_1px] after:transition-all after:duration-300 hover:after:bg-[length:100%_1px]',
                  {
                    'text-[#FFE071] after:bg-[length:100%_1px]': title === activeTab,
                  }
                )}
                type="button"
                onClick={() => setActiveTab(title)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
        <div className="relative z-10 h-[546px] mt-[70px] lg:mt-[62px] lg:mx-auto lg:h-[468px] md:mt-[53px] sm:mt-11 sm:max-w-80 sm:h-[390px] sm:mx-auto">
          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              {TABS.map(
                ({ title, code }, index) =>
                  activeTab === title && (
                    <m.div
                      className="absolute z-20 top-0 left-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.4 } }}
                      exit={{ opacity: 0 }}
                      key={index}
                    >
                      <SyntaxHighlighter
                        className="echo-code relative z-10 pl-[42px] scrollbar-hidden text-sm font-normal lg:pl-[35px] lg:text-xs md:pl-[26px] sm:text-[10px] sm:overflow-y-scroll sm:ml-2 sm:pl-[7px] sm:mr-1.5 sm:[mask-image:linear-gradient(270deg,rgba(255,255,255,0.5)_0%,#FFFFFF_11.33%)]"
                        style={{
                          marginTop: '20px',
                        }}
                        language="javascript"
                        useInlineStyles={false}
                        renderer={customRenderer}
                        showLineNumbers
                      >
                        {code}
                      </SyntaxHighlighter>
                    </m.div>
                  )
              )}
            </AnimatePresence>
          </LazyMotion>
          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              {TABS.map(
                ({ title, image }, index) =>
                  activeTab === title && (
                    <m.div
                      className="absolute z-10 top-0 left-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.4 } }}
                      exit={{ opacity: 0 }}
                      key={index}
                    >
                      {image}
                    </m.div>
                  )
              )}
            </AnimatePresence>
          </LazyMotion>

          <StaticImage
            className="!absolute pointer-events-none bottom-[-73px] right-0 z-0 w-[1252px] lg:bottom-[-46px] lg:w-[1044px] md:!hidden"
            src="./images/code-background.png"
            alt=""
            width={1252}
            height={766}
            quality={100}
          />
          <StaticImage
            className="!absolute pointer-events-none !hidden z-0 md:!inline-block md:w-[775px] md:bottom-[-28px] md:left-[-61px] sm:!hidden"
            src="./images/code-background-tablet.png"
            alt=""
            width={775}
            height={633}
            quality={100}
          />
          <StaticImage
            className="!absolute pointer-events-none !hidden z-0 sm:!inline-block sm:w-[351px] sm:bottom-[-20px] sm:-left-7"
            src="./images/code-background-mobile.png"
            alt=""
            width={351}
            height={453}
            quality={100}
          />
        </div>
        <div
          className="absolute left-[-90px] top-[90px] h-[348px] w-[490px] rounded-[50%] bg-[radial-gradient(88.94%_88.94%_at_62.86%_11.06%,#3BDCFF_27.2%,#69B7FF_80.5%,#4759FF_100%)] opacity-15 blur-3xl scale-[1.5] z-0 pointer-events-none will-change-transform lg:w-[408px] lg:h-[290px] md:w-[300px] md:h-[212px] sm:w-[136px] sm:h-[96px] sm:left-[-20px] sm:top-[120px]"
          aria-hidden
        />
        <div
          className="absolute right-[-200px] top-[-200px] h-[712px] w-[733px] rounded-[50%] bg-[#4474F2] opacity-10 blur-3xl scale-[1.3] z-0 pointer-events-none will-change-transform lg:w-[611px] lg:h-[594px] md:w-[448px] md:h-[435px] md:top-[-50px] sm:w-[203px] sm:h-[196px] sm:top-[120px] sm:right-[-20px]"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default Code;
