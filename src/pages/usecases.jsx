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
      contentClassName="pt-[76px] pb-[100px] md:pt-0 md:pb-16"
      title="Elevate Engagement with Robust Notifications"
      description="Deliver personalized, multi-channel notifications with ease using Novu’s unified platform—empowering teams to create seamless communication experiences that drive user satisfaction and retention."
      imageWrapperClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
      image={
        <div className="absolute left-1/2 top-1/2 h-[791px] w-[1216px] max-w-none -translate-x-1/2 -translate-y-[calc(50%+94px)] lg:h-auto lg:w-[1000px] lg:-translate-x-[calc(50%+50px)] md:w-[700px] md:-translate-y-[calc(50%+76px)] sm:w-[130%] xs:w-[160%]">
          <StaticImage
            src="../images/pages/usecases/index/hero/illustration.jpg"
            alt="Placeholder image"
            loading="eager"
            width={1216}
            height={791}
            quality={100}
          />
        </div>
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
      className="relative z-10 mt-[275px]"
      title="Get started now"
      description="Create complex workflows, access local data, and reuse existing content templates with Novu Echo."
      leftItem={{ text: 'Get started', link: '/' }}
      rightItem={{ text: 'Contact us', link: '/' }}
    />
    <TextWithPicture
      className="sm:!mt-28"
      contentClassName="py-52 md:py-40 sm:pt-0 sm:pb-20"
      title="Multi-channel notifications"
      description="Expand your reach by adding more channels ensuring users receive critical information on time, and through their preferred channel."
      imageWrapperClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
      image={
        <div className="absolute left-1/2 top-1/2 h-[1205px] w-[1354px] max-w-none -translate-x-[calc(50%+4px)] -translate-y-[calc(50%+42px)] md:h-auto md:w-[1000px] sm:w-[130%] xs:w-[150%]">
          <StaticImage
            className="size-full object-cover"
            src="../images/pages/usecases/index/multi-channel/illustration.jpg"
            alt="Placeholder image"
            loading="lazy"
            width={1354}
            height={1205}
          />
        </div>
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
      theme="imageRight"
    />
    <TextWithPicture
      className="relative z-10"
      contentClassName="py-[184px] md:py-32 sm:pt-0 sm:pb-28 xs:pb-36"
      title="Add notifications to your application"
      description="Notifications are the best way to keep your users and customers informed through relevant, timely updates, and adding them to your app or website is easier than you think."
      imageWrapperClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
      image={
        <div className="absolute left-1/2 top-1/2 h-[1007px] w-[1107px] max-w-none -translate-x-[calc(50%-73px)] -translate-y-[calc(50%+156px)] md:h-auto md:w-[1000px] sm:w-[130%] xs:w-[150%]">
          <StaticImage
            className="size-full object-cover"
            src="../images/pages/usecases/index/application/illustration.png"
            alt="Add notifications to your application"
            loading="lazy"
            width={1107}
            height={1007}
            quality={100}
          />
        </div>
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
    />
    <TextWithPicture
      contentClassName="py-20 md:py-10 sm:pt-0 sm:pb-20 xs:pb-32"
      title="Unified notification management"
      description="Reduce your app’s complexity by designing, managing, and triggering notifications from a central platform instead of multiple different tools."
      imageWrapperClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
      image={
        <div className="absolute left-1/2 top-1/2 h-[915px] w-[919px] max-w-none -translate-x-[calc(50%+19px)] -translate-y-[calc(50%+111px)] md:h-auto md:w-[800px] md:-translate-x-[calc(50%+49px)] sm:w-[130%] xs:w-[150%]">
          <StaticImage
            className="size-full object-cover"
            src="../images/pages/usecases/index/management/illustration.jpg"
            alt="Unified notification management"
            loading="lazy"
            width={919}
            height={915}
          />
        </div>
      }
      button={{
        label: 'Learn more',
        link: '/',
      }}
      theme="imageRight"
    />
    <TextWithPicture
      contentClassName="py-[248px] md:py-32 sm:pt-0 sm:pb-20"
      title="Centrally manage notification content"
      description="Eliminate the content dance between development and product teams. Developers now empower product teams to safely interact with all of your notifications content, no interrupts needed."
      imageWrapperClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
      image={
        <div className="absolute left-1/2 top-1/2 h-[1054px] w-[1343px] max-w-none -translate-x-1/2 -translate-y-[calc(50%+56px)] xl:h-auto xl:w-[1000px] xl:-translate-x-[calc(50%-60px)] lg:w-[850px] lg:-translate-x-[calc(50%-55px)] md:w-[700px] sm:w-[130%] xs:w-[150%]">
          <StaticImage
            className="size-full object-cover"
            src="../images/pages/usecases/index/content/illustration.png"
            alt="Notification content"
            loading="lazy"
            width={1343}
            height={1054}
            quality={100}
          />
        </div>
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
