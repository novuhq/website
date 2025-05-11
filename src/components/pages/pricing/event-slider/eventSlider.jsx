import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import InputRange from 'components/shared/input-range';

const thumbWidth = 28; // in pixels

// Define event ranges with more granular increments
const EVENT_RANGES = {
  0: '1000',
  10: '5000',
  20: '10000',
  30: '30000',
  40: '50000',
  50: '100000',
  60: '150000',
  70: '200000',
  80: '250000',
  90: '500000',
  100: '5000000',
};

// Define tier boundaries for visual feedback
const TIER_BOUNDARIES = {
  Free: 10000,
  Pro: 30000,
  Team: 250000,
  Enterprise: 5000000,
};

const EventSlider = ({ onEventChange, className }) => {
  const [rangeValue, setRangeValue] = useState(0);
  const maxValue = 100;

  const eventsFormatter = Intl.NumberFormat('en-US');

  const thumbPosition = `calc(${thumbWidth / 2}px + ${(rangeValue / maxValue) * 100}% - ${
    rangeValue / maxValue
  } * ${thumbWidth}px)`;

  const blurDisplay = Number(rangeValue) === 0 ? 'none' : 'block';

  // Calculate current tier based on event count
  const currentTier = useMemo(() => {
    const eventCount = Number(EVENT_RANGES[rangeValue]);
    if (eventCount <= TIER_BOUNDARIES.Free) return 'Free';
    if (eventCount <= TIER_BOUNDARIES.Pro) return 'Pro';
    if (eventCount <= TIER_BOUNDARIES.Team) return 'Team';
    return 'Enterprise';
  }, [rangeValue]);

  const handleSliderChange = (e) => {
    const newValue = e.target.value;
    setRangeValue(newValue);
    onEventChange(Number(EVENT_RANGES[newValue]));
  };

  return (
    <div className={clsx('mx-auto w-full max-w-4xl rounded-xl bg-[#111018] p-6', className)}>
      <h2 className="mb-6 text-center text-2xl font-medium">Select Your Event Volume</h2>

      <div className="mb-8">
        <div className="mb-2 flex justify-between">
          <span className="text-gray-400 text-sm">Events per month</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {Number(rangeValue) === maxValue
                ? '5M+'
                : eventsFormatter.format(EVENT_RANGES[rangeValue])}{' '}
              events
            </span>
            <span
              className={clsx(
                'rounded-full px-2 py-0.5 text-xs',
                currentTier === 'Free' && 'bg-gray-700 text-gray-300',
                currentTier === 'Pro' && 'bg-blue-900 text-blue-300',
                currentTier === 'Team' && 'bg-purple-900 text-purple-300',
                currentTier === 'Enterprise' && 'bg-green-900 text-green-300'
              )}
            >
              {currentTier}
            </span>
          </div>
        </div>

        <div className="relative">
          <output
            className="absolute -top-[65%] -translate-x-1/2 rounded bg-gray-gradient px-2 py-1 text-xs shadow-output"
            style={{
              left: thumbPosition,
            }}
          >
            {Number(rangeValue) === maxValue
              ? '5M+'
              : eventsFormatter.format(EVENT_RANGES[rangeValue])}
          </output>

          <InputRange
            className=""
            type="range"
            min="0"
            max={maxValue}
            step="10"
            value={rangeValue}
            styleSliderTrackWidth={{
              width: thumbPosition,
            }}
            blurStyles={{
              left: thumbPosition,
              display: blurDisplay,
            }}
            onChange={handleSliderChange}
          />

          <div className="text-gray-500 mt-1.5 flex justify-between">
            <span className="text-sm leading-denser" aria-hidden>
              {eventsFormatter.format(1000)}
            </span>
            <span className="text-sm leading-denser" aria-hidden>
              {`${eventsFormatter.format(5000000)}+`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

EventSlider.propTypes = {
  onEventChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default EventSlider;
