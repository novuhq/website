import clsx from 'clsx';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';

import ArchiveIcon from './images/archive.inline.svg';
import ReadIcon from './images/read.inline.svg';
import UserPlaceholder from './images/user-placeholder.inline.svg';

const ANIMATION_DURATION = 0.2;
const MOTION_EASY = [0.25, 0.1, 0.25, 1];

const messageVariants = {
  from: {
    height: '66px',
    transition: { delay: ANIMATION_DURATION },
  },
  to: {
    height: 'auto',
    transition: { duration: ANIMATION_DURATION, ease: MOTION_EASY },
  },
  exit: {
    height: '66px',
    transition: { duration: ANIMATION_DURATION, ease: MOTION_EASY },
  },
};

const THEMES = {
  novuDefault: {
    avatar: 'text-[#5C71BF] bg-[#35416C]',
    dot: 'bg-[#4B73EC]',
    border: 'border-white/5',
    background:
      'hover:bg-[linear-gradient(90deg,rgba(75,115,236,0.10)_0%,rgba(0,35,140,0.10)_100%)] has-[:focus-visible]:bg-[linear-gradient(90deg,rgba(75,115,236,0.10)_0%,rgba(0,35,140,0.10)_100%)]',
    action: 'text-[#797F93] hover:text-[#CCD9FF] focus-visible:text-[#CCD9FF]',
  },
};

const Message = ({ theme, message, readMessage, deleteMessage }) => {
  const [isActiveMessage, setIsActiveMessage] = useState(null);

  const { index, title, text, date, isRead } = message;
  const currentTheme = THEMES[theme];

  const handleActiveMessage = (index) => {
    setIsActiveMessage((currentIndex) => (currentIndex === index ? null : index));
    readMessage(index, true);
  };

  return (
    <div className={clsx(currentTheme.background, 'group relative px-6 font-light')}>
      <LazyMotion features={domAnimation}>
        <m.div
          className={clsx(
            currentTheme.border,
            'relative grid grid-cols-1 overflow-hidden border-b'
          )}
          initial="from"
          variants={messageVariants}
          animate={isActiveMessage === index ? 'to' : 'exit'}
        >
          <div className="grid grid-cols-[32px_1fr_72px] gap-x-2.5 pl-4 pt-4">
            <h4 className="col-start-2 row-start-1 text-sm leading-tight">
              <button
                className={clsx(
                  'max-w-[376px] text-start outline-none after:absolute after:inset-0 after:z-10',
                  isActiveMessage !== index && 'truncate'
                )}
                type="button"
                onClick={() => handleActiveMessage(index)}
              >
                {title}
              </button>
            </h4>
            <p
              className={clsx(
                'relative col-start-2 row-start-2 pb-2.5 pt-0.5 text-[13px] opacity-50'
              )}
            >
              <span className={clsx('block pt-px', isActiveMessage !== index && 'invisible')}>
                {text}
              </span>
              <span
                className={clsx(
                  'absolute top-[3px] block max-w-[min(100%,376px)] truncate',
                  isActiveMessage === index && 'hidden'
                )}
                aria-hidden
              >
                {text}
              </span>
            </p>
            <span
              className={clsx(
                'col-start-3 row-start-1 translate-x-0.5 translate-y-1 text-xs leading-none text-[#6F727B] group-hover:opacity-0',
                isActiveMessage === index && '!opacity-0'
              )}
            >
              {date}
            </span>
            <span
              className={clsx(
                currentTheme.avatar,
                'row-span-2 flex size-8 items-center justify-center rounded-full'
              )}
            >
              <UserPlaceholder className="size-4" />
            </span>
            <div
              className={clsx(
                'absolute -right-1 top-3.5 z-10 hidden group-hover:block',
                isActiveMessage === index && '!block'
              )}
            >
              <button
                className={clsx(currentTheme.action, 'outline-none transition-all duration-200')}
                type="button"
                aria-label="Mark as read"
                onClick={() => readMessage(index)}
              >
                <ReadIcon className="size-5" />
              </button>
              <button
                className={clsx(currentTheme.action, 'outline-none transition-all duration-200')}
                type="button"
                aria-label="Archive"
                onClick={() => deleteMessage(index)}
              >
                <ArchiveIcon className="size-5" />
              </button>
            </div>
          </div>
          {message.buttons.length > 0 && (
            <div className="relative z-10 ml-[58px] flex w-max gap-3 pb-4 pt-1.5">
              {message.buttons[0] && (
                <Button
                  className="min-w-28 rounded-[20px] before:rounded-[20px]"
                  size="xxs"
                  theme="blue-gradient-white-outline"
                  type="button"
                  tabIndex={isActiveMessage === index ? 0 : -1}
                >
                  <span className="relative">{message.buttons[0]}</span>
                </Button>
              )}
              {message.buttons[1] && (
                <Button
                  className="min-w-28 rounded-[20px]"
                  size="xxs"
                  theme="blue-outline"
                  type="button"
                  tabIndex={isActiveMessage === index ? 0 : -1}
                >
                  {message.buttons[1]}
                </Button>
              )}
            </div>
          )}
          {!isRead && (
            <span
              className={clsx(
                currentTheme.dot,
                'absolute left-0 top-4 block size-1.5 rounded-full'
              )}
            />
          )}
        </m.div>
      </LazyMotion>
    </div>
  );
};

Message.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired,
  message: PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  readMessage: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
};

export default Message;
