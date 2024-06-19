import React, { useEffect, useState } from 'react';

import Heading from 'components/shared/heading';

const TITLE = 'Hacktoberfest 2023';
const DESCRIPTION = 'Make your open source contribution today.';

const getZeroPad = (number) => (number < 10 ? `0${number}` : number);

const getCountTime = (distance) => {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const countDownLaunchDate = new Date('Oct 1, 2023 00:00:00').getTime();
const countDownEndDate = new Date('Oct 31, 2023 00:00:00').getTime();

const tick = () => {
  const now = new Date().getTime();
  const distance = countDownLaunchDate - now;

  if (distance < 0) {
    return getCountTime(countDownEndDate - now);
  }

  return getCountTime(distance);
};

const Timer = () => {
  const [count, setCount] = useState(() => tick());
  const [isLaunched, setIsLaunched] = useState(countDownLaunchDate < new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(tick());
      if (countDownLaunchDate < new Date().getTime()) {
        setIsLaunched(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      number: count.days,
      title: 'Days',
    },
    {
      number: count.hours,
      title: 'Hours',
    },
    {
      number: count.minutes,
      title: 'Minutes',
    },
    {
      number: count.seconds,
      title: 'Seconds',
    },
  ];
  return (
    <section className="timer safe-paddings py-32 md:py-20 sm:py-16">
      <div className="container-lg flex flex-col">
        <div className="flex space-x-8 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-10 lg:text-center">
          <div className="flex-1">
            <Heading
              className="font-bold leading-tight md:text-4xl sm:text-3xl"
              tag="h2"
              size="lg"
              theme="white"
              asHTML
            >
              {TITLE}
            </Heading>
            <p className="mt-5 max-w-[504px] text-gray-9">{DESCRIPTION}</p>
          </div>
          <div className="flex-1 font-medium">
            <h3 className="text-lg uppercase leading-none text-white">
              {isLaunched ? 'Time to end' : 'Time to launch'}
            </h3>
            <div className="mt-7 flex space-x-20 md:space-x-16 sm:space-x-10 2xs:space-x-6">
              {items.map(({ number, title }, index) => (
                <div
                  className="flex w-[86px] flex-col items-center justify-center leading-none md:w-[76px] sm:w-14"
                  key={index}
                >
                  <span className="text-8xl md:text-7xl sm:text-5xl 2xs:text-3xl">
                    {getZeroPad(number)}
                  </span>
                  <span className="mt-2.5 uppercase text-gray-6 sm:text-sm 2xs:text-xs">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Timer.propTypes = {};

Timer.defaultProps = {};

export default Timer;
