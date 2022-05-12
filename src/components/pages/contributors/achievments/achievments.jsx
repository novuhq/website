import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import ainouzGali from './images/ainouz-gali.jpg';
import davidSoderberg from './images/david-soderberg.jpg';
import mrNewbie from './images/mr-newbie.jpg';
import tylerDurden from './images/tyler-durden.jpg';

const ACHIEVEMENT_ITEMS = [
  {
    icon: (
      <StaticImage
        className="-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0"
        src="./images/rock-star.png"
      />
    ),
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
    icon: (
      <StaticImage
        className="-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0"
        src="./images/contributor-of-the-year.png"
      />
    ),
    title: 'Contributor of the year',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [
      { userName: 'davidsoderberg', avatar: davidSoderberg, lastActivity: '1 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
    ],
  },
  {
    icon: (
      <StaticImage
        className="-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0"
        src="./images/contributor-of-the-month.png"
      />
    ),
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
    icon: (
      <StaticImage
        className="-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0"
        src="./images/reporter-star.png"
      />
    ),
    title: 'Star Reporter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra. Eget et pharetra, arcu, egestas tortor libero turpis.',
    users: [{ userName: 'tyler-durden', avatar: tylerDurden, lastActivity: '3 days ago' }],
  },
  {
    icon: (
      <StaticImage
        className="-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0"
        src="./images/team-player.png"
      />
    ),
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
    icon: (
      <StaticImage
        className="-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0"
        src="./images/gold-medal.png"
      />
    ),
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
    icon: (
      <StaticImage
        className="-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0"
        src="./images/silver-medal.png"
      />
    ),
    title: 'Silver Medal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [
      { userName: 'davidsoderberg', avatar: davidSoderberg, lastActivity: '1 days ago' },
      { userName: 'mr-newbie', avatar: mrNewbie, lastActivity: '2 days ago' },
    ],
  },
  {
    icon: (
      <StaticImage
        className="-mx-5 -my-4 h-[216px] w-[216px] flex-shrink-0"
        src="./images/bronze-medal.png"
      />
    ),
    title: 'Bronze Medal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ultrices mattis nulla quisque risus. In porttitor fames leo eget id viverra.',
    users: [{ userName: 'ainouzgali', avatar: ainouzGali, lastActivity: '4 days ago' }],
  },
];

const Achievments = () => (
  <section className="safe-paddings">
    <div className="bg-gray-2 pt-40">
      <div className="container-lg grid grid-cols-12 gap-x-8 md:flex md:flex-col">
        <div className="col-start-2 col-end-12">
          {ACHIEVEMENT_ITEMS.map(({ icon, title, description, users }, index) => (
            <div
              className="flex border-b border-dashed border-gray-5 py-20 last:border-none"
              key={index}
            >
              {icon}
              <div className="ml-28 flex flex-col items-start">
                <h3 className={clsx('text-4xl leading-tight')}>{title}</h3>
                <div className="mt-4 text-lg font-light leading-snug text-gray-10">
                  {description}
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>

    <div>
      <ul className="container flex max-w-[1008px] flex-col">
        {MEDAL_ITEMS.map(({ icon, title, description, users }, index) => (
          <li
            className="flex border-b-[1px] border-dashed border-gray-5 py-20 last:border-none"
            key={index}
          >
            {icon}
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
