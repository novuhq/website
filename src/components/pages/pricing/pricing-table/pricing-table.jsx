import clsx from 'clsx';
import React, { useState, useCallback } from 'react';

import Heading from 'components/shared/heading';
import QuestionIcon from 'icons/question.inline.svg';

import { LABELS, PLANS } from './data/pricing-plans';
import PlanCard from './plan-card';

const TITLE = 'Compare our plans';

const toGroupId = (title, index) =>
  title && title.length > 0
    ? title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    : `group-${index}`;

const PricingPlans = ({ activeTier, onContactUsClick }) => {
  const [currentRow, setCurrentRow] = useState('');

  const handleMouseMove = useCallback((e) => {
    const cell = e.target.closest('[data-row-id]');
    if (cell) {
      const rowId = cell.getAttribute('data-row-id');
      setCurrentRow((prev) => (prev === rowId ? prev : rowId));
    } else {
      setCurrentRow((prev) => (prev ? '' : prev));
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCurrentRow('');
  }, []);

  return (
    <section className="safe-paddings pt-[92px] md:pb-5 md:pt-[98px] sm:pt-[74px]">
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
          <div
            className="grid min-w-[1144px] grid-cols-[250px_240px_240px_240px_240px] items-start justify-center lg:grid-cols-[250px_210px_210px_210px_210px] md:grid-cols-[222px_200px_200px_200px_200px] md:justify-start"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mt-[79px] md:mt-[69px]">
              {LABELS.map(({ title, items }, groupIndex) => {
                const groupId = toGroupId(title, groupIndex);
                return (
                  <div
                    className="mt-[29px] border-b border-dashed border-gray-4 first:mt-0 first:border-transparent"
                    key={groupIndex}
                  >
                    <span className="mb-5 block whitespace-nowrap text-[20px] font-medium leading-normal tracking-snug">
                      {title}
                    </span>
                    <ul
                      className={clsx(
                        'mt-1 flex flex-col divide-y divide-dashed divide-gray-4 border-t border-dashed border-gray-4',
                        {
                          'border-none': groupIndex === 0,
                        }
                      )}
                    >
                      {Object.keys(items).map((item, index) => {
                        const rowId = `${groupId}-${item}`;
                        const isActive = rowId === currentRow;
                        const itemData = items[item];
                        const hasTooltip = typeof itemData === 'object' && itemData.tooltip;
                        const label = typeof itemData === 'object' ? itemData.label : itemData;
                        const tooltip = typeof itemData === 'object' ? itemData.tooltip : null;

                        return (
                          <li
                            className={clsx(
                              'group relative flex h-[54px] items-center text-[16px] font-book leading-snug tracking-snug text-gray-10',
                              {
                                'bg-[#14141F] before:absolute before:inset-y-0 before:-left-2 before:rounded-l-[6px] before:border-l-[8px] before:border-[#14141F]':
                                  isActive,
                              }
                            )}
                            data-row-id={rowId}
                            key={index}
                          >
                            <span className="flex items-center gap-2">
                              {label}
                              {hasTooltip && (
                                <span
                                  className="group/tooltip relative inline-flex cursor-help rounded outline-none focus-visible:ring-2 focus-visible:ring-primary-1 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-2"
                                  tabIndex={0}
                                  aria-describedby={`tooltip-${rowId}`}
                                >
                                  <QuestionIcon className="h-4 w-4 text-gray-6 transition-colors group-hover/tooltip:text-gray-9 group-focus-visible/tooltip:text-gray-9" />
                                  <span
                                    id={`tooltip-${rowId}`}
                                    role="tooltip"
                                    className="shadow-lg pointer-events-none invisible absolute bottom-full left-1/2 z-50 mb-3 w-80 -translate-x-1/2 rounded-lg border border-gray-4 bg-gray-2 px-4 py-3.5 text-[15px] font-light leading-relaxed text-gray-9 opacity-0 transition-all duration-200 group-hover/tooltip:pointer-events-auto group-hover/tooltip:visible group-hover/tooltip:opacity-100 group-focus-visible/tooltip:pointer-events-auto group-focus-visible/tooltip:visible group-focus-visible/tooltip:opacity-100"
                                  >
                                    {tooltip}
                                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-gray-2" />
                                  </span>
                                </span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            {Object.keys(PLANS).map((plan, index) => (
              <PlanCard
                activeTier={activeTier}
                currentRow={currentRow}
                key={index}
                groupIds={{
                  common: toGroupId('', 0),
                  platform: toGroupId('Platform & Scale', 1),
                  apiRateLimits: toGroupId('Workflow Logic & Delivery', 2),
                  inbox: toGroupId('Components & End-User Features', 3),
                  account: toGroupId('Administration & Security', 4),
                  compliance: toGroupId('Compliance & SLA', 5),
                  dataResidency: toGroupId('Data Residency', 6),
                  hostingModels: toGroupId('Hosting Models', 7),
                }}
                onContactUsClick={onContactUsClick}
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
