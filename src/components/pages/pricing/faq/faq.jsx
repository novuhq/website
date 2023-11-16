import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import Question from './question';

const FAQ_DATA = [
  {
    question: 'What is a trigger event?',
    answer:
      'A trigger event (also called an event) is a request that kicks off a process in Novu logic engine (API call to /v1/events/trigger for example). A trigger event can make many different types of actions, including digests, delays, and sending notifications to various channels, as well filters and user preference checks. You are charged for trigger event that starts a process in the logic engine for each unique subscriber.',
  },
  {
    question: 'What is a notification?',
    answer:
      'A notification is any message sent over any channel, after Novu logic engine, Novu user preferences, and your configuration calculated and crafted the message. A notification can be sent to an email, In-App notification center, chat, push, and more.',
  },
  {
    question: 'What are the differences between Novu Cloud and Open Source?',
    answer: (
      <>
        Novu{' '}
        <Link to="https://github.com/novuhq/novu" target="_blank" rel="noreferrer" theme="primary">
          Open source
        </Link>{' '}
        is a technology available under an MIT license, build and maintained by Novu community. You
        can adapt it to your needs, contribute, or simply use docker files and run it. Novu Cloud is
        a managed service run, managed, and maintained by Novu, Cloud version is scalable and robust
        by design, including uptime SLAs, and more business-facing features, that are not available
        under the Open Source version.
      </>
    ),
  },
  {
    question: 'Can I send more than 1 million events a month on Novu Cloud?',
    answer:
      'Yes, you absolutely can. Our managed cloud system was built to scale with your usage, so you don’t have to worry about it.',
  },
  {
    question: 'Do you offer any enterprise plan?',
    answer: (
      <>
        Yes, we do. Enterprise plans are available for teams who require extended enterprise-grade
        features, and specific SLAs or have unique concerns about PII, security, insurance, or
        legal. Feel free to reach out to us over Intercom, or send us an email at{' '}
        <Link to="mailto:sales@novu.co" theme="primary">
          sales@novu.co
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Do you offer an enterprise support plan?',
    answer:
      'As part of our enterprise support, you’ll get our usual support channels as well as a Microsoft Teams/Slack/Discord channel. In case you want to add an enterprise support plan, with dedicated technical support, we are happy to offer that next to an active enterprise plan.',
  },
  {
    question: 'How long is the open beta for? When do you plan to start charging?',
    answer:
      'We plan to convert to the paid version of Novu sometime between Q2 and Q4 of 2023. We will ensure that we contact all of our customers at least x months before the switch so that you have plenty of time to ensure your systems are not impacted.',
  },
  {
    question: 'I need more events or enterprise features, can you help?',
    answer: (
      <>
        We sure can. We are happy to work with enterprises and build Novu to support both their
        needs as well as the grand community ones. From new features, security, and privacy, or if
        you need to send dozens or hundreds of events a month, we are here to help. Feel free to
        reach out to us over Chat, or send us an email at{' '}
        <Link to="mailto:sales@novu.co" theme="primary">
          sales@novu.co
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What should I do if I have regulatory or security issues with PII?',
    answer: (
      <>
        We regularly work with big companies and are happy to help and support you with guidance,
        and various compliances including reports to ease your security and legal team. If you have
        very complicated PII needs, you can use our OS version, Novu Hybrid-Cloud enterprise plan,
        or reach out to us at{' '}
        <Link to="mailto:sales@novu.co" theme="primary">
          sales@novu.co
        </Link>
        , or our support, or{' '}
        <Link to="https://discord.novu.co" theme="primary">
          Discord
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Do you promise any Service Level Agreement (SLA)?',
    answer: (
      <>
        We sure do! First of all we promise uptime SLA for our cloud system for 99.99%. We also
        offer an initial 2 days support SLA, but most enquiries on our Intercom or{' '}
        <Link to="https://discord.novu.co" theme="primary">
          Discord
        </Link>{' '}
        get a response in a couple of hours. For our enterprise plan we can offer upgraded SLA as
        part of the commercial contract.
      </>
    ),
  },
  {
    question: 'Can I use Novu free of charge?',
    answer:
      'Yes, you can. If you send less than 10K events per month, then Novu Cloud is entirely free. Another option is to deploy the Open-Source version of Novu onto your own infrastructure, but that does not give you the unique SLA and global redundancy we have in the Cloud version of Novu.',
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
