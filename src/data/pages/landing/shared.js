const CODE_SECTION = {
  title: 'Javascript at the core for unlimited flexibility',
  description:
    'Built for developers, with drop-in integration that can be infinitely customized, no matter your application, or use case.',
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
  codeSection: CODE_SECTION,
  cta: CTA,
  sectionWithVideo: SECTION_WITH_VIDEO,
};
