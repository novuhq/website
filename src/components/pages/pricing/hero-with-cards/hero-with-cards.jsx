import clsx from 'clsx';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import InputRange from 'components/shared/input-range';

const thumbWidth = 28;
// this is the initial value used in the input so that the thumb doesn't render at zero
const INITIAL_SLIDER_VALUE = 20;

const PRICING_PLANS = {
  cloud: { title: 'Cloud', value: 'cloud' },
  'self-hosted': { title: 'Self-hosted', value: 'self-hosted' },
};

const RANGES = {
  0: '10000',
  10: '20000',
  20: '40000',
  30: '60000',
  40: '100000',
  50: '200000',
  60: '400000',
  70: '600000',
  80: '1000000',
  90: '5000000',
};

const Hero = () => {
  const [pricingPlan, setPricingPlan] = useState(PRICING_PLANS.cloud.value);
  const [value, setValue] = useState(INITIAL_SLIDER_VALUE);
  const maxValue = 90;

  const thumbPosition = `calc(${thumbWidth / 2}px + ${(value / maxValue) * 100}% - ${
    value / maxValue
  } * ${thumbWidth}px)`;

  const blurDisplay = Number(value) === 0 ? 'none' : 'block';

  return (
    <section className="safe-paddings relative mt-36 overflow-hidden pb-32 lg:mt-32 md:mt-28 sm:mt-20">
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
          <p className="mt-16 text-center text-3xl font-light md:mt-14 sm:mt-11">
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
                  onClick={() => setValue(range)}
                >
                  <span className="absolute top-0 left-1/2 z-50 -translate-x-1/2 text-white">
                    {Intl.NumberFormat('en-US').format(RANGES[range])}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
