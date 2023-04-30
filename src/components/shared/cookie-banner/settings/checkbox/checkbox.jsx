import clsx from 'clsx';
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import CheckIcon from './images/check.inline.svg';

const Checkbox = ({ id, labelTitle, labelDescription, isChecked, isDisabled, ...otherProps }) => (
  <div>
    <label
      className={clsx('flex cursor-pointer items-center gap-x-2.5', {
        'pointer-events-none': isDisabled,
      })}
      htmlFor={id}
    >
      <input id={id} className="hidden" type="checkbox" {...otherProps} />
      <div
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded-sm border border-gray-4 transition-all duration-200 ease-linear',
          {
            'bg-gray-4': isDisabled,
            'border-primary-1 bg-primary-1': !isDisabled && isChecked,
          }
        )}
      >
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            {isChecked && (
              <m.i
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <CheckIcon
                  className={clsx('h-2 text-black', {
                    'text-gray-8': isDisabled,
                  })}
                />
              </m.i>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>

      {labelTitle && <span className="text-base font-medium">{labelTitle}</span>}
    </label>
    {labelDescription && (
      <p className="mt-2 text-[15px] font-light leading-tight text-gray-9">{labelDescription}</p>
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
