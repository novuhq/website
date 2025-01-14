import clsx from 'clsx';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import dots from '../images/dots.svg';
import MessageList from '../message-list';

import LinearIcon from './images/linear.inline.svg';
import MessageIcon from './images/message.inline.svg';
import NotificationIcon from './images/notification.inline.svg';
import NotionIcon from './images/notion.inline.svg';
import NovuIcon from './images/novu.inline.svg';
import ThemeIcon from './images/theme.inline.svg';
import user from './images/user.jpg';

const THEMES = {
  novuDefault: {
    background: {
      image: dots,
      gradients: [
        '-top-60 -left-28 w-[828px] h-[1020px] rounded-full blur-3xl -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]',
        '-top-40 -left-10 w-[478px] h-[606px] rounded-full blur-xl -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)]',
        '-top-40 left-8 w-[250px] h-[450px] rounded-full blur-xl -rotate-90 bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)]',
      ],
    },
    mainBlock: {
      border:
        'bg-[radial-gradient(101.2%_100%_at_50%_0%,rgba(135,150,195,0.15)_0%,#1E2538_49.26%,rgba(30,36,56,0.3)_100%),radial-gradient(31.2%_54.8%_at_24.26%_-0.52%,#FFFFFF_0%,#BECEFF_33.21%,rgba(134,164,255,0.5)_50.5%,rgba(64,66,74,0)_100%)]',
      background:
        'bg-[radial-gradient(116.92%_107.07%_at_74.01%_1.48%,#1F2844_0%,#0A0E20_46.27%),radial-gradient(82.16%_97.03%_at_72.12%_2.97%,rgba(36,48,96,0.5)_0%,rgba(18,24,47,0)_100%)]',
      shine: 'bg-[linear-gradient(90deg,#FFFFFF00_13.5%,#FFFFFF_57.86%,#FFFFFF00_100%)]',
      fade: 'bg-[rgba(5,5,11,0.05)]',
      gradients: [
        'top-[40%] -left-1/2 w-[1030px] h-[340px] rounded-[50%/33.33%] blur-3xl opacity-80 rotate-45 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#232B5B_0%,rgba(35,43,91,0)_100%)]',
        '-top-[30%] -left-[20%] w-[479px] h-[383px] rounded-[50%] blur-3xl opacity-80 rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#3D4B7A_0%,rgba(61,75,122,0)_100%)]',
        '-top-[30%] left-[10%] w-[312px] h-[246px] rounded-[50%] blur-3xl opacity-80 rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,#46568B_0%,rgba(61,75,122,0)_100%)]',
      ],
    },
    header: {
      logo: 'text-[#C6CADD] mr-2.5 size-[18px]',
      logoIcon: NovuIcon,
      logoText: 'Notification Control Center',
      logoTextClassName: 'font-book tracking-snug text-[#BFC3D2]',
      icon: '#FFFFFF',
      notificationIcon: NotificationIcon,
      messageIcon: MessageIcon,
      themeIcon: ThemeIcon,
      userAvatar: user,
    },
    container: {
      border:
        'bg-[radial-gradient(77.02%_84.55%_at_26.5%_-0.79%,rgba(212,223,255,0.5)_7.67%,rgba(212,223,255,0.2156)_42.14%,rgba(212,223,255,0.08)_73.76%,rgba(212,223,255,0.05)_100%)]',
      shadow: 'shadow-[0_-6px_20px_#04090F40,-2px_-2px_10px_#04090F33,10px_10px_20px_#00000026]',
      background:
        'bg-[radial-gradient(67.52%_107.77%_at_24.65%_-0.08%,rgba(179,195,255,0.2)_0%,rgba(178,195,255,0)_72.48%),linear-gradient(180deg,rgba(17,20,35,0)_15.9%,rgba(17,20,35,0.6)_93.06%),linear-gradient(-314.36deg,rgba(28,34,61,0)_62.7%,#1C223D_99.39%),linear-gradient(#212D54,#212D54)]',
      shine: 'bg-[linear-gradient(90deg,#FFFFFF00,#FFFFFF_41%,#FFFFFF00_100%)]',
    },
  },
  notionDark: {
    background: {
      gradients: [
        'w-[267px] h-[480px] top-[94px] left-[138px] blur-[22px] rounded-full rotate-[7deg] bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)]',
        'w-[510px] h-[648px] -top-10 -right-8 rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)]',
        'w-[510px] h-[648px] top-2.5 left-8 rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)]',
        'w-[884px] h-[1090px] top-[-250px] left-[-130px] rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]',
      ],
    },
    mainBlock: {
      border: 'bg-[#242528]',
      background: 'bg-[#12141A]',
    },
    header: {
      logo: 'text-[#AFB1B6] ml-3 mr-2 size-[18px]',
      logoIcon: NotionIcon,
      logoText: 'Notion Workspace',
      logoTextClassName: 'font-normal text-sm leading-none text-[#AFB1B6] -mt-px',
      icon: 'text-[#AFB1B6]',
    },
    container: {
      shadow:
        'shadow-[10px_10px_20px_0px_rgba(15,16,21,0.1),-2px_-2px_10px_0px_rgba(15,16,21,0.2),0px_-6px_20px_0px_rgba(15,16,21,0.25)]',
      background: 'bg-[#1C1D22]',
    },
  },
  notionLight: {
    background: {
      gradients: [
        'w-[267px] h-[480px] top-[94px] left-[138px] blur-[22px] rounded-full rotate-[7deg] bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)]',
        'w-[510px] h-[648px] -top-10 -right-8 rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)]',
        'w-[510px] h-[648px] top-2.5 left-8 rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0)_100%)]',
        'w-[884px] h-[1090px] top-[-250px] left-[-130px] rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]',
      ],
    },
    mainBlock: {
      background: 'bg-[#F7F7F5] shadow-[0px_3px_20px_0px_rgba(8,9,12,0.12)_inset]',
    },
    header: {
      logo: 'text-[#373530] ml-3 mr-2',
      logoIcon: NotionIcon,
      logoText: 'Notion Workspace',
      logoTextClassName: 'font-normal text-sm leading-none text-[#373530] -mt-px',
      icon: 'text-[#373530]',
    },
    container: {
      shadow:
        'shadow-[10px_10px_20px_0px_rgba(15,16,21,0.05),-2px_-2px_10px_0px_rgba(15,16,21,0.07),0px_-6px_20px_0px_rgba(15,16,21,0.03)]',
      background: 'bg-[#FFFFFF]',
    },
  },
  linearDark: {
    background: {
      gradients: [
        'w-[267px] h-[480px] top-[94px] left-[138px] blur-[22px] rounded-full rotate-[7deg] bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)]',
        'w-[510px] h-[648px] -top-10 -right-8 rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]',
        'w-[510px] h-[648px] top-2.5 left-8 rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]',
        'w-[884px] h-[1090px] top-[-250px] left-[-130px] rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_16.51%,rgba(18,28,59,0)_100%)]',
      ],
    },
    mainBlock: {
      background: 'bg-[#15161C]',
      border: 'border border-[#2C2E3A]',
    },
    header: {
      logo: 'text-[#9A9AA1] ml-3 mr-2 w-[72px] h-[18px]',
      logoIcon: LinearIcon,
    },
    container: {
      background: 'bg-[#191A22]',
      border: 'border border-[#2C2E3A]',
    },
  },
  linearLight: {
    background: {
      gradients: [
        'w-[267px] h-[480px] top-[94px] left-[138px] blur-[22px] rounded-full rotate-[7deg] bg-[radial-gradient(50%_50%_at_50%_50%,#314479_0%,rgba(49,68,121,0)_100%)]',
        'w-[510px] h-[648px] -top-10 -right-8 rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0.00)_100%)]',
        'w-[510px] h-[648px] top-2.5 left-8 rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#1C2D5E_0%,rgba(18,28,59,0.00)_100%)]',
        'w-[884px] h-[1090px] top-[-250px] left-[-130px] rounded-full rotate-[52deg] bg-[radial-gradient(50%_50%_at_50%_50%,#121C3B_52%,rgba(18,28,59,0.00)_100%)]',
      ],
    },
    mainBlock: {
      background: 'bg-[#EDEDED]',
    },
    header: {
      logo: 'text-[#222326] ml-3 mr-2 w-[72px] h-[18px]',
      logoIcon: LinearIcon,
    },
    container: {
      background:
        'bg-white shadow-[0px_-6px_20px_0px_rgba(15,16,21,0.02),-2px_-2px_10px_0px_rgba(15,16,21,0.02),10px_10px_20px_0px_rgba(15,16,21,0.03)]',
    },
  },
};

const Container = ({ theme, categories, messages }) => {
  const currentTheme = THEMES[theme];

  const [messageList, setMessageList] = useState(
    messages.map((message, index) => ({ ...message, isArchived: false, index }))
  );
  const [activeTab, setActiveTab] = useState(categories ? categories[0] : undefined);

  const isUnreadMessages = messageList.some((message) => !message.isRead);

  const tabsList = useMemo(() => {
    const allCount = messageList.filter((message) => !message.isRead).length;
    const categoryTabs = categories?.map((category, index) => ({
      label: category,
      count:
        index === 0
          ? allCount
          : messageList.filter(
              (message) =>
                message.category.toLowerCase() === category.toLowerCase() && !message.isRead
            ).length,
    }));
    return categoryTabs;
  }, [categories, messageList]);

  const LogoIcon = currentTheme.header.logoIcon;
  const NotificationIcon = currentTheme.header.notificationIcon;
  const MessageIcon = currentTheme.header.messageIcon;
  const ThemeIcon = currentTheme.header.themeIcon;

  return (
    <m.div
      className="absolute left-0 top-0 md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3 } }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-30 w-[608px] overflow-hidden rounded-[20px] px-5 pb-[22px] lg:w-[531px]">
        <header className="relative z-40 flex h-[46px] items-center">
          <LogoIcon className={clsx('size-[18px] shrink-0', currentTheme.header.logo)} />
          {currentTheme.header.logoText && (
            <h3 className={clsx('mr-auto leading-none', currentTheme.header.logoTextClassName)}>
              {currentTheme.header.logoText}
            </h3>
          )}
          {NotificationIcon && (
            <div className="relative mr-3.5 shrink-0">
              <NotificationIcon className={clsx('size-6', currentTheme.header.icon)} />
              {isUnreadMessages && (
                <div className="absolute right-[3px] top-1 size-2 rounded-full border border-[#151b37] bg-[linear-gradient(232.66deg,#FFDF66_9.72%,#FFB433_89.91%)]" />
              )}
            </div>
          )}
          {ThemeIcon && (
            <ThemeIcon className={clsx('mr-3.5 size-6 shrink-0', currentTheme.header.icon)} />
          )}
          {MessageIcon && (
            <MessageIcon className={clsx('mr-5 size-6 shrink-0', currentTheme.header.icon)} />
          )}
          {currentTheme.header.userAvatar && (
            <img
              className="size-6 shrink-0 rounded-sm"
              src={currentTheme.header.userAvatar}
              alt="User's avatar"
              width="24"
              height="24"
            />
          )}
        </header>
        <div
          className={clsx(
            currentTheme.container.border,
            currentTheme.container.shadow,
            'relative z-30 h-[573px] rounded-xl lg:h-[500px]',
            theme !== 'linearDark' && theme !== 'linearLight' && 'p-px'
          )}
        >
          <div className="relative z-30 flex h-full flex-col overflow-hidden rounded-xl">
            <MessageList
              theme={theme}
              tabs={tabsList}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              defaultTab={categories ? categories[0] : undefined}
              messages={messageList}
              setMessages={setMessageList}
            />
            <div
              className={clsx(currentTheme.container.background, 'absolute inset-0 rounded-xl')}
            />
            {currentTheme.container.shine && (
              <div
                className={clsx(
                  currentTheme.container.shine,
                  'pointer-events-none absolute -top-0.5 left-3.5 h-px w-[318px] mix-blend-plus-lighter blur-[2px]'
                )}
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          currentTheme.mainBlock.border,
          'absolute left-0 top-0 z-10 aspect-[608/573] h-[573px] w-auto shrink-0 rounded-[20px] lg:h-[501px]'
        )}
      >
        <div
          className={clsx(
            currentTheme.mainBlock.background,
            'relative z-20 h-full w-full overflow-hidden rounded-[20px]'
          )}
        >
          {currentTheme.mainBlock.gradients &&
            currentTheme.mainBlock.gradients.map((gradient, index) => (
              <div
                key={index}
                className={clsx(gradient, 'pointer-events-none absolute z-20')}
                aria-hidden
              />
            ))}
          {currentTheme.mainBlock.fade && (
            <div
              className={clsx(
                currentTheme.mainBlock.fade,
                'pointer-events-none absolute inset-0 rounded-[20px]'
              )}
              aria-hidden
            />
          )}
        </div>
        {currentTheme.mainBlock.shine && (
          <>
            <div
              className={clsx(
                currentTheme.mainBlock.shine,
                'pointer-events-none absolute left-0 top-0 z-30 h-px w-[380px] mix-blend-plus-lighter blur-[5px]'
              )}
              aria-hidden
            />
            <div
              className={clsx(
                currentTheme.mainBlock.shine,
                'pointer-events-none absolute left-0 top-0 z-30 h-px w-[380px] mix-blend-plus-lighter blur-[3px]'
              )}
              aria-hidden
            />
            <div
              className={clsx(
                currentTheme.mainBlock.shine,
                'pointer-events-none absolute left-0 top-0 z-30 h-px w-[380px] mix-blend-plus-lighter blur-[1px]'
              )}
              aria-hidden
            />
          </>
        )}
        {currentTheme.background.gradients.map((gradient, index) => (
          <div
            key={index}
            className={clsx(gradient, 'pointer-events-none absolute z-10')}
            aria-hidden
          />
        ))}
        {currentTheme.background.image && (
          <img
            className="pointer-events-none absolute -left-16 -top-[102px]"
            src={currentTheme.background.image}
            alt=""
            width="482"
            height="206"
          />
        )}
      </div>
    </m.div>
  );
};

Container.propTypes = {
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Container;
