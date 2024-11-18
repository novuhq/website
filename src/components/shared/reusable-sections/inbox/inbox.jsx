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
    messages.map((message, index) => ({ ...message, index }))
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
        <div className="flex items-center justify-center pl-8 md:pl-0 sm:flex-col">
          <Container className="md:hidden" theme={theme} isUnreadMessages={isUnreadMessages}>
            <div className={clsx(border, shadow, 'relative z-30 rounded-xl p-px')}>
              <div className="relative overflow-hidden rounded-xl">
                <div className="relative z-10 flex h-14 items-center px-[22px]">
                  <InboxText className="h-7 w-14" />
                  <ArrowIcon className="ml-2 mr-auto mt-1.5 w-2.5" />
                  <MoreIcon className="mr-4 size-5" style={{ '--icon-color': icons }} />
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
                    'pointer-events-none absolute left-3.5 top-0 h-px w-[318px] mix-blend-plus-lighter blur-[1px]'
                  )}
                />
              </div>
            </div>
          </Container>
          <AdaptiveStatic className="hidden md:block" theme={theme} />
          <div className="relative z-10 mb-[18px] pl-24 pr-3 xl:pl-20 xl:pr-0 md:pl-18 sm:mb-6 sm:max-w-lg sm:pl-0 sm:text-center">
            <Heading
              className="font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl"
              tag="h2"
              size="xl"
            >
              {title}
            </Heading>
            <p className="mt-4 text-pretty text-lg font-book tracking-snug text-gray-8 md:text-sm">
              {description}
            </p>
            {button && (
              <Button
                className="mt-8"
                theme="gray-outline"
                size="sm"
                to={button.link}
                rel={button.rel}
                target={button.target}
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
    rel: PropTypes.string,
    target: PropTypes.string,
  }),
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      isRead: PropTypes.bool.isRequired,
      buttons: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

Inbox.defaultProps = {
  theme: 'dark',
  button: null,
};

export default Inbox;
