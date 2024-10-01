import React from 'react';

import Layout from 'components/shared/layout';
import CodeSection from 'components/shared/reusable-sections/code-section';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SEO from 'components/shared/seo';

const SECTION_WITH_FORM_RIGHT = {
  title: 'Ready to Getting Started with Novu?',
  description:
    "Do either of these questions describe you? If so, please fill the form out, and we'll respond with next steps.",
  features: [
    {
      title: 'Non-technical user',
      description:
        "Novu's next-generation code-based workflows require access to an IDE, command line, and knowledge of Jacascript.",
    },
    {
      title: "Backend stack isn't Javascript",
      description:
        'Our code-first workflows work best with a Javascript (NodeJS, Next.Js, etc.) backend.',
    },
  ],
  formPosition: 'right',
  hubspotFormId: '6ec81561-2562-477e-92a3-dcb06c35f510',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'cta-gs-form1',
};

const CODE_SECTION = `import { Inbox } from "@novu/react";

const tabs = [
  {
    label: "All",
    value: [],
  },
  {
    label: "What's New",
    value: [ 'new' ],
  },
  {
    label: "Alerts",
    value: [ 'alerts' ],
  },
  {
    label: "Account",
    value: [ 'account' ],
  },
];

function Novu() {
  return (
    <Inbox
      applicationIdentifier="YOUR_APPLICATION_IDENTIFIER"
      subscriberId="YOUR_SUBSCRIBER_ID"
      tabs={tabs}
    />
  );
}`;

const GSLandingPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <SectionWithForm {...SECTION_WITH_FORM_RIGHT} />
    <CodeSection
      code={CODE_SECTION}
      title="Javascript at the core delivers total flexibility"
      description="Built for developers, with drop-in integration that can be infinitely customized, no matter your application, or use case."
      //      button={{ label: 'LIVE EXAMPLE', link: 'https://inbox.novu.co' }}
    />
    <CTA
      title="Get started with Novu in two easy steps"
      leftCard={{
        title: 'Watch the Tutorial',
        description: 'Use our video walkthrough as a guide.',
        buttonText: 'Onboarding Walkthrough',
        buttonLink: '#video',
      }}
      rightCard={{
        title: 'Get started now',
        description: 'Create a free account, and get notifying.',
        buttonText: 'Create Account',
        buttonLink: 'https://dashboard.novu.com/?utm_campaign=lp-mez-gs',
      }}
      theme="purple"
    />
    <a id="video">
      <SectionWithVideo
        video={{ type: 'youtube', url: 'https://www.youtube.com/watch?v=YRlXxS3Uodw' }}
        title="Video header that includes up to three lines of engaging text"
        description="Redesigned local experience to author configurable workflows tailored to optimize Developer Experience, with a matching interface for non-technical users."
      />
    </a>
  </Layout>
);

export default GSLandingPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Learn how to get started with notifications',
    description:
      'Novu is a powerful and complete Javascript-based notifications infrastructure platform. Use Inbox for in-app, sms, email, and other providers for omnichannel notifications.',
  };
  return <SEO {...pageMetadata} />;
};
