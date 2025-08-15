import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import calendarIcon from 'images/icons/calendar.svg';
import consolidationIcon from 'images/icons/consolidation.svg';
import contextIcon from 'images/icons/context.svg';
import customizationIcon from 'images/icons/customization.svg';
import digestIcon from 'images/icons/digest.svg';
import flexibilityIcon from 'images/icons/flexibility.svg';
import intervalIcon from 'images/icons/interval.svg';
import selectionIcon from 'images/icons/selection.svg';
import settingsIcon from 'images/icons/settings.svg';

const HERO = {
  title: 'Digest notifications and stop over-notifying',
  description:
    'Consolidate multiple events into a single message, reducing notification overload while keeping users informed. Optimize workflows with custom grouping, time intervals, and strategies tailored to your communication needs.',
  image: (
    <div className="absolute left-1/2 top-1/2 -translate-x-[58%] -translate-y-[46%] lg:-translate-x-1/2 md:-translate-x-[53%] sm:top-0 sm:-translate-y-28 sm-xs:-translate-y-16">
      <StaticImage
        className="h-auto w-[1064px] lg:w-[900px] md:w-[670px] sm-xs:w-[530px]"
        src="../../../images/pages/digest/notifications-workflow.jpg"
        alt=""
        loading="eager"
        width={1198}
        height={1195}
        quality={100}
      />
      <span className="absolute inset-0 shadow-[inset_0_0_20px_20px_#000000]" />
    </div>
  ),
};

const BATCH_NOTIFICATIONS = {
  title: 'Everything you need to quickly batch notifications',
  button: {
    label: 'Learn more',
    link: 'https://docs.novu.co/workflow/digest',
  },
  items: [
    {
      icon: consolidationIcon,
      title: 'Event consolidation',
      description: 'Combine multiple events into a single notification.',
    },
    {
      icon: customizationIcon,
      title: 'Custom grouping',
      description: 'Customize event grouping by type or frequency.',
    },
    {
      icon: intervalIcon,
      title: 'Interval scheduling',
      description: (
        <>
          Set specific times for digest
          <br />
          delivery.
        </>
      ),
    },
    {
      icon: flexibilityIcon,
      title: 'Flexible strategy',
      description: 'Choose between time-based and event-based aggregation.',
    },
    {
      icon: contextIcon,
      title: 'Context preservation',
      description: 'Ensure relevant context accompanies digested notifications.',
    },
    {
      icon: settingsIcon,
      title: 'User control',
      description: 'Reduce fatigue while ensuring key updates reach users.',
    },
  ],
};

const DIGEST_STRATEGIES = {
  title: 'Multiple digest strategies that work',
  description:
    "Batch notifications in a set window, or look back to the last received notification and make a game time decision. It's all configurable for set-it and forget-it notification digests.",
  image: (
    <div className="absolute left-1/2 top-1/2 -translate-x-[42.3%] -translate-y-[59%] lg:-translate-x-1/2 md:-translate-x-[49%] sm:top-0 sm:-translate-y-24 sm-xs:-translate-y-12">
      <StaticImage
        className="h-auto w-[990px] lg:w-[720px] md:w-[520px] sm:w-[620px] sm-xs:w-[430px]"
        src="../../../images/pages/digest/strategies.jpg"
        alt=""
        width={729}
        height={521}
        quality={100}
      />
      <span className="absolute inset-0 shadow-[inset_0_0_20px_20px_#000000]" />
    </div>
  ),
  button: {
    label: 'Learn more',
    hiddenLabel: 'about multiple digest strategies',
    link: 'https://docs.novu.co/workflow/digest',
  },
  theme: 'imageRight',
};

const NOTIFICATION_FATIGUE = {
  title: 'Eliminate notification fatigue',
  description:
    'Novu makes it easy to insert digest steps into your notifications workflows, and delivers complete flexibility to adjust notification frequency and content.',
  image: (
    <div className="absolute left-1/2 top-1/2 -translate-x-[68%] -translate-y-[62%] lg:-translate-x-[62%] lg:-translate-y-[65%] md:-translate-x-[63%] sm:top-0 sm:-translate-y-44 sm-xs:-translate-y-24">
      <StaticImage
        className="h-auto w-[902px] lg:w-[620px] md:w-[480px] sm:w-[600px] sm-xs:w-96"
        src="../../../images/pages/digest/fatigue.jpg"
        alt=""
        width={902}
        height={789}
        quality={100}
      />
      <span className="absolute inset-0 shadow-[inset_0_0_20px_20px_#000000]" />
    </div>
  ),
  button: {
    label: 'Learn more',
    hiddenLabel: 'how to eliminate notification fatigue',
    link: 'https://docs.novu.co/workflow/digest',
  },
};

const USE_CASES = {
  title: 'Digest use case examples',
  button: {
    label: 'Create Your First workflow',
    link: 'https://go.novu.co/dashboard',
  },
  isCentered: true,
  items: [
    {
      icon: digestIcon,
      title: 'Workflow digest',
      description: 'Summary workflow for digesting multiple notifications',
    },
    {
      icon: calendarIcon,
      title: 'Define digest step',
      description: 'Add a simple timed digest step to your workflow.',
    },
    {
      icon: selectionIcon,
      title: 'Select a digest strategy',
      description: 'Learn about the regular, look-back, and scheduled digest steps.',
    },
  ],
};

const CTA = {
  title: "You're five minutes away from your first Novu-backed notification",
  description:
    'Create a free account, send your first notification, all before your coffee gets cold... no credit card required.',
  leftItem: { text: 'Get started', link: 'https://go.novu.co/dashboard' },
  rightItem: { text: 'Contact us', link: 'https://novu.co/contact-us' },
};

export default {
  hero: HERO,
  batchNotifications: BATCH_NOTIFICATIONS,
  digestStrategies: DIGEST_STRATEGIES,
  notificationFatigue: NOTIFICATION_FATIGUE,
  useCases: USE_CASES,
  cta: CTA,
};
