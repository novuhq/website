import clsx from 'clsx';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import parseDateToMinutes from 'utils/parse-date';

import ArchiveAllIcon from './images/archive-all.inline.svg';
import ArchiveReadIcon from './images/archive-read.inline.svg';
import ArchivedIcon from './images/archived.inline.svg';
import EmptyInboxIcon from './images/empty-inbox.inline.svg';
import DeleteLinearIcon from './images/linear-delete.inline.svg';
import LinearEmptyInboxIcon from './images/linear-empty-inbox.inline.svg';
import LinearLightEmptyInboxIcon from './images/linear-light-empty-inbox.inline.svg';
import MarkReadLinearIcon from './images/linear-mark-read.inline.svg';
import MarkReadIcon from './images/mark-read.inline.svg';
import NotionEmptyInboxIcon from './images/notion-empty-inbox.inline.svg';
import UnreadReadIcon from './images/unread-read.inline.svg';
import UnreadIcon from './images/unread.inline.svg';
import LinearHeader from './linear-header';
import LinearMessage from './linear-message';
import Message from './message';
import NotionHeader from './notion-header';
import NotionMessage from './notion-message';
import NovuHeader from './novu-header';
import TabList from './tab-list';

const ANIMATION_DURATION = 0.2;
const MOTION_EASY = [0.25, 0.1, 0.25, 1];

const sortMessages = (messages, isShowUnreadFirst, isNewest) =>
  messages.slice().sort((a, b) => {
    const dateA = parseDateToMinutes(a.date);
    const dateB = parseDateToMinutes(b.date);

    if (isShowUnreadFirst) {
      if (!a.isRead && b.isRead) return -1;
      if (a.isRead && !b.isRead) return 1;
    }

    return isNewest ? dateA - dateB : dateB - dateA;
  });

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
  novuDefault: {
    text: 'text-[#83889B]',
    icons: {
      emptyInboxIcon: <EmptyInboxIcon className="size-[34px] text-[#797F93]" />,
    },
  },
  notionDark: {
    text: 'text-[#6F727B]',
    icons: {
      emptyInboxIcon: <NotionEmptyInboxIcon className="size-12 text-[#6F727B]" />,
    },
  },
  notionLight: {
    text: 'text-[#D8D5D5]',
    icons: {
      emptyInboxIcon: <NotionEmptyInboxIcon className="size-12 text-[#D8D5D5]" />,
    },
  },
  linearDark: {
    text: 'text-[#9A9AA1]',
    icons: {
      emptyInboxIcon: <LinearEmptyInboxIcon className="size-12 text-[#D8D5D5]" />,
    },
  },
  linearLight: {
    text: 'text-[#5D5D5E]',
    icons: {
      emptyInboxIcon: <LinearLightEmptyInboxIcon className="size-12" />,
    },
  },
};

const NOTION_FILTERS = [
  {
    label: 'Unread & read',
    Icon: UnreadReadIcon,
    filter: (messages) => messages.filter((message) => !message.isArchived),
  },
  {
    label: 'Unread',
    Icon: UnreadIcon,
    filter: (messages) => messages.filter((message) => !message.isArchived && !message.isRead),
  },
  {
    label: 'Archived',
    Icon: ArchivedIcon,
    filter: (messages) => messages.filter((message) => message.isArchived),
  },
];

const NOTION_ACTIONS = [
  {
    label: 'Mark all as read',
    Icon: MarkReadIcon,
    action: (messages) => messages.map((message) => ({ ...message, isRead: true })),
  },
  {
    label: 'Archive all',
    Icon: ArchiveAllIcon,
    action: (messages) => messages.map((message) => ({ ...message, isArchived: true })),
  },
  {
    label: 'Archive read',
    Icon: ArchiveReadIcon,
    action: (messages) =>
      messages.filter((message) => (message.isRead ? { ...message, isArchived: true } : message)),
  },
];

const LINEAR_FILTERS = {
  ordering: [
    {
      label: 'Newest',
      filter: (messages, isShowUnreadFirst) => sortMessages(messages, isShowUnreadFirst, true),
    },
    {
      label: 'Latest',
      filter: (messages, isShowUnreadFirst) => sortMessages(messages, isShowUnreadFirst, false),
    },
  ],
  actions: [
    {
      label: 'Mark all as read',
      Icon: MarkReadLinearIcon,
      action: (messages) => messages.map((message) => ({ ...message, isRead: true })),
    },
    {
      label: 'Delete all notifications',
      Icon: DeleteLinearIcon,
      action: () => [],
    },
    {
      label: 'Delete all read notifications',
      Icon: DeleteLinearIcon,
      action: (messages) => messages.filter((message) => !message.isRead),
    },
  ],
};

const MessageList = ({
  theme,
  tabs,
  setActiveTab,
  activeTab,
  defaultTab,
  messages,
  setMessages,
}) => {
  const currentTheme = THEMES[theme];

  const [filterIndex, setFilterIndex] = useState(0);
  const [orderingPosition, setOrderingPosition] = useState(LINEAR_FILTERS.ordering[0].label);
  const [showUnreadFirst, setShowUnreadFirst] = useState(false);
  const [showRead, setShowRead] = useState(true);

  const filteredMessageList = useMemo(() => {
    switch (theme) {
      case 'novuDefault':
        return activeTab !== defaultTab
          ? messages.filter(
              (message) =>
                message.category.toLowerCase() === activeTab.toLowerCase() && !message.isArchived
            )
          : messages.filter((message) => !message.isArchived);
      case 'notionDark':
      case 'notionLight':
        return NOTION_FILTERS[filterIndex].filter(messages);
      case 'linearDark':
      case 'linearLight':
        if (!showRead) {
          return messages.filter((message) => !message.isRead);
        }

        return LINEAR_FILTERS.ordering
          .find((filter) => filter.label === orderingPosition)
          .filter(messages, showUnreadFirst);
      default:
        return messages;
    }
  }, [
    activeTab,
    messages,
    defaultTab,
    theme,
    filterIndex,
    orderingPosition,
    showUnreadFirst,
    showRead,
  ]);

  const readMessage = (currentId, newState = false) => {
    setMessages(
      messages.map((message) =>
        message.index === currentId ? { ...message, isRead: newState || !message.isRead } : message
      )
    );
  };

  const deleteMessage = (currentId) => {
    setMessages(
      messages.map((message) =>
        message.index === currentId ? { ...message, isArchived: !message.isArchived } : message
      )
    );
  };

  const handleAction = (action) => () => {
    setMessages(action(messages));
  };

  const handleFilter = (filter) => () => {
    setFilterIndex(filter);
  };

  const handleOrdering = (value) => {
    setOrderingPosition(value);
  };

  const toggleShowUnreadFirst = () => {
    setShowUnreadFirst((prev) => !prev);
  };

  const toggleShowRead = () => {
    setShowRead((prev) => !prev);
  };

  const { emptyInboxIcon } = currentTheme.icons;

  return (
    <>
      {theme === 'novuDefault' && <NovuHeader />}
      {['notionDark', 'notionLight'].includes(theme) && (
        <NotionHeader
          theme={theme}
          filters={NOTION_FILTERS}
          actions={NOTION_ACTIONS}
          handleAction={handleAction}
          handleFilter={handleFilter}
        />
      )}
      {['linearDark', 'linearLight'].includes(theme) && (
        <LinearHeader
          theme={theme}
          ordering={LINEAR_FILTERS.ordering}
          actions={LINEAR_FILTERS.actions}
          handleAction={handleAction}
          orderingPosition={orderingPosition}
          handleOrdering={handleOrdering}
          showRead={showRead}
          showUnreadFirst={showUnreadFirst}
          toggleShowRead={toggleShowRead}
          toggleShowUnreadFirst={toggleShowUnreadFirst}
        />
      )}
      {theme === 'novuDefault' && (
        <TabList theme={theme} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            className="scrollbar-hidden relative z-10 h-full overflow-y-auto pb-4"
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: ANIMATION_DURATION, ease: MOTION_EASY }}
          >
            {filteredMessageList.length === 0 ? (
              <div className="flex h-full flex-col items-center pt-[164px]">
                {emptyInboxIcon}
                <p className={clsx(currentTheme.text, 'mt-2 text-center')}>
                  {['linearDark', 'linearLight'].includes(theme)
                    ? 'No notifications'
                    : 'No messages yet'}
                </p>
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
                      {theme === 'novuDefault' && (
                        <Message
                          theme={theme}
                          message={message}
                          readMessage={readMessage}
                          deleteMessage={deleteMessage}
                        />
                      )}
                      {['notionDark', 'notionLight'].includes(theme) && (
                        <NotionMessage
                          theme={theme}
                          message={message}
                          readMessage={readMessage}
                          deleteMessage={deleteMessage}
                        />
                      )}
                      {['linearDark', 'linearLight'].includes(theme) && (
                        <LinearMessage theme={theme} message={message} readMessage={readMessage} />
                      )}
                    </m.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};

MessageList.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired,
  activeTab: PropTypes.string.isRequired,
  defaultTab: PropTypes.oneOf([PropTypes.string, undefined]).isRequired,
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
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  setActiveTab: PropTypes.func.isRequired,
  setMessages: PropTypes.func.isRequired,
};

MessageList.defaultProps = {
  tabs: [],
};

export default MessageList;
