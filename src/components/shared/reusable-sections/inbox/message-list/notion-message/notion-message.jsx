import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import ArchiveIcon from './images/archive.inline.svg';
import FileIcon from './images/file.inline.svg';
import ReadIcon from './images/read.inline.svg';
import UsersIcon from './images/users.inline.svg';

const THEMES = {
  notionDark: {
    dot: 'bg-[#4B73EC]',
    border: 'after:bg-[#242528]',
    background: 'hover:bg-[#292B32] has-[:focus-visible]:bg-[#292B32]',
    action: 'text-[#6F727B] hover:bg-[#40434E] focus-visible:bg-[#40434E]',
    avatarBorder: 'border-[#6F727B]',
    text: 'text-[#FFFFFF]',
    icons: 'text-[#6F727B]',
    fileBorder: 'after:bg-[#6F727B]',
    authorText: 'text-[#6F727B]',
    buttonBorder: 'border-[#6F727B]',
  },
  notionLight: {
    dot: 'bg-[#4B73EC]',
    border: 'after:bg-[#F1F0F0]',
    background: 'hover:bg-[#F7F7F7] has-[:focus-visible]:bg-[#F7F7F7]',
    action: 'text-[#91918E] hover:bg-[#F0F0F0] focus-visible:bg-[#F0F0F0]',
    actionContainer: 'bg-[#FFFFFF] border border-[#E7E7E7]',
    avatarBorder: 'border-[rgba(125,124,124,0.1)]',
    text: 'text-[#373530]',
    icons: 'text-[#B4B4B1]',
    fileBorder: 'after:bg-[#E7E7E7]',
    authorText: 'text-[#91918E]',
    buttonBorder: 'border-[#E7E7E7]',
  },
};

const NotionMessage = ({ theme, message, readMessage, deleteMessage }) => {
  const { index, title, text, date, isRead } = message;
  const currentTheme = THEMES[theme];

  const handleReadMessage = () => {
    readMessage(index, true);
  };

  const handleReadMessageWithPropagation = (event) => {
    event.stopPropagation();
    readMessage(index, !isRead);
  };

  const handleDeleteMessage = (event) => {
    event.stopPropagation();
    deleteMessage(index);
  };

  return (
    <button
      className={clsx(
        currentTheme.background,
        currentTheme.text,
        'group block relative px-3 font-inter cursor-pointer text-left transition-none'
      )}
      type="button"
      onClick={handleReadMessage}
    >
      <div
        className={clsx(
          currentTheme.border,
          'relative grid grid-cols-1 overflow-hidden py-4 group-hover:after:bg-transparent after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px'
        )}
      >
        <div className="grid grid-cols-[48px_1fr_48px]">
          <div className="col-span-1 flex items-center gap-x-2">
            <span
              className={clsx(
                isRead ? 'bg-transparent' : currentTheme.dot,
                'block size-1.5 rounded-full'
              )}
              aria-hidden
            />
            <img
              className={clsx('size-[26px] border rounded-full', currentTheme.avatarBorder)}
              src={message.authors[0].avatar}
              alt={message.authors[0].name}
              width={26}
              height={26}
            />
          </div>
          <h4 className="col-start-2 leading-none pt-[5px]">
            <span className="font-semibold inline-block">{message.authors[0].name}</span>{' '}
            <span className="font-medium inline-block">{message.subtitle}</span>
          </h4>
          <div className="col-start-2 h-[22px] flex items-center gap-x-2 mt-1.5">
            <FileIcon className={clsx('size-4', currentTheme.icons)} />
            <span
              className={clsx(
                'leading-none inline-block font-semibold relative after:absolute after:w-full after:h-px after:-bottom-1.5 after:left-0',
                currentTheme.fileBorder
              )}
            >
              {title}
            </span>
          </div>
          {message.authors.length > 1 && (
            <div className="col-start-2 mt-5">
              <span className="flex items-center text-sm leading-none text-[#6F727B] gap-x-2">
                <UsersIcon className={clsx('size-4', currentTheme.icons)} />
                Person
              </span>
              <ul className="flex items-center mt-2.5 gap-x-4">
                {message.authors.map((author, index) => (
                  <li className="flex items-center gap-x-1.5" key={index}>
                    <img
                      className={clsx('border rounded-full size-[22px]', currentTheme.avatarBorder)}
                      src={author.avatar}
                      width={22}
                      height={22}
                      alt=""
                    />
                    <span className="text-sm leading-none">{author.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="col-start-2 mt-5">
            <p className={clsx('text-sm leading-none', currentTheme.authorText)}>
              {message.authors[0].name}
            </p>
            <p className="mt-1.5 text-ellipsis line-clamp-2">{text}</p>
          </div>
          <button
            className={clsx(
              'col-start-2 mt-[18px] text-sm leading-none flex items-center justify-center w-[58px] h-[30px] font-semibold border rounded',
              currentTheme.buttonBorder
            )}
            type="button"
          >
            Reply
          </button>
          <span className="col-start-3 row-start-1 text-sm leading-none flex items-center justify-center text-[#6F727B] translate-x-0.5 translate-y-0.5 group-hover:opacity-0">
            {date}
          </span>
          <div
            className={clsx(
              'absolute top-3.5 right-2.5 z-10 hidden group-hover:flex gap-x-1.5 py-0.5 px-1 rounded-[5px]',
              currentTheme.actionContainer
            )}
          >
            <button
              className={clsx(
                currentTheme.action,
                'flex size-[28px] items-center justify-center rounded outline-none transition-all duration-200'
              )}
              type="button"
              aria-label="Mark as read"
              onClick={handleReadMessageWithPropagation}
            >
              <ReadIcon className="size-5" />
            </button>
            <button
              className={clsx(
                currentTheme.action,
                'flex size-[28px] items-center justify-center rounded outline-none transition-all duration-200'
              )}
              type="button"
              aria-label="Archive"
              onClick={handleDeleteMessage}
            >
              <ArchiveIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </button>
  );
};

NotionMessage.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired,
  message: PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isRead: PropTypes.bool.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  readMessage: PropTypes.func.isRequired,
  deleteMessage: PropTypes.func.isRequired,
};

export default NotionMessage;
