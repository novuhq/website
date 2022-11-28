import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Heading from 'components/shared/heading';
import { labels, plans } from 'utils/data/pricing-plans';

import PlanCard from './plan-card';

const title = 'Compare our plans';

const PricingPlans = ({ activeTier, pricingPlan }) => {
  const [currentRow, setCurrentRow] = useState('');
  const [previousRow, setPreviousRow] = useState('');

  useEffect(() => {
    const cells = currentRow ? document.querySelectorAll(`[data-row=${currentRow}]`) : null;
    const previousCells = previousRow
      ? document.querySelectorAll(`[data-row=${previousRow}]`)
      : null;
    cells?.forEach((cell) => {
      cell.classList.add('table-hover');
    });
    previousCells?.forEach((cell) => {
      cell.classList.remove('table-hover');
    });
  }, [currentRow, previousRow]);
  return (
    <section className="safe-paddings py-32 xl:py-28 lg:py-24 md:py-20">
      {pricingPlan === 'cloud' && (
        <div className="container-lg">
          <Heading className="text-center" tag="h2" size="md" theme="white">
            {title}
          </Heading>
          <div className="scrollbar-hidden mt-16 overflow-x-scroll md:-mx-7 md:mt-14 md:px-7 sm:mt-11">
            <div className="grid min-w-[924px] grid-cols-10 items-start">
              <div className="col-span-2 mt-[117px]">
                {labels.map(({ title, items }, index) => (
                  <div className="mt-8 border-b border-gray-2 first:mt-0" key={index}>
                    <span className="text-lg font-medium leading-normal lg:text-base">{title}</span>
                    <ul className="mt-1.5 flex flex-col divide-y divide-gray-2">
                      {Object.keys(items).map((item, index) => (
                        <li
                          className={clsx(
                            'py-2.5 text-sm font-book leading-normal text-gray-10',
                            item.toLowerCase() === 'support' && 'min-h-[189px]'
                          )}
                          key={index}
                          data-row={item + index}
                          onMouseEnter={() => {
                            setCurrentRow(item + index);
                          }}
                          onMouseLeave={() => {
                            setCurrentRow('');
                            setPreviousRow(item + index);
                          }}
                        >
                          {items[item]}
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
                  currentRow={currentRow}
                  setCurrentRow={setCurrentRow}
                  previousRow={previousRow}
                  setPreviousRow={setPreviousRow}
                  {...plans[plan]}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingPlans;
