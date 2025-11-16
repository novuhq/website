import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import CheckIcon from 'images/check.inline.svg';
import XIcon from 'images/x.inline.svg';

const presentFeature = (
  <CheckIcon className="my-[5.5px] w-4 text-gray-9" aria-label="Present Feature" />
);
const missingFeature = <XIcon className="my-[5.5px] w-3.5" aria-label="Missing Feature" />;

const FeatureList = ({ features, currentRow, onContactUsClick, contactSource, groupId }) => {
  const renderFeature = (feature) => {
    if (typeof feature === 'boolean') {
      return feature ? presentFeature : missingFeature;
    }

    // Handle structured contact CTA objects
    if (typeof feature === 'object' && feature !== null && feature.isContactCta) {
      return (
        <button
          type="button"
          className="cursor-pointer text-primary-1 hover:text-primary-2"
          onClick={(e) => {
            e.preventDefault();
            onContactUsClick?.(contactSource || 'pricing_table');
          }}
        >
          {feature.text}
        </button>
      );
    }

    return feature;
  };

  return (
    <div className="mt-24 flex flex-col divide-y divide-dashed divide-gray-4 border-b border-t border-dashed border-gray-4 text-left lg:mt-[61px] [&:nth-child(1)]:border-none [&:nth-child(2)]:mt-0 [&:nth-child(2)]:border-none [&:nth-child(3)]:mt-[71px] [&:nth-child(4)]:mt-[79px] [&:nth-child(5)]:mt-[79px] md:[&:nth-child(5)]:mt-[109px] [&:nth-child(6)]:mt-[79px] [&:nth-child(n+7)]:mt-[79px]">
      {Object.keys(features).map((item) => {
        const rowId = `${groupId}-${item}`;
        const isActive = rowId === currentRow;
        return (
          <span
            className={clsx(
              'relative flex h-[54px] w-full items-center px-[70px] text-sm font-book leading-snug text-gray-9 lg:px-[27px] md:px-8',
              {
                'bg-[#14141F] before:absolute before:inset-y-0 before:-right-2 before:rounded-r-[6px] before:border-r-[8px] before:border-[#14141F]':
                  isActive,
              }
            )}
            data-row-id={rowId}
            key={rowId}
          >
            {renderFeature(features[item])}
          </span>
        );
      })}
    </div>
  );
};

FeatureList.propTypes = {
  features: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.node])
  ).isRequired,
  currentRow: PropTypes.string,
  onContactUsClick: PropTypes.func,
  contactSource: PropTypes.string,
  groupId: PropTypes.string,
};

FeatureList.defaultProps = {
  currentRow: '',
  onContactUsClick: undefined,
  contactSource: undefined,
  groupId: 'group',
};

export default FeatureList;
