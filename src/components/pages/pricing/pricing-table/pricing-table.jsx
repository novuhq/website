import clsx from 'clsx';
import React from 'react';

import Heading from 'components/shared/heading';
import { labels, plans } from 'utils/data/pricing-plans';

import PlanCard from './plan-card';

const title = 'Compare our plans';

const PricingPlans = ({ activeTier, pricingPlan }) =>
  pricingPlan === 'cloud' ? (
    <section className="safe-paddings py-32 xl:py-28 lg:py-24 md:py-20">
      <div className="container-lg">
        <Heading className="text-center" tag="h2" size="md" theme="white">
          {title}
        </Heading>
        <div className="scrollbar-hidden mt-16 overflow-x-scroll md:mt-14 sm:mt-11">
          <div className="grid min-w-[924px] grid-cols-10 items-start">
            <div className="col-span-2 mt-[117px]">
              {labels.map(({ title, items }, index) => (
                <div className="mt-8 border-b border-gray-2 first:mt-0" key={index}>
                  <span className="text-lg font-medium leading-normal lg:text-base">{title}</span>
                  <ul className="flex flex-col divide-y divide-gray-2">
                    {items.map((item, index) => (
                      <li
                        className={clsx(
                          'py-2.5 text-sm font-book leading-normal text-gray-10 first:pt-4',
                          item.toLowerCase() === 'support' && 'min-h-[189px]'
                        )}
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {Object.keys(plans).map((plan, index) => (
              <PlanCard
                className="col-span-2"
                key={index}
                activeTier={activeTier}
                cardStyle={{
                  gridColumnStart: `calc(${index * 2 + 3}`,
                }}
                {...plans[plan]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : (
    // TODO: add the necessary content when the self-hosted page version is ready
    <></>
  );

export default PricingPlans;
