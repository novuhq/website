import React from 'react';

import Heading from 'components/shared/heading';
import plans from 'utils/data/pricing-plans';

import FeatureList from './feature-list/feature-list';
import TableHeader from './table-header/table-header';

const title = 'Compare our plans';

const PricingPlans = ({ activeTier, pricingPlan }) =>
  pricingPlan === 'cloud' ? (
    <section className="safe-paddings py-32 xl:py-28 lg:py-24 md:py-20">
      <div className="container">
        <Heading className="text-center" tag="h2" size="md">
          {title}
        </Heading>
        <div className="scrollbar-hidden mt-16 overflow-x-scroll rounded md:mt-14 sm:mt-11 ">
          <div className="grid min-w-[924px] grid-cols-10 items-start gap-x-8 md:gap-x-6">
            {plans.headers.map((item, index) => (
              <TableHeader {...item} activeTier={activeTier} key={index} />
            ))}
          </div>
          {plans.features.map((edition, index) => (
            <FeatureList {...edition} key={index} />
          ))}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );

export default PricingPlans;
