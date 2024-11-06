import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from 'components/shared/layout';
import CTA from 'components/shared/reusable-sections/cta';
import SectionWithForm from 'components/shared/reusable-sections/section-with-form';
import SectionWithVideo from 'components/shared/reusable-sections/section-with-video';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';

const SECTION_WITH_FORM_RIGHT = {
  title: 'Coming soon: Novu Dashboard 2.0',
  description:
    "We're making huge changes to the Novu Dashboard experience, and we're looking for users that want early access.",
  features: [
    {
      title: 'UI-based workflow creation and editing',
      description: 'Create and manage workflows right from the UI, no coding experience required.',
    },
    {
      title: 'Fully cloud-based',
      description: "New workflows don't require local a locally-run Novu Framework Engine.",
    },
    {
      title: 'Fully customizable for any use case',
      description:
        "When you need the full power of code, eject to code, and access the unlimited power of Novu's code-based workflow.",
    },
  ],
  formPosition: 'right',
  hubspotFormId: '5d849051-7b65-4843-add4-a38bc24312de',
  // If you want to use more than one form on the page, you need to provide unique tag ids
  hubspotTagClass: 'cta-gs-form1',
};

const GSLandingPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <SectionWithForm {...SECTION_WITH_FORM_RIGHT} />
    <TextWithPicture
      title="Build and manage workflows in the UI"
      description="Quickly get started, prototype, and deploy notifications workflows without writing any code... until you're ready to."
      image={
        <StaticImage
          src="../../images/workflow-dash-2.0.png"
          alt="GUI-based workflows"
          loading="eager"
          width={800}
        />
      }
    />
    <TextWithPicture
      title="Email content creation and editing done right"
      description="An all-new email block editor will be your new favorite way to quickly and easily create and edit email notification content."
      image={
        <StaticImage
          src="../../images/workflow-email-dash-2.0.png"
          alt="GUI-based workflows"
          loading="eager"
          width={800}
        />
      }
      theme="imageRight"
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
