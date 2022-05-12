import clsx from 'clsx';
import React from 'react';

import ainouzGali from './images/ainouz-gali.jpg';
import monthContributorIcon from './images/contributor-of-the-month.svg';
import yearContributorIcon from './images/contributor-of-the-year.svg';
import davidSoderberg from './images/david-soderberg.jpg';
import bronzeMedalIcon from './images/medal-bronze.svg';
import goldMedalIcon from './images/medal-gold.svg';
import silverMedalIcon from './images/medal-silver.svg';
import mrNewbie from './images/mr-newbie.jpg';
import rockStarIcon from './images/rock-star.svg';
import starReporterIcon from './images/star-reporter.svg';
import teamPlayerIcon from './images/team-player.svg';
import tylerDurden from './images/tyler-durden.jpg';

const ACHIEVEMENT_ITEMS = [
  {
    icon: rockStarIcon,
    title: 'Rock Star',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [
      { userName: 'davidsoderberg', avatar: davidSoderberg, lastActivity: '1 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
      { userName: 'tylerdurden', avatar: tylerDurden, activityDauserNe: '3 days ago' },
      { userName: 'ainouzgali', avatar: ainouzGali, lastActivity: '4 days ago' },
    ],
  },
  {
    icon: yearContributorIcon,
    title: 'Contributor of the year',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [
      { userName: 'davidsoderberg', avatar: davidSoderberg, lastActivity: '1 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
    ],
  },
  {
    icon: monthContributorIcon,
    title: 'Contributor of the month',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [
      { userName: 'davidsoderberg', avatar: davidSoderberg, lastActivity: '1 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
      { userName: 'tyler-durden', avatar: tylerDurden, lastActivity: '3 days ago' },
    ],
  },
  {
    icon: starReporterIcon,
    title: 'Star Reporter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [{ userName: 'tyler-durden', avatar: tylerDurden, lastActivity: '3 days ago' }],
  },
  {
    icon: teamPlayerIcon,
    title: 'Team Player',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    users: [
      { userName: 'davidsoderberg', avatar: davidSoderberg, lastActivity: '1 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
      { userName: 'tyler-durden', avatar: tylerDurden, lastActivity: '3 days ago' },
      { userName: 'ainouzgali', avatar: ainouzGali, lastActivity: '4 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
      { userName: 'tyler-durden', avatar: tylerDurden, lastActivity: '3 days ago' },
    ],
  },
];

const MEDAL_ITEMS = [
  {
    icon: goldMedalIcon,
    title: 'Gold Medal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [
      { userName: 'davidsoderberg', avatar: davidSoderberg, lastActivity: '1 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
      { userName: 'tyler-durden', avatar: tylerDurden, lastActivity: '3 days ago' },
    ],
  },
  {
    icon: silverMedalIcon,
    title: 'Silver Medal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [
      { userName: 'davidsoderberg', avatar: davidSoderberg, lastActivity: '1 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
    ],
  },
  {
    icon: bronzeMedalIcon,
    title: 'Bronze Medal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [{ userName: 'ainouzgali', avatar: ainouzGali, lastActivity: '4 days ago' }],
  },
];

const Achievments = () => (
  <section className="safe-paddings">
    <div className="bg-gray-2">
      <ul className="container flex max-w-[1008px] flex-col">
        {ACHIEVEMENT_ITEMS.map(({ icon, title, description, users }, index) => (
          <li
            className="flex border-b border-dashed border-gray-5 py-20 last:border-none"
            key={index}
          >
            <img
              src={icon}
              className="mr-1 h-[196px] w-[196px]"
              width={196}
              height={196}
              loading="lazy"
              alt="achievment-icon"
            />
            <div className="ml-28 flex flex-col items-start">
              <h3 className={clsx('text-4xl leading-tight')}>{title}</h3>
              <div className="mt-4 text-lg font-light leading-snug text-gray-10">{description}</div>
              <ul className="mt-8 flex w-full flex-wrap justify-between">
                {users.map(({ userName, avatar, lastActivity }, index) => (
                  <li className="my-4 flex min-w-[332px] rounded-[12px] bg-black p-5" key={index}>
                    <img
                      className="mr-3 rounded-full"
                      width={48}
                      height={48}
                      src={avatar}
                      loading="lazy"
                      alt="userphoto"
                    />
                    <div className="flex flex-col justify-around">
                      <p className="text-lg leading-denser text-primary-1">@{userName}</p>
                      <p className="text-sm leading-denser">
                        Last activity:
                        <span className="text-sm text-secondary-2"> {lastActivity}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="">
      <ul className="container flex max-w-[1008px] flex-col">
        {MEDAL_ITEMS.map(({ icon, title, description, users }, index) => (
          <li
            className="flex border-b-[1px] border-dashed border-gray-5 py-20 last:border-none"
            key={index}
          >
            <img
              src={icon}
              className="mr-1 h-[222px] w-[196px]"
              height={222}
              width={196}
              loading="lazy"
              alt="achievment-icon"
            />
            <div className="ml-28 flex flex-col items-start">
              <h3 className={clsx('text-4xl leading-tight')}>{title}</h3>
              <div className="mt-4 text-lg font-light leading-snug text-gray-10">{description}</div>
              <ul className="mt-8 flex w-full flex-wrap justify-between">
                {users.map(({ userName, avatar, lastActivity }, index) => (
                  <li className="my-4 flex min-w-[332px] rounded-[12px] bg-gray-2 p-5" key={index}>
                    <img
                      className="mr-3 h-12 w-12 rounded-full"
                      src={avatar}
                      loading="lazy"
                      alt="userphoto"
                    />
                    <div className="flex flex-col justify-around">
                      <p className="text-lg leading-denser text-primary-1">@{userName}</p>
                      <p className="text-sm leading-denser">
                        Last activity:
                        <span className="text-secondary-2"> {lastActivity}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Achievments;
