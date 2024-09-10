import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import dots from '../images/dots.svg';

import MessageIcon from './images/message.inline.svg';
import NotificationIcon from './images/notification.inline.svg';
import NovuIcon from './images/novu.inline.svg';
import ThemeIcon from './images/theme.inline.svg';
import user from './images/user.jpg';

const THEMES = {
  dark: {
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
    header: {
      logo: '#C6CADD',
      icon: '#FFFFFF',
    },
  },
};

const Container = ({ className, theme, children, isUnreadMessages }) => {
  const currentTheme = THEMES[theme];

  return (
    <div
      className={clsx(
        currentTheme.mainBlock.border,
        className,
        'relative shrink-0 w-[608px] rounded-[20px] p-px lg:w-[532px]'
      )}
    >
      <div
        className={clsx(
          currentTheme.mainBlock.background,
          'relative z-10 w-full h-full rounded-[20px] pt-[11px] pb-[22px] px-5 overflow-hidden sm:p-4'
        )}
      >
        <div className="relative z-30">
          <header className="flex items-center pb-2.5">
            <NovuIcon
              className="shrink-0 size-[18px] mr-2.5"
              style={{ '--icon-color': currentTheme.header.logo }}
            />
            <h3 className="mr-auto font-light leading-none tracking-snug opacity-60">
              Notification Control Center
            </h3>
            <div className="shrink-0 relative mr-3.5">
              <NotificationIcon
                className="size-6"
                style={{ '--icon-color': currentTheme.header.icon }}
              />
              {isUnreadMessages && (
                <div className="absolute top-1 right-[3px] size-2 bg-[linear-gradient(232.66deg,#FFDF66_9.72%,#FFB433_89.91%)] border border-[#151b37] rounded-full" />
              )}
            </div>
            <ThemeIcon
              className="shrink-0 size-6 mr-3.5"
              style={{ '--icon-color': currentTheme.header.icon }}
            />
            <MessageIcon
              className="shrink-0 size-6 mr-5"
              style={{ '--icon-color': currentTheme.header.icon }}
            />
            <img
              className="shrink-0 size-6 rounded-sm"
              src={user}
              alt="User's avatar"
              width="24"
              height="24"
            />
          </header>
          {children}
          <div
            className={clsx(
              currentTheme.mainBlock.gradients.lg,
              'absolute z-20 top-[40%] -left-1/2 w-[1030px] h-[340px] rounded-[50%/33.33%] blur-3xl opacity-80 rotate-45 -translate-y-1/2 mix-blend-plus-lighter pointer-events-none'
            )}
          />
          <div
            className={clsx(
              currentTheme.mainBlock.gradients.md,
              'absolute z-20 -top-[30%] -left-[20%] w-[479px] h-[383px] rounded-[50%] blur-3xl opacity-80 rotate-45 mix-blend-plus-lighter pointer-events-none'
            )}
          />
          <div
            className={clsx(
              currentTheme.mainBlock.gradients.sm,
              'absolute z-20 -top-[30%] left-[10%] w-[312px] h-[246px] rounded-[50%] blur-3xl opacity-80 rotate-45  mix-blend-plus-lighter pointer-events-none'
            )}
          />
        </div>
        <div
          className={clsx(currentTheme.mainBlock.fade, 'absolute inset-0 pointer-events-none')}
        />
      </div>
      <div
        className={clsx(
          currentTheme.mainBlock.shine,
          'absolute z-20 top-0 left-0 w-[380px] h-px blur-[5px] mix-blend-plus-lighter pointer-events-none'
        )}
      />
      <div
        className={clsx(
          currentTheme.mainBlock.shine,
          'absolute z-20 top-0 left-0 w-[380px] h-px blur-[3px] mix-blend-plus-lighter pointer-events-none'
        )}
      />
      <div
        className={clsx(
          currentTheme.mainBlock.shine,
          'absolute z-20 top-0 left-0 w-[380px] h-px blur-[1px] mix-blend-plus-lighter pointer-events-none'
        )}
      />
      <div
        className={clsx(
          currentTheme.mainBlock.gradients.lg,
          'absolute -top-60 -left-28 w-[828px] h-[1020px] rounded-full blur-3xl -rotate-45'
        )}
      />
      <div
        className={clsx(
          currentTheme.mainBlock.gradients.md,
          'absolute -top-40 -left-10 w-[478px] h-[606px] rounded-full blur-xl -rotate-45'
        )}
      />
      <div
        className={clsx(
          currentTheme.mainBlock.gradients.sm,
          'absolute -top-40 left-8 w-[250px] h-[450px] rounded-full blur-xl -rotate-90'
        )}
      />
      <img
        className="absolute -top-[102px] -left-16 pointer-events-none"
        src={currentTheme.background.image}
        alt=""
        width="482"
        height="206"
      />
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(THEMES)).isRequired,
  children: PropTypes.node.isRequired,
  isUnreadMessages: PropTypes.bool.isRequired,
};

Container.defaultProps = {
  className: '',
};

export default Container;
