import clsx from 'clsx';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import InputRange from 'components/shared/input-range';
import CheckIcon from 'images/check.inline.svg';

const thumbWidth = 28; // in pixels
// this is the initial value used in the input so that the thumb doesn't render at zero
const INITIAL_SLIDER_VALUE = 20;

const PRICING_PLANS = {
  cloud: { title: 'Cloud', value: 'cloud' },
  'self-hosted': { title: 'Self-hosted', value: 'self-hosted' },
};

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
    buttonUrl: '/',
    isOpenBeta: false,
  },
];

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

const renderedPrice = (prices, value, startingPrice) => {
  const values = Object.keys(prices).map((key) => Number(key));
  if (RANGES[value].toString() in prices) return prices[RANGES[value]];
  if (RANGES[value] < Math.min(...values)) return startingPrice;
  return prices[Math.max(...values)];
};

const Hero = ({ activeTier, setActiveTier, findActiveTier }) => {
  const [pricingPlan, setPricingPlan] = useState(PRICING_PLANS.cloud.value);
  const [value, setValue] = useState(INITIAL_SLIDER_VALUE);
  const maxValue = 170;

  const eventsFormatter = Intl.NumberFormat('en', { notation: 'compact' });

  const thumbPosition = `calc(${thumbWidth / 2}px + ${(value / maxValue) * 100}% - ${
    value / maxValue
  } * ${thumbWidth}px)`;

  const blurDisplay = Number(value) === 0 ? 'none' : 'block';

  return (
    <section className="safe-paddings relative mt-36 overflow-hidden lg:mt-32 md:mt-28 sm:mt-20">
      <div className="container">
        <Heading
          className="mx-auto max-w-[1020px] text-center text-[72px] font-bold leading-denser lg:text-6xl md:text-5xl"
          size="3xl"
          tag="h1"
          theme="white"
        >
          Flexible pricing for companies and developers
        </Heading>
        <div className="mx-auto mt-14 flex flex-col md:mt-10 sm:mt-9">
          <div className="flex w-[337px] max-w-sm space-x-4 self-center rounded-[36px] border border-gray-3 p-1.5">
            {Object.keys(PRICING_PLANS).map((plan, index) => (
              <Button
                className={clsx(
                  'grow basis-1/2 rounded-[60px] bg-gray-2 font-semibold uppercase',
                  pricingPlan === plan && '!bg-white !text-black hover:!bg-[rgba(255,255,255,0.8)]'
                )}
                key={index}
                size="xs"
                onClick={() => setPricingPlan(PRICING_PLANS[plan].value)}
              >
                {PRICING_PLANS[plan].title}
              </Button>
            ))}
          </div>
          <p className="mt-16 text-center text-3xl font-book md:mt-14 sm:mt-11">
            How many events do you need per month?
          </p>
          <div className="relative mx-auto mt-11 w-full max-w-[968px]">
            <output
              className="absolute -top-[85%] -translate-x-1/2 rounded bg-gray-gradient px-2 py-1 text-xs shadow-output"
              style={{
                left: thumbPosition,
              }}
            >
              {Intl.NumberFormat('en-US').format(RANGES[value])}
            </output>
            <InputRange
              type="range"
              min="0"
              max={maxValue}
              step="10"
              value={value}
              styleSliderTrackWidth={{
                width: thumbPosition,
              }}
              blurStyles={{
                left: thumbPosition,
                display: blurDisplay,
              }}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div className="mt-4 flex justify-between bg-black text-white">
              {Object.keys(RANGES).map((range, index) => (
                <span
                  className="relative w-5 cursor-pointer text-sm leading-denser"
                  key={index}
                  aria-hidden
                  onClick={() => {
                    setValue(range);
                    setActiveTier(findActiveTier(range));
                  }}
                >
                  <span className="absolute top-0 left-1/2 z-50 -translate-x-1/2 text-white">
                    {RANGES[range] > 4999999
                      ? `${eventsFormatter.format(RANGES[range])}+`
                      : eventsFormatter.format(RANGES[range])}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <ul className="mt-20 grid auto-rows-max grid-cols-4 items-stretch justify-between gap-10 xl:grid-cols-3 lg:grid-cols-2 lg:gap-8 sm:grid-cols-1">
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
              const isActiveTier = activeTier === name;

              return (
                <li
                  className={clsx(
                    'relative overflow-hidden rounded-xl p-[1px] text-center',
                    isActiveTier && 'bg-pink-yellow-gradient'
                  )}
                  key={index}
                >
                  {isOpenBeta && (
                    <div className="absolute -top-2 -left-2 aspect-square w-28 overflow-hidden rounded-sm xs:w-24">
                      <a
                        href="/"
                        className="absolute bottom-0 left-0 block w-square-diagonal origin-bottom-left -rotate-45 bg-primary-1 py-[1px] text-center text-xs font-medium text-black"
                      >
                        Open Beta*
                      </a>
                    </div>
                  )}
                  <div className="flex h-full flex-col items-center justify-between rounded-xl bg-gray-gradient p-8 text-center lg:p-6">
                    <div className="flex-flex-col space-y-5">
                      <span className="text-lg font-medium uppercase leading-none">{title}</span>
                      <p className="min-h-[57px] text-sm leading-snug text-gray-8 xl:min-h-0">
                        {description}
                      </p>
                    </div>

                    {typeof startingPrice === 'number' ? (
                      <div className="mt-12 mb-8 flex flex-col">
                        <p className="text-[72px] font-medium leading-none xl:text-8xl">
                          <span className="relative">
                            <span className="absolute -left-6 top-6 text-3xl">$</span>
                            {prices ? renderedPrice(prices, value, startingPrice) : startingPrice}
                          </span>
                        </p>
                        <span className="mt-2.5 text-base leading-tight text-gray-8">
                          per month
                        </span>
                      </div>
                    ) : (
                      <span className="mt-12 mb-8 text-6xl font-medium leading-none xl:text-5xl lg:text-4xl">
                        {startingPrice}
                      </span>
                    )}
                    <div className="mt-auto flex flex-col justify-between space-y-8">
                      <ul className="flex flex-col space-y-2.5">
                        {items.map((item, index) => (
                          <li className="flex items-center space-x-3" key={index}>
                            <CheckIcon className="h-1.5 w-2.5 shrink-0 text-primary-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="relative w-full"
                        to={buttonUrl}
                        theme={isActiveTier ? 'pink-to-yellow-gradient' : 'gray-outline'}
                        size="sm"
                      >
                        <span className="absolute top-1/2 left-1/2 z-50 -translate-y-1/2 -translate-x-1/2">
                          {buttonText}
                        </span>
                      </Button>
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
        <p className="col-span-full mt-12 text-center text-sm leading-snug text-gray-8 sm:mt-8">
          *During Open Beta, all tariffs except Enterprise are free to use.
        </p>
      </div>
    </section>
  );
};
export default Hero;
