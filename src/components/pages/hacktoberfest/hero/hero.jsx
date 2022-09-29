import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const PAGE_TITLE = 'We are happy to take part in<br /><span>Hacktoberfest 2022</span>';
const BUTTON_TEXT = 'Join hacktoberfest';
const BUTTON_URL = 'https://hacktoberfest.com/';
const TITLE = 'Sep 26<br/>Registration begins';
const DESCRIPTION =
  'Whether it’s your first time — or your ninth — it’s almost time to hack out four pristine pull/merge requests and complete your mission for open source.';

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

const countDownLaunchDate = new Date('Oct 1, 2022 00:00:00').getTime();
const countDownEndDate = new Date('Oct 31, 2022 00:00:00').getTime();

const tick = () => {
  const now = new Date().getTime();
  const distance = countDownLaunchDate - now;

  if (distance < 0) {
    return getCountTime(countDownEndDate - now);
  }

  return getCountTime(distance);
};

const Hero = () => {
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
    <section className="hero safe-paddings pt-36 lg:pt-32 md:pt-28 sm:pt-18">
      <div className="relative flex items-center bg-hero-gradient bg-cover bg-center bg-no-repeat pt-[42px] pb-[52px] md:pt-8 md:pb-10">
        <Heading
          className="text-highlighting-blue-gradient container text-center text-[72px] font-bold leading-denser lg:text-6xl md:text-5xl"
          tag="h1"
          size="3xl"
          theme="white"
          asHTML
        >
          {PAGE_TITLE}
        </Heading>
      </div>
      <div className="container-lg mt-14 flex flex-col md:mt-10 sm:mt-9">
        <Button
          className="mx-auto"
          size="sm"
          theme="blue-gradient"
          to={BUTTON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {BUTTON_TEXT}
        </Button>

        <div className="mt-32 flex space-x-8 lg:mt-24 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-10 lg:text-center md:mt-20 sm:mt-16">
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
            <div className="mt-7 flex space-x-20 md:space-x-16 sm:space-x-10 xs:space-x-8">
              {items.map(({ number, title }, index) => (
                <div className="flex flex-col items-center leading-none" key={index}>
                  <span className="text-8xl md:text-7xl sm:text-5xl xs:text-3xl">
                    {getZeroPad(number)}
                  </span>
                  <span className="mt-2.5 uppercase text-gray-6 sm:text-sm xs:text-xs">
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

export default Hero;
