import PropTypes from 'prop-types';
import React from 'react';

import Card from './card';

const PricingPlanCards = ({ plans }) => (
  <ul className="mx-auto mt-[50px] grid max-w-[1024px] auto-rows-max grid-cols-3 items-stretch justify-between gap-5 xl:gap-6 lg:mt-[47px] lg:max-w-[960px] lg:gap-[17px] md:mt-11 md:max-w-[384px] md:grid-cols-1 md:gap-y-[15px] sm:mt-[39px] sm:max-w-80">
    {plans.map((plan, index) => (
      <Card key={index} plan={plan} />
    ))}
  </ul>
);

export default PricingPlanCards;

PricingPlanCards.propTypes = {
  plans: PropTypes.array.isRequired,
};
