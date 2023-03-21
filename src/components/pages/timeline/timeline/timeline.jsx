import React, { useEffect } from 'react';

import { TIMELINE_DATA, ACTIVE_DATE } from './constants/data';
import bg from './images/bg.jpg';
import topGradient from './images/top-gradient.svg';
import Item from './item';

const Timeline = () => {
  // Handling the position of the progress bar when hovering over the elements, as well as adding active styles to the elements
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
    <section className="safe-paddings relative pt-24 sm:pt-20">
      <div className="px-10 md:px-7 sm:px-4">
        <h1 className="text-highlighting-gray-light-gradient text-7xl font-normal leading-denser tracking-tight sm:text-5xl xs:text-3xl">
          Novu 2022 Events
        </h1>
      </div>
      <div className="timeline relative mt-12">
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
          className="scrollbar-hidden relative z-20 overflow-auto px-10 md:px-7 sm:px-4"
          id="timelineWrapper"
        >
          <div
            className="absolute top-[15px] left-[178px] z-10 h-[calc(100%-51px)] transition-[left] duration-500"
            id="timelineProgressBar"
          >
            <span className="timeline-progress-bar-circle flex h-9 w-9 items-center justify-center" />
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
                    gridTemplateColumns: `repeat(${events.length + 1},70px)`,
                  }}
                >
                  <div className="font-bold uppercase text-[#80BDFF]">{month}</div>
                  {events.map((event, index) => (
                    <div key={index}>
                      {event.items.map((item, index) => (
                        <span
                          className="timeline-day block text-center text-white opacity-80"
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
                  className="grid h-[454px] px-[50px] pt-9"
                  style={{
                    gridTemplateColumns: `repeat(${events.length + 1},1fr)`,
                    gridTemplateRows: `repeat(7,1fr)`,
                  }}
                >
                  {events.map((event, index) => (
                    <div
                      className="relative grid"
                      key={index}
                      style={{
                        gridColumnStart: index + 2,
                        gridColumnEnd: index + 7,
                        gridRowStart: index + 1,
                      }}
                    >
                      {event.items
                        .filter((item) => item?.title)
                        .map((item, index) => (
                          <Item
                            animationDelay={index * 0.1}
                            date={item.date}
                            isActive={item.date === ACTIVE_DATE}
                            key={index}
                            {...item}
                          />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-bg absolute inset-0" aria-hidden>
          <img
            className="absolute bottom-0 left-1/2 min-w-[1920px] -translate-x-1/2"
            src={bg}
            alt=""
            width={1920}
            height={616}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
