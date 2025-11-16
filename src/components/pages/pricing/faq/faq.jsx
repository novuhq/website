import PropTypes from 'prop-types';
import React, { useMemo, useCallback } from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import Question from './question';

const FAQ_DATA = [
  {
    question: 'What is a workflow run?',
    answer: (
      <>
        A workflow run is one execution of a workflow. Triggering a workflow to a single subscriber
        counts as 1 run; triggering to a{' '}
        <Link
          to="https://docs.novu.co/concepts/topics"
          target="_blank"
          rel="noreferrer"
          theme="primary"
        >
          topic
        </Link>{' '}
        with 100 subscribers counts as 100 runs after fan-out.
      </>
    ),
  },
  {
    question: 'How is pricing calculated?',
    answer: (
      <>
        Pricing is based on the total number of workflow runs executed across all environments each
        month.
      </>
    ),
  },
  {
    question: 'What happens if I exceed my monthly workflow run limit?',
    answer: (
      <>
        We never stop or throttle your notifications. Usage above your plan rolls into on‑demand
        pricing or, for Enterprise, your contract rate.{' '}
        <Link to="#" theme="primary" data-action="schedule">
          Schedule a call
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Do you charge per notification or per user?',
    answer: (
      <>
        No. Billing is per workflow run, not per user or message. Subscribers are unlimited on paid
        plans.
      </>
    ),
  },
  {
    question: 'Can I use Novu free of charge?',
    answer: (
      <>
        Yes. Novu Cloud is free up to 10,000 workflow runs per month. You can also self‑host the
        open‑source Novu Project.
      </>
    ),
  },
  {
    question: 'Do you offer annual or volume discounts?',
    answer: (
      <>
        Yes. We offer reduced annual pricing and volume‑based tiers. Enterprise customers receive
        custom bundle pricing.{' '}
        <Link to="#" theme="primary" data-action="schedule">
          Schedule a call
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Which regions do you support and how is data residency handled?',
    answer: (
      <>
        All plans support US and EU regions. Enterprise can use additional regions (Singapore, UK,
        Australia, Japan, South Korea) or request custom regions/VPC hosting.{' '}
        <Link to="#" theme="primary" data-action="schedule">
          Schedule a call
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Is Novu HIPAA compliant? Do you sign BAAs?',
    answer: (
      <>
        Yes. Our Enterprise plan supports HIPAA compliance and BAAs.{' '}
        <Link to="#" theme="primary" data-action="schedule">
          Schedule a call
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What data does Novu store and log?',
    answer: (
      <>
        We store only the data needed to deliver and display notifications (subscriber identifiers,
        channel addresses, metadata). Enterprise can request custom logging, deletion workflows, or
        bring‑your‑own database.{' '}
        <Link to="#" theme="primary" data-action="schedule">
          Schedule a call
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What is your Service Level Agreement (SLA)?',
    answer: (
      <>
        Cloud uptime SLA is 99.9%. Business and Enterprise plans include a support ticket SLA and a
        private Slack channel. Free tier and the Novu Project are supported via{' '}
        <Link to="https://discord.novu.co" theme="primary">
          Discord
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Do you offer an Enterprise plan?',
    answer: (
      <>
        Yes. Enterprise adds SLAs, advanced compliance and controls, and deployment options.{' '}
        <Link to="#" theme="primary" data-action="schedule">
          Schedule a call
        </Link>
        .
      </>
    ),
  },
  {
    question:
      'What are the differences between Novu Cloud, Open Source, and Enterprise Self‑Hosted?',
    answer: (
      <>
        <Link to="https://github.com/novuhq/novu" target="_blank" rel="noreferrer" theme="primary">
          The Novu Project
        </Link>{' '}
        is the open‑source core you can run yourself. Novu Cloud is our managed, scalable service
        with SLAs and business features. Enterprise Self‑Hosted adds SSO, RBAC, audit logs, branding
        removal, Helm/Kubernetes tooling, and priority support.{' '}
        <Link to="#" theme="primary" data-action="schedule">
          Schedule a call
        </Link>{' '}
        to discuss which option fits your needs.
      </>
    ),
  },
  {
    question: 'Does Novu support multi‑tenant applications?',
    answer: (
      <>
        Yes. Multi‑tenancy is supported with Contexts for per‑tenant providers, preferences,
        environments, and inbox segregation.
      </>
    ),
  },
  {
    question: 'How hard is it to migrate to Novu?',
    answer: (
      <>
        Most teams migrate in stages: simple events → advanced workflows → preferences and Inbox. We
        can guide architecture reviews and transition planning.{' '}
        <Link to="#" theme="primary" data-action="schedule">
          Schedule a call
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What is included in the Inbox component? Can I bring my own UI?',
    answer: (
      <>
        Use our ready‑made Inbox or build your own with React, React Native, or any JS framework
        using our hooks‑only approach. Custom renderers and themes are supported.
      </>
    ),
  },
  {
    question: 'How many notifications can I send on Novu Cloud?',
    answer: (
      <>
        Practically as many as you need. Throughput is usually constrained by your configured
        providers, not Novu Cloud.
      </>
    ),
  },
];

const FAQ = ({ onOpenScheduling }) => {
  const handleOpenScheduling = useCallback(
    (e, source, faqQuestion) => {
      e.preventDefault();
      // Track FAQ schedule link click analytics with granular question identifier
      window?.analytics?.track('Pricing Event: Click Schedule a Call in FAQ', {
        source,
        question: faqQuestion,
      });
      if (onOpenScheduling) {
        onOpenScheduling(source, faqQuestion);
      }
    },
    [onOpenScheduling]
  );

  // Process FAQ data to make Contact Us links clickable
  const processAnswer = useCallback(
    (answer, question) => {
      if (!answer || typeof answer !== 'object') return answer;

      const processChildren = (children) =>
        React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return child;
          }

          // Check if it's a Link component using stable detection
          if (child.type === Link) {
            const dataAction = child.props['data-action'];

            // Handle links with data-action="schedule" or "contact"
            if (dataAction === 'schedule' || dataAction === 'contact') {
              const existingOnClick = child.props.onClick;
              return React.cloneElement(child, {
                onClick: (e) => {
                  // Call existing onClick handler if present
                  existingOnClick?.(e);
                  e.preventDefault();
                  handleOpenScheduling(e, 'pricing_faq', question);
                },
                to: '#',
                className: `${child.props.className || ''} cursor-pointer`.trim(),
              });
            }
          }

          // Recursively process nested children
          if (child.props && child.props.children) {
            return React.cloneElement(child, {
              children: processChildren(child.props.children),
            });
          }

          return child;
        });

      if (answer.props && answer.props.children) {
        return React.cloneElement(answer, {
          children: processChildren(answer.props.children),
        });
      }

      return answer;
    },
    [handleOpenScheduling]
  );

  const faqDataWithHandlers = useMemo(
    () =>
      FAQ_DATA.map((item) => ({
        ...item,
        answer: processAnswer(item.answer, item.question),
      })),
    [processAnswer]
  );

  return (
    <section className="safe-paddings pb-20 pt-[60px] lg:pb-16 md:pb-5 md:pt-[50px] sm:pb-10">
      <div className="container max-w-[832px] lg:max-w-[914px] sm:px-5">
        <Heading
          className="text-[40px] font-medium leading-denser tracking-snug sm:text-[32px]"
          size="xl"
          tag="h2"
          theme="white"
        >
          Frequently asked questions
        </Heading>
        <ul className="mt-8 divide-y divide-gray-3 border-b border-gray-3 sm:mt-6">
          {faqDataWithHandlers.map((questionItem) => (
            <Question {...questionItem} key={questionItem.question} />
          ))}
        </ul>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  onOpenScheduling: PropTypes.func,
};

FAQ.defaultProps = {
  onOpenScheduling: null,
};

export default FAQ;
