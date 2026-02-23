import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import GradientBorder from 'components/shared/gradient-border';

const ScheduleCallCard = ({ onScheduleClick }) => {
  const handleClick = () => {
    // Track schedule call button click analytics
    window?.analytics?.track('Pricing Event: Click Schedule a Call card', {
      source: 'pricing_table_schedule_card',
    });
    onScheduleClick('pricing_table_schedule_card');
  };

  return (
    <section className="safe-paddings pb-0 pt-20 lg:pb-0 lg:pt-16 md:pb-0 md:pt-12 sm:pb-0 sm:pt-10">
      <div className="container lg:px-8 sm:px-5">
        <div className="relative mx-auto max-w-[800px]">
          <div className="relative z-20 overflow-hidden rounded-lg bg-transparent px-8 py-6 lg:px-6 lg:py-5 md:px-5 md:py-4">
            <div className="relative z-20 flex items-center justify-between gap-6 md:flex-col md:text-center">
              <div className="flex-1">
                <h3 className="text-[18px] font-medium leading-tight tracking-snug text-white md:text-[16px]">
                  Not sure what plan fits your needs?
                </h3>
                <p className="mt-2 text-[14px] font-book leading-snug tracking-snug text-gray-9">
                  Schedule a call with our team to find the perfect plan for your use case
                </p>
              </div>
              <div className="shrink-0">
                <Button
                  className="h-[40px] px-6 md:h-[38px]"
                  size="sm"
                  theme="white-filled"
                  onClick={handleClick}
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
            <span
              className="pointer-events-none absolute left-1/2 top-0 z-0 h-[200px] w-[400px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(102,49,121,0.08)_0%,_rgba(0,0,0,0)_100%)]"
              aria-hidden
            />
          </div>
          <GradientBorder
            className="border-image-[linear-gradient(246.73deg,rgba(60,60,83,0.6)_15.63%,rgba(52,52,71,0.4)_84.63%)]"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

ScheduleCallCard.propTypes = {
  onScheduleClick: PropTypes.func,
};

ScheduleCallCard.defaultProps = {
  onScheduleClick: () => {},
};

export default ScheduleCallCard;
