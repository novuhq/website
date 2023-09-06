import clsx from 'clsx';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

import aws from './images/aws.svg';
import discord from './images/discord.svg';
import mailgun from './images/mailgun.svg';
import mailjet from './images/mailjet.svg';
import mandrill from './images/mandrill.svg';
import msTeams from './images/ms-teams.svg';
import plivo from './images/plivo.svg';
import postmark from './images/postmark.svg';
import sendgrid from './images/sendgrid.svg';
import sendinBlue from './images/sendin-blue.svg';
import slack from './images/slack.svg';
import twilio from './images/twilio.svg';

const TITLE = 'Simple to use outgoing communication layer';
const LINK_NAME = 'Show all services';

const CARDS = [
  {
    icon: twilio,
    title: 'Twilio',
    text: 'SMS',
    to: 'https://github.com/novuhq/novu/tree/main/providers/twilio',
  },
  {
    icon: slack,
    title: 'Slack',
    text: 'Chat',
    to: 'https://github.com/novuhq/novu/tree/main/providers/slack',
  },
  {
    icon: mailgun,
    title: 'Mailgun',
    text: 'Email',
    to: 'https://github.com/novuhq/novu/tree/main/providers/mailgun',
  },
  {
    icon: postmark,
    title: 'Postmark',
    text: 'Email',
    to: 'https://github.com/novuhq/novu/tree/main/providers/postmark',
  },
  {
    icon: sendgrid,
    title: 'Sendgrid',
    text: 'Email',
    to: 'https://github.com/novuhq/novu/tree/main/providers/sendgrid',
  },
  {
    icon: msTeams,
    title: 'MS Teams',
    text: 'Chat',
    to: 'https://github.com/novuhq/novu/tree/main/providers/ms-teams'
  },
  {
    icon: aws,
    title: 'SES',
    text: 'Email',
    to: 'https://github.com/novuhq/novu/tree/main/providers/ses',
  },
  {
    icon: plivo,
    title: 'Plivo',
    text: 'SMS',
    to: 'https://github.com/novuhq/novu/tree/main/providers/plivo',
  },
  {
    icon: sendinBlue,
    title: 'SendinBlue',
    text: 'Email',
    to: 'https://github.com/novuhq/novu/tree/main/providers/sendinblue',
  },
  {
    icon: discord,
    title: 'Discord',
    text: 'Chat',
    to: 'https://github.com/novuhq/novu/tree/main/providers/discord',
  },
  {
    icon: mailjet,
    title: 'Mailjet',
    text: 'Email',
    to: 'https://github.com/novuhq/novu/tree/main/providers/mailjet',
  },
  {
    icon: mandrill,
    title: 'Mandrill',
    text: 'Email',
    to: 'https://github.com/novuhq/novu/tree/main/providers/mandrill',
  },
];

const SimpleUse = () => (
  <section className="simple-use safe-paddings bg-gray-2 pb-30 pt-40 lg:pt-32 lg:pb-24 md:pt-20 md:pb-18 sm:pt-18 sm:pb-12">
    <div className="container flex flex-col items-center">
      <Heading
        size="md"
        tag="h2"
        className="max-w-[764px] text-center leading-tight md:text-3xl"
        theme="white"
      >
        {TITLE}
      </Heading>
      <Link
        className="mt-7 md:mt-8 sm:mt-5 sm:text-xs"
        theme="primary-underline"
        size="sm"
        {...LINKS.providers}
      >
        {LINK_NAME}
      </Link>

      <div className="mt-10 grid w-full grid-cols-6 gap-10 xl:gap-7 lg:grid-cols-4 lg:items-stretch md:grid-cols-3 md:gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-4 xs:grid-cols-1 xs:gap-x-0">
        {CARDS.map(({ icon, title, text, to }, index) => {
          const Tag = to ? Link : 'div';
          return (
            <Tag
              className={clsx('rounded-[20px] bg-black p-4 pb-5 lg:rounded-2xl', {
                group: to,
              })}
              to={to}
              target={to && '_blank'}
              key={index}
            >
              <div className="flex flex-col items-center">
                <img src={icon} width={52} height={52} loading="lazy" alt={title} />
                <h3
                  className={clsx('mt-3 text-lg leading-tight', {
                    'transition-colors duration-200 group-hover:text-primary-1': to,
                  })}
                >
                  {title}
                </h3>
                <div className="relative mt-1">
                  {to ? (
                    <p className="text-sm leading-tight text-gray-8">{text}</p>
                  ) : (
                    <span className="block whitespace-nowrap text-sm leading-none text-secondary-2">
                      Coming Soon...
                    </span>
                  )}
                </div>
              </div>
            </Tag>
          );
        })}
      </div>
    </div>
  </section>
);

export default SimpleUse;
