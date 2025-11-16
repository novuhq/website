import PropTypes from 'prop-types';
import React from 'react';

import Card from './card';

const PricingPlanCards = ({ plans, onContactUsClick }) => (
  <ul className="container mt-[61px] grid max-w-[1280px] auto-rows-max grid-cols-4 items-stretch justify-between gap-4 lg:mt-12 lg:max-w-[712px] lg:grid-cols-2 md:mt-11 sm:mt-10 sm:max-w-[460px] sm:grid-cols-1 sm:px-5">
    {plans.map((plan, index) => (
      <Card key={index} plan={plan} onContactUsClick={onContactUsClick} />
    ))}
  </ul>
);

export default PricingPlanCards;

PricingPlanCards.propTypes = {
  plans: PropTypes.array.isRequired,
  onContactUsClick: PropTypes.func,
};

PricingPlanCards.defaultProps = {
  onContactUsClick: null,
};
