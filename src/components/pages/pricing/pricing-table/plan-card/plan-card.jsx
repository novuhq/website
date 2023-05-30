import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';

import FeatureList from './feature-list';

const PlanCard = ({
  title,
  linkText,
  linkUrl,
  platform,
  inApp,
  advancedFeatures,
  security,
  activeTier,
  className,
  currentRow,
}) => {
  const isActive = activeTier.value === title.split(' ')[0].toLowerCase();

  return (
    <div
      className={clsx(
        'relative flex flex-col overflow-hidden rounded-lg text-center after:absolute after:inset-0 after:-z-10 after:rounded-lg after:bg-pink-yellow-gradient after:opacity-0 after:transition-all after:duration-500 after:ease-in-out',
        isActive && 'p-px after:opacity-100',
        className
      )}
    >
      <div
        className={clsx(
          'flex flex-col rounded-lg py-5 text-left',
          isActive ? 'bg-gray-1' : 'bg-black'
        )}
      >
        <div className="flex flex-col space-y-3 px-[52px] lg:px-10 md:px-8">
          <h3 className="text-xl">{title}</h3>
          {linkText && linkUrl && (
            <Button
              theme={isActive ? 'pink-to-yellow-gradient' : 'gray-outline'}
              size="xs"
              to={linkUrl}
              onClick={() =>
                window?.analytics?.track('Pricing Event: Click the CTA Button in the table', {
                  packageType: title,
                  sliderValue: activeTier.rangeValue,
                })
              }
            >
              {linkText}
            </Button>
          )}
        </div>
        <FeatureList features={platform} currentRow={currentRow} />
        <FeatureList features={inApp} currentRow={currentRow} />
        <FeatureList features={advancedFeatures} currentRow={currentRow} />
        <FeatureList features={security} currentRow={currentRow} />
      </div>
    </div>
  );
};

export default PlanCard;
