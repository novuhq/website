import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import Heading from 'components/shared/heading';
import { labels, plans } from 'utils/data/pricing-plans';

import PlanCard from './plan-card';

const title = 'Compare our plans';

const PricingPlans = ({ activeTier }) => {
  const [currentRow, setCurrentRow] = useState('');

  useEffect(() => {
    const cells = document.querySelectorAll(`[data-row]`);

    cells.forEach((cell) => {
      const data = cell.getAttribute('data-row');

      cell.addEventListener('mouseenter', () => setCurrentRow(data));
      cell.addEventListener('mouseleave', () => setCurrentRow(''));
    });

    return () => {
      cells.forEach((cell) => {
        const data = cell.getAttribute('data-row');

        cell.removeEventListener('mouseenter', () => setCurrentRow(data));
        cell.removeEventListener('mouseleave', () => setCurrentRow(''));
      });
    };
  }, []);

  return (
    <section className="safe-paddings py-32 xl:py-28 lg:py-24 md:py-20">
      <div className="container-lg">
        <Heading className="text-center" tag="h2" size="md" theme="white">
          {title}
        </Heading>
        <div className="scrollbar-hidden mt-16 overflow-x-auto md:-mx-7 md:mt-14 md:px-7 sm:-mx-4 sm:mt-11 sm:px-4">
          <div className="grid min-w-[924px] grid-cols-10 items-start">
            <div className="col-span-2 mt-[117px]">
              {labels.map(({ title, items }, index) => (
                <div className="mt-8 border-b border-gray-2 first:mt-0" key={index}>
                  <span className="text-lg font-medium leading-normal lg:text-base">{title}</span>
                  <ul className="mt-[5px] flex flex-col divide-y divide-gray-2">
                    {Object.keys(items).map((item, index) => {
                      const isActive = item + index === currentRow;
                      return (
                        <li
                          className={clsx(
                            'py-2.5 text-sm font-book leading-normal text-gray-10',
                            item.toLowerCase() === 'support' && 'min-h-[189px]',
                            isActive && 'table-hover'
                          )}
                          data-row={item + index}
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
            {Object.keys(plans).map((plan, index) => (
              <PlanCard
                className="col-span-2"
                key={index}
                activeTier={activeTier}
                currentRow={currentRow}
                setCurrentRow={setCurrentRow}
                {...plans[plan]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
