import { motion, useAnimation } from 'framer-motion';
import moment from 'moment';
import React, { useState, useEffect, useMemo } from 'react';

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

const Issues = () => {
  const [issues, setIssues] = useState([]);

  const [canAnimate, setCanAnimate] = useState(true);
  const controls = useAnimation();

  const [isShowMore, setIsShowMore] = useState(false);

  const list = useMemo(() => (isShowMore ? issues : issues.slice(0, 5)), [isShowMore, issues]);

  const getIssues = async () => {
    try {
      const issues = await fetch(
        'https://api.github.com/repos/novuhq/novu/issues?per_page=100&labels=good first issue'
      ).then((res) => res.json());

      setIssues(issues);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIssues();
  }, []);

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
          <ul className="mt-10 space-y-8">
            {list.map(({ title, html_url, created_at }, index) => (
              <li className="flex items-center" key={index}>
                <div className="mr-3.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-white to-[rgba(255,255,255,0.6)]">
                  <img src={issueIcon} loading="lazy" alt="Issue icon" aria-hidden />
                </div>

                <Link
                  className="flex w-full justify-between space-x-3 font-light"
                  to={html_url}
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
              className="relative mt-8 pb-1.5 uppercase leading-none tracking-wide text-primary-1 transition-colors duration-200 hover:text-primary-1 md:left-1/2 md:-translate-x-1/2 sm:text-sm"
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

export default Issues;
