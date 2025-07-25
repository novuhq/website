import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const HERO = {
  title: 'Elevate Engagement with Robust Notifications',
  description:
    'Deliver personalized, multi-channel notifications with ease using Novu’s unified platform—empowering teams to create seamless communication experiences that drive user satisfaction and retention.',
  button: {
    label: 'Learn more',
    link: 'https://docs.novu.co/recipes/workflows/introduction?utm_campaign=ws_usecases',
  },
  theme: 'imageRight',
  image: (
    <div className="absolute left-1/2 top-1/2 h-[791px] w-[1216px] max-w-none -translate-x-1/2 -translate-y-[calc(50%+94px)] lg:h-auto lg:w-[1000px] lg:-translate-x-[calc(50%+50px)] md:w-[700px] md:-translate-y-[calc(50%+76px)] sm:w-[130%] xs:w-[160%]">
      <StaticImage
        src="../../../images/pages/usecases/index/hero/illustration.jpg"
        alt="Placeholder image"
        loading="eager"
        width={1216}
        height={791}
        quality={100}
      />
    </div>
  ),
};

const GOALS = {
  title: 'What do you want to achieve?',
  description:
    'Define your goals and explore tailored solutions to help you reach them effectively.',
  cards: [
    {
      title: 'Accelerate development',
      description:
        'Novu includes everything you need to deploy rich notifications and sophisticated workflows with any channel.',
      linkTitle: 'Learn more',
      linkUrl: 'https://docs.novu.co/getting-started/how-novu-works?utm_campaign=ws_usecases',
    },
    {
      title: 'Improve collaboration',
      description:
        'Reduce friction between development and product teams. Eliminate common development interrupts required for simple operations like content updates.',
      linkTitle: 'Learn more',
      linkUrl: 'https://docs.novu.co/framework/controls?utm_campaign=ws_usecases',
    },
    {
      title: 'Enhance engagement',
      description:
        'Timely, personalized, and relevant notifications across preferred channels leads to higher user engagement and satisfaction.',
      linkTitle: 'Learn more',
      linkUrl:
        'https://novu.co/blog/digest-notifications-best-practices-example/?utm_campaign=ws-usecases',
    },
  ],
};

const CTA_ECHO = {
  title: 'Get started now',
  description:
    'Create complex workflows, access local data, and reuse existing content templates with Novu Echo.',
  leftItem: {
    text: 'Try Novu',
    link: 'https://dashboard.novu.co/?utm_campaign=ws_usecases',
  },
  rightItem: {
    text: 'Contact us',
    link: 'https://novu.co/contact-us/?utm_campaign=ws_usecases',
  },
};

const MULTI_CHANNEL_NOTIFICATIONS = {
  title: 'Multi-channel notifications',
  description:
    'Expand your reach by adding more channels ensuring users receive critical information on time, and through their preferred channel.',
  theme: 'imageRight',
  button: {
    label: 'Check out Channels',
    link: 'https://docs.novu.co/workflow/channel-steps#available-channels',
  },
  image: (
    <div className="absolute left-1/2 top-1/2 h-[1205px] w-[1354px] max-w-none -translate-x-[calc(50%+4px)] -translate-y-[calc(50%+42px)] md:h-auto md:w-[1000px] sm:w-[130%] xs:w-[150%]">
      <StaticImage
        className="size-full object-cover"
        src="../../../images/pages/usecases/index/multi-channel/illustration.jpg"
        alt="Placeholder image"
        loading="lazy"
        width={1354}
        height={1205}
      />
    </div>
  ),
};

const IN_APP_NOTIFICATIONS = {
  title: 'Add notifications to your application',
  description:
    'Notifications are the best way to keep your users and customers informed through relevant, timely updates, and adding them to your app or website is easier than you think.',
  button: {
    label: 'In-App Overview',
    link: 'https://docs.novu.co/inbox/overview',
  },
  image: (
    <div className="absolute left-1/2 top-1/2 h-[1007px] w-[1107px] max-w-none -translate-x-[calc(50%-73px)] -translate-y-[calc(50%+156px)] md:h-auto md:w-[1000px] sm:w-[130%] xs:w-[150%]">
      <StaticImage
        className="size-full object-cover"
        src="../../../images/pages/usecases/index/application/illustration.png"
        alt="Add notifications to your application"
        loading="lazy"
        width={1107}
        height={1007}
      />
    </div>
  ),
};

const NOTIFICATION_MANAGEMENT = {
  title: 'Unified notification management',
  description:
    'Reduce your app’s complexity by designing, managing, and triggering notifications from a central platform instead of multiple different tools.',
  theme: 'imageRight',
  button: {
    label: 'Learn more',
    link: 'https://docs.novu.co/concepts/notifications?utm_campaign=ws_usecases',
  },
  image: (
    <div className="absolute left-1/2 top-1/2 h-[915px] w-[919px] max-w-none -translate-x-[calc(50%+19px)] -translate-y-[calc(50%+111px)] md:h-auto md:w-[800px] md:-translate-x-[calc(50%+49px)] sm:w-[130%] xs:w-[150%]">
      <StaticImage
        className="size-full object-cover"
        src="../../../images/pages/usecases/index/management/illustration.jpg"
        alt="Unified notification management"
        loading="lazy"
        width={919}
        height={915}
      />
    </div>
  ),
};

const NOTIFICATION_CONTENT = {
  title: 'Centrally manage notification content',
  description:
    'Eliminate the content dance between development and product teams. Developers now empower product teams to safely interact with all of your notifications content, no interrupts needed.',
  button: {
    label: 'Learn more',
    link: 'https://docs.novu.co/workflow/template-editor?utm_campaign=ws_usecases',
  },
  image: (
    <div className="absolute left-1/2 top-1/2 h-[1054px] w-[1343px] max-w-none -translate-x-1/2 -translate-y-[calc(50%+56px)] xl:h-auto xl:w-[1000px] xl:-translate-x-[calc(50%-60px)] lg:w-[850px] lg:-translate-x-[calc(50%-55px)] md:w-[700px] sm:w-[130%] sm:-translate-y-[calc(50%-20px)] sm-xs:w-[150%]">
      <StaticImage
        className="size-full object-cover"
        src="../../../images/pages/usecases/index/content/illustration.png"
        alt="Notification content"
        loading="lazy"
        width={1343}
        height={1054}
        quality={100}
      />
    </div>
  ),
};

const CTA_REQUIREMENTS = {
  title: 'We’re ready for your requirements...',
  description: 'Whatever your use case, Novu is ready. Start for free, no credit card required.',
  leftItem: {
    text: 'Try Novu',
    link: 'https://dashboard.novu.co/?utm_campaign=ws_usecases',
  },
  rightItem: {
    text: 'Contact us',
    link: 'https://novu.co/contact-us/?utm_campaign=ws_usecases',
  },
};

export default {
  hero: HERO,
  goals: GOALS,
  ctaEcho: CTA_ECHO,
  multiChannelNotifications: MULTI_CHANNEL_NOTIFICATIONS,
  inAppNotifications: IN_APP_NOTIFICATIONS,
  notificationManagement: NOTIFICATION_MANAGEMENT,
  notificationContent: NOTIFICATION_CONTENT,
  ctaRequirements: CTA_REQUIREMENTS,
};
