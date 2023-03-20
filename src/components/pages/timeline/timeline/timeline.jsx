import React, { useEffect } from 'react';

import TIMELINE_DATA from './constants/data';
import bg from './images/bg.png';
import topGradient from './images/top-gradient.svg';
import Item from './item';

const Timeline = () => {
  const handleOnMouseEnter = (event) => {
    const { date } = event.currentTarget.dataset;

    event.currentTarget.firstElementChild.classList.add('active');

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      if (item !== event.currentTarget) {
        item.firstElementChild.classList.remove('active');
      }
    });

    const timeline = document.getElementById('timelineWrapper');
    const timelineItemDay = document.querySelector(`.timeline-day[data-date="${date}"]`);
    const datePositionleft =
      timelineItemDay.getBoundingClientRect().left -
      timeline.getBoundingClientRect().left +
      timeline.scrollLeft;

    const isAbove = new Date(date).getDate() > 9;

    const progressBar = document.getElementById('timelineProgressBar');
    const progressBarLeftPosition = isAbove ? datePositionleft - 10 : datePositionleft - 14;
    progressBar.style.left = `${progressBarLeftPosition}px`;
    progressBar.style.opacity = 1;
  };

  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      item.addEventListener('mouseenter', handleOnMouseEnter);
    });
    return () => {
      timelineItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleOnMouseEnter);
      });
    };
  });

  return (
    <section className="safe-paddings relative pt-36 lg:pt-32 md:pt-28 sm:pt-20">
      <div className="px-10 md:px-7 sm:px-4">
        <h1 className="text-highlighting-gray-light-gradient text-7xl sm:text-5xl xs:text-3xl">
          Novu 2022 Events
        </h1>
      </div>
      <div className="relative mt-12">
        <img className="absolute -top-28" src={topGradient} width={2120} height={296} alt="" />

        <div
          className="scrollbar-hidden relative z-20 overflow-auto px-10 md:px-7 sm:px-4"
          id="timelineWrapper"
        >
          <div
            className="absolute top-[15px] left-[135px] z-10 h-[calc(100%-51px)] opacity-0 transition-[left] duration-500"
            id="timelineProgressBar"
          >
            <span className="timeline-progress-bar block h-9 w-9" />
            <span className="timeline-progress-bar-line block" />
          </div>

          <div
            className="grid w-fit min-w-[1920px] border border-t-0 border-[rgba(255,255,255,0.1)] pb-24"
            style={{
              gridTemplateColumns: `repeat(${TIMELINE_DATA.length},1fr)`,
            }}
          >
            {TIMELINE_DATA.map(({ month, events }, index) => (
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
                      {event.items.map((item, index) => (
                        <span
                          className="timeline-day block font-medium text-white opacity-80"
                          data-date={item.date}
                          key={index}
                        >
                          {event.day}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <div
                  className="grid h-[552px] px-[50px] pt-9"
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
                          <Item animationDelay={index * 0.1} date={item.date} {...item} />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="test">
          <img
            className="absolute bottom-0 left-1/2 min-w-[1920px] -translate-x-1/2"
            src={bg}
            alt=""
            width={1920}
            height={616}
          />
          <span />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
