import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import CheckIcon from 'images/check.inline.svg';
import XIcon from 'images/x.inline.svg';

const presentFeature = (
  <CheckIcon className="my-[5.5px] w-4 text-gray-9" aria-label="Present Feature" />
);
const missingFeature = <XIcon className="my-[5.5px] w-3.5" aria-label="Missing Feature" />;

const renderFeature = (feature) => {
  if (typeof feature === 'boolean') {
    if (feature) return presentFeature;
    if (!feature) return missingFeature;
  }
  return feature;
};

const FeatureList = ({ features, currentRow }) => (
  <div className="mt-24 flex flex-col divide-y divide-dashed divide-gray-4 border-b border-t border-dashed border-gray-4 text-left lg:mt-[61px] [&:nth-child(1)]:border-none [&:nth-child(2)]:mt-0 [&:nth-child(2)]:border-none lg:[&:nth-child(2)]:mt-0 [&:nth-child(3)]:mt-[71px] [&:nth-child(6)]:!mt-[109px] lg:[&:nth-child(6)]:!mt-[79px] [&:nth-child(n+4)]:mt-[79px]">
    {Object.keys(features).map((item, index) => {
      const isActive = `${item}-${index}` === currentRow;
      return (
        <span
          className={clsx(
            'relative flex h-[54px] w-full items-center px-[70px] text-sm font-book leading-snug text-gray-9 lg:px-[27px] md:px-8',
            {
              'bg-[#14141F] before:absolute before:inset-y-0 before:-right-2 before:rounded-r-[6px] before:border-r-[8px] before:border-[#14141F]':
                isActive,
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
