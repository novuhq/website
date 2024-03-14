/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';
import InputRange from 'components/shared/input-range';
import Tooltip from 'components/shared/tooltip/';
import LINKS from 'constants/links';
import QuestionIcon from 'icons/question.inline.svg';
import CheckIcon from 'images/check.inline.svg';
import { buttonClick } from 'utils/use-landing-simple-tracking';

const thumbWidth = 28; // in pixels

const RANGES = {
  0: '0',
  10: '50000',
  20: '100000',
  30: '500000',
  40: '1000000',
  50: '2000000',
  60: '3000000',
  70: '5000000+',
};

const tooltip =
  'A trigger event (also called an event) is a request that kicks off a process in Novu logic engine (API call to /v1/events/trigger for example). A trigger event can make many different types of actions, including digests, delays, and sending notifications to various channels, as well filters and user preference checks. You are charged for trigger event that starts a process in the logic engine for each unique subscriber.';

const getEventsMonthValue = (rangeValue) => {
  if (rangeValue === '10') return '50K';
  if (rangeValue === '20') return '100K';
  if (rangeValue === '30') return '500K';
  if (rangeValue === '40') return '1M';
  if (rangeValue === '50') return '2M';
  if (rangeValue === '60') return '3M';
  if (rangeValue === '70') return '5M';

  return '';
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
    items: ['30K events/month included'],
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
    isOpenBeta: false,
  },
  {
    titles: {
      default: 'Business',
    },
    name: 'business',
    prices: {
      default: 250,
      20: 300,
      30: 1500,
      40: 2800,
      50: 4200,
      60: 4860,
      70: 6400,
    },
    extraOvercharge: {
      20: 3.00,
      30: 3.00,
      40: 2.35,
      50: 2.10,
      60: 1.62,
      70: 1.28,
    },
    description: 'Good place for bigger projects, startups, and businesses.',
    items: [`${getEventsMonthValue(rangeValue) || '50K'} events/month included`],
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
    isOpenBeta: false,
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
      50: 2.10,
      60: 1.62,
      70: 1.28,
    },
    description:
      'For businesses that need Premium Enterprise Support, custom SLAs, and/or very large deployments.',
    items: [
      `${Number(rangeValue) >= 40 ? getEventsMonthValue(rangeValue) : '1M'} events/month included`,
    ],
    buttons: {
      default: {
        text: 'Contact us',
        url: LINKS.pricingContactUs.to,
        onClick: () => {
          buttonClick('book_a_call', { type: 'enterprise_contact' });
          window?.analytics?.track('Pricing Event: Click the CTA Button on the card', {
            packageType: 'Enterprise',
            sliderValue: RANGES[rangeValue],
          });
        },
      },
    },
    buttonUrl: '/',
    isOpenBeta: false,
  },
];

const Cloud = ({ activeTier, setActiveTier, findActiveTier, rangeValue, setRangeValue }) => {
  const maxValue = 70;

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
{/*       <div className="mt-16 text-center md:mt-14 sm:mt-11">
        <span className="text-center text-3xl font-book md:text-2xl">
          How many events do you need per month?
          <QuestionIcon
            className="ml-2.5 inline h-5 w-5 shrink-0"
            data-tooltip-id="tooltip"
            data-tooltip-content={tooltip}
          />
        </span>
        <Tooltip className="max-w-[398px]" theme="white" />
      </div>
      <div className="relative mx-auto mt-14 w-full max-w-[968px]">
        <output
          className="absolute -top-[65%] -translate-x-1/2 rounded bg-gray-gradient px-2 py-1 text-xs shadow-output"
          style={{
            left: thumbPosition,
          }}
        >
          {Number(rangeValue) === maxValue ? '5M+' : eventsFormatter.format(RANGES[rangeValue])}
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
      </div> */}
      <ul className="mx-auto mt-14 grid max-w-[1096px] auto-rows-max grid-cols-3 items-stretch justify-between gap-10 text-center xl:gap-6 md:mt-12 md:max-w-[700px] md:grid-cols-1 md:gap-7">
        {getPricingData(rangeValue).map(
          (
            { titles, name, description, prices, extraOvercharge, items, buttons, isOpenBeta },
            index
          ) => {
            const isActive = activeTier === name;

            return (
              <li
                className={clsx(
                  'relative mx-auto w-full max-w-[338px] overflow-hidden rounded-xl p-px text-center after:absolute after:inset-0 after:-z-10 after:rounded-xl after:bg-pink-yellow-gradient after:opacity-0 after:transition-all after:duration-500 after:ease-in-out',
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
                    'flex h-full min-w-[336px] flex-col items-center justify-between rounded-xl p-8 text-center transition-all duration-500 ease-in-out xl:min-w-0 lg:px-6',
                    isActive ? 'bg-active-gray-gradient' : 'bg-gray-gradient'
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
                            {extraOvercharge[getNearestKey(extraOvercharge)] !== 'TBC'
                              ? `* $${
                                  extraOvercharge[getNearestKey(extraOvercharge)]
                                } for another 1K
                            events extra/overcharge`
                              : '* Pricing for additional 1K events needs clarifying'}
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
      </ul>
    </>
  );
};

export default Cloud;
