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

const FeatureList = ({ feature, id, currentRow }) => (
  <div
    id={id}
    className="col-span-2 mt-[65px] flex flex-col divide-y divide-gray-2 border-b border-gray-2 text-left [&:nth-child(2)]:mt-[39px] lg:[&:nth-child(2)]:mt-9"
  >
    {Object.keys(feature).map((item, index) => {
      const isActive = item + index === currentRow;
      return (
        <span
          key={index}
          className={clsx(
            'hover:bg-gray h-fit min-h-[21px] w-full py-2.5 px-[52px] text-sm font-book leading-normal text-gray-10 lg:px-10 md:px-8',
            item === 'support' && '!min-h-[189px]',
            item === 'channels' && 'md:!min-h-[63px]',
            isActive && 'table-hover'
          )}
          data-row={item + index}
        >
          {renderFeature(feature[item])}
        </span>
      );
    })}
  </div>
);

FeatureList.propTypes = {
  feature: PropTypes.shape({}).isRequired,
};

export default FeatureList;
