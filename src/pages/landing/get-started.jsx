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
  hubspotTagClass: 'second-form',
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
      title="Fast, composable, and simple to implement"
      description="Built for developers, with drop-in integration that can be infinitely customized, no matter your application, or use case."
      button={{ label: 'LIVE EXAMPLE', link: 'https://inbox.novu.co' }}
    />
    <CTA
      title="Create and send your first code-based notification"
      leftCard={{
        title: 'Self-Hosted',
        description: 'Create complex workflows, access local data, and reuse existing content.',
        buttonText: 'Read Docs',
        buttonLink: '/',
      }}
      rightCard={{
        title: 'Get started now',
        description: 'Create complex workflows, access local data, and reuse existing content.',
        buttonText: 'Book a demo',
        buttonLink: '/',
      }}
      theme="purple"
    />
  </Layout>
);

export default GSLandingPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Full-stack Inbox for In-app notifications',
    description:
      "Novu's Inbox is the easiest way to add a highly customizable notifications Inbox to your application or website.",
  };
  return <SEO {...pageMetadata} />;
};
