import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Dedicated Components
import TextWithPicture from 'components/pages/digest/text-with-picture/text-with-picture';
import SectionWithBigIcons1 from 'components/pages/digest/section-with-big-icons-1/section-with-big-icons';
import SectionWithBigIcons2 from 'components/pages/digest/section-with-big-icons-2/section-with-big-icons';

import CtaWithForm from 'components/pages/digest/cta-with-form/cta-with-form';


// Shared Components
import Layout from 'components/shared/layout';
import RiveWasm from 'components/shared/rive-wasm';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';

//Icons and Images
import bugIcon from 'images/icons/bug.svg';
import ideaIcon from 'images/icons/idea.svg';
import improveIcon from 'images/icons/improve.svg';
import microphoneIcon from 'images/icons/microphone.svg';
import paintIcon from 'images/icons/paint.svg';
import settingsIcon from 'images/icons/settings.svg';

// import LINKS from 'constants/links';

const BATCH_NOTIFICATIONS = [
  {
    icon: paintIcon,
    title: 'Event consolidation',
    description: 'Combine multiple events into a single notification.',
    linkUrl: 'https://docs.novu.co/community/get-involved#create-content',
  },
  {
    icon: microphoneIcon,
    title: 'Custom grouping',
    description: 'Customize event grouping by type or frequency.',
    linkUrl: 'https://docs.novu.co/community/get-involved#create-content',
  },
  {
    icon: bugIcon,
    title: 'Interval scheduling',
    description: 'Set specific times for digest delivery.',
    linkUrl: 'https://roadmap.novu.co/roadmap',
  },
  {
    icon: ideaIcon,
    title: 'Flexible strategy',
    description: 'Choose between time-based and event-based aggregation.',
    linkUrl: 'https://roadmap.novu.co/roadmap',
  },
  {
    icon: improveIcon,
    title: 'Context preservation',
    description: 'Ensure relevant context accompanies digested notifications.',
    linkUrl: 'https://github.com/novuhq/docs/issues',
  },
  {
    icon: settingsIcon,
    title: 'User control',
    description: 'Reduce fatigue while ensuring key updates reach users.',
    linkUrl: 'https://docs.novu.co/community/get-involved#create-content',
  },
];

const USE_CASE_EXAMPLES = [
  {
    icon: paintIcon,
    title: 'Workflow digest',
    description: 'Summary workflow for digesting multiple notifications.',
    linkUrl: 'https://docs.novu.co/community/get-involved#create-content',
  },
  {
    icon: microphoneIcon,
    title: 'Define digest step',
    description: 'Add a simple timed digest step to your workflow.',
    linkUrl: 'https://docs.novu.co/community/get-involved#create-content',
  },
  {
    icon: bugIcon,
    title: 'Select a digest strategy',
    description: 'Learn about the regular, look-back, and scheduled digest steps.',
    linkUrl: 'https://roadmap.novu.co/roadmap',
  },
];

const HomePage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <TextWithPicture
      title="Digest notifications and stop overnotifying"
      description="Consolidate multiple events into a single message, reducing notification overload while keeping users informed. Optimize workflows with custom grouping, time intervals, and strategies tailored to your communication needs."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../images/placeholder-image.jpg"
          alt="Placeholder image"
          loading="eager"
          width={576}
          height={480}
        />
      }
    />

    <TextWithPicture
      title="Multiple digest strategies that work"
      description="Batch notifications in a set window, or look back to the last received notification and make a game time decision. It’s all configurable for set-it and forget-it notification digests."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../images/placeholder-image.jpg"
          alt="Placeholder image"
          loading="eager"
          width={576}
          height={480}
        />
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
      theme="imageRight"
    />

    <TextWithPicture
      title="Eliminate notification fatigue"
      description="Novu makes it easy to insert digest steps into your notifications workflows, and delivers  complete flexibility to adjust notification frequency and content."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../images/placeholder-image.jpg"
          alt="Placeholder image"
          loading="eager"
          width={576}
          height={480}
        />
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
    />

    <SectionWithBigIcons1 title="Everything you need to quickly batch notifications" items={BATCH_NOTIFICATIONS} />

    <SectionWithBigIcons2 title="Use case examples" items={USE_CASE_EXAMPLES} />

    <CtaWithForm
      className="mb-30"
      title="You're five minutes away from your first Novu-backed notification"
      description="Create a free account, send your first notification, all before your coffee gets cold... no credit card required."
      leftItem={{ text: 'Get started', link: '/' }}
      rightItem={{ text: 'Contact us', link: '/' }}
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