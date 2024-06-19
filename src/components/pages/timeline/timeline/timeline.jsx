import React, { useState, useEffect } from 'react';

import { TIMELINE_DATA, ACTIVE_DATE } from './constants/data';
import bgGradient from './images/bg-gradient.svg';
import bg from './images/bg.jpg';
import rocketIllustration from './images/rocket.svg';
import topGradient from './images/top-gradient.svg';
import Item from './item';

const Timeline = () => {
  const [isActiveDate, setIsActiveDate] = useState(ACTIVE_DATE);
  // Handling the position of the progress bar when hovering over the elements, as well as adding active styles to the elements
  const handleOnMouseEnter = (event) => {
    const { date } = event.currentTarget.dataset;

    setIsActiveDate(date);

    const timeline = document.getElementById('timelineWrapper');
    const timelineItemDay = document.querySelector(`.timeline-day[data-date="${date}"]`);
    const dateOffsetLeft =
      timelineItemDay.getBoundingClientRect().left -
      timeline.getBoundingClientRect().left +
      timeline.scrollLeft;

    const progressBar = document.getElementById('timelineProgressBar');
    const progressBarLeftPosition = dateOffsetLeft + 17;
    progressBar.style.left = `${progressBarLeftPosition}px`;
    progressBar.style.opacity = 1;
  };

  // Is used to add a gradient at the beginning and the end of the timeline when scrolling
  const handleTimelineScroll = (event) => {
    const timeline = document.querySelector('.timeline');
    const { currentTarget } = event;

    if (currentTarget.scrollLeft > 40) {
      timeline.classList.add('timeline-scrolling');
    } else {
      timeline.classList.remove('timeline-scrolling');
    }

    if (currentTarget.scrollLeft + currentTarget.clientWidth >= currentTarget.scrollWidth) {
      timeline.classList.add('timeline-scrolled');
    } else {
      timeline.classList.remove('timeline-scrolled');
    }
  };

  useEffect(() => {
    const timeline = document.getElementById('timelineWrapper');
    const timelineItems = document.querySelectorAll('.timeline-item');

    timeline.addEventListener('scroll', handleTimelineScroll);
    timelineItems.forEach((item) => {
      item.addEventListener('mouseenter', handleOnMouseEnter);
    });
    return () => {
      timeline.removeEventListener('scroll', handleTimelineScroll);
      timelineItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleOnMouseEnter);
      });
    };
  }, []);

  return (
    <section className="safe-paddings relative flex h-[calc(100vh-50px)] min-h-[824px] flex-col pt-24 sm:pt-20">
      <div className="px-10 md:px-7 sm:px-4">
        <h1 className="text-highlighting-gray-light-gradient text-7xl font-normal leading-denser tracking-tight sm:text-5xl 2xs:text-3xl">
          Novu 2022 Events
        </h1>
      </div>
      <div className="timeline relative mt-12 flex h-full flex-1 flex-col">
        <img
          className="absolute -top-28 -z-10"
          src={topGradient}
          width={2120}
          height={296}
          loading="eager"
          alt=""
          aria-hidden
        />

        <div
          className="scrollbar-hidden relative z-20 flex flex-1 flex-col overflow-auto px-10 md:px-7 sm:px-4"
          id="timelineWrapper"
        >
          <div
            className="absolute left-[178px] top-[15px] z-10 h-[calc(100%-51px)] transition-[left] duration-500 md:left-[166px] sm:left-[154px]"
            id="timelineProgressBar"
          >
            <span className="timeline-progress-bar-circle relative flex h-9 w-9 items-center justify-center" />
            <span className="timeline-progress-bar-line block" />
          </div>

          <div
            className="relative grid w-fit min-w-[1920px] border-l border-r border-[rgba(255,255,255,0.1)] "
            style={{
              gridTemplateColumns: `repeat(${TIMELINE_DATA.length},1fr)`,
            }}
          >
            {TIMELINE_DATA.map(({ month, events }, index) => (
              <div key={index}>
                <div
                  className="grid border-b border-t border-[rgba(255,255,255,0.1)] bg-black px-[50px] py-5"
                  style={{
                    gridTemplateColumns: `repeat(${events.length + 1},70px)`,
                  }}
                >
                  <div className="font-bold uppercase text-[#80BDFF]">{month}</div>
                  {events.map((event, index) => (
                    <div key={`${index}-day`}>
                      {event.items.map((item) => (
                        <span
                          className="timeline-day block text-center text-white opacity-80"
                          data-date={item.date}
                          key={item.date}
                        >
                          {event.day}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="grid h-full w-fit min-w-[1920px] flex-1 overflow-hidden border border-t-0 border-[rgba(255,255,255,0.1)] pb-24"
            style={{
              gridTemplateColumns: `repeat(${TIMELINE_DATA.length},1fr)`,
            }}
          >
            {TIMELINE_DATA.map(({ year, events, custom }, index) => (
              <div
                className="relative grid h-full px-[50px] pt-9"
                style={{
                  gridTemplateColumns: `repeat(${events.length + 1},70px)`,
                  gridTemplateRows: `repeat(7,1fr)`,
                }}
                key={index}
              >
                {custom ? (
                  <div
                    className="absolute flex h-full w-full flex-col items-center justify-center"
                    aria-hidden
                  >
                    <img
                      src={rocketIllustration}
                      width={232}
                      height={311}
                      loading="lazy"
                      alt="rocket"
                    />
                    <div className="absolute bottom-0 inline-flex rounded-[32px] border border-gray-5 bg-gray-gradient-2 px-5 py-2">
                      <span className="text-lg leading-none text-gray-8">{year}</span>
                    </div>
                  </div>
                ) : (
                  events.map((event, index) => (
                    <div
                      className="relative grid"
                      key={`${index}-items`}
                      style={{
                        gridColumnStart: index + 2,
                        gridColumnEnd: index + 7,
                        gridRowStart: index + 1,
                      }}
                    >
                      {event.items
                        .filter((item) => item?.title)
                        .map((item) => (
                          <Item
                            animationDelay={index * 0.1}
                            zIndex={index}
                            date={item.date}
                            isActive={item.date === isActiveDate}
                            key={`${index}-item`}
                            {...item}
                          />
                        ))}
                    </div>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img
            className="absolute bottom-0 left-1/2 min-w-[1920px] -translate-x-1/2"
            src={bg}
            alt=""
            width={1920}
            height={616}
            loading="eager"
          />
          <img
            className="absolute -bottom-40 left-1/2 min-w-[1920px] -translate-x-1/2"
            src={bgGradient}
            alt=""
            width={1920}
            height={400}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
