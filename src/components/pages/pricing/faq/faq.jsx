import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import Question from './question';

const FAQ_DATA = [
  {
    question: 'What is an event?',
    answer:
      'An event is a request (for instance, an API call to /v1/events/trigger) that starts off an action in the Novu Workflow Engine. Events can make many different types of actions, including digests, delays, and sending notifications to various channels, as well filters and user preference checks. Event count per notification sent differs based on the complexity of your notification workflows.',
  },
  {
    question: 'What is a notification?',
    answer:
      'A notification is any message sent over any channel, after Novu logic engine, Novu user preferences, and your configuration calculated and crafted the message. A notification can be sent to an email, in-app Inbox, chat, push, and more.',
  },
  {
    question: 'What are the differences between Novu Cloud and Open Source?',
    answer: (
      <>
        <Link to="https://github.com/novuhq/novu" target="_blank" rel="noreferrer" theme="primary">
          The Novu Project
        </Link>{' '}
        is an open source notifications system that is built and maintained by Novu and the Novu
        community. You can download, modify, build and deploy it yourself, or use pre-built{' '}
        <Link
          to="https://docs.novu.co/community/self-hosting-novu/introduction?utm_campaign=ws-faq"
          target="_blank"
          rel="noreferrer"
          theme="primary"
        >
          Docker images
        </Link>{' '}
        to more easily run it in your local environment. Novu Cloud is based on the Novu Project,
        and is a managed service that we deploy, and manage as a service. It is the most scalable
        and robust way to enable industry-leading notifications in your apps and website. Novu Cloud
        includes SLAs, and additional business-level features that are not available in the open
        source Novu Project.
      </>
    ),
  },
  {
    question: 'How many notifications can I send on Novu Cloud?',
    answer:
      "Virtually any number you need to. In fact, sending is more often limited by your configured providers than Novu Cloud. In general, you won't have to worry about it.",
  },
  {
    question: 'In what regions is Novu Cloud hosted?',
    answer: 'Novu Cloud instances are deployed in the US (East coast), and the EU (Germany).',
  },
  {
    question: 'Do you offer an enterprise plan?',
    answer: (
      <>
        Yes. Enterprise plans are available for businesses that require extended enterprise-grade
        features, and specific SLAs or have unique concerns about PII, security, insurance, or
        legal.{' '}
        <Link
          to="/contact-us/?utm_campaign=pricing-enterprise-faq"
          target="_blank"
          rel="noreferrer"
          theme="primary"
        >
          Contact us
        </Link>{' '}
        to learn more.
      </>
    ),
  },
  {
    question: 'Do you offer enterprise support?',
    answer:
      'As part of our enterprise plan, you’ll get our usual support channels as well as a Microsoft Teams/Slack/Discord channel. In case you want to add an enterprise support plan, with dedicated technical support, we are happy to offer that next to an active enterprise plan.',
  },
  {
    question: 'I need more events or enterprise features, can you help?',
    answer: (
      <>
        We sure can. We are happy to work with enterprises and build Novu to support both their
        needs as well as the grand community ones. From new features, security, and privacy, or if
        you need to send dozens or tens of millions of events a month, we are here to help.{' '}
        <Link
          to="/contact-us/?utm_campaign=ws-faq"
          target="_blank"
          rel="noreferrer"
          theme="primary"
        >
          Contact us
        </Link>{' '}
        or{' '}
        <Link
          to="https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=ws-faq"
          target="_blank"
          rel="noreferrer"
          theme="primary"
        >
          book a meeting
        </Link>{' '}
        so we can learn how to help you answer your question.
      </>
    ),
  },
  {
    question: 'What should I do if I have regulatory or security issues with PII?',
    answer: (
      <>
        We regularly work with big companies and are happy to help and support you with guidance,
        and various compliance needs including reports to ease your security and legal team. If you
        have very complicated PII needs,{' '}
        <Link
          to="/contact-us/?utm_campaign=ws-faq"
          target="_blank"
          rel="noreferrer"
          theme="primary"
        >
          contact us
        </Link>{' '}
        or{' '}
        <Link
          to="https://notify.novu.co/meetings/novuhq/novu-discovery-session-rr?utm_campaign=ws-faq"
          target="_blank"
          rel="noreferrer"
          theme="primary"
        >
          book a meeting
        </Link>{' '}
        to discuss more.
      </>
    ),
  },
  {
    question: 'What is your Service Level Agreement (SLA)?',
    answer: (
      <>
        Our cloud uptime SLA is 99.99%. We also offer a support ticket SLA for our Business and
        Enterprise tier plans, which includes a private Slack channel with our support team. Free
        tier and the Novu Project are supported via{' '}
        <Link to="https://discord.novu.co" theme="primary">
          Discord
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Can I use Novu free of charge?',
    answer:
      'Yes, you can. If you send less than 30K events per month, then Novu Cloud is entirely free. Another option is to deploy the Open-Source version of Novu onto your own infrastructure, but that does not give you the unique SLA and global redundancy we have in the Cloud version of Novu.',
  },
];

const FAQ = () => (
  <section className="safe-paddings bg-gray-2 py-20 lg:py-16 md:py-12 sm:py-10">
    <div className="container-md text-center">
      <Heading className="leading-tight md:text-5xl sm:text-4xl" size="xl" tag="h2" theme="white">
        Frequently Asked Questions
      </Heading>
      <p className="mt-7 text-lg font-book text-gray-9 lg:mt-5 sm:mt-4 sm:text-base">
        Looking for answers? Here are some common questions we've been asked.
      </p>
      <ul className="mt-16 divide-y divide-gray-3 border-y border-gray-3 xl:mt-10">
        {FAQ_DATA.map((questionItem, index) => (
          <Question {...questionItem} key={index} />
        ))}
      </ul>
    </div>
  </section>
);

export default FAQ;
