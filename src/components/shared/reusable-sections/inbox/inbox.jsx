import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import AdaptiveStatic from './adaptive-static';
import Container from './container';
import ArrowIcon from './images/arrow.inline.svg';
import InboxText from './images/inbox-text.inline.svg';
import MoreIcon from './images/more.inline.svg';
import SettingsIcon from './images/settings.inline.svg';
import MessageList from './message-list';
import TabList from './tab-list';

const themes = {
  dark: {
    text: 'text-white',
    icons: '#FFFFFF',
    border:
      'bg-[radial-gradient(77.02%_84.55%_at_26.5%_-0.79%,#D4DFFF80_7.67%,#D4DFFF38_42.14%,#D4DFFF14_73.76%,#D4DFFF0D_100%)]',
    shadow: 'shadow-[0_-6px_20px_#04090F40,-2px_-2px_10px_#04090F33,10px_10px_20px_#00000026]',
    background:
      'bg-[linear-gradient(180deg,#11142300_67.63%,#111321_84.23%),radial-gradient(76.68%_43.11%_at_28.52%_0.79%,#C2CFFF66_0%,#C2CFFF00_53.98%),linear-gradient(191.65deg,#354067_3.6%,#262D48B3_91.45%)]',
    shine: 'bg-[linear-gradient(90deg,#FFFFFF00,#FFFFFF_41%,#FFFFFF00_100%)]',
  },
};

const DEFAULT_TAB = 'All';

const Inbox = ({ theme, title, description, button, categories, messages }) => {
  const [messageList, setMessageList] = useState(
    messages.map((message, index) => ({ ...message, id: index }))
  );
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const isUnreadMessages = messageList.some((message) => !message.isRead);

  const tabsList = useMemo(() => {
    const allCount = messageList.filter((message) => !message.isRead).length;
    const categoryTabs = categories.map((category) => ({
      label: category,
      count: messageList.filter(
        (message) => message.category.toLowerCase() === category.toLowerCase() && !message.isRead
      ).length,
    }));
    return [{ label: DEFAULT_TAB, count: allCount }, ...categoryTabs];
  }, [categories, messageList]);

  const { text, icons, border, shadow, background, shine } = themes[theme];

  return (
    <section className={clsx(text, 'inbox safe-paddings mt-40 lg:mt-36 md:mt-[104px] sm:mt-14')}>
      <div className="container-lg">
        <div className="flex items-center justify-center pl-8 sm:flex-col">
          <Container className="md:hidden" theme={theme} isUnreadMessages={isUnreadMessages}>
            <div className={clsx(border, shadow, 'relative z-30 p-px rounded-xl')}>
              <div className="relative rounded-xl overflow-hidden">
                <div className="relative z-10 flex items-center h-14 px-[22px]">
                  <InboxText className="w-14 h-7" />
                  <ArrowIcon className="w-2.5 mt-1.5 ml-2 mr-auto" />
                  <MoreIcon className="size-5 mr-4" style={{ '--icon-color': icons }} />
                  <SettingsIcon className="size-5" style={{ '--icon-color': icons }} />
                </div>
                <TabList
                  theme={theme}
                  tabs={tabsList}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <MessageList
                  theme={theme}
                  activeTab={activeTab}
                  defaultTab={DEFAULT_TAB}
                  messages={messageList}
                  setMessages={setMessageList}
                />
                <div className={clsx(background, 'absolute inset-0 blur-2xl')} />
                <div
                  className={clsx(
                    shine,
                    'absolute top-0 left-3.5 w-[318px] h-px blur-[1px] mix-blend-plus-lighter pointer-events-none'
                  )}
                />
              </div>
            </div>
          </Container>
          <AdaptiveStatic className="hidden md:block" theme={theme} />
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
