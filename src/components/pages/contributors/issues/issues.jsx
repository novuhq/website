import { motion, useAnimation } from 'framer-motion';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import DEFAULT_EASE from 'constants/default-ease';

import issueIcon from './images/issue.svg';

const TITLE = 'Don’t know where to start?';
const DESCRIPTION =
  'Check our good first issues that help you onboard to Novu project and get first achievement.';

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

const Issues = ({ issues }) => {
  const [canAnimate, setCanAnimate] = useState(true);
  const controls = useAnimation();

  const [isShowMore, setIsShowMore] = useState(false);

  const list = useMemo(() => (isShowMore ? issues : issues.slice(0, 5)), [isShowMore, issues]);

  const handleHover = () => {
    if (!canAnimate) return;

    setCanAnimate(false);

    controls.start('start').then(() => controls.start('finish').then(() => setCanAnimate(true)));
  };

  return (
    <section className="issues safe-paddings py-40 lg:py-32 md:py-20 sm:py-16">
      <div className="container-lg">
        <div className="mx-auto max-w-[787px] text-center">
          <Heading
            className="leading-tight md:text-5xl sm:text-4xl"
            tag="h2"
            size="xl"
            theme="white"
          >
            {TITLE}
          </Heading>
          <p className="mt-10 text-lg font-light leading-snug text-gray-8 md:text-base">
            {DESCRIPTION}
          </p>
        </div>
        <div className="mx-auto max-w-[904px]">
          <ul className="mt-10">
            {list.map(({ title, url, created_at }, index) => (
              <li
                className="relative flex items-center py-4 after:absolute after:bottom-0 after:right-0 after:h-px after:w-[calc(100%-54px)] after:bg-gray-3"
                key={index}
              >
                <div className="mr-3.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-white to-[rgba(255,255,255,0.6)]">
                  <img src={issueIcon} loading="lazy" alt="Issue icon" aria-hidden />
                </div>

                <Link
                  className="flex w-full justify-between space-x-3 font-light"
                  to={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{title}</span>
                  <span className="flex-shrink-0 text-sm sm:hidden">
                    opened {moment(created_at).fromNow()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {!isShowMore && list.length !== issues.length && (
            <button
              className="relative left-1/2 mt-8 -translate-x-1/2 pb-1.5 uppercase leading-none tracking-wide text-primary-1 transition-colors duration-200 hover:text-primary-1 sm:text-sm"
              type="button"
              onClick={() => setIsShowMore(true)}
              onMouseEnter={handleHover}
            >
              Show more issues
              <motion.span
                className="absolute bottom-0 left-0 h-px w-full rounded-full bg-primary-1"
                initial="initial"
                variants={underlineVariants}
                animate={controls}
                aria-hidden
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

Issues.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Issues;
