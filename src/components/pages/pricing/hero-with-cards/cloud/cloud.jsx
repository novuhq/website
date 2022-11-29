import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import Button from 'components/shared/button';
import InputRange from 'components/shared/input-range';
import Tooltip from 'components/shared/tooltip/';
import QuestionIcon from 'icons/question.inline.svg';
import CheckIcon from 'images/check.inline.svg';

const thumbWidth = 28; // in pixels

const RANGES = {
  0: '10000',
  10: '30000',
  20: '35000',
  30: '40000',
  40: '50000',
  50: '60000',
  60: '80000',
  70: '100000',
  80: '120000',
  90: '200000',
  100: '250000',
  110: '500000',
  120: '750000',
  130: '1000000',
  140: '1500000',
  150: '2000000',
  160: '3000000',
  170: '5000000',
};

const tooltip =
  'Trigger event is the main (and the only) way to send notification to subscribers. The trigger identifier is used to match the particular template associated with it. Additional information can be passed according the the body interface below.';

const PRICING_DATA = [
  {
    title: 'Free',
    name: 'free',
    startingPrice: 0,
    description: 'For testing and evaluation or small-scale deployments.',
    items: ['Up to 10K events a month'],
    buttonText: 'Get started for free',
    buttonUrl: '/',
    isOpenBeta: true,
  },
  {
    title: 'Indie Developer',
    name: 'indie',
    startingPrice: 25,
    prices: {
      10000: 25,
      30000: 25,
      35000: 37.5,
      40000: 43.75,
      50000: 49.11,
      60000: 59.82,
      80000: 70.54,
      100000: 128.04,
      125000: 185.54,
    },
    description: 'Small projects by up to 2 indie-hackers.',
    items: ['20K events/month included', 'Up to 100K events a month'],
    buttonText: 'Get started',
    buttonUrl: '/',
    isOpenBeta: true,
  },
  {
    title: 'Business',
    name: 'business',
    startingPrice: 200,
    prices: {
      80000: 273.33,
      100000: 346.67,
      120000: 420,
      200000: 575,
      250000: 670,
      500000: 1385,
      750000: 1845,
      1000000: 2393.33,
      1500000: 2995,
      2000000: 3900,
      3000000: 5500,
      5000000: 8700,
    },
    description: 'Good place for bigger projects, startups, and full fledge businesses.',
    items: ['60K events/month included', 'Up to 5M events a month'],
    buttonText: 'Get started',
    buttonUrl: '/',
    isOpenBeta: true,
  },
  {
    title: 'Enterprise',
    name: 'enterprise',
    startingPrice: 'Contact us',
    description:
      'For bigger business, looking for Premium Enterprise Support, custom SLA’s, or very large deployments.',
    items: ['1M events/month included', 'Unlimited events'],
    buttonText: 'Contact sales',
    buttonUrl: 'https://discord.gg/9wcGSf22PM',
    isOpenBeta: false,
  },
];

const renderedPrice = (prices, value, startingPrice) => {
  const values = Object.keys(prices).map((key) => Number(key));

  if (RANGES[value].toString() in prices) {
    return prices[RANGES[value]];
  }

  if (RANGES[value] < Math.min(...values)) {
    return startingPrice;
  }

  return prices[Math.max(...values)];
};

const Cloud = ({ activeTier, setActiveTier, findActiveTier, rangeValue, setRangeValue }) => {
  const maxValue = 170;

  const eventsFormatter = Intl.NumberFormat('en-US');

  const thumbPosition = `calc(${thumbWidth / 2}px + ${(rangeValue / maxValue) * 100}% - ${
    rangeValue / maxValue
  } * ${thumbWidth}px)`;

  const blurDisplay = Number(rangeValue) === 0 ? 'none' : 'block';
  return (
    <>
      <div className="mt-16 text-center md:mt-14 sm:mt-11">
        <span className="text-center text-3xl font-book md:text-2xl">
          How many events do you need per month?
          <QuestionIcon className="ml-2.5 inline h-5 w-5 shrink-0" data-tip={tooltip} />
        </span>
        <Tooltip text={tooltip} className="max-w-[398px]" theme="white" />
      </div>
      <div className="relative mx-auto mt-12 w-full max-w-[968px]">
        <output
          className="absolute -top-[65%] -translate-x-1/2 rounded bg-gray-gradient px-2 py-1 text-xs shadow-output"
          style={{
            left: thumbPosition,
          }}
        >
          {eventsFormatter.format(RANGES[rangeValue])}
        </output>
        <InputRange
          type="range"
          min="0"
          max={maxValue}
          step="10"
          value={rangeValue}
          styleSliderTrackWidth={{
            width: thumbPosition,
          }}
          blurStyles={{
            left: thumbPosition,
            display: blurDisplay,
          }}
          onChange={(e) => {
            setRangeValue(e.target.value);
            setActiveTier(findActiveTier(e.target.value));
          }}
        />
        <div className="mt-1.5 flex justify-between bg-black text-white">
          <span className="text-sm leading-denser" aria-hidden>
            {eventsFormatter.format(10000)}
          </span>
          <span className="text-sm leading-denser" aria-hidden>
            {`${eventsFormatter.format(5000000)}+`}
          </span>
        </div>
      </div>
      <AnimatePresence>
        {Number(rangeValue) < 170 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0 }}
          >
            <ul className="mt-12 grid auto-rows-max grid-cols-4 items-stretch justify-between gap-10 text-center xl:grid-cols-3 lg:grid-cols-2 lg:gap-8 md:mt-10 sm:grid-cols-1">
              {PRICING_DATA.map(
                (
                  {
                    title,
                    name,
                    startingPrice,
                    description,
                    prices,
                    items,
                    buttonText,
                    buttonUrl,
                    isOpenBeta,
                  },
                  index
                ) => {
                  const isActive = activeTier === name;

                  return (
                    <li
                      className={clsx(
                        'relative mx-auto w-full max-w-[338px] overflow-hidden rounded-xl p-px text-center after:absolute after:inset-0 after:-z-10 after:bg-pink-yellow-gradient after:opacity-0 after:transition-all after:duration-500 after:ease-in-out lg:mx-0 lg:min-w-0 lg:max-w-none',
                        isActive && 'after:opacity-100'
                      )}
                      key={index}
                    >
                      {isOpenBeta && (
                        <div className="absolute -top-2 -left-2 aspect-square w-24 overflow-hidden rounded-sm">
                          <div className="absolute bottom-0 left-0 block w-square-diagonal origin-bottom-left -rotate-45 bg-primary-1 py-[1px] text-center text-xs font-medium text-black">
                            Open Beta*
                          </div>
                        </div>
                      )}
                      <div className="mx-auto flex h-full min-w-[336px] max-w-[338px] flex-col items-center justify-between rounded-xl bg-gray-gradient p-8 text-center lg:mx-0 lg:min-w-0 lg:max-w-none">
                        <div className="flex-flex-col space-y-4">
                          <span className="text-lg font-medium uppercase leading-none">
                            {title}
                          </span>
                          <p className="min-h-[38px] text-sm leading-snug text-gray-8 xl:min-h-0">
                            {description}
                          </p>
                        </div>

                        {typeof startingPrice === 'number' ? (
                          <div className="mt-12 mb-8 flex flex-col">
                            <p className="text-[72px] font-medium leading-none xl:text-8xl">
                              <span className="relative">
                                <span className="absolute -left-6 top-6 text-3xl">$</span>
                                {prices
                                  ? renderedPrice(prices, rangeValue, startingPrice)
                                  : startingPrice}
                              </span>
                            </p>
                            <span className="mt-2 text-base leading-tight text-gray-8">
                              per month
                            </span>
                          </div>
                        ) : (
                          <span className="mt-12 mb-8 text-6xl font-medium leading-none xl:text-5xl lg:text-4xl">
                            {startingPrice}
                          </span>
                        )}
                        <div className="mt-auto flex w-full flex-col justify-between space-y-8">
                          <ul className="flex flex-col space-y-2 leading-tight">
                            {items.map((item, index) => (
                              <li className="flex items-center space-x-3" key={index}>
                                <CheckIcon className="h-1.5 w-2.5 shrink-0 text-primary-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            className="w-full"
                            to={buttonUrl}
                            theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
                            size="sm"
                          >
                            {buttonText}
                          </Button>
                        </div>
                      </div>
                    </li>
                  );
                }
              )}
              <p className="col-span-full mt-2 text-center text-sm leading-snug text-gray-8">
                *During Open Beta, all tariffs except Enterprise are free to use.
              </p>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {Number(rangeValue) === 170 && (
          <motion.div
            className="mx-auto mt-12 mb-[68px] flex min-h-[458px] max-w-[338px] flex-col items-center justify-between rounded-xl bg-gray-gradient p-8 text-center lg:min-h-0 md:mt-10 sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0 }}
          >
            <div className="flex-flex-col space-y-5">
              <span className="text-lg font-medium uppercase leading-none">Custom</span>
              <p className="min-h-[57px] text-sm leading-snug text-gray-8 xl:min-h-0">
                Lorem ipsum dolor sit amet consectetur. Odio mi ac dui tristique ipsum. A netus est
                tempus purus ut at nisl id sit mattis.
              </p>
            </div>
            <span className="mt-12 mb-8 text-6xl font-medium leading-none xl:text-5xl lg:text-4xl">
              Contact us
            </span>

            <div className="mt-auto flex w-full flex-col justify-between space-y-8">
              <ul className="flex flex-col space-y-2 leading-tight">
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-1.5 w-2.5 shrink-0 text-primary-1" />
                  <span>Volume discounts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-1.5 w-2.5 shrink-0 text-primary-1" />
                  <span>Country-specific rates</span>
                </li>
              </ul>
              <Button
                className="w-full"
                to="https://discord.gg/9wcGSf22PM"
                target="_blank"
                theme="gray-outline"
                size="sm"
              >
                Contact sales
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cloud;
