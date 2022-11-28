import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import Cloud from './cloud';
import SelfHosted from './self-hosted';

const Hero = ({
  activeTier,
  setActiveTier,
  findActiveTier,
  pricingPlan,
  setPricingPlan,
  pricingPlansData,
}) => (
  <section className="safe-paddings relative mt-36 overflow-hidden lg:mt-32 md:mt-28 sm:mt-20">
    <div className="container">
      <Heading
        className="flat-breaks sm:flat-none mx-auto text-center text-[72px] font-bold leading-denser lg:text-6xl md:text-5xl"
        size="3xl"
        tag="h1"
        theme="white"
      >
        Flexible pricing <br /> for companies and developers
      </Heading>
      <div className="mx-auto mt-14 flex flex-col md:mt-10 sm:mt-9">
        <div className="flex w-[337px] max-w-sm space-x-4 self-center rounded-[36px] border border-gray-3 p-1.5">
          {Object.keys(pricingPlansData).map((plan, index) => (
            <Button
              className={clsx(
                'grow basis-1/2 rounded-[60px] bg-gray-2 font-semibold uppercase hover:bg-gray-3',
                pricingPlan === plan && '!bg-white !text-black'
              )}
              key={index}
              size="xs"
              onClick={() => setPricingPlan(pricingPlansData[plan].value)}
            >
              {pricingPlansData[plan].title}
            </Button>
          ))}
        </div>
      </div>
      {pricingPlan === 'self-hosted' && <SelfHosted />}
      {pricingPlan === 'cloud' && (
        <Cloud
          activeTier={activeTier}
          setActiveTier={setActiveTier}
          findActiveTier={findActiveTier}
        />
      )}
    </div>
  </section>
);

export default Hero;
