import clsx from 'clsx';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import Cloud from './cloud';
import bgSm from './images/bg-sm.svg';
import bg from './images/bg.svg';
import SelfHosted from './self-hosted';

const title = 'Flexible pricing <br /> for companies and developers';
const selfHostedTitle = 'Find a plan <br />  that works for you';

const Hero = ({
  activeTier,
  setActiveTier,
  findActiveTier,
  pricingPlan,
  setPricingPlan,
  pricingPlansData,
}) => {
  // // this is the initial value used in the input so that the thumb doesn't render at zero
  const [rangeValue, setRangeValue] = useState(20);

  return (
    <section className="safe-paddings relative overflow-hidden pt-36 lg:pt-32 md:pt-28 sm:pt-20">
      <div className="container relative z-10">
        <Heading
          className="flat-breaks sm:flat-none mx-auto text-center text-[72px] font-bold leading-denser lg:text-6xl md:text-5xl"
          size="3xl"
          tag="h1"
          theme="white"
          asHTML
        >
          {pricingPlan === 'cloud' ? title : selfHostedTitle}
        </Heading>
        <div className="mx-auto mt-14 flex flex-col md:mt-10 sm:mt-9">
          <div className="flex w-[337px] max-w-sm space-x-4 self-center rounded-[36px] border border-gray-3 p-1.5 sm:max-w-[90%] sm:space-x-3">
            {Object.keys(pricingPlansData).map((plan, index) => (
              <Button
                className={clsx(
                  'grow basis-1/2 rounded-[60px] bg-gray-2 !text-sm font-semibold uppercase hover:bg-gray-3 lg:!text-xs',
                  pricingPlan === plan && '!bg-white !text-black'
                )}
                size="xs"
                key={index}
                onClick={() => setPricingPlan(pricingPlansData[plan].value)}
              >
                {pricingPlansData[plan].title}
              </Button>
            ))}
          </div>
        </div>
        {pricingPlan === 'cloud' && (
          <Cloud
            activeTier={activeTier}
            setActiveTier={setActiveTier}
            findActiveTier={findActiveTier}
            rangeValue={rangeValue}
            setRangeValue={setRangeValue}
          />
        )}
        {pricingPlan === 'self-hosted' && <SelfHosted />}
      </div>
      <img
        className="absolute top-0 left-1/2 min-w-[1920px] -translate-x-1/2 sm:hidden sm:min-w-[360px]"
        src={bg}
        loading="eager"
        alt=""
        aria-hidden
      />
      <img
        className="absolute top-0 left-1/2 hidden min-w-[360px] -translate-x-1/2 sm:block"
        src={bgSm}
        loading="eager"
        alt=""
        aria-hidden
      />
    </section>
  );
};

export default Hero;
