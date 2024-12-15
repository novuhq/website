import clsx from 'clsx';
import React from 'react';

const THEMES = {
  linearDark: {
    dot: 'bg-[#4B73EC]',
    messageItemHover: 'hover:bg-[#1C1D27]',
    border: 'after:bg-[#242528]',
    background: 'hover:bg-[#292B32] focus-within:bg-[#292B32] has-[:focus-visible]:bg-[#292B32]',
    action: 'text-[#6F727B] hover:bg-[#40434E] focus-visible:bg-[#40434E]',
    avatarBorder: 'border-[#6F727B]',
    avatarIconBg: 'text-[#191A22]',
    headerUnread: 'text-white font-medium',
    textUnread: 'text-[#9A9AA1]',
    headerRead: 'text-[#73747B]',
    textRead: 'text-[#73747B]',
    icons: 'text-[#6F727B]',
    authorText: 'text-[#6F727B]',
    buttonBorder: 'border-[#6F727B]',
  },
  linearLight: {
    dot: 'bg-[#4B73EC]',
    messageItemHover: 'hover:bg-[#F8F8F8]',
    border: 'after:bg-[#F1F0F0]',
    background: 'hover:bg-[#F7F7F7] focus-within:bg-[#F7F7F7] has-[:focus-visible]:bg-[#F7F7F7]',
    action: 'text-[#91918E] hover:bg-[#F0F0F0] focus-visible:bg-[#F0F0F0]',
    actionContainer: 'bg-[#FFFFFF] border border-[#E7E7E7]',
    avatarBorder: 'border-[rgba(125,124,124,0.1)]',
    avatarIconBg: 'text-white',
    headerUnread: 'text-[#303031] font-medium',
    textUnread: 'text-[#5D5D5E]',
    headerRead: 'text-[#7D7D7D]',
    textRead: 'text-[#7D7D7D]',
    icons: 'text-[#B4B4B1]',
    authorText: 'text-[#91918E]',
    buttonBorder: 'border-[#E7E7E7]',
  },
};

const LinearMessage = ({ theme, message, readMessage }) => {
  const {
    index,
    title,
    actionType,
    avatarIcon: AvatarIcon,
    additionalText,
    date,
    dateIcon,
    isRead,
    authors,
  } = message;
  const currentTheme = THEMES[theme];
  const handleReadMessage = () => {
    readMessage(index, true);
  };

  return (
    <button
      className={clsx(
        'mx-1 flex w-[calc(100%-8px)] items-center justify-between gap-x-5 rounded-[12px] px-5 py-[18px] pb-4 text-left font-inter',
        currentTheme.messageItemHover
      )}
      type="button"
      onClick={handleReadMessage}
    >
      <div className="flex items-center gap-x-[18px]">
        <div className="relative size-11 shrink-0">
          <img
            className="size-11 rounded-full"
            src={authors[0].avatar}
            alt={authors[0].name}
            width={44}
            height={44}
          />
          <AvatarIcon
            alt=""
            className={clsx('absolute -right-0.5 bottom-0 size-[18px]', currentTheme.avatarIconBg)}
            width={18}
            height={18}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="flex items-center gap-2">
            <span
              className={clsx(
                isRead ? 'hidden' : currentTheme.dot,
                'block size-2 shrink-0 rounded-full'
              )}
              aria-hidden
            />
            {/* TODO: CHECH h3 for order */}
            <h3
              className={clsx(
                isRead ? currentTheme.headerRead : currentTheme.headerUnread,
                'line-clamp-1 text-[18px] leading-none tracking-[0.01em]',
                currentTheme.title
              )}
              href="/"
            >
              {title}
            </h3>
          </span>
          <p
            className={clsx(
              isRead ? currentTheme.textRead : currentTheme.textUnread,
              'line-clamp-1 text-[18px] font-normal leading-denser tracking-[-0.045em]'
            )}
          >
            {authors[0].name} {actionType} {additionalText}
          </p>
        </div>
      </div>
      <div className="flex w-11 flex-col items-end gap-y-2.5">
        <img src={dateIcon} alt={actionType} className="size-5 shrink-0" width={20} height={20} />
        <time className="text-[14px] leading-none text-[#6F727B]" dateTime="2023-10-02T12:00:00Z">
          {date}
        </time>
      </div>
    </button>
  );
};

export default LinearMessage;
