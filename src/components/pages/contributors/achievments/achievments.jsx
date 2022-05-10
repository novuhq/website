import clsx from 'clsx';
import React from 'react';

import iconContributorMonth from './images/contributor-of-the-month.svg';
import iconContributorYear from './images/contributor-of-the-year.svg';
import iconMedalBronze from './images/medal-bronze.svg';
import iconMedalGold from './images/medal-gold.svg';
import iconMedalSilver from './images/medal-silver.svg';
import iconRockStar from './images/rock-star.svg';
import iconStarReporter from './images/star-reporter.svg';
import iconTeamPlayer from './images/team-player.svg';
import userPhoto1 from './images/user-photo1.jpg';
import userPhoto2 from './images/user-photo2.jpg';
import userPhoto3 from './images/user-photo3.jpg';
import userPhoto4 from './images/user-photo4.jpg';

const ACHIEVEMENT_ITEMS = [
  {
    icon: iconRockStar,
    title: 'Rock Star',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [
      { name: 'davidsoderberg', photo: userPhoto2, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto3, activityDate: '3' },
      { name: 'davidsoderberg', photo: userPhoto1, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto4, activityDate: '3' },
    ],
  },
  {
    icon: iconContributorYear,
    title: 'Contributor of the year',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [
      { name: 'davidsoderberg', photo: userPhoto1, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto3, activityDate: '3' },
    ],
  },
  {
    icon: iconContributorMonth,
    title: 'Contributor of the month',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [
      { name: 'davidsoderberg', photo: userPhoto1, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto2, activityDate: '3' },
      { name: 'davidsoderberg', photo: userPhoto3, activityDate: '3' },
    ],
  },
  {
    icon: iconStarReporter,
    title: 'Star Reporter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [{ name: 'davidsoderberg', photo: userPhoto2, activityDate: '3' }],
  },
  {
    icon: iconTeamPlayer,
    title: 'Team Player',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    users: [
      { name: 'davidsoderberg', photo: userPhoto1, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto2, activityDate: '3' },
      { name: 'davidsoderberg', photo: userPhoto3, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto4, activityDate: '3' },
      { name: 'davidsoderberg', photo: userPhoto3, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto2, activityDate: '3' },
    ],
  },
];

const MEDAL_ITEMS = [
  {
    icon: iconMedalGold,
    title: 'Gold Medal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [
      { name: 'davidsoderberg', photo: userPhoto2, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto3, activityDate: '3' },
      { name: 'davidsoderberg', photo: userPhoto4, activityDate: '3' },
    ],
  },
  {
    icon: iconMedalSilver,
    title: 'Silver Medal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [
      { name: 'davidsoderberg', photo: userPhoto1, activityDate: '3' },
      { name: 'ainouzgali', photo: userPhoto4, activityDate: '3' },
    ],
  },
  {
    icon: iconMedalBronze,
    title: 'Bronze Medal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [{ name: 'davidsoderberg', photo: userPhoto4, activityDate: '3' }],
  },
];

const Achievments = () => (
  <section className="safe-paddings m-x-auto">
    <div className="bg-gray-2">
      <ul className="container flex max-w-[1008px] flex-col">
        {ACHIEVEMENT_ITEMS.map(({ icon, title, description, users }, index) => (
          <li
            className="flex border-b-[1px] border-dashed border-gray-5 py-20 last:border-none"
            key={index}
          >
            <img
              src={icon}
              className="max-h-[176px] max-w-[176px]"
              loading="lazy"
              alt="achievment-icon"
            />
            <div className="ml-34 flex flex-col items-start">
              <h3 className={clsx('text-4xl leading-tight')}>{title}</h3>
              <div className="mt-4 text-lg font-light leading-snug text-gray-10">{description}</div>
              <ul className="mt-8 flex w-full flex-wrap items-stretch justify-between ">
                {users.map(({ name, photo, activityDate }, index) => (
                  <li className="my-4 flex min-w-[332px] rounded-[12px] bg-black p-5" key={index}>
                    <img
                      className="mr-3 h-12 w-12 rounded-[24px]"
                      src={photo}
                      loading="eager"
                      alt="userphoto"
                    />
                    <div className="my-auto flex flex-col">
                      <p className="text-lg text-primary-1">@{name}</p>
                      <p className="text-sm">
                        Last activity:
                        <span className="text-sm text-secondary-2"> {activityDate} days ago</span>
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
    <div className="bg-black">
      <ul className="container flex max-w-[1008px] flex-col">
        {MEDAL_ITEMS.map(({ icon, title, description, users }, index) => (
          <li
            className="flex border-b-[1px] border-dashed border-gray-5 py-20 last:border-none"
            key={index}
          >
            <img
              src={icon}
              className="max-h-[210px] max-w-[176px]"
              loading="lazy"
              alt="achievment-icon"
            />
            <div className="ml-34 flex flex-col items-start">
              <h3 className={clsx('text-4xl leading-tight')}>{title}</h3>
              <div className="mt-4 text-lg font-light leading-snug text-gray-10">{description}</div>
              <ul className="mt-8 flex w-full flex-wrap justify-between ">
                {users.map(({ name, photo, activityDate }, index) => (
                  <li className="my-4 flex min-w-[332px] rounded-[12px] bg-gray-2 p-5 " key={index}>
                    <img
                      className="mr-3 h-12 w-12 rounded-[24px]"
                      src={photo}
                      loading="eager"
                      alt="userphoto"
                    />
                    <div className="my-auto flex flex-col">
                      <p className="text-lg text-primary-1">@{name}</p>
                      <p className="text-sm">
                        Last activity:
                        <span className="text-sm text-secondary-2"> {activityDate} days ago</span>
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
