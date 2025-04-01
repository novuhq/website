import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

// TODO: replace Reviews to new directory before merge
import Reviews from 'components/pages/home/reviews';
import Bento from 'components/pages/home-new/bento';
import CodeWithInbox from 'components/pages/home-new/code-with-inbox/code-with-inbox';
import Community from 'components/pages/home-new/community';
import Layout from 'components/shared/layout';
import CtaWithForm from 'components/shared/reusable-sections/cta-with-form/cta-with-form';
import SectionWithSmallIcons from 'components/shared/reusable-sections/section-with-small-icons';
import TextWithPicture from 'components/shared/reusable-sections/text-with-picture';
import SEO from 'components/shared/seo';
import Separator from 'components/shared/separator';
import bellOutlineIcon from 'images/icons/bell-outline.svg';
import chatOutlineIcon from 'images/icons/chat-outline.svg';
import emailOutlineIcon from 'images/icons/email-outline.svg';
import gearOutlineIcon from 'images/icons/gear-outline.svg';
import inappOutlineIcon from 'images/icons/in-app-outline.svg';
import planeOutlineIcon from 'images/icons/plane-outline.svg';
import nextjsIcon from 'images/pages/home-new/inbox/nextjs.svg';
import reactIcon from 'images/pages/home-new/inbox/react.svg';
import remixIcon from 'images/pages/home-new/inbox/remix.svg';

const SECTION_WITH_SMALL_ICONS = [
  {
    title: 'InApp/Inbox',
    description:
      'Display real-time, contextual notifications within your app using customizable components.',
    image: inappOutlineIcon,
  },
  {
    title: 'Email',
    description:
      'Send targeted emails for confirmations, reports, and updates to ensure clear communication.',
    image: emailOutlineIcon,
  },
  {
    title: 'Push',
    description:
      "Deliver instant notifications to users' devices, ensuring real-time engagement and immediate updates.",
    image: bellOutlineIcon,
  },
  {
    title: 'SMS',
    description:
      'Send reliable text messages for authentication and alerts, even without internet access.',
    image: planeOutlineIcon,
  },
  {
    title: 'Chat',
    description:
      'Engage users through instant messaging apps and platforms, enhancing communication and support.',
    image: chatOutlineIcon,
  },
  {
    title: 'Custom',
    description:
      'Create tailored notification channels to meet your specific needs and integrate seamlessly.',
    image: gearOutlineIcon,
  },
];

const CODE_NEXTJS = `'use client';

import React from 'react';
import { Inbox } from '@novu/nextjs';
 
export function NotificationInbox() {
  return (
    <Inbox
      applicationIdentifier="YOUR_APPLICATION_IDENTIFIER"
      subscriberId="YOUR_SUBSCRIBER_ID"
    />
  );
}`;

const CODE_REMIX = `import React from 'react';
import { Inbox } from '@novu/react';
import { useNavigate } from '@remix-run/react';
 
export function NotificationCenter() {
  const navigate = useNavigate();
  
  return (
    <Inbox
      applicationIdentifier="YOUR_APPLICATION_IDENTIFIER"
      subscriberId="YOUR_SUBSCRIBER_ID"
      routerPush={(path: string) => navigate(path)}
    />
  );
}`;

const CODE_REACT = `import React from 'react';
import { Inbox } from '@novu/react';
import { useNavigate } from 'react-router';
 
export function NotificationCenter() {
  const navigate = useNavigate();
  
  return (
    <Inbox
      applicationIdentifier="YOUR_APPLICATION_IDENTIFIER"
      subscriberId="YOUR_SUBSCRIBER_ID"
      routerPush={(path: string) => navigate(path)}
    />
  );
}`;

const CODE_ITEMS = [
  {
    title: 'Next.js',
    code: CODE_NEXTJS,
    icon: nextjsIcon,
  },
  {
    title: 'Remix',
    code: CODE_REMIX,
    icon: remixIcon,
  },
  {
    title: 'React',
    code: CODE_REACT,
    icon: reactIcon,
  },
];

const HomePage = () => (
  <Layout mainClassName="reusable-components overflow-hidden pt-16 bg-[#05050B]">
    <CodeWithInbox
      title="Just copy and ship"
      description="Add a powerful notification inbox to your app with 6 lines of code. It's that simple."
      tabs={CODE_ITEMS}
      isMainPage
    />
    <Bento
      title="<Inbox /> batteries included"
      description="Start with a component, scale with a platform. Everything you need to build a world-class notification system."
    />
    <SectionWithSmallIcons
      title="All your channels in one platform"
      description="True omnichannel notifications are just a few clicks away"
      className="mt-[204px] lg:mt-[148px] md:mt-[116px] sm:mt-[106px]"
      items={SECTION_WITH_SMALL_ICONS}
    />
    <TextWithPicture
      className="py-20 pl-[64px] lg:pl-[32px] md:py-10 sm:mb-0 sm:pb-20 sm:pt-0 xs:pb-[110px] sm-xs:pb-[70px]"
      title="Part of your Stack"
      description="Native integrations with the tools you love. From frameworks to providers, connect once and deploy with confidence."
      imageClassName="relative w-full h-full sm:h-[300px] xs:h-[200px]"
      image={
        <div className="absolute left-1/2 top-1/2 w-[1185px] max-w-none -translate-x-[calc(50%+28px)] -translate-y-1/2 lg:w-[1042px] lg:-translate-x-[calc(50%+22px)] md:w-[704px] sm:w-[130%] sm:-translate-x-[calc(50%+2px)] xs:w-[150%] sm-xs:w-[204%]">
          <StaticImage
            className="size-full object-cover"
            // TODO: change path before merge, should be '../images/pages/home-new/stack.png'
            src="../../images/pages/home-new/stack.png"
            alt=""
            loading="lazy"
            width={1185}
            height={1180}
          />
        </div>
      }
      theme="imageRight"
    />
    <Community />
    <Reviews className="mt-[220px] lg:mt-[184px] md:mt-[134px] sm:mt-[106px] [&_h3]:md:text-[32px] [&_h3]:sm:text-[28px]" />
    <CtaWithForm
      className="mb-[200px] mt-[200px] text-center lg:mb-[182px] lg:mt-[182px] md:mb-[144px] md:mt-[144px] sm:mb-[128px] sm:mt-[165px] [&_h2]:lg:text-[44px] [&_h2]:md:text-[36px] [&_h2]:sm:text-[32px]"
      title="Free to start, ready to scale"
      description="<span class='font-medium text-gray-10'>10K events/month free forever.</span> From weekend projects to enterprise scale, we've got you covered."
      leftItem={{
        text: 'Get started',
        link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
      }}
      rightItem={{
        text: 'See our plans',
        link: '/pricing',
      }}
    />
    <Separator className="h-px w-full max-w-none" backgroundColor="black" />
  </Layout>
);

export default HomePage;

export const Head = () => {
  const pageMetadata = {
    title: 'Novu - Open-source notifications infrastructure for devs and product teams',
    description:
      'Novu is an open-source notification platform that empowers developers to create robust, multi-channel notifications for web and mobile apps. With powerful workflows, seamless integrations, and a flexible API-first approach, Novu enables product teams to manage notifications without breaking production.',
  };
  return <SEO {...pageMetadata} />;
};
