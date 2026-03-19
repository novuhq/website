import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import CheckpointLogo from 'images/customers/logo-checkpoint.svg';
import MongodbCustomerLogo from 'images/customers/logo-mongodb.svg';
import RocheLogo from 'images/customers/logo-roche.svg';
import SinchLogo from 'images/customers/logo-sinch.svg';
import UnityCustomerLogo from 'images/customers/logo-unity.svg';
import UnopsLogo from 'images/customers/logo-unops.svg';
import WaltonEnterprisesLogo from 'images/customers/logo-walton-enterprises.svg';
import bellOutlineIcon from 'images/icons/bell-outline.svg';
import chatOutlineIcon from 'images/icons/chat-outline.svg';
import emailOutlineIcon from 'images/icons/email-outline.svg';
import gearOutlineIcon from 'images/icons/gear-outline.svg';
import inappOutlineIcon from 'images/icons/in-app-outline.svg';
import planeOutlineIcon from 'images/icons/plane-outline.svg';
import nextjsIcon from 'images/pages/home-new/inbox/nextjs.svg';
import reactIcon from 'images/pages/home-new/inbox/react.svg';
import remixIcon from 'images/pages/home-new/inbox/remix.svg';

const CUSTOMERS = {
  title: 'Trusted by industry leaders',
  description: 'Powering notifications for the world\u2019s most innovative companies.',
  items: [
    {
      title: 'Roche',
      src: RocheLogo,
    },
    {
      title: 'MongoDB',
      src: MongodbCustomerLogo,
    },
    {
      title: 'Unity',
      src: UnityCustomerLogo,
    },
    {
      title: 'Sinch',
      src: SinchLogo,
    },
    {
      title: 'Checkpoint',
      src: CheckpointLogo,
    },
    {
      title: 'Walton Enterprises',
      src: WaltonEnterprisesLogo,
    },
    {
      title: 'UNOPS',
      src: UnopsLogo,
    },
  ],
  rows: 1,
};

const COPY_AND_SHIP = {
  title: 'Just copy and ship',
  description:
    "Add a powerful notification inbox to your app with 6 lines of code. It's that simple.",
  tabs: [
    {
      title: 'Next.js',
      code: `import React from 'react';
import { Inbox } from '@novu/nextjs';

export function NotificationInbox() {
  return (
    <Inbox />
  );
}`,
      icon: nextjsIcon,
    },
    {
      title: 'Remix',
      code: `import React from 'react';
import { Inbox } from '@novu/react';

export function NotificationInbox() {
  return (
    <Inbox />
  );
}`,
      icon: remixIcon,
    },
    {
      title: 'React',
      code: `import React from 'react';
import { Inbox } from '@novu/react';

export function NotificationInbox() {
  return (
    <Inbox />
  );
}`,
      icon: reactIcon,
    },
  ],
};

const INBOX_BATTERIES = {
  title: '<Inbox /> batteries included',
  description:
    'Start with a component, scale with a platform. Everything you need to build a world-class notification system.',
};

const CHANNELS = {
  title: 'All your channels in one platform',
  description: 'True omnichannel notifications are just a few clicks away',
  items: [
    {
      title: 'In-App',
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

const PART_OF_YOUR_STACK = {
  title: 'Part of your Stack',
  description:
    'Integrate with the tools you love. From frameworks to delivery providers, like Twilio, Resend, React Email, Clerk, Stripe and more.',
  button: {
    label: 'Get started',
    link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
  },
  theme: 'imageRight',
  image: (
    <div className="absolute left-1/2 top-1/2 w-[1185px] max-w-none -translate-x-[calc(50%+28px)] -translate-y-1/2 lg:w-[1042px] lg:-translate-x-[calc(50%+22px)] md:w-[704px] sm:w-[130%] sm:-translate-x-[calc(50%+2px)] xs:w-[150%] sm-xs:w-[204%]">
      <StaticImage
        className="size-full object-cover"
        src="../../../images/pages/home-new/stack.png"
        alt=""
        loading="lazy"
        width={1185}
        height={1180}
        quality={100}
      />
    </div>
  ),
};

const SCALE_TO_CODE = {
  title: 'Start Simple, Scale to Code',
  description:
    'Begin with our intuitive UI, break into code when you need run-time control, react email or local data access. You choose when to level up, the ultimate escape hatch.',
  button: {
    label: 'Learn More',
    link: '/framework',
  },
  isPriorityImageLoading: true,
  code: `import { workflow } from '@novu/framework';
import { z } from 'zod';
import { render } from '@react-email/components';

workflow('weekly-comments', async ({ step }) => {
  const digest = await step.digest('collect-events', () => ({
    cron: 'weekly'
  }));

  await step.email('email', async () => {
    const { data } = await supabase.from('posts').select('*');

    return {
      subject: 'React based email',
      body: render(<WeeklyDigestEmail comments={digest.events} posts={data} />)
    }
  ), {
    skip: () => !digest.events.length,
  });
}, {
  payloadSchema: z.object({ userName: z.string() }),
});
`,
};

const CTA = {
  title: 'Free to start, ready to scale',
  description:
    "<span class='font-medium text-gray-10'>10K events/month free forever.</span> From weekend projects to enterprise scale, we've got you covered.",
  leftItem: {
    text: 'Get started',
    link: 'https://dashboard.novu.co/?utm_campaign=gs-website-inbox',
  },
  rightItem: {
    text: 'Pricing',
    link: '/pricing',
  },
};

export default {
  customers: CUSTOMERS,
  copyAndShip: COPY_AND_SHIP,
  inboxBatteries: INBOX_BATTERIES,
  channels: CHANNELS,
  partOfYourStack: PART_OF_YOUR_STACK,
  scaleToCode: SCALE_TO_CODE,
  cta: CTA,
};
