import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import bellOutlineIcon from 'images/icons/bell-outline.svg';
import chatOutlineIcon from 'images/icons/chat-outline.svg';
import emailOutlineIcon from 'images/icons/email-outline.svg';
import gearOutlineIcon from 'images/icons/gear-outline.svg';
import inappOutlineIcon from 'images/icons/in-app-outline.svg';
import planeOutlineIcon from 'images/icons/plane-outline.svg';
import nextjsIcon from 'images/pages/home-new/inbox/nextjs.svg';
import reactIcon from 'images/pages/home-new/inbox/react.svg';
import remixIcon from 'images/pages/home-new/inbox/remix.svg';

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

const CODE_WITH_INBOX = {
  title: 'Just copy and ship',
  description:
    "Add a powerful notification inbox to your app with 6 lines of code. It's that simple.",
  isMainPage: true,
  tabs: [
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
  ],
};

const BENTO = {
  title: '<Inbox /> batteries included',
  description:
    'Start with a component, scale with a platform. Everything you need to build a world-class notification system.',
};

const SECTION_WITH_SMALL_ICONS = {
  title: 'All your channels in one platform',
  description: 'True omnichannel notifications are just a few clicks away',
  items: [
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
  ],
};

const TEXT_WITH_PICTURE = {
  title: 'Part of your Stack',
  description:
    'Native integrations with the tools you love. From frameworks to providers, connect once and deploy with confidence.',
  image: (
    <div className="absolute left-1/2 top-1/2 w-[1185px] max-w-none -translate-x-[calc(50%+28px)] -translate-y-1/2 lg:w-[1042px] lg:-translate-x-[calc(50%+22px)] md:w-[704px] sm:w-[130%] sm:-translate-x-[calc(50%+2px)] xs:w-[150%] sm-xs:w-[204%]">
      <StaticImage
        className="size-full object-cover"
        src="../../../../images/pages/home-new/stack.png"
        alt=""
        loading="lazy"
        width={1185}
        height={1180}
      />
    </div>
  ),
  theme: 'imageRight',
};

const CTA_WITH_FORM = {
  title: 'Free to start, ready to scale',
  description:
    "<span class='font-medium text-gray-10'>10K events/month free forever.</span> From weekend projects to enterprise scale, we've got you covered.",
  leftItem: {
    text: 'Get started',
    link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
  },
  rightItem: {
    text: 'See our plans',
    link: '/pricing',
  },
};

export default {
  codeWithInbox: CODE_WITH_INBOX,
  bento: BENTO,
  sectionWithSmallIcons: SECTION_WITH_SMALL_ICONS,
  textWithPicture: TEXT_WITH_PICTURE,
  ctaWithForm: CTA_WITH_FORM,
};
