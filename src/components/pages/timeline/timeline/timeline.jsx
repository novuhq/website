import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import TIMELINE_DATA from './constants/data';
import airplaneIcon from './images/airplane.svg';
import arrowIcon from './images/arrow.svg';
import ballonIcon from './images/ballon.svg';
import bg from './images/bg.jpg';
import bookmarkIcon from './images/bookmark.svg';
import boxIcon from './images/box.svg';
import checkIcon from './images/check.svg';
import codeIcon from './images/code.svg';
import githubIcon from './images/github.svg';
import lightningIcon from './images/lightning.svg';
import shineIcon from './images/shine.svg';
import speakerIcon from './images/speaker.svg';
import swagIcon from './images/swag.svg';
import topGradient from './images/top-gradient.svg';
import twitterIcon from './images/twitter.svg';
import userIcon from './images/user.svg';

const icons = {
  check: checkIcon,
  user: userIcon,
  github: githubIcon,
  lightning: lightningIcon,
  box: boxIcon,
  code: codeIcon,
  airplane: airplaneIcon,
  ballon: ballonIcon,
  speaker: speakerIcon,
  twitter: twitterIcon,
  swag: swagIcon,
  bookmark: bookmarkIcon,
  shine: shineIcon,
};

const TimelineItem = ({ title, description, iconName, animationDelay }) => {
  const [animationWrapperRef, isAnimationWrapperInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const [isOpen, setIsOpen] = useState(false);

  const icon = icons[iconName];

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={clsx('group absolute h-fit w-max', {
          'z-10 cursor-pointer': description,
        })}
        role={description && 'button'}
        tabIndex={0}
        initial={{ opacity: 0, y: -10 }}
        animate={isAnimationWrapperInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: animationDelay }}
        ref={animationWrapperRef}
        onClick={description && handleClick}
        onKeyDown={description && handleClick}
      >
        <div className="timeline-item-border-gradient flex flex-col rounded-md bg-black p-3">
          <div className="flex items-center gap-x-3">
            <img src={icon} height={24} width={24} loading="eager" alt="" />
            <span className="text-white opacity-70 transition-opacity duration-200 group-hover:opacity-100">
              {title}
            </span>
            {description && (
              <div className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.4)_100%)]">
                <img src={arrowIcon} width={8} height={6} loading="eager" alt="" />
              </div>
            )}
          </div>
          {description && (
            <AnimatePresence>
              {isOpen && (
                <m.p
                  className="max-w-[340px] text-sm text-gray-7 transition-colors duration-200 group-hover:text-white"
                  initial={{ opacity: 0, height: 0, y: 0 }}
                  animate={{ opacity: 1, height: 'auto', y: 6 }}
                  exit={{ opacity: 0, height: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {description}
                </m.p>
              )}
            </AnimatePresence>
          )}
        </div>
      </m.div>
    </LazyMotion>
  );
};

const Timeline = () => {
  const months = TIMELINE_DATA.reduce((acc, item) => {
    const date = new Date(item.date);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const monthIndex = acc.findIndex((m) => m.month === month);
    if (monthIndex === -1) {
      acc.push({
        month,
        events: [
          {
            day,
            items: [item],
          },
        ],
      });
    } else {
      const dayIndex = acc[monthIndex].events.findIndex((d) => d.day === day);
      if (dayIndex === -1) {
        acc[monthIndex].events.push({
          day,
          items: [item],
        });
      } else {
        acc[monthIndex].events[dayIndex].items.push(item);
      }
    }
    return acc;
  }, []);

  return (
    <section className="safe-paddings relative pt-36 lg:pt-32 md:pt-28 sm:pt-20">
      <div className="px-10 md:px-7 sm:px-4">
        <h1 className="text-7xl sm:text-5xl xs:text-3xl">Novu 2022 Events</h1>
      </div>
      <div className="relative mt-12">
        <img className="absolute -top-28" src={topGradient} width={2120} height={296} alt="" />
        <div className="scrollbar-hidden relative z-10 overflow-auto px-10 md:px-7 sm:px-4">
          <div className="sticky top-[15px] left-[135px]">
            {/* <span className="absolute block h-9 w-9">
              <span className="absolute inset-0 rounded-full border border-white bg-black opacity-90" />
              <span className="absolute inset-0 -left-px -z-10 rounded-full bg-[#E300BD] opacity-60 blur-[10px] after:absolute after:inset-0 after:-z-10 after:-m-[3px] after:rounded-full after:bg-[#E300BD] after:blur-[3px]" />
            </span> */}
            <div className="absolute flex h-9 w-9 items-center justify-center before:absolute before:h-[200px] before:w-[200px] before:bg-slider-timeline-gradient before:opacity-25 before:blur-[85px]">
              <span className="absolute inset-0 block rounded-full border border-[#fcc8ef] bg-black before:absolute before:inset-0 before:-left-px before:-z-10 before:rounded-full before:bg-[#E300BD] before:opacity-60 before:blur-[10px] after:absolute after:inset-0 after:-z-10 after:-m-[3px] after:rounded-full after:bg-[#E300BD] after:opacity-40 after:blur-[3px]" />
            </div>

            <span className="absolute left-[17px] top-9 h-[770px] w-px bg-white before:absolute before:inset-0 before:-left-px before:w-[5px] before:rounded-full before:bg-[#E300BD] before:opacity-60 before:blur-[10px] after:absolute after:inset-0 after:-left-px after:w-[3px] after:rounded-full after:bg-[#E300BD] after:opacity-40 after:blur-[3px]" />
          </div>
          <div
            className="grid min-w-[1920px] pb-24"
            style={{
              gridTemplateColumns: `repeat(${months.length},1fr)`,
            }}
          >
            {months.map(({ month, events }, index) => (
              <div className="grid" key={index}>
                <div
                  className="grid border-t border-b border-[rgba(255,255,255,0.1)] bg-black py-5 px-[50px]"
                  style={{
                    gridTemplateColumns: `repeat(${events.length + 1},100px)`,
                  }}
                >
                  <div className="font-bold uppercase text-[#80BDFF]">{month}</div>
                  {events.map((event, index) => (
                    <div key={`${index}-day`}>
                      {event.items.map((index) => (
                        <span className="block font-medium text-white opacity-80" key={index}>
                          {event.day}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <div
                  className="grid h-[648px] flex-shrink-0 px-[50px] pt-9"
                  style={{
                    gridTemplateColumns: `repeat(${events.length + 1},1fr)`,
                    gridTemplateRows: `repeat(7,1fr)`,
                  }}
                >
                  {events.map((event, index) => (
                    <div
                      className="relative grid"
                      key={`${index}-event`}
                      style={{
                        gridColumnStart: index + 2,
                        gridColumnEnd: index + 7,
                        gridRowStart: index + 1,
                      }}
                    >
                      {event.items
                        .filter((item) => item?.title)
                        .map((item) => (
                          <TimelineItem animationDelay={index * 0.1} {...item} />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={bg} alt="" className="absolute bottom-0 left-0" />
      </div>
    </section>
  );
};

export default Timeline;
