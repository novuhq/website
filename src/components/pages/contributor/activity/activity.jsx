import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

import Heading from 'components/shared/heading';
import DEFAULT_EASE from 'constants/default-ease';

import branchIcon from './images/branch.svg';
import commitIcon from './images/commit.svg';
import pullRequestIcon from './images/pull-request.svg';

const TITLE = 'Contribution activity';
const ACTIVITIES = [
  {
    iconName: 'branch',
    date: 'May 1',
    message: 'Created a commit in novuhq/novu repository',
    commit: '📝  Update quick start docs',
  },
  {
    iconName: 'pullRequest',
    date: 'May 1',
    message: 'Created a commit in novuhq/novu repository',
    commit: '🐛  Remove authorization header on signedurl upload',
  },
  {
    iconName: 'commit',
    date: 'May 1',
    message: 'Created a commit in novuhq/novu repository',
    commit: 'Update dal + api HMAC security support',
  },
  {
    iconName: 'branch',
    date: 'May 1',
    message: 'Created a commit in novuhq/novu repository',
    commit: 'Change Providers Constructor Into An Interface',
  },

  {
    iconName: 'branch',
    date: 'May 1',
    message: 'Created a commit in novuhq/novu repository',
    commit: '📝  Update quick start docs',
  },
  {
    iconName: 'pullRequest',
    date: 'May 1',
    message: 'Created a commit in novuhq/novu repository',
    commit: '🐛  Remove authorization header on signedurl upload',
  },
  {
    iconName: 'commit',
    date: 'May 1',
    message: 'Created a commit in novuhq/novu repository',
    commit: 'Update dal + api HMAC security support',
  },
  {
    iconName: 'branch',
    date: 'May 1',
    message: 'Created a commit in novuhq/novu repository',
    commit: 'Change Providers Constructor Into An Interface',
  },
];

const activityIcons = {
  branch: branchIcon,
  commit: commitIcon,
  pullRequest: pullRequestIcon,
};

const underlineVariants = {
  initial: {
    right: 0,
    left: 'auto',
    width: '100%',
    scaleX: -1,
  },
  start: {
    right: 0,
    left: 'auto',
    width: 0,
    scaleX: -1,
    transition: {
      duration: 0.25,
      ease: DEFAULT_EASE,
    },
    transitionEnd: {
      right: 'auto',
      left: 0,
      scaleX: 1,
    },
  },
  finish: {
    width: '100%',
    transition: {
      duration: 0.25,
      ease: DEFAULT_EASE,
    },
    transitionEnd: {
      right: 0,
      left: 'auto',
      scaleX: -1,
    },
  },
};

const Activity = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const [canAnimate, setCanAnimate] = useState(true);
  const controls = useAnimation();

  const handleHover = () => {
    if (!canAnimate) return;

    setCanAnimate(false);

    controls.start('start').then(() => controls.start('finish').then(() => setCanAnimate(true)));
  };

  const activities = isShowMore ? ACTIVITIES : ACTIVITIES.slice(0, 4);

  return (
    <section className="activity">
      <Heading className="leading-denser md:text-[30px]" tag="h2" size="md" theme="white">
        {TITLE}
      </Heading>

      <ul className="mt-10 space-y-8">
        {activities.map(({ iconName, date, message, commit }, index) => {
          const icon = activityIcons[iconName];
          return (
            <li className="flex" key={index}>
              <div className="mr-3.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-white to-[rgba(255,255,255,0.6)]">
                <img src={icon} loading="lazy" alt={`${iconName} icon`} aria-hidden />
              </div>
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between pt-2">
                  <p className="font-light leading-snug">{message}</p>
                  <span className="whitespace-nowrap text-sm font-light leading-none">{date}</span>
                </div>
                <div className="mt-4 border border-gray-3 px-4 py-3.5">
                  <p className="text-lg sm:text-base">{commit}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {!isShowMore && (
        <button
          className="relative mt-8 ml-[54px] pb-1.5 uppercase leading-none tracking-wide text-primary-1 transition-colors duration-200 hover:text-primary-1 md:left-1/2 md:ml-0 md:-translate-x-1/2 sm:text-sm"
          type="button"
          onClick={() => setIsShowMore(true)}
          onMouseEnter={handleHover}
        >
          Show more activity
          <motion.span
            className="absolute bottom-0 left-0 h-px w-full rounded-full bg-primary-1"
            initial="initial"
            variants={underlineVariants}
            animate={controls}
            aria-hidden
          />
        </button>
      )}
    </section>
  );
};

export default Activity;
