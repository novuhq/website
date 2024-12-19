import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Dedicated components
import Infrastructure from 'components/pages/framework/infrastructure';
import Libraries from 'components/pages/home/libraries';

// Shared components
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import RiveWasm from 'components/shared/rive-wasm';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';


// Reusable components
import CodeSection from 'components/pages/framework/code-section';
import SectionWithCards from 'components/pages/framework/section-with-cards';
import TextWithPicture from 'components/pages/framework/text-with-picture';


// import LINKS from 'constants/links';

const CODE_SECTION = `
import { workflow, CronExpression } from '@novu/framework';
import { z } from 'zod';
import { render } from '@react-email/components';

const weeklyComments = workflow('weekly-comments', async (event) => {
  await event.step.inApp('inbox-notification', async () => ({
    subject: \`\${event.payload.userName} commented in project\`,
    body: event.payload.comment,
  }));
});

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
  to: 'jane@acme.com';
});
`;

const SECTION_WITH_CARDS = [
  {
    image: (
      <StaticImage
        src="../images/superior-dx.png"
        alt="Superior DX"
        loading="lazy"
        width={384}
        height={214}
      />
    ),
    title: 'Superior DX',
    description:
      'In-code customization, local IDE support, and native GitOps integrations streamline workflow management, debugging, and process alignment.',
  },
  {
    image: (
      <StaticImage
        src="../images/complete-flexibility.png"
        alt="Complete flexibility"
        loading="lazy"
        width={384}
        height={214}
      />
    ),
    title: 'Complete flexibility',
    description:
      'Build complex notification workflows that run in your environment boundary, safely access local data, and model literally any business requirement.',
  },
  {
    image: (
      <StaticImage
        src="../images/integration-ready.png"
        alt="Integration ready"
        loading="lazy"
        width={384}
        height={214}
      />
    ),
    title: 'Integration ready',
    description:
      'Integrates with popular application development frameworks, content templating engines, CRMs, and delivery providers.',
  },
];

const HomePage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <CodeSection
      code={CODE_SECTION}
      title="Code-backed workflows that can accomplish anything"
      description="Optionally extend your Novu workflows with a locallyrun Novu Framework engine. Define workflows in code, tie into local data, apply advanced logic, and solve for any notifications requirement imaginable."
      button={{ label: 'GET STARTED', link: 'https://novu.co/' }}
    />
    <SectionWithCards
      title="Made for developers"
      cards={SECTION_WITH_CARDS}
    />
    <Infrastructure />

    <CtaWithForm
      title="Get started now"
      description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo."
      leftItem={{ text: 'Get started', link: '/' }}
      rightItem={{ text: 'Contact us', link: '/' }}
    />

    <Libraries />

    <TextWithPicture
      title="Complete workflow control"
      description="Development teams have complete control over customizations and workflows; and what other teams-can safely edit or update."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../images/complete-workflow-control.png"
          alt="Complete workflow control"
          loading="eager"
        />
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
      theme="imageRight"
    />

    <TextWithPicture
      title="Self service access for non-technical teams"
      description="Product teams can safely make targeted content updates without breaking workflow or business logic. Reduce developer interrupts for things like content updates."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../images/self-service-access.png"
          alt="Reuse existing content"
          loading="eager"
        />
      }
    />

    <TextWithPicture
      title="Reuse existing content and providers"
      description="Integrate with legacy systems and platforms, and easily include content from any source and in any format."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../images/reuse-existing-content.png"
          alt="Reuse existing content"
          loading="eager"
        />
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
      theme="imageRight"
    />

    <TextWithPicture
      
      title="Locally run, cloud powered"
      description="Your local Novu Framework integrates with Novu Cloud to power delivery, management, and analytics."
      image={
        <StaticImage
          className="size-full object-cover w-full"
          src="../images/locally-run-cloud-powered.png"
          alt="Locally run, cloud powered"
          loading="eager"
        />
      }
    />

    <CtaWithForm 
      className="mb-30 mt-[166px]"
      title="Get started for free"
      description="No credit card required. You're just five minutes from your first Novu notification."
      leftItem={{
        text: 'Get started',
        link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
      }}
      rightItem={{
        text: 'Contact us',
        link: 'https://novu.co/contact-us/?utm_campaign=contact-inbox',
      }}
    />
    <Separator className="w-full max-w-none" backgroundColor="echo-gradient" />
  </Layout>
);

export default HomePage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Open-source notifications infrastructure for devs and product teams',
    description:
      'Novu is an open-source notification platform that empowers developers to create robust, multi-channel notifications for web and mobile apps. With powerful workflows, seamless integrations, and a flexible API-first approach, Novu enables product teams to manage notifications without breaking production.',
  };
  return (
    <>
      <SEO {...pageMetadata} />
      <RiveWasm />
      <link
        rel="preload"
        href="/animations/pages/home/hero/new_hero.riv"
        as="fetch"
        crossOrigin="anonymous"
      />
    </>
  );
};
