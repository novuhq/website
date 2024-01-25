import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import CheckIcon from 'images/check.inline.svg';

const presentFeature = (
  <CheckIcon className="my-[5.5px] h-2.5 w-4 text-primary-1" aria-label="Present Feature" />
);
const missingFeature = (
  <CheckIcon className="invisible my-[5.5px] h-2.5 w-4" aria-label="Missing Feature" />
);

const renderFeature = (feature) => {
  if (typeof feature === 'boolean') {
    if (feature) return presentFeature;
    if (!feature) return missingFeature;
  }
  return feature;
};

const FeatureList = ({ features, currentRow }) => (
  <div className="mt-[64px] flex flex-col divide-y divide-gray-2 border-b border-gray-2 text-left lg:mt-[61px] [&:nth-child(2)]:mt-[23px] lg:[&:nth-child(2)]:mt-[23px]">
    {Object.keys(features).map((item, index) => {
      const isActive = `${item}-${index}` === currentRow;
      return (
        <span
          className={clsx(
            'flex h-10 w-full items-center px-[52px] text-sm font-book leading-snug text-gray-10 lg:px-10 md:px-8',
            {
              'bg-[#101010]': isActive,
            }
          )}
          data-row-id={`${item}-${index}`}
          key={index}
        >
          {renderFeature(features[item])}
        </span>
      );
    })}
  </div>
);

FeatureList.propTypes = {
  features: PropTypes.shape({}).isRequired,
};

export default FeatureList;
