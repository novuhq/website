import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import CheckIcon from 'images/check.inline.svg';

const presentFeature = (
  <CheckIcon className="my-[6.5px] h-2 w-3 text-primary-1" aria-label="Present Feature" />
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

const FeatureList = ({ feature, id }) => {
  const [currentRow, setCurrentRow] = useState('');
  const [previousRow, setPreviousRow] = useState('');
  useEffect(() => {
    const cells = currentRow ? document.querySelectorAll(`[data-row=${currentRow}]`) : null;
    const previousCells = previousRow
      ? document.querySelectorAll(`[data-row=${previousRow}]`)
      : null;
    cells?.forEach((cell) => {
      cell.classList.add('table-hover');
    });
    previousCells?.forEach((cell) => {
      cell.classList.remove('table-hover');
    });
  }, [currentRow, previousRow]);

  return (
    <div
      id={id}
      className="col-span-2 mt-[65px] flex flex-col divide-y divide-gray-2 border-b border-gray-2 text-left first-of-type:mt-[39px]"
    >
      {Object.keys(feature).map((item, index) => (
        <span
          key={index}
          className={clsx(
            'hover:bg-gray h-fit min-h-[21px] w-full py-2.5 px-[52px] text-sm font-book leading-normal text-gray-10',
            item === 'support' && '!min-h-[189px]'
          )}
          data-row={item + index}
          onMouseEnter={() => {
            setCurrentRow(item + index);
          }}
          onMouseLeave={() => {
            setCurrentRow('');
            setPreviousRow(item + index);
          }}
        >
          {renderFeature(feature[item])}
        </span>
      ))}
    </div>
  );
};

FeatureList.propTypes = {
  feature: PropTypes.shape({}).isRequired,
};

export default FeatureList;
