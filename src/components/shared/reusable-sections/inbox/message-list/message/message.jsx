import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import NotificationIcon from './images/notification.inline.svg';

const THEMES = {
  novuDefault: {
    avatar: 'text-[#D2D7E1] bg-[#464953]',
    dot: 'bg-[#7D52F4]',
    border: 'border-[#505462]/30',
    background: 'hover:bg-[#18191D] has-[:focus-visible]:bg-[#18191D]',
    secondaryButton: 'text-[#ABABBA]',
    secondaryButtonBorder: 'border-[rgba(171,171,186,0.05)]',
  },
  novuLight: {
    avatar: '',
    dot: '',
    border: '',
    background: '',
    secondaryButton:
      'text-[#62656F] shadow-[0px_0px_0px_0.5px_#E1E4EA] bg-white focus-visible:shadow-[0px_0px_0px_0.5px_#E1E4EA,0px_0px_0px_4px_rgba(153,160,174,0.16)]',
    secondaryButtonBorder:
      'border-[#B0B0B0] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0.1))]',
  },
};

const Message = ({ theme, message, readMessage }) => {
  const { index, title, mail, text, date, avatar, isRead } = message;
  const currentTheme = THEMES[theme];

  const handleActiveMessage = (index) => {
    readMessage(index, true);
  };

  return (
    <div className={clsx(currentTheme.background, 'group relative font-inter font-light')}>
      <div
        className={clsx(
          currentTheme.border,
          'relative grid grid-cols-1 overflow-hidden border-b p-5'
        )}
      >
        <div className="flex items-start gap-x-4">
          <div>
            {avatar ? (
              <img className="rounded-full" src={avatar} alt="" width={38} height={38} />
            ) : (
              <span
                className={clsx(
                  currentTheme.avatar,
                  'row-span-2 flex size-[38px] items-center justify-center rounded-full'
                )}
              >
                <NotificationIcon className="size-4" />
              </span>
            )}
          </div>
          <div className="flex max-w-[400px] flex-col">
            <h4 className="mt-0.5 text-lg font-medium leading-tight">
              <button
                className={clsx('text-start outline-none after:absolute after:inset-0 after:z-10')}
                type="button"
                onClick={() => handleActiveMessage(index)}
              >
                {title}
              </button>
            </h4>
            <p className={clsx('relative mt-1 text-md tracking-[-0.01em]')}>
              {mail && <span className="font-medium">{mail}</span>} {text}
            </p>
            {message.buttons && message.buttons.length > 0 && (
              <div className="relative z-10 mt-3.5 flex gap-3">
                {message.buttons[0] && (
                  <button
                    className="group/button relative h-[30px] rounded-md bg-[#7D52F4] px-[18px] text-sm font-medium normal-case shadow-[0px_0px_0px_0.5px_#7D52F4] outline-none focus-visible:shadow-[0px_0px_0px_0.5px_#7D52F4,0px_0px_0px_4px_rgba(153,160,174,0.16)]"
                    type="button"
                  >
                    <span className="relative">{message.buttons[0]}</span>
                    <span
                      className="pointer-events-none absolute inset-0 rounded-md border border-white [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.12),rgba(255,255,255,0.1))]"
                      aria-hidden
                    />
                    <span
                      className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-b from-white to-transparent opacity-[0.16] transition-opacity duration-200 group-hover/button:opacity-0"
                      aria-hidden
                    />
                  </button>
                )}
                {message.buttons[1] && (
                  <button
                    className={clsx(
                      'group/button relative h-[30px] rounded-md px-[18px] text-sm font-medium normal-case outline-none',
                      currentTheme.secondaryButton
                    )}
                    type="button"
                  >
                    <span className="relative">{message.buttons[1]}</span>
                    <span
                      className={clsx(
                        'pointer-events-none absolute inset-0 rounded-md border',
                        currentTheme.secondaryButtonBorder
                      )}
                      aria-hidden
                    />
                  </button>
                )}
              </div>
            )}
            <span className={clsx('mt-[18px] text-[13px] leading-none text-[#B9BCCF]')}>
              {date}
            </span>
          </div>
        </div>
        {!isRead && (
          <span
            className={clsx(currentTheme.dot, 'absolute right-7 top-7 block size-2 rounded-full')}
          />
        )}
      </div>
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
