import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React, { useMemo, useState, useRef, useEffect } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import ArchiveIcon from './images/archive.inline.svg';
import ArrowIcon from './images/arrow.inline.svg';
import dots from './images/dots.svg';
import EmptyInboxIcon from './images/empty-inbox.inline.svg';
import InboxText from './images/inbox-text.inline.svg';
import MessageIcon from './images/message.inline.svg';
import MoreIcon from './images/more.inline.svg';
import NotificationIcon from './images/notification.inline.svg';
import NovuIcon from './images/novu.inline.svg';
import ReadIcon from './images/read.inline.svg';
import SettingsIcon from './images/settings.inline.svg';
import ThemeIcon from './images/theme.inline.svg';
import UserPlaceholder from './images/user-placeholder.inline.svg';
import user from './images/user.jpg';

const themes = {
  dark: {
    text: 'text-white',
    background: {
      image: dots,
      gradients: {
        lg: 'bg-[radial-gradient(circle_at_center,#121C3B_0%,#121C3B00_100%)]',
        md: 'bg-[radial-gradient(circle_at_center,#1C2D5E_0%,#1C2D5E00_100%)]',
        sm: 'bg-[radial-gradient(circle_at_center,#314479_0%,#31447900_100%)]',
      },
    },
    mainBlock: {
      border:
        'bg-[radial-gradient(31.2%_54.8%_at_24.26%_-0.52%,#FFFFFF_0%,#BECEFF_33.21%,#86A4FF80_50.5%,#40424A00_100%),radial-gradient(101.2%_100%_at_50%_0%,#8796C326_0%,#1E2538_49.26%,#1E24384D_100%)]',
      background:
        'bg-[radial-gradient(81.42%_96.16%_at_28.78%_3.84%,#24306080_0%,#12182F_100%),radial-gradient(116.92%_107.07%_at_25.99%_1.48%,#1F2844_0%,#0A0E20_46.27%)]',
      shine: 'bg-[linear-gradient(90deg,#FFFFFF00_13.5%,#FFFFFF_57.86%,#FFFFFF00_100%)]',
      fade: 'bg-[linear-gradient(180deg,#05050B00_66.82%,#05050B_100%)]',
      gradients: {
        lg: 'bg-[radial-gradient(circle_at_center,#232B5B_0%,#232B5B00_100%)]',
        md: 'bg-[radial-gradient(circle_at_center,#3D4B7A_0%,#3D4B7A00_100%)]',
        sm: 'bg-[radial-gradient(circle_at_center,#46568B_0%,#46568B00_100%)]',
      },
    },
    innerBlock: {
      border:
        'bg-[radial-gradient(77.02%_84.55%_at_26.5%_-0.79%,#D4DFFF80_7.67%,#D4DFFF38_42.14%,#D4DFFF14_73.76%,#D4DFFF0D_100%)]',
      shadow: 'shadow-[0_-6px_20px_#04090F40,-2px_-2px_10px_#04090F33,10px_10px_20px_#00000026]',
      background:
        'bg-[linear-gradient(180deg,#11142300_67.63%,#111321_84.23%),radial-gradient(76.68%_43.11%_at_28.52%_0.79%,#C2CFFF66_0%,#C2CFFF00_53.98%),linear-gradient(191.65deg,#354067_3.6%,#262D48B3_91.45%)]',
      shine: 'bg-[linear-gradient(90deg,#FFFFFF00,#FFFFFF_41%,#FFFFFF00_100%)]',
    },
    header: {
      logo: '#C6CADD',
      icon: '#ffffff',
    },
    tabs: {
      border: 'bg-[linear-gradient(90deg,#576282_0%,#7681A3_28%,#394056_66%,#232A43_100%)]',
      borderActive: 'bg-[#CCD9FF]',
      badge:
        'text-black bg-[linear-gradient(180deg,#FFFFFF80,#FFFFFF00),linear-gradient(180deg,#FFDF66_0%,#FFB433_100%)]',
      badgeInner: 'bg-[linear-gradient(180deg,#FFDF66_0%,#FFB433_100%)]',
    },
    message: {
      avatar: 'text-[#5C71BF] bg-[#35416C]',
      dot: 'bg-[#4B73EC]',
      border: 'border-white/5',
      background:
        'hover:bg-[linear-gradient(90deg,rgba(75,115,236,0.10)_0%,rgba(0,35,140,0.10)_100%)] focus-within:bg-[linear-gradient(90deg,rgba(75,115,236,0.10)_0%,rgba(0,35,140,0.10)_100%)]',
      action: 'text-[#797F93] hover:text-[#CCD9FF] focus-visible:text-[#CCD9FF]',
    },
    noMessages: {
      text: 'text-[#83889B]',
      icon: '#797F93',
    },
  },
};

const DEFAULT_TAB = 'All';
const LOADING_MESSAGES_DURATION = 200;

const Inbox = ({ theme, title, description, button, categories, messages }) => {
  const [messageList, setMessageList] = useState(
    messages.map((message, index) => ({ ...message, id: index }))
  );
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [isActiveMessage, setIsActiveMessage] = useState(null);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const tabRefs = useRef([]);

  const isUnreadMessages = messageList.some((message) => !message.isRead);

  const tabsList = useMemo(() => {
    const allCount = messageList.filter((message) => !message.isRead).length;
    const categoryTabs = categories.map((category) => ({
      label: category,
      count: messageList.filter(
        (message) => message.category.toLowerCase() === category.toLowerCase() && !message.isRead
      ).length,
    }));
    return [{ label: 'All', count: allCount }, ...categoryTabs];
  }, [categories, messageList]);

  const filteredMessageList = useMemo(
    () =>
      activeTab !== DEFAULT_TAB
        ? messageList.filter(
            (message) => message.category.toLowerCase() === activeTab.toLowerCase()
          )
        : messageList,
    [activeTab, messageList]
  );

  const readMessage = (currentId, newState = false) => {
    setMessageList(
      messageList.map((m) => (m.id === currentId ? { ...m, isRead: newState || !m.isRead } : m))
    );
  };

  const deleteMessage = (currentId) => {
    setMessageList(messageList.filter((m) => m.id !== currentId));
  };

  const handleActiveMessage = (id) => {
    setIsActiveMessage((currentId) => (currentId === id ? null : id));
    readMessage(id, true);
  };

  const handleListVisibility = () => {
    setIsLoadingMessages(true);
    setTimeout(() => {
      setIsLoadingMessages(false);
    }, LOADING_MESSAGES_DURATION);
  };

  useEffect(() => {
    const activeTabIndex = tabsList.findIndex((tab) => tab.label === activeTab);
    if (tabRefs.current[activeTabIndex]) {
      setIndicator({
        left: tabRefs.current[activeTabIndex].offsetLeft,
        width: tabRefs.current[activeTabIndex].offsetWidth,
      });
    }
  }, [activeTab, tabsList]);

  useEffect(() => {
    handleListVisibility();
  }, [activeTab]);

  const { text, background, mainBlock, innerBlock, header, tabs, message, noMessages } =
    themes[theme];

  return (
    <section className={clsx(text, 'inbox safe-paddings mt-40 lg:mt-36 md:mt-[104px] sm:mt-14')}>
      <div className="container-lg">
        <div className="flex items-center justify-center pl-8 sm:flex-col">
          <div
            className={clsx(
              mainBlock.border,
              'relative shrink-0 w-[608px] rounded-[20px] p-px lg:w-[532px] md:hidden'
            )}
          >
            <div
              className={clsx(
                mainBlock.background,
                'relative z-10 w-full h-full rounded-[20px] pt-[11px] pb-[22px] px-5 overflow-hidden sm:p-4'
              )}
            >
              <div className="relative z-30">
                <header className="flex items-center pb-2.5">
                  <NovuIcon
                    className="shrink-0 size-[18px] mr-2.5"
                    style={{ '--icon-color': header.logo }}
                  />
                  <h3 className="mr-auto font-light leading-none tracking-snug opacity-60">
                    Notification Control Center
                  </h3>
                  <div className="shrink-0 relative mr-3.5">
                    <NotificationIcon className="size-6" style={{ '--icon-color': header.icon }} />
                    {isUnreadMessages && (
                      <div className="absolute top-1 right-[3px] size-2 bg-[linear-gradient(232.66deg,#FFDF66_9.72%,#FFB433_89.91%)] border border-[#151b37] rounded-full" />
                    )}
                  </div>
                  <ThemeIcon
                    className="shrink-0 size-6 mr-3.5"
                    style={{ '--icon-color': header.icon }}
                  />
                  <MessageIcon
                    className="shrink-0 size-6 mr-5"
                    style={{ '--icon-color': header.icon }}
                  />
                  <img
                    className="shrink-0 size-6 rounded-sm"
                    src={user}
                    alt="User's avatar"
                    width="24"
                    height="24"
                  />
                </header>
                <div
                  className={clsx(
                    innerBlock.border,
                    innerBlock.shadow,
                    'relative z-30 p-px rounded-xl'
                  )}
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="relative z-10 flex items-center h-14 px-[22px]">
                      <InboxText className="w-14 h-7" />
                      <ArrowIcon className="w-2.5 mt-1.5 ml-2 mr-auto" />
                      <MoreIcon className="size-5 mr-4" style={{ '--icon-color': header.icon }} />
                      <SettingsIcon className="size-5" style={{ '--icon-color': header.icon }} />
                    </div>
                    <div className="relative z-10">
                      <ul className="flex items-center h-9">
                        {tabsList.map(({ label, count }, index) => (
                          <li className="h-full" key={label}>
                            <button
                              ref={(el) => {
                                tabRefs.current[index] = el;
                              }}
                              className="flex justify-center items-center gap-1 min-w-[100px] h-full px-4 font-light text-sm capitalize"
                              type="button"
                              onClick={() => setActiveTab(label)}
                            >
                              {label}
                              {count !== 0 && (
                                <span
                                  className={clsx(
                                    tabs.badge,
                                    'flex p-px font-normal text-xs leading-none rounded-3xl'
                                  )}
                                >
                                  <span
                                    className={clsx(tabs.badgeInner, 'py-px px-[5px] rounded-3xl')}
                                  >
                                    {count}
                                  </span>
                                </span>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div
                        className={clsx(
                          tabs.border,
                          'absolute inset-x-0 top-0 h-px pointer-events-none'
                        )}
                      />
                      <div
                        className={clsx(
                          tabs.border,
                          'absolute inset-x-0 bottom-0 h-px pointer-events-none'
                        )}
                      />
                      <div
                        className={clsx(
                          tabs.borderActive,
                          'absolute bottom-0 h-px pointer-events-none transition-all duration-200'
                        )}
                        style={{ left: `${indicator.left}px`, width: `${indicator.width}px` }}
                      />
                    </div>
                    <div
                      className={clsx(
                        'scrollbar-hidden relative z-20 h-[478px] pb-4 overflow-y-auto opacity-1 transition-[opacity] duration-200',
                        isLoadingMessages && '!opacity-0'
                      )}
                    >
                      {!isLoadingMessages &&
                        (filteredMessageList.length === 0 ? (
                          <div className="flex flex-col items-center h-full pt-[164px]">
                            <EmptyInboxIcon
                              className="size-[34px]"
                              style={{ '--icon-color': noMessages.icon }}
                            />
                            <p className={clsx(noMessages.text, 'mt-2 text-center')}>
                              No messages yet
                            </p>
                          </div>
                        ) : (
                          <ul>
                            {filteredMessageList.map(({ id, title, text, date, isRead }) => (
                              <li
                                className={clsx(
                                  message.background,
                                  'group relative px-6 font-light'
                                )}
                                key={id}
                              >
                                <div
                                  className={clsx(
                                    message.border,
                                    'relative grid grid-cols-[32px_1fr_72px] gap-x-2.5 gap-y-2 pl-4 pt-4 pb-3.5 border-b'
                                  )}
                                >
                                  <h4 className="col-start-2 row-start-1 text-sm leading-none">
                                    <button
                                      className="after:absolute after:inset-0 after:z-10 outline-none"
                                      type="button"
                                      onClick={() => handleActiveMessage(id)}
                                    >
                                      {title}
                                    </button>
                                  </h4>
                                  <p
                                    className={clsx(
                                      'col-start-2 row-start-2 text-[13px] opacity-50 transition-all duration-200',
                                      isActiveMessage !== id && 'leading-none truncate'
                                    )}
                                  >
                                    {text}
                                  </p>
                                  <div
                                    className={clsx(
                                      'relative z-10 col-start-2 row-start-3 items-center gap-3 transition-all duration-200',
                                      isActiveMessage === id ? 'flex' : 'hidden'
                                    )}
                                  >
                                    <Button
                                      className="rounded-[20px] before:rounded-[20px]"
                                      size="xxs"
                                      theme="blue-gradient-white-outline"
                                    >
                                      <span className="relative">Main Button</span>
                                    </Button>
                                    <Button
                                      className="rounded-[20px]"
                                      size="xxs"
                                      theme="blue-outline"
                                    >
                                      Secondary Btn
                                    </Button>
                                  </div>
                                  <span className="col-start-3 row-start-1 text-xs leading-none opacity-60 translate-x-1 translate-y-1 group-hover:opacity-0 group-focus-within:opacity-0">
                                    {date}
                                  </span>
                                  <span
                                    className={clsx(
                                      message.avatar,
                                      'row-span-2 flex items-center justify-center size-8 rounded-full'
                                    )}
                                  >
                                    <UserPlaceholder className="size-4" />
                                  </span>
                                  <div
                                    className={clsx(
                                      'absolute top-3.5 -right-1 z-10 hidden group-hover:block group-focus-within:block',
                                      isActiveMessage && '!block'
                                    )}
                                  >
                                    <button
                                      className={clsx(
                                        message.action,
                                        'outline-none transition-all duration-200'
                                      )}
                                      type="button"
                                      aria-label="Mark as read"
                                      onClick={() => readMessage(id)}
                                    >
                                      <ReadIcon className="size-5" />
                                    </button>
                                    <button
                                      className={clsx(
                                        message.action,
                                        'outline-none transition-all duration-200'
                                      )}
                                      type="button"
                                      aria-label="Archive"
                                      onClick={() => deleteMessage(id)}
                                    >
                                      <ArchiveIcon className="size-5" />
                                    </button>
                                  </div>
                                  {!isRead && (
                                    <span
                                      className={clsx(
                                        message.dot,
                                        'absolute top-4 -left-0.5 block size-1.5 rounded-full'
                                      )}
                                    />
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        ))}
                    </div>
                    <div className={clsx(innerBlock.background, 'absolute inset-0 blur-2xl')} />
                    <div
                      className={clsx(
                        innerBlock.shine,
                        'absolute top-0 left-3.5 w-[318px] h-px blur-[1px] mix-blend-plus-lighter pointer-events-none'
                      )}
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    mainBlock.gradients.lg,
                    'absolute z-20 top-[40%] -left-1/2 w-[1030px] h-[340px] rounded-[50%/33.33%] blur-3xl opacity-80 rotate-45 -translate-y-1/2 mix-blend-plus-lighter pointer-events-none'
                  )}
                />
                <div
                  className={clsx(
                    mainBlock.gradients.md,
                    'absolute z-20 -top-[30%] -left-[20%] w-[479px] h-[383px] rounded-[50%] blur-3xl opacity-80 rotate-45 mix-blend-plus-lighter pointer-events-none'
                  )}
                />
                <div
                  className={clsx(
                    mainBlock.gradients.sm,
                    'absolute z-20 -top-[30%] left-[10%] w-[312px] h-[246px] rounded-[50%] blur-3xl opacity-80 rotate-45  mix-blend-plus-lighter pointer-events-none'
                  )}
                />
              </div>
              <div className={clsx(mainBlock.fade, 'absolute inset-0 pointer-events-none')} />
            </div>
            <div
              className={clsx(
                mainBlock.shine,
                'absolute z-20 top-0 left-0 w-[380px] h-px blur-[5px] mix-blend-plus-lighter pointer-events-none'
              )}
            />
            <div
              className={clsx(
                mainBlock.shine,
                'absolute z-20 top-0 left-0 w-[380px] h-px blur-[3px] mix-blend-plus-lighter pointer-events-none'
              )}
            />
            <div
              className={clsx(
                mainBlock.shine,
                'absolute z-20 top-0 left-0 w-[380px] h-px blur-[1px] mix-blend-plus-lighter pointer-events-none'
              )}
            />
            <div
              className={clsx(
                background.gradients.lg,
                'absolute -top-60 -left-28 w-[828px] h-[1020px] rounded-full blur-3xl -rotate-45'
              )}
            />
            <div
              className={clsx(
                background.gradients.md,
                'absolute -top-40 -left-10 w-[478px] h-[606px] rounded-full blur-xl -rotate-45'
              )}
            />
            <div
              className={clsx(
                background.gradients.sm,
                'absolute -top-40 left-8 w-[250px] h-[450px] rounded-full blur-xl -rotate-90'
              )}
            />
            <img
              className="absolute -top-[102px] -left-16 pointer-events-none"
              src={background.image}
              alt=""
              width="482"
              height="206"
            />
          </div>
          <div className="relative shrink-0 hidden md:block sm:order-last sm:mt-6">
            <StaticImage
              className="z-10 left-[3.5%] lg:w-[500px] lg:h-auto md:w-[380px] sm:w-full sm:max-w-[628px] sm:left-0"
              src="./images/inbox.png"
              alt=""
              width={628}
              height={659}
            />
            <img
              className="absolute z-10 w-[76.7516%] h-[31.4112%] top-[-13.8088%] left-[-5.2548%]"
              src={background.image}
              alt=""
              width="482"
              height="206"
            />
            <div
              className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)] w-[39.8089%] h-[68.2852%] rotate-90 top-[-23.3687%] left-[13.3757%] blur-[22px]"
              aria-hidden
            />
            <div
              className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)] w-[76.1146%] h-[91.9575%] -rotate-45 top-[-23.3687%] left-[4.5523%]"
              aria-hidden
            />
            <div
              className="absolute z-0 bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)] w-[131.8471%] h-[154.7799%] -rotate-45 top-[-44.006%] left-[-17.5159%]"
              aria-hidden
            />
          </div>
          <div className="relative z-10 pl-32 pr-3 mb-[18px] xl:pl-20 xl:pr-0 md:pl-18 sm:pl-0 sm:mb-6 sm:text-center">
            <Heading
              className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
              tag="h2"
              size="xl"
            >
              {title}
            </Heading>
            <p className="mt-3 text-[17px] leading-snug md:text-sm font-book">{description}</p>
            {button && (
              <Button
                className="h-14 px-6 text-sm min-w-[142px] mt-7 md:mt-5"
                theme="gray-outline"
                to={button.link}
              >
                {button.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Inbox.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      isRead: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

Inbox.defaultProps = {
  theme: 'dark',
  button: null,
};

export default Inbox;
