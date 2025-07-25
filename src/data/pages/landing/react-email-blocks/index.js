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

const CODE_SECTION = {
  title: 'Javascript at the core for unlimited flexibility',
  description:
    'Built for developers, with drop-in integration that can be infinitely customized, no matter your application, or use case.',
  /* button={{ label: 'LIVE EXAMPLE', link: 'https://inbox.novu.co' }} */
  code: `import { workflow } from '@novu/framework';

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
});`,
};

const CTA = {
  title: 'Ready to get started?',
  leftCard: {
    title: 'Watch the tutorial',
    description: 'Use our video walkthrough as a guide to get started quickly.',
    buttonText: 'Onboarding Walkthrough',
    buttonLink: '#video',
  },
  rightCard: {
    title: 'Create a free account',
    description: 'Create a free account, and get notifying.',
    buttonText: 'Create Account',
    buttonLink: 'https://dashboard.novu.com/?utm_campaign=lp-mez-gs',
  },
  theme: 'purple',
};

const SECTION_WITH_VIDEO = {
  video: {
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=A1ciB-LgY8w&ab_channel=Novu',
  },
  title: "If you're ready to write some Javascript and get notifying",
  description:
    'This video walks you through all the important details to get your local dev environment up and running and code your first workflow.',
  id: 'video',
};

export default {
  sectionWithFormRight: SECTION_WITH_FORM_RIGHT,
  codeSection: CODE_SECTION,
  cta: CTA,
  sectionWithVideo: SECTION_WITH_VIDEO,
};
