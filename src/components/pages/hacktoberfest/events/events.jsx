import moment from 'moment';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const TITLE = 'Events all month long';
const DESCRIPTION =
  'Join forces in virtual and in-person events to get your pull/merge requests done as a team, learn new skills, and meet lifelong friends.';
const ITEMS = [
  {
    title: 'Hacktoberfest Kick-Off',
    date: moment.utc('2022-10-04T00:00:00'),
    description: '',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'Twitter Spaces',
    date: moment.utc('2022-10-06T15:00:00'),
    description:
      'An -audio-only discussion session about open-source technologies, carear-path, best use cases, and much more.',
    link: 'https://twitter.com/i/spaces/1rmxPkWaAeLJN',
  },
  {
    title: 'Meet Contributors',
    date: moment.utc('2022-10-06T16:00:00'),
    description:
      'An ask-me-anything-like format discussion, with open source maintainers and contributors, where the host and the audience explore their motivations, world view, career path, technologies preferences, and much more!',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'GeekOut Stream',
    date: moment.utc('2022-10-07T11:00:00'),
    description:
      'Live stream where we discuss current tech, approaches, ideas, and projects and have a good time with the audience.',
    link: 'https://www.twitch.tv/iampearceman',
  },
  {
    title: 'GeekOut Stream',
    date: moment.utc('2022-10-14T11:00:00'),
    description:
      'Live stream where we discuss current tech, approaches, ideas, and projects and have a good time with the audience.',
    link: 'https://zoom.us/webinar/register/WN_j-ZtggW2TimqWx5FbspHoA',
  },
  {
    title: 'Meet Contributors',
    date: moment.utc('2022-10-17T12:00:00'),
    description:
      'An ask-me-anything-like format discussion, with open source maintainers and contributors, where the host and the audience explore their motivations, world view, career path, technologies preferences, and much more!',
    link: 'https://zoom.us/webinar/register/WN_0ae0nStASqC9N8brrn21fA',
  },
  {
    title: 'Novu with Appwrite',
    date: moment.utc('2022-10-17T16:00:00'),
    description:
      'Live event, usually in an interview / workshop or a webinar form, where we host special guests from the tech industry with specific expertise to share their knowledge, skills, and insights.',
    link: 'https://zoom.us/webinar/register/WN_d0sMzXKwS0OTzY7BMU_sLQ',
  },
  {
    title: 'Novu AMA Session',
    date: moment.utc('2022-10-18T15:00:00'),
    description: '',
    link: 'https://zoom.us/webinar/register/WN_C6laJ2hqQeGI0JbGHKD_YA',
  },
  {
    title: 'Novu Live Demo',
    date: moment.utc('2022-10-19T15:00:00'),
    description: '',
    link: 'https://zoom.us/webinar/register/WN_7JTEufxDTmG0B3m3ilvuMQ',
  },
  {
    title: 'Novu with Wix',
    date: moment.utc('2022-10-20T17:00:00'),
    description:
      'Live event, usually in an interview / workshop or a webinar form, where we host special guests from the tech industry with specific expertise to share their knowledge, skills, and insights.',
    link: 'https://zoom.us/webinar/register/WN_clfNRgknSwKINke1vobGyA',
  },
  {
    title: 'GeekOut Stream',
    date: moment.utc('2022-10-21T11:00:00'),
    description:
      'Live stream where we discuss current tech, approaches, ideas, and projects and have a good time with the audience.',
    link: 'https://zoom.us/webinar/register/WN_5FH8pt8bS562fipvnuhWFA',
  },
  {
    title: 'Pull Request Party',
    date: moment.utc('2022-10-25T11:00:00'),
    description:
      'Live event where Novu’s core team, moderators, and contributors are helping people to create their first Pull Request, solve problems and conflicts, do live code reviews, and much more!',
    link: 'https://zoom.us/webinar/register/WN_0dQOotoeTZOU29IyaGvnHg',
  },
  {
    title: 'Office Hours',
    date: moment.utc('2022-10-25T15:00:00'),
    description:
      'Community-based live event where Novu’s core team members show and tell about the latest features, development process, roadmap view, discuss potential plans, feature ideas,  and answer questions.',
    link: 'https://discord.com/events/895029566685462578/1025554506504732702',
  },
  {
    title: 'Novu with AppWrite',
    date: moment.utc('2022-10-27T16:00:00'),
    description:
      'AppWrite is hosting Novu’s team members to showcase the project, demonstrate how it works and how to contribute.',
    link: 'https://www.youtube.com/watch?v=obRy9Afsxs0&ab_channel=Appwrite',
  },
  {
    title: 'GeekOut Stream',
    date: moment.utc('2022-10-28T11:00:00'),
    description:
      'Live stream where we discuss current tech, approaches, ideas, and projects and have a good time with the audience.',
    link: 'https://zoom.us/webinar/register/WN_DolrAwgLSKOGXEFR7vk36Q',
  },
  {
    title: 'Novu with Joshua',
    date: moment.utc('2022-10-30T14:00:00'),
    description:
      'Live event, usually in an interview / workshop or a webinar form, where we host special guests from the tech industry with specific expertise to share their knowledge, skills, and insights.',
    link: 'https://zoom.us/webinar/register/WN_hx7WZgd8QdOFvDmQTC13lg',
  },
  {
    title: 'Closing Event',
    date: moment.utc('2022-10-31T14:00:00'),
    description:
      'Live event where we celebrate the end of this amazing month, going over significant contributions, sharing insights and upcoming events, along with thanking all our collaborators and partners.',
    link: 'https://zoom.us/webinar/register/WN_FvBZpu7xQM29hOgbQGCUmg',
  },
];
const Events = () => (
  <section className="events safe-paddings mt-8 py-32 md:py-20 sm:py-16">
    <div className="container-lg text-center">
      <Heading className="leading-tight md:text-5xl sm:text-4xl" tag="h2" size="xl" theme="white">
        {TITLE}
      </Heading>
      <p className="mx-auto mt-11 max-w-[716px] text-lg text-gray-9 md:mt-8 md:max-w-none md:text-base">
        {DESCRIPTION}
      </p>
      <div className="mt-16 grid auto-rows-fr grid-cols-4 gap-x-10 gap-y-7 xl:grid-cols-2 md:mt-12 sm:mt-10 sm:auto-rows-auto sm:grid-cols-1 sm:gap-y-6">
        {ITEMS.map(({ title, date, description, link }, index) => {
          const isExternal = link.startsWith('http');
          return (
            <div
              className="flex flex-col rounded-[20px] py-6 px-5"
              style={{
                opacity: moment().isAfter(date) ? 0.5 : 1,
                filter: moment().isAfter(date) ? 'grayscale(100%)' : 'grayscale(0%)',
                pointerEvents: moment().isAfter(date) ? 'none' : '',
                background:
                  'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%), #000000',
              }}
              key={index}
            >
              <Heading
                className="mb-5 whitespace-nowrap font-medium leading-snug md:text-xl"
                tag="h3"
                size="xs"
                theme="purple"
              >
                {title}
              </Heading>
              <div className="flex flex-1 shrink flex-col">
                <span className="flex justify-center space-x-5 text-lg font-medium sm:text-base">
                  <date>{date.local().format('LLL')}</date>
                </span>
                <span className="mt-1 mb-5 text-lg text-gray-9 sm:text-base">{description}</span>
                <Button
                  className="mt-auto h-7 self-center"
                  theme="yellow"
                  to={link}
                  target={isExternal ? '_blank' : null}
                  rel={isExternal ? 'noopener noreferrer' : null}
                  size="xs"
                >
                  RSVP NOW!
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Events;
