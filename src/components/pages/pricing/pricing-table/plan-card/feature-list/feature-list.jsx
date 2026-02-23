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
      const hasHandler = typeof onContactUsClick === 'function';

      // Warn developers if contact CTA is rendered without a handler
      if (!hasHandler && process.env.NODE_ENV === 'development') {
        console.warn(
          'FeatureList: Contact CTA feature rendered without onContactUsClick handler. ' +
            'Button will be disabled.'
        );
      }

      return (
        <button
          type="button"
          className={clsx(
            'text-primary-1',
            hasHandler ? 'cursor-pointer hover:text-primary-2' : 'cursor-not-allowed opacity-50'
          )}
          disabled={!hasHandler}
          aria-disabled={!hasHandler}
          onClick={(e) => {
            e.preventDefault();
            if (hasHandler) {
              onContactUsClick(contactSource || 'pricing_table');
            }
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
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.node,
      PropTypes.shape({
        isContactCta: PropTypes.bool,
        text: PropTypes.string,
      }),
    ])
  ).isRequired,
  currentRow: PropTypes.string,
  // Required when features contain contact CTA objects ({ isContactCta: true, text: '...' })
  // If not provided, contact buttons will be rendered in a disabled state
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
