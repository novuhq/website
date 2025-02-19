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
    <section className="safe-paddings pt-28 md:pb-5 md:pt-[98px] sm:pt-[74px]">
      <div className="container lg:px-8 sm:px-5">
        <Heading
          className="text-center tracking-snug lg:text-[40px] md:text-[32px] sm:text-[28px]"
          tag="h2"
          size="44"
          theme="white"
        >
          {TITLE}
        </Heading>
        <div className="md:scrollbar-hidden mx-auto mt-[18px] max-w-[1216px] lg:mt-3.5 md:-mx-7 md:mt-3.5 md:overflow-x-auto md:px-7 sm:-mx-4 sm:mt-3 sm:px-4">
          <div className="grid min-w-[1144px] grid-cols-[250px_240px_240px_240px_240px] items-start justify-center lg:grid-cols-[250px_210px_210px_210px_210px] md:grid-cols-[220px_200px_200px_200px_200px] md:justify-start">
            <div className="mt-[79px] md:mt-[69px]">
              {LABELS.map(({ title, items }, index) => (
                <div
                  className="mt-[29px] border-b border-dashed border-gray-4 first:mt-0 first:border-transparent"
                  key={index}
                >
                  <span className="mb-5 block text-[20px] font-medium leading-normal tracking-snug">
                    {title}
                  </span>
                  <ul
                    className={clsx(
                      'mt-1 flex flex-col divide-y divide-dashed divide-gray-4 border-t border-dashed border-gray-4',
                      {
                        'border-none': index === 0,
                      }
                    )}
                  >
                    {Object.keys(items).map((item, index) => {
                      const isActive = `${item}-${index}` === currentRow;
                      return (
                        <li
                          className={clsx(
                            'relative flex h-[54px] items-center text-[16px] font-book leading-snug tracking-snug text-gray-10',
                            {
                              'bg-[#14141F] before:absolute before:inset-y-0 before:-left-2 before:rounded-l-[6px] before:border-l-[8px] before:border-[#14141F]':
                                isActive,
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
