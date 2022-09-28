import React, { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

const PAGE_TITLE = 'We are happy to take part in<br /><span>Hacktoberfest 2022</span>';
const BUTTON_TEXT = 'Join hacktoberfest';
const BUTTON_URL = '/';
const TITLE = 'Sep 26<br/>Registration begins';
const DESCRIPTION =
  'Whether it’s your first time — or your ninth — it’s almost time to hack out four pristine pull/merge requests and complete your mission for open source.';
const TITLE_2 = 'Time to launch';

const getZeroPad = (number) => (number < 10 ? `0${number}` : number);

const Hero = () => {
  const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  // create count down from 30th of September
  const countDownDate = new Date('Sep 30, 2022 00:00:00').getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCount({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const items = [
    {
      number: getZeroPad(count.days),
      title: 'Days',
    },
    {
      number: getZeroPad(count.hours),
      title: 'Hours',
    },
    {
      number: getZeroPad(count.minutes),
      title: 'Minutes',
    },
    {
      number: getZeroPad(count.seconds),
      title: 'Seconds',
    },
  ];

  return (
    <section className="pt-36">
      <div className="relative flex items-center bg-hero-gradient bg-cover bg-center bg-no-repeat pt-[42px] pb-[52px]">
        <Heading
          className="text-highlighting-blue-gradient container lg:flat-breaks flat-none text-center text-[72px] font-bold leading-denser"
          tag="h1"
          size="3xl"
          asHTML
        >
          {PAGE_TITLE}
        </Heading>
      </div>
      <div className="container mt-14 flex flex-col">
        <Button className="mx-auto" size="sm" theme="blue-gradient" to={BUTTON_URL}>
          {BUTTON_TEXT}
        </Button>

        <div className="mt-32 flex">
          <div className="flex-1">
            <Heading className="font-bold" tag="h2" size="lg" asHTML>
              {TITLE}
            </Heading>
            <p className="mt-5 max-w-[504px] text-gray-9">{DESCRIPTION}</p>
          </div>
          <div className="flex-1 font-medium">
            <Heading className="text-lg uppercase leading-none" tag="h3">
              {TITLE_2}
            </Heading>
            <div className="mt-7 flex space-x-20">
              {items.map(({ number, title }, index) => (
                <div className="flex flex-col items-center leading-none" key={index}>
                  <span className="text-8xl">{number}</span>
                  <span className="mt-2.5 uppercase text-gray-6">{title}</span>
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
