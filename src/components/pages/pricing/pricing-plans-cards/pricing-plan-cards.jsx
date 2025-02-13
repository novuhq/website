import PropTypes from 'prop-types';
import React from 'react';

import Card from './card';

const PricingPlanCards = ({ plans }) => (
  <ul className="mx-auto mt-[50px] grid max-w-[1280px] auto-rows-max grid-cols-4 items-stretch justify-between gap-5 xl:gap-6 lg:mt-[47px] lg:max-w-[960px] lg:grid-cols-2 md:mt-11 md:max-w-[384px] md:grid-cols-1 md:gap-y-[15px] sm:mt-[39px] sm:max-w-[360px] sm:px-5">
    {plans.map((plan, index) => (
      <Card key={index} plan={plan} />
    ))}
  </ul>
);

export default PricingPlanCards;

PricingPlanCards.propTypes = {
  plans: PropTypes.array.isRequired,
};
