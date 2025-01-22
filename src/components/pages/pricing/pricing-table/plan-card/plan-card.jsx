import clsx from 'clsx';
import React from 'react';

import Button from 'components/shared/button';

import FeatureList from './feature-list';

const PlanCard = ({
  title,
  linkText,
  linkUrl,
  common,
  platform,
  framework,
  inbox,
  account,
  compliance,
  activeTier,
  className,
  currentRow,
}) => {
  const isActive = activeTier === title.split(' ')[0].toLowerCase();

  return (
    <div
      className={clsx(
        'relative flex flex-col rounded-lg after:absolute after:inset-0 after:left-1/2 after:w-[208px] after:-translate-x-1/2 after:rounded-lg after:bg-[#14141FBF] after:opacity-0 after:transition-all after:duration-500 after:ease-in-out',
        isActive && 'after:opacity-100',
        className
      )}
    >
      <div className={clsx('z-10 flex flex-col rounded-lg py-5')}>
        <div className="flex flex-col space-y-3 px-[70px] lg:px-[27px] md:px-8">
          <h3 className="text-[24px] tracking-snug">{title}</h3>
          {linkText && linkUrl && (
            <Button
              theme={isActive ? 'white-filled' : 'gray-outline'}
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
        <FeatureList features={common} currentRow={currentRow} />
        <FeatureList features={platform} currentRow={currentRow} />
        <FeatureList features={framework} currentRow={currentRow} />
        <FeatureList features={inbox} currentRow={currentRow} />
        <FeatureList features={account} currentRow={currentRow} />
        <FeatureList features={compliance} currentRow={currentRow} />
      </div>
    </div>
  );
};

export default PlanCard;
