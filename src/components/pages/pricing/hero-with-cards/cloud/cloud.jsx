import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';
import InputRange from 'components/shared/input-range';
import Tooltip from 'components/shared/tooltip/';
import LINKS from 'constants/links';
import QuestionIcon from 'icons/question.inline.svg';
import CheckIcon from 'images/check.inline.svg';

const thumbWidth = 28; // in pixels

const RANGES = {
  0: '0',
  10: '10000',
  20: '30000',
  30: '35000',
  40: '40000',
  50: '50000',
  60: '60000',
  70: '80000',
  80: '100000',
  90: '120000',
  100: '200000',
  110: '250000',
  120: '500000',
  130: '750000',
  140: '1000000',
  150: '1500000',
  160: '2000000',
  170: '3000000',
  180: '4500000',
  190: '5000000',
};

const tooltip =
  'A trigger event (also called an event) is a request that kicks off a process in Novu logic engine (API call to /v1/events/trigger for example). A trigger event can make many different types of actions, including digests, delays, and sending notifications to various channels, as well filters and user preference checks. You are charged for trigger event that starts a process in the logic engine for each unique subscriber.';

const getBusinessItem = (rangeValue) => {
  if (rangeValue <= 60) return '60K';
  if (rangeValue < 90) return '60K';
  if (rangeValue < 110) return '120K';
  if (rangeValue < 140) return '250K';
  if (rangeValue < 160) {
    return '1M';
  }
  return '2M';
};

const getPricingData = (rangeValue) => [
  {
    titles: {
      default: 'Free',
    },
    name: 'free',
    prices: {
      default: 0,
    },
    description: 'For testing and evaluation or small-scale deployments.',
    items: [`Up to 10K events a month`],
    buttons: {
      default: {
        text: 'Get started for free',
        url: LINKS.getStarted.to,
        onClick: () =>
          window?.analytics?.track('Pricing Event: Click the CTA Button on the card', {
            packageType: 'Free',
            sliderValue: RANGES[rangeValue],
          }),
      },
    },
    isOpenBeta: true,
  },
  {
    titles: {
      default: 'Indie Dev',
    },
    name: 'indie',
    prices: {
      default: 25,
      60: 70,
    },
    extraOvercharge: {
      20: 3.67,
      60: 2.88,
    },
    description: 'Small projects by up to 2 indie-hackers.',
    items: [`${rangeValue < 60 ? 20 : 60}K events/month included`],
    buttons: {
      default: {
        text: 'Get started for free',
        url: LINKS.getStarted.to,
        onClick: () =>
          window?.analytics?.track('Pricing Event: Click the CTA Button on the card', {
            packageType: 'Indie Dev',
            sliderValue: RANGES[rangeValue],
          }),
      },
    },
    isOpenBeta: true,
  },
  {
    titles: {
      default: 'Business',
    },
    name: 'business',
    prices: {
      default: 200,
      90: 350,
      110: 575,
      140: 2200,
      160: 3900,
    },
    extraOvercharge: {
      60: 3.67,
      90: 2.88,
      110: 2.88,
      140: 2.19,
      160: 1.6,
      170: 1.6,
      180: 1.6,
      190: 1.6,
    },
    description: 'Good place for bigger projects, startups, and full fledge businesses.',
    items: [`${getBusinessItem(rangeValue)} events/month included`],
    buttons: {
      default: {
        text: 'Get started for free',
        url: LINKS.getStarted.to,
        onClick: () =>
          window?.analytics?.track('Pricing Event: Click the CTA Button on the card', {
            packageType: 'Business',
            sliderValue: RANGES[rangeValue],
          }),
      },
    },

    isOpenBeta: true,
  },
  {
    titles: {
      default: 'Enterprise',
    },
    name: 'enterprise',
    prices: {
      0: 'Contact us',
    },
    extraOvercharge: {
      140: 1.6,
      170: 1.6,
      180: 1.6,
      190: 1.6,
    },
    description:
      'For bigger business, looking for Premium Enterprise Support, custom SLA’s, or very large deployments.',
    items: [`1M events/month included`],
    buttons: {
      default: {
        text: 'Contact sales',
        url: 'https://calendly.com/novuhq/novu-meeting',
        onClick: () =>
          window?.analytics?.track('Pricing Event: Click the CTA Button on the card', {
            packageType: 'Enterprise',
            sliderValue: RANGES[rangeValue],
          }),
      },
    },
    buttonUrl: '/',
    isOpenBeta: false,
  },
];

const Cloud = ({ activeTier, setActiveTier, findActiveTier, rangeValue, setRangeValue }) => {
  const maxValue = 190;

  const eventsFormatter = Intl.NumberFormat('en-US');

  const thumbPosition = `calc(${thumbWidth / 2}px + ${(rangeValue / maxValue) * 100}% - ${
    rangeValue / maxValue
  } * ${thumbWidth}px)`;

  const blurDisplay = Number(rangeValue) === 0 ? 'none' : 'block';

  const getNearestKey = (obj) =>
    Object.keys(obj)
      .filter((key) => Number(key) <= Number(rangeValue))
      .sort((a, b) => Number(b) - Number(a))[0];

  return (
    <>
      <div className="mt-16 text-center md:mt-14 sm:mt-11">
        <span className="text-center text-3xl font-book md:text-2xl">
          How many events do you need per month?
          <QuestionIcon className="ml-2.5 inline h-5 w-5 shrink-0" data-tip={tooltip} />
        </span>
        <Tooltip className="max-w-[398px]" text={tooltip} theme="white" />
      </div>
      <div className="relative mx-auto mt-12 w-full max-w-[968px]">
        <output
          className="absolute -top-[65%] -translate-x-1/2 rounded bg-gray-gradient px-2 py-1 text-xs shadow-output"
          style={{
            left: thumbPosition,
          }}
        >
          {Number(rangeValue) === maxValue
            ? `${eventsFormatter.format(RANGES[rangeValue])}+`
            : eventsFormatter.format(RANGES[rangeValue])}
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
            setActiveTier({
              value: findActiveTier(e.target.value),
              rangeValue: RANGES[rangeValue],
            });
          }}
        />
        <div className="mt-1.5 flex justify-between bg-black text-white">
          <span className="text-sm leading-denser" aria-hidden>
            {eventsFormatter.format(0)}
          </span>
          <span className="text-sm leading-denser" aria-hidden>
            {`${eventsFormatter.format(5000000)}+`}
          </span>
        </div>
      </div>
      <ul className="mt-12 grid auto-rows-max grid-cols-4 items-stretch justify-between gap-10 text-center xl:gap-6 lg:mx-24 lg:grid-cols-2 lg:gap-6 md:mx-0 md:mt-10 md:gap-7 sm:grid-cols-1">
        {getPricingData(rangeValue).map(
          (
            { titles, name, description, prices, extraOvercharge, items, buttons, isOpenBeta },
            index
          ) => {
            const isActive = activeTier === name;

            return (
              <li
                className={clsx(
                  'relative mx-auto w-full max-w-[338px] overflow-hidden rounded-xl p-px text-center after:absolute after:inset-0 after:-z-10 after:rounded-xl after:bg-pink-yellow-gradient after:opacity-0 after:transition-all after:duration-500 after:ease-in-out xl:mx-0 xl:min-w-0 xl:max-w-none sm:mx-auto sm:max-w-[380px]',
                  isActive && 'after:opacity-100'
                )}
                key={index}
              >
                {isOpenBeta && (
                  <div className="absolute -left-2 -top-2 aspect-square w-24 overflow-hidden rounded-sm">
                    <div className="absolute bottom-0 left-0 block w-square-diagonal origin-bottom-left -rotate-45 bg-primary-1 py-[1px] text-center text-xs font-medium text-black">
                      Open Beta*
                    </div>
                  </div>
                )}
                <div
                  className={clsx(
                    'mx-auto flex h-full min-w-[336px] max-w-[338px] flex-col items-center justify-between rounded-xl bg-gray-gradient p-8 text-center transition-all duration-500 ease-in-out xl:mx-0 xl:min-w-0 xl:max-w-none xl:px-4 lg:px-6 md:px-6',
                    isActive && 'bg-active-gray-gradient'
                  )}
                >
                  <div className="flex-flex-col space-y-4">
                    <span className="text-lg font-medium uppercase leading-none">
                      {titles[getNearestKey(titles)] || titles.default}
                    </span>
                    <p className="mx-auto min-h-[38px] max-w-[95%] text-sm leading-snug text-gray-8 xl:min-h-[71px] lg:min-h-[58px] sm:min-h-0">
                      {description}
                    </p>
                  </div>

                  <div className="mt-10 flex min-h-[81px] flex-col md:mt-5">
                    {typeof prices[getNearestKey(prices)] === 'string' ? (
                      <p className="text-6xl font-medium leading-none xl:text-5xl lg:text-6xl md:mt-5 sm:text-5xl">
                        {prices[getNearestKey(prices)]}
                      </p>
                    ) : (
                      <>
                        <p className="text-[72px] font-medium leading-none xl:text-8xl md:text-[72px] sm:text-8xl">
                          <span className="relative">
                            <span className="absolute -left-6 top-6 text-3xl">$</span>
                            {prices[getNearestKey(prices)] || prices.default}
                          </span>
                        </p>
                        <span className="mt-2 text-base leading-tight text-gray-8">per month</span>
                      </>
                    )}
                  </div>

                  <ul className="mb-14 mt-8 flex flex-col space-y-2 leading-tight xl:mt-5 md:mt-8">
                    {items.map((item, index) => (
                      <li className="flex items-center space-x-3 xl:space-x-1.5" key={index}>
                        <CheckIcon className="h-1.5 w-2.5 shrink-0 text-primary-1" />
                        <span className="text-left text-base lg:text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative w-full">
                    {buttons[getNearestKey(buttons)] ? (
                      <Button
                        className="mt-auto w-full lg:text-xs"
                        to={buttons[getNearestKey(buttons)].url}
                        theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
                        size="sm"
                      >
                        {buttons[getNearestKey(buttons)].text}
                      </Button>
                    ) : (
                      <>
                        <Button
                          className="mt-auto w-full lg:text-xs"
                          to={buttons.default.url}
                          theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
                          size="sm"
                          onClick={buttons.default?.onClick}
                        >
                          {buttons.default.text}
                        </Button>

                        {extraOvercharge && extraOvercharge[getNearestKey(extraOvercharge)] && (
                          <span className="absolute -top-6 left-0 w-full text-xs font-book leading-tight text-gray-8 xl:text-[11px] lg:text-xs">
                            * ${extraOvercharge[getNearestKey(extraOvercharge)]} for another 1K
                            events extra/overcharge
                          </span>
                        )}
                      </>
                    )}
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
    </>
  );
};

export default Cloud;
