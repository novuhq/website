import React from 'react';

import Layout from 'components/shared/layout';
import CodeSection from 'components/shared/reusable-sections/code-section';
import CTA from 'components/shared/reusable-sections/cta';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SectionWithVideo from 'components/shared/reusable-sections/section-with-video';
import SEO from 'components/shared/seo';

const SECTION_WITH_FORM_RIGHT = {
  title: 'Ready to Get Started with Novu?',
  description:
    "Do either of these statements describe you? If so, please fill the form out, and we'll respond with next steps.",
  features: [
    {
      title: 'I am a non-technical user',
      description:
        "Novu's next-generation code-based workflows require access to an IDE, command line, and knowledge of Javascript.",
    },
    {
      title: "Our backend stack isn't Javascript-based",
      description:
        'Our code-first workflows work best with a Javascript (NodeJS, Next.Js, etc.) backend.',
    },
  ],
  formPosition: 'right',
  hubspotFormId: '6ec81561-2562-477e-92a3-dcb06c35f510',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'cta-gs-form1',
};

const CODE_SECTION = `import { workflow } from '@novu/framework';

const commentWorkflow = workflow('comment-on-post', async (event) => {
  const inAppResponse = await event.step.inApp('notify-user', async () => ({
    body: renderReactComponent(event.payload.postId)
  }));

  const { events } = await event.step.digest('1 week');

  await event.step.email('weekly-comments', async (inputs) => {
    return {
      subject: \`Weekly post comments (\${events.length + 1})\`,
      body: renderReactEmail(inputs, events)
    };
  }, { skip: () => inAppResponse.seen });
}, { payloadSchema: z.object({ postId: z.string() }) }
);

// Use the same familiar syntax to send a notification
commentWorkflow.trigger({
  to: { subscriberId: 'joe@acme.com' },
  payload: { postId: '12345' }
});`;

const GSLandingPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <SectionWithForm {...SECTION_WITH_FORM_RIGHT} />
    <CodeSection
      code={CODE_SECTION}
      title="Javascript at the core for unlimited flexibility"
      description="Built for developers, with drop-in integration that can be infinitely customized, no matter your application, or use case."
      /* button={{ label: 'LIVE EXAMPLE', link: 'https://inbox.novu.co' }} */
    />
    <CTA
      title="Ready to get started?"
      leftCard={{
        title: 'Watch the tutorial',
        description: 'Use our video walkthrough as a guide to get started quickly.',
        buttonText: 'Onboarding Walkthrough',
        buttonLink: '#video',
      }}
      rightCard={{
        title: 'Create a free account',
        description: 'Create a free account, and get notifying.',
        buttonText: 'Create Account',
        buttonLink: 'https://dashboard.novu.com/?utm_campaign=lp-mez-gs',
      }}
      theme="purple"
    />
    <a id="video">
      <SectionWithVideo
        video={{
          type: 'youtube',
          url: 'https://www.youtube.com/watch?v=A1ciB-LgY8w&ab_channel=Novu',
        }}
        title="If you're ready to write osme Javascript and get notifying"
        description="This video walks you through all the important details to get your local dev environment up and running and code your first workflow."
      />
    </a>
  </Layout>
);

export default GSLandingPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Request a free account',
    description:
      'Novu is a powerful and complete Javascript-based notifications infrastructure platform. Use Inbox for in-app, sms, email, and other providers for omnichannel notifications.',
  };
  return <SEO {...pageMetadata} />;
};
