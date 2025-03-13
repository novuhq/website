import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Bento from 'components/shared/bento';
import Layout from 'components/shared/layout';
import CodeSectionNew from 'components/shared/reusable-sections/code-section-new';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SectionWithCards from 'components/shared/reusable-sections/section-with-cards';
import SectionWithLogos from 'components/shared/reusable-sections/section-with-logos';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import astroLogo from 'images/reusable-sections/section-with-logos/astro.svg';
import expressLogo from 'images/reusable-sections/section-with-logos/express.svg';
import honoLogo from 'images/reusable-sections/section-with-logos/hono.svg';
import koaLogo from 'images/reusable-sections/section-with-logos/koa.svg';
import launchDarklyLogo from 'images/reusable-sections/section-with-logos/launch-darkly.svg';
import mjmlLogo from 'images/reusable-sections/section-with-logos/mjml.svg';
import nestjsLogo from 'images/reusable-sections/section-with-logos/nestjs.svg';
import reactEmailLogo from 'images/reusable-sections/section-with-logos/react-email.svg';
import remixLogo from 'images/reusable-sections/section-with-logos/remix.svg';
import twilioLogo from 'images/reusable-sections/section-with-logos/twilio.svg';

const CODE_SECTION = `import { workflow, CronExpression } from '@novu/framework';
import { z } from 'zod';
import { render } from '@react-email/components';

const weeklyComments = workflow('weekly-comments', async (event) => {
  await event.step.inApp('inbox-notification', async () => ({
    subject: \`**\${event.payload.userName}** commented in project\`,
    body: event.payload.comment,
  }));

  const digest = await event.step.digest('digest-comments', (controls) => ({
    cron: controls.schedule
  }), { controlSchema: z.object({ schedule: z.nativeEnum(CronExpression) }) });

  await event.step.email('digest-email', async (controls) => ({
    subject: controls.subject,
    body: render(<WeeklyDigestEmail {...controls} events={digest.events} />)
  }), {
    skip: () => !digest.events.length,
    controlSchema: z.object({
      subject: z.string().default('Hi {{subscriber.firstName}} - Acme Comments'),
      openAiModel: z.enum(['gpt-3.5-turbo', 'gpt-4o']).default('gpt-4o'),
      aiPrompt: z.string().default('Produce a concise comment digest'),
    })
  });
}, { payloadSchema: z.object({ userName: z.string(), comment: z.string() }) });

await weeklyComments.trigger({
  payload: { userName: 'John Doe', comment: 'Are you free to give me a call?' },
  to: 'jane@acme.com'
});`;

const SECTION_WITH_CARDS = [
  {
    title: 'Superior DX',
    description:
      'In-code customization, local IDE support, and native GitOps integrations streamline workflow management, debugging, and process alignment.',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../images/reusable-sections/section-with-cards/dx.png"
      />
    ),
  },
  {
    title: 'Complete flexibility',
    description:
      'Build complex notification workflows that run in your environment boundary, safely access local data, and model literally any business requirement.',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../images/reusable-sections/section-with-cards/flexibility.png"
      />
    ),
  },
  {
    title: 'Integration ready',
    description:
      'Integrates with popular application development frameworks, content templating engines, CRMs, and delivery providers.',
    image: (
      <StaticImage
        className="size-full object-cover"
        src="../images/reusable-sections/section-with-cards/integration.png"
      />
    ),
  },
];

const SECTION_WITH_LOGOS = [
  {
    title: 'mjml',
    src: mjmlLogo,
  },
  {
    title: 'NestJS',
    src: nestjsLogo,
  },
  {
    title: 'Remix',
    src: remixLogo,
  },
  {
    title: 'Astro',
    src: astroLogo,
  },
  {
    title: 'Hono',
    src: honoLogo,
  },
  {
    title: 'Twilio',
    src: twilioLogo,
  },
  {
    title: 'React Email',
    src: reactEmailLogo,
  },
  {
    title: 'Launch Darkly',
    src: launchDarklyLogo,
  },
  {
    title: 'Express',
    src: expressLogo,
  },
  {
    title: 'Koa',
    src: koaLogo,
  },
];

const SECTION_BENTO_CLASS_NAME = {
  CARDS_IMAGE_CLASS_NAME_DESKTOP:
    '!absolute w-fit h-fit inset-0 z-0 rounded-xl lg:h-full lg:w-auto [&_img]:lg:!w-auto [&_img]:lg:!-translate-x-1/2 [&_img]:lg:!left-1/2 sm:!hidden',
  CARDS_IMAGE_CLASS_NAME_MOBILE: '!hidden !absolute w-full inset-0 z-0 rounded-xl sm:!inline-block',
};

const SECTION_BENTO = {
  className: 'mt-[192px] md:mt-[88px]',
  title: 'Notification infrastructure<br/>for modern teams',
  titleClassName:
    '!text-[40px] lg:!text-4xl md:!text-[32px] sm:!text-3xl sm:text-center sm:mx-auto',
  cardsListClassName: 'mt-[63px]',
  cards: [
    {
      title: 'Bring your own code',
      description:
        'Define workflows as code, re-use components, and deploy confidently while developing in your IDE of choice.',
      className:
        'order-1 bg-[radial-gradient(60.42%_86.05%_at_24.74%_100%,_#1B2637_0%,_#27222F_100%)]',
      image: (
        <StaticImage
          className={SECTION_BENTO_CLASS_NAME.CARDS_IMAGE_CLASS_NAME_DESKTOP}
          src="../components/shared/bento/images/code.jpg"
          alt=""
          width={768}
          height={380}
          quality={100}
          aria-hidden
        />
      ),
      imageMobile: (
        <StaticImage
          className={SECTION_BENTO_CLASS_NAME.CARDS_IMAGE_CLASS_NAME_MOBILE}
          src="../components/shared/bento/images/code-mobile.jpg"
          alt=""
          width={320}
          height={250}
          quality={100}
          aria-hidden
        />
      ),
    },
    {
      title: 'Type-Safe',
      description:
        'Bring your own JSON schemas for full end-to-end validation across all your team members.',
      className: 'order-2 bg-[#27222F]',
      image: (
        <StaticImage
          className={SECTION_BENTO_CLASS_NAME.CARDS_IMAGE_CLASS_NAME_DESKTOP}
          src="../components/shared/bento/images/type-safe.jpg"
          alt=""
          width={416}
          height={380}
          quality={100}
          aria-hidden
        />
      ),
      imageMobile: (
        <StaticImage
          className={SECTION_BENTO_CLASS_NAME.CARDS_IMAGE_CLASS_NAME_MOBILE}
          src="../components/shared/bento/images/type-safe-mobile.jpg"
          alt=""
          width={320}
          height={250}
          quality={100}
          aria-hidden
        />
      ),
    },
    {
      title: 'Observable and Scalable',
      description:
        'Novu handles any volume, any channel,&nbsp;and any team for mission-critical notifications.',
      className: 'order-4 bg-[#27222F] sm:order-3',
      image: (
        <StaticImage
          className={SECTION_BENTO_CLASS_NAME.CARDS_IMAGE_CLASS_NAME_DESKTOP}
          src="../components/shared/bento/images/debug.jpg"
          alt=""
          width={768}
          height={380}
          quality={100}
          aria-hidden
        />
      ),
      imageMobile: (
        <StaticImage
          className={SECTION_BENTO_CLASS_NAME.CARDS_IMAGE_CLASS_NAME_MOBILE}
          src="../components/shared/bento/images/debug-mobile.jpg"
          alt=""
          width={320}
          height={250}
          quality={100}
          aria-hidden
        />
      ),
    },
    {
      title: 'Consistent',
      description: 'Notification infrastructure belongs in your CI/CD release cycle.',
      className:
        'order-3 bg-[radial-gradient(100%_100%_at_67.91%_0%,#243349_9.84%,#1E2334_22.52%)] sm:order-4',
      image: (
        <StaticImage
          className={SECTION_BENTO_CLASS_NAME.CARDS_IMAGE_CLASS_NAME_DESKTOP}
          src="../components/shared/bento/images/git-notification.jpg"
          alt=""
          width={416}
          height={380}
          quality={100}
          aria-hidden
        />
      ),
      imageMobile: (
        <StaticImage
          className={SECTION_BENTO_CLASS_NAME.CARDS_IMAGE_CLASS_NAME_MOBILE}
          src="../components/shared/bento/images/git-notification-mobile.jpg"
          alt=""
          width={320}
          height={250}
          quality={100}
          aria-hidden
        />
      ),
    },
  ],
};

const FrameworkPage = () => (
  <Layout mainClassName="overflow-hidden pt-16 sm:pt-14 bg-[#05050B]">
    <h1 className="sr-only">Framework</h1>
    <CodeSectionNew
      code={CODE_SECTION}
      className="mb-[222px] mt-[134px] lg:mb-[134px] md:mb-[145px] md:mt-[100px] sm:mt-20"
      title="Code-backed workflows can accomplish anything"
      description="Optionally extend your Novu workflows with a locally-run Novu Framework engine. Define workflows in code, tie into local data, apply advanced logic, and solve for any notifications requirement imaginable."
      codeBlockSize="lg"
      button={{
        label: 'Try Novu',
        link: 'https://dashboard-v2.novu.co/?utm_campaign=ws_framework',
        theme: 'white-filled',
      }}
      isPriorityImageLoading
    />
    <SectionWithCards title="Made for developers" cards={SECTION_WITH_CARDS} />
    <Bento {...SECTION_BENTO} />
    <CtaWithForm
      className="mb-[250px] mt-[235px] text-center lg:mb-[204px] md:mb-[124px]"
      title="Get started now"
      description="Create complex workflows, access local data, and reuse existing content templates with Novu Framework."
      leftItem={{
        text: 'Try Novu',
        link: 'https://dashboard-v2.novu.co/auth/sign-up?utm_campaign=ws_framework',
      }}
      rightItem={{
        text: 'Contact us',
        link: 'https://novu.co/contact-us/?utm_campaign=ws_framework',
      }}
    />
    <SectionWithLogos
      containerSize="md"
      title="Integrates with anything"
      description="Built from scratch to integrate your existing tooling and content with the Novu Platform."
      logos={SECTION_WITH_LOGOS}
    />
    <TextWithPicture
      title="Complete workflow control"
      description="Development teams have complete control over customizations and workflows, and what other teams can safely edit or update."
      className="mt-[238px] lg:mt-[100px] md:mt-[88px] sm:mt-[60px]"
      image={
        <div className="absolute left-1/2 top-1/2 -translate-x-[53%] -translate-y-[48%] xl:-translate-y-[45%] lg:-translate-x-[54%] lg:-translate-y-[50%] md:-translate-x-[56%] md:-translate-y-[52%] sm:top-0 sm:-translate-x-[55%] sm:-translate-y-[156px]">
          <StaticImage
            className="pointer-events-none w-[1198px] lg:w-[1012px] md:w-[816px] sm:w-[700px]"
            src="../images/pages/framework/workflow.png"
            alt=""
            width={1198}
            height={1198}
            quality={90}
          />
        </div>
      }
      imageClassName="relative w-full h-full !overflow-visible"
      button={{
        label: 'Complete Control',
        link: 'https://docs.novu.co/framework/overview?utm_campaign?ws_framework',
      }}
      theme="imageRight"
    />
    <TextWithPicture
      title="Self service access for non-technical teams"
      description="Product teams can safely make targeted content updates without breaking workflow or business logic. Reduce developer interrupts for things like content updates."
      className="mt-[380px] lg:mt-[184px] md:mt-[110px] sm:mt-[410px]"
      image={
        <div className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-[47%] xl:-translate-x-[53%] lg:-translate-x-[55%] lg:-translate-y-[47%] md:-translate-x-[52%] md:-translate-y-[52%] sm:top-0 sm:-translate-y-[176px] sm-xs:-translate-y-[156px]">
          <StaticImage
            className="pointer-events-none w-[1128px] xl:w-[850px] lg:w-[600px] md:w-[506px] sm-xs:w-[440px]"
            src="../images/pages/framework/self-service.png"
            alt=""
            width={1128}
            height={1177}
            quality={90}
          />
        </div>
      }
      imageClassName="relative w-full h-full !overflow-visible"
      button={{
        label: 'Do More With Controls',
        link: 'https://docs.novu.co/framework/controls?utm_campaign?ws_framework',
      }}
    />
    <TextWithPicture
      title="Reuse existing content and providers"
      description="Integrate with legacy systems and platforms, and easily include content from any source and in any format."
      className="mt-[414px] lg:mt-[184px] md:mt-[88px] sm:mt-[280px]"
      image={
        <div className="absolute left-1/2 top-1/2 -translate-x-[44%] -translate-y-[40%] lg:-translate-x-[43%] lg:-translate-y-[45%] md:-translate-x-[46%] md:-translate-y-[52%] sm:top-0 sm:-translate-y-[142px] sm-xs:-translate-y-[126px]">
          <StaticImage
            className="pointer-events-none w-[1024px] lg:w-[720px] md:w-[580px] sm:w-[600px] sm-xs:w-[540px]"
            src="../images/pages/framework/reuse.png"
            alt=""
            width={1024}
            height={813}
            quality={90}
          />
        </div>
      }
      imageClassName="relative w-full h-full !overflow-visible"
      button={{
        label: 'Reuse my content',
        link: 'https://docs.novu.co/framework/content/react-email',
      }}
      theme="imageRight"
    />
    <TextWithPicture
      title="Locally run, cloud powered"
      description="Your local Novu Framework integrates with Novu Cloud to power delivery, management, and analytics."
      className="mb-[100px] mt-[402px] lg:mt-[184px] md:mb-[50px] md:mt-[88px] sm:mb-[220px] sm:mt-[260px]"
      image={
        <div className="absolute left-1/2 top-1/2 -translate-x-[42%] -translate-y-[51%] xl:-translate-x-[38%] xl:-translate-y-[45%] lg:-translate-x-[39%] lg:-translate-y-[56%] md:-translate-x-[38%] sm:top-0 sm:-translate-y-[288px]">
          <StaticImage
            className="pointer-events-none w-[1081px] xl:w-[850px] lg:w-[620px] md:w-[480px] sm-xs:w-[440px]"
            src="../images/pages/framework/cloud.png"
            alt=""
            width={1081}
            height={874}
            quality={90}
          />
        </div>
      }
      imageClassName="relative w-full h-full !overflow-visible"
      button={{
        label: 'Local Studio',
        link: 'https://docs.novu.co/framework/studio?utm_campaign=ws_framework',
      }}
    />
    <CtaWithForm
      className="mb-[147px] mt-[190px] text-center xl:mt-[280px] lg:mt-[140px]"
      title="Get started for free"
      description="No credit card required. <br/>You're just five minutes from your first Novu notification."
      leftItem={{
        text: 'Try Now',
        link: 'https://dashboard-v2.novu.co/auth/sign-up?utm_campaign=ws_framework',
      }}
      rightItem={{
        text: 'Contact us',
        link: 'https://novu.co/contact-us/?utm_campaign=ws_framework',
      }}
    />
  </Layout>
);

export default FrameworkPage;

export const Head = () => {
  const pageMetadata = {
    slug: '/framework/',
    title: 'Complete Control Over Notifications with Novu Framework',
    description:
      'Novu Framework gives developers code-backed workflows, full control, and seamless integration, while empowering non-technical teams to make safe updates.',
  };
  return <SEO {...pageMetadata} />;
};
