import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Heading from 'components/shared/heading';

import { LABELS, PLANS } from './data/pricing-plans';
import PlanCard from './plan-card';

const TITLE = 'Compare our plans';

const PricingPlans = ({ activeTier }) => {
  const [currentRow, setCurrentRow] = useState('');

  useEffect(() => {
    const cells = document.querySelectorAll(`[data-row-id]`);

    cells.forEach((cell) => {
      const rowId = cell.getAttribute('data-row-id');

      cell.addEventListener('mouseenter', () => setCurrentRow(rowId));
      cell.addEventListener('mouseleave', () => setCurrentRow(''));
    });

    return () => {
      cells.forEach((cell) => {
        const rowId = cell.getAttribute('data-row-id');

        cell.removeEventListener('mouseenter', () => setCurrentRow(rowId));
        cell.removeEventListener('mouseleave', () => setCurrentRow(''));
      });
    };
  }, []);

  return (
    <section className="safe-paddings py-32 xl:py-28 lg:py-24 md:py-20">
      <div className="container">
        <Heading className="text-center md:text-4xl" tag="h2" size="xl" theme="white">
          {TITLE}
        </Heading>
        <div className="md:scrollbar-hidden mx-auto mt-16 max-w-[1220px] md:-mx-7 md:mt-14 md:overflow-x-auto md:px-7 sm:-mx-4 sm:mt-11 sm:px-4">
          <div className="grid min-w-[924px] grid-cols-8 items-start">
            <div className="col-span-2 mt-[120px]">
              {LABELS.map(({ title, items }, index) => (
                <div className="mt-8 border-b border-gray-2 first:mt-0" key={index}>
                  <span className="text-lg font-medium leading-normal lg:text-base">{title}</span>
                  <ul className="mt-[5px] flex flex-col divide-y divide-gray-2">
                    {Object.keys(items).map((item, index) => {
                      /* const isActive = `${item}-${index}` === currentRow; */
                      const isActive = `business` === 'business';
                      return (
                        <li
                          className={clsx(
                            'flex h-10 items-center text-sm font-book leading-snug text-gray-10',
                            {
                              'bg-[#101010]': isActive,
                            }
                          )}
                          data-row-id={`${item}-${index}`}
                          key={index}
                        >
                          {items[item]}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            {Object.keys(PLANS).map((plan, index) => (
              <PlanCard
                className="col-span-2"
                activeTier={activeTier}
                currentRow={currentRow}
                key={index}
                {...PLANS[plan]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
