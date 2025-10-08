import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import AlertDrivingLogo from 'images/customers/logo-alert-driving.svg';
import BalanceLogo from 'images/customers/logo-balance.svg';
import BitmexLogo from 'images/customers/logo-bitmex.svg';
import BppLogo from 'images/customers/logo-bpp.svg';
import CheckSammyLogo from 'images/customers/logo-check-sammy.svg';
import CheckpointLogo from 'images/customers/logo-checkpoint.svg';
import ClaritasRxLogo from 'images/customers/logo-claritas-rx.svg';
import CloudSoftwareGroupLogo from 'images/customers/logo-cloud-software-group.svg';
import CorrelaLogo from 'images/customers/logo-correla.svg';
import DerivLogo from 'images/customers/logo-deriv.svg';
import DocplannerGroupLogo from 'images/customers/logo-docplanner-group.svg';
import EburyLogo from 'images/customers/logo-ebury.svg';
import ElProffenLogo from 'images/customers/logo-el-proffen.svg';
import EvergreenLogo from 'images/customers/logo-evergreen.svg';
import GuestyLogo from 'images/customers/logo-guesty.svg';
import HemnetLogo from 'images/customers/logo-hemnet.svg';
import HudlLogo from 'images/customers/logo-hudl.svg';
import InfluencerLogo from 'images/customers/logo-influencer.svg';
import JoyrideLogo from 'images/customers/logo-joyride.svg';
import KantAkademiLogo from 'images/customers/logo-kant-akademi.svg';
import KarmaCheckLogo from 'images/customers/logo-karma-check.svg';
import KornFerryLogo from 'images/customers/logo-korn-ferry.svg';
import LottieFilesLogo from 'images/customers/logo-lottie-files.svg';
import MedPrevLogo from 'images/customers/logo-med-prev.svg';
import MedVolLogo from 'images/customers/logo-med-vol.svg';
import MoisesLogo from 'images/customers/logo-moises.svg';
import MongodbCustomerLogo from 'images/customers/logo-mongodb.svg';
import MothershipLogo from 'images/customers/logo-mothership.svg';
import MottuLogo from 'images/customers/logo-mottu.svg';
import NamirialLogo from 'images/customers/logo-namirial.svg';
import NepLogo from 'images/customers/logo-nep.svg';
import NormativeLogo from 'images/customers/logo-normative.svg';
import NovacyLogo from 'images/customers/logo-novacy.svg';
import PhocasLogo from 'images/customers/logo-phocas.svg';
import PriceLabsLogo from 'images/customers/logo-price-labs.svg';
import QuorumCyberLogo from 'images/customers/logo-quorum-cyber.svg';
import Region4Logo from 'images/customers/logo-region4.svg';
import RocheLogo from 'images/customers/logo-roche.svg';
import SherwebLogo from 'images/customers/logo-sherweb.svg';
import SinchLogo from 'images/customers/logo-sinch.svg';
import SoftermiiLogo from 'images/customers/logo-softermii.svg';
import TatilbudurLogo from 'images/customers/logo-tatilbudur.svg';
import TeamcoreLogo from 'images/customers/logo-teamcore.svg';
import TenderdLogo from 'images/customers/logo-tenderd.svg';
import TerrascopeLogo from 'images/customers/logo-terrascope.svg';
import TrustflightLogo from 'images/customers/logo-trustflight.svg';
import UnifiedLogo from 'images/customers/logo-unified.svg';
import UnityCustomerLogo from 'images/customers/logo-unity.svg';
import UnopsLogo from 'images/customers/logo-unops.svg';
import ValueLabsLogo from 'images/customers/logo-value-labs.svg';
import VeridasLogo from 'images/customers/logo-veridas.svg';
import VeritextLogo from 'images/customers/logo-veritext.svg';
import WaltonEnterprisesLogo from 'images/customers/logo-walton-enterprises.svg';
import WhoppahLogo from 'images/customers/logo-whoppah.svg';
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
  title: 'Notifications brands count on',
  description: 'Ensuring seamless notifications from business to users, with zero hassle.',
  items: [
    {
      title: 'Guesty',
      src: GuestyLogo,
    },
    {
      title: 'Sinch',
      src: SinchLogo,
    },
    {
      title: 'Balance',
      src: BalanceLogo,
    },
    {
      title: 'Bitmex',
      src: BitmexLogo,
    },
    {
      title: 'BPP',
      src: BppLogo,
    },
    {
      title: 'Checkpoint',
      src: CheckpointLogo,
    },
    {
      title: 'Claritas Rx',
      src: ClaritasRxLogo,
    },
    {
      title: 'Cloud Software Group',
      src: CloudSoftwareGroupLogo,
    },
    {
      title: 'Deriv',
      src: DerivLogo,
    },
    {
      title: 'Docplanner Group',
      src: DocplannerGroupLogo,
    },
    {
      title: 'Ebury',
      src: EburyLogo,
    },
    {
      title: 'El Proffen',
      src: ElProffenLogo,
    },
    {
      title: 'Evergreen',
      src: EvergreenLogo,
    },

    {
      title: 'Hemnet',
      src: HemnetLogo,
    },
    {
      title: 'Influencer',
      src: InfluencerLogo,
    },
    {
      title: 'Joyride',
      src: JoyrideLogo,
    },
    {
      title: 'Kant Akademi',
      src: KantAkademiLogo,
    },
    {
      title: 'KarmaCheck',
      src: KarmaCheckLogo,
    },
    {
      title: 'Korn Ferry',
      src: KornFerryLogo,
    },
    {
      title: 'LottieFiles',
      src: LottieFilesLogo,
    },
    {
      title: 'MedPrev',
      src: MedPrevLogo,
    },
    {
      title: 'MedVol',
      src: MedVolLogo,
    },
    {
      title: 'Moises',
      src: MoisesLogo,
    },
    {
      title: 'MongoDB',
      src: MongodbCustomerLogo,
    },
    {
      title: 'Mottu',
      src: MottuLogo,
    },
    {
      title: 'Namirial',
      src: NamirialLogo,
    },
    {
      title: 'NEP',
      src: NepLogo,
    },
    {
      title: 'Normative',
      src: NormativeLogo,
    },
    {
      title: 'Novacy',
      src: NovacyLogo,
    },
    {
      title: 'PriceLabs',
      src: PriceLabsLogo,
    },
    {
      title: 'Quorum Cyber',
      src: QuorumCyberLogo,
    },
    {
      title: 'Roche',
      src: RocheLogo,
    },
    {
      title: 'Sherweb',
      src: SherwebLogo,
    },

    {
      title: 'Tatilbudur',
      src: TatilbudurLogo,
    },
    {
      title: 'Teamcore',
      src: TeamcoreLogo,
    },
    {
      title: 'Tenderd',
      src: TenderdLogo,
    },
    {
      title: 'Terrascope',
      src: TerrascopeLogo,
    },
    {
      title: 'Trustflight',
      src: TrustflightLogo,
    },
    {
      title: 'Unified',
      src: UnifiedLogo,
    },
    {
      title: 'Unity',
      src: UnityCustomerLogo,
    },
    {
      title: 'UNOPS',
      src: UnopsLogo,
    },
    {
      title: 'Walton Enterprises',
      src: WaltonEnterprisesLogo,
    },
    {
      title: 'Whoppah',
      src: WhoppahLogo,
    },
  ],
  rows: 2,
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
