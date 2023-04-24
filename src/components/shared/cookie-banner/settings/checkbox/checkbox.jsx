import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import CheckIcon from 'images/check.inline.svg';

const Checkbox = ({ id, labelTitle, labelDescription, isChecked, isDisabled, ...otherProps }) => (
  <div>
    <label
      className={clsx('flex cursor-pointer items-center gap-x-2.5', {
        'pointer-events-none': isDisabled,
      })}
      htmlFor={id}
    >
      <input id={id} className="hidden" type="checkbox" {...otherProps} />
      <div className="flex h-6 w-6 items-center justify-center rounded border border-gray-4">
        {isChecked && (
          <i>
            <CheckIcon className="h-1.5 text-primary-1" />
          </i>
        )}
      </div>

      {labelTitle && <span className="text-base">{labelTitle}</span>}
    </label>
    {labelDescription && (
      <p className="mt-3 text-sm leading-snug text-gray-8">{labelDescription}</p>
    )}
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  isDisabled: false,
};

export default Checkbox;
