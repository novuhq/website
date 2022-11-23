import PropTypes from 'prop-types';
import React from 'react';

import CheckIcon from 'images/check.inline.svg';

const presentFeature = (
  <CheckIcon className="my-[6.5px] mx-auto h-2 w-3 text-primary-1" aria-label="Present Feature" />
);
const missingFeature = (
  <CheckIcon className="invisible my-[6.5px] h-2 w-3" aria-label="Missing Feature" />
);

const renderFeature = (feature) => {
  if (typeof feature === 'boolean') {
    if (feature) return presentFeature;
    if (!feature) return missingFeature;
  }
  return feature;
};

const FeatureList = ({ feature }) => (
  <div className="col-span-2 mt-[75px] flex flex-col divide-y divide-gray-2 border-b border-gray-2 text-center first-of-type:mt-[43px]">
    {Object.keys(feature).map((item, index) => (
      <span
        key={index}
        className="!min-h-[21px] w-full py-2.5 text-sm font-book leading-normal text-gray-10 first:pt-0"
      >
        {renderFeature(feature[item])}
      </span>
    ))}
  </div>
);

FeatureList.propTypes = {
  feature: PropTypes.shape({}).isRequired,
};

export default FeatureList;
