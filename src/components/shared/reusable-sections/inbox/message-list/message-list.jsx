import clsx from 'clsx';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Message from '../message';

import EmptyInboxIcon from './images/empty-inbox.inline.svg';

const ANIMATION_DURATION = 0.2;
const MOTION_EASY = [0.25, 0.1, 0.25, 1];

const deleteVariants = {
  animate: {
    height: 'auto',
    opacity: 1,
    transition: { duration: ANIMATION_DURATION, ease: MOTION_EASY },
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

const THEMES = {
  dark: {
    text: 'text-[#83889B]',
    icon: '#797F93',
  },
};

const MessageList = ({ theme, activeTab, defaultTab, messages, setMessages }) => {
  const currentTheme = THEMES[theme];

  const filteredMessageList = useMemo(
    () =>
      activeTab !== defaultTab
        ? messages.filter((message) => message.category.toLowerCase() === activeTab.toLowerCase())
        : messages,
    [activeTab, messages, defaultTab]
  );

  const readMessage = (currentId, newState = false) => {
    setMessages(
      messages.map((message) =>
        message.index === currentId ? { ...message, isRead: newState || !message.isRead } : message
      )
    );
  };

  const deleteMessage = (currentId) => {
    setMessages(messages.filter((message) => message.index !== currentId));
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          className="scrollbar-hidden relative z-20 h-[478px] pb-4 overflow-y-auto"
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: ANIMATION_DURATION, ease: MOTION_EASY }}
        >
          {filteredMessageList.length === 0 ? (
            <div className="flex flex-col items-center h-full pt-[164px]">
              <EmptyInboxIcon
                className="size-[34px]"
                style={{ '--icon-color': currentTheme.icon }}
              />
              <p className={clsx(currentTheme.text, 'mt-2 text-center')}>No messages yet</p>
            </div>
          ) : (
            <ul>
              <AnimatePresence>
                {filteredMessageList.map((message) => (
                  <m.li
                    key={message.index}
                    variants={deleteVariants}
                    initial="from"
                    animate="to"
                    exit="exit"
                    layout
                  >
                    <Message
                      theme={theme}
                      message={message}
                      readMessage={readMessage}
                      deleteMessage={deleteMessage}
                    />
                  </m.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
};

MessageList.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired,
  activeTab: PropTypes.string.isRequired,
  defaultTab: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      isRead: PropTypes.bool.isRequired,
      buttons: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  setMessages: PropTypes.func.isRequired,
};

export default MessageList;
