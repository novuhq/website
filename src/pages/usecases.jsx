import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import FeatureCards from 'components/shared/reusable-sections/feature-cards';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';

const FEATURE_CARDS = [
  {
    title: 'Accelerate development',
    description:
      'Novu includes everything you need to deploy rich notifications and sophisticated workflows with any channel.',
    linkTitle: 'Learn more',
    linkUrl: '/',
  },
  {
    title: 'Enhanced collaboration',
    description:
      'Reduce friction between development and product teams. Eliminate common development interrupts required for simple operations like content updates.',
    linkTitle: 'Learn more',
    linkUrl: '/',
  },
  {
    title: 'Enhanced engagement',
    description:
      'Timely, personalized, and relevant notifications across preferred channels leads to higher user engagement and satisfaction.',
    linkTitle: 'Learn more',
    linkUrl: '/',
  },
];

const UseCasesPage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <TextWithPicture
      title="Elevate Engagement with Robust Notifications"
      description="Deliver personalized, multi-channel notifications with ease using Novu’s unified platform—empowering teams to create seamless communication experiences that drive user satisfaction and retention."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../../images/placeholder-image.jpg"
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
    <FeatureCards
      title="What do you want to achieve?"
      titleSize="40"
      description="Define your goals and explore tailored solutions to help you reach them effectively."
      cards={FEATURE_CARDS}
    />
    <CtaWithForm
      title="Get started now"
      description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo."
      leftItem={{ text: 'Get started', link: '/' }}
      rightItem={{ text: 'Contact us', link: '/' }}
    />
    <TextWithPicture
      title="Multi-channel notifications"
      description="Expand your reach by adding more channels ensuring users receive critical information on time, and through their preferred channel."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../../images/placeholder-image.jpg"
          alt="Placeholder image"
          loading="lazy"
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
      title="Add notifications to your application"
      description="Notifications are the best way to keep your users and customers informed through relevant, timely updates, and adding them to your app or website is easier than you think."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../../images/placeholder-image.jpg"
          alt="Placeholder image"
          loading="lazy"
          width={576}
          height={480}
        />
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
    />
    <TextWithPicture
      title="Unified notification management"
      description="Reduce your app’s complexity by designing, managing, and triggering notifications from a central platform instead of multiple different tools."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../../images/placeholder-image.jpg"
          alt="Placeholder image"
          loading="lazy"
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
      title="Centrally manage notification content"
      description="Eliminate the content dance between development and product teams. Developers now empower product teams to safely interact with all of your notifications content, no interrupts needed."
      image={
        <StaticImage
          className="size-full object-cover"
          src="../../images/placeholder-image.jpg"
          alt="Placeholder image"
          loading="lazy"
          width={576}
          height={480}
        />
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
    />
    <CtaWithForm
      className="mb-52"
      title="We’re ready for your requirements..."
      description="Whatever your use case, Novu is ready. Start for free, no credit card required."
      leftItem={{ text: 'Get started', link: '/' }}
      rightItem={{ text: 'Contact us', link: '/' }}
    />
  </Layout>
);

export default UseCasesPage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Use Cases',
    description: 'Use Cases',
  };
  return <SEO {...pageMetadata} />;
};
