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

const weeklyComments = @@workflow@workflowTooltip@@('weekly-comments', async (@@event@weeklyCommentsEventTooltip@left@@) => {
  await event.step.@@inApp@stepTooltip@@('inbox-notification', async () => ({
    subject: \`**\${event.@@payload@commentPayloadTooltip@@.userName}** commented in project\`,
    body: event.payload.comment,
  }));

  const digest = await event.step.digest('digest-comments', (controls) => ({
    cron: controls.schedule
  }), { controlSchema: z.object({ schedule: z.nativeEnum(CronExpression) }) });

  await event.step.email('digest-email', async (controls) => ({
    subject: controls.subject,
    body: render(<WeeklyDigestEmail {...@@controls@controlsTooltip@left@@} events={digest.events} />)
  }), {
    @@skip@skipTooltip@@: () => !digest.events.length,
    controlSchema: z.object({
      subject: z.string().default('Hi {{subscriber.firstName}} - Acme Comments'),
      openAiModel: z.enum(['gpt-3.5-turbo', 'gpt-4o']).default('gpt-4o'),
      aiPrompt: z.string().default('Produce a concise comment digest'),
    })
  });
}, { payloadSchema: z.object({ userName: z.string(), comment: z.string() }) });

await weeklyComments.@@trigger@triggerTooltip@@({
  payload: { userName: 'John Doe', comment: 'Are you free to give me a call?' },
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
    title: 'AI digest',
    code: COMMENT_WORKFLOW_CODE,
    image: (
      <StaticImage
        className="pointer-events-none !absolute -right-2.5 bottom-[-45px] z-10 w-[368px] lg:-right-2 lg:bottom-[-23px] lg:w-[307px] md:!hidden"
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
        className="pointer-events-none !absolute -right-2.5 bottom-[-45px] z-10 w-[368px] lg:-right-2 lg:bottom-[-23px] lg:w-[307px] md:!hidden"
        src="./images/one-time-password.png"
        alt=""
        width={368}
        height={616}
        quality={100}
      />
    ),
  },
];

const TITLE = 'Complete control and flexibility';
const DESCRIPTION =
  'Optionally extend Novu with the Novu Framework for all the power of home-grown notifications infrastructure with complete flexibility to implement any workflow imaginable.';

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
    <section className="code mt-[176px] lg:mt-36 md:mt-[116px] sm:mt-[140px]">
      <div className="container-lg relative min-h-[836px] px-8 lg:min-h-[692px] lg:w-full lg:max-w-5xl md:min-h-[535px] md:max-w-3xl sm:min-h-[324px] sm:px-5">
        <h2
          className="relative z-10 ml-1 max-w-[700px] text-[48px] font-medium leading-denser tracking-snug text-white lg:ml-8 lg:text-5xl md:ml-0 md:max-w-lg md:text-4xl sm:text-[32px]"
          dangerouslySetInnerHTML={{ __html: TITLE }}
        />
        <p className="ml-1 mt-5 max-w-[768px] text-[18px] font-normal leading-normal tracking-snug text-gray-8 lg:ml-8 lg:mt-2.5 md:ml-0 md:mt-3 md:text-base">
          {DESCRIPTION}
        </p>
        <ul className="relative z-10 mt-8 flex justify-end gap-x-7 pr-7 text-[15px] leading-snug text-[#CAE9FF]/60 lg:mt-5 lg:gap-x-6 md:mt-4 md:gap-x-[22px] md:pr-0 md:text-sm sm:mt-[30px] sm:justify-start">
          {TABS.map(({ title }, index) => (
            <li key={index}>
              <button
                className={clsx(
                  'relative transition-colors duration-300 after:absolute after:-bottom-[9px] after:left-0 after:h-px after:w-full after:bg-gradient-to-br after:from-[#FFE071] after:to-[#FFE071] after:bg-[length:0%_1px] after:bg-no-repeat after:transition-all after:duration-300 hover:text-[#FFE071] hover:after:bg-[length:100%_1px]',
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
        <div className="relative z-10 mt-[70px] h-[546px] lg:mx-auto lg:mt-[62px] lg:h-[468px] md:mt-[53px] sm:mx-auto sm:mt-11 sm:h-[390px] sm:max-w-[572px] sm-xs:max-w-80">
          <LazyMotion features={domAnimation}>
            <AnimatePresence>
              {TABS.map(
                ({ title, code }, index) =>
                  activeTab === title && (
                    <m.div
                      className="absolute left-0 top-0 z-20 h-full w-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.4 } }}
                      exit={{ opacity: 0 }}
                      key={index}
                    >
                      <SyntaxHighlighter
                        className="echo-code scrollbar-hidden relative z-10 pl-[42px] text-sm font-normal before:absolute before:inset-x-0 before:bottom-0 before:z-20 before:h-30 before:bg-gradient-to-b before:from-transparent before:to-[#05050B] before:transition-opacity before:duration-300 lg:pl-[35px] lg:text-xs md:pl-[26px] sm:ml-2 sm:mr-1.5 sm:overflow-y-scroll sm:pl-[7px] sm:text-[10px] sm:[mask-image:linear-gradient(270deg,transparent_1%,#FFFFFF_25%)]"
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
                      className="absolute left-0 top-0 z-10 h-full w-full"
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
            className="code-background pointer-events-none !absolute bottom-[-73px] right-0 z-0 w-[1252px] lg:bottom-[-46px] lg:w-[1044px] md:!hidden"
            src="./images/code-background.png"
            alt=""
            width={1252}
            height={766}
            quality={100}
            aria-hidden
          />
          <StaticImage
            className="code-background-tablet pointer-events-none !absolute z-0 !hidden md:bottom-[-28px] md:left-[-61px] md:!inline-block md:w-[775px] sm:w-[652px] sm-xs:!hidden"
            src="./images/code-background-tablet.png"
            alt=""
            width={775}
            height={633}
            quality={100}
            aria-hidden
          />
          <StaticImage
            className="code-background-mobile pointer-events-none !absolute z-0 !hidden sm-xs:-left-7 sm-xs:bottom-[-18px] sm-xs:!inline-block sm-xs:w-[351px]"
            src="./images/code-background-mobile.png"
            alt=""
            width={351}
            height={453}
            quality={100}
            aria-hidden
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
